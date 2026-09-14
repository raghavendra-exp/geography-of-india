import React, { useState, useMemo, useEffect } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Bookmark, 
  BookmarkCheck, 
  HelpCircle, 
  Lightbulb, 
  ArrowRight, 
  ArrowLeft, 
  RotateCcw, 
  Filter, 
  Share2, 
  Edit3, 
  Globe2,
  Sparkles,
  Award
} from 'lucide-react';
import { 
  recordAttempt, 
  toggleBookmark, 
  isBookmarked, 
  saveUserNote, 
  getUserNote 
} from '../../utils/dataManager';
import confetti from 'canvas-confetti';

export default function PracticeArena({ 
  questions = [], 
  initialTopic = 'All', 
  lang = 'en',
  onAttemptRecorded
}) {
  const [selectedTopic, setSelectedTopic] = useState(initialTopic);
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedExamType, setSelectedExamType] = useState('All');
  const [statusFilter, setStatusFilter] = useState('all'); // all, unattempted, bookmarked
  const [showHindi, setShowHindi] = useState(lang === 'hi');

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [confidence, setConfidence] = useState('sure'); // guess, unsure, sure, very_sure
  const [isAnswered, setIsAnswered] = useState(false);
  const [revealedHints, setRevealedHints] = useState(0);
  const [userNote, setUserNote] = useState('');
  const [showNotesBox, setShowNotesBox] = useState(false);

  // Sync initialTopic if passed
  useEffect(() => {
    if (initialTopic && initialTopic !== 'All') {
      setSelectedTopic(initialTopic);
      setCurrentIndex(0);
    }
  }, [initialTopic]);

  // Unique topics
  const topics = useMemo(() => {
    const set = new Set(questions.map(q => q.topic).filter(Boolean));
    return ['All', ...Array.from(set)];
  }, [questions]);

  // Filtered Question list
  const filteredQuestions = useMemo(() => {
    return questions.filter(q => {
      const matchTopic = selectedTopic === 'All' || q.topic === selectedTopic;
      const matchDiff = selectedDifficulty === 'All' || q.difficulty === selectedDifficulty;
      const matchExam = selectedExamType === 'All' || q.examType === selectedExamType;
      const matchBookmark = statusFilter !== 'bookmarked' || isBookmarked(q.id);
      return matchTopic && matchDiff && matchExam && matchBookmark;
    });
  }, [questions, selectedTopic, selectedDifficulty, selectedExamType, statusFilter]);

  const currentQ = filteredQuestions[currentIndex] || filteredQuestions[0] || questions[0];

  // Load note and reset states when question changes
  useEffect(() => {
    if (currentQ) {
      setSelectedOption(null);
      setIsAnswered(false);
      setRevealedHints(0);
      setUserNote(getUserNote(currentQ.id));
      setShowNotesBox(false);
    }
  }, [currentQ?.id]);

  if (!currentQ) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-4 text-center text-sepia-600 dark:text-slate-400">
        <p className="text-lg font-bold">No questions match the selected filter criteria.</p>
        <button
          onClick={() => {
            setSelectedTopic('All');
            setSelectedDifficulty('All');
            setSelectedExamType('All');
            setStatusFilter('all');
          }}
          className="mt-4 px-4 py-2 rounded-xl bg-saffron-600 text-white text-xs font-bold shadow"
        >
          Reset Filters
        </button>
      </div>
    );
  }

  const handleSelectOption = (idx) => {
    if (isAnswered) return;
    setSelectedOption(idx);
  };

  const handleSubmit = () => {
    if (selectedOption === null || isAnswered) return;
    setIsAnswered(true);
    const isCorrect = selectedOption === currentQ.correct;

    recordAttempt(currentQ.id, isCorrect, selectedOption, confidence, currentQ.topic);
    onAttemptRecorded?.();

    if (isCorrect) {
      try {
        confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
      } catch (e) {}
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleSaveNote = () => {
    saveUserNote(currentQ.id, userNote);
    setShowNotesBox(false);
  };

  const bookmarked = isBookmarked(currentQ.id);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 animate-fade-in">
      
      {/* Top Filter Strip */}
      <div className="p-4 rounded-3xl border shadow-sm bg-white/70 dark:bg-slate-900/70 border-sepia-300 dark:border-slate-800 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
          
          {/* Topic Select */}
          <div className="flex items-center space-x-2">
            <Filter className="w-3.5 h-3.5 text-sepia-500 dark:text-slate-400" />
            <select
              value={selectedTopic}
              onChange={e => {
                setSelectedTopic(e.target.value);
                setCurrentIndex(0);
              }}
              className="px-2.5 py-1.5 rounded-xl border border-sepia-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sepia-900 dark:text-slate-200 outline-none text-xs font-semibold"
            >
              {topics.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          {/* Difficulty & Exam Type filters */}
          <div className="flex flex-wrap items-center gap-2">
            <select
              value={selectedDifficulty}
              onChange={e => {
                setSelectedDifficulty(e.target.value);
                setCurrentIndex(0);
              }}
              className="px-2.5 py-1.5 rounded-xl border border-sepia-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sepia-900 dark:text-slate-200 text-xs font-medium"
            >
              <option value="All">All Difficulties</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>

            <button
              onClick={() => setStatusFilter(statusFilter === 'bookmarked' ? 'all' : 'bookmarked')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-colors flex items-center space-x-1.5 ${
                statusFilter === 'bookmarked'
                  ? 'bg-amber-600 text-white border-amber-600'
                  : 'bg-white dark:bg-slate-800 text-sepia-800 dark:text-slate-300 border-sepia-300 dark:border-slate-700'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>Bookmarked</span>
            </button>

            <button
              onClick={() => setShowHindi(!showHindi)}
              className="px-3 py-1.5 rounded-xl text-xs font-bold border border-sepia-300 dark:border-slate-700 bg-sepia-100 dark:bg-slate-800 hover:bg-sepia-200 text-sepia-900 dark:text-amber-300 flex items-center space-x-1"
            >
              <Globe2 className="w-3.5 h-3.5" />
              <span>{showHindi ? 'English Mode' : 'हिन्दी अनुवाद'}</span>
            </button>
          </div>

        </div>

        {/* Counter and Progress bar */}
        <div className="flex items-center justify-between text-xs text-sepia-600 dark:text-slate-400 pt-2 border-t border-sepia-200 dark:border-slate-800/80">
          <span>Question <strong className="text-sepia-900 dark:text-slate-100">{currentIndex + 1}</strong> of {filteredQuestions.length}</span>
          <span className="font-mono">{currentQ.examType}</span>
        </div>
      </div>

      {/* Main Question Card */}
      <div className="p-6 sm:p-8 rounded-3xl border shadow-lg bg-white/95 border-sepia-300 text-sepia-900 dark:bg-[#0f172a]/95 dark:border-slate-800 dark:text-slate-100 space-y-6">
        
        {/* Top Badges & Bookmark */}
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase bg-saffron-100 text-saffron-800 dark:bg-amber-950 dark:text-amber-300 border border-saffron-300 dark:border-amber-800">
              {currentQ.topic}
            </span>
            <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase ${
              currentQ.difficulty === 'Hard'
                ? 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                : currentQ.difficulty === 'Medium'
                ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
            }`}>
              {currentQ.difficulty}
            </span>
            {currentQ.subtopic && (
              <span className="text-xs text-sepia-500 dark:text-slate-400 font-mono hidden sm:inline">
                • {currentQ.subtopic}
              </span>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowNotesBox(!showNotesBox)}
              className="p-2 rounded-xl text-sepia-600 dark:text-slate-400 hover:bg-sepia-100 dark:hover:bg-slate-800 transition-colors"
              title="Add personal note"
            >
              <Edit3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => toggleBookmark(currentQ.id, { topic: currentQ.topic })}
              className={`p-2 rounded-xl transition-colors ${
                bookmarked
                  ? 'text-amber-600 bg-amber-50 dark:bg-amber-950/60'
                  : 'text-sepia-400 dark:text-slate-500 hover:bg-sepia-100 dark:hover:bg-slate-800'
              }`}
              title={bookmarked ? 'Remove Bookmark' : 'Bookmark Question'}
            >
              {bookmarked ? <BookmarkCheck className="w-5 h-5 fill-current" /> : <Bookmark className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* User Note Box if toggled */}
        {showNotesBox && (
          <div className="p-4 rounded-2xl bg-sepia-50 dark:bg-slate-800/80 border border-sepia-200 dark:border-slate-700 space-y-2">
            <span className="text-xs font-bold text-sepia-800 dark:text-slate-200 block">Personal Study Note:</span>
            <textarea
              value={userNote}
              onChange={e => setUserNote(e.target.value)}
              placeholder="Jot down memory hooks, MNEMONICS, or trap warnings..."
              className="w-full p-2.5 rounded-xl border border-sepia-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-xs outline-none focus:ring-1 focus:ring-saffron-500"
              rows={3}
            />
            <button
              onClick={handleSaveNote}
              className="px-3 py-1 rounded-lg bg-saffron-600 text-white text-xs font-bold shadow"
            >
              Save Note
            </button>
          </div>
        )}

        {/* Question Text */}
        <div className="space-y-2">
          <h3 className="text-base sm:text-lg font-bold font-sans text-sepia-900 dark:text-slate-100 leading-relaxed">
            {currentQ.question}
          </h3>
          {showHindi && currentQ.questionHindi && (
            <p className="text-sm font-hindi text-sepia-700 dark:text-amber-300 leading-relaxed pt-1 border-t border-sepia-100 dark:border-slate-800">
              {currentQ.questionHindi}
            </p>
          )}
        </div>

        {/* Options List */}
        <div className="space-y-2.5">
          {currentQ.options.map((opt, oIdx) => {
            const isSelected = selectedOption === oIdx;
            const isCorrect = isAnswered && oIdx === currentQ.correct;
            const isWrong = isAnswered && isSelected && !isCorrect;

            return (
              <div
                key={oIdx}
                onClick={() => handleSelectOption(oIdx)}
                className={`p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer flex items-start space-x-3 select-none ${
                  isCorrect
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-200 shadow-xs'
                    : isWrong
                    ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-900 dark:text-rose-200'
                    : isSelected
                    ? 'bg-saffron-50 dark:bg-amber-950/40 border-saffron-500 ring-2 ring-saffron-500/20'
                    : 'bg-white/70 dark:bg-slate-900/70 border-sepia-200 dark:border-slate-800 hover:bg-sepia-50 dark:hover:bg-slate-800/80 text-sepia-900 dark:text-slate-200'
                }`}
              >
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5 ${
                  isCorrect
                    ? 'bg-emerald-600 text-white'
                    : isWrong
                    ? 'bg-rose-600 text-white'
                    : isSelected
                    ? 'bg-saffron-600 text-white'
                    : 'bg-sepia-100 dark:bg-slate-800 text-sepia-700 dark:text-slate-400'
                }`}>
                  {String.fromCharCode(65 + oIdx)}
                </span>
                <div className="space-y-0.5 text-xs sm:text-sm font-medium leading-relaxed">
                  <div>{opt}</div>
                  {showHindi && currentQ.optionsHindi && currentQ.optionsHindi[oIdx] && (
                    <div className="text-xs font-hindi text-sepia-600 dark:text-slate-400">
                      {currentQ.optionsHindi[oIdx]}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Confidence Selector before submission */}
        {!isAnswered && (
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="flex items-center space-x-2 text-xs">
              <span className="font-mono text-sepia-500 dark:text-slate-400">Confidence:</span>
              {[
                { id: 'guess', label: 'Guess (25%)' },
                { id: 'unsure', label: 'Unsure (50%)' },
                { id: 'sure', label: 'Sure (75%)' },
                { id: 'very_sure', label: 'Very Sure (100%)' }
              ].map(c => (
                <button
                  key={c.id}
                  onClick={() => setConfidence(c.id)}
                  className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                    confidence === c.id
                      ? 'bg-amber-600 text-white font-bold shadow-xs'
                      : 'bg-sepia-100 dark:bg-slate-800 text-sepia-700 dark:text-slate-400 hover:bg-sepia-200'
                  }`}
                >
                  {c.label.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* Progressive Hint Trigger */}
            {currentQ.hints && currentQ.hints.length > 0 && (
              <button
                onClick={() => setRevealedHints(prev => Math.min(currentQ.hints.length, prev + 1))}
                disabled={revealedHints >= currentQ.hints.length}
                className="text-xs font-bold text-amber-700 dark:text-amber-400 hover:underline flex items-center space-x-1 disabled:opacity-40"
              >
                <Lightbulb className="w-3.5 h-3.5" />
                <span>
                  {revealedHints === 0
                    ? 'Get Progressive Hint (3 Levels)'
                    : `Hint ${revealedHints}/${currentQ.hints.length} Active`}
                </span>
              </button>
            )}
          </div>
        )}

        {/* Revealed Hints Box */}
        {revealedHints > 0 && currentQ.hints && (
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs space-y-1.5 animate-fade-in">
            <span className="font-bold text-amber-800 dark:text-amber-300 flex items-center space-x-1">
              <Lightbulb className="w-4 h-4" />
              <span>Progressive Scaffolding Hints:</span>
            </span>
            {currentQ.hints.slice(0, revealedHints).map((h, hIdx) => (
              <p key={hIdx} className="text-sepia-800 dark:text-slate-300 font-sans">
                {h}
              </p>
            ))}
          </div>
        )}

        {/* Submit Button */}
        {!isAnswered ? (
          <button
            onClick={handleSubmit}
            disabled={selectedOption === null}
            className="w-full py-3.5 rounded-2xl bg-saffron-600 hover:bg-saffron-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-sm shadow-md transition-all flex items-center justify-center space-x-2"
          >
            <span>Lock & Verify Answer</span>
            <CheckCircle2 className="w-4 h-4" />
          </button>
        ) : (
          <div className="space-y-4 animate-fade-in">
            {/* Trap Alert */}
            {currentQ.trapAlert && (
              <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-xs flex items-start space-x-2.5">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-rose-700 dark:text-rose-400 uppercase font-mono block mb-0.5">
                    Official UPSC Trap Warning:
                  </strong>
                  <p className="text-sepia-800 dark:text-slate-300 leading-relaxed">
                    {currentQ.trapAlert}
                  </p>
                </div>
              </div>
            )}

            {/* Explanation */}
            <div className="p-5 rounded-2xl bg-sepia-50 dark:bg-slate-800/80 border border-sepia-200 dark:border-slate-700 text-xs sm:text-sm space-y-2">
              <strong className="text-xs font-mono font-bold uppercase text-sepia-500 dark:text-slate-400 block">
                Detailed Conceptual Explanation & Rationale:
              </strong>
              <p className="text-sepia-800 dark:text-slate-200 leading-relaxed font-sans">
                {currentQ.explanation}
              </p>
              {showHindi && currentQ.explanationHindi && (
                <p className="text-xs font-hindi text-sepia-700 dark:text-amber-300 leading-relaxed pt-2 border-t border-sepia-200 dark:border-slate-700">
                  {currentQ.explanationHindi}
                </p>
              )}
            </div>

            {/* Next Question Navigation */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="px-4 py-2.5 rounded-xl border border-sepia-300 dark:border-slate-700 text-xs font-bold disabled:opacity-40 hover:bg-sepia-100 flex items-center space-x-1"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === filteredQuestions.length - 1}
                className="px-6 py-2.5 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white text-xs font-bold shadow flex items-center space-x-1.5"
              >
                <span>Next Question</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
