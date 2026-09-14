import React, { useState, useMemo } from 'react';
import { 
  Waves, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Compass, 
  Layers,
  MapPin,
  ExternalLink
} from 'lucide-react';

export default function RiverBasinExplorer({ 
  riversData = [],
  onStartRiverPractice 
}) {
  const [selectedRiverId, setSelectedRiverId] = useState(riversData[0]?.id || 'ganga');
  const [filterSystem, setFilterSystem] = useState('all'); // all, Himalayan, Peninsular
  const [filterFlow, setFilterFlow] = useState('all'); // all, East-flowing, West-flowing
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRivers = useMemo(() => {
    return riversData.filter(r => {
      const matchSystem = filterSystem === 'all' || r.system === filterSystem;
      const matchFlow = filterFlow === 'all' || r.flowDirection === filterFlow;
      const matchSearch = !searchQuery || 
        r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (r.leftBankTributaries || []).some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (r.rightBankTributaries || []).some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchSystem && matchFlow && matchSearch;
    });
  }, [riversData, filterSystem, filterFlow, searchQuery]);

  const selectedRiver = riversData.find(r => r.id === selectedRiverId) || filteredRivers[0] || riversData[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 animate-fade-in">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-sepia-300/80 dark:border-slate-800 pb-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300 border border-sky-300 dark:border-sky-800">
              HYDROLOGICAL DRAINAGE ENGINE
            </span>
            <span className="text-xs text-sepia-600 dark:text-slate-400 font-mono">
              14 Major River Basins
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-sepia-900 dark:text-slate-100 mt-1">
            River Basins & Drainage Systems
          </h2>
          <p className="text-xs sm:text-sm text-sepia-700 dark:text-slate-400 mt-0.5">
            Master left-bank vs right-bank tributaries, antecedence vs superimposed drainage, dams, and inter-state river disputes.
          </p>
        </div>

        <button
          onClick={() => onStartRiverPractice?.(selectedRiver?.name)}
          className="px-4 py-2 rounded-xl text-xs font-bold bg-sky-600 hover:bg-sky-700 text-white shadow flex items-center space-x-1.5 transition-colors shrink-0"
        >
          <Compass className="w-4 h-4" />
          <span>Practice Drainage Questions</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-sepia-300/70 dark:border-slate-800">
        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <Search className="w-4 h-4 text-sepia-400 dark:text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search river or tributary (e.g. Ken, Yamuna, Betwa)..."
            className="bg-transparent text-xs sm:text-sm outline-none w-full sm:w-64 placeholder:text-sepia-400 dark:placeholder:text-slate-500"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          {/* System filter */}
          <div className="flex rounded-xl bg-sepia-100 dark:bg-slate-800 p-0.5 border border-sepia-200 dark:border-slate-700">
            {['all', 'Himalayan', 'Peninsular'].map(sys => (
              <button
                key={sys}
                onClick={() => setFilterSystem(sys)}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                  filterSystem === sys
                    ? 'bg-white dark:bg-slate-700 text-sepia-900 dark:text-white shadow-xs'
                    : 'text-sepia-600 dark:text-slate-400 hover:text-sepia-900'
                }`}
              >
                {sys === 'all' ? 'All Systems' : sys}
              </button>
            ))}
          </div>

          {/* Flow filter */}
          <div className="flex rounded-xl bg-sepia-100 dark:bg-slate-800 p-0.5 border border-sepia-200 dark:border-slate-700">
            {['all', 'East-flowing', 'West-flowing'].map(flow => (
              <button
                key={flow}
                onClick={() => setFilterFlow(flow)}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                  filterFlow === flow
                    ? 'bg-white dark:bg-slate-700 text-sepia-900 dark:text-white shadow-xs'
                    : 'text-sepia-600 dark:text-slate-400 hover:text-sepia-900'
                }`}
              >
                {flow === 'all' ? 'All Directions' : flow.split('-')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Explorer Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left 4 Cols: River List */}
        <div className="lg:col-span-4 space-y-2 max-h-[700px] overflow-y-auto pr-1">
          {filteredRivers.map(r => {
            const isSelected = r.id === selectedRiver?.id;
            return (
              <div
                key={r.id}
                onClick={() => setSelectedRiverId(r.id)}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-white dark:bg-slate-800 border-sky-500 shadow-md ring-2 ring-sky-500/20'
                    : 'bg-white/60 dark:bg-slate-900/60 border-sepia-200 dark:border-slate-800/80 hover:bg-white'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-sky-700 dark:text-sky-400">
                      {r.system} • {r.flowDirection}
                    </span>
                    <h4 className="text-base font-bold font-display text-sepia-900 dark:text-slate-100">
                      {r.name}
                    </h4>
                    {r.hindi && (
                      <span className="text-xs font-hindi text-sepia-600 dark:text-slate-400">
                        {r.hindi}
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-sepia-800 dark:text-slate-200">
                      {r.lengthKm.toLocaleString()} km
                    </span>
                    <span className="block text-[10px] text-sepia-500 dark:text-slate-500">
                      {r.basinAreaSqKm ? `${Math.round(r.basinAreaSqKm / 1000)}k km²` : ''}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right 8 Cols: Detailed Basin Anatomy */}
        {selectedRiver && (
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl border shadow-md bg-white/90 border-sepia-300 text-sepia-900 dark:bg-[#0f172a]/90 dark:border-slate-800 dark:text-slate-100 space-y-6">
            
            {/* Title & Origin-Mouth Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-sepia-200 dark:border-slate-800 pb-4">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300">
                    {selectedRiver.system} Drainage System
                  </span>
                  <span className="text-xs font-mono text-sepia-500 dark:text-slate-400">
                    {selectedRiver.flowDirection}
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-display text-sepia-900 dark:text-slate-100 mt-1">
                  {selectedRiver.name} River Basin
                </h3>
              </div>

              <div className="flex items-center space-x-4 text-xs font-mono">
                <div className="text-right">
                  <span className="text-sepia-500 dark:text-slate-400 block text-[10px]">TOTAL LENGTH</span>
                  <strong className="text-base text-sepia-900 dark:text-slate-100">{selectedRiver.lengthKm.toLocaleString()} km</strong>
                </div>
                <div className="text-right">
                  <span className="text-sepia-500 dark:text-slate-400 block text-[10px]">BASIN AREA</span>
                  <strong className="text-base text-sepia-900 dark:text-slate-100">{selectedRiver.basinAreaSqKm?.toLocaleString()} km²</strong>
                </div>
              </div>
            </div>

            {/* Source & Mouth Journey */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-sepia-50/70 dark:bg-slate-800/50 border border-sepia-200 dark:border-slate-800 text-xs space-y-1">
                <span className="font-mono font-bold text-sky-700 dark:text-sky-400 uppercase text-[10px] flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>ORIGIN / SOURCE</span>
                </span>
                <p className="font-bold text-sepia-900 dark:text-slate-100 text-sm">
                  {selectedRiver.source?.name}
                </p>
                <p className="text-sepia-600 dark:text-slate-400">
                  {selectedRiver.source?.range} • {selectedRiver.source?.state} ({selectedRiver.source?.elevation || 'Glacial'})
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-sepia-50/70 dark:bg-slate-800/50 border border-sepia-200 dark:border-slate-800 text-xs space-y-1">
                <span className="font-mono font-bold text-sky-700 dark:text-sky-400 uppercase text-[10px] flex items-center space-x-1">
                  <Waves className="w-3.5 h-3.5" />
                  <span>MOUTH / OUTFALL</span>
                </span>
                <p className="font-bold text-sepia-900 dark:text-slate-100 text-sm">
                  {selectedRiver.mouth?.name}
                </p>
                <p className="text-sepia-600 dark:text-slate-400">
                  {selectedRiver.mouth?.state}
                </p>
              </div>
            </div>

            {/* Tributaries Grid (Left vs Right) - HIGHEST YIELD FOR UPSC */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-sepia-600 dark:text-slate-400">
                  TRIBUTARY DISSECTION (CRITICAL UPSC PRELIMS FOCUS)
                </h4>
                <span className="text-[10px] font-mono text-saffron-600 font-bold">
                  Orientation: Looking Downstream
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Left Bank */}
                <div className="p-4 rounded-2xl border border-sky-300/70 dark:border-sky-800/60 bg-sky-50/40 dark:bg-sky-950/20 space-y-2">
                  <span className="text-xs font-bold text-sky-800 dark:text-sky-300 flex items-center space-x-1.5">
                    <ArrowRight className="w-3.5 h-3.5" />
                    <span>Left-Bank Tributaries ({selectedRiver.leftBankTributaries?.length || 0}):</span>
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {(selectedRiver.leftBankTributaries || []).map((trib, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 border border-sky-200 dark:border-sky-800 text-sky-900 dark:text-sky-200 shadow-xs"
                      >
                        {trib}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Bank */}
                <div className="p-4 rounded-2xl border border-indigo-300/70 dark:border-indigo-800/60 bg-indigo-50/40 dark:bg-indigo-950/20 space-y-2">
                  <span className="text-xs font-bold text-indigo-800 dark:text-indigo-300 flex items-center space-x-1.5">
                    <ArrowRight className="w-3.5 h-3.5" />
                    <span>Right-Bank Tributaries ({selectedRiver.rightBankTributaries?.length || 0}):</span>
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {(selectedRiver.rightBankTributaries || []).map((trib, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 border border-indigo-200 dark:border-indigo-800 text-indigo-900 dark:text-indigo-200 shadow-xs"
                      >
                        {trib}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Flow Chain Landmark Stations */}
            {selectedRiver.flowChain && (
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-sepia-600 dark:text-slate-400">
                  Course & Landmark Confluences
                </h4>
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  {selectedRiver.flowChain.map((st, sIdx) => (
                    <React.Fragment key={sIdx}>
                      <span className="px-3 py-1.5 rounded-xl bg-sepia-100 dark:bg-slate-800 text-sepia-800 dark:text-slate-200 font-medium border border-sepia-200 dark:border-slate-700">
                        {st}
                      </span>
                      {sIdx < selectedRiver.flowChain.length - 1 && (
                        <ArrowRight className="w-3.5 h-3.5 text-sepia-400 dark:text-slate-600 shrink-0" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            {/* Dams & Water Disputes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {selectedRiver.dams && (
                <div className="p-4 rounded-2xl bg-teal-50/50 dark:bg-slate-800/60 border border-teal-200 dark:border-slate-700 text-xs space-y-1.5">
                  <span className="font-bold text-teal-900 dark:text-teal-300 block">
                    Key Multi-purpose Dams & Projects:
                  </span>
                  <p className="text-sepia-700 dark:text-slate-300">
                    {selectedRiver.dams.join(', ')}
                  </p>
                </div>
              )}

              {selectedRiver.disputes && (
                <div className="p-4 rounded-2xl bg-rose-50/50 dark:bg-slate-800/60 border border-rose-200 dark:border-slate-700 text-xs space-y-1.5">
                  <span className="font-bold text-rose-900 dark:text-rose-300 flex items-center space-x-1">
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                    <span>Inter-State River Disputes:</span>
                  </span>
                  <p className="text-sepia-700 dark:text-slate-300">
                    {selectedRiver.disputes}
                  </p>
                </div>
              )}
            </div>

          </div>
        )}

      </div>

    </div>
  );
}
