import React, { useState, useMemo } from 'react';
import { 
  FileText, 
  ExternalLink, 
  BookOpen, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Compass, 
  Search, 
  Lightbulb, 
  Zap, 
  Filter, 
  Award,
  Sparkles,
  HelpCircle,
  RotateCcw
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PyqExplorer({ 
  pyqData = [],
  pyqMasterData = [],
  onStartPyqPractice 
}) {
  const [activeTab, setActiveTab] = useState('master'); // 'master' | 'papers'
  const [selectedExam, setSelectedExam] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [mode, setMode] = useState('study'); // 'study' | 'test'
  const [userAnswers, setUserAnswers] = useState({});

  const papers = pyqData || [];
  const pyqs = pyqMasterData || [];

  // Extract unique filter options
  const years = useMemo(() => {
    const set = new Set(pyqs.map(q => q.year).filter(Boolean));
    return ['All', ...Array.from(set).sort((a, b) => b - a)];
  }, [pyqs]);

  const topics = useMemo(() => {
    const set = new Set(pyqs.map(q => q.topic).filter(Boolean));
    return ['All', ...Array.from(set).sort()];
  }, [pyqs]);

  // Filtered Question List
  const filteredPyqs = useMemo(() => {
    return pyqs.filter(q => {
      if (selectedExam !== 'All' && q.exam !== selectedExam) return false;
      if (selectedYear !== 'All' && String(q.year) !== String(selectedYear)) return false;
      if (selectedTopic !== 'All' && q.topic !== selectedTopic) return false;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchQ = q.question.toLowerCase().includes(query);
        const matchExpl = q.plainExplanation?.toLowerCase().includes(query);
        const matchBook = Object.values(q.bookReference || {}).some(b => b.toLowerCase().includes(query));
        return matchQ || matchExpl || matchBook;
      }
      return true;
    });
  }, [pyqs, selectedExam, selectedYear, selectedTopic, searchQuery]);

  const handleSelectOption = (qId, optionIdx, correctIdx) => {
    setUserAnswers(prev => ({
      ...prev,
      [qId]: optionIdx
    }));

    if (optionIdx === correctIdx) {
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.8 }
        });
      } catch (e) {}
    }
  };

  const handleResetAnswers = () => {
    setUserAnswers({});
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      
      {/* Header */}
      <div className="border-b border-sepia-300 dark:border-slate-800 pb-4">
        <div className="flex items-center space-x-2">
          <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-saffron-100 text-saffron-800 dark:bg-amber-950 dark:text-amber-300 border border-saffron-300 dark:border-amber-800">
            AUTHENTIC PYQ MASTER ENGINE
          </span>
          <span className="text-xs font-mono text-sepia-600 dark:text-slate-400">
            UPSC (2011–2024) • UPPSC PCS • Standard Book Grounding
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-sepia-900 dark:text-slate-100 mt-1">
          Solved PYQ Deep-Dive & Book Citations
        </h2>
        <p className="text-xs sm:text-sm text-sepia-600 dark:text-slate-400 mt-0.5">
          Master official preliminary exam questions with exact NCERT, Majid Husain, and Khullar page references, option-by-option elimination, and topper tricks.
        </p>

        {/* Sub-Tabs */}
        <div className="mt-5 flex items-center space-x-2">
          <button
            onClick={() => setActiveTab('master')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
              activeTab === 'master'
                ? 'bg-saffron-600 text-white border-saffron-600 shadow'
                : 'bg-white/80 dark:bg-slate-900/80 border-sepia-300 dark:border-slate-800 text-sepia-700 dark:text-slate-300 hover:bg-sepia-100'
            }`}
          >
            Solved PYQs & Elimination ({filteredPyqs.length})
          </button>
          <button
            onClick={() => setActiveTab('papers')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
              activeTab === 'papers'
                ? 'bg-saffron-600 text-white border-saffron-600 shadow'
                : 'bg-white/80 dark:bg-slate-900/80 border-sepia-300 dark:border-slate-800 text-sepia-700 dark:text-slate-300 hover:bg-sepia-100'
            }`}
          >
            Official Question Papers & Syllabus
          </button>
        </div>
      </div>

      {/* Tab 1: Solved Question Master Bank */}
      {activeTab === 'master' && (
        <div className="space-y-6">
          
          {/* Controls & Filter Bar */}
          <div className="p-5 rounded-3xl border shadow-sm bg-white/80 border-sepia-300 text-sepia-900 dark:bg-slate-900/80 dark:border-slate-800 dark:text-slate-100 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                {/* Exam Filter */}
                <select
                  value={selectedExam}
                  onChange={(e) => setSelectedExam(e.target.value)}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-sepia-100 dark:bg-slate-800 border border-sepia-300 dark:border-slate-700 text-sepia-900 dark:text-slate-100"
                >
                  <option value="All">All Examinations</option>
                  <option value="UPSC CSE Prelims">UPSC CSE Prelims</option>
                  <option value="UPPSC PCS">UPPSC PCS</option>
                </select>

                {/* Year Filter */}
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-sepia-100 dark:bg-slate-800 border border-sepia-300 dark:border-slate-700 text-sepia-900 dark:text-slate-100"
                >
                  {years.map(y => (
                    <option key={y} value={y}>Year: {y}</option>
                  ))}
                </select>

                {/* Topic Filter */}
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-sepia-100 dark:bg-slate-800 border border-sepia-300 dark:border-slate-700 text-sepia-900 dark:text-slate-100 max-w-[200px]"
                >
                  {topics.map(t => (
                    <option key={t} value={t}>Topic: {t}</option>
                  ))}
                </select>
              </div>

              {/* Mode Toggle & Reset */}
              <div className="flex items-center space-x-2">
                <div className="flex rounded-xl bg-sepia-100 dark:bg-slate-800 p-1 border border-sepia-200 dark:border-slate-700 text-xs font-bold">
                  <button
                    onClick={() => setMode('study')}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      mode === 'study'
                        ? 'bg-saffron-600 text-white shadow-xs'
                        : 'text-sepia-700 dark:text-slate-300'
                    }`}
                  >
                    Study Mode (Explanations Open)
                  </button>
                  <button
                    onClick={() => setMode('test')}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      mode === 'test'
                        ? 'bg-saffron-600 text-white shadow-xs'
                        : 'text-sepia-700 dark:text-slate-300'
                    }`}
                  >
                    Test Mode (Solve First)
                  </button>
                </div>

                {mode === 'test' && Object.keys(userAnswers).length > 0 && (
                  <button
                    onClick={handleResetAnswers}
                    className="p-1.5 rounded-lg border border-sepia-300 dark:border-slate-700 hover:bg-sepia-100 text-sepia-700 dark:text-slate-300"
                    title="Reset attempts"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Keyword Search */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-sepia-400 dark:text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by river, pass, lake, peak, soil, NCERT chapter, or concept..."
                className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-white dark:bg-slate-800 border border-sepia-300 dark:border-slate-700 focus:outline-hidden focus:ring-2 focus:ring-saffron-500 text-sepia-900 dark:text-slate-100"
              />
            </div>
          </div>

          {/* Question Cards List */}
          <div className="space-y-6">
            {filteredPyqs.length === 0 ? (
              <div className="text-center py-16 p-6 rounded-3xl bg-white/70 dark:bg-slate-900/70 border border-sepia-200 dark:border-slate-800">
                <p className="text-sm font-bold text-sepia-600 dark:text-slate-400">
                  No questions match your selected filter criteria.
                </p>
                <button
                  onClick={() => {
                    setSelectedExam('All');
                    setSelectedYear('All');
                    setSelectedTopic('All');
                    setSearchQuery('');
                  }}
                  className="mt-3 px-4 py-2 rounded-xl bg-saffron-600 text-white text-xs font-bold"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              filteredPyqs.map((q, qIndex) => {
                const answeredIdx = userAnswers[q.id];
                const isAttempted = answeredIdx !== undefined;
                const showExplanation = mode === 'study' || isAttempted;
                const isCorrectAttempt = answeredIdx === q.correctOption;

                return (
                  <div
                    key={q.id}
                    className="p-6 rounded-3xl border shadow-md bg-[#faf7ee] border-sepia-300 text-sepia-900 dark:bg-[#090e17] dark:border-slate-800 dark:text-slate-100 space-y-5 transition-all"
                  >
                    {/* Card Top Metadata */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-sepia-200 dark:border-slate-800 pb-3">
                      <div className="flex items-center space-x-2">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-saffron-100 text-saffron-800 dark:bg-amber-950 dark:text-amber-300 border border-saffron-300 dark:border-amber-800">
                          {q.exam} • {q.year}
                        </span>
                        <span className="text-xs font-mono font-semibold text-sepia-600 dark:text-slate-400">
                          {q.topic}
                        </span>
                      </div>

                      <span className="text-xs font-mono text-sepia-500 dark:text-slate-400">
                        Q#{qIndex + 1}
                      </span>
                    </div>

                    {/* Question Text */}
                    <div className="text-sm sm:text-base font-semibold leading-relaxed whitespace-pre-line font-sans">
                      {q.question}
                    </div>

                    {/* Options Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {q.options.map((opt, optIdx) => {
                        const isThisCorrect = optIdx === q.correctOption;
                        const isUserChoice = answeredIdx === optIdx;

                        let btnStyle = 'bg-white/90 dark:bg-slate-800/90 border-sepia-300 dark:border-slate-700 text-sepia-900 dark:text-slate-100 hover:bg-sepia-100';

                        if (showExplanation) {
                          if (isThisCorrect) {
                            btnStyle = 'bg-emerald-100 dark:bg-emerald-950/80 border-emerald-500 dark:border-emerald-600 text-emerald-900 dark:text-emerald-200 font-bold ring-2 ring-emerald-500';
                          } else if (isUserChoice) {
                            btnStyle = 'bg-rose-100 dark:bg-rose-950/80 border-rose-500 dark:border-rose-600 text-rose-900 dark:text-rose-200 font-bold';
                          }
                        } else if (isUserChoice) {
                          btnStyle = 'bg-saffron-100 dark:bg-amber-950 border-saffron-500 font-bold';
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={mode === 'study'}
                            onClick={() => handleSelectOption(q.id, optIdx, q.correctOption)}
                            className={`p-3.5 rounded-2xl border text-left text-xs sm:text-sm transition-all flex items-start space-x-2.5 ${btnStyle}`}
                          >
                            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] font-mono font-bold shrink-0 mt-0.5">
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span className="flex-1">{opt}</span>

                            {showExplanation && isThisCorrect && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                            )}
                            {showExplanation && isUserChoice && !isThisCorrect && (
                              <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Feedback in Test Mode */}
                    {mode === 'test' && isAttempted && (
                      <div className={`p-3 rounded-xl text-xs font-bold flex items-center space-x-2 ${
                        isCorrectAttempt
                          ? 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200'
                          : 'bg-rose-100 text-rose-900 dark:bg-rose-950 dark:text-rose-200'
                      }`}>
                        {isCorrectAttempt ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <span>Correct! Excellent elimination. Read the deep-dive below.</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="w-4 h-4 text-rose-600" />
                            <span>Incorrect! Option {String.fromCharCode(65 + q.correctOption)} is the official answer. Review the book reference below.</span>
                          </>
                        )}
                      </div>
                    )}

                    {/* Explanations & Citations */}
                    {showExplanation && (
                      <div className="space-y-4 pt-3 border-t border-sepia-200 dark:border-slate-800">
                        
                        {/* Standard Book Citations Card */}
                        {q.bookReference && (
                          <div className="p-4 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800/60 space-y-1.5 text-xs">
                            <div className="flex items-center space-x-1.5 font-bold font-mono text-amber-900 dark:text-amber-300">
                              <BookOpen className="w-4 h-4" />
                              <span>OFFICIAL EXAM LITERATURE CITATIONS:</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-1">
                              {q.bookReference.ncert && (
                                <div className="p-2.5 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-amber-200 dark:border-amber-900/40">
                                  <span className="font-bold text-[10px] text-amber-800 dark:text-amber-400 block uppercase">NCERT Source:</span>
                                  <p className="text-sepia-900 dark:text-slate-200 font-sans mt-0.5">{q.bookReference.ncert}</p>
                                </div>
                              )}
                              {q.bookReference.majidHusain && (
                                <div className="p-2.5 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-amber-200 dark:border-amber-900/40">
                                  <span className="font-bold text-[10px] text-amber-800 dark:text-amber-400 block uppercase">Majid Husain Source:</span>
                                  <p className="text-sepia-900 dark:text-slate-200 font-sans mt-0.5">{q.bookReference.majidHusain}</p>
                                </div>
                              )}
                              {q.bookReference.khullar && (
                                <div className="p-2.5 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-amber-200 dark:border-amber-900/40">
                                  <span className="font-bold text-[10px] text-amber-800 dark:text-amber-400 block uppercase">D.R. Khullar Source:</span>
                                  <p className="text-sepia-900 dark:text-slate-200 font-sans mt-0.5">{q.bookReference.khullar}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Plain English Conceptual Explanation */}
                        {q.plainExplanation && (
                          <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-sepia-200 dark:border-slate-700 space-y-1 text-xs sm:text-sm">
                            <div className="flex items-center space-x-1.5 font-bold text-sky-800 dark:text-sky-300 text-xs font-mono uppercase">
                              <Lightbulb className="w-3.5 h-3.5" />
                              <span>Conceptual Reasoning in Plain English:</span>
                            </div>
                            <p className="text-sepia-800 dark:text-slate-200 leading-relaxed font-sans pt-1">
                              {q.plainExplanation}
                            </p>
                          </div>
                        )}

                        {/* Option-by-Option Elimination */}
                        {q.optionElimination && (
                          <div className="p-4 rounded-2xl bg-sepia-50 dark:bg-slate-900/80 border border-sepia-200 dark:border-slate-800 space-y-2 text-xs">
                            <span className="font-bold font-mono text-sepia-700 dark:text-slate-300 uppercase block">
                              Option-by-Option Elimination Analysis:
                            </span>
                            <div className="space-y-1.5">
                              {Object.entries(q.optionElimination).map(([key, reason]) => (
                                <div key={key} className="flex items-start space-x-2 text-sepia-800 dark:text-slate-300">
                                  <span className="text-saffron-600 font-bold shrink-0">•</span>
                                  <span>{reason}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Topper Elimination Shortcut */}
                        {q.topperTrick && (
                          <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-200 flex items-start space-x-2">
                            <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                            <div>
                              <span className="font-bold">Topper 30-Second Elimination Mental Model: </span>
                              <span>{q.topperTrick}</span>
                            </div>
                          </div>
                        )}

                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

      {/* Tab 2: Official Question Papers & Syllabus Blueprint */}
      {activeTab === 'papers' && (
        <div className="space-y-6">
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
                  "Salient features of world physical geography; Distribution of key natural resources; Factors for industrial location; Geophysical phenomena."
                </p>
                <ul className="list-disc list-inside space-y-1 text-sepia-600 dark:text-slate-400 pt-1">
                  <li>Mains GS-I: ~100 Marks (8-10 direct questions)</li>
                  <li>Mains GS-III: Disaster Management & Agriculture cropping patterns (~40 Marks)</li>
                </ul>
              </div>
            </div>
          </div>

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
                    {p.paper}
                  </h4>
                  <p className="text-xs text-sepia-600 dark:text-slate-400 mt-1">
                    Official Question Paper PDF from Union Public Service Commission / State Commission
                  </p>
                </div>

                <div className="pt-2 border-t border-sepia-200 dark:border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => onStartPyqPractice && onStartPyqPractice(p.year)}
                    className="text-xs font-bold text-saffron-700 hover:text-saffron-800 dark:text-amber-400 flex items-center space-x-1"
                  >
                    <span>Practice Session</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {p.officialPdfUrl && (
                    <a
                      href={p.officialPdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg border border-sepia-300 dark:border-slate-700 hover:bg-sepia-100 dark:hover:bg-slate-800 text-sepia-700 dark:text-slate-300"
                      title="Download Official PDF"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
