import { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Trophy, Clock, Star } from 'lucide-react';

interface MiniGamePlayerProps {
  game: {
    id: string;
    name: string;
    type: 'quiz' | 'puzzle' | 'memory' | 'reaction' | 'strategy';
    timeLimit: number;
    xpReward: number;
  };
  onComplete: (score: number) => void;
  onClose: () => void;
}

// Water Drop Catch Game
const WaterDropCatch = ({ onComplete, timeLimit }: { onComplete: (score: number) => void; timeLimit: number }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [gameState, setGameState] = useState<'playing' | 'paused' | 'ended'>('playing');
  const [drops, setDrops] = useState<Array<{ x: number; y: number; speed: number; id: number }>>([]);
  const gameLoopRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 400;
    canvas.height = 300;

    let dropIdCounter = 0;

    const gameLoop = () => {
      if (gameState !== 'playing') return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update drops
      setDrops(prevDrops => {
        const newDrops = prevDrops.map(drop => ({
          ...drop,
          y: drop.y + drop.speed
        })).filter(drop => drop.y < canvas.height);

        // Add new drops occasionally
        if (Math.random() < 0.05) {
          newDrops.push({
            x: Math.random() * (canvas.width - 20),
            y: 0,
            speed: 2 + Math.random() * 3,
            id: dropIdCounter++
          });
        }

        return newDrops;
      });

      gameLoopRef.current = requestAnimationFrame(gameLoop);
    };

    gameLoop();

    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    };
  }, [gameState]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    // Draw background
    ctx.fillStyle = '#87CEEB';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw drops
    ctx.fillStyle = '#0066CC';
    drops.forEach(drop => {
      ctx.beginPath();
      ctx.arc(drop.x + 10, drop.y + 10, 8, 0, Math.PI * 2);
      ctx.fill();
    });

    // Draw bucket
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(175, 260, 50, 30);
  }, [drops]);

  useEffect(() => {
    if (timeLeft > 0 && gameState === 'playing') {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setGameState('ended');
      onComplete(score);
    }
  }, [timeLeft, gameState, score, onComplete]);

  const handleCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (gameState !== 'playing') return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    // Check if clicked on a drop
    setDrops(prevDrops => {
      let caught = false;
      const newDrops = prevDrops.filter(drop => {
        const distance = Math.sqrt(
          Math.pow(clickX - (drop.x + 10), 2) + Math.pow(clickY - (drop.y + 10), 2)
        );
        if (distance < 15 && !caught) {
          caught = true;
          setScore(prev => prev + 10);
          return false;
        }
        return true;
      });
      return newDrops;
    });
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center justify-between w-full max-w-md">
        <div className="flex items-center space-x-2">
          <Trophy className="h-5 w-5 text-yellow-500" />
          <span className="font-semibold">Score: {score}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="h-5 w-5 text-blue-500" />
          <span className="font-semibold">{timeLeft}s</span>
        </div>
      </div>

      <canvas
        ref={canvasRef}
        onClick={handleCanvasClick}
        className="border-2 border-gray-300 rounded-lg cursor-pointer bg-blue-100"
        style={{ imageRendering: 'pixelated' }}
      />

      <div className="flex space-x-2">
        <button
          onClick={() => setGameState(gameState === 'playing' ? 'paused' : 'playing')}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"
        >
          {gameState === 'playing' ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          <span>{gameState === 'playing' ? 'Pause' : 'Resume'}</span>
        </button>
        
        <button
          onClick={() => {
            setScore(0);
            setTimeLeft(timeLimit);
            setDrops([]);
            setGameState('playing');
          }}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center space-x-2"
        >
          <RotateCcw className="h-4 w-4" />
          <span>Restart</span>
        </button>
      </div>

      <p className="text-sm text-gray-600 text-center max-w-md">
        Click on the falling water drops to catch them! Save as much water as possible before time runs out.
      </p>
    </div>
  );
};

// Memory Match Game
const MemoryMatch = ({ onComplete, timeLimit }: { onComplete: (score: number) => void; timeLimit: number }) => {
  const [cards, setCards] = useState<Array<{ id: number; content: string; isFlipped: boolean; isMatched: boolean }>>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [moves, setMoves] = useState(0);

  const cardPairs = [
    '💧', '🌊', '🚿', '🏊', '☔', '🌧️', '💦', '🏔️'
  ];

  useEffect(() => {
    // Initialize cards
    const shuffledCards = [...cardPairs, ...cardPairs]
      .sort(() => Math.random() - 0.5)
      .map((content, index) => ({
        id: index,
        content,
        isFlipped: false,
        isMatched: false
      }));
    setCards(shuffledCards);
  }, []);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      onComplete(score);
    }
  }, [timeLeft, score, onComplete]);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      const firstCard = cards.find(card => card.id === first);
      const secondCard = cards.find(card => card.id === second);

      if (firstCard && secondCard && firstCard.content === secondCard.content) {
        // Match found
        setTimeout(() => {
          setCards(prev => prev.map(card => 
            card.id === first || card.id === second 
              ? { ...card, isMatched: true }
              : card
          ));
          setScore(prev => prev + 20);
          setFlippedCards([]);
        }, 500);
      } else {
        // No match
        setTimeout(() => {
          setCards(prev => prev.map(card => 
            card.id === first || card.id === second 
              ? { ...card, isFlipped: false }
              : card
          ));
          setFlippedCards([]);
        }, 1000);
      }
      setMoves(prev => prev + 1);
    }
  }, [flippedCards, cards]);

  const handleCardClick = (cardId: number) => {
    if (flippedCards.length === 2) return;
    if (flippedCards.includes(cardId)) return;
    if (cards.find(card => card.id === cardId)?.isMatched) return;

    setCards(prev => prev.map(card => 
      card.id === cardId ? { ...card, isFlipped: true } : card
    ));
    setFlippedCards(prev => [...prev, cardId]);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center justify-between w-full max-w-md">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-500" />
            <span className="text-sm font-semibold">{score}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-sm">Moves: {moves}</span>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <Clock className="h-4 w-4 text-blue-500" />
          <span className="font-semibold">{timeLeft}s</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 max-w-md">
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            disabled={card.isMatched || card.isFlipped}
            className={`w-16 h-16 text-2xl rounded-lg border-2 transition-all duration-300 ${
              card.isFlipped || card.isMatched
                ? 'bg-white border-blue-300 shadow-md'
                : 'bg-blue-500 border-blue-600 hover:bg-blue-400'
            } ${card.isMatched ? 'opacity-75 cursor-not-allowed' : 'cursor-pointer'}`}
          >
            {card.isFlipped || card.isMatched ? card.content : '?'}
          </button>
        ))}
      </div>

      <p className="text-sm text-gray-600 text-center max-w-md">
        Match pairs of water-related emojis! Remember their positions to score more points.
      </p>
    </div>
  );
};

export default function MiniGamePlayer({ game, onComplete, onClose }: MiniGamePlayerProps) {
  const [gameEnded, setGameEnded] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const handleGameComplete = (score: number) => {
    setFinalScore(score);
    setGameEnded(true);
  };

  const handleFinish = () => {
    onComplete(finalScore);
    onClose();
  };

  if (gameEnded) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-8 text-center max-w-md w-full mx-4">
          <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Game Complete!</h3>
          <p className="text-lg text-gray-600 mb-4">Final Score: {finalScore}</p>
          <p className="text-sm text-gray-500 mb-6">+{game.xpReward} XP earned!</p>
          <button
            onClick={handleFinish}
            className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800">{game.name}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl font-bold"
          >
            ×
          </button>
        </div>

        {game.id === 'water-drop-catch' && (
          <WaterDropCatch onComplete={handleGameComplete} timeLimit={game.timeLimit} />
        )}

        {game.id === 'eco-memory' && (
          <MemoryMatch onComplete={handleGameComplete} timeLimit={game.timeLimit} />
        )}

        {!['water-drop-catch', 'eco-memory'].includes(game.id) && (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading {game.name}...</p>
            <p className="text-sm text-gray-500 mt-2">This is a demo - completing in 3 seconds</p>
            <button
              onClick={() => handleGameComplete(Math.floor(Math.random() * 100) + 50)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Complete Demo Game
            </button>
          </div>
        )}
      </div>
    </div>
  );
}