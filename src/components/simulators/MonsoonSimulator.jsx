import React, { useState } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  ArrowRight, 
  Wind, 
  CloudRain, 
  Sun, 
  Thermometer, 
  ShieldAlert,
  Info
} from 'lucide-react';

export default function MonsoonSimulator({ 
  climateData = {}, 
  onStartClimatePractice 
}) {
  const stages = climateData.stages || [];
  const [currentStageIdx, setCurrentStageIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const activeStage = stages[currentStageIdx] || {};

  const handleNext = () => {
    setCurrentStageIdx(prev => (prev + 1) % stages.length);
  };

  const handlePrev = () => {
    setCurrentStageIdx(prev => (prev - 1 + stages.length) % stages.length);
  };

  return (
    <div className="space-y-6">
      {/* Overview Card */}
      <div className="p-6 rounded-3xl border shadow-sm
        bg-white/80 border-sepia-300 text-sepia-900
        dark:bg-slate-900/80 dark:border-slate-800 dark:text-slate-100">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300 border border-sky-300 dark:border-sky-800">
                DYNAMIC CLIMATOLOGY ENGINE
              </span>
              <span className="text-xs text-sepia-600 dark:text-slate-400 font-mono">
                Stage {activeStage.stage || 1} of {stages.length}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-sepia-900 dark:text-slate-100 mt-1">
              Indian Summer & Winter Monsoon Physics
            </h3>
            <p className="text-xs sm:text-sm text-sepia-700 dark:text-slate-400 mt-1">
              Atmospheric mechanics driving the lifeblood of Indian agriculture: thermal lows, Somali jet, ITCZ shift, and jet streams.
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentStageIdx(0)}
              className="p-2 rounded-xl border border-sepia-300 dark:border-slate-700 hover:bg-sepia-100 dark:hover:bg-slate-800 text-sepia-700 dark:text-slate-300"
              title="Reset to Stage 1"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={handlePrev}
              className="px-3 py-2 rounded-xl border border-sepia-300 dark:border-slate-700 text-xs font-bold hover:bg-sepia-100 dark:hover:bg-slate-800"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold shadow flex items-center space-x-1.5"
            >
              <span>Next Phase</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Interactive Stage Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left 7 Cols: Physics & Atmospheric Diagram */}
        <div className="lg:col-span-7 rounded-3xl p-6 border shadow-md flex flex-col justify-between
          bg-[#f7f4ea] border-sepia-300 text-sepia-900
          dark:bg-[#090e17] dark:border-slate-800 dark:text-slate-100">
          
          <div>
            <div className="flex items-center justify-between border-b border-sepia-200 dark:border-slate-800 pb-3">
              <div>
                <span className="text-xs font-mono font-bold text-sky-700 dark:text-sky-400">
                  {activeStage.period}
                </span>
                <h4 className="text-lg sm:text-xl font-bold font-display text-sepia-900 dark:text-slate-100 mt-0.5">
                  {activeStage.name}
                </h4>
                {activeStage.hindi && (
                  <p className="text-xs font-hindi text-sepia-600 dark:text-sky-300">
                    {activeStage.hindi}
                  </p>
                )}
              </div>
              <div className="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-950 flex items-center justify-center text-sky-600 dark:text-sky-400">
                <Wind className="w-6 h-6 animate-pulse" />
              </div>
            </div>

            {/* Schematic Atmospheric Canvas */}
            <div className="mt-6 p-4 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-sepia-200 dark:border-slate-800 relative overflow-hidden">
              <svg viewBox="0 0 600 320" className="w-full h-auto">
                <defs>
                  <linearGradient id="warmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#ef4444" stopOpacity="0.4" />
                  </linearGradient>
                  <linearGradient id="oceanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0284c7" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#0369a1" stopOpacity="0.3" />
                  </linearGradient>
                </defs>

                {/* Land & Sea Background */}
                <rect x="0" y="0" width="600" height="180" fill="url(#warmGrad)" rx="12" />
                <text x="20" y="30" fill="#92400e" fontSize="12" fontFamily="monospace" fontWeight="bold">
                  NORTHERN SUBCONTINENT & TIBETAN PLATEAU
                </text>

                <rect x="0" y="190" width="600" height="130" fill="url(#oceanGrad)" rx="12" />
                <text x="20" y="215" fill="#0369a1" fontSize="12" fontFamily="monospace" fontWeight="bold">
                  EQUATORIAL INDIAN OCEAN & ARABIAN SEA
                </text>

                {/* Stage-dependent schematic vectors */}
                {activeStage.stage === 1 && (
                  <g>
                    <circle cx="300" cy="80" r="45" fill="#ef4444" opacity="0.4" className="animate-ping" />
                    <circle cx="300" cy="80" r="30" fill="#dc2626" opacity="0.8" />
                    <text x="265" y="85" fill="#fff" fontSize="11" fontWeight="bold" fontFamily="monospace">
                      LOW (996 hPa)
                    </text>
                    <text x="230" y="140" fill="#991b1b" fontSize="11" fontWeight="bold">
                      Thar / Multan Thermal Heating
                    </text>
                  </g>
                )}

                {activeStage.stage === 2 && (
                  <g>
                    <line x1="50" y1="120" x2="550" y2="120" stroke="#dc2626" strokeWidth="3" strokeDasharray="6 4" />
                    <text x="220" y="112" fill="#dc2626" fontSize="12" fontWeight="bold" fontFamily="monospace">
                      ITCZ MIGRATES TO 22°N
                    </text>
                    <circle cx="100" cy="270" r="25" fill="#0284c7" opacity="0.7" />
                    <text x="75" y="275" fill="#fff" fontSize="10" fontWeight="bold">
                      HIGH (Mascarene)
                    </text>
                  </g>
                )}

                {activeStage.stage === 3 && (
                  <g>
                    <path d="M 80 280 C 140 250, 200 180, 320 140" fill="none" stroke="#0284c7" strokeWidth="6" markerEnd="url(#arrow)" />
                    <text x="140" y="210" fill="#0369a1" fontSize="11" fontWeight="bold" transform="rotate(-25 140 210)">
                      SOMALI LOW-LEVEL JET (Findlater Jet)
                    </text>
                  </g>
                )}

                {(activeStage.stage === 4 || activeStage.stage === 5) && (
                  <g>
                    {/* Arabian sea branch */}
                    <path d="M 120 280 Q 200 230, 250 160" fill="none" stroke="#0284c7" strokeWidth="5" />
                    <text x="120" y="200" fill="#0284c7" fontSize="10" fontWeight="bold">
                      Arabian Sea Branch (Strikes Ghats)
                    </text>

                    {/* Bay of Bengal branch */}
                    <path d="M 380 280 Q 450 200, 480 120" fill="none" stroke="#0369a1" strokeWidth="5" />
                    <text x="410" y="230" fill="#0369a1" fontSize="10" fontWeight="bold">
                      Bay of Bengal Branch (Meghalaya funnel)
                    </text>
                  </g>
                )}

                {(activeStage.stage >= 6 && activeStage.stage <= 8) && (
                  <g>
                    <path d="M 450 100 Q 380 170, 300 250" fill="none" stroke="#475569" strokeWidth="4" strokeDasharray="5 3" />
                    <text x="350" y="190" fill="#334155" fontSize="10" fontWeight="bold">
                      Northeast Retreating Winds (Oct-Nov)
                    </text>
                    <rect x="260" y="240" width="100" height="30" fill="#10b981" opacity="0.4" rx="6" />
                    <text x="270" y="260" fill="#065f46" fontSize="10" fontWeight="bold">
                      TN Coromandel Rain
                    </text>
                  </g>
                )}
              </svg>
            </div>

            {/* Physics Mechanics */}
            <div className="mt-4 space-y-1.5 text-xs sm:text-sm">
              <span className="font-mono font-bold text-sepia-600 dark:text-slate-400 uppercase tracking-wider text-[11px]">
                Atmospheric Physics Mechanism:
              </span>
              <p className="text-sepia-800 dark:text-slate-200 leading-relaxed font-sans">
                {activeStage.physics}
              </p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-sepia-200 dark:border-slate-800 text-xs text-sepia-600 dark:text-slate-400 flex items-center justify-between">
            <span>Period: <strong className="text-sepia-900 dark:text-slate-200">{activeStage.period}</strong></span>
            <span>Köppen classification: <strong>Amw / Cwg / Aw</strong></span>
          </div>

        </div>

        {/* Right 5 Cols: Associated Regional Phenomena & Traps */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-3xl border shadow-sm
            bg-white/80 border-sepia-300 text-sepia-900
            dark:bg-slate-900/80 dark:border-slate-800 dark:text-slate-100 space-y-4">
            
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 flex items-center space-x-1.5">
              <CloudRain className="w-4 h-4" />
              <span>Ground Realities & Storm Phenomena</span>
            </h4>

            <p className="text-xs sm:text-sm text-sepia-800 dark:text-slate-200 leading-relaxed">
              {activeStage.phenomena}
            </p>

            <div className="pt-2 border-t border-sepia-200 dark:border-slate-800 space-y-2">
              <span className="text-[11px] font-mono font-bold text-sepia-500 dark:text-slate-400 uppercase">
                All 8 Stages Quick Select:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {stages.map((st, i) => (
                  <button
                    key={st.stage}
                    onClick={() => setCurrentStageIdx(i)}
                    className={`p-2 rounded-xl text-left text-xs font-semibold transition-all border ${
                      i === currentStageIdx
                        ? 'bg-sky-600 text-white border-sky-600 shadow'
                        : 'bg-sepia-50 dark:bg-slate-800 text-sepia-800 dark:text-slate-300 border-sepia-200 dark:border-slate-700 hover:bg-sepia-100'
                    }`}
                  >
                    <div className="font-mono text-[10px] opacity-80">Stage {st.stage}</div>
                    <div className="truncate">{st.name.split('/')[0]}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Teleconnections Quick Card */}
          <div className="p-5 rounded-3xl border border-sepia-300 dark:border-slate-800 bg-[#fdfaf3] dark:bg-slate-900/50 text-xs space-y-2">
            <span className="font-bold text-sepia-900 dark:text-amber-300 flex items-center space-x-1">
              <Info className="w-4 h-4 text-saffron-600" />
              <span>Global Teleconnections (ENSO & IOD)</span>
            </span>
            <p className="text-sepia-700 dark:text-slate-400 leading-relaxed">
              <strong>El Niño:</strong> Warming of central Pacific weakens the Walker circulation, often causing monsoon deficits in India.
              <br />
              <strong>Positive IOD:</strong> Warmer western Indian Ocean enhances moisture flow, counteracting El Niño's drying influence.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
