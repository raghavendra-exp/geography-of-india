import React, { useState, useMemo } from 'react';
import { 
  Layers, 
  MapPin, 
  Mountain, 
  Waves, 
  Trees, 
  Gem, 
  Compass, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  X, 
  HelpCircle,
  Info
} from 'lucide-react';
import { 
  projectCoordinates, 
  PHYSIOGRAPHIC_REGIONS, 
  SCHEMATIC_RIVER_PATHS 
} from '../../utils/mapProjections';

export default function InteractiveMapLab({ 
  passesPeaksData = [], 
  riversData = [],
  biodiversityData = {},
  mineralsData = {},
  onStartDrill,
  lang = 'en'
}) {
  // Layer toggles
  const [layers, setLayers] = useState({
    passes: true,
    peaks: true,
    rivers: true,
    regions: true,
    biosphere: false,
    minerals: false
  });

  const [selectedEntity, setSelectedEntity] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [filterRegion, setFilterRegion] = useState('all');

  const toggleLayer = (layerKey) => {
    setLayers(prev => ({ ...prev, [layerKey]: !prev[layerKey] }));
  };

  // Projected Passes & Peaks
  const projectedPoints = useMemo(() => {
    return passesPeaksData.map(item => {
      const coords = projectCoordinates(item.lat, item.lon, 800, 900);
      return {
        ...item,
        svgX: coords.x,
        svgY: coords.y
      };
    });
  }, [passesPeaksData]);

  // Projected Biosphere Reserves (approx coordinates for key ones)
  const biosphereReserves = useMemo(() => {
    const list = biodiversityData.biosphereReserves || [];
    const geoMap = {
      'Nilgiri': { lat: 11.5, lon: 76.5 },
      'Nanda Devi': { lat: 30.4, lon: 79.9 },
      'Gulf of Mannar': { lat: 9.1, lon: 79.2 },
      'Nokrek': { lat: 25.5, lon: 90.3 },
      'Sundarbans': { lat: 21.9, lon: 88.9 },
      'Manas': { lat: 26.7, lon: 91.0 },
      'Similipal': { lat: 21.8, lon: 86.3 },
      'Dihang-Dibang': { lat: 28.5, lon: 94.9 },
      'Pachmarhi': { lat: 22.4, lon: 78.4 },
      'Achanakmar-Amarkantak': { lat: 22.6, lon: 81.7 },
      'Great Nicobar': { lat: 7.0, lon: 93.8 },
      'Agasthyamalai': { lat: 8.6, lon: 77.2 }
    };

    return list.map(item => {
      const g = geoMap[item.name] || { lat: 20 + Math.random() * 8, lon: 75 + Math.random() * 10 };
      const coords = projectCoordinates(g.lat, g.lon, 800, 900);
      return {
        ...item,
        lat: g.lat,
        lon: g.lon,
        svgX: coords.x,
        svgY: coords.y,
        type: 'biosphere'
      };
    });
  }, [biodiversityData]);

  // Filtered passes and peaks
  const activePasses = projectedPoints.filter(p => p.type === 'pass');
  const activePeaks = projectedPoints.filter(p => p.type === 'peak');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 animate-fade-in">
      
      {/* Top Banner & Control Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-sepia-300/80 dark:border-slate-800 pb-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300 border border-teal-300 dark:border-teal-800">
              VECTOR GEOGRAPHIC ENGINE
            </span>
            <span className="text-xs text-sepia-600 dark:text-slate-400">
              Precise Georeferenced Coordinates
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-sepia-900 dark:text-slate-100 mt-1">
            Interactive Bharat Atlas Lab
          </h2>
          <p className="text-xs sm:text-sm text-sepia-700 dark:text-slate-400 mt-0.5">
            Toggle thematic layers, inspect high-altitude strategic passes, drainage channels, and ecological hotspots.
          </p>
        </div>

        {/* Drill Launch */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onStartDrill?.()}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-teal-600 text-white shadow-md hover:bg-teal-700 flex items-center space-x-1.5 transition-colors"
          >
            <Compass className="w-4 h-4" />
            <span>Launch Map Pointing Drill</span>
          </button>
        </div>
      </div>

      {/* Layer Toggle Strip */}
      <div className="flex flex-wrap items-center gap-2 p-3 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-sepia-300/70 dark:border-slate-800 text-xs">
        <span className="font-mono font-bold text-sepia-600 dark:text-slate-400 mr-2 flex items-center space-x-1">
          <Layers className="w-3.5 h-3.5" />
          <span>LAYERS:</span>
        </span>

        <button
          onClick={() => toggleLayer('passes')}
          className={`px-3 py-1.5 rounded-xl font-medium transition-all flex items-center space-x-1.5 border ${
            layers.passes
              ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
              : 'bg-sepia-100 text-sepia-700 dark:bg-slate-800 dark:text-slate-400 border-transparent hover:bg-sepia-200'
          }`}
        >
          <MapPin className="w-3.5 h-3.5" />
          <span>Passes ({activePasses.length})</span>
        </button>

        <button
          onClick={() => toggleLayer('peaks')}
          className={`px-3 py-1.5 rounded-xl font-medium transition-all flex items-center space-x-1.5 border ${
            layers.peaks
              ? 'bg-purple-600 text-white border-purple-600 shadow-xs'
              : 'bg-sepia-100 text-sepia-700 dark:bg-slate-800 dark:text-slate-400 border-transparent hover:bg-sepia-200'
          }`}
        >
          <Mountain className="w-3.5 h-3.5" />
          <span>Peaks ({activePeaks.length})</span>
        </button>

        <button
          onClick={() => toggleLayer('rivers')}
          className={`px-3 py-1.5 rounded-xl font-medium transition-all flex items-center space-x-1.5 border ${
            layers.rivers
              ? 'bg-sky-600 text-white border-sky-600 shadow-xs'
              : 'bg-sepia-100 text-sepia-700 dark:bg-slate-800 dark:text-slate-400 border-transparent hover:bg-sepia-200'
          }`}
        >
          <Waves className="w-3.5 h-3.5" />
          <span>River Paths ({SCHEMATIC_RIVER_PATHS.length})</span>
        </button>

        <button
          onClick={() => toggleLayer('regions')}
          className={`px-3 py-1.5 rounded-xl font-medium transition-all flex items-center space-x-1.5 border ${
            layers.regions
              ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
              : 'bg-sepia-100 text-sepia-700 dark:bg-slate-800 dark:text-slate-400 border-transparent hover:bg-sepia-200'
          }`}
        >
          <Compass className="w-3.5 h-3.5" />
          <span>Physiography (6 Divisions)</span>
        </button>

        <button
          onClick={() => toggleLayer('biosphere')}
          className={`px-3 py-1.5 rounded-xl font-medium transition-all flex items-center space-x-1.5 border ${
            layers.biosphere
              ? 'bg-green-700 text-white border-green-700 shadow-xs'
              : 'bg-sepia-100 text-sepia-700 dark:bg-slate-800 dark:text-slate-400 border-transparent hover:bg-sepia-200'
          }`}
        >
          <Trees className="w-3.5 h-3.5" />
          <span>Biosphere Reserves ({biosphereReserves.length})</span>
        </button>
      </div>

      {/* Main Map Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left 8 Cols: Vector SVG Canvas */}
        <div className="lg:col-span-8 rounded-3xl p-4 sm:p-6 border shadow-lg relative overflow-hidden transition-all
          bg-[#faf7ee] border-sepia-300
          dark:bg-[#070b11] dark:border-slate-800">
          
          {/* Zoom controls */}
          <div className="absolute top-6 right-6 z-10 flex flex-col space-y-2 bg-white/90 dark:bg-slate-900/90 p-1.5 rounded-xl border border-sepia-300 dark:border-slate-700 shadow-md">
            <button
              onClick={() => setZoom(prev => Math.min(2.0, prev + 0.2))}
              className="p-1.5 rounded-lg hover:bg-sepia-100 dark:hover:bg-slate-800 text-sepia-800 dark:text-slate-200"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setZoom(prev => Math.max(0.8, prev - 0.2))}
              className="p-1.5 rounded-lg hover:bg-sepia-100 dark:hover:bg-slate-800 text-sepia-800 dark:text-slate-200"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={() => setZoom(1)}
              className="p-1.5 rounded-lg hover:bg-sepia-100 dark:hover:bg-slate-800 text-sepia-800 dark:text-slate-200"
              title="Reset Zoom"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          {/* SVG Map Canvas */}
          <div className="w-full aspect-[4/4.5] overflow-auto flex items-center justify-center select-none">
            <svg
              viewBox="0 0 800 900"
              className="w-full h-full max-h-[750px] transition-transform duration-300 origin-center"
              style={{ transform: `scale(${zoom})` }}
            >
              {/* Subtle Graticule Grid */}
              <defs>
                <pattern id="graticule" width="80" height="90" patternUnits="userSpaceOnUse">
                  <path d="M 80 0 L 0 0 0 90" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-sepia-300/40 dark:text-slate-800/60" />
                </pattern>
              </defs>
              <rect width="800" height="900" fill="url(#graticule)" />

              {/* Tropic of Cancer Line (approx Lat 23.5°N -> Y ~ 405) */}
              <line
                x1="80"
                y1="405"
                x2="720"
                y2="405"
                stroke="#ea580c"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                className="opacity-70"
              />
              <text x="730" y="409" fontSize="10" fill="#ea580c" fontFamily="monospace" fontWeight="bold">
                23°30'N (Tropic of Cancer)
              </text>

              {/* 82°30'E Standard Meridian (approx Lon 82.5°E -> X ~ 434) */}
              <line
                x1="434"
                y1="50"
                x2="434"
                y2="820"
                stroke="#0284c7"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                className="opacity-60"
              />
              <text x="438" y="65" fontSize="10" fill="#0284c7" fontFamily="monospace" fontWeight="bold">
                82°30'E (IST Meridian - Mirzapur)
              </text>

              {/* Layer: Physiographic Divisions */}
              {layers.regions && PHYSIOGRAPHIC_REGIONS.map(reg => (
                <path
                  key={reg.id}
                  d={reg.path}
                  fill={reg.color}
                  fillOpacity="0.18"
                  stroke={reg.color}
                  strokeWidth="2"
                  strokeDasharray="2 2"
                  className="cursor-pointer hover:fill-opacity-35 transition-all"
                  onClick={() => setSelectedEntity({
                    title: reg.name,
                    hindi: reg.hindi,
                    type: 'Physiographic Division',
                    desc: reg.desc
                  })}
                />
              ))}

              {/* Layer: Schematic River Paths */}
              {layers.rivers && SCHEMATIC_RIVER_PATHS.map(riv => (
                <g key={riv.id} className="cursor-pointer group">
                  <path
                    d={riv.d}
                    fill="none"
                    stroke={riv.color}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    className="hover:stroke-width-5 transition-all opacity-85"
                  />
                  <text
                    x={parseInt(riv.d.split(' ')[1]) + 10}
                    y={parseInt(riv.d.split(' ')[2])}
                    fontSize="10"
                    fill={riv.color}
                    fontWeight="bold"
                    fontFamily="sans-serif"
                    className="select-none pointer-events-none drop-shadow"
                  >
                    {riv.name}
                  </text>
                </g>
              ))}

              {/* Layer: Mountain Passes */}
              {layers.passes && activePasses.map(pass => (
                <g
                  key={pass.id}
                  transform={`translate(${pass.svgX}, ${pass.svgY})`}
                  className="cursor-pointer group"
                  onClick={() => setSelectedEntity(pass)}
                >
                  <circle
                    r="6"
                    fill="#f59e0b"
                    stroke="#78350f"
                    strokeWidth="1.5"
                    className="group-hover:scale-150 transition-transform shadow-md"
                  />
                  <circle r="2" fill="#fff" />
                  <text
                    x="8"
                    y="3"
                    fontSize="9"
                    fontWeight="bold"
                    fill="currentColor"
                    className="text-sepia-900 dark:text-amber-200 select-none pointer-events-none opacity-80 group-hover:opacity-100 group-hover:text-amber-600"
                  >
                    {pass.name}
                  </text>
                </g>
              ))}

              {/* Layer: Peaks */}
              {layers.peaks && activePeaks.map(peak => (
                <g
                  key={peak.id}
                  transform={`translate(${peak.svgX}, ${peak.svgY})`}
                  className="cursor-pointer group"
                  onClick={() => setSelectedEntity(peak)}
                >
                  <polygon
                    points="0,-8 6,4 -6,4"
                    fill="#a855f7"
                    stroke="#581c87"
                    strokeWidth="1.5"
                    className="group-hover:scale-150 transition-transform"
                  />
                  <text
                    x="8"
                    y="2"
                    fontSize="9"
                    fontWeight="bold"
                    fill="currentColor"
                    className="text-purple-900 dark:text-purple-200 select-none pointer-events-none opacity-80 group-hover:opacity-100"
                  >
                    {peak.name} ({peak.elevationM}m)
                  </text>
                </g>
              ))}

              {/* Layer: Biosphere Reserves */}
              {layers.biosphere && biosphereReserves.map((bio, i) => (
                <g
                  key={i}
                  transform={`translate(${bio.svgX}, ${bio.svgY})`}
                  className="cursor-pointer group"
                  onClick={() => setSelectedEntity({
                    title: `${bio.name} Biosphere Reserve`,
                    type: 'Biosphere Reserve',
                    state: bio.state,
                    mab: bio.mab ? 'UNESCO MAB Recognized' : 'National BR',
                    species: bio.keySpecies,
                    year: bio.year
                  })}
                >
                  <circle
                    r="5"
                    fill="#15803d"
                    stroke="#14532d"
                    strokeWidth="1.5"
                    className="group-hover:scale-150 transition-transform"
                  />
                  <text
                    x="7"
                    y="3"
                    fontSize="8"
                    fontWeight="bold"
                    fill="#15803d"
                    className="select-none pointer-events-none opacity-70 group-hover:opacity-100"
                  >
                    {bio.name}
                  </text>
                </g>
              ))}

            </svg>
          </div>

          <div className="mt-3 flex items-center justify-between text-[11px] text-sepia-600 dark:text-slate-500 font-mono">
            <span>Lat bounds: 6.5°N–37.5°N | Lon: 68°E–97.5°E</span>
            <span>Click any feature to inspect details</span>
          </div>
        </div>

        {/* Right 4 Cols: Entity Inspection Drawer */}
        <div className="lg:col-span-4 space-y-4">
          <div className="p-6 rounded-3xl border shadow-md transition-all
            bg-white/90 border-sepia-300 text-sepia-900
            dark:bg-[#0f172a]/90 dark:border-slate-800 dark:text-slate-100">
            
            <div className="flex items-center justify-between border-b border-sepia-200 dark:border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-saffron-700 dark:text-amber-400 flex items-center space-x-1.5">
                <Info className="w-4 h-4" />
                <span>INSPECT DRAWER</span>
              </span>
              {selectedEntity && (
                <button
                  onClick={() => setSelectedEntity(null)}
                  className="p-1 rounded-md text-sepia-500 hover:text-sepia-800 dark:text-slate-400 dark:hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {selectedEntity ? (
              <div className="mt-4 space-y-4 animate-fade-in">
                <div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-saffron-100 text-saffron-800 dark:bg-amber-950 dark:text-amber-300">
                    {selectedEntity.type}
                  </span>
                  <h3 className="text-xl font-bold font-display text-sepia-900 dark:text-slate-100 mt-1">
                    {selectedEntity.title || selectedEntity.name}
                  </h3>
                  {selectedEntity.hindi && (
                    <p className="text-xs font-hindi text-sepia-600 dark:text-amber-400">
                      {selectedEntity.hindi}
                    </p>
                  )}
                </div>

                {/* Attributes Grid */}
                <div className="space-y-2 text-xs">
                  {selectedEntity.range && (
                    <div className="flex justify-between border-b border-sepia-100 dark:border-slate-800/60 pb-1.5">
                      <span className="text-sepia-500 dark:text-slate-400">Mountain Range:</span>
                      <strong className="text-sepia-900 dark:text-slate-200">{selectedEntity.range}</strong>
                    </div>
                  )}
                  {selectedEntity.elevationM && (
                    <div className="flex justify-between border-b border-sepia-100 dark:border-slate-800/60 pb-1.5">
                      <span className="text-sepia-500 dark:text-slate-400">Elevation:</span>
                      <strong className="font-mono text-sepia-900 dark:text-slate-200">{selectedEntity.elevationM.toLocaleString()} m</strong>
                    </div>
                  )}
                  {selectedEntity.state && (
                    <div className="flex justify-between border-b border-sepia-100 dark:border-slate-800/60 pb-1.5">
                      <span className="text-sepia-500 dark:text-slate-400">State / Territory:</span>
                      <strong className="text-sepia-900 dark:text-slate-200">{selectedEntity.state}</strong>
                    </div>
                  )}
                  {selectedEntity.route && (
                    <div className="flex justify-between border-b border-sepia-100 dark:border-slate-800/60 pb-1.5">
                      <span className="text-sepia-500 dark:text-slate-400">Highway Route:</span>
                      <strong className="text-sepia-900 dark:text-slate-200">{selectedEntity.route}</strong>
                    </div>
                  )}
                  {selectedEntity.connects && (
                    <div className="pt-1">
                      <span className="text-sepia-500 dark:text-slate-400 block mb-0.5">Strategic Connectivity:</span>
                      <p className="text-sepia-800 dark:text-slate-300 font-medium">{selectedEntity.connects}</p>
                    </div>
                  )}
                  {selectedEntity.mab && (
                    <div className="flex justify-between border-b border-sepia-100 dark:border-slate-800/60 pb-1.5">
                      <span className="text-sepia-500 dark:text-slate-400">Status:</span>
                      <strong className="text-emerald-700 dark:text-emerald-400">{selectedEntity.mab}</strong>
                    </div>
                  )}
                  {selectedEntity.species && (
                    <div className="pt-1">
                      <span className="text-sepia-500 dark:text-slate-400 block mb-0.5">Key Indicator Species:</span>
                      <p className="text-sepia-800 dark:text-slate-300 font-medium">{selectedEntity.species}</p>
                    </div>
                  )}
                </div>

                {/* Strategic Importance / Desc */}
                {(selectedEntity.importance || selectedEntity.desc) && (
                  <div className="p-3.5 rounded-2xl bg-sepia-100/70 dark:bg-slate-800/70 text-xs">
                    <span className="font-bold text-sepia-900 dark:text-slate-200 block mb-1">
                      Strategic & Exam Significance:
                    </span>
                    <p className="text-sepia-700 dark:text-slate-300 leading-relaxed">
                      {selectedEntity.importance || selectedEntity.desc}
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="py-12 text-center text-sepia-600 dark:text-slate-400">
                <Compass className="w-8 h-8 mx-auto mb-2 text-saffron-600 opacity-60" />
                <p className="text-sm font-semibold">No Entity Selected</p>
                <p className="text-xs mt-1">
                  Click any pass, peak, river, or region pin on the map to inspect coordinates, height, and UPSC strategic facts.
                </p>
              </div>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
