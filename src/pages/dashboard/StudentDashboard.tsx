import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { AuthService } from '../../utils/auth';
import { allModules, allChallenges, badges } from '../../data/demoAccounts';
import { 
  LogOut, 
  Trophy, 
  Star, 
  Award, 
  BookOpen, 
  Target, 
  Users, 
  Droplets,
  Camera,
  CheckCircle,
  TrendingUp,
  Upload,
  X,
  ImageIcon,
  Gamepad2,
  Zap,
  ChevronUp,
  Activity,
  Brain,
  Timer,
  BarChart3,
  Flame,
  Medal,
  Target as TargetIcon,
  Recycle,
  Leaf,
  Globe
} from 'lucide-react';
import GameDashboard from './GameDashboard';

// Animated Environmental Elements Component
const AnimatedEnvironment = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
    {/* Enhanced CSS animations */}
    <style dangerouslySetInnerHTML={{
      __html: `
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-18px) translateX(10px) rotate(4deg); }
          50% { transform: translateY(-10px) translateX(-8px) rotate(-4deg); }
          75% { transform: translateY(-25px) translateX(12px) rotate(3deg); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          33% { transform: translateY(-22px) translateX(-10px) rotate(6deg); }
          66% { transform: translateY(-14px) translateX(8px) rotate(-6deg); }
        }
        
        @keyframes float-strong {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(-30px) translateX(15px) rotate(10deg); }
        }
        
        @keyframes sway-trees {
          0%, 100% { transform: translateX(0px) rotate(0deg); }
          25% { transform: translateX(10px) rotate(2deg); }
          75% { transform: translateX(-10px) rotate(-2deg); }
        }
        
        @keyframes sparkle-dance {
          0%, 100% { opacity: 0.3; transform: scale(1) rotate(0deg); }
          25% { opacity: 0.7; transform: scale(1.3) rotate(90deg); }
          50% { opacity: 1; transform: scale(1.5) rotate(180deg); }
          75% { opacity: 0.7; transform: scale(1.2) rotate(270deg); }
        }
        
        @keyframes drift-upward {
          0% { 
            transform: translateX(-30px) translateY(100vh) rotate(0deg) scale(0.8); 
            opacity: 0;
          }
          15% { opacity: 0.6; }
          85% { opacity: 0.6; }
          100% { 
            transform: translateX(30px) translateY(-100px) rotate(180deg) scale(1.2); 
            opacity: 0;
          }
        }
        
        @keyframes leaf-dance {
          0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
          25% { transform: translateY(-15px) rotate(5deg) scale(1.1); }
          50% { transform: translateY(-8px) rotate(-3deg) scale(0.95); }
          75% { transform: translateY(-20px) rotate(7deg) scale(1.05); }
        }
        
        .animate-float-gentle { animation: float-gentle 8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 10s ease-in-out infinite; }
        .animate-float-strong { animation: float-strong 12s ease-in-out infinite; }
        .animate-sway-trees { animation: sway-trees 6s ease-in-out infinite; }
        .animate-sparkle-dance { animation: sparkle-dance 4s ease-in-out infinite; }
        .animate-drift-upward { animation: drift-upward 18s linear infinite; }
        .animate-leaf-dance { animation: leaf-dance 7s ease-in-out infinite; }
      `
    }} />
    
    {/* Background trees with enhanced sway */}
    <div className="absolute top-8 left-8">
      <Leaf className="h-12 w-12 text-green-300/30 animate-sway-trees" />
    </div>
    <div className="absolute top-16 right-16">
      <Globe className="h-14 w-14 text-emerald-200/25 animate-sway-trees" style={{ animationDelay: '2s' }} />
    </div>
    <div className="absolute bottom-20 left-12">
      <Recycle className="h-13 w-13 text-green-200/35 animate-sway-trees" style={{ animationDelay: '4s' }} />
    </div>
    <div className="absolute top-1/3 right-10">
      <Leaf className="h-10 w-10 text-teal-300/25 animate-sway-trees" style={{ animationDelay: '1s' }} />
    </div>
    <div className="absolute bottom-1/3 right-20">
      <Globe className="h-11 w-11 text-green-400/20 animate-sway-trees" style={{ animationDelay: '3s' }} />
    </div>
    
    {/* Enhanced floating leaves with realistic motion */}
    {[...Array(18)].map((_, i) => (
      <div
        key={`leaf-${i}`}
        className={`absolute animate-leaf-dance opacity-25`}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 10}s`,
          animationDuration: `${6 + Math.random() * 4}s`,
        }}
      >
        <Leaf 
          className={`h-${3 + Math.floor(Math.random() * 4)} w-${3 + Math.floor(Math.random() * 4)} ${
            ['text-green-400', 'text-emerald-500', 'text-teal-400', 'text-lime-500'][i % 4]
          } drop-shadow-sm`}
          style={{
            transform: `rotate(${Math.random() * 360}deg)`,
            filter: 'blur(0.2px)',
          }}
        />
      </div>
    ))}
    
    {/* Floating environmental icons */}
    {[...Array(8)].map((_, i) => (
      <div
        key={`envicon-${i}`}
        className={`absolute animate-float-${['gentle', 'medium', 'strong'][i % 3]} opacity-20`}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 8}s`,
          animationDuration: `${9 + Math.random() * 3}s`,
        }}
      >
        {[Globe, Recycle, Leaf][i % 3] && React.createElement([Globe, Recycle, Leaf][i % 3], {
          className: `h-${4 + Math.floor(Math.random() * 3)} w-${4 + Math.floor(Math.random() * 3)} ${
            ['text-green-400', 'text-emerald-400', 'text-teal-400'][i % 3]
          }`
        })}
      </div>
    ))}
    
    {/* Enhanced environmental sparkles */}
    {[...Array(20)].map((_, i) => (
      <div
        key={`sparkle-${i}`}
        className="absolute animate-sparkle-dance"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${3 + Math.random() * 2}s`,
        }}
      >
        <div 
          className={`w-1 h-1 rounded-full ${
            ['bg-green-400', 'bg-emerald-400', 'bg-teal-400', 'bg-lime-400'][i % 4]
          }`}
          style={{
            boxShadow: `0 0 6px ${
              ['#10b981', '#34d399', '#14b8a6', '#65a30d'][i % 4]
            }`,
          }}
        />
      </div>
    ))}
    
    {/* Drifting eco particles */}
    {[...Array(12)].map((_, i) => (
      <div
        key={`particle-${i}`}
        className="absolute rounded-full animate-drift-upward opacity-50"
        style={{
          left: `${Math.random() * 100}%`,
          top: `100%`,
          width: `${2 + Math.random() * 4}px`,
          height: `${2 + Math.random() * 4}px`,
          background: `linear-gradient(45deg, ${
            ['#10b981', '#34d399', '#6ee7b7', '#86efac'][i % 4]
          }, ${
            ['#047857', '#059669', '#0d9488', '#15803d'][i % 4]
          })`,
          animationDelay: `${Math.random() * 12}s`,
          animationDuration: `${15 + Math.random() * 8}s`,
          boxShadow: '0 0 8px rgba(16, 185, 129, 0.5)',
        }}
      />
    ))}
  </div>
);

const StudentDashboard = () => {
  const { user, logout, updateUser } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [selectedChallenge, setSelectedChallenge] = useState<string | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: number}>({});
  const [challengeProof, setChallengeProof] = useState<string>('');
  const [uploadedPhotos, setUploadedPhotos] = useState<File[]>([]);
  const [photoPreviewUrls, setPhotoPreviewUrls] = useState<string[]>([]);
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [showStreakAnimation, setShowStreakAnimation] = useState(false);
  const [showAwardModal, setShowAwardModal] = useState(false);
  const [newAward, setNewAward] = useState<any>(null);
  const [streakAnimationCount, setStreakAnimationCount] = useState(0);

  // Early return if user is not available
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading user data...</p>
        </div>
      </div>
    );
  }

  // Streak milestones and awards
  const streakMilestones = [
    { days: 3, award: '🔥', title: 'Fire Starter', points: 50, badge: 'streak-3' },
    { days: 7, award: '⚡', title: 'Week Warrior', points: 100, badge: 'streak-7' },
    { days: 14, award: '💎', title: 'Diamond Dedication', points: 200, badge: 'streak-14' },
    { days: 30, award: '👑', title: 'Monthly Master', points: 500, badge: 'streak-30' },
    { days: 50, award: '🌟', title: 'Star Student', points: 750, badge: 'streak-50' },
    { days: 100, award: '🏆', title: 'Century Champion', points: 1500, badge: 'streak-100' }
  ];

  // Award targets for different achievements
  const awardTargets = [
    {
      id: 'eco-warrior',
      title: 'Eco Warrior',
      description: 'Reach 500 points',
      icon: '🌱',
      target: 500,
      current: user.points,
      type: 'points',
      reward: 'Eco Warrior Badge + 100 bonus points',
      subscriptionReward: '🎵 Spotify Premium - 1 month FREE'
    },
    {
      id: 'module-master',
      title: 'Module Master',
      description: 'Complete all learning modules',
      icon: '📚',
      target: allModules.length,
      current: user.completedModules.length,
      type: 'modules',
      reward: 'Module Master Badge + 200 bonus points',
      subscriptionReward: '📺 Disney+ Hotstar - 2 months FREE'
    },
    {
      id: 'challenge-champion',
      title: 'Challenge Champion',
      description: 'Complete all challenges',
      icon: '🎯',
      target: allChallenges.length,
      current: user.completedChallenges.length,
      type: 'challenges',
      reward: 'Challenge Champion Badge + 300 bonus points',
      subscriptionReward: '📺 Amazon Prime Video - 3 months FREE'
    },
    {
      id: 'knowledge-expert',
      title: 'Knowledge Expert',
      description: 'Reach Level 10',
      icon: '🧠',
      target: 10,
      current: user.level,
      type: 'level',
      reward: 'Knowledge Expert Badge + 250 bonus points',
      subscriptionReward: '📚 Audible - 2 months FREE + 2 books'
    },
    {
      id: 'streak-legend',
      title: 'Streak Legend',
      description: 'Maintain 30-day streak',
      icon: '🔥',
      target: 30,
      current: currentStreak,
      type: 'streak',
      reward: 'Streak Legend Badge + 500 bonus points',
      subscriptionReward: '📺 Netflix Premium - 2 months FREE'
    },
    {
      id: 'top-performer',
      title: 'Top Performer',
      description: 'Reach top 3 in school leaderboard',
      icon: '🏆',
      target: 3,
      current: leaderboard.findIndex(student => student.id === user.id) + 1,
      type: 'rank',
      reward: 'Top Performer Badge + Recognition Certificate',
      subscriptionReward: '🎮 PlayStation Plus - 1 month FREE'
    }
  ];

  // Initialize streak system
  useEffect(() => {
    if (user) {
      initializeStreak();
      const schoolLeaderboard = AuthService.getLeaderboard(user.school);
      setLeaderboard(schoolLeaderboard);
    }
  }, [user]);

  const initializeStreak = () => {
    const today = new Date().toDateString();
    const storedData = localStorage.getItem(`streak_${user?.id}`);
    
    if (storedData) {
      const { lastLoginDate, streak, streakStartDate } = JSON.parse(storedData);
      const lastLogin = new Date(lastLoginDate);
      const now = new Date();
      
      // Calculate days difference
      const diffTime = Math.abs(now.getTime() - lastLogin.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (lastLoginDate === today) {
        // Same day login
        setCurrentStreak(streak);
      } else if (diffDays === 1) {
        // Consecutive day login
        const newStreak = streak + 1;
        setCurrentStreak(newStreak);
        animateStreakIncrease(newStreak);
        updateStreakData(today, newStreak, streakStartDate);
        checkForAwards(newStreak);
      } else if (diffDays > 1) {
        // Streak broken
        setCurrentStreak(1);
        animateStreakIncrease(1);
        updateStreakData(today, 1, today);
      }
    } else {
      // First time login
      setCurrentStreak(1);
      animateStreakIncrease(1);
      updateStreakData(today, 1, today);
    }
  };

  const updateStreakData = (date: string, streak: number, startDate: string) => {
    const streakData = {
      lastLoginDate: date,
      streak: streak,
      streakStartDate: startDate
    };
    localStorage.setItem(`streak_${user?.id}`, JSON.stringify(streakData));
  };

  const animateStreakIncrease = (newStreak: number) => {
    setShowStreakAnimation(true);
    setStreakAnimationCount(newStreak);
    
    // Animate counter from 0 to newStreak
    let count = 0;
    const increment = newStreak / 20; // 20 frames
    const timer = setInterval(() => {
      count += increment;
      if (count >= newStreak) {
        setStreakAnimationCount(newStreak);
        clearInterval(timer);
        setTimeout(() => setShowStreakAnimation(false), 2000);
      } else {
        setStreakAnimationCount(Math.floor(count));
      }
    }, 50);
  };

  const checkForAwards = (streak: number) => {
    const milestone = streakMilestones.find(m => m.days === streak);
    if (milestone && user) {
      // Award points and badge
      const updatedUser = { ...user };
      updatedUser.points += milestone.points;
      updatedUser.level = Math.floor(updatedUser.points / 300) + 1;
      
      if (!updatedUser.badges.includes(milestone.badge)) {
        updatedUser.badges.push(milestone.badge);
      }
      
      updateUser(updatedUser);
      AuthService.updateUser(updatedUser);
      
      // Show award modal
      setNewAward(milestone);
      setShowAwardModal(true);
    }
  };

  useEffect(() => {
    // Load school leaderboard
    if (user) {
      const schoolLeaderboard = AuthService.getLeaderboard(user.school);
      setLeaderboard(schoolLeaderboard);
    }
  }, [user]);

  const availableModules = allModules.filter(module => 
    !module.prerequisites || 
    module.prerequisites.every(prereq => user.completedModules.includes(prereq))
  );

  const availableChallenges = allChallenges.filter(challenge => 
    !user.completedChallenges.includes(challenge.id)
  );

  const handleModuleComplete = (moduleId: string, points: number) => {
    if (user && !user.completedModules.includes(moduleId)) {
      const updatedUser = { ...user };
      updatedUser.completedModules.push(moduleId);
      updatedUser.points += points;
      updatedUser.level = Math.floor(updatedUser.points / 300) + 1;
      
      // Check for new badges
      if (updatedUser.points >= 500 && !updatedUser.badges.includes('eco-warrior')) {
        updatedUser.badges.push('eco-warrior');
      }
      
      updateUser(updatedUser);
      AuthService.updateUser(updatedUser);
      setSelectedModule(null);
    }
  };

  const handleChallengeComplete = (challengeId: string, points: number, badgeId?: string) => {
    if (user && !user.completedChallenges.includes(challengeId)) {
      const updatedUser = { ...user };
      updatedUser.completedChallenges.push(challengeId);
      updatedUser.points += points;
      updatedUser.level = Math.floor(updatedUser.points / 300) + 1;
      
      if (badgeId && !updatedUser.badges.includes(badgeId)) {
        updatedUser.badges.push(badgeId);
      }
      
      // Check for eco-warrior badge
      if (updatedUser.points >= 500 && !updatedUser.badges.includes('eco-warrior')) {
        updatedUser.badges.push('eco-warrior');
      }
      
      updateUser(updatedUser);
      AuthService.updateUser(updatedUser);
      setSelectedChallenge(null);
      setChallengeProof('');
      setUploadedPhotos([]);
      setPhotoPreviewUrls([]);
    }
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newFiles = Array.from(files).slice(0, 5 - uploadedPhotos.length); // Max 5 photos
      const newPhotos = [...uploadedPhotos, ...newFiles];
      setUploadedPhotos(newPhotos);

      // Create preview URLs for the new files
      const newPreviewUrls = newFiles.map(file => URL.createObjectURL(file));
      setPhotoPreviewUrls(prev => [...prev, ...newPreviewUrls]);
    }
  };

  const removePhoto = (index: number) => {
    const newPhotos = uploadedPhotos.filter((_, i) => i !== index);
    const newPreviewUrls = photoPreviewUrls.filter((_, i) => i !== index);
    
    // Revoke the URL to prevent memory leaks
    URL.revokeObjectURL(photoPreviewUrls[index]);
    
    setUploadedPhotos(newPhotos);
    setPhotoPreviewUrls(newPreviewUrls);
  };

  const handleQuizSubmit = (moduleId: string) => {
    const module = allModules.find(m => m.id === moduleId);
    if (!module) return;

    const totalQuestions = module.content.quiz.questions.length;
    const correctAnswers = module.content.quiz.questions.filter(
      (question) => quizAnswers[question.id] === question.correctAnswer
    ).length;
    
    const score = (correctAnswers / totalQuestions) * 100;
    
    if (score >= module.content.quiz.passingScore) {
      handleModuleComplete(moduleId, module.points);
      alert(`Congratulations! You passed with ${score.toFixed(0)}% and earned ${module.points} points!`);
    } else {
      alert(`You scored ${score.toFixed(0)}%. You need ${module.content.quiz.passingScore}% to pass. Try again!`);
    }
    
    setQuizAnswers({});
  };

  const NavTab = ({ id, label, icon: Icon }: { id: string; label: string; icon: any }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
        activeTab === id 
          ? 'bg-green-600 text-white' 
          : 'text-gray-600 hover:bg-green-50 hover:text-green-600'
      }`}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative">
      {/* Animated Environmental Background */}
      <AnimatedEnvironment />
      
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-green-100/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Droplets className="h-8 w-8 text-green-600" />
              <h1 className="text-2xl font-bold text-gray-900">GreenQuest</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{user.name}</p>
                <p className="text-xs text-gray-500">{user.school} - Grade {user.grade}</p>
              </div>
              <div className="flex items-center space-x-2 bg-green-100 px-3 py-1 rounded-full">
                <Trophy className="h-4 w-4 text-green-600" />
                <span className="text-sm font-semibold text-green-800">{user.points} pts</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-100 px-3 py-1 rounded-full">
                <Star className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-800">Level {user.level}</span>
              </div>
              <button
                onClick={logout}
                className="flex items-center space-x-2 text-gray-500 hover:text-gray-700"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-green-100/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 overflow-x-auto py-3">
            <NavTab id="overview" label="🌱 Overview" icon={TrendingUp} />
            <NavTab id="game" label="🎮 Games" icon={Gamepad2} />
            <NavTab id="modules" label="📚 Learn" icon={BookOpen} />
            <NavTab id="challenges" label="🎯 Challenges" icon={Target} />
            <NavTab id="badges" label="🏆 Badges" icon={Award} />
            <NavTab id="leaderboard" label="👥 Leaderboard" icon={Users} />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Welcome Header with Current Stats */}
            <div className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-600 p-6 rounded-xl text-white shadow-lg border border-green-200/20 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2 flex items-center">
                    Welcome back, {user.name.split(' ')[0]}! 
                    <span className="ml-2 animate-bounce">🌱</span>
                  </h2>
                  <p className="text-green-100 flex items-center">
                    <Leaf className="h-4 w-4 mr-2 animate-pulse" />
                    Keep up the great work protecting our environment!
                  </p>
                </div>
                <div className="text-right">
                  <div className={`bg-white/20 backdrop-blur-sm rounded-lg p-4 transition-all duration-500 ${
                    showStreakAnimation ? 'scale-110 shadow-lg' : ''
                  }`}>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className={`transition-all duration-300 ${showStreakAnimation ? 'animate-bounce' : ''}`}>
                        <Flame className={`h-5 w-5 ${
                          currentStreak >= 7 ? 'text-orange-300' : 
                          currentStreak >= 3 ? 'text-yellow-300' : 
                          'text-red-300'
                        }`} />
                      </div>
                      <span className="text-sm font-medium">Current Streak</span>
                    </div>
                    <div className={`text-2xl font-bold transition-all duration-300 ${
                      showStreakAnimation ? 'text-yellow-200 text-3xl' : ''
                    }`}>
                      {showStreakAnimation ? streakAnimationCount : currentStreak} days
                    </div>
                    {currentStreak > 0 && (
                      <div className="text-xs text-green-100 mt-1">
                        {currentStreak >= 30 ? '👑 Monthly Master!' :
                         currentStreak >= 14 ? '💎 Diamond Dedication!' :
                         currentStreak >= 7 ? '⚡ Week Warrior!' :
                         currentStreak >= 3 ? '🔥 Fire Starter!' :
                         'Keep it up!'}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Key Performance Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Total Points with Growth */}
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-green-200/50 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Trophy className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex items-center space-x-1 text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    <ChevronUp className="h-4 w-4 animate-bounce" />
                    <span className="text-sm font-medium">+{Math.floor(Math.random() * 50) + 10} ⭐</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{user.points}</div>
                <div className="text-sm text-gray-600 flex items-center">
                  🏆 Total Points
                </div>
                <div className="mt-3 bg-green-100 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${(user.points % 300) / 300 * 100}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  {300 - (user.points % 300)} points to Level {user.level + 1}
                </div>
              </div>

              {/* Learning Progress */}
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-emerald-200/50 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Brain className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="text-sm text-emerald-600 font-medium bg-emerald-50 px-2 py-1 rounded-full">
                    {Math.round((user.completedModules.length / allModules.length) * 100)}% 📚
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{user.completedModules.length}</div>
                <div className="text-sm text-gray-600 flex items-center">
                  🧠 Modules Completed
                </div>
                <div className="mt-3 bg-emerald-100 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-emerald-400 to-teal-500 h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${(user.completedModules.length / allModules.length) * 100}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  {allModules.length - user.completedModules.length} modules remaining
                </div>
              </div>

              {/* Challenge Performance */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <TargetIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="text-sm text-purple-600 font-medium">
                    {Math.round((user.completedChallenges.length / allChallenges.length) * 100)}%
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{user.completedChallenges.length}</div>
                <div className="text-sm text-gray-600">Challenges Done</div>
                <div className="mt-3 bg-purple-100 rounded-full h-2">
                  <div 
                    className="bg-purple-500 h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${(user.completedChallenges.length / allChallenges.length) * 100}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  {allChallenges.length - user.completedChallenges.length} challenges left
                </div>
              </div>

              {/* Achievement Score */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-yellow-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <Medal className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="text-sm text-yellow-600 font-medium">
                    {Math.round((user.badges.length / badges.length) * 100)}%
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{user.badges.length}</div>
                <div className="text-sm text-gray-600">Badges Earned</div>
                <div className="mt-3 bg-yellow-100 rounded-full h-2">
                  <div 
                    className="bg-yellow-500 h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${(user.badges.length / badges.length) * 100}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  {badges.length - user.badges.length} badges to collect
                </div>
              </div>
            </div>

            {/* Analytics Dashboard */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Learning Analytics Chart */}
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-green-100/50">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <Leaf className="h-5 w-5 text-green-500 mr-2 animate-pulse" />
                    📊 Learning Progress
                  </h3>
                  <BarChart3 className="h-5 w-5 text-green-400" />
                </div>
                <div className="space-y-4">
                  {/* Weekly Activity Chart */}
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span className="flex items-center">
                        🌱 This Week's Activity
                      </span>
                      <span className="font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                        +{user.completedModules.length * 50 + user.completedChallenges.length * 30} pts ⭐
                      </span>
                    </div>
                    <div className="grid grid-cols-7 gap-1 h-32">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
                        const height = Math.random() * 80 + 20;
                        const isToday = index === new Date().getDay() - 1;
                        return (
                          <div key={day} className="flex flex-col items-center">
                            <div className="flex-1 flex items-end mb-1">
                              <div 
                                className={`w-full rounded-t transition-all duration-300 hover:scale-105 ${
                                  isToday ? 'bg-gradient-to-t from-green-400 to-green-500 shadow-lg' : 'bg-gradient-to-t from-gray-200 to-gray-300 hover:from-green-200 hover:to-green-400'
                                }`}
                                style={{ height: `${height}%` }}
                              ></div>
                            </div>
                            <span className={`text-xs ${isToday ? 'text-green-600 font-semibold' : 'text-gray-500'}`}>
                              {day}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Insights */}
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-green-100/50">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <Activity className="h-5 w-5 text-green-500 mr-2 animate-pulse" />
                    🎯 Performance Insights
                  </h3>
                  <Globe className="h-5 w-5 text-green-400" />
                </div>
                <div className="space-y-4">
                  {/* Quiz Performance */}
                  <div className="p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg border border-green-200/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-green-900 flex items-center">
                        🧠 Quiz Performance
                      </span>
                      <span className="text-lg font-bold text-green-600 bg-white/70 px-2 py-1 rounded-full">
                        {user.completedModules.length > 0 ? '92% ⭐' : '--'}
                      </span>
                    </div>
                    <div className="text-xs text-green-700">
                      Average score across all completed modules 📚
                    </div>
                  </div>

                  {/* Learning Speed */}
                  <div className="p-4 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-lg border border-teal-200/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-teal-900 flex items-center">
                        ⚡ Learning Speed
                      </span>
                      <div className="flex items-center space-x-1 bg-white/70 px-2 py-1 rounded-full">
                        <Timer className="h-4 w-4 text-teal-600" />
                        <span className="text-lg font-bold text-teal-600">Fast 🚀</span>
                      </div>
                    </div>
                    <div className="text-xs text-green-700">
                      Completing modules 20% faster than average
                    </div>
                  </div>

                  {/* Consistency Score */}
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-purple-900">Daily Streak</span>
                      <div className="flex items-center space-x-1">
                        <Flame className="h-4 w-4 text-orange-500" />
                        <span className="text-lg font-bold text-purple-600">
                          {currentStreak} days
                        </span>
                      </div>
                    </div>
                    <div className="text-xs text-purple-700">
                      {currentStreak >= 7 ? 'Outstanding consistency!' : 
                       currentStreak >= 3 ? 'Great momentum!' : 
                       'Keep building your streak!'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievement Milestones */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Achievement Milestones</h3>
                <Star className="h-5 w-5 text-gray-400" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {/* Next Level Progress */}
                <div className="p-4 border-2 border-dashed border-green-200 rounded-lg text-center">
                  <div className="text-2xl mb-2">🏆</div>
                  <div className="text-sm font-medium text-gray-900 mb-1">Next Level</div>
                  <div className="text-xs text-gray-600 mb-3">
                    {300 - (user.points % 300)} points needed
                  </div>
                  <div className="bg-green-100 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${(user.points % 300) / 300 * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Next Badge */}
                <div className="p-4 border-2 border-dashed border-blue-200 rounded-lg text-center">
                  <div className="text-2xl mb-2">🎖️</div>
                  <div className="text-sm font-medium text-gray-900 mb-1">Eco Warrior Badge</div>
                  <div className="text-xs text-gray-600 mb-3">
                    {user.points >= 500 ? 'Unlocked!' : `${500 - user.points} points needed`}
                  </div>
                  <div className="bg-blue-100 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full" 
                      style={{ width: `${Math.min(user.points / 500 * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>

                {/* Module Master */}
                <div className="p-4 border-2 border-dashed border-purple-200 rounded-lg text-center">
                  <div className="text-2xl mb-2">📚</div>
                  <div className="text-sm font-medium text-gray-900 mb-1">Module Master</div>
                  <div className="text-xs text-gray-600 mb-3">
                    Complete all {allModules.length} modules
                  </div>
                  <div className="bg-purple-100 rounded-full h-2">
                    <div 
                      className="bg-purple-500 h-2 rounded-full" 
                      style={{ width: `${(user.completedModules.length / allModules.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Streak Milestones */}
              <div className="border-t pt-6">
                <h4 className="text-md font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                  <Flame className="h-5 w-5 text-orange-500" />
                  <span>Streak Milestones</span>
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {streakMilestones.map((milestone, index) => {
                    const isAchieved = currentStreak >= milestone.days;
                    const isNext = !isAchieved && (index === 0 || currentStreak >= streakMilestones[index - 1].days);
                    
                    return (
                      <div
                        key={milestone.days}
                        className={`p-3 rounded-lg text-center border-2 transition-all duration-300 ${
                          isAchieved 
                            ? 'border-green-500 bg-green-50 scale-105' 
                            : isNext 
                              ? 'border-orange-300 bg-orange-50 border-dashed' 
                              : 'border-gray-200 bg-gray-50 opacity-60'
                        }`}
                      >
                        <div className={`text-2xl mb-1 ${
                          isAchieved ? '' : 'grayscale'
                        }`}>
                          {milestone.award}
                        </div>
                        <div className="text-xs font-medium text-gray-900 mb-1">
                          {milestone.days} Days
                        </div>
                        <div className="text-xs text-gray-600 mb-2">
                          {milestone.title}
                        </div>
                        {isNext && (
                          <div className="text-xs text-orange-600 font-semibold">
                            {milestone.days - currentStreak} more days
                          </div>
                        )}
                        {isAchieved && (
                          <div className="text-xs text-green-600 font-semibold">
                            ✓ Achieved
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Smart Recommendations */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl border">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Zap className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Smart Recommendations</h3>
              </div>
              
              {/* All Games Unlocked Notice */}
              <div className="bg-purple-100 p-4 rounded-lg mb-4 border border-purple-200">
                <div className="flex items-center space-x-3 mb-2">
                  <Gamepad2 className="h-5 w-5 text-purple-600" />
                  <span className="font-medium text-purple-900">🎉 All Games Unlocked!</span>
                </div>
                <p className="text-sm text-purple-700 mb-3">
                  Great news! All mini-games are now available to play. Test your knowledge and have fun!
                </p>
                <button
                  onClick={() => setActiveTab('game')}
                  className="text-sm bg-purple-600 text-white px-3 py-1 rounded-lg hover:bg-purple-700"
                >
                  Play Games
                </button>
              </div>

              {/* Next Award Target */}
              {(() => {
                const nextTarget = awardTargets.find(target => {
                  if (target.type === 'rank') {
                    return target.current > target.target || target.current === 0;
                  }
                  return target.current < target.target;
                });

                if (nextTarget) {
                  const progressPercentage = nextTarget.type === 'rank' 
                    ? (nextTarget.current > 0 && nextTarget.current <= nextTarget.target) ? 100 : 0
                    : Math.min((nextTarget.current / nextTarget.target) * 100, 100);

                  return (
                    <div className="bg-yellow-100 p-4 rounded-lg mb-4 border border-yellow-200">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl">{nextTarget.icon}</span>
                        <div>
                          <span className="font-medium text-yellow-900">🎯 Next Award: {nextTarget.title}</span>
                          <p className="text-sm text-yellow-700">{nextTarget.description}</p>
                        </div>
                      </div>
                      <div className="mb-2">
                        <div className="flex justify-between text-xs text-yellow-800 mb-1">
                          <span>Progress</span>
                          <span>
                            {nextTarget.type === 'rank' && nextTarget.current > 0
                              ? `Rank #${nextTarget.current}`
                              : nextTarget.type === 'rank' 
                                ? 'Not ranked'
                                : `${nextTarget.current}/${nextTarget.target}`
                            }
                          </span>
                        </div>
                        <div className="bg-yellow-200 rounded-full h-2">
                          <div 
                            className="bg-yellow-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${progressPercentage}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="text-xs text-yellow-700">
                        <strong>Reward:</strong> {nextTarget.reward}
                      </div>
                      <div className="text-xs text-purple-700 bg-purple-100 px-2 py-1 rounded mt-1">
                        <strong>🎁 Bonus:</strong> {nextTarget.subscriptionReward}
                      </div>
                    </div>
                  );
                }
              })()}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {user.completedModules.length === 0 && (
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center space-x-3 mb-2">
                      <BookOpen className="h-5 w-5 text-green-600" />
                      <span className="font-medium text-gray-900">Start Your Learning Journey</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Begin with "Water Conservation Basics" - perfect for beginners!
                    </p>
                    <button
                      onClick={() => setActiveTab('modules')}
                      className="text-sm bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700"
                    >
                      Start Learning
                    </button>
                  </div>
                )}
                
                {user.completedModules.length > 0 && availableModules.length > 0 && (
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center space-x-3 mb-2">
                      <TrendingUp className="h-5 w-5 text-blue-600" />
                      <span className="font-medium text-gray-900">Continue Learning</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      You're doing great! Try "{availableModules[0].title}" next.
                    </p>
                    <button
                      onClick={() => setActiveTab('modules')}
                      className="text-sm bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700"
                    >
                      Continue
                    </button>
                  </div>
                )}

                {availableChallenges.length > 0 && (
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center space-x-3 mb-2">
                      <Target className="h-5 w-5 text-purple-600" />
                      <span className="font-medium text-gray-900">Real-World Impact</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Ready for action? Try the "{availableChallenges[0].title}" challenge!
                    </p>
                    <button
                      onClick={() => setActiveTab('challenges')}
                      className="text-sm bg-purple-600 text-white px-3 py-1 rounded-lg hover:bg-purple-700"
                    >
                      Take Challenge
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'game' && (
          <GameDashboard onNavigate={setActiveTab} />
        )}

        {activeTab === 'modules' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 p-4 rounded-xl border border-green-200/50">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <BookOpen className="h-6 w-6 text-green-600 mr-3 animate-pulse" />
                📚 Learning Modules
              </h2>
              <div className="text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-200/50 shadow-sm">
                <span className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                  {user.completedModules.length} of {allModules.length} completed ✨
                </span>
              </div>
            </div>
            
            {selectedModule ? (
              <ModuleDetail 
                module={allModules.find(m => m.id === selectedModule)!}
                onBack={() => {
                  console.log('Module back button clicked');
                  setSelectedModule(null);
                }}
                onQuizSubmit={() => handleQuizSubmit(selectedModule)}
                quizAnswers={quizAnswers}
                setQuizAnswers={setQuizAnswers}
                isCompleted={user.completedModules.includes(selectedModule)}
              />
            ) : (
              <div className="space-y-8">
                {/* Water Conservation Section */}
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Droplets className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Water Conservation</h3>
                    <span className="text-sm text-gray-500">
                      ({allModules.filter(m => m.category === 'water').filter(m => user.completedModules.includes(m.id)).length}/{allModules.filter(m => m.category === 'water').length} completed)
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {allModules.filter(m => m.category === 'water').map(module => (
                      <ModuleCard
                        key={module.id}
                        module={module}
                        isCompleted={user.completedModules.includes(module.id)}
                        isAvailable={availableModules.some(m => m.id === module.id)}
                        onClick={() => setSelectedModule(module.id)}
                      />
                    ))}
                  </div>
                </div>

                {/* Energy Conservation Section */}
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-yellow-100 p-2 rounded-lg">
                      <Zap className="h-5 w-5 text-yellow-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Energy Conservation</h3>
                    <span className="text-sm text-gray-500">
                      ({allModules.filter(m => m.category === 'energy').filter(m => user.completedModules.includes(m.id)).length}/{allModules.filter(m => m.category === 'energy').length} completed)
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {allModules.filter(m => m.category === 'energy').map(module => (
                      <ModuleCard
                        key={module.id}
                        module={module}
                        isCompleted={user.completedModules.includes(module.id)}
                        isAvailable={availableModules.some(m => m.id === module.id)}
                        onClick={() => setSelectedModule(module.id)}
                      />
                    ))}
                  </div>
                </div>

                {/* Waste Management Section */}
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Trophy className="h-5 w-5 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Waste Management</h3>
                    <span className="text-sm text-gray-500">
                      ({allModules.filter(m => m.category === 'waste').filter(m => user.completedModules.includes(m.id)).length}/{allModules.filter(m => m.category === 'waste').length} completed)
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {allModules.filter(m => m.category === 'waste').map(module => (
                      <ModuleCard
                        key={module.id}
                        module={module}
                        isCompleted={user.completedModules.includes(module.id)}
                        isAvailable={availableModules.some(m => m.id === module.id)}
                        onClick={() => setSelectedModule(module.id)}
                      />
                    ))}
                  </div>
                </div>

                {/* Biodiversity Section */}
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Star className="h-5 w-5 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Biodiversity & Ecosystems</h3>
                    <span className="text-sm text-gray-500">
                      ({allModules.filter(m => m.category === 'biodiversity').filter(m => user.completedModules.includes(m.id)).length}/{allModules.filter(m => m.category === 'biodiversity').length} completed)
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {allModules.filter(m => m.category === 'biodiversity').map(module => (
                      <ModuleCard
                        key={module.id}
                        module={module}
                        isCompleted={user.completedModules.includes(module.id)}
                        isAvailable={availableModules.some(m => m.id === module.id)}
                        onClick={() => setSelectedModule(module.id)}
                      />
                    ))}
                  </div>
                </div>

                {/* Progress Summary */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Learning Progress Summary</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        {allModules.filter(m => m.category === 'water').filter(m => user.completedModules.includes(m.id)).length}
                      </div>
                      <div className="text-sm text-gray-600">Water Modules</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-600">
                        {allModules.filter(m => m.category === 'energy').filter(m => user.completedModules.includes(m.id)).length}
                      </div>
                      <div className="text-sm text-gray-600">Energy Modules</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">
                        {allModules.filter(m => m.category === 'waste').filter(m => user.completedModules.includes(m.id)).length}
                      </div>
                      <div className="text-sm text-gray-600">Waste Modules</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">
                        {allModules.filter(m => m.category === 'biodiversity').filter(m => user.completedModules.includes(m.id)).length}
                      </div>
                      <div className="text-sm text-gray-600">Biodiversity Modules</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'challenges' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Real-World Challenges</h2>
              <div className="text-sm text-gray-600 bg-purple-50 px-3 py-1 rounded-full">
                {user.completedChallenges.length} of {allChallenges.length} completed
              </div>
            </div>
            
            {selectedChallenge ? (
              <ChallengeDetail 
                challenge={allChallenges.find(c => c.id === selectedChallenge)!}
                onBack={() => {
                  console.log('Challenge back button clicked');
                  setSelectedChallenge(null);
                  setChallengeProof('');
                  setUploadedPhotos([]);
                  setPhotoPreviewUrls([]);
                }}
                onComplete={(challengeId: string, points: number, badgeId?: string) => handleChallengeComplete(challengeId, points, badgeId)}
                proof={challengeProof}
                setProof={setChallengeProof}
                uploadedPhotos={uploadedPhotos}
                photoPreviewUrls={photoPreviewUrls}
                onPhotoUpload={handlePhotoUpload}
                onRemovePhoto={removePhoto}
              />
            ) : (
              <div className="space-y-8">
                {/* Water Conservation Challenges */}
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Droplets className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Water Conservation Challenges</h3>
                    <span className="text-sm text-gray-500">
                      ({allChallenges.filter(c => c.category === 'water').filter(c => user.completedChallenges.includes(c.id)).length}/{allChallenges.filter(c => c.category === 'water').length} completed)
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {allChallenges.filter(c => c.category === 'water').map(challenge => (
                      <ChallengeCard
                        key={challenge.id}
                        challenge={challenge}
                        isCompleted={user.completedChallenges.includes(challenge.id)}
                        onClick={() => setSelectedChallenge(challenge.id)}
                      />
                    ))}
                  </div>
                </div>

                {/* Energy Conservation Challenges */}
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-yellow-100 p-2 rounded-lg">
                      <Zap className="h-5 w-5 text-yellow-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Energy Conservation Challenges</h3>
                    <span className="text-sm text-gray-500">
                      ({allChallenges.filter(c => c.category === 'energy').filter(c => user.completedChallenges.includes(c.id)).length}/{allChallenges.filter(c => c.category === 'energy').length} completed)
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {allChallenges.filter(c => c.category === 'energy').map(challenge => (
                      <ChallengeCard
                        key={challenge.id}
                        challenge={challenge}
                        isCompleted={user.completedChallenges.includes(challenge.id)}
                        onClick={() => setSelectedChallenge(challenge.id)}
                      />
                    ))}
                  </div>
                </div>

                {/* Waste Management Challenges */}
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Recycle className="h-5 w-5 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Waste Management Challenges</h3>
                    <span className="text-sm text-gray-500">
                      ({allChallenges.filter(c => c.category === 'waste').filter(c => user.completedChallenges.includes(c.id)).length}/{allChallenges.filter(c => c.category === 'waste').length} completed)
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {allChallenges.filter(c => c.category === 'waste').map(challenge => (
                      <ChallengeCard
                        key={challenge.id}
                        challenge={challenge}
                        isCompleted={user.completedChallenges.includes(challenge.id)}
                        onClick={() => setSelectedChallenge(challenge.id)}
                      />
                    ))}
                  </div>
                </div>

                {/* Biodiversity Challenges */}
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Leaf className="h-5 w-5 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Biodiversity & Ecosystem Challenges</h3>
                    <span className="text-sm text-gray-500">
                      ({allChallenges.filter(c => c.category === 'biodiversity').filter(c => user.completedChallenges.includes(c.id)).length}/{allChallenges.filter(c => c.category === 'biodiversity').length} completed)
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {allChallenges.filter(c => c.category === 'biodiversity').map(challenge => (
                      <ChallengeCard
                        key={challenge.id}
                        challenge={challenge}
                        isCompleted={user.completedChallenges.includes(challenge.id)}
                        onClick={() => setSelectedChallenge(challenge.id)}
                      />
                    ))}
                  </div>
                </div>

                {/* Climate Action Challenges */}
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-indigo-100 p-2 rounded-lg">
                      <Globe className="h-5 w-5 text-indigo-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Climate Action & Sustainability Challenges</h3>
                    <span className="text-sm text-gray-500">
                      ({allChallenges.filter(c => c.category === 'climate').filter(c => user.completedChallenges.includes(c.id)).length}/{allChallenges.filter(c => c.category === 'climate').length} completed)
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {allChallenges.filter(c => c.category === 'climate').map(challenge => (
                      <ChallengeCard
                        key={challenge.id}
                        challenge={challenge}
                        isCompleted={user.completedChallenges.includes(challenge.id)}
                        onClick={() => setSelectedChallenge(challenge.id)}
                      />
                    ))}
                  </div>
                </div>

                {/* Challenge Statistics */}
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Challenge Progress Summary</h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        {allChallenges.filter(c => c.category === 'water').filter(c => user.completedChallenges.includes(c.id)).length}
                      </div>
                      <div className="text-sm text-gray-600">Water Challenges</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-600">
                        {allChallenges.filter(c => c.category === 'energy').filter(c => user.completedChallenges.includes(c.id)).length}
                      </div>
                      <div className="text-sm text-gray-600">Energy Challenges</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">
                        {allChallenges.filter(c => c.category === 'waste').filter(c => user.completedChallenges.includes(c.id)).length}
                      </div>
                      <div className="text-sm text-gray-600">Waste Challenges</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">
                        {allChallenges.filter(c => c.category === 'biodiversity').filter(c => user.completedChallenges.includes(c.id)).length}
                      </div>
                      <div className="text-sm text-gray-600">Biodiversity</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-indigo-600">
                        {allChallenges.filter(c => c.category === 'climate').filter(c => user.completedChallenges.includes(c.id)).length}
                      </div>
                      <div className="text-sm text-gray-600">Climate Action</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'badges' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Achievement Badges</h2>
              <div className="text-sm text-gray-600 bg-yellow-50 px-3 py-1 rounded-full">
                {user.badges.length} of {badges.length} earned
              </div>
            </div>

            {/* Award Targets Section */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl border">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Target className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Award Targets</h3>
                <span className="text-sm text-gray-500">Track your progress to unlock special awards</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {awardTargets.map((target) => {
                  const progressPercentage = target.type === 'rank' 
                    ? (target.current > 0 && target.current <= target.target) ? 100 : 0
                    : Math.min((target.current / target.target) * 100, 100);
                  
                  const isCompleted = target.type === 'rank' 
                    ? (target.current > 0 && target.current <= target.target)
                    : target.current >= target.target;

                  return (
                    <div
                      key={target.id}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                        isCompleted 
                          ? 'border-green-500 bg-green-50 scale-105' 
                          : 'border-gray-200 bg-white hover:border-purple-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className={`text-2xl ${isCompleted ? '' : 'grayscale'}`}>
                          {target.icon}
                        </div>
                        {isCompleted && (
                          <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                            ✓ Earned
                          </div>
                        )}
                      </div>
                      
                      <h4 className="font-semibold text-gray-900 mb-1">{target.title}</h4>
                      <p className="text-sm text-gray-600 mb-3">{target.description}</p>
                      
                      {/* Progress Bar */}
                      <div className="mb-3">
                        <div className="flex justify-between text-xs text-gray-600 mb-1">
                          <span>Progress</span>
                          <span>
                            {target.type === 'rank' && target.current > 0
                              ? `Rank #${target.current}`
                              : target.type === 'rank' 
                                ? 'Not ranked'
                                : `${target.current}/${target.target}`
                            }
                          </span>
                        </div>
                        <div className="bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-300 ${
                              isCompleted ? 'bg-green-500' : 'bg-purple-500'
                            }`}
                            style={{ width: `${progressPercentage}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      {/* Reward Info */}
                      <div className="space-y-2">
                        <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
                          <strong>Badge Reward:</strong> {target.reward}
                        </div>
                        <div className="text-xs text-purple-700 bg-purple-50 p-2 rounded border border-purple-200">
                          <strong>🎁 Bonus:</strong> {target.subscriptionReward}
                        </div>
                      </div>
                      
                      {/* Next Steps */}
                      {!isCompleted && (
                        <div className="text-xs text-purple-600 mt-2 font-medium">
                          {target.type === 'points' && `Need ${target.target - target.current} more points`}
                          {target.type === 'modules' && `Complete ${target.target - target.current} more modules`}
                          {target.type === 'challenges' && `Complete ${target.target - target.current} more challenges`}
                          {target.type === 'level' && `Reach level ${target.target} (${target.target - target.current} more)`}
                          {target.type === 'streak' && `Maintain streak for ${target.target - target.current} more days`}
                          {target.type === 'rank' && target.current > target.target && `Improve by ${target.current - target.target} positions`}
                          {target.type === 'rank' && target.current === 0 && `Complete activities to get ranked`}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* All Badges */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">All Badges</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {badges.map(badge => (
                  <BadgeCard
                    key={badge.id}
                    badge={badge}
                    isEarned={user.badges.includes(badge.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'leaderboard' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">School Leaderboard</h2>
              <div className="text-sm text-gray-600 bg-blue-50 px-3 py-1 rounded-full">
                Your Rank: #{leaderboard.findIndex(student => student.id === user.id) + 1 || 'Unranked'}
              </div>
            </div>

            {/* Leaderboard Awards */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <Trophy className="h-5 w-5 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Leaderboard Awards</h3>
                <span className="text-sm text-gray-500">Special recognition for top performers</span>
              </div>
              
              {/* Government Recognition Program */}
              <div className="bg-green-50 p-4 rounded-lg mb-6 border border-green-200">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-2xl">🏛️</span>
                  <div>
                    <h4 className="font-semibold text-green-900">Government Environmental Excellence Program</h4>
                    <p className="text-sm text-green-700">Sponsored by Ministry of Environment & Climate Change, India</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="bg-white p-3 rounded border">
                    <div className="font-medium text-gray-900 mb-1">🥇 National Champions (Top 1%)</div>
                    <div className="text-green-600">₹25,000 scholarship + Certificate from Minister</div>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <div className="font-medium text-gray-900 mb-1">🥈 State Excellence (Top 5%)</div>
                    <div className="text-green-600">₹15,000 scholarship + State recognition</div>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <div className="font-medium text-gray-900 mb-1">🥉 District Recognition (Top 10%)</div>
                    <div className="text-green-600">₹8,000 scholarship + District certificate</div>
                  </div>
                  <div className="bg-white p-3 rounded border">
                    <div className="font-medium text-gray-900 mb-1">🌟 School Leaders (Top 20%)</div>
                    <div className="text-green-600">₹3,000 scholarship + School recognition</div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {/* Gold Medal */}
                <div className={`p-4 rounded-lg border-2 text-center ${
                  leaderboard.findIndex(student => student.id === user.id) === 0
                    ? 'border-yellow-500 bg-yellow-50' 
                    : 'border-gray-200 bg-white'
                }`}>
                  <div className="text-3xl mb-2">🥇</div>
                  <h4 className="font-semibold text-gray-900 mb-1">Gold Medal</h4>
                  <p className="text-sm text-gray-600 mb-2">1st Place</p>
                  <div className="space-y-2">
                    <div className="text-xs text-yellow-700 bg-yellow-100 px-2 py-1 rounded">
                      500 Bonus Points + Certificate
                    </div>
                    <div className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded font-semibold">
                      🏛️ Government Cash Prize: ₹10,000
                    </div>
                    <div className="text-xs text-red-700 bg-red-100 px-2 py-1 rounded">
                      📺 Netflix Premium - 6 months FREE
                    </div>
                    <div className="text-xs text-blue-700 bg-blue-100 px-2 py-1 rounded">
                      🎵 Spotify Premium - 3 months FREE
                    </div>
                  </div>
                  {leaderboard.findIndex(student => student.id === user.id) === 0 && (
                    <div className="text-xs text-green-600 font-semibold mt-3 bg-green-50 p-2 rounded">
                      ✓ All Rewards Earned! 🎉
                    </div>
                  )}
                </div>

                {/* Silver Medal */}
                <div className={`p-4 rounded-lg border-2 text-center ${
                  leaderboard.findIndex(student => student.id === user.id) === 1
                    ? 'border-gray-400 bg-gray-50' 
                    : 'border-gray-200 bg-white'
                }`}>
                  <div className="text-3xl mb-2">🥈</div>
                  <h4 className="font-semibold text-gray-900 mb-1">Silver Medal</h4>
                  <p className="text-sm text-gray-600 mb-2">2nd Place</p>
                  <div className="space-y-2">
                    <div className="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded">
                      300 Bonus Points + Certificate
                    </div>
                    <div className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded font-semibold">
                      🏛️ Government Cash Prize: ₹7,500
                    </div>
                    <div className="text-xs text-red-700 bg-red-100 px-2 py-1 rounded">
                      📺 Netflix Premium - 3 months FREE
                    </div>
                    <div className="text-xs text-purple-700 bg-purple-100 px-2 py-1 rounded">
                      📚 Coursera Plus - 2 months FREE
                    </div>
                  </div>
                  {leaderboard.findIndex(student => student.id === user.id) === 1 && (
                    <div className="text-xs text-green-600 font-semibold mt-3 bg-green-50 p-2 rounded">
                      ✓ All Rewards Earned! 🎉
                    </div>
                  )}
                </div>

                {/* Bronze Medal */}
                <div className={`p-4 rounded-lg border-2 text-center ${
                  leaderboard.findIndex(student => student.id === user.id) === 2
                    ? 'border-orange-500 bg-orange-50' 
                    : 'border-gray-200 bg-white'
                }`}>
                  <div className="text-3xl mb-2">🥉</div>
                  <h4 className="font-semibold text-gray-900 mb-1">Bronze Medal</h4>
                  <p className="text-sm text-gray-600 mb-2">3rd Place</p>
                  <div className="space-y-2">
                    <div className="text-xs text-orange-700 bg-orange-100 px-2 py-1 rounded">
                      200 Bonus Points + Certificate
                    </div>
                    <div className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded font-semibold">
                      🏛️ Government Cash Prize: ₹5,000
                    </div>
                    <div className="text-xs text-red-700 bg-red-100 px-2 py-1 rounded">
                      📺 Netflix Premium - 1 month FREE
                    </div>
                    <div className="text-xs text-indigo-700 bg-indigo-100 px-2 py-1 rounded">
                      🎮 Xbox Game Pass - 1 month FREE
                    </div>
                  </div>
                  {leaderboard.findIndex(student => student.id === user.id) === 2 && (
                    <div className="text-xs text-green-600 font-semibold mt-3 bg-green-50 p-2 rounded">
                      ✓ All Rewards Earned! 🎉
                    </div>
                  )}
                </div>
              </div>

              {/* Subscription Rewards Center */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg mb-6 border">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl">🎁</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Free Subscription Rewards</h4>
                    <p className="text-sm text-gray-600">Unlock premium subscriptions by achieving targets!</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                  <div className="bg-red-50 p-3 rounded border border-red-200">
                    <div className="text-2xl mb-1">📺</div>
                    <div className="text-xs font-medium text-red-800">Netflix Premium</div>
                    <div className="text-xs text-red-600">Up to 6 months</div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded border border-blue-200">
                    <div className="text-2xl mb-1">📺</div>
                    <div className="text-xs font-medium text-blue-800">Disney+ Hotstar</div>
                    <div className="text-xs text-blue-600">Up to 3 months</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <div className="text-2xl mb-1">🎵</div>
                    <div className="text-xs font-medium text-green-800">Spotify Premium</div>
                    <div className="text-xs text-green-600">Up to 3 months</div>
                  </div>
                  <div className="bg-indigo-50 p-3 rounded border border-indigo-200">
                    <div className="text-2xl mb-1">🎮</div>
                    <div className="text-xs font-medium text-indigo-800">Xbox Game Pass</div>
                    <div className="text-xs text-indigo-600">Up to 2 months</div>
                  </div>
                  <div className="bg-orange-50 p-3 rounded border border-orange-200">
                    <div className="text-2xl mb-1">📚</div>
                    <div className="text-xs font-medium text-orange-800">Audible</div>
                    <div className="text-xs text-orange-600">2 months + books</div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded border border-purple-200">
                    <div className="text-2xl mb-1">📚</div>
                    <div className="text-xs font-medium text-purple-800">Coursera Plus</div>
                    <div className="text-xs text-purple-600">Up to 2 months</div>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                    <div className="text-2xl mb-1">📺</div>
                    <div className="text-xs font-medium text-yellow-800">Amazon Prime</div>
                    <div className="text-xs text-yellow-600">Up to 3 months</div>
                  </div>
                  <div className="bg-pink-50 p-3 rounded border border-pink-200">
                    <div className="text-2xl mb-1">🎮</div>
                    <div className="text-xs font-medium text-pink-800">PS Plus</div>
                    <div className="text-xs text-pink-600">Up to 1 month</div>
                  </div>
                </div>
                <div className="text-center mt-3">
                  <p className="text-xs text-gray-600">
                    <strong>Partnership with:</strong> Netflix, Disney, Spotify, Microsoft, Sony, Amazon & more! 🤝
                  </p>
                </div>
              </div>

              {/* Progress to Next Award */}
              {(() => {
                const currentRank = leaderboard.findIndex(student => student.id === user.id) + 1;
                const currentPoints = user.points;
                
                if (currentRank > 3) {
                  const thirdPlacePoints = leaderboard[2]?.points || 0;
                  const pointsNeeded = Math.max(0, thirdPlacePoints - currentPoints + 1);
                  
                  return (
                    <div className="bg-white p-4 rounded-lg border">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900">🎯 Target: Top 3</span>
                        <span className="text-sm text-orange-600">Rank #{currentRank}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        You need <strong>{pointsNeeded} more points</strong> to reach 3rd place and earn a Bronze Medal!
                      </p>
                      <div className="bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                          style={{ 
                            width: `${pointsNeeded > 0 ? Math.min((currentPoints / (thirdPlacePoints + 1)) * 100, 100) : 100}%` 
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                } else if (currentRank === 3) {
                  const secondPlacePoints = leaderboard[1]?.points || 0;
                  const pointsNeeded = Math.max(0, secondPlacePoints - currentPoints + 1);
                  
                  return (
                    <div className="bg-white p-4 rounded-lg border">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900">🎯 Target: 2nd Place</span>
                        <span className="text-sm text-gray-600">Currently 3rd</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        You need <strong>{pointsNeeded} more points</strong> to reach 2nd place and earn a Silver Medal!
                      </p>
                      <div className="bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gray-500 h-2 rounded-full transition-all duration-300"
                          style={{ 
                            width: `${pointsNeeded > 0 ? Math.min((currentPoints / (secondPlacePoints + 1)) * 100, 100) : 100}%` 
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                } else if (currentRank === 2) {
                  const firstPlacePoints = leaderboard[0]?.points || 0;
                  const pointsNeeded = Math.max(0, firstPlacePoints - currentPoints + 1);
                  
                  return (
                    <div className="bg-white p-4 rounded-lg border">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900">🎯 Target: 1st Place</span>
                        <span className="text-sm text-gray-600">Currently 2nd</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        You need <strong>{pointsNeeded} more points</strong> to reach 1st place and earn the Gold Medal!
                      </p>
                      <div className="bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-yellow-500 h-2 rounded-full transition-all duration-300"
                          style={{ 
                            width: `${pointsNeeded > 0 ? Math.min((currentPoints / (firstPlacePoints + 1)) * 100, 100) : 100}%` 
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                } else if (currentRank === 1) {
                  return (
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-2xl">👑</span>
                        <span className="font-semibold text-yellow-800">Congratulations, Champion!</span>
                      </div>
                      <p className="text-sm text-yellow-700">
                        You're currently in 1st place! Keep completing activities to maintain your lead and earn bonus rewards.
                      </p>
                    </div>
                  );
                }
              })()}
            </div>

            {/* Leaderboard Table */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b bg-gradient-to-r from-green-500 to-blue-500 text-white">
                <h3 className="text-lg font-semibold">{user.school}</h3>
                <p className="text-green-100">Top Environmental Champions</p>
              </div>
              <div className="divide-y">
                {leaderboard.map((student, index) => (
                  <div key={student.id} className={`p-4 flex items-center space-x-4 ${student.id === user.id ? 'bg-green-50' : ''}`}>
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${
                      index === 0 ? 'bg-yellow-500 text-white' :
                      index === 1 ? 'bg-gray-400 text-white' :
                      index === 2 ? 'bg-orange-500 text-white' :
                      'bg-gray-200 text-gray-700'
                    }`}>
                      {index + 1}
                    </div>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                      student.id === user.id ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'
                    }`}>
                      {student.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className={`font-medium ${student.id === user.id ? 'text-green-800' : 'text-gray-900'}`}>
                          {student.name}
                        </span>
                        {student.id === user.id && <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">You</span>}
                        {index < 3 && (
                          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                            {index === 0 ? '🥇 Gold' : index === 1 ? '🥈 Silver' : '🥉 Bronze'}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">Grade {student.grade} • {student.badges.length} badges</p>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-green-600">{student.points} pts</div>
                      <div className="text-sm text-gray-500">Level {student.level}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions to Improve Rank */}
            <div className="bg-blue-50 p-6 rounded-xl border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">💪 Boost Your Rank</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">Complete Modules</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    {allModules.length - user.completedModules.length} modules remaining
                  </p>
                  <button
                    onClick={() => setActiveTab('modules')}
                    className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                  >
                    Start Learning
                  </button>
                </div>
                
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <Target className="h-5 w-5 text-purple-600" />
                    <span className="font-medium">Take Challenges</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    {allChallenges.length - user.completedChallenges.length} challenges available
                  </p>
                  <button
                    onClick={() => setActiveTab('challenges')}
                    className="text-sm bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700"
                  >
                    Take Challenge
                  </button>
                </div>
                
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <Flame className="h-5 w-5 text-orange-600" />
                    <span className="font-medium">Maintain Streak</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Current: {currentStreak} days
                  </p>
                  <div className="text-sm bg-orange-600 text-white px-3 py-1 rounded text-center">
                    Keep Going!
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Streak Award Modal */}
      {showAwardModal && newAward && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center relative overflow-hidden">
            {/* Celebration particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-2 h-2 bg-yellow-400 rounded-full animate-ping`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${1 + Math.random()}s`
                  }}
                />
              ))}
            </div>
            
            {/* Award content */}
            <div className="relative z-10">
              <div className="text-6xl mb-4 animate-bounce">{newAward.award}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Congratulations!</h3>
              <h4 className="text-xl font-semibold text-green-600 mb-4">{newAward.title}</h4>
              <p className="text-gray-600 mb-6">
                You've reached a {newAward.days}-day streak! Amazing dedication!
              </p>
              
              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <div className="flex items-center justify-center space-x-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Trophy className="h-4 w-4 text-green-600" />
                    <span className="font-semibold">+{newAward.points} Points</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-yellow-600" />
                    <span className="font-semibold">New Badge</span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => {
                  setShowAwardModal(false);
                  setNewAward(null);
                }}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Awesome! 🎉
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Component for individual module cards
const ModuleCard = ({ module, isCompleted, isAvailable, onClick }: any) => (
  <div
    className={`bg-white p-6 rounded-xl shadow-sm border cursor-pointer transition-all hover:shadow-md ${
      isCompleted ? 'border-green-500 bg-green-50' : 
      isAvailable ? 'border-gray-200 hover:border-green-300' : 
      'border-gray-100 opacity-60 cursor-not-allowed'
    }`}
    onClick={isAvailable ? onClick : undefined}
  >
    <div className="flex items-center justify-between mb-3">
      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
        module.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
        module.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
        'bg-red-100 text-red-800'
      }`}>
        {module.difficulty}
      </div>
      {isCompleted && <CheckCircle className="h-6 w-6 text-green-500" />}
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{module.title}</h3>
    <p className="text-gray-600 text-sm mb-4">{module.description}</p>
    <div className="flex items-center justify-between text-sm text-gray-500">
      <span>{module.duration}</span>
      <span className="font-semibold text-green-600">+{module.points} pts</span>
    </div>
  </div>
);

// Component for detailed module view
const ModuleDetail = ({ module, onBack, onQuizSubmit, quizAnswers, setQuizAnswers, isCompleted }: any) => (
  <div className="bg-white rounded-xl shadow-sm">
    <div className="p-6 border-b">
      <button 
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log('Module back button clicked');
          onBack();
        }} 
        className="text-green-600 hover:text-green-700 mb-4"
      >
        ← Back to Modules
      </button>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">{module.title}</h3>
          <p className="text-gray-600 mt-1">{module.description}</p>
        </div>
        {isCompleted && (
          <div className="flex items-center space-x-2 text-green-600">
            <CheckCircle className="h-6 w-6" />
            <span className="font-semibold">Completed</span>
          </div>
        )}
      </div>
    </div>
    
    <div className="p-6 space-y-6">
      {/* Lessons */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Lessons</h4>
        <div className="space-y-4">
          {module.content.lessons.map((lesson: any) => (
            <div key={lesson.id} className="border rounded-lg p-4">
              <h5 className="font-medium text-gray-900 mb-2">{lesson.title}</h5>
              <p className="text-gray-700 text-sm mb-2">{lesson.content}</p>
              <span className="text-xs text-gray-500">{lesson.duration}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quiz */}
      {!isCompleted && (
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Knowledge Check</h4>
          <div className="space-y-6">
            {module.content.quiz.questions.map((question: any, qIndex: number) => (
              <div key={question.id} className="border rounded-lg p-4">
                <h5 className="font-medium text-gray-900 mb-3">
                  {qIndex + 1}. {question.question}
                </h5>
                <div className="space-y-2">
                  {question.options.map((option: string, oIndex: number) => (
                    <label key={oIndex} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name={question.id}
                        value={oIndex}
                        checked={quizAnswers[question.id] === oIndex}
                        onChange={() => setQuizAnswers((prev: any) => ({ ...prev, [question.id]: oIndex }))}
                        className="text-green-600"
                      />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <button
              onClick={onQuizSubmit}
              disabled={Object.keys(quizAnswers).length < module.content.quiz.questions.length}
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  </div>
);

// Component for individual challenge cards
const ChallengeCard = ({ challenge, isCompleted, onClick }: any) => (
  <div
    className={`bg-white p-6 rounded-xl shadow-sm border cursor-pointer transition-all hover:shadow-md ${
      isCompleted ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-blue-300'
    }`}
    onClick={!isCompleted ? onClick : undefined}
  >
    <div className="flex items-center justify-between mb-3">
      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
        challenge.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
        challenge.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
        'bg-red-100 text-red-800'
      }`}>
        {challenge.difficulty}
      </div>
      {isCompleted && <CheckCircle className="h-6 w-6 text-green-500" />}
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{challenge.title}</h3>
    <p className="text-gray-600 text-sm mb-4">{challenge.description}</p>
    <div className="flex items-center justify-between text-sm text-gray-500">
      <span>{challenge.duration}</span>
      <span className="font-semibold text-blue-600">+{challenge.points} pts</span>
    </div>
  </div>
);

// Component for detailed challenge view
const ChallengeDetail = ({ 
  challenge, 
  onBack, 
  onComplete, 
  proof, 
  setProof, 
  uploadedPhotos,
  photoPreviewUrls,
  onPhotoUpload,
  onRemovePhoto
}: any) => (
  <div className="bg-white rounded-xl shadow-sm">
    <div className="p-6 border-b">
      <button 
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log('Challenge back button clicked');
          onBack();
        }} 
        className="text-blue-600 hover:text-blue-700 mb-4"
      >
        ← Back to Challenges
      </button>
      <h3 className="text-2xl font-bold text-gray-900">{challenge.title}</h3>
      <p className="text-gray-600 mt-1">{challenge.description}</p>
    </div>
    
    <div className="p-6 space-y-6">
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h4>
        <ul className="space-y-2">
          {challenge.requirements.map((req: string, index: number) => (
            <li key={index} className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-gray-700">{req}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-3">Submit Your Proof</h4>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Describe what you did and your results:
            </label>
            <textarea
              value={proof}
              onChange={(e) => setProof(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={4}
              placeholder="Describe your water saving activities, measurements, and results..."
            />
          </div>

          {/* Photo Upload Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Photos (Max 5):
            </label>
            
            {/* File Input */}
            <div className="mb-4">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 mb-2 text-gray-400" />
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">PNG, JPG up to 10MB each</p>
                </div>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={onPhotoUpload}
                  className="hidden"
                  disabled={uploadedPhotos.length >= 5}
                />
              </label>
            </div>

            {/* Photo Previews */}
            {photoPreviewUrls.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {photoPreviewUrls.map((url: string, index: number) => (
                  <div key={index} className="relative group">
                    <img
                      src={url}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg border border-gray-300"
                    />
                    <button
                      onClick={() => onRemovePhoto(index)}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {uploadedPhotos.length === 0 && (
              <div className="flex items-center space-x-2 text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
                <Camera className="h-4 w-4" />
                <span>Upload photos showing your water conservation activities, before/after shots, or measurement readings</span>
              </div>
            )}

            {uploadedPhotos.length > 0 && (
              <div className="flex items-center space-x-2 text-sm text-green-700 bg-green-50 p-3 rounded-lg">
                <ImageIcon className="h-4 w-4" />
                <span>{uploadedPhotos.length} photo{uploadedPhotos.length > 1 ? 's' : ''} uploaded</span>
              </div>
            )}
          </div>

          <button
            onClick={() => onComplete(challenge.id, challenge.points, challenge.badge)}
            disabled={!proof.trim() || uploadedPhotos.length === 0}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Complete Challenge (+{challenge.points} pts)
          </button>
          
          {(!proof.trim() || uploadedPhotos.length === 0) && (
            <p className="text-sm text-gray-500">
              Please provide both a description and at least one photo to complete the challenge.
            </p>
          )}
        </div>
      </div>
    </div>
  </div>
);

// Component for individual badge cards
const BadgeCard = ({ badge, isEarned }: any) => (
  <div className={`bg-white p-6 rounded-xl shadow-sm border text-center ${
    isEarned ? 'border-yellow-500 bg-yellow-50' : 'border-gray-200 opacity-60'
  }`}>
    <div className={`text-4xl mb-3 ${isEarned ? '' : 'grayscale'}`}>
      {badge.icon}
    </div>
    <h3 className={`text-lg font-semibold mb-2 ${isEarned ? 'text-gray-900' : 'text-gray-500'}`}>
      {badge.name}
    </h3>
    <p className={`text-sm mb-3 ${isEarned ? 'text-gray-600' : 'text-gray-400'}`}>
      {badge.description}
    </p>
    <div className={`text-xs ${isEarned ? 'text-yellow-800' : 'text-gray-400'}`}>
      {isEarned ? 'Earned!' : badge.requirement}
    </div>
  </div>
);

export default StudentDashboard;