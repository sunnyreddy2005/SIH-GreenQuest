import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  Trophy, Zap, Target, Star, Crown, Gamepad2, 
  Award, Timer, Play, Gift,
  Users, Flame, Calendar, ChevronRight, Medal
} from 'lucide-react';
import { AuthService } from '../../utils/auth';
import { GameProfile, MiniGame } from '../../data/gameData';
import { miniGames, activeTournaments, levelRequirements } from '../../data/gameData';
import MiniGamePlayer from '../../components/MiniGamePlayer';

interface GameDashboardProps {
  onNavigate: (tab: string) => void;
}

export default function GameDashboard({ onNavigate }: GameDashboardProps) {
  const { user } = useAuth();
  const [gameProfile, setGameProfile] = useState<GameProfile | null>(null);
  const [selectedMiniGame, setSelectedMiniGame] = useState<MiniGame | null>(null);

  useEffect(() => {
    if (user) {
      loadGameProfile();
      updateDailyStreak();
    }
  }, [user]);

  const loadGameProfile = () => {
    if (!user) return;
    
    let profile = AuthService.getGameProfile(user.id);
    if (!profile) {
      profile = AuthService.createGameProfile(user.id);
    }
    setGameProfile(profile);
  };

  const updateDailyStreak = () => {
    if (!user) return;
    
    const updatedProfile = AuthService.updateDailyStreak(user.id);
    if (updatedProfile) {
      setGameProfile(updatedProfile);
    }
  };

  const handlePlayMiniGame = (game: MiniGame) => {
    if (!user || !gameProfile) return;
    
    if (gameProfile.energyPoints < game.energyCost) {
      alert('Not enough energy! Wait for energy to regenerate or use an Energy Boost.');
      return;
    }

    // Remove level restriction - all games are now unlocked
    // if (gameProfile.level < game.unlockLevel) {
    //   alert(`This game unlocks at level ${game.unlockLevel}!`);
    //   return;
    // }

    setSelectedMiniGame(game);
  };

  const handleGameComplete = (score: number) => {
    if (!user || !selectedMiniGame) return;

    // Use energy
    AuthService.useEnergy(user.id, selectedMiniGame.energyCost);
    
    // Calculate XP based on score (bonus for high scores)
    const baseXP = selectedMiniGame.xpReward;
    const bonusXP = Math.floor(score / 10);
    const totalXP = baseXP + bonusXP;
    
    // Add XP
    const updatedProfile = AuthService.addXP(user.id, totalXP);
    if (updatedProfile) {
      setGameProfile(updatedProfile);
    }

    setSelectedMiniGame(null);
    
    // Show completion message
    alert(`Game completed! Score: ${score}\n+${totalXP} XP earned!`);
  };

  const handleCloseGame = () => {
    setSelectedMiniGame(null);
  };

  const useInventoryItem = (itemId: string) => {
    if (!user) return;
    
    const success = AuthService.useInventoryItem(user.id, itemId);
    if (success) {
      loadGameProfile();
      alert('Item used successfully!');
    }
  };

  const getLevelProgress = () => {
    if (!gameProfile) return 0;
    const currentLevelReq = levelRequirements.find(req => req.level === gameProfile.level);
    const nextLevelReq = levelRequirements.find(req => req.level === gameProfile.level + 1);
    
    if (!currentLevelReq || !nextLevelReq) return 100;
    
    const currentXP = gameProfile.xp - currentLevelReq.xpRequired;
    const requiredXP = nextLevelReq.xpRequired - currentLevelReq.xpRequired;
    
    return (currentXP / requiredXP) * 100;
  };

  const getEnergyRefreshTime = () => {
    if (!gameProfile) return '';
    
    const lastRefresh = new Date(gameProfile.lastEnergyRefresh);
    const now = new Date();
    const nextRefresh = new Date(lastRefresh.getTime() + 60 * 60 * 1000); // 1 hour
    
    if (now >= nextRefresh) return 'Ready to refresh!';
    
    const timeLeft = nextRefresh.getTime() - now.getTime();
    const minutes = Math.floor(timeLeft / (1000 * 60));
    return `${minutes}m until next energy`;
  };

  if (!user || !gameProfile) {
    return <div className="p-6 text-center">Loading game profile...</div>;
  }

  const currentLevelData = levelRequirements.find(req => req.level === gameProfile.level);
  // All games are now available regardless of level
  const availableGames = miniGames;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Game Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Level {gameProfile.level}</p>
              <p className="text-2xl font-bold">{currentLevelData?.title}</p>
              <div className="w-full bg-purple-400 rounded-full h-2 mt-2">
                <div 
                  className="bg-white h-2 rounded-full transition-all duration-300"
                  style={{ width: `${getLevelProgress()}%` }}
                ></div>
              </div>
              <p className="text-xs text-purple-100 mt-1">{gameProfile.xpToNextLevel} XP to next level</p>
            </div>
            <Crown className="h-8 w-8" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Experience</p>
              <p className="text-2xl font-bold">{gameProfile.xp.toLocaleString()}</p>
              <p className="text-sm text-blue-100">Total XP earned</p>
            </div>
            <Star className="h-8 w-8" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Streak</p>
              <p className="text-2xl font-bold">{gameProfile.streak} days</p>
              <p className="text-sm text-orange-100">Longest: {gameProfile.longestStreak}</p>
            </div>
            <Flame className="h-8 w-8" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Energy</p>
              <p className="text-2xl font-bold">{gameProfile.energyPoints}/{gameProfile.maxEnergy}</p>
              <p className="text-xs text-green-100">{getEnergyRefreshTime()}</p>
            </div>
            <Zap className="h-8 w-8" />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <button
          onClick={() => onNavigate('modules')}
          className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow border border-gray-200"
        >
          <div className="flex items-center justify-between">
            <div className="text-left">
              <p className="font-semibold text-gray-800">Continue Learning</p>
              <p className="text-sm text-gray-600">Complete modules for XP</p>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </div>
        </button>

        <button
          onClick={() => onNavigate('challenges')}
          className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow border border-gray-200"
        >
          <div className="flex items-center justify-between">
            <div className="text-left">
              <p className="font-semibold text-gray-800">Take Challenges</p>
              <p className="text-sm text-gray-600">Real-world actions</p>
            </div>
            <Target className="h-5 w-5 text-gray-400" />
          </div>
        </button>

        <button
          onClick={() => onNavigate('leaderboard')}
          className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow border border-gray-200"
        >
          <div className="flex items-center justify-between">
            <div className="text-left">
              <p className="font-semibold text-gray-800">Leaderboard</p>
              <p className="text-sm text-gray-600">See your ranking</p>
            </div>
            <Trophy className="h-5 w-5 text-gray-400" />
          </div>
        </button>
      </div>

      {/* Mini Games Section */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <Gamepad2 className="h-6 w-6 text-purple-600" />
            Mini Games
            <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full ml-2">
              🔓 All Unlocked
            </span>
          </h2>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Zap className="h-4 w-4" />
            {gameProfile.energyPoints} energy available
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {availableGames.map((game) => (
            <div key={game.id} className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors bg-white shadow-sm">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-gray-800">{game.name}</h3>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    Lv.{game.unlockLevel}
                  </span>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  game.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                  game.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {game.difficulty}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-3">{game.description}</p>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Timer className="h-3 w-3" />
                    {game.timeLimit}s
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    +{game.xpReward} XP
                  </span>
                  <span className="flex items-center gap-1">
                    <Zap className="h-3 w-3" />
                    -{game.energyCost}
                  </span>
                </div>
              </div>
              <button
                onClick={() => handlePlayMiniGame(game)}
                disabled={gameProfile.energyPoints < game.energyCost || selectedMiniGame !== null}
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
              >
                <Play className="h-4 w-4" />
                {gameProfile.energyPoints < game.energyCost ? 'Not Enough Energy' : 'Play Game'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Achievements */}
      {gameProfile.achievements.length > 0 && (
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-4">
            <Award className="h-6 w-6 text-yellow-600" />
            Recent Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {gameProfile.achievements.slice(-4).map((achievement) => (
              <div key={achievement.id} className={`border-2 rounded-lg p-4 ${
                achievement.rarity === 'legendary' ? 'border-yellow-300 bg-yellow-50' :
                achievement.rarity === 'epic' ? 'border-purple-300 bg-purple-50' :
                achievement.rarity === 'rare' ? 'border-blue-300 bg-blue-50' :
                'border-gray-300 bg-gray-50'
              }`}>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{achievement.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">{achievement.name}</h3>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        achievement.rarity === 'legendary' ? 'bg-yellow-200 text-yellow-800' :
                        achievement.rarity === 'epic' ? 'bg-purple-200 text-purple-800' :
                        achievement.rarity === 'rare' ? 'bg-blue-200 text-blue-800' :
                        'bg-gray-200 text-gray-800'
                      }`}>
                        {achievement.rarity}
                      </span>
                      <span className="text-xs text-gray-500">
                        +{achievement.reward.xp} XP
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Inventory */}
      {gameProfile.inventory.length > 0 && (
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-4">
            <Gift className="h-6 w-6 text-green-600" />
            Inventory
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gameProfile.inventory.map((item) => (
              <div key={item.id} className="border border-gray-200 rounded-lg p-3 text-center">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h4 className="font-semibold text-sm text-gray-800">{item.name}</h4>
                <p className="text-xs text-gray-600 mb-2">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">×{item.quantity}</span>
                  {item.type === 'power-up' && (
                    <button
                      onClick={() => useInventoryItem(item.id)}
                      className="text-xs bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700"
                    >
                      Use
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Active Tournaments */}
      {activeTournaments.length > 0 && (
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-4">
            <Medal className="h-6 w-6 text-gold-600" />
            Active Tournaments
          </h2>
          {activeTournaments.map((tournament) => (
            <div key={tournament.id} className="border border-gray-200 rounded-lg p-4 mb-4 last:mb-0">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-gray-800">{tournament.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{tournament.description}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(tournament.startDate).toLocaleDateString()} - {new Date(tournament.endDate).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {tournament.participants.length} participants
                    </span>
                  </div>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  tournament.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
                  tournament.status === 'active' ? 'bg-green-100 text-green-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {tournament.status}
                </span>
              </div>
              {tournament.status === 'upcoming' && (
                <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Register for Tournament
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Mini Game Player */}
      {selectedMiniGame && (
        <MiniGamePlayer
          game={selectedMiniGame}
          onComplete={handleGameComplete}
          onClose={handleCloseGame}
        />
      )}
    </div>
  );
}