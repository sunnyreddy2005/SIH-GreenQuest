export interface GameProfile {
  userId: string;
  level: number;
  xp: number;
  xpToNextLevel: number;
  streak: number;
  longestStreak: number;
  lastActiveDate: string;
  achievements: Achievement[];
  unlockedFeatures: string[];
  energyPoints: number;
  maxEnergy: number;
  lastEnergyRefresh: string;
  inventory: InventoryItem[];
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  category: 'learning' | 'challenge' | 'social' | 'streak' | 'special';
  requirement: string;
  reward: {
    xp: number;
    items?: string[];
    unlocks?: string[];
  };
  unlockedAt?: string;
  progress?: number;
  maxProgress?: number;
}

export interface InventoryItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  type: 'power-up' | 'cosmetic' | 'utility';
  quantity: number;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

export interface MiniGame {
  id: string;
  name: string;
  description: string;
  type: 'quiz' | 'puzzle' | 'memory' | 'reaction' | 'strategy';
  difficulty: 'easy' | 'medium' | 'hard';
  timeLimit: number; // in seconds
  xpReward: number;
  energyCost: number;
  category: 'water' | 'energy' | 'waste' | 'biodiversity';
  unlockLevel: number;
}

export interface Tournament {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  type: 'individual' | 'team' | 'school';
  category: 'water' | 'energy' | 'waste' | 'biodiversity' | 'mixed';
  participants: TournamentParticipant[];
  prizes: TournamentPrize[];
  status: 'upcoming' | 'active' | 'ended';
  rules: string[];
}

export interface TournamentParticipant {
  userId: string;
  name: string;
  school: string;
  score: number;
  rank: number;
  avatar: string;
}

export interface TournamentPrize {
  rank: number;
  title: string;
  xp: number;
  items: string[];
  badge?: string;
}

export interface QuestChain {
  id: string;
  name: string;
  description: string;
  icon: string;
  quests: Quest[];
  totalXP: number;
  unlockLevel: number;
  category: 'water' | 'energy' | 'waste' | 'biodiversity';
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  type: 'module' | 'challenge' | 'minigame' | 'social';
  target: string; // module id, challenge id, etc.
  xpReward: number;
  completed: boolean;
  progress?: number;
  maxProgress?: number;
}

// Gaming Achievements
export const gameAchievements: Achievement[] = [
  {
    id: 'first-steps',
    name: 'First Steps',
    description: 'Complete your first learning module',
    icon: '👶',
    rarity: 'common',
    category: 'learning',
    requirement: 'Complete 1 module',
    reward: { xp: 50 }
  },
  {
    id: 'streak-master',
    name: 'Streak Master',
    description: 'Maintain a 7-day learning streak',
    icon: '🔥',
    rarity: 'rare',
    category: 'streak',
    requirement: 'Login 7 consecutive days',
    reward: { xp: 200, items: ['energy-boost'] }
  },
  {
    id: 'water-wizard',
    name: 'Water Wizard',
    description: 'Complete all water conservation modules',
    icon: '🧙‍♂️',
    rarity: 'epic',
    category: 'learning',
    requirement: 'Complete all water modules',
    reward: { xp: 500, unlocks: ['advanced-challenges'] }
  },
  {
    id: 'eco-legend',
    name: 'Eco Legend',
    description: 'Reach level 10 and complete 50 challenges',
    icon: '⭐',
    rarity: 'legendary',
    category: 'special',
    requirement: 'Level 10 + 50 challenges',
    reward: { xp: 1000, items: ['legendary-badge'], unlocks: ['mentor-mode'] }
  },
  {
    id: 'photo-hunter',
    name: 'Photo Hunter',
    description: 'Upload 20 challenge photos',
    icon: '📸',
    rarity: 'rare',
    category: 'challenge',
    requirement: 'Upload 20 photos',
    reward: { xp: 300, items: ['camera-filter'] }
  },
  {
    id: 'quiz-champion',
    name: 'Quiz Champion',
    description: 'Score 100% on 5 different quizzes',
    icon: '🏆',
    rarity: 'epic',
    category: 'learning',
    requirement: 'Perfect scores on 5 quizzes',
    reward: { xp: 400, unlocks: ['quiz-master-mode'] }
  },
  {
    id: 'team-player',
    name: 'Team Player',
    description: 'Help 3 classmates complete challenges',
    icon: '🤝',
    rarity: 'rare',
    category: 'social',
    requirement: 'Assist 3 students',
    reward: { xp: 250, items: ['mentor-badge'] }
  }
];

// Mini Games
export const miniGames: MiniGame[] = [
  {
    id: 'water-drop-catch',
    name: 'Water Drop Catch',
    description: 'Catch falling water drops to save them from waste',
    type: 'reaction',
    difficulty: 'easy',
    timeLimit: 60,
    xpReward: 50,
    energyCost: 10,
    category: 'water',
    unlockLevel: 1
  },
  {
    id: 'eco-memory',
    name: 'Eco Memory Match',
    description: 'Match environmental facts with their solutions',
    type: 'memory',
    difficulty: 'medium',
    timeLimit: 120,
    xpReward: 75,
    energyCost: 15,
    category: 'water',
    unlockLevel: 2
  },
  {
    id: 'water-cycle-puzzle',
    name: 'Water Cycle Puzzle',
    description: 'Arrange the water cycle process in correct order',
    type: 'puzzle',
    difficulty: 'medium',
    timeLimit: 180,
    xpReward: 100,
    energyCost: 20,
    category: 'water',
    unlockLevel: 3
  },
  {
    id: 'conservation-quiz',
    name: 'Lightning Conservation Quiz',
    description: 'Answer rapid-fire questions about water conservation',
    type: 'quiz',
    difficulty: 'hard',
    timeLimit: 90,
    xpReward: 125,
    energyCost: 25,
    category: 'water',
    unlockLevel: 4
  }
];

// Quest Chains
export const questChains: QuestChain[] = [
  {
    id: 'water-warrior-path',
    name: 'Water Warrior Path',
    description: 'Master the art of water conservation',
    icon: '💧',
    unlockLevel: 1,
    category: 'water',
    totalXP: 1000,
    quests: [
      {
        id: 'learn-basics',
        title: 'Learn the Basics',
        description: 'Complete Water Conservation Basics module',
        type: 'module',
        target: 'water-basics',
        xpReward: 100,
        completed: false
      },
      {
        id: 'first-challenge',
        title: 'Take Action',
        description: 'Complete your first water challenge',
        type: 'challenge',
        target: 'save-water-week',
        xpReward: 200,
        completed: false
      },
      {
        id: 'play-minigame',
        title: 'Game Master',
        description: 'Play 3 water-related mini-games',
        type: 'minigame',
        target: 'water-games',
        xpReward: 150,
        completed: false,
        progress: 0,
        maxProgress: 3
      },
      {
        id: 'advanced-learning',
        title: 'Advanced Studies',
        description: 'Complete Advanced Water Conservation module',
        type: 'module',
        target: 'water-conservation',
        xpReward: 200,
        completed: false
      },
      {
        id: 'help-others',
        title: 'Spread the Word',
        description: 'Help 2 classmates with their challenges',
        type: 'social',
        target: 'mentor-activity',
        xpReward: 250,
        completed: false,
        progress: 0,
        maxProgress: 2
      },
      {
        id: 'master-challenge',
        title: 'Ultimate Challenge',
        description: 'Complete the Rain Harvesting challenge',
        type: 'challenge',
        target: 'rain-harvest',
        xpReward: 300,
        completed: false
      }
    ]
  }
];

// Tournaments
export const activeTournaments: Tournament[] = [
  {
    id: 'water-conservation-championship',
    name: 'Water Conservation Championship',
    description: 'School-wide tournament to find the ultimate water warrior',
    startDate: '2025-09-15',
    endDate: '2025-09-22',
    type: 'school',
    category: 'water',
    status: 'upcoming',
    participants: [],
    rules: [
      'Complete water-related challenges and modules',
      'Each challenge completion = 100 points',
      'Module completion = 200 points',
      'Bonus points for photo quality and creativity'
    ],
    prizes: [
      {
        rank: 1,
        title: 'Water Conservation Champion',
        xp: 1000,
        items: ['champion-crown', 'golden-badge'],
        badge: 'tournament-winner'
      },
      {
        rank: 2,
        title: 'Eco Warrior',
        xp: 750,
        items: ['silver-badge', 'eco-cape'],
        badge: 'tournament-runner-up'
      },
      {
        rank: 3,
        title: 'Conservation Hero',
        xp: 500,
        items: ['bronze-badge', 'hero-medal'],
        badge: 'tournament-third'
      }
    ]
  }
];

// Inventory Items
export const inventoryItems: InventoryItem[] = [
  {
    id: 'energy-boost',
    name: 'Energy Boost',
    description: 'Instantly restore 50 energy points',
    icon: '⚡',
    type: 'power-up',
    quantity: 0,
    rarity: 'common'
  },
  {
    id: 'xp-multiplier',
    name: 'XP Multiplier',
    description: 'Double XP for next 30 minutes',
    icon: '✨',
    type: 'power-up',
    quantity: 0,
    rarity: 'rare'
  },
  {
    id: 'camera-filter',
    name: 'Eco Camera Filter',
    description: 'Special filter for challenge photos',
    icon: '📱',
    type: 'utility',
    quantity: 0,
    rarity: 'rare'
  },
  {
    id: 'champion-crown',
    name: 'Champion Crown',
    description: 'Symbol of tournament victory',
    icon: '👑',
    type: 'cosmetic',
    quantity: 0,
    rarity: 'legendary'
  },
  {
    id: 'mentor-badge',
    name: 'Mentor Badge',
    description: 'Shows you help other students',
    icon: '🎖️',
    type: 'cosmetic',
    quantity: 0,
    rarity: 'epic'
  }
];

// Level progression system
export const levelRequirements = [
  { level: 1, xpRequired: 0, title: 'Eco Newbie', perks: ['Basic features unlocked'] },
  { level: 2, xpRequired: 100, title: 'Green Sprout', perks: ['Mini-games unlocked'] },
  { level: 3, xpRequired: 250, title: 'Eco Explorer', perks: ['Advanced challenges unlocked'] },
  { level: 4, xpRequired: 450, title: 'Nature Friend', perks: ['Team challenges unlocked'] },
  { level: 5, xpRequired: 700, title: 'Conservation Cadet', perks: ['Mentor features unlocked'] },
  { level: 6, xpRequired: 1000, title: 'Eco Warrior', perks: ['Tournament access'] },
  { level: 7, xpRequired: 1350, title: 'Green Guardian', perks: ['Custom challenges'] },
  { level: 8, xpRequired: 1750, title: 'Nature Defender', perks: ['Leadership board'] },
  { level: 9, xpRequired: 2200, title: 'Eco Champion', perks: ['Special events access'] },
  { level: 10, xpRequired: 2700, title: 'Sustainability Master', perks: ['All features unlocked'] }
];

// Daily challenges for gamification
export const dailyChallenges = [
  {
    id: 'daily-1',
    title: 'Quick Learner',
    description: 'Complete 1 lesson today',
    xpReward: 25,
    type: 'daily'
  },
  {
    id: 'daily-2',
    title: 'Game Player',
    description: 'Play 2 mini-games today',
    xpReward: 30,
    type: 'daily'
  },
  {
    id: 'daily-3',
    title: 'Social Helper',
    description: 'Comment on a classmate\'s challenge',
    xpReward: 35,
    type: 'daily'
  }
];

// Gaming utilities
export class GameEngine {
  static calculateLevel(xp: number): number {
    for (let i = levelRequirements.length - 1; i >= 0; i--) {
      if (xp >= levelRequirements[i].xpRequired) {
        return levelRequirements[i].level;
      }
    }
    return 1;
  }

  static getXPToNextLevel(currentXP: number): number {
    const currentLevel = this.calculateLevel(currentXP);
    const nextLevelReq = levelRequirements.find(req => req.level === currentLevel + 1);
    return nextLevelReq ? nextLevelReq.xpRequired - currentXP : 0;
  }

  static getLevelTitle(level: number): string {
    const levelData = levelRequirements.find(req => req.level === level);
    return levelData ? levelData.title : 'Unknown';
  }

  static checkAchievements(userStats: any): Achievement[] {
    const earned: Achievement[] = [];
    
    // Check each achievement condition
    gameAchievements.forEach(achievement => {
      switch (achievement.id) {
        case 'first-steps':
          if (userStats.completedModules >= 1) earned.push(achievement);
          break;
        case 'streak-master':
          if (userStats.streak >= 7) earned.push(achievement);
          break;
        case 'water-wizard':
          if (userStats.completedWaterModules >= 2) earned.push(achievement);
          break;
        // Add more achievement checks
      }
    });

    return earned;
  }

  static calculateEnergy(lastRefresh: string, maxEnergy: number): number {
    const now = new Date();
    const lastRefreshDate = new Date(lastRefresh);
    const hoursElapsed = (now.getTime() - lastRefreshDate.getTime()) / (1000 * 60 * 60);
    
    // Restore 1 energy per hour, max at maxEnergy
    return Math.min(maxEnergy, Math.floor(hoursElapsed));
  }

  static updateStreak(lastActiveDate: string): { streak: number; isActive: boolean } {
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toDateString();
    const lastActive = new Date(lastActiveDate).toDateString();

    if (lastActive === today) {
      // Already active today, maintain streak
      return { streak: 0, isActive: true }; // Don't increment if already counted today
    } else if (lastActive === yesterday) {
      // Active yesterday, increment streak
      return { streak: 1, isActive: true };
    } else {
      // Streak broken
      return { streak: 0, isActive: false };
    }
  }
}