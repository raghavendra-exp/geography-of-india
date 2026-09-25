import React, { useState, useMemo } from 'react';
import { 
  Globe2, 
  Mountain, 
  Waves, 
  CloudRain, 
  Layers, 
  Compass, 
  AlertTriangle, 
  ArrowRight, 
  Search, 
  CheckCircle2, 
  ChevronRight, 
  Sparkles, 
  BookOpen, 
  Activity, 
  Flame, 
  Wind,
  Maximize2
} from 'lucide-react';

export default function WorldPhysicalGeoLab({ 
  worldData = {}, 
  onStartPracticeTopic,
  lang = 'en' 
}) {
  const [activeBranch, setActiveBranch] = useState('geomorphology'); // 'geomorphology' | 'oceanography' | 'climatology' | 'soilGeography'
  const [selectedSubtopicId, setSelectedSubtopicId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const branches = [
    { id: 'geomorphology', label: 'Geomorphology', hindi: 'भू-आकृति विज्ञान', icon: Mountain, count: 9, badge: 'Solid Earth' },
    { id: 'oceanography', label: 'Oceanography', hindi: 'समुद्र विज्ञान', icon: Waves, count: 5, badge: 'Hydrosphere' },
    { id: 'climatology', label: 'Climatology', hindi: 'जलवायु विज्ञान', icon: CloudRain, count: 4, badge: 'Atmosphere' },
    { id: 'soilGeography', label: 'Soil Geography', hindi: 'मृदा भूगोल', icon: Layers, count: 5, badge: 'Pedosphere' }
  ];

  const currentBranchData = worldData[activeBranch] || { subtopics: [] };
  const subtopics = currentBranchData.subtopics || [];

  // Active subtopic
  const currentSubtopic = useMemo(() => {
    if (selectedSubtopicId) {
      const found = subtopics.find(s => s.id === selectedSubtopicId);
      if (found) return found;
    }
    return subtopics[0] || null;
  }, [subtopics, selectedSubtopicId]);

  // Filtered subtopics by search
  const filteredSubtopics = useMemo(() => {
    if (!searchQuery.trim()) return subtopics;
    const q = searchQuery.toLowerCase();
    return subtopics.filter(s => 
      s.title.toLowerCase().includes(q) ||
      s.keyConcepts.some(c => c.heading.toLowerCase().includes(q) || c.detail.toLowerCase().includes(q))
    );
  }, [subtopics, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      
      {/* Top Banner */}
      <div className="rounded-3xl border border-sepia-300 dark:border-slate-800 bg-gradient-to-r from-blue-600/10 via-emerald-600/10 to-amber-600/10 p-6 sm:p-8 backdrop-blur-md">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-1 text-[11px] font-mono font-bold uppercase rounded-md bg-blue-600 text-white">
                World Physical Geography Lab
              </span>
              <span className="px-2.5 py-1 text-[11px] font-mono font-bold uppercase rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">
                UPSC CSE GS-I • 4 Core Spheres
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-display font-black text-sepia-900 dark:text-slate-100">
              Salient Features of World’s Physical Geography
            </h1>
            <p className="text-xs sm:text-sm text-sepia-700 dark:text-slate-300 leading-relaxed">
              Explore the fundamental scientific mechanisms shaping planet Earth: <strong>Geomorphology</strong> (Endogenic & Exogenic forces, Plate Tectonics), <strong>Oceanography</strong> (Thermodynamics, Currents & Seafloor Spreading), <strong>Climatology</strong> (Tri-cellular circulation, Köppen Climates & Heat Budget), and <strong>Soil Geography</strong> (Pedogenesis & Global Orders).
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center space-x-3 bg-white/80 dark:bg-slate-900/80 p-3 rounded-2xl border border-sepia-300 dark:border-slate-800 shrink-0">
            <Globe2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <div>
              <p className="text-xs font-bold text-sepia-900 dark:text-slate-100">23 Syllabus Modules</p>
              <p className="text-[11px] text-sepia-600 dark:text-slate-400">100% NCERT & Majid Husain Mapped</p>
            </div>
          </div>
        </div>

        {/* Sphere Switcher Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-sepia-300/40 dark:border-slate-800">
          {branches.map(b => {
            const Icon = b.icon;
            const isActive = activeBranch === b.id;
            return (
              <button
                key={b.id}
                onClick={() => {
                  setActiveBranch(b.id);
                  setSelectedSubtopicId(null);
                }}
                className={`p-3.5 rounded-2xl border transition-all text-left flex items-center space-x-3 ${
                  isActive
                    ? 'bg-white dark:bg-slate-900 border-saffron-500 shadow-md ring-1 ring-saffron-500/30'
                    : 'bg-white/50 dark:bg-slate-900/40 border-sepia-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900'
                }`}
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                  isActive 
                    ? 'bg-saffron-600 text-white' 
                    : 'bg-sepia-200 dark:bg-slate-800 text-sepia-700 dark:text-slate-300'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center space-x-1.5">
                    <span className="text-xs font-bold text-sepia-900 dark:text-slate-100 truncate">
                      {lang === 'hi' ? b.hindi : b.label}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-sepia-500 dark:text-slate-400">
                    {b.count} Topics • {b.badge}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Layout: Sidebar + Detail View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Subtopics Sidebar */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-sepia-600 dark:text-slate-400">
              {currentBranchData.title?.split('—')[0] || 'Topics'} ({filteredSubtopics.length})
            </h2>
          </div>

          {/* Search bar */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-sepia-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search concepts, landforms, waves..."
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-sepia-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-sepia-900 dark:text-slate-100 focus:outline-hidden focus:ring-1 focus:ring-saffron-500"
            />
          </div>

          {/* Subtopic Items */}
          <div className="space-y-2 max-h-[650px] overflow-y-auto pr-1 no-scrollbar">
            {filteredSubtopics.map(sub => {
              const isSelected = currentSubtopic?.id === sub.id;
              return (
                <div
                  key={sub.id}
                  onClick={() => setSelectedSubtopicId(sub.id)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-saffron-500 bg-white dark:bg-slate-900 shadow-md ring-1 ring-saffron-500/40'
                      : 'border-sepia-300/60 dark:border-slate-800 bg-white/60 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-900 hover:border-sepia-400'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-xs sm:text-sm text-sepia-900 dark:text-slate-100">
                        {sub.title}
                      </h3>
                      <p className="text-[11px] text-sepia-600 dark:text-slate-400 mt-1 line-clamp-1">
                        {sub.keyConcepts?.[0]?.heading}
                      </p>
                    </div>
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-saffron-600 rotate-90' : 'text-sepia-400'}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Subtopic Interactive Detail View */}
        {currentSubtopic && (
          <div className="lg:col-span-8 space-y-6">
            <div className="rounded-3xl border border-sepia-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-6 shadow-xs">
              
              {/* Header */}
              <div className="border-b border-sepia-200 dark:border-slate-800 pb-5 space-y-2">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-mono font-bold uppercase rounded-lg bg-saffron-100 text-saffron-800 dark:bg-saffron-950/60 dark:text-amber-300 border border-saffron-300/60 dark:border-saffron-800">
                    {activeBranch.toUpperCase()}
                  </span>
                  
                  <button
                    onClick={() => onStartPracticeTopic?.(currentSubtopic.title)}
                    className="px-3 py-1.5 rounded-xl bg-saffron-600 text-white text-xs font-bold hover:bg-saffron-700 transition-all flex items-center space-x-1.5 shadow-sm shadow-saffron-600/30"
                  >
                    <span>Practice Topic MCQs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <h2 className="text-xl sm:text-2xl font-display font-black text-sepia-900 dark:text-slate-100">
                  {currentSubtopic.title}
                </h2>
              </div>

              {/* UPSC Trap Alert Callout */}
              {currentSubtopic.upscTrap && (
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-400/60 dark:border-amber-900/60 text-xs sm:text-sm text-sepia-900 dark:text-amber-200 flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="font-bold font-mono uppercase text-amber-800 dark:text-amber-300 text-xs">
                      Official UPSC Trap Alert:
                    </span>
                    <p className="leading-relaxed text-sepia-800 dark:text-slate-300">
                      {currentSubtopic.upscTrap}
                    </p>
                  </div>
                </div>
              )}

              {/* Key Concepts Cards */}
              <div className="space-y-4">
                <h3 className="font-display font-bold text-sm uppercase tracking-wider text-sepia-600 dark:text-slate-400">
                  Core Scientific Mechanisms & Fact Vault
                </h3>

                <div className="space-y-3">
                  {currentSubtopic.keyConcepts?.map((concept, idx) => (
                    <div 
                      key={idx}
                      className="p-4 sm:p-5 rounded-2xl border border-sepia-200 dark:border-slate-800 bg-sepia-50/50 dark:bg-slate-800/40 space-y-2 hover:bg-sepia-50 dark:hover:bg-slate-800/70 transition-all"
                    >
                      <div className="flex items-center space-x-2">
                        <span className="w-5 h-5 rounded-md bg-saffron-600 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <h4 className="font-bold text-sm sm:text-base text-sepia-900 dark:text-slate-100">
                          {concept.heading}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-sepia-700 dark:text-slate-300 leading-relaxed pl-7 whitespace-pre-line">
                        {concept.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Action Footer */}
              <div className="pt-4 border-t border-sepia-200 dark:border-slate-800 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center space-x-2 text-xs text-sepia-600 dark:text-slate-400">
                  <BookOpen className="w-4 h-4 text-saffron-600" />
                  <span>Mapped to NCERT Class 11 & Majid Husain World Geography</span>
                </div>

                <button
                  onClick={() => onStartPracticeTopic?.(currentSubtopic.title)}
                  className="px-4 py-2 rounded-xl bg-saffron-600 text-white text-xs font-bold hover:bg-saffron-700 transition-all flex items-center space-x-1.5"
                >
                  <span>Drill Related MCQs</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        )}

      </div>

    </div>
  );
}
