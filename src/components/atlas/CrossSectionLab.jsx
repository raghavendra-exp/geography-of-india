import React, { useState } from 'react';
import { Layers, Mountain, Waves, Info, CheckCircle2, ArrowRight, Droplets, Sparkles, AlertCircle } from 'lucide-react';

const PLAINS_TRANSECT = [
  {
    id: 'greater_himalayas',
    name: 'Greater Himalayas (Himadri)',
    hindi: 'वृहद हिमालय (हिमाद्रि)',
    elevation: '>6,000 meters',
    gradient: 'Extreme Slopes & Permafrost',
    color: '#0284c7',
    tag: 'Alpine Glaciers',
    desc: 'Perpetual snows and glaciers (Gangotri, Yamunotri). Source of perennial Himalayan rivers. Consists of Archaean crystallines (granites and gneisses).'
  },
  {
    id: 'lesser_himalayas',
    name: 'Lesser Himalayas (Himachal)',
    hindi: 'लघु हिमालय (हिमाचल)',
    elevation: '3,700 – 4,500 meters',
    gradient: 'Steep Valleys & Ridges',
    color: '#0d9488',
    tag: 'Hill Stations & Duns',
    desc: 'Famous ranges like Pir Panjal and Dhauladhar. Location of prominent hill stations (Shimla, Mussoorie, Nainital). Dense temperate oak and conifer forests.'
  },
  {
    id: 'shiwalik',
    name: 'Shiwalik Foothills (Outer)',
    hindi: 'शिवालिक पहाड़ियाँ',
    elevation: '900 – 1,200 meters',
    gradient: 'Slope Break Foothills',
    color: '#64748b',
    tag: 'Landslide Prone',
    desc: 'Youngest mountain fold formed by Tertiary unconsolidated river sediments, pebbles, and sandstone. Prone to severe landslides and soil erosion. Longitudinal valleys called "Duns" (e.g. Dehradun).'
  },
  {
    id: 'bhabar',
    name: 'Bhabar Pebble Belt',
    hindi: 'भाबर पट्टी (कंकड़-पत्थर)',
    elevation: '200 – 300 meters',
    gradient: '8 – 10 km Parallel Strip',
    color: '#d97706',
    tag: 'RIVERS VANISH UNDERGROUND!',
    desc: 'Coarse boulders, unassorted gravels, and pebbles dumped at the sudden Himalayan slope break. POROSITY IS SO IMMENSE that river torrents completely sink underground and disappear from the surface! Unfit for farming; deep-rooted forest trees thrive.'
  },
  {
    id: 'terai',
    name: 'Terai Marshy Zone',
    hindi: 'तराई क्षेत्र (दलदली भूमि)',
    elevation: '100 – 200 meters',
    gradient: '10 – 20 km Wide Belt',
    color: '#059669',
    tag: 'STREAMS RE-EMERGE AS SWAMPS',
    desc: 'The underground streams of the Bhabar belt re-emerge at the surface without any defined channel, creating ill-drained marshy, swampy waterlogged tracts. Once dense malarial jungles, now reclaimed for intensive sugarcane, paddy, wheat, and jute cultivation.'
  },
  {
    id: 'bhangar',
    name: 'Bhangar Terrace (Old Alluvium)',
    hindi: 'बांगर (पुरातन जलोढ़)',
    elevation: '60 – 100 meters',
    gradient: 'Elevated River Terraces',
    color: '#b45309',
    tag: 'Calcareous Kankar Nodules',
    desc: 'Older Middle-Pleistocene alluvium forming upland terraces well above the reach of modern annual floods. Dark clayey loam containing calcareous calcium carbonate concretions called "Kankar". Reliable, flood-safe wheat, pulse, and mustard agricultural land.'
  },
  {
    id: 'khadar',
    name: 'Khadar Floodplain (New Alluvium)',
    hindi: 'खादर (नवीन जलोढ़)',
    elevation: '30 – 60 meters',
    gradient: 'Active Riparian River Plain',
    color: '#10b981',
    tag: 'Annually Renewed Fertile Silt',
    desc: 'Fresh fertile silt, clay, and sand deposited annually by monsoon floodwaters along active river channels. Known as "Bet" in Punjab. Requires little chemical fertilizer due to annual natural nutrient replenishment; intensive paddy and vegetable cropping.'
  }
];

const GHATS_TRANSECT = [
  {
    id: 'arabian_sea',
    name: 'Arabian Sea Continental Shelf',
    desc: 'Submergent western coast with rich fisheries, petroleum deposits (Bombay High), and natural deep-water ports (JNPT, Mormugao, Kochi).'
  },
  {
    id: 'west_plain',
    name: 'Narrow Western Coastal Plain (50-80 km)',
    desc: 'Narrow, steep coastal strip. Fast-flowing non-deltaic rivers form estuaries, backwaters, and lagoons/kayals (Vembanad, Ashtamudi).'
  },
  {
    id: 'western_ghats',
    name: 'Western Ghats Escarpment (Sahyadri, 900-1600m)',
    desc: 'Continuous fault-scarp wall directly blocking South-West monsoon winds. Heavy orographic rain (250-400 cm); tropical evergreen rainforests; global biodiversity hotspot.'
  },
  {
    id: 'rain_shadow',
    name: 'Deccan Rain-Shadow Plateau',
    desc: 'Semi-arid interior (50-70 cm rain). Descending dry air creates rain-deficit conditions across Maharashtra, Northern Karnataka, and Rayalaseema. Black cotton soil (Regur).'
  },
  {
    id: 'eastern_ghats',
    name: 'Eastern Ghats Relict Hills (~600m)',
    desc: 'Ancient, heavily eroded, discontinuous hill fragments widely dissected by east-flowing peninsular rivers (Mahanadi, Godavari, Krishna, Cauvery).'
  },
  {
    id: 'east_plain',
    name: 'Broad Eastern Coastal Plain (100-150 km)',
    desc: 'Broad emergent coastline featuring vast fertile river deltas (Ganga-Brahmaputra, Mahanadi, Godavari, Krishna, Cauvery) known as the rice bowls of India.'
  }
];

export default function CrossSectionLab() {
  const [activeProfile, setActiveProfile] = useState('plains'); // 'plains' | 'ghats'
  const [selectedZoneId, setSelectedZoneId] = useState('bhabar');

  const curZone = PLAINS_TRANSECT.find(z => z.id === selectedZoneId) || PLAINS_TRANSECT[3];

  return (
    <div className="space-y-6 animate-fade-in">
      
      {/* Top Controls Banner */}
      <div className="p-6 rounded-3xl border shadow-sm bg-white/80 border-sepia-300 text-sepia-900 dark:bg-slate-900/80 dark:border-slate-800 dark:text-slate-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                TOPOGRAPHIC CROSS-SECTION LAB
              </span>
              <span className="text-xs text-sepia-600 dark:text-slate-400 font-mono">
                NCERT Class 11 Physiography
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-sepia-900 dark:text-slate-100 mt-1">
              Relief Slopes, Groundwater & Soil Morpho-Units
            </h2>
            <p className="text-xs sm:text-sm text-sepia-600 dark:text-slate-400 mt-0.5">
              Visualize the dramatic North-to-South Himalayan-to-Plains transect and Peninsular Ghats asymmetry.
            </p>
          </div>

          <div className="flex rounded-xl bg-sepia-100 dark:bg-slate-800 p-1 border border-sepia-200 dark:border-slate-700 text-xs font-bold w-fit">
            <button
              onClick={() => {
                setActiveProfile('plains');
                setSelectedZoneId('bhabar');
              }}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                activeProfile === 'plains'
                  ? 'bg-saffron-600 text-white shadow-xs'
                  : 'text-sepia-700 dark:text-slate-300 hover:text-sepia-900'
              }`}
            >
              Himalayas → Northern Plains
            </button>
            <button
              onClick={() => setActiveProfile('ghats')}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                activeProfile === 'ghats'
                  ? 'bg-saffron-600 text-white shadow-xs'
                  : 'text-sepia-700 dark:text-slate-300 hover:text-sepia-900'
              }`}
            >
              Western Ghats → Eastern Ghats
            </button>
          </div>
        </div>
      </div>

      {/* Profile 1: Northern Plains Morpho-Units */}
      {activeProfile === 'plains' && (
        <div className="space-y-6">
          
          {/* Visual Step-Ladder Diagram */}
          <div className="p-6 rounded-3xl border shadow-lg bg-[#faf7ee] border-sepia-300 text-sepia-900 dark:bg-[#090e17] dark:border-slate-800 dark:text-slate-100 space-y-4">
            <div className="flex items-center justify-between border-b border-sepia-200 dark:border-slate-800 pb-2">
              <span className="text-xs font-mono font-bold text-sepia-600 dark:text-slate-400 uppercase tracking-wider">
                NORTH-TO-SOUTH TRANSECT: HIMALAYAS → FOOTHILLS → PLAINS → GANGA
              </span>
              <span className="text-xs font-bold text-saffron-600 dark:text-amber-400">Click any zone below</span>
            </div>

            {/* Step-by-step Interactive Elevation Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 pt-2">
              {PLAINS_TRANSECT.map((zone, idx) => {
                const isSelected = selectedZoneId === zone.id;
                return (
                  <button
                    key={zone.id}
                    onClick={() => setSelectedZoneId(zone.id)}
                    className={`p-3 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'bg-saffron-600 text-white border-saffron-600 shadow-lg scale-[1.03] ring-2 ring-saffron-400'
                        : 'bg-white/80 dark:bg-slate-900/80 border-sepia-200 dark:border-slate-800 text-sepia-800 dark:text-slate-300 hover:bg-sepia-100'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-mono font-bold opacity-80 block uppercase">
                        ZONE {idx + 1}
                      </span>
                      <h4 className="text-xs font-bold mt-0.5 line-clamp-1">{zone.name.split(' ')[0]}</h4>
                      <span className="text-[10px] font-mono block opacity-75 mt-0.5">{zone.elevation}</span>
                    </div>

                    <div className="mt-2 pt-1.5 border-t border-sepia-200/50 dark:border-slate-800/50">
                      <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10 block text-center truncate">
                        {zone.tag}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Morpho-Unit Deep-Dive Inspector */}
            <div className="mt-4 p-5 rounded-2xl bg-white/90 dark:bg-slate-800/80 border border-sepia-200 dark:border-slate-700 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-sepia-200 dark:border-slate-700 pb-2">
                <div>
                  <span className="text-[10px] font-mono font-bold text-saffron-700 dark:text-amber-300 uppercase">
                    ACTIVE ZONE DETAIL
                  </span>
                  <h3 className="text-lg font-bold font-display text-sepia-900 dark:text-slate-100">
                    {curZone.name}
                  </h3>
                  {curZone.hindi && (
                    <p className="text-xs font-hindi text-sepia-600 dark:text-slate-400 font-medium">
                      {curZone.hindi}
                    </p>
                  )}
                </div>

                <div className="flex items-center space-x-2 text-xs font-mono">
                  <span className="px-2.5 py-1 rounded-lg bg-sepia-100 dark:bg-slate-700 text-sepia-800 dark:text-slate-200 font-bold">
                    Elevation: {curZone.elevation}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-saffron-100 dark:bg-amber-950 text-saffron-800 dark:text-amber-300 font-bold">
                    {curZone.gradient}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-sepia-800 dark:text-slate-200 leading-relaxed font-sans">
                {curZone.desc}
              </p>
            </div>

            {/* The Famous Bhabar vs Terai vs Bhangar vs Khadar UPSC Table */}
            <div className="mt-4 overflow-x-auto text-xs">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-sepia-300 dark:border-slate-700 text-left text-sepia-600 dark:text-slate-400 font-mono">
                    <th className="py-2.5 pr-3 font-bold uppercase">Feature</th>
                    <th className="py-2.5 px-3 font-bold uppercase text-amber-600 dark:text-amber-400">1. Bhabar</th>
                    <th className="py-2.5 px-3 font-bold uppercase text-emerald-600 dark:text-emerald-400">2. Terai</th>
                    <th className="py-2.5 px-3 font-bold uppercase text-amber-700 dark:text-amber-500">3. Bhangar</th>
                    <th className="py-2.5 pl-3 font-bold uppercase text-teal-600 dark:text-teal-400">4. Khadar</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sepia-200 dark:divide-slate-800 font-sans text-sepia-800 dark:text-slate-200">
                  <tr>
                    <td className="py-2 pr-3 font-bold text-sepia-900 dark:text-slate-100">Sediment Type</td>
                    <td className="py-2 px-3">Pebbles & coarse boulders</td>
                    <td className="py-2 px-3">Fine silt & sand</td>
                    <td className="py-2 px-3">Older clay & Kankar nodules</td>
                    <td className="py-2 pl-3 font-semibold text-emerald-600">Fresh silt deposited annually</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 font-bold text-sepia-900 dark:text-slate-100">Stream Status</td>
                    <td className="py-2 px-3 font-bold text-rose-600">STREAMS DISAPPEAR UNDERGROUND</td>
                    <td className="py-2 px-3 font-bold text-emerald-600">STREAMS RE-EMERGE AS SWAMPS</td>
                    <td className="py-2 px-3">Well above flood reach</td>
                    <td className="py-2 pl-3">Submerged during annual floods</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 font-bold text-sepia-900 dark:text-slate-100">Agriculture</td>
                    <td className="py-2 px-3 text-rose-600 font-medium">Unfit for farming</td>
                    <td className="py-2 px-3 font-medium">Sugarcane, Paddy, Wheat, Jute</td>
                    <td className="py-2 px-3 font-medium">Wheat, Mustard, Pulses</td>
                    <td className="py-2 pl-3 font-medium">Intensive Vegetables & Rice</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>

        </div>
      )}

      {/* Profile 2: Peninsular Ghats Asymmetry */}
      {activeProfile === 'ghats' && (
        <div className="space-y-6">
          <div className="p-6 rounded-3xl border shadow-lg bg-[#faf7ee] border-sepia-300 text-sepia-900 dark:bg-[#090e17] dark:border-slate-800 dark:text-slate-100 space-y-6">
            <div>
              <span className="text-xs font-mono font-bold text-saffron-700 dark:text-amber-300 uppercase">
                WEST-TO-EAST PENINSULAR TRANSECT
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-sepia-900 dark:text-slate-100 mt-1">
                Why are the Western Ghats so Different from the Eastern Ghats?
              </h3>
              <p className="text-xs sm:text-sm text-sepia-600 dark:text-slate-400 mt-0.5">
                The Peninsular Plateau is tilted from West to East, dictating drainage, rainfall gradients, and coastal geometry.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {GHATS_TRANSECT.map((item, idx) => (
                <div key={item.id} className="p-4 rounded-2xl bg-white/90 dark:bg-slate-800/80 border border-sepia-200 dark:border-slate-700 space-y-1.5">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-5 h-5 rounded-full bg-saffron-600 text-white text-[10px] font-mono font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-sepia-900 dark:text-slate-100">
                      {item.name}
                    </h4>
                  </div>
                  <p className="text-xs text-sepia-700 dark:text-slate-300 leading-relaxed pt-1">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 text-xs text-sky-900 dark:text-sky-200 flex items-start space-x-2">
              <Sparkles className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">UPSC Core Architectural Concept: </span>
                <span>The Peninsular block experienced Cretaceous faulting on its western margin when Madagascar separated, creating the steep Western Ghats fault-scarp. Because the entire block tilts eastwards, all major peninsular rivers (Godavari, Krishna, Cauvery, Mahanadi) flow eastwards into the Bay of Bengal and deposit massive deltas!</span>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
