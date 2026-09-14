import React, { useState } from 'react';
import { 
  MapPin, 
  Waves, 
  Mountain, 
  Trees, 
  Gem, 
  AlertTriangle, 
  CheckCircle2, 
  BookOpen, 
  ExternalLink,
  Compass,
  ArrowRight,
  Sparkles,
  HelpCircle
} from 'lucide-react';

export default function UppscGeoSpecial({ 
  uppscData = {},
  onStartUppscPractice,
  lang = 'en'
}) {
  const [activeSection, setActiveSection] = useState('physiography');

  const {
    overview = {},
    physiography = [],
    drainage = {},
    soilsOfUP = [],
    disastersInUP = [],
    protectedAreasAndRamsar = {},
    mineralsAndEnergy = []
  } = uppscData;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-sepia-300 dark:border-slate-800 pb-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-saffron-100 text-saffron-800 dark:bg-amber-950 dark:text-amber-300 border border-saffron-300 dark:border-amber-800">
              UPPSC PCS SPECIAL MODULE
            </span>
            <span className="text-xs font-mono text-sepia-600 dark:text-slate-400">
              Mains Paper 5 & 6 (UP Special) • Prelims GS-I
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-sepia-900 dark:text-slate-100 mt-1">
            Geography & Disaster Vulnerability of Uttar Pradesh
          </h2>
          <p className="text-xs sm:text-sm text-sepia-600 dark:text-slate-400 mt-0.5">
            Bhabar-Terai morphology, Bundelkhand soils, Ken-Betwa river interlinking, 10 Ramsar wetlands, and regional hazard profiles.
          </p>
        </div>

        <button
          onClick={() => onStartUppscPractice?.('UPPSC Special')}
          className="px-4 py-2 rounded-xl text-xs font-bold bg-saffron-600 hover:bg-saffron-700 text-white shadow flex items-center space-x-1.5 transition-colors shrink-0"
        >
          <HelpCircle className="w-4 h-4" />
          <span>Practice UPPSC Questions</span>
        </button>
      </div>

      {/* Sub-Tabs Bar */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-sepia-300 dark:border-slate-800 text-xs font-bold w-fit">
        {[
          { id: 'physiography', label: '1. Physiography & Divisions' },
          { id: 'drainage', label: '2. Rivers & Ken-Betwa Link' },
          { id: 'soils', label: '3. Soils & Usar Reclamation' },
          { id: 'disasters', label: '4. UP Disaster Profile' },
          { id: 'ecology', label: '5. Tiger Reserves & 10 Ramsar Sites' },
          { id: 'minerals', label: '6. Minerals & Energy Centers' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveSection(tab.id)}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeSection === tab.id
                ? 'bg-saffron-600 text-white shadow-xs'
                : 'text-sepia-600 dark:text-slate-400 hover:text-sepia-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Section 1: Physiography & Divisions */}
      {activeSection === 'physiography' && (
        <div className="space-y-6">
          <div className="p-6 rounded-3xl border shadow-sm bg-white/90 border-sepia-300 text-sepia-900 dark:bg-[#0f172a]/90 dark:border-slate-800 dark:text-slate-100 space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-saffron-700 dark:text-amber-400">
              STATE GEOGRAPHICAL PROFILE
            </span>
            <h3 className="text-lg font-bold font-display">Geographical Frontiers & Extent</h3>
            <p className="text-xs sm:text-sm text-sepia-700 dark:text-slate-300 leading-relaxed">
              {overview.frontiers} Total state area is <strong>{overview.area}</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {physiography.map(div => (
              <div
                key={div.id}
                className="p-6 rounded-3xl border shadow-sm bg-white/80 border-sepia-300 text-sepia-900 dark:bg-slate-900/80 dark:border-slate-800 dark:text-slate-100 flex flex-col justify-between space-y-4"
              >
                <div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-saffron-100 text-saffron-800 dark:bg-amber-950 dark:text-amber-300">
                    REGION
                  </span>
                  <h4 className="text-base font-bold font-display mt-2">{div.name}</h4>
                  {div.hindi && (
                    <p className="text-xs font-hindi text-sepia-600 dark:text-amber-300">{div.hindi}</p>
                  )}
                  <p className="text-xs text-sepia-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {div.bhabarDetails || div.geology || div.districts}
                  </p>
                  {div.teraiDetails && (
                    <p className="text-xs text-sepia-600 dark:text-slate-400 mt-2 leading-relaxed">
                      {div.teraiDetails}
                    </p>
                  )}
                </div>

                {div.ecologicalSignificance && (
                  <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 text-[11px] text-emerald-900 dark:text-emerald-300">
                    🌿 {div.ecologicalSignificance}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Section 2: Drainage & Ken-Betwa Link */}
      {activeSection === 'drainage' && (
        <div className="space-y-6">
          {/* Ken Betwa Project Feature Card */}
          <div className="p-6 sm:p-8 rounded-3xl border shadow-md bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 border-sky-300 dark:border-sky-800 text-sepia-900 dark:text-slate-100 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-sky-200 text-sky-800 dark:bg-sky-950 dark:text-sky-300">
                NATIONAL PROJECT
              </span>
              <span className="text-xs font-mono font-bold text-sky-700 dark:text-sky-400">
                India's 1st River Interlinking Project
              </span>
            </div>
            <h3 className="text-2xl font-bold font-display text-sky-950 dark:text-sky-200">
              Ken-Betwa River Interlinking Project (Bundelkhand Lifeline)
            </h3>
            <p className="text-xs sm:text-sm text-sepia-800 dark:text-slate-200 leading-relaxed">
              Transfers surplus monsoon water from the Ken basin in MP to the water-deficit Betwa basin in UP via the construction of the Daudhan Dam and a 221 km link canal. Irrigates 10.62 lakh hectares, provides drinking water to 62 lakh people across Banda, Mahoba, Jhansi, and Lalitpur, and generates 103 MW hydro power.
            </p>
          </div>

          {/* Rivers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(drainage.majorRivers || []).map((riv, rIdx) => (
              <div
                key={rIdx}
                className="p-5 rounded-2xl border bg-white/80 border-sepia-300 text-sepia-900 dark:bg-slate-900/80 dark:border-slate-800 dark:text-slate-100 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold font-display text-sky-800 dark:text-sky-400">{riv.name}</h4>
                  <span className="text-xs font-hindi text-sepia-500 dark:text-slate-400">{riv.hindi}</span>
                </div>
                <p className="text-xs text-sepia-700 dark:text-slate-300 leading-relaxed">
                  {riv.upEntryExit}
                </p>
                {riv.keyTributaries && (
                  <div className="pt-2 border-t border-sepia-200 dark:border-slate-800 text-[11px] text-sepia-600 dark:text-slate-400">
                    <strong>Tributaries:</strong> {riv.keyTributaries}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Section 3: Soils & Usar Reclamation */}
      {activeSection === 'soils' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {soilsOfUP.map((soil, sIdx) => (
              <div
                key={sIdx}
                className="p-6 rounded-3xl border shadow-sm bg-white/90 border-sepia-300 text-sepia-900 dark:bg-[#0f172a]/90 dark:border-slate-800 dark:text-slate-100 space-y-3"
              >
                <div>
                  <h4 className="text-base font-bold font-display text-amber-800 dark:text-amber-300">
                    {soil.name}
                  </h4>
                  {soil.hindi && (
                    <p className="text-xs font-hindi text-sepia-600 dark:text-slate-400">{soil.hindi}</p>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-sepia-700 dark:text-slate-300 leading-relaxed font-sans">
                  {soil.characteristics}
                </p>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs text-sepia-800 dark:text-slate-300 space-y-1">
            <span className="font-bold text-amber-900 dark:text-amber-300 block">
              UPPSC Prelims & Mains Tip on Bundelkhand Soils:
            </span>
            <p className="leading-relaxed">
              Remember the 4-part local pedology: <strong>Mar</strong> = deep fertile black clay; <strong>Kabar</strong> = coarse black soil; <strong>Parwa</strong> = reddish-yellow sandy loam; <strong>Rakar</strong> = stony shallow slope soil.
            </p>
          </div>
        </div>
      )}

      {/* Section 4: UP Disaster Profile */}
      {activeSection === 'disasters' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {disastersInUP.map((dis, dIdx) => (
            <div
              key={dIdx}
              className="p-6 rounded-3xl border shadow-sm bg-white/90 border-sepia-300 text-sepia-900 dark:bg-slate-900/90 dark:border-slate-800 dark:text-slate-100 flex flex-col justify-between space-y-4"
            >
              <div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300">
                  HAZARD ZONE
                </span>
                <h4 className="text-base font-bold font-display mt-2">{dis.type}</h4>
                {dis.hindi && (
                  <p className="text-xs font-hindi text-sepia-600 dark:text-slate-400">{dis.hindi}</p>
                )}
                <div className="mt-3 text-xs space-y-2">
                  <div>
                    <span className="font-bold text-sepia-700 dark:text-slate-300">Districts:</span>
                    <p className="text-sepia-600 dark:text-slate-400">{dis.districts}</p>
                  </div>
                  <div>
                    <span className="font-bold text-sepia-700 dark:text-slate-300">Physical Causes:</span>
                    <p className="text-sepia-600 dark:text-slate-400">{dis.causes}</p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-sepia-200 dark:border-slate-800 text-xs text-emerald-800 dark:text-emerald-300 space-y-1">
                <span className="font-bold block">Mitigation Strategy:</span>
                <p className="text-[11px] text-sepia-600 dark:text-slate-400">{dis.mitigation}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Section 5: Tiger Reserves & 10 Ramsar Sites */}
      {activeSection === 'ecology' && (
        <div className="space-y-6">
          
          {/* 4 Tiger Reserves */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold font-display text-sepia-900 dark:text-slate-100 flex items-center space-x-2">
              <Trees className="w-5 h-5 text-emerald-600" />
              <span>4 Tiger Reserves of Uttar Pradesh</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {(protectedAreasAndRamsar.tigerReserves || []).map((tr, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 text-xs space-y-1.5">
                  <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400 text-[10px] block">
                    #{idx + 1} TIGER RESERVE ({tr.year})
                  </span>
                  <h4 className="text-sm font-bold text-sepia-900 dark:text-slate-100">{tr.name}</h4>
                  <p className="text-sepia-600 dark:text-slate-400">District: <strong>{tr.district}</strong></p>
                  <p className="text-[11px] text-sepia-700 dark:text-slate-300">{tr.significance}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 10 Ramsar Sites */}
          <div className="space-y-3 pt-4 border-t border-sepia-200 dark:border-slate-800">
            <h3 className="text-lg font-bold font-display text-sepia-900 dark:text-slate-100 flex items-center space-x-2">
              <Waves className="w-5 h-5 text-sky-600" />
              <span>All 10 Ramsar Wetland Sites in Uttar Pradesh</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
              {(protectedAreasAndRamsar.ramsarSites || []).map((ram, rIdx) => (
                <div key={rIdx} className="p-3.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-sepia-200 dark:border-slate-800 space-y-1">
                  <span className="font-mono text-[10px] font-bold text-sky-700 dark:text-sky-400 block">
                    RAMSAR #{rIdx + 1} ({ram.year})
                  </span>
                  <h5 className="font-bold text-sepia-900 dark:text-slate-100 truncate">{ram.name}</h5>
                  <p className="text-sepia-500 dark:text-slate-400 text-[11px]">{ram.district}</p>
                  <p className="text-[10px] text-sepia-600 dark:text-slate-400 line-clamp-2">{ram.species}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* Section 6: Minerals & Energy */}
      {activeSection === 'minerals' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mineralsAndEnergy.map((min, mIdx) => (
            <div
              key={mIdx}
              className="p-6 rounded-3xl border shadow-sm bg-white/90 border-sepia-300 text-sepia-900 dark:bg-slate-900/90 dark:border-slate-800 dark:text-slate-100 space-y-3"
            >
              <div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                  MINERAL HUB
                </span>
                <h4 className="text-base font-bold font-display mt-2">{min.region}</h4>
              </div>

              <div className="text-xs space-y-2">
                <div>
                  <span className="font-bold text-sepia-600 dark:text-slate-400 block">Key Minerals:</span>
                  <p className="text-sepia-800 dark:text-slate-200">{min.minerals}</p>
                </div>
                {min.energy && (
                  <div>
                    <span className="font-bold text-sepia-600 dark:text-slate-400 block">Energy Infrastructure:</span>
                    <p className="text-sepia-800 dark:text-slate-200">{min.energy}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
