import React, { useState, useEffect, useMemo } from 'react';
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
  RotateCcw,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  Layers,
  PenTool,
  Bookmark
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PyqExplorer({ 
  pyqData = [],
  pyqMasterData = [],
  mainsPyqData = [],
  onStartPyqPractice,
  initialTab = 'master'
}) {
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);
  const [selectedExam, setSelectedExam] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [selectedMarks, setSelectedMarks] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [mode, setMode] = useState('study'); // 'study' | 'test'
  const [userAnswers, setUserAnswers] = useState({});
  const [expandedMainsIds, setExpandedMainsIds] = useState({});
  const [copiedId, setCopiedId] = useState(null);

  const papers = pyqData || [];
  const pyqs = pyqMasterData || [];
  const mainsPyqs = mainsPyqData || [];

  // Prelims Filters
  const years = useMemo(() => {
    const set = new Set(pyqs.map(q => q.year).filter(Boolean));
    return ['All', ...Array.from(set).sort((a, b) => b - a)];
  }, [pyqs]);

  const topics = useMemo(() => {
    const set = new Set(pyqs.map(q => q.topic).filter(Boolean));
    return ['All', ...Array.from(set).sort()];
  }, [pyqs]);

  // Mains Filters
  const mainsYears = useMemo(() => {
    const set = new Set(mainsPyqs.map(q => q.year).filter(Boolean));
    return ['All', ...Array.from(set).sort((a, b) => b - a)];
  }, [mainsPyqs]);

  const mainsTopics = useMemo(() => {
    const set = new Set(mainsPyqs.map(q => q.topic).filter(Boolean));
    return ['All', ...Array.from(set).sort()];
  }, [mainsPyqs]);

  // Filtered Prelims
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

  // Filtered Mains
  const filteredMainsPyqs = useMemo(() => {
    return mainsPyqs.filter(q => {
      if (selectedYear !== 'All' && String(q.year) !== String(selectedYear)) return false;
      if (selectedTopic !== 'All' && q.topic !== selectedTopic) return false;
      if (selectedMarks !== 'All' && String(q.marks) !== String(selectedMarks)) return false;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchQ = q.question.toLowerCase().includes(query);
        const matchIntro = q.modelAnswerBlueprint?.introduction?.toLowerCase().includes(query);
        const matchConc = q.modelAnswerBlueprint?.conclusion?.toLowerCase().includes(query);
        const matchBooks = Object.values(q.bookReferences || {}).some(b => b.toLowerCase().includes(query));
        return matchQ || matchIntro || matchConc || matchBooks;
      }
      return true;
    });
  }, [mainsPyqs, selectedYear, selectedTopic, selectedMarks, searchQuery]);

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

  const toggleMainsExpand = (id) => {
    setExpandedMainsIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleCopyModelAnswer = (q) => {
    const bp = q.modelAnswerBlueprint || {};
    const text = `UPSC Mains ${q.year} (${q.paper} - ${q.marks} Marks)\nTopic: ${q.topic}\n\nQUESTION:\n${q.question}\n\n1. INTRODUCTION:\n${bp.introduction || ''}\n\n2. CORE ARGUMENTS:\n${(bp.geographicalCause || bp.resourcePotential || bp.salientCharacteristics || bp.naturalResourcePotentials || bp.comparativeMatrix || bp.effectsOfArcticIceMelting || bp.geophysicalCharacteristics || bp.reasonsForSpatialShift || bp.impactOfGlobalWarming || bp.reasonsForIndiasKeenInterest || bp.keyCausalFactors || bp.roleOfElNinoInGlobalClimaticAnomalies || bp.reasonsForLocationAlongContinentalMargins || bp.prominentEvidences || bp.globalNamingMechanism || bp.colourCodedMatrix || bp.alignmentAndLocalWeatherImpact || bp.potentialSolutions || bp.fourCorePrioritiesForAction || bp.geomorphologicalReasons || []).join('\n')}\n\n3. DIAGRAM RECOMMENDATION:\n${bp.diagramRecommendation || ''}\n\n4. CONCLUSION:\n${bp.conclusion || ''}\n\nBook References: ${JSON.stringify(q.bookReferences || {})}`;

    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(q.id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      
      {/* Header */}
      <div className="border-b border-sepia-300 dark:border-slate-800 pb-5">
        <div className="flex items-center space-x-2">
          <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-saffron-100 text-saffron-800 dark:bg-amber-950 dark:text-amber-300 border border-saffron-300 dark:border-amber-800">
            AUTHENTIC UPSC PYQ MASTER ENGINE
          </span>
          <span className="text-xs font-mono text-sepia-600 dark:text-slate-400">
            Prelims (2011–2024) • Mains GS-I & GS-III (2013–2024) • Toppers' Syntheses
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-sepia-900 dark:text-slate-100 mt-1">
          Solved UPSC PYQs, Model Answers & Elimination Vault
        </h2>
        <p className="text-xs sm:text-sm text-sepia-600 dark:text-slate-400 mt-1 leading-relaxed">
          Master authentic UPSC questions grounded in <strong>NCERT</strong>, <strong>Prof. Majid Husain</strong>, <strong>G.C. Leong</strong>, and comprehensive model answer blueprints synthesized from toppers' notes (<strong>Sunep Jamir</strong>, <strong>Neha Bhosle AIR 15</strong>, and <strong>Rajtanil Solanki</strong>).
        </p>

        {/* Primary Sub-Tabs */}
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <button
            onClick={() => { setActiveTab('master'); setSelectedYear('All'); setSelectedTopic('All'); }}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all border flex items-center space-x-2 ${
              activeTab === 'master'
                ? 'bg-saffron-600 text-white border-saffron-600 shadow-md'
                : 'bg-white/80 dark:bg-slate-900/80 border-sepia-300 dark:border-slate-800 text-sepia-700 dark:text-slate-300 hover:bg-sepia-100 dark:hover:bg-slate-800'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Prelims Solved PYQs ({pyqs.length})</span>
          </button>

          <button
            onClick={() => { setActiveTab('mains'); setSelectedYear('All'); setSelectedTopic('All'); }}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all border flex items-center space-x-2 ${
              activeTab === 'mains'
                ? 'bg-saffron-600 text-white border-saffron-600 shadow-md'
                : 'bg-white/80 dark:bg-slate-900/80 border-sepia-300 dark:border-slate-800 text-sepia-700 dark:text-slate-300 hover:bg-sepia-100 dark:hover:bg-slate-800'
            }`}
          >
            <PenTool className="w-4 h-4" />
            <span>Mains GS-I & GS-III Model Answers ({mainsPyqs.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('papers')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all border flex items-center space-x-2 ${
              activeTab === 'papers'
                ? 'bg-saffron-600 text-white border-saffron-600 shadow-md'
                : 'bg-white/80 dark:bg-slate-900/80 border-sepia-300 dark:border-slate-800 text-sepia-700 dark:text-slate-300 hover:bg-sepia-100 dark:hover:bg-slate-800'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Official Question Papers & Syllabus</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Prelims Solved PYQ Master Bank */}
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
                  <option value="All">All Exams</option>
                  <option value="UPSC CSE Prelims">UPSC CSE Prelims</option>
                  <option value="UPPSC PCS Prelims">UPPSC PCS Prelims</option>
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
                    Study Mode
                  </button>
                  <button
                    onClick={() => setMode('test')}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      mode === 'test'
                        ? 'bg-saffron-600 text-white shadow-xs'
                        : 'text-sepia-700 dark:text-slate-300'
                    }`}
                  >
                    Test Mode
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
                    className="p-6 rounded-3xl border shadow-sm transition-all bg-white dark:bg-slate-900 border-sepia-300 dark:border-slate-800 space-y-5"
                  >
                    {/* Card Meta */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-sepia-200 dark:border-slate-800 pb-3">
                      <div className="flex items-center space-x-2">
                        <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold uppercase bg-saffron-100 text-saffron-800 dark:bg-amber-950 dark:text-amber-300">
                          {q.exam} {q.year}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-sepia-100 dark:bg-slate-800 text-sepia-800 dark:text-slate-300">
                          {q.topic}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-sepia-500 dark:text-slate-400">
                        Q#{qIndex + 1}
                      </span>
                    </div>

                    {/* Question Statement */}
                    <div className="text-sm sm:text-base font-serif font-medium text-sepia-900 dark:text-slate-100 leading-relaxed whitespace-pre-line">
                      {q.question}
                    </div>

                    {/* Options */}
                    <div className="space-y-2">
                      {q.options.map((opt, optIdx) => {
                        const isCorrect = optIdx === q.correctOption;
                        const isUserChosen = answeredIdx === optIdx;

                        let btnStyle = "border-sepia-200 dark:border-slate-800 bg-sepia-50/60 dark:bg-slate-800/40 hover:bg-sepia-100 dark:hover:bg-slate-800 text-sepia-900 dark:text-slate-100";

                        if (showExplanation) {
                          if (isCorrect) {
                            btnStyle = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-bold ring-1 ring-emerald-500";
                          } else if (isUserChosen && !isCorrect) {
                            btnStyle = "border-red-500 bg-red-50 dark:bg-red-950/40 text-red-900 dark:red-200 line-through";
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={mode === 'test' && isAttempted}
                            onClick={() => handleSelectOption(q.id, optIdx, q.correctOption)}
                            className={`w-full text-left p-3.5 rounded-2xl border text-xs sm:text-sm transition-all flex items-start space-x-3 ${btnStyle}`}
                          >
                            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] font-mono font-bold shrink-0 mt-0.5">
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span className="flex-1">{opt}</span>
                            {showExplanation && isCorrect && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                            )}
                            {showExplanation && isUserChosen && !isCorrect && (
                              <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Explanations, Elimination & Book References */}
                    {showExplanation && (
                      <div className="pt-4 border-t border-sepia-200 dark:border-slate-800 space-y-4 animate-fade-in">
                        
                        {/* Plain Explanation */}
                        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-300 dark:border-amber-900 text-xs sm:text-sm text-sepia-900 dark:text-slate-200 leading-relaxed">
                          <strong className="text-amber-800 dark:text-amber-400 font-bold block mb-1">
                            💡 Core Concept Explanation:
                          </strong>
                          {q.plainExplanation}
                        </div>

                        {/* Option-by-Option Elimination Vault */}
                        {q.optionElimination && (
                          <div className="space-y-2">
                            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-sepia-600 dark:text-slate-400 flex items-center space-x-1">
                              <Zap className="w-3.5 h-3.5 text-saffron-600" />
                              <span>Option-by-Option Elimination Analysis</span>
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                              {Object.entries(q.optionElimination).map(([key, val]) => (
                                <div key={key} className="p-3 rounded-xl bg-sepia-100/60 dark:bg-slate-800/60 border border-sepia-200 dark:border-slate-700">
                                  <span className="font-mono font-bold uppercase text-sepia-700 dark:text-slate-300 block mb-0.5">
                                    {key}:
                                  </span>
                                  <span className="text-sepia-800 dark:text-slate-200 leading-snug">
                                    {val}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Topper Trick Callout */}
                        {q.topperTrick && (
                          <div className="p-3.5 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900 text-xs text-purple-900 dark:text-purple-200 flex items-start space-x-2">
                            <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                            <div>
                              <strong className="font-bold">Topper's Elimination Rule: </strong>
                              {q.topperTrick}
                            </div>
                          </div>
                        )}

                        {/* Standard Book Citations */}
                        {q.bookReference && (
                          <div className="p-3 rounded-xl bg-sepia-50 dark:bg-slate-800/40 border border-sepia-200 dark:border-slate-700 text-[11px] text-sepia-700 dark:text-slate-300 space-y-1">
                            <span className="font-mono font-bold uppercase tracking-wider text-saffron-700 dark:text-amber-400 block">
                              📚 Standard Book Citations:
                            </span>
                            {Object.entries(q.bookReference).map(([source, citation]) => (
                              <div key={source} className="flex items-start space-x-1.5">
                                <BookOpen className="w-3 h-3 text-sepia-500 shrink-0 mt-0.5" />
                                <span><strong>{source.toUpperCase()}:</strong> {citation}</span>
                              </div>
                            ))}
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

      {/* Tab 2: Mains GS-I & GS-III Solved PYQ Bank (2013–2024) */}
      {activeTab === 'mains' && (
        <div className="space-y-6">
          
          {/* Mains Filters */}
          <div className="p-5 rounded-3xl border shadow-sm bg-white/80 border-sepia-300 text-sepia-900 dark:bg-slate-900/80 dark:border-slate-800 dark:text-slate-100 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                {/* Year Filter */}
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-sepia-100 dark:bg-slate-800 border border-sepia-300 dark:border-slate-700 text-sepia-900 dark:text-slate-100"
                >
                  {mainsYears.map(y => (
                    <option key={y} value={y}>Year: {y}</option>
                  ))}
                </select>

                {/* Topic Filter */}
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-sepia-100 dark:bg-slate-800 border border-sepia-300 dark:border-slate-700 text-sepia-900 dark:text-slate-100 max-w-[220px]"
                >
                  {mainsTopics.map(t => (
                    <option key={t} value={t}>Topic: {t}</option>
                  ))}
                </select>

                {/* Marks Filter */}
                <select
                  value={selectedMarks}
                  onChange={(e) => setSelectedMarks(e.target.value)}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-sepia-100 dark:bg-slate-800 border border-sepia-300 dark:border-slate-700 text-sepia-900 dark:text-slate-100"
                >
                  <option value="All">All Marks</option>
                  <option value="10">10 Marks (150 Words)</option>
                  <option value="15">15 Marks (250 Words)</option>
                </select>
              </div>

              <div className="text-xs font-mono text-sepia-600 dark:text-slate-400">
                Showing <strong>{filteredMainsPyqs.length}</strong> Solved Mains Questions
              </div>
            </div>

            {/* Keyword Search */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-sepia-400 dark:text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search mains questions by concept (e.g. continental drift, El-Nino, landslides, Deccan trap)..."
                className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-white dark:bg-slate-800 border border-sepia-300 dark:border-slate-700 focus:outline-hidden focus:ring-2 focus:ring-saffron-500 text-sepia-900 dark:text-slate-100"
              />
            </div>
          </div>

          {/* Mains Questions List */}
          <div className="space-y-6">
            {filteredMainsPyqs.length === 0 ? (
              <div className="text-center py-16 p-6 rounded-3xl bg-white/70 dark:bg-slate-900/70 border border-sepia-200 dark:border-slate-800">
                <p className="text-sm font-bold text-sepia-600 dark:text-slate-400">
                  No mains questions match your search filters.
                </p>
                <button
                  onClick={() => { setSelectedYear('All'); setSelectedTopic('All'); setSelectedMarks('All'); setSearchQuery(''); }}
                  className="mt-3 px-4 py-2 rounded-xl bg-saffron-600 text-white text-xs font-bold"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              filteredMainsPyqs.map((q, mIdx) => {
                const isExpanded = !!expandedMainsIds[q.id];
                const bp = q.modelAnswerBlueprint || {};

                return (
                  <div
                    key={q.id}
                    className="p-6 rounded-3xl border shadow-sm transition-all bg-white dark:bg-slate-900 border-sepia-300 dark:border-slate-800 space-y-5"
                  >
                    {/* Header Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-sepia-200 dark:border-slate-800 pb-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold uppercase bg-saffron-100 text-saffron-800 dark:bg-amber-950 dark:text-amber-300 border border-saffron-300 dark:border-amber-800">
                          UPSC Mains {q.year} • {q.paper}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold uppercase bg-sepia-100 dark:bg-slate-800 text-sepia-800 dark:text-slate-300">
                          {q.marks} Marks • {q.wordLimit} Words
                        </span>
                        <span className="px-2 py-0.5 rounded-md text-[11px] font-mono font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                          {q.topic}
                        </span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleCopyModelAnswer(q)}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono font-semibold border border-sepia-300 dark:border-slate-700 hover:bg-sepia-100 dark:hover:bg-slate-800 text-sepia-700 dark:text-slate-300 flex items-center space-x-1"
                          title="Copy Full Model Answer to Clipboard"
                        >
                          {copiedId === q.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <span className="text-emerald-600 font-bold">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy Answer</span>
                            </>
                          )}
                        </button>

                        <button
                          onClick={() => toggleMainsExpand(q.id)}
                          className="px-3 py-1 rounded-lg bg-saffron-600 hover:bg-saffron-700 text-white text-xs font-bold transition-all flex items-center space-x-1"
                        >
                          <span>{isExpanded ? 'Collapse' : 'View Blueprint'}</span>
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>

                    {/* Question Prompt */}
                    <div className="space-y-1">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-saffron-700 dark:text-amber-400 font-bold">
                        Official Question Statement:
                      </span>
                      <h3 className="text-base sm:text-lg font-serif font-bold text-sepia-900 dark:text-slate-100 leading-relaxed">
                        "{q.question}"
                      </h3>
                    </div>

                    {/* Standard Book References Preview */}
                    {q.bookReferences && (
                      <div className="flex flex-wrap items-center gap-3 text-xs text-sepia-600 dark:text-slate-400 pt-1">
                        <span className="font-mono font-bold uppercase text-sepia-500 text-[10px]">Reference:</span>
                        {Object.entries(q.bookReferences).map(([k, v]) => (
                          <span key={k} className="inline-flex items-center space-x-1">
                            <BookOpen className="w-3 h-3 text-saffron-600" />
                            <span>{v}</span>
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Model Answer Blueprint (Collapsible) */}
                    {isExpanded && (
                      <div className="pt-4 border-t border-sepia-200 dark:border-slate-800 space-y-4 animate-fade-in text-xs sm:text-sm">
                        
                        {/* 1. Introduction */}
                        {bp.introduction && (
                          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-300/60 dark:border-amber-900/60 space-y-1">
                            <span className="font-mono font-bold uppercase text-amber-800 dark:text-amber-300 text-xs block">
                              1. Strategic Introduction (Definition / Conceptual Context):
                            </span>
                            <p className="text-sepia-900 dark:text-slate-100 leading-relaxed">
                              {bp.introduction}
                            </p>
                          </div>
                        )}

                        {/* 2. Core Arguments & Geographical Flow */}
                        <div className="space-y-2">
                          <span className="font-mono font-bold uppercase text-saffron-700 dark:text-amber-400 text-xs block">
                            2. Core Geographical Arguments & Causal Flow:
                          </span>
                          <div className="space-y-2.5">
                            {(bp.geographicalCause || bp.resourcePotential || bp.salientCharacteristics || bp.naturalResourcePotentials || bp.comparativeMatrix || bp.effectsOfArcticIceMelting || bp.geophysicalCharacteristics || bp.reasonsForSpatialShift || bp.impactOfGlobalWarming || bp.reasonsForIndiasKeenInterest || bp.keyCausalFactors || bp.roleOfElNinoInGlobalClimaticAnomalies || bp.reasonsForLocationAlongContinentalMargins || bp.prominentEvidences || bp.globalNamingMechanism || bp.colourCodedMatrix || bp.alignmentAndLocalWeatherImpact || bp.potentialSolutions || bp.fourCorePrioritiesForAction || bp.geomorphologicalReasons || []).map((point, pIdx) => (
                              <div key={pIdx} className="p-3.5 rounded-xl bg-sepia-50 dark:bg-slate-800/60 border border-sepia-200 dark:border-slate-700 text-sepia-900 dark:text-slate-100 leading-relaxed flex items-start space-x-2.5">
                                <span className="w-5 h-5 rounded-full bg-saffron-600 text-white font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                                  {pIdx + 1}
                                </span>
                                <span>{point}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Extra sections: e.g. Cultural Ethos, Disaster Status, Types, Challenges, etc. */}
                        {bp.culturalEthosImpact && (
                          <div className="space-y-1.5 p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900 text-emerald-950 dark:text-emerald-100">
                            <span className="font-mono font-bold uppercase text-xs text-emerald-800 dark:text-emerald-300 block">
                              Cultural & Socio-Ecological Ethos:
                            </span>
                            <ul className="list-disc list-inside space-y-1">
                              {bp.culturalEthosImpact.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {bp.disasterPreparednessStatus && (
                          <div className="space-y-1.5 p-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 text-blue-950 dark:text-blue-100">
                            <span className="font-mono font-bold uppercase text-xs text-blue-800 dark:text-blue-300 block">
                              Status of Coastal Preparedness:
                            </span>
                            <ul className="list-disc list-inside space-y-1">
                              {bp.disasterPreparednessStatus.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {bp.effectsOfAntarcticIceMelting && (
                          <div className="space-y-1.5 p-3.5 rounded-xl bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-900 text-cyan-950 dark:text-cyan-100">
                            <span className="font-mono font-bold uppercase text-xs text-cyan-800 dark:text-cyan-300 block">
                              Antarctic Melting Weather & Human Consequences:
                            </span>
                            <ul className="list-disc list-inside space-y-1">
                              {bp.effectsOfAntarcticIceMelting.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {bp.criticalChallengesAndDownsides && (
                          <div className="space-y-1.5 p-3.5 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 text-red-950 dark:text-red-100">
                            <span className="font-mono font-bold uppercase text-xs text-red-800 dark:text-red-300 block">
                              Critical Challenges & Ecological Risks:
                            </span>
                            <ul className="list-disc list-inside space-y-1">
                              {bp.criticalChallengesAndDownsides.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* 3. Diagram Recommendation */}
                        {bp.diagramRecommendation && (
                          <div className="p-3.5 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900 text-purple-900 dark:text-purple-200 flex items-start space-x-2.5">
                            <PenTool className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                            <div>
                              <strong className="font-mono uppercase text-xs block mb-0.5">
                                🎨 Topper's Exam Diagram Recommendation:
                              </strong>
                              <span>{bp.diagramRecommendation}</span>
                            </div>
                          </div>
                        )}

                        {/* 4. Conclusion */}
                        {bp.conclusion && (
                          <div className="p-3.5 rounded-xl bg-sepia-100/70 dark:bg-slate-800/80 border border-sepia-300 dark:border-slate-700 text-sepia-800 dark:text-slate-200">
                            <span className="font-mono font-bold uppercase text-xs text-sepia-600 dark:text-slate-400 block mb-0.5">
                              4. Forward-Looking Policy Conclusion:
                            </span>
                            <p>{bp.conclusion}</p>
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

      {/* Tab 3: Official Question Papers & Syllabus Guide */}
      {activeTab === 'papers' && (
        <div className="space-y-6">
          <div className="p-6 rounded-3xl border shadow-sm bg-white/80 border-sepia-300 text-sepia-900 dark:bg-slate-900/80 dark:border-slate-800 dark:text-slate-100 space-y-4">
            <h3 className="text-lg font-bold font-display text-sepia-900 dark:text-slate-100">
              UPSC Civil Services Examination Geography Syllabus Architecture
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-sepia-50 dark:bg-slate-800 space-y-2">
                <span className="font-bold text-saffron-700 dark:text-amber-400 font-mono uppercase">
                  Prelims Paper-I (General Studies)
                </span>
                <p className="text-sepia-700 dark:text-slate-300">
                  "Indian and World Geography - Physical, Social, Economic Geography of India and the World."
                </p>
                <ul className="list-disc list-inside space-y-1 text-sepia-600 dark:text-slate-400 pt-1">
                  <li>Weightage: ~15 to 20 Questions every year (~30-40 Marks)</li>
                  <li>Core Pillars: Drainage, Passes/Peaks, National Parks, Monsoons, Minerals, Agriculture</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-sepia-50 dark:bg-slate-800 space-y-2">
                <span className="font-bold text-saffron-700 dark:text-amber-400 font-mono uppercase">
                  Mains GS-I & GS-III (Geography & Disasters)
                </span>
                <p className="text-sepia-700 dark:text-slate-300">
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
