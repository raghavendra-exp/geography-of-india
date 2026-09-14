import React, { useState } from 'react';
import { 
  GitMerge, 
  ArrowRight, 
  CheckCircle2, 
  Compass, 
  Lightbulb, 
  AlertCircle, 
  BookOpen, 
  HelpCircle,
  ExternalLink
} from 'lucide-react';

export default function MasterFlowExplorer({ 
  masterFlowData = [], 
  onStartStationPractice,
  lang = 'en' 
}) {
  const [activeStationIndex, setActiveStationIndex] = useState(0);

  if (!masterFlowData || masterFlowData.length === 0) {
    return (
      <div className="p-8 text-center text-sepia-600 dark:text-slate-400">
        Loading Master Causal Flow data...
      </div>
    );
  }

  const current = masterFlowData[activeStationIndex] || masterFlowData[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      
      {/* Header & Concept intro */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-sepia-300/80 dark:border-slate-800 pb-6">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-saffron-100 text-saffron-800 dark:bg-amber-950 dark:text-amber-300 border border-saffron-300 dark:border-amber-800">
              CAUSAL CHAIN ENGINE
            </span>
            <span className="text-xs text-sepia-600 dark:text-slate-400 font-mono">
              Station {current.station} of {masterFlowData.length}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-sepia-900 dark:text-slate-100 mt-1">
            Master Causal Flow of Indian Geography
          </h2>
          <p className="text-xs sm:text-sm text-sepia-700 dark:text-slate-400 mt-1 max-w-3xl">
            Geography is not isolated rote memorization; it is an unbroken causal chain. Geology dictates Relief; Relief commands River courses & Climate; Climate creates Soils; Soils govern Crops and Human Settlement.
          </p>
        </div>

        <button
          onClick={() => onStartStationPractice?.(current.title)}
          className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all shadow-md
            bg-saffron-600 hover:bg-saffron-700 text-white ring-1 ring-saffron-500 shrink-0"
        >
          <HelpCircle className="w-4 h-4" />
          <span>Practice Station Questions</span>
        </button>
      </div>

      {/* Horizontal Station Tracker / Stepper */}
      <div className="overflow-x-auto pb-3 no-scrollbar">
        <div className="flex items-center space-x-2 min-w-max">
          {masterFlowData.map((station, idx) => {
            const isActive = idx === activeStationIndex;
            return (
              <button
                key={station.id}
                onClick={() => setActiveStationIndex(idx)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all border ${
                  isActive
                    ? 'bg-saffron-600 border-saffron-600 text-white shadow-md shadow-saffron-600/30'
                    : 'bg-white/70 dark:bg-slate-900/70 border-sepia-300/80 dark:border-slate-800 text-sepia-800 dark:text-slate-300 hover:bg-sepia-100 dark:hover:bg-slate-800'
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold ${
                  isActive ? 'bg-white/20 text-white' : 'bg-sepia-200 dark:bg-slate-800 text-sepia-700 dark:text-slate-400'
                }`}>
                  {station.station}
                </span>
                <span className="whitespace-nowrap">{station.title.split('&')[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Active Station Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left 8 Cols: Causal Details */}
        <div className="lg:col-span-8 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl border shadow-md transition-all
            bg-white/90 border-sepia-300 text-sepia-900
            dark:bg-[#0f172a]/90 dark:border-slate-800 dark:text-slate-100">
            
            {/* Station Title Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-sepia-200 dark:border-slate-800 pb-4">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono font-bold text-saffron-700 dark:text-amber-400">
                    STATION #{current.station}
                  </span>
                  {current.coords && (
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-sepia-100 dark:bg-slate-800 text-sepia-600 dark:text-slate-400">
                      {current.coords}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold font-display text-sepia-900 dark:text-slate-100 mt-1">
                  {current.title}
                </h3>
                {current.hindi && (
                  <p className="text-sm font-hindi text-sepia-600 dark:text-amber-400/90 mt-0.5">
                    {current.hindi}
                  </p>
                )}
              </div>
            </div>

            {/* Scientific Definition */}
            <div className="mt-6 space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-sepia-500 dark:text-slate-400">
                Foundational Definition
              </h4>
              <p className="text-sm sm:text-base text-sepia-800 dark:text-slate-200 leading-relaxed font-sans">
                {current.def}
              </p>
            </div>

            {/* Why It Matters (The Causal Pivot) */}
            <div className="mt-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-sepia-900 dark:text-slate-100">
              <div className="flex items-start space-x-3">
                <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-amber-800 dark:text-amber-300">
                    Why It Matters (The Causal Link)
                  </h4>
                  <p className="text-xs sm:text-sm text-sepia-800 dark:text-slate-200 mt-1 leading-relaxed">
                    {current.why}
                  </p>
                </div>
              </div>
            </div>

            {/* High-Yield Official Facts */}
            {current.facts && current.facts.length > 0 && (
              <div className="mt-6 space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-sepia-500 dark:text-slate-400">
                  High-Yield Prelims & Mains Facts
                </h4>
                <ul className="space-y-2.5">
                  {current.facts.map((fact, fIdx) => (
                    <li key={fIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-sepia-800 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* UPSC Exam Trap Tip */}
            {current.upscTip && (
              <div className="mt-6 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-rose-700 dark:text-rose-400">
                      UPSC Prelims Trap Alert
                    </h4>
                    <p className="text-xs sm:text-sm text-sepia-800 dark:text-slate-200 mt-1 leading-relaxed">
                      {current.upscTip}
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Stepper Navigation Buttons */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setActiveStationIndex(Math.max(0, activeStationIndex - 1))}
              disabled={activeStationIndex === 0}
              className="px-4 py-2 rounded-xl text-xs font-bold border border-sepia-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-sepia-100"
            >
              ← Previous Station
            </button>
            <button
              onClick={() => setActiveStationIndex(Math.min(masterFlowData.length - 1, activeStationIndex + 1))}
              disabled={activeStationIndex === masterFlowData.length - 1}
              className="px-5 py-2 rounded-xl text-xs font-bold bg-saffron-600 text-white shadow hover:bg-saffron-700 disabled:opacity-40 disabled:cursor-not-allowed flex items-center space-x-1.5"
            >
              <span>Next Station</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right 4 Cols: Causal Connections Tree */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-3xl border shadow-sm
            bg-white/80 border-sepia-300 text-sepia-900
            dark:bg-slate-900/80 dark:border-slate-800 dark:text-slate-100">
            
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-sepia-500 dark:text-slate-400 flex items-center space-x-2">
              <GitMerge className="w-4 h-4 text-saffron-600 dark:text-amber-400" />
              <span>Downstream Causal Dependencies</span>
            </h4>
            
            <p className="text-xs text-sepia-600 dark:text-slate-400 mt-2 leading-relaxed">
              Modifying or understanding this station directly explains the phenomena in these downstream stations:
            </p>

            <div className="mt-4 space-y-2.5">
              {current.connects && current.connects.map(targetId => {
                const targetStation = masterFlowData.find(s => s.id === targetId);
                if (!targetStation) return null;
                const targetIdx = masterFlowData.indexOf(targetStation);

                return (
                  <div
                    key={targetId}
                    onClick={() => setActiveStationIndex(targetIdx)}
                    className="p-3 rounded-xl border border-sepia-200 dark:border-slate-800 hover:border-saffron-400 dark:hover:border-amber-400/60 bg-sepia-50/50 dark:bg-slate-800/40 cursor-pointer transition-all flex items-center justify-between group"
                  >
                    <div>
                      <span className="text-[10px] font-mono text-saffron-700 dark:text-amber-400 font-bold">
                        Station {targetStation.station}
                      </span>
                      <h5 className="text-xs font-bold text-sepia-900 dark:text-slate-100 group-hover:text-saffron-700 dark:group-hover:text-amber-300">
                        {targetStation.title}
                      </h5>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-sepia-400 group-hover:text-saffron-600 group-hover:translate-x-0.5 transition-all" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Module Summary */}
          <div className="p-6 rounded-3xl border shadow-sm
            bg-[#fbf7ee] border-sepia-300 text-sepia-900
            dark:bg-slate-900/60 dark:border-slate-800 dark:text-slate-100">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-sepia-600 dark:text-slate-400">
              Causal Pipeline Index
            </h4>
            <div className="mt-3 grid grid-cols-4 gap-1.5 text-center">
              {masterFlowData.map((st, i) => (
                <button
                  key={st.id}
                  onClick={() => setActiveStationIndex(i)}
                  className={`p-1.5 rounded-lg text-[11px] font-mono font-bold border transition-colors ${
                    i === activeStationIndex
                      ? 'bg-saffron-600 border-saffron-600 text-white'
                      : 'bg-white/60 dark:bg-slate-800/60 border-sepia-200 dark:border-slate-800 text-sepia-700 dark:text-slate-400 hover:bg-sepia-100'
                  }`}
                >
                  #{st.station}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
