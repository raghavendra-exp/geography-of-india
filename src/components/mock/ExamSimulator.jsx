import React, { useState, useEffect, useRef } from 'react';
import { 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  Bookmark, 
  HelpCircle, 
  Award, 
  RotateCcw, 
  ArrowRight, 
  ArrowLeft,
  XCircle,
  FileText
} from 'lucide-react';
import { saveExamResult } from '../../utils/dataManager';
import confetti from 'canvas-confetti';

export default function ExamSimulator({ 
  questions = [],
  mockPresets = {},
  onExamComplete 
}) {
  const [examActive, setExamActive] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState('upsc_full');
  const [examQuestions, setExamQuestions] = useState([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // { qIndex: selectedOption }
  const [reviewFlags, setReviewFlags] = useState({}); // { qIndex: boolean }
  const [timeLeftSec, setTimeLeftSec] = useState(7200); // 120 mins default
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [examResult, setExamResult] = useState(null);

  const timerRef = useRef(null);

  // Configure Exam
  const startExam = (presetKey) => {
    let count = 100;
    let durationMins = 120;

    if (presetKey === 'sectional_50') {
      count = 50;
      durationMins = 60;
    } else if (presetKey === 'rapid_30') {
      count = 30;
      durationMins = 35;
    }

    // Shuffle and pick
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(count, shuffled.length));

    setExamQuestions(selected);
    setSelectedPreset(presetKey);
    setCurrentQIndex(0);
    setAnswers({});
    setReviewFlags({});
    setTimeLeftSec(durationMins * 60);
    setExamResult(null);
    setExamActive(true);
  };

  // Timer countdown
  useEffect(() => {
    if (!examActive) return;

    timerRef.current = setInterval(() => {
      setTimeLeftSec(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          handleFinalSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [examActive]);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const currentQ = examQuestions[currentQIndex];

  const handleSelectOption = (optIdx) => {
    setAnswers(prev => ({
      ...prev,
      [currentQIndex]: optIdx
    }));
  };

  const handleClearResponse = () => {
    setAnswers(prev => {
      const copy = { ...prev };
      delete copy[currentQIndex];
      return copy;
    });
  };

  const handleToggleReview = () => {
    setReviewFlags(prev => ({
      ...prev,
      [currentQIndex]: !prev[currentQIndex]
    }));
  };

  const handleFinalSubmit = () => {
    clearInterval(timerRef.current);
    setShowSubmitModal(false);

    let correct = 0;
    let wrong = 0;
    let unattempted = 0;

    const detailedAnalysis = examQuestions.map((q, idx) => {
      const userAns = answers[idx];
      const isAtt = userAns !== undefined;
      const isCorr = isAtt && userAns === q.correct;
      const isWr = isAtt && !isCorr;

      if (!isAtt) unattempted++;
      else if (isCorr) correct++;
      else wrong++;

      return {
        question: q,
        userAns,
        isCorrect: isCorr,
        isAttempted: isAtt
      };
    });

    // Marking scheme: +2 for correct, -0.66 for wrong
    const marksObtained = Math.round((correct * 2 - wrong * 0.66) * 100) / 100;
    const totalMarks = examQuestions.length * 2;
    const accuracy = (correct + wrong) > 0 ? Math.round((correct / (correct + wrong)) * 100) : 0;

    const result = {
      preset: selectedPreset,
      totalQuestions: examQuestions.length,
      correct,
      wrong,
      unattempted,
      marksObtained,
      totalMarks,
      accuracy,
      detailedAnalysis
    };

    saveExamResult(result);
    setExamResult(result);
    setExamActive(false);

    if (marksObtained >= totalMarks * 0.5) {
      try {
        confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
      } catch (e) {}
    }
  };

  // Preset Selection Screen
  if (!examActive && !examResult) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8 animate-fade-in">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-saffron-100 text-saffron-800 dark:bg-amber-950 dark:text-amber-300">
            <Award className="w-4 h-4" />
            <span>OFFICIAL UPSC CSE PRELIMS SIMULATOR</span>
          </div>
          <h2 className="text-3xl font-bold font-display text-sepia-900 dark:text-slate-100">
            Real-Time Negative Marking Exam Engine
          </h2>
          <p className="text-sm text-sepia-600 dark:text-slate-400 max-w-xl mx-auto">
            Simulate standard UPSC CSE Prelims conditions with a 2-hour timer, question palette, review marking, and strict -0.66 negative marking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Preset 1: Full 100Q UPSC Mock */}
          <div className="p-6 rounded-3xl border shadow-md bg-white/90 border-sepia-300 text-sepia-900 dark:bg-slate-900/90 dark:border-slate-800 dark:text-slate-100 flex flex-col justify-between space-y-4">
            <div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-saffron-100 text-saffron-800 dark:bg-amber-950 dark:text-amber-300">
                FULL MOCK
              </span>
              <h3 className="text-lg font-bold font-display mt-2">100-Question UPSC GS-I Mock</h3>
              <p className="text-xs text-sepia-600 dark:text-slate-400 mt-1">
                Full 120-minute exam covering Physical, Climatology, Drainage, Resources, Ecology, and Disasters.
              </p>
              <div className="mt-4 space-y-1 text-xs text-sepia-700 dark:text-slate-300">
                <div>• Questions: <strong>100 MCQs</strong></div>
                <div>• Time: <strong>120 Minutes</strong></div>
                <div>• Marking: <strong>+2 / -0.66</strong></div>
              </div>
            </div>
            <button
              onClick={() => startExam('upsc_full')}
              className="w-full py-2.5 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs shadow"
            >
              Start 100Q Mock Exam
            </button>
          </div>

          {/* Preset 2: Sectional 50Q */}
          <div className="p-6 rounded-3xl border shadow-md bg-white/90 border-sepia-300 text-sepia-900 dark:bg-slate-900/90 dark:border-slate-800 dark:text-slate-100 flex flex-col justify-between space-y-4">
            <div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300">
                SECTIONAL MOCK
              </span>
              <h3 className="text-lg font-bold font-display mt-2">50-Question Sectional Drill</h3>
              <p className="text-xs text-sepia-600 dark:text-slate-400 mt-1">
                Balanced 60-minute test targeting high-yield Prelims themes and map traps.
              </p>
              <div className="mt-4 space-y-1 text-xs text-sepia-700 dark:text-slate-300">
                <div>• Questions: <strong>50 MCQs</strong></div>
                <div>• Time: <strong>60 Minutes</strong></div>
                <div>• Marking: <strong>+2 / -0.66</strong></div>
              </div>
            </div>
            <button
              onClick={() => startExam('sectional_50')}
              className="w-full py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow"
            >
              Start 50Q Drill
            </button>
          </div>

          {/* Preset 3: Rapid 30Q */}
          <div className="p-6 rounded-3xl border shadow-md bg-white/90 border-sepia-300 text-sepia-900 dark:bg-slate-900/90 dark:border-slate-800 dark:text-slate-100 flex flex-col justify-between space-y-4">
            <div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                SPEED DRILL
              </span>
              <h3 className="text-lg font-bold font-display mt-2">30-Question Rapid Drill</h3>
              <p className="text-xs text-sepia-600 dark:text-slate-400 mt-1">
                Quick 35-minute test to calibrate pace and instinct under pressure.
              </p>
              <div className="mt-4 space-y-1 text-xs text-sepia-700 dark:text-slate-300">
                <div>• Questions: <strong>30 MCQs</strong></div>
                <div>• Time: <strong>35 Minutes</strong></div>
                <div>• Marking: <strong>+2 / -0.66</strong></div>
              </div>
            </div>
            <button
              onClick={() => startExam('rapid_30')}
              className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow"
            >
              Start 30Q Speed Drill
            </button>
          </div>

        </div>
      </div>
    );
  }

  // Exam Scorecard View
  if (examResult) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-8 space-y-8 animate-fade-in">
        <div className="p-6 sm:p-8 rounded-3xl border shadow-xl bg-white/95 border-sepia-300 text-sepia-900 dark:bg-[#0f172a]/95 dark:border-slate-800 dark:text-slate-100 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-sepia-200 dark:border-slate-800 pb-4">
            <div>
              <span className="text-xs font-mono font-bold text-saffron-700 dark:text-amber-400">
                EXAM RESULT & PERFORMANCE SCORECARD
              </span>
              <h2 className="text-2xl font-bold font-display text-sepia-900 dark:text-slate-100 mt-1">
                UPSC Prelims Simulated Scorecard
              </h2>
            </div>
            <button
              onClick={() => {
                setExamResult(null);
                setExamActive(false);
              }}
              className="px-4 py-2 rounded-xl text-xs font-bold border border-sepia-300 dark:border-slate-700 hover:bg-sepia-100"
            >
              Back to Presets
            </button>
          </div>

          {/* Metrics summary cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-center">
              <span className="text-xs font-mono text-sepia-600 dark:text-slate-400 block">MARKS SCORED</span>
              <span className="text-2xl sm:text-3xl font-mono font-black text-amber-600 dark:text-amber-400">
                {examResult.marksObtained} <span className="text-xs text-sepia-500">/ {examResult.totalMarks}</span>
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center">
              <span className="text-xs font-mono text-sepia-600 dark:text-slate-400 block">CORRECT ANSWERS</span>
              <span className="text-2xl sm:text-3xl font-mono font-black text-emerald-600 dark:text-emerald-400">
                {examResult.correct}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-center">
              <span className="text-xs font-mono text-sepia-600 dark:text-slate-400 block">WRONG ANSWERS</span>
              <span className="text-2xl sm:text-3xl font-mono font-black text-rose-600 dark:text-rose-400">
                {examResult.wrong}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-center">
              <span className="text-xs font-mono text-sepia-600 dark:text-slate-400 block">ACCURACY</span>
              <span className="text-2xl sm:text-3xl font-mono font-black text-sky-600 dark:text-sky-400">
                {examResult.accuracy}%
              </span>
            </div>
          </div>

          {/* Question Breakdown List */}
          <div className="space-y-3 pt-4 border-t border-sepia-200 dark:border-slate-800">
            <h4 className="text-sm font-bold font-display text-sepia-900 dark:text-slate-100">
              Detailed Question-by-Question Review:
            </h4>
            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
              {examResult.detailedAnalysis.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border text-xs space-y-2 ${
                    !item.isAttempted
                      ? 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800'
                      : item.isCorrect
                      ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800'
                      : 'bg-rose-50/50 dark:bg-rose-950/20 border-rose-300 dark:border-rose-800'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono font-bold text-sepia-600 dark:text-slate-400">
                      Q{idx + 1}. {item.question.topic}
                    </span>
                    <span className={`font-bold font-mono px-2 py-0.5 rounded text-[10px] ${
                      !item.isAttempted
                        ? 'bg-slate-200 text-slate-700'
                        : item.isCorrect
                        ? 'bg-emerald-200 text-emerald-800'
                        : 'bg-rose-200 text-rose-800'
                    }`}>
                      {!item.isAttempted ? 'Skipped (0)' : item.isCorrect ? '+2.00 Marks' : '-0.66 Marks'}
                    </span>
                  </div>
                  <p className="font-medium text-sepia-900 dark:text-slate-200 text-sm">
                    {item.question.question}
                  </p>
                  <div className="text-sepia-600 dark:text-slate-400 space-y-0.5">
                    <div>Your Choice: <strong>{item.isAttempted ? item.question.options[item.userAns] : 'Not Answered'}</strong></div>
                    <div>Correct Answer: <strong className="text-emerald-700 dark:text-emerald-400">{item.question.options[item.question.correct]}</strong></div>
                  </div>
                  <p className="text-sepia-700 dark:text-slate-300 leading-relaxed pt-1 border-t border-sepia-200 dark:border-slate-800 font-sans">
                    {item.question.explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    );
  }

  // Active Live Exam Screen (TCS iON / UPSC style)
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4 animate-fade-in select-none">
      
      {/* Top Status Bar */}
      <div className="flex items-center justify-between p-4 rounded-2xl bg-white/90 border border-sepia-300 dark:bg-slate-900 dark:border-slate-800 shadow-sm">
        <div>
          <span className="text-xs font-mono font-bold uppercase text-saffron-700 dark:text-amber-400">
            UPSC PRELIMS LIVE SIMULATOR
          </span>
          <h3 className="text-sm font-bold text-sepia-900 dark:text-slate-100">
            Question {currentQIndex + 1} of {examQuestions.length}
          </h3>
        </div>

        {/* Countdown Timer */}
        <div className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-mono text-sm sm:text-base font-bold shadow-xs border ${
          timeLeftSec <= 300 
            ? 'bg-rose-100 text-rose-800 border-rose-300 animate-pulse'
            : 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950 dark:text-amber-300'
        }`}>
          <Clock className="w-4 h-4" />
          <span>{formatTime(timeLeftSec)}</span>
        </div>

        <button
          onClick={() => setShowSubmitModal(true)}
          className="px-4 py-2 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white text-xs font-bold shadow transition-colors"
        >
          Submit Exam
        </button>
      </div>

      {/* Main Examination Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left 8 Cols: Active Question Paper */}
        <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl border shadow-md bg-white/95 border-sepia-300 text-sepia-900 dark:bg-[#0f172a]/95 dark:border-slate-800 dark:text-slate-100 space-y-6">
          
          <div className="flex items-center justify-between border-b border-sepia-200 dark:border-slate-800 pb-3">
            <span className="text-xs font-mono font-bold text-sepia-600 dark:text-slate-400">
              {currentQ.topic} • Marks: +2.0, -0.66
            </span>
            {reviewFlags[currentQIndex] && (
              <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300">
                Marked for Review
              </span>
            )}
          </div>

          <h3 className="text-base sm:text-lg font-bold font-sans text-sepia-900 dark:text-slate-100 leading-relaxed">
            {currentQ.question}
          </h3>

          {/* Options */}
          <div className="space-y-3">
            {currentQ.options.map((opt, optIdx) => {
              const isSelected = answers[currentQIndex] === optIdx;
              return (
                <div
                  key={optIdx}
                  onClick={() => handleSelectOption(optIdx)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start space-x-3 ${
                    isSelected
                      ? 'bg-saffron-50 dark:bg-amber-950/40 border-saffron-500 ring-2 ring-saffron-500/20'
                      : 'bg-white/70 dark:bg-slate-900/70 border-sepia-200 dark:border-slate-800 hover:bg-sepia-50'
                  }`}
                >
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5 ${
                    isSelected
                      ? 'bg-saffron-600 text-white'
                      : 'bg-sepia-100 dark:bg-slate-800 text-sepia-700 dark:text-slate-400'
                  }`}>
                    {String.fromCharCode(65 + optIdx)}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-sepia-900 dark:text-slate-200 leading-relaxed">
                    {opt}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Navigation & Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-sepia-200 dark:border-slate-800">
            <div className="flex items-center space-x-2">
              <button
                onClick={handleClearResponse}
                disabled={answers[currentQIndex] === undefined}
                className="px-3 py-2 rounded-xl text-xs font-medium border border-sepia-300 dark:border-slate-700 disabled:opacity-30 hover:bg-sepia-100"
              >
                Clear Response
              </button>
              <button
                onClick={handleToggleReview}
                className={`px-3 py-2 rounded-xl text-xs font-medium border transition-colors ${
                  reviewFlags[currentQIndex]
                    ? 'bg-purple-600 text-white border-purple-600'
                    : 'border-sepia-300 dark:border-slate-700 hover:bg-sepia-100'
                }`}
              >
                {reviewFlags[currentQIndex] ? 'Unmark Review' : 'Mark for Review'}
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentQIndex(prev => Math.max(0, prev - 1))}
                disabled={currentQIndex === 0}
                className="px-4 py-2 rounded-xl text-xs font-bold border border-sepia-300 dark:border-slate-700 disabled:opacity-40 hover:bg-sepia-100"
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentQIndex(prev => Math.min(examQuestions.length - 1, prev + 1))}
                disabled={currentQIndex === examQuestions.length - 1}
                className="px-5 py-2 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white text-xs font-bold shadow"
              >
                Save & Next
              </button>
            </div>
          </div>

        </div>

        {/* Right 4 Cols: Question Palette */}
        <div className="lg:col-span-4 p-6 rounded-3xl border shadow-md bg-white/90 border-sepia-300 text-sepia-900 dark:bg-slate-900/90 dark:border-slate-800 dark:text-slate-100 space-y-4">
          <span className="text-xs font-mono font-bold uppercase text-sepia-500 dark:text-slate-400 block">
            QUESTION PALETTE
          </span>

          {/* Palette status indicators */}
          <div className="grid grid-cols-2 gap-2 text-[10px] font-medium text-sepia-600 dark:text-slate-400 pb-2 border-b border-sepia-200 dark:border-slate-800">
            <div className="flex items-center space-x-1.5">
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
              <span>Answered ({Object.keys(answers).length})</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700" />
              <span>Unanswered ({examQuestions.length - Object.keys(answers).length})</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-3 h-3 rounded-full bg-purple-500" />
              <span>Marked Review ({Object.values(reviewFlags).filter(Boolean).length})</span>
            </div>
          </div>

          {/* Grid buttons */}
          <div className="grid grid-cols-5 sm:grid-cols-6 gap-2 max-h-[350px] overflow-y-auto pr-1">
            {examQuestions.map((_, idx) => {
              const isAnswered = answers[idx] !== undefined;
              const isReview = reviewFlags[idx];
              const isCurrent = idx === currentQIndex;

              let btnClass = 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300';
              if (isAnswered && isReview) {
                btnClass = 'bg-purple-600 text-white ring-2 ring-emerald-400';
              } else if (isReview) {
                btnClass = 'bg-purple-600 text-white';
              } else if (isAnswered) {
                btnClass = 'bg-emerald-600 text-white';
              }

              return (
                <button
                  key={idx}
                  onClick={() => setCurrentQIndex(idx)}
                  className={`p-2 rounded-xl text-xs font-mono font-bold transition-all ${btnClass} ${
                    isCurrent ? 'ring-2 ring-saffron-500 scale-105' : ''
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

        </div>

      </div>

      {/* Confirmation Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-md p-6 rounded-3xl bg-[#efe9d8] dark:bg-[#0c1017] border border-sepia-400 dark:border-slate-700 text-sepia-900 dark:text-slate-100 shadow-2xl space-y-4">
            <h3 className="text-xl font-bold font-display">Submit Examination?</h3>
            <div className="space-y-1 text-xs text-sepia-700 dark:text-slate-300">
              <div>Total Questions: <strong>{examQuestions.length}</strong></div>
              <div>Answered: <strong className="text-emerald-600">{Object.keys(answers).length}</strong></div>
              <div>Unanswered: <strong className="text-rose-600">{examQuestions.length - Object.keys(answers).length}</strong></div>
              <div>Marked for Review: <strong className="text-purple-600">{Object.values(reviewFlags).filter(Boolean).length}</strong></div>
            </div>
            <p className="text-xs text-sepia-600 dark:text-slate-400">
              Are you sure you want to finish? You cannot change your answers after submission.
            </p>
            <div className="flex items-center justify-end space-x-3 pt-2">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold border border-sepia-300 dark:border-slate-700 hover:bg-sepia-100"
              >
                Return to Exam
              </button>
              <button
                onClick={handleFinalSubmit}
                className="px-5 py-2 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white text-xs font-bold shadow"
              >
                Yes, Final Submit
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
