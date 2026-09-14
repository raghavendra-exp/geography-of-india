import React, { useState } from 'react';
import { FileText, ExternalLink, BookOpen, CheckCircle2, ArrowRight, Compass } from 'lucide-react';

export default function PyqExplorer({ 
  pyqData = [],
  onStartPyqPractice 
}) {
  const [selectedYear, setSelectedYear] = useState('All');

  const papers = pyqData || [];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      
      {/* Header */}
      <div className="border-b border-sepia-300 dark:border-slate-800 pb-4">
        <div className="flex items-center space-x-2">
          <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-saffron-100 text-saffron-800 dark:bg-amber-950 dark:text-amber-300">
            OFFICIAL PAPERS & SYLLABUS
          </span>
          <span className="text-xs font-mono text-sepia-600 dark:text-slate-400">
            2015 – 2026 Repository
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-sepia-900 dark:text-slate-100 mt-1">
          Official PYQs & UPSC Syllabus Mapping
        </h2>
        <p className="text-xs sm:text-sm text-sepia-600 dark:text-slate-400 mt-0.5">
          Review official UPSC Civil Services Preliminary Examination and State PSC question trends, weightages, and source references.
        </p>
      </div>

      {/* Official Syllabus Mapping Card */}
      <div className="p-6 rounded-3xl border shadow-sm bg-white/90 border-sepia-300 text-sepia-900 dark:bg-[#0f172a]/90 dark:border-slate-800 dark:text-slate-100 space-y-4">
        <h3 className="text-base font-bold font-display flex items-center space-x-2">
          <Compass className="w-5 h-5 text-saffron-600 dark:text-amber-400" />
          <span>UPSC Civil Services Examination Official Syllabus Blueprint</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-sepia-50/70 dark:bg-slate-800/50 border border-sepia-200 dark:border-slate-800 space-y-2">
            <span className="font-bold font-mono text-saffron-700 dark:text-amber-400 block">
              PRELIMS GS PAPER-I:
            </span>
            <p className="text-sepia-800 dark:text-slate-300 leading-relaxed font-sans">
              "Indian and World Geography - Physical, Social, Economic Geography of India and the World."
            </p>
            <ul className="list-disc list-inside space-y-1 text-sepia-600 dark:text-slate-400 pt-1">
              <li>Average 14–18 Questions annually</li>
              <li>High weightage: Map-pointing, River confluences, Biosphere Reserves, and Mineral deposits</li>
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-sepia-50/70 dark:bg-slate-800/50 border border-sepia-200 dark:border-slate-800 space-y-2">
            <span className="font-bold font-mono text-saffron-700 dark:text-amber-400 block">
              MAINS GS PAPER-I & GS PAPER-III:
            </span>
            <p className="text-sepia-800 dark:text-slate-300 leading-relaxed font-sans">
              "Salient features of world's physical geography; Distribution of key natural resources; Factors for industrial location; Geophysical phenomena (earthquakes, tsunami, cyclones)."
            </p>
            <ul className="list-disc list-inside space-y-1 text-sepia-600 dark:text-slate-400 pt-1">
              <li>Mains GS-I: ~100 Marks (8-10 direct questions)</li>
              <li>Mains GS-III: Disaster Management & Agriculture cropping patterns (~40 Marks)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Verified Papers List */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold font-display text-sepia-900 dark:text-slate-100">
          Official Question Papers
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {papers.map((p, pIdx) => (
            <div
              key={pIdx}
              className="p-5 rounded-2xl border shadow-sm transition-all bg-white/80 border-sepia-300 text-sepia-900 dark:bg-slate-900/80 dark:border-slate-800 dark:text-slate-100 flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-saffron-100 text-saffron-800 dark:bg-amber-950 dark:text-amber-300">
                    {p.exam}
                  </span>
                  <span className="font-mono text-xs text-sepia-600 dark:text-slate-400 font-bold">
                    {p.year}
                  </span>
                </div>
                <h4 className="text-base font-bold font-display mt-2">
                  {p.title}
                </h4>
                <p className="text-xs text-sepia-600 dark:text-slate-400 mt-1">
                  {p.questionsCount} High-Yield Geography Questions with Verified Answer Keys
                </p>
              </div>

              <div className="pt-2 border-t border-sepia-200 dark:border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => onStartPyqPractice?.(p.year)}
                  className="px-3 py-1.5 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs shadow flex items-center space-x-1"
                >
                  <span>Practice Questions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {p.officialPdfUrl && (
                  <a
                    href={p.officialPdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-sepia-600 dark:text-slate-400 hover:text-sepia-900 dark:hover:text-white flex items-center space-x-1"
                  >
                    <span>Official PDF</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
