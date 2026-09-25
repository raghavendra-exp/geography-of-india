import React, { useState, useMemo } from 'react';
import { 
  Factory, 
  Leaf, 
  Flame, 
  Droplet, 
  Cpu, 
  TrendingUp, 
  MapPin, 
  Search, 
  AlertTriangle, 
  ChevronRight, 
  ArrowRight, 
  BookOpen, 
  Layers, 
  Sparkles,
  Truck,
  Zap
} from 'lucide-react';

export default function ResourcesIndustriesLab({ 
  resourcesData = {}, 
  onStartPracticeTopic,
  lang = 'en' 
}) {
  const [activeSection, setActiveSection] = useState('resources'); // 'resources' | 'industries'
  const [selectedSubtopicId, setSelectedSubtopicId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const resourcesSubtopics = resourcesData?.naturalResources?.subtopics || [];
  const industriesSubtopics = resourcesData?.industrialLocation?.subtopics || [];

  const currentSubtopics = activeSection === 'resources' ? resourcesSubtopics : industriesSubtopics;

  const currentSubtopic = useMemo(() => {
    if (selectedSubtopicId) {
      const found = currentSubtopics.find(s => s.id === selectedSubtopicId);
      if (found) return found;
    }
    return currentSubtopics[0] || null;
  }, [currentSubtopics, selectedSubtopicId]);

  const filteredSubtopics = useMemo(() => {
    if (!searchQuery.trim()) return currentSubtopics;
    const q = searchQuery.toLowerCase();
    return currentSubtopics.filter(s => 
      s.title.toLowerCase().includes(q) ||
      s.keyConcepts.some(c => c.heading.toLowerCase().includes(q) || c.detail.toLowerCase().includes(q))
    );
  }, [currentSubtopics, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      
      {/* Banner */}
      <div className="rounded-3xl border border-sepia-300 dark:border-slate-800 bg-gradient-to-r from-amber-600/10 via-emerald-600/10 to-orange-600/10 p-6 sm:p-8 backdrop-blur-md">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-1 text-[11px] font-mono font-bold uppercase rounded-md bg-amber-600 text-white">
                Global Resources & Industrial Location
              </span>
              <span className="px-2.5 py-1 text-[11px] font-mono font-bold uppercase rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">
                UPSC CSE GS-I • South Asia & World
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-display font-black text-sepia-900 dark:text-slate-100">
              Natural Resources & Industrial Geography Lab
            </h1>
            <p className="text-xs sm:text-sm text-sepia-700 dark:text-slate-300 leading-relaxed">
              Explore the global and South Asian distribution of <strong>Land, Forest, Water, Agricultural, Mineral & Energy Resources</strong>, alongside the spatial determinants of <strong>Primary, Secondary & Tertiary Industries</strong> (Weberian Least Cost theory, Iron & Steel, Electronics/IT, Cotton Textiles, Agglomeration & Footloose industries).
            </p>
          </div>

          {/* Section Switcher */}
          <div className="flex items-center space-x-2 bg-white/80 dark:bg-slate-900/80 p-1.5 rounded-2xl border border-sepia-300 dark:border-slate-800 shrink-0">
            <button
              onClick={() => {
                setActiveSection('resources');
                setSelectedSubtopicId(null);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
                activeSection === 'resources'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                  : 'text-sepia-700 dark:text-slate-300 hover:bg-sepia-100 dark:hover:bg-slate-800'
              }`}
            >
              <Leaf className="w-4 h-4" />
              <span>Natural Resources</span>
            </button>
            <button
              onClick={() => {
                setActiveSection('industries');
                setSelectedSubtopicId(null);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
                activeSection === 'industries'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                  : 'text-sepia-700 dark:text-slate-300 hover:bg-sepia-100 dark:hover:bg-slate-800'
              }`}
            >
              <Factory className="w-4 h-4" />
              <span>Industrial Location</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Subtopics Sidebar + Detail View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Sidebar Subtopics */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-sepia-600 dark:text-slate-400">
              {activeSection === 'resources' ? 'Natural Resource Sectors' : 'Industrial Determinants'} ({filteredSubtopics.length})
            </h2>
          </div>

          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-sepia-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search minerals, Weber, crops, steel..."
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-sepia-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-sepia-900 dark:text-slate-100 focus:outline-hidden focus:ring-1 focus:ring-amber-500"
            />
          </div>

          <div className="space-y-2 max-h-[650px] overflow-y-auto pr-1 no-scrollbar">
            {filteredSubtopics.map(sub => {
              const isSelected = currentSubtopic?.id === sub.id;
              return (
                <div
                  key={sub.id}
                  onClick={() => setSelectedSubtopicId(sub.id)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-amber-500 bg-white dark:bg-slate-900 shadow-md ring-1 ring-amber-500/40'
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
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-amber-600 rotate-90' : 'text-sepia-400'}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Detail View */}
        {currentSubtopic && (
          <div className="lg:col-span-8 space-y-6">
            <div className="rounded-3xl border border-sepia-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-6 shadow-xs">
              
              {/* Header */}
              <div className="border-b border-sepia-200 dark:border-slate-800 pb-5 space-y-2">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-mono font-bold uppercase rounded-lg bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-300/60 dark:border-amber-800">
                    {activeSection === 'resources' ? 'Resource Geography' : 'Industrial Economics'}
                  </span>
                  
                  <button
                    onClick={() => onStartPracticeTopic?.(currentSubtopic.title)}
                    className="px-3 py-1.5 rounded-xl bg-amber-600 text-white text-xs font-bold hover:bg-amber-700 transition-all flex items-center space-x-1.5 shadow-sm shadow-amber-600/30"
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
                        <span className="w-5 h-5 rounded-md bg-amber-600 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
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
                  <BookOpen className="w-4 h-4 text-amber-600" />
                  <span>Mapped to NCERT Class 12 & Majid Husain Geography of India</span>
                </div>

                <button
                  onClick={() => onStartPracticeTopic?.(currentSubtopic.title)}
                  className="px-4 py-2 rounded-xl bg-amber-600 text-white text-xs font-bold hover:bg-amber-700 transition-all flex items-center space-x-1.5"
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
