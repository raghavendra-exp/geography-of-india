import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Search, 
  X, 
  MapPin, 
  Waves, 
  Mountain, 
  Compass, 
  HelpCircle, 
  Layers, 
  Flame,
  ArrowRight,
  ShieldAlert,
  Landmark
} from 'lucide-react';

export default function GlobalSearchModal({ 
  isOpen, 
  onClose, 
  onNavigateItem,
  datasets = {} 
}) {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onNavigateItem?.({ type: 'open_search' });
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNavigateItem]);

  // Unified searchable index
  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();

    const results = [];

    // 1. Passes & Peaks
    if (filter === 'all' || filter === 'locations') {
      const passes = datasets.passesPeaks || [];
      passes.forEach(p => {
        if (
          p.name.toLowerCase().includes(q) ||
          (p.hindi && p.hindi.includes(q)) ||
          p.range?.toLowerCase().includes(q) ||
          p.state?.toLowerCase().includes(q) ||
          p.connects?.toLowerCase().includes(q)
        ) {
          results.push({
            id: p.id,
            category: p.type === 'pass' ? 'Mountain Pass' : 'Mountain Peak',
            title: p.name,
            subtitle: `${p.range} • ${p.state} • ${p.elevationM}m`,
            detail: p.connects || p.importance,
            type: 'map_item',
            targetTab: 'maplab',
            raw: p
          });
        }
      });
    }

    // 2. Rivers
    if (filter === 'all' || filter === 'rivers') {
      const rivers = datasets.rivers || [];
      rivers.forEach(r => {
        const matchLeft = (r.leftBankTributaries || []).some(t => t.toLowerCase().includes(q));
        const matchRight = (r.rightBankTributaries || []).some(t => t.toLowerCase().includes(q));
        if (
          r.name.toLowerCase().includes(q) ||
          (r.hindi && r.hindi.includes(q)) ||
          r.system?.toLowerCase().includes(q) ||
          matchLeft ||
          matchRight
        ) {
          results.push({
            id: r.id,
            category: 'River System',
            title: `${r.name} (${r.system} System)`,
            subtitle: `${r.flowDirection} • Length: ${r.lengthKm} km • Basin: ${r.basinAreaSqKm?.toLocaleString()} km²`,
            detail: `Left: ${(r.leftBankTributaries || []).slice(0, 3).join(', ')} | Right: ${(r.rightBankTributaries || []).slice(0, 3).join(', ')}`,
            type: 'river_item',
            targetTab: 'rivers',
            raw: r
          });
        }
      });
    }

    // 3. World Physical Geography
    if (filter === 'all' || filter === 'worldgeo') {
      const worldGeo = datasets.worldGeo || {};
      ['geomorphology', 'oceanography', 'climatology', 'soilGeography'].forEach(branch => {
        const subList = worldGeo[branch]?.subtopics || [];
        subList.forEach(s => {
          if (
            s.title.toLowerCase().includes(q) ||
            (s.upscTrap && s.upscTrap.toLowerCase().includes(q)) ||
            (s.keyConcepts || []).some(c => c.heading.toLowerCase().includes(q) || c.detail.toLowerCase().includes(q))
          ) {
            results.push({
              id: `world_${s.id}`,
              category: `World Physical: ${branch.toUpperCase()}`,
              title: s.title,
              subtitle: s.keyConcepts?.[0]?.heading || 'Scientific Concept',
              detail: s.upscTrap ? `Trap: ${s.upscTrap.slice(0, 100)}...` : (s.keyConcepts?.[0]?.detail.slice(0, 100) + '...'),
              type: 'worldgeo_item',
              targetTab: 'worldgeo',
              raw: s
            });
          }
        });
      });
    }

    // 4. Resources & Industrial Location
    if (filter === 'all' || filter === 'resources') {
      const resInd = datasets.resourcesIndustries || {};
      const allSub = [
        ...(resInd.naturalResources?.subtopics || []),
        ...(resInd.industrialLocation?.subtopics || [])
      ];
      allSub.forEach(s => {
        if (
          s.title.toLowerCase().includes(q) ||
          (s.upscTrap && s.upscTrap.toLowerCase().includes(q)) ||
          (s.keyConcepts || []).some(c => c.heading.toLowerCase().includes(q) || c.detail.toLowerCase().includes(q))
        ) {
          results.push({
            id: `res_${s.id}`,
            category: 'Resources & Industries',
            title: s.title,
            subtitle: s.keyConcepts?.[0]?.heading || 'Economic Determinant',
            detail: s.keyConcepts?.[0]?.detail.slice(0, 100) + '...',
            type: 'resources_item',
            targetTab: 'resources',
            raw: s
          });
        }
      });
    }

    // 5. Geophysical Phenomena
    if (filter === 'all' || filter === 'geophysical') {
      const geoPhen = datasets.geophysical?.geophysicalPhenomena?.subtopics || [];
      geoPhen.forEach(s => {
        if (
          s.title.toLowerCase().includes(q) ||
          (s.upscTrap && s.upscTrap.toLowerCase().includes(q)) ||
          (s.keyConcepts || []).some(c => c.heading.toLowerCase().includes(q) || c.detail.toLowerCase().includes(q))
        ) {
          results.push({
            id: `phen_${s.id}`,
            category: 'Geophysical Phenomena',
            title: s.title,
            subtitle: s.keyConcepts?.[0]?.heading || 'Hazard Mechanism',
            detail: s.keyConcepts?.[0]?.detail.slice(0, 100) + '...',
            type: 'geophysical_item',
            targetTab: 'geophysical',
            raw: s
          });
        }
      });
    }

    // 6. Standard Reference Books
    if (filter === 'all' || filter === 'books') {
      const booksList = datasets.referenceBooks?.curriculumOverview?.coreBooks || [];
      booksList.forEach(b => {
        const matchChapters = (b.keyChapters || []).filter(c => c.name.toLowerCase().includes(q) || c.topics.toLowerCase().includes(q));
        if (
          b.title.toLowerCase().includes(q) ||
          b.author.toLowerCase().includes(q) ||
          matchChapters.length > 0
        ) {
          results.push({
            id: `book_${b.id}`,
            category: 'Standard Book Reference',
            title: `${b.title} (${b.author})`,
            subtitle: `${b.category} • ${b.publisher}`,
            detail: matchChapters.length > 0 ? `Matched: ${matchChapters[0].name} - ${matchChapters[0].topics.slice(0, 60)}...` : b.relevance.slice(0, 100) + '...',
            type: 'book_item',
            targetTab: 'books',
            raw: b
          });
        }
      });
    }

    // 7. Disasters & Hazards
    if (filter === 'all' || filter === 'disasters') {
      const hazardList = datasets.disasters?.hazards || [];
      hazardList.forEach(h => {
        if (
          h.hazard.toLowerCase().includes(q) ||
          (h.hindi && h.hindi.includes(q)) ||
          h.physicalCause.toLowerCase().includes(q) ||
          (h.mitigation && h.mitigation.toLowerCase().includes(q))
        ) {
          results.push({
            id: h.id,
            category: 'Disaster Hazard',
            title: h.hazard,
            subtitle: `Vulnerability: ${h.vulnerabilityShare}`,
            detail: h.physicalCause.slice(0, 120) + '...',
            type: 'disaster_item',
            targetTab: 'disaster',
            raw: h
          });
        }
      });
    }

    // 8. UPPSC Geography Entities
    if (filter === 'all' || filter === 'uppsc') {
      const uppsc = datasets.uppsc || {};
      // Ramsar sites
      (uppsc.protectedAreasAndRamsar?.ramsarSites || []).forEach(ram => {
        if (ram.name.toLowerCase().includes(q) || ram.district.toLowerCase().includes(q)) {
          results.push({
            id: `up_ram_${ram.name}`,
            category: 'UP Ramsar Site',
            title: `${ram.name} (${ram.district})`,
            subtitle: `Notified ${ram.year} • Species: ${ram.species}`,
            detail: 'Wetland designated under Ramsar Convention in Uttar Pradesh',
            type: 'uppsc_item',
            targetTab: 'uppsc',
            raw: ram
          });
        }
      });
      // Soils
      (uppsc.soilsOfUP || []).forEach(soil => {
        if (soil.name.toLowerCase().includes(q) || soil.characteristics.toLowerCase().includes(q)) {
          results.push({
            id: `up_soil_${soil.name}`,
            category: 'UP Soil Classification',
            title: soil.name,
            subtitle: soil.hindi || 'Soil order',
            detail: soil.characteristics.slice(0, 120) + '...',
            type: 'uppsc_item',
            targetTab: 'uppsc',
            raw: soil
          });
        }
      });
    }

    // 5. Questions
    if (filter === 'all' || filter === 'questions') {
      const qs = datasets.questions || [];
      let qMatches = 0;
      for (const item of qs) {
        if (qMatches > 15) break;
        if (
          item.question.toLowerCase().includes(q) ||
          item.topic?.toLowerCase().includes(q) ||
          item.explanation?.toLowerCase().includes(q)
        ) {
          results.push({
            id: item.id,
            category: 'Practice Question',
            title: item.question.slice(0, 100) + '...',
            subtitle: `${item.topic} • ${item.difficulty} • ${item.examType}`,
            detail: item.explanation?.slice(0, 120) + '...',
            type: 'question_item',
            targetTab: 'practice',
            raw: item
          });
          qMatches++;
        }
      }
    }

    return results.slice(0, 30);
  }, [query, filter, datasets]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border transition-all
          bg-[#efe9d8] text-sepia-900 border-sepia-400
          dark:bg-[#0c1017] dark:text-slate-100 dark:border-slate-700"
        onClick={e => e.stopPropagation()}
      >
        {/* Top Input Bar */}
        <div className="flex items-center px-4 py-3 border-b border-sepia-300 dark:border-slate-800">
          <Search className="w-5 h-5 text-sepia-500 dark:text-slate-400 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search passes, peaks, rivers, soils, hazards, UPPSC, questions..."
            className="w-full bg-transparent text-sm sm:text-base font-sans outline-none placeholder:text-sepia-400 dark:placeholder:text-slate-500"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="p-1 rounded text-sepia-500 hover:text-sepia-800 dark:text-slate-400 dark:hover:text-white mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="px-2 py-0.5 text-[10px] font-mono bg-sepia-200 dark:bg-slate-800 rounded border border-sepia-300 dark:border-slate-700 text-sepia-700 dark:text-slate-300">
            ESC
          </kbd>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center space-x-2 px-4 py-2 border-b border-sepia-300/60 dark:border-slate-800/80 overflow-x-auto text-xs no-scrollbar">
          {[
            { id: 'all', label: 'All Items' },
            { id: 'worldgeo', label: 'World Physical' },
            { id: 'resources', label: 'Resources & Industry' },
            { id: 'geophysical', label: 'Geophysical' },
            { id: 'books', label: 'Reference Books' },
            { id: 'rivers', label: 'Rivers' },
            { id: 'locations', label: 'Passes & Peaks' },
            { id: 'disasters', label: 'Disasters & DRR' },
            { id: 'uppsc', label: 'UPPSC' },
            { id: 'questions', label: 'MCQs' }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-2.5 py-1 rounded-full whitespace-nowrap font-medium transition-colors ${
                filter === f.id
                  ? 'bg-saffron-600 text-white shadow-xs'
                  : 'bg-sepia-200/70 text-sepia-800 dark:bg-slate-800 dark:text-slate-300 hover:bg-sepia-300 dark:hover:bg-slate-700'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 space-y-1">
          {query.trim() === '' ? (
            <div className="py-12 text-center text-xs sm:text-sm text-sepia-600 dark:text-slate-400">
              <Compass className="w-8 h-8 mx-auto mb-2 text-saffron-600 opacity-60" />
              <p className="font-semibold">Search across all geographic & disaster layers of India</p>
              <p className="text-[11px] mt-1 text-sepia-500 dark:text-slate-500">
                Try typing: <span className="underline cursor-pointer" onClick={() => setQuery('Seismic Zone')}>"Seismic Zone"</span>, <span className="underline cursor-pointer" onClick={() => setQuery('Gomti')}>"Gomti"</span>, <span className="underline cursor-pointer" onClick={() => setQuery('Ken-Betwa')}>"Ken-Betwa"</span>, or <span className="underline cursor-pointer" onClick={() => setQuery('Sendai')}>"Sendai"</span>
              </p>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="py-12 text-center text-sepia-600 dark:text-slate-400">
              <p className="text-sm font-semibold">No geographic entities found for "{query}"</p>
              <p className="text-xs mt-1">Try searching by hazard, river, or state name.</p>
            </div>
          ) : (
            searchResults.map(item => (
              <div
                key={`${item.category}-${item.id}`}
                onClick={() => {
                  onNavigateItem?.(item);
                  onClose();
                }}
                className="p-3 rounded-xl cursor-pointer transition-colors border border-transparent
                  hover:bg-white/80 hover:border-sepia-300/80
                  dark:hover:bg-slate-900/90 dark:hover:border-slate-700 flex items-start justify-between group"
              >
                <div className="space-y-1 pr-2">
                  <div className="flex items-center space-x-2">
                    <span className="px-1.5 py-0.5 text-[9px] font-mono font-bold uppercase rounded bg-sepia-200 dark:bg-slate-800 text-sepia-800 dark:text-amber-300">
                      {item.category}
                    </span>
                    <h4 className="text-sm font-bold text-sepia-900 dark:text-slate-100 group-hover:text-saffron-700 dark:group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-sepia-700 dark:text-slate-400 font-medium">
                    {item.subtitle}
                  </p>
                  {item.detail && (
                    <p className="text-[11px] text-sepia-600/90 dark:text-slate-500 line-clamp-1">
                      {item.detail}
                    </p>
                  )}
                </div>
                <ArrowRight className="w-4 h-4 text-sepia-400 dark:text-slate-600 group-hover:text-saffron-600 dark:group-hover:text-amber-300 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-sepia-200/50 dark:bg-slate-950/60 border-t border-sepia-300/60 dark:border-slate-800 text-[11px] text-sepia-600 dark:text-slate-500 flex items-center justify-between">
          <span>Tip: Click any item to jump directly to that module</span>
          <span>525 Questions + Hazards + UPPSC Special</span>
        </div>
      </div>
    </div>
  );
}
