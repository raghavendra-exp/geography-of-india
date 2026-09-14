import React, { useState } from 'react';
import { 
  AlertTriangle, 
  ShieldAlert, 
  Waves, 
  Wind, 
  Flame, 
  Thermometer, 
  Mountain, 
  Building2, 
  BookOpen, 
  CheckCircle2, 
  ExternalLink,
  ArrowRight,
  HelpCircle,
  Layers,
  Sparkles
} from 'lucide-react';

export default function DisasterManagementLab({ 
  disasterData = {}, 
  onStartDisasterPractice,
  lang = 'en' 
}) {
  const [activeTab, setActiveTab] = useState('hazards'); // hazards, seismic, frameworks, casestudies
  const [selectedHazardId, setSelectedHazardId] = useState('earthquake');
  const [selectedZone, setSelectedZone] = useState('Zone V');

  const hazards = disasterData.hazards || [];
  const frameworks = disasterData.frameworks || {};
  const caseStudies = disasterData.caseStudies || [];

  const currentHazard = hazards.find(h => h.id === selectedHazardId) || hazards[0];

  const SEISMIC_ZONES_DATA = [
    {
      zone: 'Zone V',
      severity: 'Very Severe Seismicity',
      factor: '0.36',
      color: '#ef4444',
      pga: '> 0.36 g',
      states: 'Entire Northeast India (Assam, Meghalaya, Arunachal, Manipur, Mizoram, Tripura, Nagaland), parts of Jammu & Kashmir, Ladakh, Himachal Pradesh (Kangra, Chamba), Uttarakhand (Chamoli, Uttarkashi), Rann of Kutch (Gujarat), North Bihar (Darbhanga, Madhubani), Andaman & Nicobar Islands.',
      faults: 'Main Boundary Thrust (MBT), Main Central Thrust (MCT), Himalayan Frontal Thrust (HFT), Kutch Mainland Fault (KMF).'
    },
    {
      zone: 'Zone IV',
      severity: 'Severe Seismicity',
      factor: '0.24',
      color: '#f97316',
      pga: '0.24 g',
      states: 'Delhi-NCR, remaining Himalayan foothills, northern Punjab, Haryana, Western Uttar Pradesh (Meerut, Ghaziabad, Noida, Saharanpur), parts of Gujarat, Sikkim, Koyna region of Maharashtra.',
      faults: 'Delhi-Haridwar Ridge, Mahendragarh-Dehradun subsurface fault, Moradabad fault.'
    },
    {
      zone: 'Zone III',
      severity: 'Moderate Seismicity',
      factor: '0.16',
      color: '#eab308',
      pga: '0.16 g',
      states: 'Most of the Gangetic plain, Western Ghats, Chennai, Kolkata, Mumbai, Lakshadweep, Goa, parts of Eastern UP & Bihar.',
      faults: 'Narmada-Son Lineament, Western Ghats active escarpment faults.'
    },
    {
      zone: 'Zone II',
      severity: 'Low Seismicity',
      factor: '0.10',
      color: '#10b981',
      pga: '0.10 g',
      states: 'Central stable Peninsular shield (parts of Rajasthan, Madhya Pradesh, Karnataka, Telangana, Odisha). Note: Zone I was merged into Zone II by BIS.',
      faults: 'Stable Archaean-Dharwar cratonic blocks with low intra-plate strain accumulation.'
    }
  ];

  const currentZoneData = SEISMIC_ZONES_DATA.find(z => z.zone === selectedZone) || SEISMIC_ZONES_DATA[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-sepia-300 dark:border-slate-800 pb-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border border-rose-300 dark:border-rose-800">
              DISASTER GEOGRAPHY & DRR LAB
            </span>
            <span className="text-xs text-sepia-600 dark:text-slate-400 font-mono">
              UPSC CSE GS-I & GS-III • UPPSC Mains
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-sepia-900 dark:text-slate-100 mt-1">
            Hazard Profiles, Seismic Zonation & DRR Frameworks
          </h2>
          <p className="text-xs sm:text-sm text-sepia-600 dark:text-slate-400 mt-0.5">
            Institutional disaster governance (NDMA 2005, Sendai Framework, PM 10-Point Agenda), tectonic seismic zonation, and extreme climate hazard mechanics.
          </p>
        </div>

        <button
          onClick={() => onStartDisasterPractice?.('Natural Hazards & Disasters')}
          className="px-4 py-2 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white shadow flex items-center space-x-1.5 transition-colors shrink-0"
        >
          <HelpCircle className="w-4 h-4" />
          <span>Practice Disaster Questions</span>
        </button>
      </div>

      {/* Sub-Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-sepia-300 dark:border-slate-800 text-xs font-bold w-fit">
        {[
          { id: 'hazards', label: 'Hazard Vulnerability Profiles' },
          { id: 'seismic', label: 'BIS Seismic Zonation (IS 1893)' },
          { id: 'frameworks', label: 'NDMA 2005 & Sendai Framework' },
          { id: 'casestudies', label: 'Himalayan GLOF & Cyclone Case Studies' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeTab === tab.id
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-sepia-600 dark:text-slate-400 hover:text-sepia-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* View 1: Hazard Vulnerability Profiles */}
      {activeTab === 'hazards' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left 4 Cols: Hazard Selectors */}
          <div className="lg:col-span-4 space-y-2">
            {hazards.map(h => {
              const isSelected = h.id === selectedHazardId;
              return (
                <div
                  key={h.id}
                  onClick={() => setSelectedHazardId(h.id)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white dark:bg-slate-800 border-rose-500 shadow-md ring-2 ring-rose-500/20'
                      : 'bg-white/60 dark:bg-slate-900/60 border-sepia-200 dark:border-slate-800 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-sepia-900 dark:text-slate-100">
                        {h.hazard}
                      </h4>
                      {h.hindi && (
                        <p className="text-xs font-hindi text-sepia-600 dark:text-slate-400">
                          {h.hindi}
                        </p>
                      )}
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sepia-100 dark:bg-slate-800 text-sepia-600 dark:text-slate-400">
                      {h.vulnerabilityShare.split(' ')[0]}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right 8 Cols: Hazard Anatomy & Mechanics */}
          {currentHazard && (
            <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl border shadow-md bg-white/90 border-sepia-300 text-sepia-900 dark:bg-[#0f172a]/90 dark:border-slate-800 dark:text-slate-100 space-y-6">
              
              <div className="border-b border-sepia-200 dark:border-slate-800 pb-4">
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300">
                    VULNERABILITY: {currentHazard.vulnerabilityShare}
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-display text-sepia-900 dark:text-slate-100 mt-1">
                  {currentHazard.hazard}
                </h3>
                {currentHazard.hindi && (
                  <p className="text-sm font-hindi text-sepia-600 dark:text-amber-400">
                    {currentHazard.hindi}
                  </p>
                )}
              </div>

              {/* Physical Geomorphic Causes */}
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-sepia-500 dark:text-slate-400 block">
                  PHYSICAL & GEOMORPHIC ETIOLOGY (WHY IT HAPPENS):
                </span>
                <p className="text-sm text-sepia-800 dark:text-slate-200 leading-relaxed font-sans">
                  {currentHazard.physicalCause}
                </p>
              </div>

              {/* IMD Warning / Specific Subsections if available */}
              {currentHazard.imdWarningStages && (
                <div className="space-y-3 pt-2 border-t border-sepia-200 dark:border-slate-800">
                  <span className="text-xs font-mono font-bold uppercase text-sepia-600 dark:text-slate-400">
                    IMD 4-STAGE COLOR-CODED CYCLONE WARNING TIMELINE:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentHazard.imdWarningStages.map((stage, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-sepia-50 dark:bg-slate-800/60 border border-sepia-200 dark:border-slate-800 text-xs space-y-1">
                        <span className="font-bold text-sepia-900 dark:text-slate-100 block">{stage.stage}</span>
                        <div className="text-[11px] text-amber-700 dark:text-amber-400 font-mono">{stage.time}</div>
                        <p className="text-sepia-600 dark:text-slate-400">{stage.action}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Hotspots */}
              {currentHazard.hotspots && (
                <div className="space-y-2 pt-2 border-t border-sepia-200 dark:border-slate-800">
                  <span className="text-xs font-mono font-bold uppercase text-sepia-600 dark:text-slate-400">
                    CRITICAL HIGH-RISK GEOGRAPHIC HOTSPOTS:
                  </span>
                  <ul className="space-y-1.5 text-xs text-sepia-800 dark:text-slate-300">
                    {currentHazard.hotspots.map((hot, hIdx) => (
                      <li key={hIdx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                        <span>{hot}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Mitigation Strategy */}
              {currentHazard.mitigation && (
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-xs space-y-1.5">
                  <span className="font-bold text-emerald-800 dark:text-emerald-300 block">
                    Structural & Non-Structural Mitigation (Sendai Priority 3):
                  </span>
                  <p className="text-sepia-800 dark:text-slate-200 leading-relaxed font-sans">
                    {currentHazard.mitigation}
                  </p>
                </div>
              )}

            </div>
          )}

        </div>
      )}

      {/* View 2: BIS Seismic Zonation Map Viewer */}
      {activeTab === 'seismic' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          <div className="lg:col-span-4 space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-sepia-500 dark:text-slate-400 block mb-1">
              SELECT BIS SEISMIC ZONE (IS 1893:2016):
            </span>
            {SEISMIC_ZONES_DATA.map(z => (
              <div
                key={z.zone}
                onClick={() => setSelectedZone(z.zone)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  selectedZone === z.zone
                    ? 'bg-white dark:bg-slate-800 shadow-md ring-2'
                    : 'bg-white/60 dark:bg-slate-900/60 border-sepia-200 dark:border-slate-800'
                }`}
                style={{ borderColor: selectedZone === z.zone ? z.color : undefined }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: z.color }} />
                    <h4 className="text-sm font-bold text-sepia-900 dark:text-slate-100">{z.zone}</h4>
                  </div>
                  <span className="font-mono text-xs font-bold text-sepia-600 dark:text-slate-400">
                    Zone Factor: {z.factor}
                  </span>
                </div>
                <p className="text-xs text-sepia-600 dark:text-slate-400 mt-1">{z.severity}</p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl border shadow-md bg-white/90 border-sepia-300 text-sepia-900 dark:bg-[#0f172a]/90 dark:border-slate-800 dark:text-slate-100 space-y-5">
            <div className="flex items-center justify-between border-b border-sepia-200 dark:border-slate-800 pb-3">
              <div>
                <span className="text-xs font-mono font-bold uppercase" style={{ color: currentZoneData.color }}>
                  ZONE FACTOR: {currentZoneData.factor} • PGA: {currentZoneData.pga}
                </span>
                <h3 className="text-2xl font-bold font-display text-sepia-900 dark:text-slate-100 mt-0.5">
                  {currentZoneData.zone} ({currentZoneData.severity})
                </h3>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div>
                <span className="font-mono font-bold uppercase text-sepia-500 dark:text-slate-400 block mb-1">
                  States & Geographic Regions Included:
                </span>
                <p className="text-sepia-800 dark:text-slate-200 leading-relaxed bg-sepia-50 dark:bg-slate-800/50 p-3.5 rounded-xl border border-sepia-200 dark:border-slate-800">
                  {currentZoneData.states}
                </p>
              </div>

              <div>
                <span className="font-mono font-bold uppercase text-sepia-500 dark:text-slate-400 block mb-1">
                  Key Active Tectonic Faults & Lineaments:
                </span>
                <p className="text-sepia-800 dark:text-slate-200 leading-relaxed font-mono text-xs bg-sepia-50 dark:bg-slate-800/50 p-3 rounded-xl border border-sepia-200 dark:border-slate-800">
                  {currentZoneData.faults}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs text-sepia-800 dark:text-slate-300 space-y-1">
              <span className="font-bold text-amber-800 dark:text-amber-300 block">
                UPSC Prelims Note on Zone I:
              </span>
              <p className="leading-relaxed">
                India originally had five seismic zones (Zone I to V). In the revised IS 1893 standards, Zone I was abolished and merged into Zone II because no part of the Indian subcontinent is deemed to have zero seismic risk.
              </p>
            </div>

          </div>

        </div>
      )}

      {/* View 3: Institutional Governance (NDMA 2005 & Sendai) */}
      {activeTab === 'frameworks' && (
        <div className="space-y-6">
          
          {/* 3-Tier Hierarchy */}
          <div className="p-6 rounded-3xl border shadow-sm bg-white/90 border-sepia-300 text-sepia-900 dark:bg-[#0f172a]/90 dark:border-slate-800 dark:text-slate-100 space-y-4">
            <h3 className="text-lg font-bold font-display flex items-center space-x-2">
              <Building2 className="w-5 h-5 text-rose-600" />
              <span>Three-Tier Statutory Disaster Management Hierarchy (DM Act, 2005)</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              {(frameworks.ndma2005?.structure || []).map((lvl, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-sepia-50/80 dark:bg-slate-800/50 border border-sepia-200 dark:border-slate-800 space-y-2">
                  <span className="font-mono font-bold text-rose-700 dark:text-rose-400 uppercase text-[10px] block">
                    {lvl.level}
                  </span>
                  <h4 className="text-sm font-bold text-sepia-900 dark:text-slate-100">{lvl.body}</h4>
                  <p className="text-sepia-600 dark:text-slate-400 font-semibold">Chaired by: {lvl.head}</p>
                  <p className="text-sepia-700 dark:text-slate-300 leading-relaxed">{lvl.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sendai 4 Priorities */}
          <div className="p-6 rounded-3xl border shadow-sm bg-white/90 border-sepia-300 text-sepia-900 dark:bg-[#0f172a]/90 dark:border-slate-800 dark:text-slate-100 space-y-4">
            <h3 className="text-lg font-bold font-display flex items-center space-x-2">
              <ShieldAlert className="w-5 h-5 text-sky-600" />
              <span>Sendai Framework 4 Priorities for Action (2015–2030)</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {(frameworks.sendaiFramework?.priorities || []).map((p, pIdx) => (
                <div key={pIdx} className="p-4 rounded-2xl bg-sky-50/50 dark:bg-sky-950/20 border border-sky-200 dark:border-sky-800 space-y-1">
                  <span className="font-mono font-bold text-sky-700 dark:text-sky-400 block">
                    Priority #{pIdx + 1}
                  </span>
                  <p className="text-sepia-800 dark:text-slate-200 font-medium leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
          </div>

          {/* PM 10-Point Agenda */}
          <div className="p-6 rounded-3xl border shadow-sm bg-[#faf7ee] border-sepia-300 text-sepia-900 dark:bg-slate-900/60 dark:border-slate-800 dark:text-slate-100 space-y-3">
            <h4 className="text-sm font-bold font-display text-amber-900 dark:text-amber-300">
              Prime Minister's 10-Point Agenda on Disaster Risk Reduction (AMCDRR 2016):
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-sepia-700 dark:text-slate-300">
              {(frameworks.pm10PointAgenda?.points || []).map((pt, i) => (
                <div key={i} className="flex items-start space-x-2 p-2 rounded-xl bg-white/60 dark:bg-slate-800/40">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* View 4: Case Studies */}
      {activeTab === 'casestudies' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map(cs => (
            <div
              key={cs.id}
              className="p-6 rounded-3xl border shadow-sm bg-white/90 border-sepia-300 text-sepia-900 dark:bg-slate-900/90 dark:border-slate-800 dark:text-slate-100 flex flex-col justify-between space-y-4"
            >
              <div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300">
                  {cs.type}
                </span>
                <h4 className="text-base font-bold font-display mt-2">{cs.title}</h4>
                <p className="text-xs text-sepia-600 dark:text-slate-400 mt-2 leading-relaxed">
                  {cs.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-sepia-200 dark:border-slate-800 space-y-1.5 text-xs">
                <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400 block text-[11px]">
                  Key Lessons for Mains Answer:
                </span>
                <ul className="space-y-1 text-sepia-700 dark:text-slate-300">
                  {cs.lessonsLearned.map((l, lIdx) => (
                    <li key={lIdx} className="flex items-start space-x-1.5">
                      <span className="text-emerald-600">•</span>
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
