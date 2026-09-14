import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  MapPin, 
  Award, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  HelpCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import { projectCoordinates } from '../../utils/mapProjections';
import confetti from 'canvas-confetti';

export default function MapPointingDrill({ 
  passesPeaksData = [],
  onExitDrill 
}) {
  const [drillMode, setDrillMode] = useState('practice'); // practice, test, learn
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedPin, setSelectedPin] = useState(null);
  const [feedback, setFeedback] = useState(null); // 'correct', 'wrong'
  const [hintLevel, setHintLevel] = useState(0);

  // Take 15 random items for drill
  const drillItems = passesPeaksData.slice(0, 20);
  const currentTarget = drillItems[currentIndex] || drillItems[0];

  const handlePinClick = (item) => {
    setSelectedPin(item);

    if (drillMode === 'learn') return;

    if (item.id === currentTarget.id) {
      setFeedback('correct');
      setScore(prev => prev + 10 - (hintLevel * 2));
      try {
        confetti({ particleCount: 30, spread: 50, origin: { y: 0.6 } });
      } catch (e) {}
    } else {
      setFeedback('wrong');
    }
  };

  const handleNext = () => {
    setFeedback(null);
    setSelectedPin(null);
    setHintLevel(0);
    setCurrentIndex(prev => (prev + 1) % drillItems.length);
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setScore(0);
    setFeedback(null);
    setSelectedPin(null);
    setHintLevel(0);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 animate-fade-in">
      
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-sepia-300 dark:border-slate-800 pb-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
              BLIND MAP DRILL
            </span>
            <span className="text-xs font-mono text-sepia-600 dark:text-slate-400">
              Question {currentIndex + 1} of {drillItems.length}
            </span>
          </div>
          <h3 className="text-2xl font-bold font-display text-sepia-900 dark:text-slate-100 mt-1">
            Map Pointing & Spatial Recognition
          </h3>
        </div>

        <div className="flex items-center space-x-3">
          {/* Mode Switcher */}
          <div className="flex rounded-xl bg-sepia-100 dark:bg-slate-800 p-0.5 border border-sepia-200 dark:border-slate-700 text-xs">
            {['practice', 'learn', 'test'].map(mode => (
              <button
                key={mode}
                onClick={() => {
                  setDrillMode(mode);
                  handleReset();
                }}
                className={`px-3 py-1.5 rounded-lg capitalize font-bold transition-all ${
                  drillMode === mode
                    ? 'bg-saffron-600 text-white shadow-xs'
                    : 'text-sepia-600 dark:text-slate-400 hover:text-sepia-900'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>

          <div className="px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300 text-xs font-bold font-mono">
            Score: {score} pts
          </div>

          <button
            onClick={onExitDrill}
            className="px-3 py-1.5 rounded-xl text-xs font-bold border border-sepia-300 dark:border-slate-700 hover:bg-sepia-100 dark:hover:bg-slate-800"
          >
            Exit Drill
          </button>
        </div>
      </div>

      {/* Target Prompt Card (In Practice & Test Mode) */}
      {drillMode !== 'learn' && (
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-saffron-500/10 to-amber-500/10 border border-saffron-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase text-saffron-700 dark:text-amber-400">
              TARGET OBJECTIVE:
            </span>
            <h4 className="text-xl sm:text-2xl font-black font-display text-sepia-900 dark:text-amber-200">
              Locate "{currentTarget.name}" on the Map
            </h4>
            <p className="text-xs text-sepia-600 dark:text-slate-300 mt-0.5">
              Type: <strong className="capitalize">{currentTarget.type}</strong> • State: <strong>{currentTarget.state}</strong>
            </p>
          </div>

          <div className="flex items-center space-x-2">
            {hintLevel === 0 && (
              <button
                onClick={() => setHintLevel(1)}
                className="px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800"
              >
                Show Hint (-2 pts)
              </button>
            )}
            {hintLevel >= 1 && (
              <span className="text-xs font-medium text-amber-700 dark:text-amber-300 bg-white/80 dark:bg-slate-800 p-2 rounded-xl border border-amber-300/60">
                💡 Hint: Situated in {currentTarget.range} range.
              </span>
            )}
          </div>
        </div>
      )}

      {/* SVG Canvas with Blind Pins */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-8 rounded-3xl p-4 sm:p-6 border shadow-lg bg-[#faf7ee] border-sepia-300 dark:bg-[#070b11] dark:border-slate-800">
          <div className="w-full aspect-[4/4.5] overflow-auto flex items-center justify-center select-none">
            <svg viewBox="0 0 800 900" className="w-full h-full max-h-[700px]">
              
              {/* Subtle Graticule */}
              <defs>
                <pattern id="drillGraticule" width="80" height="90" patternUnits="userSpaceOnUse">
                  <path d="M 80 0 L 0 0 0 90" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-sepia-300/40 dark:text-slate-800/60" />
                </pattern>
              </defs>
              <rect width="800" height="900" fill="url(#drillGraticule)" />

              {/* Pins */}
              {drillItems.map((item, idx) => {
                const coords = projectCoordinates(item.lat, item.lon, 800, 900);
                const isTarget = item.id === currentTarget.id;
                const isSelected = selectedPin?.id === item.id;

                return (
                  <g
                    key={item.id}
                    transform={`translate(${coords.x}, ${coords.y})`}
                    onClick={() => handlePinClick(item)}
                    className="cursor-pointer group"
                  >
                    <circle
                      r={isSelected ? 10 : 7}
                      fill={
                        drillMode === 'learn'
                          ? '#f59e0b'
                          : feedback && isTarget
                          ? '#10b981'
                          : feedback && isSelected
                          ? '#ef4444'
                          : '#64748b'
                      }
                      stroke="#fff"
                      strokeWidth="2"
                      className="group-hover:scale-150 transition-transform shadow-md"
                    />
                    {drillMode === 'learn' && (
                      <text
                        x="10"
                        y="4"
                        fontSize="9"
                        fontWeight="bold"
                        fill="currentColor"
                        className="text-sepia-800 dark:text-slate-200 pointer-events-none"
                      >
                        {item.name}
                      </text>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Right 4 Cols: Feedback & Result */}
        <div className="lg:col-span-4 p-6 rounded-3xl border shadow-md bg-white/90 border-sepia-300 text-sepia-900 dark:bg-slate-900/90 dark:border-slate-800 dark:text-slate-100 space-y-4">
          <span className="text-[10px] font-mono font-bold uppercase text-saffron-700 dark:text-amber-400">
            PIN FEEDBACK
          </span>

          {feedback === 'correct' ? (
            <div className="space-y-3 animate-fade-in">
              <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-6 h-6" />
                <h4 className="text-lg font-bold font-display">Spot On! Correct Pin</h4>
              </div>
              <p className="text-xs text-sepia-700 dark:text-slate-300 leading-relaxed">
                {currentTarget.importance || currentTarget.connects}
              </p>
              <button
                onClick={handleNext}
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow"
              >
                Next Location →
              </button>
            </div>
          ) : feedback === 'wrong' ? (
            <div className="space-y-3 animate-fade-in">
              <div className="flex items-center space-x-2 text-rose-600 dark:text-rose-400">
                <XCircle className="w-6 h-6" />
                <h4 className="text-lg font-bold font-display">Incorrect Pin</h4>
              </div>
              <p className="text-xs text-sepia-700 dark:text-slate-300">
                You selected: <strong>{selectedPin?.name}</strong> ({selectedPin?.state}). Look closer to {currentTarget.range}!
              </p>
            </div>
          ) : (
            <div className="py-8 text-center text-xs text-sepia-600 dark:text-slate-400">
              <Compass className="w-8 h-8 mx-auto mb-2 text-saffron-600 opacity-60" />
              <p className="font-semibold">Click a pin on the map to submit your answer.</p>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
