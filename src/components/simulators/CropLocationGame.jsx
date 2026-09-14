import React, { useState } from 'react';
import { Award, CheckCircle2, XCircle, RotateCcw, Sparkles, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

const CROP_CHALLENGES = [
  {
    crop: 'Cotton',
    hindi: 'कपास (सफेद सोना)',
    idealSoil: 'Black Soil (Regur / Vertisol)',
    rainfall: '50 – 100 cm (Requires 210 frost-free days & bright sunshine)',
    leadingState: 'Gujarat / Maharashtra',
    fact: 'Deccan Trap basaltic regur soil possesses extreme moisture retention and self-ploughing clay properties ideal for cotton.',
    optionsSoil: ['Black Soil (Regur)', 'Laterite Soil', 'Peaty / Saline Soil', 'Arid Sandy Soil'],
    optionsRain: ['50 – 100 cm + 210 frost-free days', '>200 cm standing water', '150 – 250 cm acidic slopes', '<30 cm desert conditions'],
    optionsState: ['Gujarat / Maharashtra', 'West Bengal', 'Assam', 'Kerala']
  },
  {
    crop: 'Jute',
    hindi: 'जूट (स्वर्ण रेशा)',
    idealSoil: 'Well-drained Fertile Alluvial (Khadar)',
    rainfall: '150 – 200 cm + High relative humidity (>80%)',
    leadingState: 'West Bengal (Ganga-Brahmaputra Delta)',
    fact: 'Requires annually renewed fertile river silt (Khadar) and abundant fresh river water for biological retting.',
    optionsSoil: ['Khadar (New Alluvium)', 'Arid Sandy Soil', 'Red & Yellow Soil', 'Mountain Skeletal Soil'],
    optionsRain: ['150 – 200 cm + High humidity', '30 – 50 cm dry climate', '75 – 100 cm temperate', '210 frost-free days'],
    optionsState: ['West Bengal', 'Rajasthan', 'Gujarat', 'Punjab']
  },
  {
    crop: 'Tea',
    hindi: 'चाय',
    idealSoil: 'Well-drained Deep Friable Loam (Acidic, Rich in Humus)',
    rainfall: '150 – 250 cm (Evenly distributed; zero waterlogging)',
    leadingState: 'Assam (Brahmaputra Valley)',
    fact: 'Waterlogging is fatal to tea roots; hence planted on gentle hill slopes of Assam and Darjeeling Himalayas.',
    optionsSoil: ['Well-drained Acidic Loam', 'Heavy Black Clay', 'Saline Alkaline Soil', 'Desert Sand'],
    optionsRain: ['150 – 250 cm without waterlogging', '<50 cm semi-arid', 'Standing flood water', '210 frost-free days'],
    optionsState: ['Assam', 'Madhya Pradesh', 'Haryana', 'Maharashtra']
  },
  {
    crop: 'Coffee',
    hindi: 'कॉफ़ी (कॉफी अरेबिका / रोबस्टा)',
    idealSoil: 'Rich, Well-drained Red & Lateritic Loam',
    rainfall: '150 – 200 cm (Blossom showers beneficial in March-April)',
    leadingState: 'Karnataka (Baba Budan Hills / Kodagu)',
    fact: 'Requires canopy shade trees and frost-free hill slopes (1000–1500m); Karnataka produces >70% of Indian coffee.',
    optionsSoil: ['Rich Red & Lateritic Loam', 'Heavy Marshy Peat', 'Saline Coastal Sands', 'Black Cotton Soil'],
    optionsRain: ['150 – 200 cm + Blossom showers', '30 – 40 cm dry', 'Stagnant delta water', 'Over 300 cm heavy inundation'],
    optionsState: ['Karnataka', 'Uttar Pradesh', 'Bihar', 'Punjab']
  },
  {
    crop: 'Wheat',
    hindi: 'गेहूं (रबी खाद्यान्न)',
    idealSoil: 'Well-drained Fertile Loam / Clayey Loam (Alluvial)',
    rainfall: '50 – 75 cm (Cool growing season + Bright sunshine at ripening)',
    leadingState: 'Uttar Pradesh / Punjab',
    fact: 'Winter Rabi crop needing 10°C–15°C at sowing and 21°C–26°C at harvest; western disturbances in Jan-Feb are vital.',
    optionsSoil: ['Well-drained Alluvial Loam', 'Laterite Acidic Soil', 'Sandy Dunes', 'Peaty Swamp'],
    optionsRain: ['50 – 75 cm (Cool winter + warm harvest)', '>200 cm tropical rain', 'Standing water flood', '210 frost-free days'],
    optionsState: ['Uttar Pradesh / Punjab', 'Kerala', 'Tamil Nadu', 'Assam']
  }
];

export default function CropLocationGame() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedSoil, setSelectedSoil] = useState(null);
  const [selectedRain, setSelectedRain] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const current = CROP_CHALLENGES[currentIdx];

  const handleSubmit = () => {
    if (!selectedSoil || !selectedRain || !selectedState) return;
    setSubmitted(true);

    const isSoilCorrect = selectedSoil === current.optionsSoil[0];
    const isRainCorrect = selectedRain === current.optionsRain[0];
    const isStateCorrect = selectedState === current.optionsState[0];

    if (isSoilCorrect && isRainCorrect && isStateCorrect) {
      setScore(prev => prev + 10);
      try {
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
      } catch (e) {}
    }
  };

  const handleNext = () => {
    setSelectedSoil(null);
    setSelectedRain(null);
    setSelectedState(null);
    setSubmitted(false);
    setCurrentIdx(prev => (prev + 1) % CROP_CHALLENGES.length);
  };

  const handleReset = () => {
    setCurrentIdx(0);
    setSelectedSoil(null);
    setSelectedRain(null);
    setSelectedState(null);
    setSubmitted(false);
    setScore(0);
  };

  return (
    <div className="p-6 rounded-3xl border shadow-md bg-white/85 border-sepia-300 text-sepia-900 dark:bg-slate-900/85 dark:border-slate-800 dark:text-slate-100 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-sepia-200 dark:border-slate-800 pb-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
              AGRO-CLIMATIC DRILL
            </span>
            <span className="text-xs text-sepia-600 dark:text-slate-400 font-mono">
              Challenge {currentIdx + 1} of {CROP_CHALLENGES.length}
            </span>
          </div>
          <h3 className="text-xl font-bold font-display text-sepia-900 dark:text-slate-100 mt-1">
            Crop-Soil-Climate Matching Challenge
          </h3>
          <p className="text-xs text-sepia-600 dark:text-slate-400">
            Match the exact agronomic requirements and leading producing state for UPSC GS-I / GS-III.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <div className="px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300 text-xs font-bold font-mono">
            Score: {score} pts
          </div>
          <button
            onClick={handleReset}
            className="p-2 rounded-xl border border-sepia-300 dark:border-slate-700 hover:bg-sepia-100 dark:hover:bg-slate-800 text-sepia-700 dark:text-slate-300"
            title="Reset Game"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Target Crop Card */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/15 to-saffron-500/15 border border-amber-400/40 flex items-center justify-between">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase text-amber-800 dark:text-amber-300">
            TARGET COMMERCIAL CROP
          </span>
          <h4 className="text-2xl font-black font-display text-sepia-900 dark:text-amber-200">
            {current.crop}
          </h4>
          <span className="text-xs font-hindi text-sepia-700 dark:text-slate-300">
            {current.hindi}
          </span>
        </div>
        <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 shadow flex items-center justify-center text-amber-600">
          <Sparkles className="w-6 h-6" />
        </div>
      </div>

      {/* Matching Selectors */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Step 1: Soil Type */}
        <div className="space-y-2">
          <label className="text-xs font-mono font-bold uppercase text-sepia-600 dark:text-slate-400">
            1. Select Ideal Soil:
          </label>
          <div className="space-y-1.5">
            {current.optionsSoil.map(opt => (
              <button
                key={opt}
                disabled={submitted}
                onClick={() => setSelectedSoil(opt)}
                className={`w-full text-left p-2.5 rounded-xl text-xs font-medium border transition-all ${
                  selectedSoil === opt
                    ? 'bg-amber-600 text-white border-amber-600 shadow'
                    : 'bg-white/60 dark:bg-slate-800/60 border-sepia-200 dark:border-slate-700 text-sepia-800 dark:text-slate-300 hover:bg-sepia-100'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Rainfall / Climate */}
        <div className="space-y-2">
          <label className="text-xs font-mono font-bold uppercase text-sepia-600 dark:text-slate-400">
            2. Select Climatic Need:
          </label>
          <div className="space-y-1.5">
            {current.optionsRain.map(opt => (
              <button
                key={opt}
                disabled={submitted}
                onClick={() => setSelectedRain(opt)}
                className={`w-full text-left p-2.5 rounded-xl text-xs font-medium border transition-all ${
                  selectedRain === opt
                    ? 'bg-sky-600 text-white border-sky-600 shadow'
                    : 'bg-white/60 dark:bg-slate-800/60 border-sepia-200 dark:border-slate-700 text-sepia-800 dark:text-slate-300 hover:bg-sepia-100'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Leading State */}
        <div className="space-y-2">
          <label className="text-xs font-mono font-bold uppercase text-sepia-600 dark:text-slate-400">
            3. Select Leading State:
          </label>
          <div className="space-y-1.5">
            {current.optionsState.map(opt => (
              <button
                key={opt}
                disabled={submitted}
                onClick={() => setSelectedState(opt)}
                className={`w-full text-left p-2.5 rounded-xl text-xs font-medium border transition-all ${
                  selectedState === opt
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow'
                    : 'bg-white/60 dark:bg-slate-800/60 border-sepia-200 dark:border-slate-700 text-sepia-800 dark:text-slate-300 hover:bg-sepia-100'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Action / Result banner */}
      <div className="pt-2">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={!selectedSoil || !selectedRain || !selectedState}
            className="w-full py-3 rounded-xl bg-saffron-600 hover:bg-saffron-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-xs shadow-md transition-all flex items-center justify-center space-x-2"
          >
            <span>Verify Agronomic Match</span>
            <CheckCircle2 className="w-4 h-4" />
          </button>
        ) : (
          <div className="space-y-4 animate-fade-in">
            <div className="p-4 rounded-2xl bg-sepia-100 dark:bg-slate-800/80 border border-sepia-300 dark:border-slate-700 text-xs space-y-2">
              <h5 className="font-bold text-sepia-900 dark:text-slate-100 flex items-center space-x-2">
                <HelpCircle className="w-4 h-4 text-saffron-600" />
                <span>Agronomic Reality & Official UPSC Analysis:</span>
              </h5>
              <p className="text-sepia-700 dark:text-slate-300 leading-relaxed font-sans">
                {current.fact}
              </p>
              <div className="pt-2 grid grid-cols-3 gap-2 text-[11px] font-medium text-sepia-600 dark:text-slate-400">
                <div>Soil: <strong className="text-sepia-900 dark:text-slate-200">{current.idealSoil}</strong></div>
                <div>Rainfall: <strong className="text-sepia-900 dark:text-slate-200">{current.rainfall}</strong></div>
                <div>Top Producer: <strong className="text-sepia-900 dark:text-slate-200">{current.leadingState}</strong></div>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center space-x-2"
            >
              <span>Next Crop Challenge</span>
              <Award className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

    </div>
  );
}
