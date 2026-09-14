import React, { useState } from 'react';
import { Layers, Mountain, Waves, Info, CheckCircle2, ArrowRight } from 'lucide-react';

export default function CrossSectionLab() {
  const [activeProfile, setActiveProfile] = useState('plains');
  const [hoveredZone, setHoveredZone] = useState(null);

  const PLAINS_ZONES = [
    {
      id: 'shiwalik',
      name: 'Shiwalik Foothills',
      hindi: 'शिवालिक की पहाड़ियाँ',
      width: '18%',
      color: '#94a3b8',
      height: '90px',
      geology: 'Tertiary sandstone, conglomerate and unconsolidated sediments.',
      drainage: 'High gradient mountain torrents carrying massive boulder loads.',
      crops: 'Timber, temperate fruits (apple, peach), terrace farming.'
    },
    {
      id: 'bhabar',
      name: 'Bhabar Belt',
      hindi: 'भाबर पट्टी',
      width: '20%',
      color: '#d97706',
      height: '60px',
      geology: 'Coarse gravels, pebbles and unassorted boulders deposited at slope break.',
      drainage: 'Immense porosity — streams completely sink underground and disappear!',
      crops: 'Not suited for agriculture due to unretentive coarse stones; deep-rooted trees.'
    },
    {
      id: 'terai',
      name: 'Terai Zone',
      hindi: 'तराई क्षेत्र',
      width: '20%',
      color: '#059669',
      height: '50px',
      geology: 'Fine silts and sand; ill-drained marshy waterlogged tract.',
      drainage: 'Underground Bhabar streams re-emerge at the surface creating swamps.',
      crops: 'Reclaimed for intensive cultivation of Sugarcane, Rice, Wheat, and Jute.'
    },
    {
      id: 'bhangar',
      name: 'Bhangar Terrace',
      hindi: 'बांगर (पुरातन जलोढ़)',
      width: '22%',
      color: '#b45309',
      height: '55px',
      geology: 'Older Quaternary alluvium situated above current flood levels.',
      drainage: 'Contains calcareous concretions called "Kankar"; well-drained upland.',
      crops: 'Wheat, Mustard, Pulses; stable year-round farming without annual flood threat.'
    },
    {
      id: 'khadar',
      name: 'Khadar Floodplain',
      hindi: 'खादर (नवीन जलोढ़)',
      width: '20%',
      color: '#10b981',
      height: '40px',
      geology: 'Younger fresh alluvium deposited by active river channel floods annually.',
      drainage: 'Low-lying riparian zone along river banks; subject to seasonal inundation.',
      crops: 'Extremely fertile without fertilizers; Intensive Paddy, Maize, Vegetables, Sugarcane.'
    }
  ];

  const GHATS_ZONES = [
    {
      id: 'arabian_sea',
      name: 'Arabian Sea Shelf',
      width: '14%',
      color: '#0284c7',
      desc: 'Submergent western continental shelf with rich fisheries and petroleum (Bombay High).'
    },
    {
      id: 'west_coast',
      name: 'Western Coastal Plain',
      width: '16%',
      color: '#14b8a6',
      desc: 'Narrow (50–80 km), fast-flowing non-deltaic rivers forming estuaries, lagoons/kayals (Vembanad).'
    },
    {
      id: 'western_ghats',
      name: 'Western Ghats (Sahyadri)',
      width: '20%',
      color: '#7c3aed',
      desc: 'Continuous steep fault escarpment, 900–1600m. Heavy orographic rain (>250 cm). High biodiversity hotspot.'
    },
    {
      id: 'deccan_interior',
      name: 'Deccan Rain Shadow',
      width: '22%',
      color: '#eab308',
      desc: 'Semi-arid interior (50–70 cm rain). Black cotton soil (Regur), drought-prone rainshadow of Western Ghats.'
    },
    {
      id: 'eastern_ghats',
      name: 'Eastern Ghats',
      width: '14%',
      color: '#a855f7',
      desc: 'Discontinuous, highly eroded ancient relict hills (~600m), heavily breached by Godavari, Krishna, Mahanadi.'
    },
    {
      id: 'east_coast',
      name: 'Coromandel / Deltaic Coast',
      width: '14%',
      color: '#10b981',
      desc: 'Broad (100–150 km) emergent coastal plain with vast fertile deltas and coastal lagoons (Chilika, Pulicat).'
    }
  ];

  const currentPlainsItem = PLAINS_ZONES.find(z => z.id === hoveredZone) || PLAINS_ZONES[1];
  const currentGhatsItem = GHATS_ZONES.find(z => z.id === hoveredZone) || GHATS_ZONES[2];

  return (
    <div className="space-y-6">
      {/* Profile Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-sepia-300 dark:border-slate-800">
        <div>
          <h4 className="text-sm font-bold font-display text-sepia-900 dark:text-slate-100">
            Select Topographic Cross-Section Profile:
          </h4>
          <p className="text-xs text-sepia-600 dark:text-slate-400">
            Understand morphological slopes, groundwater dynamics, and vegetative transitions.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => {
              setActiveProfile('plains');
              setHoveredZone('bhabar');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
              activeProfile === 'plains'
                ? 'bg-saffron-600 text-white border-saffron-600 shadow'
                : 'bg-sepia-100 text-sepia-800 dark:bg-slate-800 dark:text-slate-300 border-transparent hover:bg-sepia-200'
            }`}
          >
            Northern Plains Morpho-Zones
          </button>
          <button
            onClick={() => {
              setActiveProfile('ghats');
              setHoveredZone('western_ghats');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
              activeProfile === 'ghats'
                ? 'bg-saffron-600 text-white border-saffron-600 shadow'
                : 'bg-sepia-100 text-sepia-800 dark:bg-slate-800 dark:text-slate-300 border-transparent hover:bg-sepia-200'
            }`}
          >
            Peninsular Ghats & Coastal Asymmetry
          </button>
        </div>
      </div>

      {/* Profile 1: Northern Plains Morpho-Units */}
      {activeProfile === 'plains' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-8 p-6 rounded-3xl border shadow-md bg-[#faf7ee] border-sepia-300 dark:bg-[#090e17] dark:border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-sepia-200 dark:border-slate-800 pb-2">
              <span className="text-xs font-mono font-bold text-sepia-600 dark:text-slate-400">
                NORTH-TO-SOUTH TRANSECT: HIMALAYAN FOOTHILLS TO GANGETIC FLOODPLAINS
              </span>
              <span className="text-xs font-semibold text-saffron-600">Click a zone to inspect</span>
            </div>

            {/* Visual Cross Section Strip */}
            <div className="pt-8 pb-4">
              <div className="flex items-end h-44 w-full gap-1 p-2 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-sepia-200 dark:border-slate-800">
                {PLAINS_ZONES.map(zone => (
                  <div
                    key={zone.id}
                    style={{ width: zone.width, height: zone.height, backgroundColor: zone.color }}
                    onClick={() => setHoveredZone(zone.id)}
                    className={`rounded-t-xl cursor-pointer transition-all hover:opacity-90 flex flex-col items-center justify-end pb-2 text-white shadow-md relative ${
                      hoveredZone === zone.id ? 'ring-4 ring-saffron-500 scale-[1.02]' : ''
                    }`}
                  >
                    <span className="text-[10px] font-mono font-bold uppercase text-center px-1 truncate">
                      {zone.name.split(' ')[0]}
                    </span>
                  </div>
                ))}
              </div>

              {/* Underlying Labels */}
              <div className="flex justify-between text-[11px] font-mono font-semibold text-sepia-600 dark:text-slate-400 px-2 mt-2">
                <span>North (Himalayas)</span>
                <span>South (Ganga River)</span>
              </div>
            </div>

            {/* High-Yield UPSC Comparison Table */}
            <div className="overflow-x-auto text-xs">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-sepia-200 dark:border-slate-800 text-left text-sepia-500 dark:text-slate-400">
                    <th className="py-2 pr-2">Feature</th>
                    <th className="py-2 px-2">Bhabar</th>
                    <th className="py-2 px-2">Terai</th>
                    <th className="py-2 px-2">Bhangar</th>
                    <th className="py-2 pl-2">Khadar</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sepia-200 dark:divide-slate-800/60 text-sepia-800 dark:text-slate-300">
                  <tr>
                    <td className="py-2 pr-2 font-bold text-sepia-900 dark:text-slate-100">Sediment Size</td>
                    <td className="py-2 px-2">Boulders & Coarse gravel</td>
                    <td className="py-2 px-2">Fine silt & sand</td>
                    <td className="py-2 px-2">Old clay & Kankar</td>
                    <td className="py-2 pl-2">Fresh fine silt/loam</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-2 font-bold text-sepia-900 dark:text-slate-100">Stream Status</td>
                    <td className="py-2 px-2 text-rose-600 dark:text-rose-400 font-semibold">Disappear underground</td>
                    <td className="py-2 px-2 text-emerald-600 dark:text-emerald-400 font-semibold">Re-emerge as swamps</td>
                    <td className="py-2 px-2">Above flood reach</td>
                    <td className="py-2 pl-2">Annual flood deposition</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-2 font-bold text-sepia-900 dark:text-slate-100">Cultivation</td>
                    <td className="py-2 px-2">Unsuitable for crops</td>
                    <td className="py-2 px-2">Sugarcane, Rice</td>
                    <td className="py-2 px-2">Wheat, Pulses</td>
                    <td className="py-2 pl-2">Intensive Paddy/Veggies</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Right 4 Cols: Active Plains Zone Inspector */}
          <div className="lg:col-span-4 p-6 rounded-3xl border shadow-sm bg-white/90 border-sepia-300 text-sepia-900 dark:bg-slate-900/90 dark:border-slate-800 dark:text-slate-100 space-y-4">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase text-saffron-700 dark:text-amber-400">
                ZONE INSPECTION
              </span>
              <h4 className="text-xl font-bold font-display text-sepia-900 dark:text-slate-100 mt-0.5">
                {currentPlainsItem.name}
              </h4>
              {currentPlainsItem.hindi && (
                <p className="text-xs font-hindi text-sepia-600 dark:text-amber-300">
                  {currentPlainsItem.hindi}
                </p>
              )}
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <span className="font-bold text-sepia-600 dark:text-slate-400 block mb-0.5">Lithology & Geology:</span>
                <p className="text-sepia-800 dark:text-slate-300 leading-relaxed">{currentPlainsItem.geology}</p>
              </div>

              <div>
                <span className="font-bold text-sepia-600 dark:text-slate-400 block mb-0.5">Hydrology & Streams:</span>
                <p className="text-sepia-800 dark:text-slate-300 leading-relaxed">{currentPlainsItem.drainage}</p>
              </div>

              <div>
                <span className="font-bold text-sepia-600 dark:text-slate-400 block mb-0.5">Agricultural Suitability:</span>
                <p className="text-sepia-800 dark:text-slate-300 leading-relaxed">{currentPlainsItem.crops}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Profile 2: Peninsular Ghats & Coastal Asymmetry */}
      {activeProfile === 'ghats' && (
        <div className="p-6 rounded-3xl border shadow-md bg-[#faf7ee] border-sepia-300 dark:bg-[#090e17] dark:border-slate-800 space-y-6">
          <div className="flex items-center justify-between border-b border-sepia-200 dark:border-slate-800 pb-2">
            <span className="text-xs font-mono font-bold text-sepia-600 dark:text-slate-400">
              WEST-TO-EAST TRANSECT: ARABIAN SEA TO BAY OF BENGAL
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {GHATS_ZONES.map(z => (
              <div
                key={z.id}
                onClick={() => setHoveredZone(z.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  hoveredZone === z.id
                    ? 'bg-white dark:bg-slate-800 border-saffron-500 shadow-md ring-2 ring-saffron-500'
                    : 'bg-white/60 dark:bg-slate-900/60 border-sepia-200 dark:border-slate-800 hover:bg-white'
                }`}
              >
                <div className="w-3 h-3 rounded-full mb-2" style={{ backgroundColor: z.color }} />
                <h5 className="text-xs font-bold text-sepia-900 dark:text-slate-100">
                  {z.name}
                </h5>
                <p className="text-[11px] text-sepia-600 dark:text-slate-400 mt-1 leading-relaxed">
                  {z.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Key UPSC Takeaways */}
          <div className="p-4 rounded-2xl bg-amber-50 dark:bg-slate-800/80 border border-amber-200 dark:border-slate-700 text-xs text-sepia-800 dark:text-slate-300">
            <h5 className="font-bold text-amber-900 dark:text-amber-300 mb-1">
              Key UPSC Asymmetry Rule:
            </h5>
            <p className="leading-relaxed">
              The Western Ghats are a steep fault scarp formed during the breakup of Gondwanaland; they are higher, continuous (crossed only by Thal Ghat, Bhor Ghat, Palghat), and block monsoon clouds to dump &gt;250 cm rain. The Eastern Ghats are ancient, discontinuous, heavily breached by rivers, and experience significant rainfall primarily during retreating/Northeast monsoons.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
