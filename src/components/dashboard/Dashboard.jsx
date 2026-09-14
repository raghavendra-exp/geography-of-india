import React from 'react';
import { 
  Award, 
  Flame, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Compass, 
  TrendingUp, 
  AlertTriangle, 
  ArrowRight, 
  Play, 
  BookOpen, 
  Waves, 
  Layers,
  Sparkles
} from 'lucide-react';
import { TOPIC_WEIGHTS } from '../../utils/readinessCalculator';

export default function Dashboard({ 
  readiness, 
  streak, 
  onStartSession, 
  setActiveTab,
  unresolvedMistakesCount = 0,
  bookmarksCount = 0,
  lang = 'en'
}) {
  const {
    overallScore = 0,
    coveragePercent = 0,
    accuracyPercent = 0,
    totalAttempted = 0,
    totalCorrect = 0,
    level = 'Novice Cartographer',
    levelHindi = 'आरंभिक मानचित्रकार',
    color = 'text-amber-500',
    topicBreakdown = {},
    weakestTopics = [],
    recommendation = ''
  } = readiness || {};

  // Time-based presets
  const STUDY_PRESETS = [
    {
      id: 'p15',
      time: '15 Mins',
      title: 'Rapid Map Pin Drill',
      desc: '15 quick map-pointing challenges on major passes and rivers.',
      action: () => {
        setActiveTab('maplab');
      },
      badge: 'Speed'
    },
    {
      id: 'p30',
      time: '30 Mins',
      title: 'High-Yield Drainage & Relief',
      desc: '25-question targeted sectional on rivers, tributaries, and physiography.',
      action: () => {
        onStartSession?.({ topic: 'Drainage & River Systems', count: 25 });
        setActiveTab('practice');
      },
      badge: 'Core'
    },
    {
      id: 'p45',
      time: '45 Mins',
      title: 'Monsoon Physics & Climate',
      desc: 'Interactive 8-stage monsoon simulator + 30 climatology MCQs.',
      action: () => {
        setActiveTab('simulators');
      },
      badge: 'Concept'
    },
    {
      id: 'p60',
      time: '60 Mins',
      title: 'Comprehensive Mixed Sectional',
      desc: '50-question balanced drill across all 10 geography modules.',
      action: () => {
        onStartSession?.({ topic: 'All', count: 50 });
        setActiveTab('practice');
      },
      badge: 'Balanced'
    },
    {
      id: 'p90',
      time: '90 Mins',
      title: 'Full UPSC Prelims Mock',
      desc: '100-question timed exam with standard -0.66 negative marking.',
      action: () => {
        setActiveTab('mock');
      },
      badge: 'Exam Mode'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      
      {/* Hero Readiness Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left: Overall Readiness Gauge Card */}
        <div className="lg:col-span-5 rounded-3xl p-6 sm:p-8 border shadow-lg relative overflow-hidden transition-all
          bg-gradient-to-br from-[#fcf9f2] to-[#efe5cb] border-sepia-300 text-sepia-900
          dark:from-[#0d141f] dark:to-[#162233] dark:border-slate-800 dark:text-slate-100">
          
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-saffron-700 dark:text-amber-400 flex items-center space-x-1.5">
              <Compass className="w-4 h-4" />
              <span>GEOGRAPHY READINESS INDEX</span>
            </span>
            <span className="flex items-center space-x-1 text-xs font-semibold text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-300/60 dark:border-amber-800/60">
              <Flame className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
              <span>{streak}d Streak</span>
            </span>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center sm:space-x-6 space-y-4 sm:space-y-0">
            {/* Circular Gauge */}
            <div className="relative w-32 h-32 shrink-0 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="8"
                  className="text-sepia-200 dark:text-slate-800"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeDasharray="251.2"
                  strokeDashoffset={251.2 - (251.2 * overallScore) / 100}
                  strokeLinecap="round"
                  className={`transition-all duration-1000 ${
                    overallScore >= 75 ? 'text-emerald-500' : overallScore >= 50 ? 'text-amber-500' : 'text-saffron-600'
                  }`}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-3xl font-mono font-black tracking-tight">{overallScore}%</span>
                <span className="text-[10px] font-sans font-medium uppercase text-sepia-600 dark:text-slate-400">Score</span>
              </div>
            </div>

            {/* Proficiency status */}
            <div className="text-center sm:text-left space-y-1.5">
              <h3 className={`text-xl font-bold font-display ${color}`}>
                {lang === 'hi' ? levelHindi : level}
              </h3>
              <p className="text-xs text-sepia-700 dark:text-slate-300 leading-relaxed">
                Calculated across 10 official syllabus weightages, factoring accuracy and depth of practice.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 justify-center sm:justify-start">
                <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-white/70 dark:bg-slate-800/80 border border-sepia-300/60 dark:border-slate-700">
                  Accuracy: <strong className="font-mono">{accuracyPercent}%</strong>
                </span>
                <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-white/70 dark:bg-slate-800/80 border border-sepia-300/60 dark:border-slate-700">
                  Coverage: <strong className="font-mono">{coveragePercent}%</strong> ({totalAttempted}/500)
                </span>
              </div>
            </div>
          </div>

          {/* Dynamic AI Recommendation Box */}
          <div className="mt-6 p-3.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-sepia-300/60 dark:border-slate-800">
            <div className="flex items-start space-x-2.5">
              <Sparkles className="w-4 h-4 text-saffron-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-bold text-sepia-900 dark:text-amber-300">Targeted Recommendation:</span>
                <p className="text-sepia-700 dark:text-slate-300 mt-0.5 leading-relaxed">
                  {recommendation}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Right: Quick Launch & Summary Pillars */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Causal Flow Pillar */}
          <div 
            onClick={() => setActiveTab('masterflow')}
            className="rounded-3xl p-6 border shadow-sm cursor-pointer transition-all hover:shadow-md hover:scale-[1.01] flex flex-col justify-between
              bg-white/80 border-sepia-300 text-sepia-900
              dark:bg-slate-900/80 dark:border-slate-800 dark:text-slate-100 group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold font-display group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                Master Causal Flow
              </h4>
              <p className="text-xs text-sepia-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                16 interconnected stations from Location & Geology to Relief, Monsoon physics, and UPSC traps.
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs font-semibold text-indigo-700 dark:text-indigo-400 pt-3 border-t border-sepia-200 dark:border-slate-800">
              <span>Explore Causal Pipeline</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Interactive Map Lab Pillar */}
          <div 
            onClick={() => setActiveTab('maplab')}
            className="rounded-3xl p-6 border shadow-sm cursor-pointer transition-all hover:shadow-md hover:scale-[1.01] flex flex-col justify-between
              bg-white/80 border-sepia-300 text-sepia-900
              dark:bg-slate-900/80 dark:border-slate-800 dark:text-slate-100 group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-950/60 text-teal-700 dark:text-teal-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold font-display group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                Interactive Map Lab
              </h4>
              <p className="text-xs text-sepia-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                Multi-layer vector atlas of mountain passes, peaks, rivers, ports, and protected biosphere reserves.
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs font-semibold text-teal-700 dark:text-teal-400 pt-3 border-t border-sepia-200 dark:border-slate-800">
              <span>Launch Vector Atlas</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Monsoon Physics Simulator */}
          <div 
            onClick={() => setActiveTab('simulators')}
            className="rounded-3xl p-6 border shadow-sm cursor-pointer transition-all hover:shadow-md hover:scale-[1.01] flex flex-col justify-between
              bg-white/80 border-sepia-300 text-sepia-900
              dark:bg-slate-900/80 dark:border-slate-800 dark:text-slate-100 group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Waves className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold font-display group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                Monsoon Simulator & Ghats
              </h4>
              <p className="text-xs text-sepia-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                8-stage atmospheric engine (Somali jet, ITCZ, TEJ) + Bhabar-Khadar & Ghats cross-sections.
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs font-semibold text-sky-700 dark:text-sky-400 pt-3 border-t border-sepia-200 dark:border-slate-800">
              <span>Run Atmospheric Engine</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Error Notebook & Bookmarks */}
          <div 
            onClick={() => setActiveTab('mistakes')}
            className="rounded-3xl p-6 border shadow-sm cursor-pointer transition-all hover:shadow-md hover:scale-[1.01] flex flex-col justify-between
              bg-white/80 border-sepia-300 text-sepia-900
              dark:bg-slate-900/80 dark:border-slate-800 dark:text-slate-100 group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold font-display group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                Error Book & Traps
              </h4>
              <p className="text-xs text-sepia-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                {unresolvedMistakesCount} unresolved mistake{unresolvedMistakesCount !== 1 ? 's' : ''} categorized by lapse type for targeted drill revision.
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs font-semibold text-rose-700 dark:text-rose-400 pt-3 border-t border-sepia-200 dark:border-slate-800">
              <span>Review Traps ({unresolvedMistakesCount})</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>

      </div>

      {/* Smart Study Recommender: Time-based Sessions */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold font-display text-sepia-900 dark:text-slate-100">
              Smart Study Presets
            </h3>
            <p className="text-xs text-sepia-600 dark:text-slate-400">
              Select your available study time today for an optimized guided routine.
            </p>
          </div>
          <span className="text-xs font-mono font-semibold text-sepia-500 dark:text-slate-400 hidden sm:block">
            15m • 30m • 45m • 60m • 90m
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {STUDY_PRESETS.map(preset => (
            <div
              key={preset.id}
              onClick={preset.action}
              className="p-4 rounded-2xl border transition-all cursor-pointer hover:shadow-md hover:border-saffron-500/80 group
                bg-white/70 border-sepia-300 text-sepia-900
                dark:bg-slate-900/60 dark:border-slate-800 dark:text-slate-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-saffron-100 text-saffron-800 dark:bg-amber-950 dark:text-amber-300">
                    {preset.time}
                  </span>
                  <span className="text-[10px] font-semibold text-sepia-500 dark:text-slate-400">
                    {preset.badge}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-sepia-900 dark:text-slate-100 group-hover:text-saffron-600 dark:group-hover:text-amber-300 transition-colors">
                  {preset.title}
                </h4>
                <p className="text-[11px] text-sepia-600 dark:text-slate-400 mt-1 leading-normal">
                  {preset.desc}
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-sepia-200/80 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-semibold text-saffron-700 dark:text-amber-400">
                <span>Launch Drill</span>
                <Play className="w-3 h-3 fill-current" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Module Mastery Matrix */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold font-display text-sepia-900 dark:text-slate-100">
              Syllabus Module Mastery
            </h3>
            <p className="text-xs text-sepia-600 dark:text-slate-400">
              Live tracking across the 10 official UPSC/PSC Geography modules.
            </p>
          </div>
          <button 
            onClick={() => setActiveTab('practice')}
            className="text-xs font-semibold text-saffron-700 dark:text-amber-400 hover:underline flex items-center space-x-1"
          >
            <span>Practice all 500 Questions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {Object.entries(TOPIC_WEIGHTS).map(([topic, weight]) => {
            const stats = topicBreakdown[topic] || { total: 50, attempted: 0, correct: 0, accuracy: 0 };
            const pct = stats.total > 0 ? Math.round((stats.attempted / stats.total) * 100) : 0;
            return (
              <div
                key={topic}
                onClick={() => {
                  onStartSession?.({ topic: topic });
                  setActiveTab('practice');
                }}
                className="p-4 rounded-2xl border transition-all cursor-pointer hover:shadow-md hover:border-sepia-400 dark:hover:border-slate-700
                  bg-white/60 border-sepia-300/80 text-sepia-900
                  dark:bg-slate-900/60 dark:border-slate-800 dark:text-slate-100 group"
              >
                <div className="flex items-start justify-between">
                  <h4 className="text-xs font-bold text-sepia-900 dark:text-slate-100 group-hover:text-saffron-700 dark:group-hover:text-amber-300 transition-colors line-clamp-1">
                    {topic}
                  </h4>
                  <span className="text-[10px] font-mono text-sepia-500 dark:text-slate-500">
                    {Math.round(weight * 100)}%
                  </span>
                </div>

                <div className="mt-3 flex items-baseline justify-between text-xs">
                  <span className="text-sepia-600 dark:text-slate-400 text-[11px]">Accuracy:</span>
                  <span className="font-mono font-bold text-sepia-900 dark:text-amber-300">
                    {stats.attempted > 0 ? `${stats.accuracy}%` : '—'}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="mt-1.5 w-full bg-sepia-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-saffron-600 dark:bg-amber-400 h-full rounded-full transition-all duration-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>

                <div className="mt-2 flex items-center justify-between text-[10px] text-sepia-500 dark:text-slate-500">
                  <span>{stats.attempted} / {stats.total} Qs</span>
                  <span className="font-semibold text-saffron-600 dark:text-amber-400 group-hover:underline">Solve</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
