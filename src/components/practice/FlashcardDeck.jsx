import React, { useState, useMemo } from 'react';
import { 
  BookMarked, 
  RotateCw, 
  CheckCircle2, 
  XCircle, 
  Layers, 
  Sparkles, 
  Award,
  ArrowRight
} from 'lucide-react';
import { getFlashcardProgress, updateFlashcardBox } from '../../utils/dataManager';
import confetti from 'canvas-confetti';

const ATLAS_CARDS = [
  {
    id: 'fc_01',
    topic: 'Passes & Frontiers',
    front: 'Which pass connects Srinagar to Leh across the Great Himalayas?',
    back: 'Zoji La (3,528 m). The 14.15 km bi-directional Zoji La Tunnel is being built to make NH-1 an all-weather road.',
    examNote: 'UPSC 2017 & 2021 focus'
  },
  {
    id: 'fc_02',
    topic: 'Drainage Systems',
    front: 'Which are the Panch Prayags (5 holy confluences) of the Alaknanda river from north to south?',
    back: '1. Vishnuprayag (+ Dhauliganga)\n2. Nandaprayag (+ Nandakini)\n3. Karnaprayag (+ Pindar)\n4. Rudraprayag (+ Mandakini)\n5. Devprayag (+ Bhagirathi = Ganga)',
    examNote: 'Classic North-South sequence trap'
  },
  {
    id: 'fc_03',
    topic: 'Geology & Minerals',
    front: 'Which rock system in India is known as the "Storehouse of Minerals" and what are its key resources?',
    back: 'Dharwar System (Metamorphosed Archaean sediments). Contains iron ore (Bailadila, Kudremukh), gold (Kolar, Hutti), manganese, and copper.',
    examNote: 'Distinguish from Gondwana (Coal)'
  },
  {
    id: 'fc_04',
    topic: 'Climate & Climatology',
    front: 'What is the Somali Low-Level Jet (Findlater Jet) and what is its role in the Indian Summer Monsoon?',
    back: 'A cross-equatorial low-level atmospheric jet stream off the coast of East Africa. It transports enormous ocean moisture northeastwards into the Arabian Sea directly toward the west coast of India.',
    examNote: 'Physical trigger for monsoon burst'
  },
  {
    id: 'fc_05',
    topic: 'Soils of India',
    front: 'Why does Regur (Black Cotton Soil) exhibit "self-ploughing" characteristics?',
    back: 'High clay content (montmorillonite mineral) causes immense swelling when wet and deep shrinkage cracking upon drying. Surface crumbs fall into cracks, aerating the soil.',
    examNote: 'ICAR classification: Vertisols'
  },
  {
    id: 'fc_06',
    topic: 'Biosphere Reserves',
    front: 'What was India\'s first Biosphere Reserve under the UNESCO MAB programme and which states does it span?',
    back: 'Nilgiri Biosphere Reserve (established 1986, MAB in 2000). Spans Tamil Nadu, Kerala, and Karnataka. Key species: Nilgiri Tahr, Lion-tailed Macaque.',
    examNote: 'Tri-junction of Western & Eastern Ghats'
  },
  {
    id: 'fc_07',
    topic: 'Physical Geography',
    front: 'In the Northern Plains, how does Bhangar differ from Khadar in morphology and fertility?',
    back: 'Bhangar: Older alluvium upland, above annual flood levels, contains calcareous Kankar concretions.\nKhadar: Younger floodplain silt, annually renewed by river inundation, highly fertile without synthetic fertilisers.',
    examNote: 'Shiwalik -> Bhabar -> Terai -> Bhangar -> Khadar'
  },
  {
    id: 'fc_08',
    topic: 'Energy & Critical Minerals',
    front: 'Where was India\'s first commercial onshore petroleum discovery made, and what is its geological age?',
    back: 'Digboi in Assam (1889). Tertiary period marine-deltaic anticline formations.',
    examNote: 'Oldest operating refinery in Asia'
  }
];

export default function FlashcardDeck() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [progress, setProgress] = useState(getFlashcardProgress());

  const current = ATLAS_CARDS[currentIndex];
  const currentBox = progress[current.id]?.box || 1;

  const handleFlip = () => setIsFlipped(!isFlipped);

  const handleScore = (isMastered) => {
    const newBox = updateFlashcardBox(current.id, isMastered);
    setProgress(getFlashcardProgress());
    setIsFlipped(false);
    setCurrentIndex(prev => (prev + 1) % ATLAS_CARDS.length);

    if (isMastered && newBox >= 4) {
      try {
        confetti({ particleCount: 30, spread: 50, origin: { y: 0.7 } });
      } catch (e) {}
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 animate-fade-in">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-sepia-300 dark:border-slate-800 pb-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
              LEITNER 5-BOX MEMORY ENGINE
            </span>
            <span className="text-xs font-mono text-sepia-600 dark:text-slate-400">
              Card {currentIndex + 1} of {ATLAS_CARDS.length}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-sepia-900 dark:text-slate-100 mt-1">
            High-Yield Atlas Flashcards
          </h2>
          <p className="text-xs text-sepia-600 dark:text-slate-400">
            Active recall for high-frequency UPSC factual questions, pass elevations, and mineral cratons.
          </p>
        </div>

        {/* Leitner Box Level Badge */}
        <div className="flex items-center space-x-1 text-xs font-bold font-mono px-3 py-1.5 rounded-xl bg-saffron-100 text-saffron-800 dark:bg-amber-950 dark:text-amber-300 border border-saffron-300 dark:border-amber-800">
          <Layers className="w-3.5 h-3.5" />
          <span>Leitner Box #{currentBox} / 5</span>
        </div>
      </div>

      {/* 3D Flashcard */}
      <div 
        onClick={handleFlip}
        className="w-full min-h-[320px] rounded-3xl p-8 border shadow-xl cursor-pointer transition-all duration-300 select-none flex flex-col justify-between relative overflow-hidden group
          bg-white/95 border-sepia-300 text-sepia-900 hover:shadow-2xl
          dark:bg-[#0f172a]/95 dark:border-slate-800 dark:text-slate-100"
      >
        {/* Top Tag */}
        <div className="flex items-center justify-between">
          <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-sepia-100 dark:bg-slate-800 text-sepia-700 dark:text-slate-300">
            {current.topic}
          </span>
          <span className="text-xs font-mono text-sepia-500 dark:text-slate-400 flex items-center space-x-1">
            <RotateCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" />
            <span>Click to flip</span>
          </span>
        </div>

        {/* Card Content (Front vs Back) */}
        <div className="py-6 space-y-3">
          {!isFlipped ? (
            <div>
              <span className="text-xs font-mono font-bold uppercase text-saffron-700 dark:text-amber-400 block mb-2">
                QUESTION / CHALLENGE:
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-sepia-900 dark:text-slate-100 leading-relaxed">
                {current.front}
              </h3>
            </div>
          ) : (
            <div className="animate-fade-in space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-emerald-700 dark:text-emerald-400 block mb-2">
                VERIFIED FACT & RATIONALE:
              </span>
              <p className="text-base sm:text-lg font-sans font-medium text-sepia-800 dark:text-slate-200 leading-relaxed whitespace-pre-line">
                {current.back}
              </p>
              {current.examNote && (
                <div className="pt-2">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-300/50">
                    💡 {current.examNote}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Bottom instructions */}
        <div className="text-[11px] text-sepia-500 dark:text-slate-500 pt-3 border-t border-sepia-200 dark:border-slate-800 flex items-center justify-between">
          <span>{isFlipped ? 'Answer Revealed' : 'Think carefully, then click to reveal'}</span>
          <span>Box 5 = Long-Term Mastery</span>
        </div>
      </div>

      {/* Leitner Box Feedback Buttons */}
      <div className="flex items-center justify-center space-x-4">
        <button
          onClick={() => handleScore(false)}
          className="px-6 py-3 rounded-2xl bg-rose-100 hover:bg-rose-200 text-rose-800 dark:bg-rose-950 dark:hover:bg-rose-900 dark:text-rose-200 font-bold text-xs shadow-sm flex items-center space-x-2 transition-colors"
        >
          <XCircle className="w-4 h-4 text-rose-600" />
          <span>Needs Review (Back to Box 1)</span>
        </button>

        <button
          onClick={() => handleScore(true)}
          className="px-8 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md flex items-center space-x-2 transition-colors"
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>I Know This (Advance to Box {Math.min(5, currentBox + 1)})</span>
        </button>
      </div>

    </div>
  );
}
