import React, { useState } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  ArrowRight, 
  ArrowLeft,
  Wind, 
  CloudRain, 
  Sun, 
  Thermometer, 
  ShieldAlert,
  Info,
  HelpCircle,
  Compass,
  CheckCircle2,
  Sparkles,
  Zap
} from 'lucide-react';

const MONSOON_STAGES = [
  {
    stage: 1,
    title: "1. The Giant Summer Oven (May–June)",
    hindi: "ग्रीष्मकालीन तापीय निम्न दाब",
    badge: "Thermal Trigger",
    color: "from-amber-500 to-red-500",
    plainStory: "During May and June, the sun shines vertically over the Tropic of Cancer. The vast Thar Desert and the high Tibetan Plateau (4,500m above sea level) heat up intensely. Tibet acts as an enormous atmospheric stove-top, heating the air above it. As hot air expands and rises, it creates a massive Low-Pressure vacuum (the Monsoon Trough) over Northwest India.",
    keyTakeaway: "Air always flows from High Pressure to Low Pressure. This low-pressure vacuum acts like a giant suction pump waiting to pull moist oceanic air from thousands of kilometers away!",
    geographyConcepts: [
      "Tibetan Plateau acts as a mid-tropospheric heat source",
      "Monsoon Trough forms over Thar Desert and Indo-Gangetic Plains",
      "Subtropical Westerly Jet Stream shifts north of the Himalayas"
    ],
    examTrap: "UPSC Trap: Tibet does not block winds; it HEATS the atmosphere and acts as an engine driving upper-air circulation!"
  },
  {
    stage: 2,
    title: "2. The Mascarene High Push (Southern Hemisphere)",
    hindi: "मैस्करेन उच्च दाब एवं दक्षिणी धकेल",
    badge: "Oceanic Reservoir",
    color: "from-blue-600 to-cyan-500",
    plainStory: "While India is baking in summer, the Southern Hemisphere is experiencing winter. East of Madagascar around 20°S-35°S latitude (near Mascarene Islands), cold dense air sinks to form a massive oceanic High-Pressure cell known as the Mascarene High. This high pressure starts pushing cold, dense air northwards towards the equator.",
    keyTakeaway: "The stronger the Mascarene High, the more forcefully oceanic moisture is pumped towards India. A weak Mascarene High leads to poor monsoon rainfall.",
    geographyConcepts: [
      "Mascarene High is situated in the South Indian Ocean (~30°S, 50°E)",
      "Cross-equatorial flow is initiated by pressure gradient between Mascarene High and Indian Low",
      "Southeast Trade Winds carry immense moisture evaporated from southern oceans"
    ],
    examTrap: "UPSC Point: The Indian Monsoon originates in the Southern Hemisphere as the Southeast Trade Winds!"
  },
  {
    stage: 3,
    title: "3. Coriolis Flip at the Equator (Ferrel's Law)",
    hindi: "कोरिओलिस बल एवं दिशा परिवर्तन",
    badge: "Planetary Physics",
    color: "from-teal-500 to-emerald-600",
    plainStory: "As the Southeast Trade Winds cross the Equator (0° latitude), Earth's rotation exerts the Coriolis force. According to Ferrel's Law, winds in the Northern Hemisphere are deflected to their RIGHT. Consequently, the Southeast trade winds bend sharply to the right and transform into SOUTH-WEST winds!",
    keyTakeaway: "This is why it is called the South-West Monsoon! It is simply the Southeast Trade Winds deflected rightward after crossing the equator.",
    geographyConcepts: [
      "Coriolis force is zero at equator and increases towards poles",
      "Ferrel's Law: Winds deflect to the right in Northern Hemisphere",
      "Inter-Tropical Convergence Zone (ITCZ) shifts northward to 20°-25°N over Gangetic plain"
    ],
    examTrap: "UPSC Point: Coriolis force is ZERO at the equator, which is why tropical cyclones never form between 0° and 5° latitude!"
  },
  {
    stage: 4,
    title: "4. The Somali Jet (Moisture Conveyor Belt)",
    hindi: "सोमाली जेट (फाइंडलेटर जेट)",
    badge: "Atmospheric Jet",
    color: "from-indigo-500 to-blue-600",
    plainStory: "Along the coast of Somalia and Horn of Africa, a powerful low-level jet stream (the Findlater / Somali Jet) shoots across the Arabian Sea at 50-60 km/h. It acts as a super-highway conveyor belt, sucking moisture from the warm Arabian Sea and hurling it straight at the western coast of India.",
    keyTakeaway: "Think of the Somali Jet as a high-speed firehose pumping oceanic moisture directly into the Indian sub-continent.",
    geographyConcepts: [
      "Low-level cross-equatorial jet stream peaking at ~1.5 km altitude",
      "Intensifies evaporation across the western Arabian Sea",
      "Coupled with the Tropical Easterly Jet (TEJ) in upper troposphere"
    ],
    examTrap: "Exam Insight: The presence and strength of the Somali Jet is one of the earliest indicators used by IMD to predict the exact monsoon onset date."
  },
  {
    stage: 5,
    title: "5. The 'Monsoon Burst' over Kerala (June 1)",
    hindi: "केरल में मानसून प्रस्फोट",
    badge: "Orographic Collision",
    color: "from-emerald-600 to-sky-600",
    plainStory: "On or around June 1, the moisture-laden South-West monsoon winds slam directly into the towering 2,000-meter wall of the Western Ghats (Sahyadris). The mountain barrier forces the moist air to rise abruptly. As air rises, it cools, reaches saturation point, and explodes into violent thunderstorms, lightning, and torrential downpours (Orographic Rainfall). This dramatic arrival is called the 'Monsoon Burst'.",
    keyTakeaway: "The windward side of Western Ghats (Konkan/Malabar) receives 250-400 cm of rainfall, while the eastern leeward side (Deccan plateau like Pune) remains in the rain-shadow.",
    geographyConcepts: [
      "Official onset date over Kerala mainland: June 1 (IMD benchmark)",
      "Orographic precipitation on windward western slopes",
      "Rain-shadow effect on Deccan plateau (Vidarbha, Rayalaseema)"
    ],
    examTrap: "NCERT Fact: The monsoon hits the Andaman & Nicobar Islands FIRST (around May 20-25), days before reaching the Kerala mainland!"
  },
  {
    stage: 6,
    title: "6. The Two Giant Arms (Arabian Sea vs Bay of Bengal)",
    hindi: "मानसून की दो शाखाएं",
    badge: "Branching Flow",
    color: "from-cyan-600 to-blue-700",
    plainStory: "The triangular shape of the Indian peninsula splits the South-West monsoon into two distinct arms: (1) Arabian Sea Branch: Hits the Western Ghats, enters through Narmada/Tapi valleys, and blows parallel to the Aravalli hills (leaving Rajasthan dry). (2) Bay of Bengal Branch: Picks up moisture across the bay, hits the Arakan Yoma mountains in Myanmar and the Meghalaya plateau, and is deflected westwards along the Himalayas up the Ganga plain.",
    keyTakeaway: "As the Bay of Bengal branch travels westward up the Ganga plain (Kolkata -> Patna -> Prayagraj -> Delhi), its moisture steadily depletes, which is why rainfall decreases from East to West!",
    geographyConcepts: [
      "Kolkata receives ~120 cm, Patna ~100 cm, Delhi ~60 cm, Jaisalmer <15 cm",
      "Aravallis run SW-NE, parallel to Arabian Sea branch (no orographic lift)",
      "Funnel effect in Garo-Khasi hills causes world-record rain at Mawsynram"
    ],
    examTrap: "Golden UPSC Rule: Rainfall in the Gangetic plain DECREASES from East to West, but in Peninsular India it DECREASES from West to East!"
  },
  {
    stage: 7,
    title: "7. The Active-Break Cycle ('Monsoon Break')",
    hindi: "मानसून विच्छेद (मॉनसून ब्रेक)",
    badge: "Trough Fluctuation",
    color: "from-amber-600 to-violet-600",
    plainStory: "The monsoon does not rain continuously. It alternates between wet spells ('active periods') and dry spells ('breaks'). When the Monsoon Trough shifts northwards to the Himalayan foothills, rainfall completely stops over the Gangetic plains for 1-2 weeks, while the Himalayan catchments experience catastrophic cloudbursts and flash floods in Brahmaputra, Kosi, and Gandak.",
    keyTakeaway: "A 'Monsoon Break' means dry baking heat in UP/Bihar/Punjab, but devastating flood waves in the downstream river valleys!",
    geographyConcepts: [
      "Monsoon Trough oscillation (shifts between plains and Himalayan foothills)",
      "Caused by tropical depressions originating in the Bay of Bengal",
      "Prolonged breaks cause agricultural distress and crop failure"
    ],
    examTrap: "UPSC Question: During a 'Monsoon Break', where does it rain? Answer: In the Himalayan foothills and Northeast India!"
  },
  {
    stage: 8,
    title: "8. The Retreating Monsoon & Tamil Nadu Rains (Oct–Dec)",
    hindi: "मानसून का निवर्तन एवं तमिलनाडु में वर्षा",
    badge: "Winter Reversal",
    color: "from-blue-700 to-indigo-800",
    plainStory: "By October, the overhead sun moves south towards the Tropic of Capricorn. The Indian landmass cools down rapidly while the oceans remain warm. A High-Pressure system builds over Northwest India, and winds REVERSE direction, blowing from land to sea (North-East Monsoon). As these dry winds travel over the Bay of Bengal, they pick up copious moisture and strike the Coromandel Coast of Tamil Nadu, giving Chennai over 50-60% of its annual rainfall!",
    keyTakeaway: "Tamil Nadu stays dry during July-August because it lies in the rainshadow of the Western Ghats. It gets its primary rainfall during October-December from the Retreating North-East Monsoon and Bay of Bengal cyclones.",
    geographyConcepts: [
      "Apparent movement of sun to Southern Hemisphere cools northern landmass",
      "Winds reverse from South-West to North-East (offshore to onshore)",
      "Coromandel coast receives bulk of rainfall in winter (October–December)"
    ],
    examTrap: "Classic UPSC Question: Why does Tamil Nadu receive winter rain? (1) Retreating North-East Monsoon picks moisture over Bay of Bengal; (2) Tropical cyclones originating in Bay of Bengal."
  }
];

const MONSOON_PUZZLES = [
  {
    id: "thar_desert",
    title: "Why is Thar a Desert despite being right next to the Arabian Sea?",
    hindi: "थार मरुस्थल क्यों है, जब कि अरब सागर बिल्कुल पास है?",
    badge: "UPSC Classic Puzzle",
    reasons: [
      {
        head: "1. Aravalli Range is PARALLEL to the Monsoon Winds",
        desc: "The Aravalli hills are aligned South-West to North-East. The Arabian Sea branch of monsoon winds blows in the exact same direction (SW to NE). Because the hills do not stand perpendicular across the path of the wind, there is ZERO physical barrier to force orographic lift and condensation!"
      },
      {
        head: "2. Upper-Air Thermal Inversion (Atmospheric Cap)",
        desc: "Intense ground heating creates a layer of hot, dry, descending air in the upper troposphere (anti-cyclonic subsidence). This acts like a thermal lid or ceiling, suppressing convective clouds from growing vertically into rainclouds."
      },
      {
        head: "3. Extreme Sensible Heat Dissolves Moisture",
        desc: "As moist air travels over the scorching sands of Thar, its relative humidity drops because the ambient air temperature is >45°C. The capacity of air to hold moisture increases, preventing saturation."
      }
    ],
    topperRule: "Key Rule: Moisture ALONE cannot produce rain. You need an orographic or convective mechanism to LIFT that moisture so it cools and condenses. Aravallis provide no lift, so moisture passes overhead without dropping rain!"
  },
  {
    id: "cherrapunji",
    title: "Why is Cherrapunji / Mawsynram the Wettest Place on Earth (1,100+ cm)?",
    hindi: "मौसिनराम/चेरापूंजी में विश्व की सर्वाधिक वर्षा क्यों होती है?",
    badge: "World Record Rainfall",
    reasons: [
      {
        head: "1. The Horseshoe Funnel Trap (Khasi-Garo-Jaintia Hills)",
        desc: "The hills of Meghalaya form a deep amphitheater/horseshoe open towards the South (Bay of Bengal). When moisture-laden monsoon winds blow in from the bay, they enter this narrow valley trap and have nowhere to escape."
      },
      {
        head: "2. Extreme Sudden Orographic Wall",
        desc: "The southern slope of the Khasi Hills rises almost vertically from the plains of Bangladesh (at 10 meters altitude) straight up to 1,300+ meters within a horizontal distance of just 15-20 kilometers!"
      },
      {
        head: "3. Non-Stop Condensation Engine",
        desc: "The trapped winds are forced to rise abruptly up this steep cliff. Rapid adiabatic cooling causes immediate torrential condensation, producing up to 1,140 cm (11.4 meters!) of rainfall annually."
      }
    ],
    topperRule: "Funnel Shape + 1,300m Vertical Cliff + Warm Bay of Bengal moisture = The ultimate orographic cloudburst factory on the planet."
  },
  {
    id: "tamilnadu_dry",
    title: "Why does Tamil Nadu / Coromandel Coast stay dry in July–August?",
    hindi: "तमिलनाडु ग्रीष्मकालीन मानसून (जुलाई-अगस्त) में सूखा क्यों रहता है?",
    badge: "Dual Rain-Shadow Paradox",
    reasons: [
      {
        head: "1. Rain-Shadow of the Western Ghats (Arabian Sea Branch)",
        desc: "The Western Ghats stand as a continuous 900-2000m wall on the west coast. The Arabian Sea branch dumps all its moisture on Kerala/Karnataka/Konkan. By the time the air descends over Tamil Nadu, it is dry, warm, and depleted of rain."
      },
      {
        head: "2. Bay of Bengal Branch Blows PARALLEL to the Coast",
        desc: "The Bay of Bengal branch blows from southwest to northeast — directly parallel to the coastline of Tamil Nadu, rather than striking onshore. Hence, no clouds are forced to lift over the land."
      },
      {
        head: "3. Winter Reversal Delivers the True Rains (Oct–Dec)",
        desc: "Tamil Nadu gets 50-60% of its rain during October–December when the Northeast Monsoon winds blow onshore from the Bay of Bengal and hit the Eastern Ghats."
      }
    ],
    topperRule: "Tamil Nadu has a winter rainfall regime (October–December) governed by retreating monsoon and Bay of Bengal tropical depressions!"
  },
  {
    id: "el_nino_iod",
    title: "El Niño vs La Niña vs IOD: Who controls the Indian Monsoon?",
    hindi: "एल नीनो, ला नीना और हिंद महासागर द्विध्रुव (IOD)",
    badge: "Global Climate Teleconnections",
    reasons: [
      {
        head: "1. El Niño (Pacific Ocean Warming -> Weak Monsoon)",
        desc: "Abnormal warming of the central and eastern tropical Pacific Ocean disrupts the Walker Circulation. It weakens the Indian monsoon trough, leading to dry spells and drought risks in India (e.g. 2002, 2009, 2014, 2015)."
      },
      {
        head: "2. La Niña (Pacific Ocean Cooling -> Bumper Monsoon)",
        desc: "Colder-than-normal waters in the eastern Pacific strengthen the Pacific trade winds and intensify the cross-equatorial monsoon flow, bringing abundant, above-normal rainfall to India."
      },
      {
        head: "3. Positive Indian Ocean Dipole (The Indian Savior!)",
        desc: "Warm Western Indian Ocean near Africa + Cool Eastern Indian Ocean near Indonesia. A Positive IOD pumps massive additional moisture into the Arabian Sea and can SAVE the Indian monsoon even during an El Niño year (e.g. 1997, 2019)!"
      }
    ],
    topperRule: "El Niño = Negative for India. La Niña = Positive for India. Positive IOD = Supercharger for Indian Monsoon!"
  }
];

export default function MonsoonSimulator({ onStartClimatePractice }) {
  const [activeTab, setActiveTab] = useState('stages'); // 'stages' | 'puzzles'
  const [currentStageIdx, setCurrentStageIdx] = useState(0);
  const [activePuzzleId, setActivePuzzleId] = useState('thar_desert');

  const curStage = MONSOON_STAGES[currentStageIdx];
  const curPuzzle = MONSOON_PUZZLES.find(p => p.id === activePuzzleId) || MONSOON_PUZZLES[0];

  const handleNext = () => {
    setCurrentStageIdx((prev) => (prev + 1) % MONSOON_STAGES.length);
  };

  const handlePrev = () => {
    setCurrentStageIdx((prev) => (prev - 1 + MONSOON_STAGES.length) % MONSOON_STAGES.length);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      
      {/* Top Banner */}
      <div className="p-6 rounded-3xl border shadow-sm bg-white/80 border-sepia-300 text-sepia-900 dark:bg-slate-900/80 dark:border-slate-800 dark:text-slate-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300 border border-sky-300 dark:border-sky-800">
                VISUAL CLIMATOLOGY MASTERCLASS
              </span>
              <span className="text-xs text-sepia-600 dark:text-slate-400 font-mono">
                NCERT Class 11 & Majid Husain Grounded
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-sepia-900 dark:text-slate-100 mt-1">
              Indian Monsoon Mechanics & Causal Puzzles
            </h2>
            <p className="text-xs sm:text-sm text-sepia-600 dark:text-slate-400 mt-0.5">
              Demystifying the lifeblood of Indian agriculture with plain-English stories, step-by-step physics, and official UPSC mystery solvers.
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex rounded-xl bg-sepia-100 dark:bg-slate-800 p-1 border border-sepia-200 dark:border-slate-700 text-xs font-bold">
              <button
                onClick={() => setActiveTab('stages')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'stages'
                    ? 'bg-saffron-600 text-white shadow-xs'
                    : 'text-sepia-700 dark:text-slate-300 hover:text-sepia-900'
                }`}
              >
                8-Stage Storybook
              </button>
              <button
                onClick={() => setActiveTab('puzzles')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'puzzles'
                    ? 'bg-saffron-600 text-white shadow-xs'
                    : 'text-sepia-700 dark:text-slate-300 hover:text-sepia-900'
                }`}
              >
                Why Does It Happen? (4 Puzzles)
              </button>
            </div>

            {onStartClimatePractice && (
              <button
                onClick={onStartClimatePractice}
                className="px-3 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold shadow-xs transition-all flex items-center space-x-1"
              >
                <CloudRain className="w-3.5 h-3.5" />
                <span>Practice MCQs</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mode 1: 8-Stage Visual Storybook */}
      {activeTab === 'stages' && (
        <div className="space-y-6">
          
          {/* Step Track Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {MONSOON_STAGES.map((stg, idx) => (
              <button
                key={stg.stage}
                onClick={() => setCurrentStageIdx(idx)}
                className={`p-2.5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                  currentStageIdx === idx
                    ? 'bg-saffron-600 text-white border-saffron-600 shadow-md scale-[1.02]'
                    : 'bg-white/80 dark:bg-slate-900/80 border-sepia-200 dark:border-slate-800 text-sepia-700 dark:text-slate-300 hover:bg-sepia-100'
                }`}
              >
                <span className="text-[10px] font-mono font-bold block opacity-80">STAGE {stg.stage}</span>
                <span className="text-xs font-bold line-clamp-1 mt-0.5">{stg.badge}</span>
              </button>
            ))}
          </div>

          {/* Main Visual Stage Card */}
          <div className="p-6 rounded-3xl border shadow-lg bg-[#faf7ee] border-sepia-300 text-sepia-900 dark:bg-[#090e17] dark:border-slate-800 dark:text-slate-100 space-y-6">
            
            {/* Header with Navigation Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-sepia-200 dark:border-slate-800 pb-4">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-saffron-100 text-saffron-800 dark:bg-amber-950 dark:text-amber-300 border border-saffron-300 dark:border-amber-800">
                    STAGE {curStage.stage} OF 8
                  </span>
                  <span className="text-xs font-mono text-sepia-600 dark:text-slate-400">
                    {curStage.badge}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-sepia-900 dark:text-slate-100 mt-1">
                  {curStage.title}
                </h3>
                {curStage.hindi && (
                  <p className="text-xs font-hindi text-saffron-700 dark:text-amber-300 font-medium">
                    {curStage.hindi}
                  </p>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrev}
                  className="px-3 py-1.5 rounded-xl border border-sepia-300 dark:border-slate-700 text-xs font-bold hover:bg-sepia-100 dark:hover:bg-slate-800 flex items-center space-x-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>
                <button
                  onClick={handleNext}
                  className="px-4 py-1.5 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white text-xs font-bold shadow flex items-center space-x-1"
                >
                  <span>Next Stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Plain English Story Box */}
            <div className="p-5 rounded-2xl bg-white/90 dark:bg-slate-800/80 border border-sepia-200 dark:border-slate-700 space-y-2">
              <div className="flex items-center space-x-2 text-sky-700 dark:text-sky-300 font-bold text-xs uppercase tracking-wider font-mono">
                <Sparkles className="w-4 h-4" />
                <span>In Plain English: What Happens Here?</span>
              </div>
              <p className="text-sepia-900 dark:text-slate-100 leading-relaxed text-sm sm:text-base font-sans">
                {curStage.plainStory}
              </p>
              
              <div className="mt-3 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-xs font-sans text-amber-900 dark:text-amber-200 flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Core Insight: </span>
                  <span>{curStage.keyTakeaway}</span>
                </div>
              </div>
            </div>

            {/* Concepts and UPSC Trap */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-sepia-200 dark:border-slate-800 space-y-2">
                <span className="font-bold font-mono text-sepia-700 dark:text-slate-300 uppercase block">
                  Geographical Mechanics:
                </span>
                <ul className="space-y-1.5 text-sepia-800 dark:text-slate-300">
                  {curStage.geographyConcepts.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="text-saffron-600 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 space-y-2">
                <span className="font-bold font-mono text-rose-700 dark:text-rose-400 uppercase flex items-center space-x-1.5">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>UPSC Exam Alert / Common Trap:</span>
                </span>
                <p className="text-rose-900 dark:text-rose-200 leading-relaxed">
                  {curStage.examTrap}
                </p>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* Mode 2: Why Does It Happen? (4 Iconic Puzzles) */}
      {activeTab === 'puzzles' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {MONSOON_PUZZLES.map(p => (
              <button
                key={p.id}
                onClick={() => setActivePuzzleId(p.id)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  activePuzzleId === p.id
                    ? 'bg-saffron-600 text-white border-saffron-600 shadow-md font-bold'
                    : 'bg-white/80 dark:bg-slate-900/80 border-sepia-200 dark:border-slate-800 text-sepia-800 dark:text-slate-300 hover:bg-sepia-100'
                }`}
              >
                <span className="text-[10px] font-mono block opacity-80 uppercase">{p.badge}</span>
                <span className="text-xs font-bold line-clamp-2 mt-1">{p.title}</span>
              </button>
            ))}
          </div>

          <div className="p-6 rounded-3xl border shadow-lg bg-[#faf7ee] border-sepia-300 text-sepia-900 dark:bg-[#090e17] dark:border-slate-800 dark:text-slate-100 space-y-6">
            <div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold uppercase bg-saffron-100 text-saffron-800 dark:bg-amber-950 dark:text-amber-300 border border-saffron-300 dark:border-amber-800">
                {curPuzzle.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-sepia-900 dark:text-slate-100 mt-2">
                {curPuzzle.title}
              </h3>
              {curPuzzle.hindi && (
                <p className="text-xs font-hindi text-saffron-700 dark:text-amber-300 font-medium">
                  {curPuzzle.hindi}
                </p>
              )}
            </div>

            <div className="space-y-3">
              {curPuzzle.reasons.map((r, rIdx) => (
                <div key={rIdx} className="p-4 rounded-2xl bg-white/90 dark:bg-slate-800/80 border border-sepia-200 dark:border-slate-700 space-y-1">
                  <h4 className="text-xs sm:text-sm font-bold text-saffron-800 dark:text-amber-300">
                    {r.head}
                  </h4>
                  <p className="text-xs sm:text-sm text-sepia-800 dark:text-slate-200 leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-200 flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Topper Mental Model: </span>
                <span>{curPuzzle.topperRule}</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
