import { User, demoUsers } from '../data/demoAccounts';
import { GameProfile, Achievement, GameEngine, gameAchievements, inventoryItems, levelRequirements } from '../data/gameData';

const AUTH_STORAGE_KEY = 'greenquest_auth';
const USER_STORAGE_KEY = 'greenquest_current_user';
const GAME_PROFILES_KEY = 'greenquest_game_profiles';

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

export class AuthService {
  static login(email: string, password: string): AuthState {
    // Find user in demo accounts
    const user = demoUsers.find(u => u.email === email && u.password === password);
    
    if (user) {
      // Update last active
      const updatedUser = { ...user, lastActive: new Date().toISOString().split('T')[0] };
      
      // Store auth state
      localStorage.setItem(AUTH_STORAGE_KEY, 'true');
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(updatedUser));
      
      return {
        isAuthenticated: true,
        user: updatedUser
      };
    }
    
    return {
      isAuthenticated: false,
      user: null
    };
  }

  static logout(): void {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    localStorage.removeItem(USER_STORAGE_KEY);
  }

  static getCurrentUser(): AuthState {
    const isAuthenticated = localStorage.getItem(AUTH_STORAGE_KEY) === 'true';
    const userStr = localStorage.getItem(USER_STORAGE_KEY);
    
    if (isAuthenticated && userStr) {
      try {
        const user = JSON.parse(userStr) as User;
        return {
          isAuthenticated: true,
          user
        };
      } catch (error) {
        // Clear invalid data
        this.logout();
      }
    }
    
    return {
      isAuthenticated: false,
      user: null
    };
  }

  static updateUser(updatedUser: User): void {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(updatedUser));
  }

  static getAllUsers(): User[] {
    return demoUsers;
  }

  static getUsersBySchool(school: string): User[] {
    return demoUsers.filter(user => user.school === school && user.userType === 'student');
  }

  static getLeaderboard(school?: string): User[] {
    let users = demoUsers.filter(user => user.userType === 'student');
    
    if (school) {
      users = users.filter(user => user.school === school);
    }
    
    return users.sort((a, b) => b.points - a.points);
  }

  static addPointsToUser(userId: string, points: number): User | null {
    const user = demoUsers.find(u => u.id === userId);
    if (user) {
      user.points += points;
      
      // Update level based on points
      user.level = Math.floor(user.points / 300) + 1;
      
      // Update current user if it's the same user
      const currentAuth = this.getCurrentUser();
      if (currentAuth.user && currentAuth.user.id === userId) {
        this.updateUser(user);
      }
      
      return user;
    }
    return null;
  }

  static addBadgeToUser(userId: string, badgeId: string): User | null {
    const user = demoUsers.find(u => u.id === userId);
    if (user && !user.badges.includes(badgeId)) {
      user.badges.push(badgeId);
      
      // Update current user if it's the same user
      const currentAuth = this.getCurrentUser();
      if (currentAuth.user && currentAuth.user.id === userId) {
        this.updateUser(user);
      }
      
      return user;
    }
    return null;
  }

  static completeModule(userId: string, moduleId: string): User | null {
    const user = demoUsers.find(u => u.id === userId);
    if (user && !user.completedModules.includes(moduleId)) {
      user.completedModules.push(moduleId);
      
      // Update current user if it's the same user
      const currentAuth = this.getCurrentUser();
      if (currentAuth.user && currentAuth.user.id === userId) {
        this.updateUser(user);
      }
      
      return user;
    }
    return null;
  }

  static completeChallenge(userId: string, challengeId: string): User | null {
    const user = demoUsers.find(u => u.id === userId);
    if (user && !user.completedChallenges.includes(challengeId)) {
      user.completedChallenges.push(challengeId);
      
      // Update current user if it's the same user
      const currentAuth = this.getCurrentUser();
      if (currentAuth.user && currentAuth.user.id === userId) {
        this.updateUser(user);
      }
      
      return user;
    }
    return null;
  }

  // Gaming System Methods
  static getGameProfile(userId: string): GameProfile | null {
    const profiles = this.getAllGameProfiles();
    return profiles[userId] || null;
  }

  static createGameProfile(userId: string): GameProfile {
    const profile: GameProfile = {
      userId,
      level: 1,
      xp: 0,
      xpToNextLevel: 100,
      streak: 0,
      longestStreak: 0,
      lastActiveDate: new Date().toISOString(),
      achievements: [],
      unlockedFeatures: ['basic-features'],
      energyPoints: 200, // Increased from 100 for better game accessibility
      maxEnergy: 200, // Increased from 100 for better game accessibility  
      lastEnergyRefresh: new Date().toISOString(),
      inventory: [
        // Give starter energy boosts
        { ...inventoryItems.find(item => item.id === 'energy-boost')!, quantity: 3 }
      ]
    };
    
    this.saveGameProfile(userId, profile);
    return profile;
  }

  static updateGameProfile(userId: string, updates: Partial<GameProfile>): GameProfile | null {
    const profiles = this.getAllGameProfiles();
    const currentProfile = profiles[userId];
    
    if (currentProfile) {
      const updatedProfile = { ...currentProfile, ...updates };
      this.saveGameProfile(userId, updatedProfile);
      return updatedProfile;
    }
    
    return null;
  }

  static addXP(userId: string, xpAmount: number): GameProfile | null {
    let profile = this.getGameProfile(userId);
    if (!profile) {
      profile = this.createGameProfile(userId);
    }

    const oldLevel = profile.level;
    profile.xp += xpAmount;
    profile.level = GameEngine.calculateLevel(profile.xp);
    profile.xpToNextLevel = GameEngine.getXPToNextLevel(profile.xp);

    // Check for level up rewards
    if (profile.level > oldLevel) {
      this.handleLevelUp(userId, profile.level);
    }

    // Check for new achievements
    const userStats = this.getUserStats(userId);
    const newAchievements = GameEngine.checkAchievements(userStats);
    
    newAchievements.forEach(achievement => {
      if (!profile!.achievements.find(a => a.id === achievement.id)) {
        profile!.achievements.push({
          ...achievement,
          unlockedAt: new Date().toISOString()
        });
        
        // Give achievement rewards
        if (achievement.reward.xp) {
          profile!.xp += achievement.reward.xp;
        }
        
        if (achievement.reward.items) {
          this.addItemsToInventory(userId, achievement.reward.items);
        }
      }
    });

    this.saveGameProfile(userId, profile);
    return profile;
  }

  static updateDailyStreak(userId: string): GameProfile | null {
    let profile = this.getGameProfile(userId);
    if (!profile) {
      profile = this.createGameProfile(userId);
    }

    const streakUpdate = GameEngine.updateStreak(profile.lastActiveDate);
    
    if (streakUpdate.isActive && streakUpdate.streak > 0) {
      profile.streak += streakUpdate.streak;
      profile.longestStreak = Math.max(profile.longestStreak, profile.streak);
      
      // Streak bonus XP
      const bonusXP = profile.streak * 5;
      profile.xp += bonusXP;
      
      // Daily streak rewards
      if (profile.streak === 7) {
        this.addItemsToInventory(userId, ['energy-boost']);
      } else if (profile.streak === 30) {
        this.addItemsToInventory(userId, ['xp-multiplier']);
      }
    } else if (!streakUpdate.isActive) {
      profile.streak = 1; // Reset to 1 for today's login
    }

    profile.lastActiveDate = new Date().toISOString();
    this.saveGameProfile(userId, profile);
    
    return profile;
  }

  static useEnergy(userId: string, amount: number): boolean {
    const profile = this.getGameProfile(userId);
    if (!profile) return false;

    // Refresh energy if needed
    const currentEnergy = GameEngine.calculateEnergy(profile.lastEnergyRefresh, profile.maxEnergy);
    const totalEnergy = Math.min(profile.maxEnergy, profile.energyPoints + currentEnergy);

    if (totalEnergy >= amount) {
      profile.energyPoints = totalEnergy - amount;
      profile.lastEnergyRefresh = new Date().toISOString();
      this.saveGameProfile(userId, profile);
      return true;
    }
    
    return false;
  }

  static addItemsToInventory(userId: string, itemIds: string[]): void {
    const profile = this.getGameProfile(userId);
    if (!profile) return;

    itemIds.forEach(itemId => {
      const existingItem = profile.inventory.find(item => item.id === itemId);
      const itemTemplate = inventoryItems.find(item => item.id === itemId);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else if (itemTemplate) {
        profile.inventory.push({ ...itemTemplate, quantity: 1 });
      }
    });

    this.saveGameProfile(userId, profile);
  }

  static useInventoryItem(userId: string, itemId: string): boolean {
    const profile = this.getGameProfile(userId);
    if (!profile) return false;

    const item = profile.inventory.find(item => item.id === itemId);
    if (!item || item.quantity <= 0) return false;

    // Apply item effects
    switch (itemId) {
      case 'energy-boost':
        profile.energyPoints = Math.min(profile.maxEnergy, profile.energyPoints + 50);
        break;
      case 'xp-multiplier':
        // This would be handled in the UI with a temporary effect
        break;
    }

    item.quantity -= 1;
    if (item.quantity === 0) {
      profile.inventory = profile.inventory.filter(i => i.id !== itemId);
    }

    this.saveGameProfile(userId, profile);
    return true;
  }

  static getUserStats(userId: string): any {
    const user = demoUsers.find(u => u.id === userId);
    const profile = this.getGameProfile(userId);
    
    if (!user) return {};

    return {
      completedModules: user.completedModules.length,
      completedChallenges: user.completedChallenges.length,
      completedWaterModules: user.completedModules.filter(moduleId => 
        moduleId.includes('water')).length,
      streak: profile?.streak || 0,
      level: profile?.level || 1,
      points: user.points,
      badges: user.badges.length
    };
  }

  private static handleLevelUp(userId: string, newLevel: number): void {
    const levelData = levelRequirements.find(req => req.level === newLevel);
    if (!levelData) return;

    // Unlock new features based on level
    const profile = this.getGameProfile(userId);
    if (!profile) return;

    // Add level-specific unlocks
    if (newLevel === 2 && !profile.unlockedFeatures.includes('mini-games')) {
      profile.unlockedFeatures.push('mini-games');
    } else if (newLevel === 4 && !profile.unlockedFeatures.includes('team-challenges')) {
      profile.unlockedFeatures.push('team-challenges');
    } else if (newLevel === 6 && !profile.unlockedFeatures.includes('tournaments')) {
      profile.unlockedFeatures.push('tournaments');
    }

    this.saveGameProfile(userId, profile);
  }

  private static getAllGameProfiles(): Record<string, GameProfile> {
    const profiles = localStorage.getItem(GAME_PROFILES_KEY);
    return profiles ? JSON.parse(profiles) : {};
  }

  private static saveGameProfile(userId: string, profile: GameProfile): void {
    const profiles = this.getAllGameProfiles();
    profiles[userId] = profile;
    localStorage.setItem(GAME_PROFILES_KEY, JSON.stringify(profiles));
  }
}

// Demo account credentials for easy testing
export const demoCredentials = {
  students: [
    { email: 'arjun.patel@greenwood.edu', password: 'demo123', name: 'Arjun Patel' },
    { email: 'maya.singh@greenwood.edu', password: 'demo123', name: 'Maya Singh' },
    { email: 'rahul.sharma@greenwood.edu', password: 'demo123', name: 'Rahul Sharma' },
    { email: 'ananya.reddy@greenwood.edu', password: 'demo123', name: 'Ananya Reddy' },
    { email: 'karan.joshi@greenwood.edu', password: 'demo123', name: 'Karan Joshi' },
    { email: 'sneha.gupta@greenwood.edu', password: 'demo123', name: 'Sneha Gupta' },
    { email: 'vikram.das@greenwood.edu', password: 'demo123', name: 'Vikram Das' },
    { email: 'ishita.verma@greenwood.edu', password: 'demo123', name: 'Ishita Verma' }
  ],
  teacher: { email: 'priya.agarwal@greenwood.edu', password: 'demo123', name: 'Dr. Priya Agarwal' },
  admin: { email: 'rajesh.kumar@greenquest.com', password: 'admin123', name: 'Mr. Rajesh Kumar' }
};