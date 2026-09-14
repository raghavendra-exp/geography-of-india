import React, { useState, useMemo } from 'react';
import { 
  AlertOctagon, 
  CheckCircle2, 
  RotateCcw, 
  Filter, 
  ArrowRight, 
  BookOpen, 
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { getMistakes, resolveMistake, updateMistakeType } from '../../utils/dataManager';

export default function MistakesNotebook({ 
  questions = [],
  onSolveQuestion 
}) {
  const [mistakes, setMistakes] = useState(getMistakes());
  const [filterType, setFilterType] = useState('all');
  const [statusFilter, setStatusFilter] = useState('unresolved'); // unresolved, resolved, all

  const mistakeList = useMemo(() => {
    return Object.values(mistakes).filter(m => {
      const matchType = filterType === 'all' || m.mistakeType === filterType;
      const matchStatus = 
        statusFilter === 'all' || 
        (statusFilter === 'unresolved' && !m.resolved) ||
        (statusFilter === 'resolved' && m.resolved);
      return matchType && matchStatus;
    });
  }, [mistakes, filterType, statusFilter]);

  const handleResolve = (qId) => {
    resolveMistake(qId);
    setMistakes(getMistakes());
  };

  const handleChangeType = (qId, newType) => {
    updateMistakeType(qId, newType);
    setMistakes(getMistakes());
  };

  const unresolvedCount = Object.values(mistakes).filter(m => !m.resolved).length;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 animate-fade-in">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-sepia-300 dark:border-slate-800 pb-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border border-rose-300 dark:border-rose-800">
              UPSC ERROR LOG
            </span>
            <span className="text-xs font-mono text-sepia-600 dark:text-slate-400">
              {unresolvedCount} Unresolved Mistake{unresolvedCount !== 1 ? 's' : ''}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-sepia-900 dark:text-slate-100 mt-1">
            Personal Mistakes Notebook & Trap Analysis
          </h2>
          <p className="text-xs text-sepia-600 dark:text-slate-400">
            Every wrong answer is an opportunity to eliminate a blind spot before the real examination.
          </p>
        </div>

        {/* Status toggle */}
        <div className="flex rounded-xl bg-sepia-100 dark:bg-slate-800 p-0.5 border border-sepia-200 dark:border-slate-700 text-xs">
          {['unresolved', 'resolved', 'all'].map(st => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1.5 rounded-lg capitalize font-bold transition-all ${
                statusFilter === st
                  ? 'bg-saffron-600 text-white shadow-xs'
                  : 'text-sepia-600 dark:text-slate-400 hover:text-sepia-900'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Filter by error type */}
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="font-mono text-sepia-500 dark:text-slate-400 mr-2">Error Category:</span>
        {[
          'all',
          'Conceptual Misunderstanding',
          'Factual Lapse',
          'Misread Question',
          'Careless Elimination'
        ].map(cat => (
          <button
            key={cat}
            onClick={() => setFilterType(cat)}
            className={`px-3 py-1 rounded-full font-medium transition-all ${
              filterType === cat
                ? 'bg-rose-600 text-white shadow-xs'
                : 'bg-sepia-100 text-sepia-700 dark:bg-slate-800 dark:text-slate-300 hover:bg-sepia-200'
            }`}
          >
            {cat === 'all' ? 'All Categories' : cat}
          </button>
        ))}
      </div>

      {/* Mistakes List */}
      {mistakeList.length === 0 ? (
        <div className="py-16 text-center text-sepia-600 dark:text-slate-400 bg-white/60 dark:bg-slate-900/60 rounded-3xl border border-sepia-300 dark:border-slate-800">
          <CheckCircle2 className="w-12 h-12 mx-auto mb-3 text-emerald-500 opacity-70" />
          <h3 className="text-base font-bold">No Mistakes Found in this Category!</h3>
          <p className="text-xs mt-1">
            Keep practicing. When you mark a question incorrectly, it automatically logs here for targeted revision.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {mistakeList.map(m => {
            const qData = questions.find(q => q.id === m.questionId);
            if (!qData) return null;

            return (
              <div
                key={m.questionId}
                className="p-5 rounded-2xl border shadow-sm transition-all bg-white/90 border-sepia-300 text-sepia-900 dark:bg-[#0f172a]/90 dark:border-slate-800 dark:text-slate-100 space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-saffron-100 text-saffron-800 dark:bg-amber-950 dark:text-amber-300">
                      {qData.topic}
                    </span>
                    <select
                      value={m.mistakeType}
                      onChange={e => handleChangeType(m.questionId, e.target.value)}
                      className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 outline-none"
                    >
                      <option value="Conceptual Misunderstanding">Conceptual Misunderstanding</option>
                      <option value="Factual Lapse">Factual Lapse</option>
                      <option value="Misread Question">Misread Question</option>
                      <option value="Careless Elimination">Careless Elimination</option>
                    </select>
                  </div>

                  <div className="flex items-center space-x-2">
                    {!m.resolved ? (
                      <button
                        onClick={() => handleResolve(m.questionId)}
                        className="px-3 py-1 rounded-xl text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 hover:bg-emerald-200"
                      >
                        Mark Resolved
                      </button>
                    ) : (
                      <span className="text-xs font-semibold text-emerald-600 flex items-center space-x-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Resolved</span>
                      </span>
                    )}

                    <button
                      onClick={() => onSolveQuestion?.(qData.id)}
                      className="px-3 py-1 rounded-xl text-xs font-bold bg-saffron-600 text-white shadow hover:bg-saffron-700 flex items-center space-x-1"
                    >
                      <span>Re-attempt</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <p className="text-sm font-bold font-sans text-sepia-900 dark:text-slate-100 leading-relaxed">
                  {qData.question}
                </p>

                <div className="p-3 rounded-xl bg-sepia-50 dark:bg-slate-800/60 border border-sepia-200 dark:border-slate-800 text-xs space-y-1">
                  <span className="font-bold text-sepia-800 dark:text-slate-200 block">
                    Correct Rationale:
                  </span>
                  <p className="text-sepia-700 dark:text-slate-300 leading-relaxed font-sans">
                    {qData.explanation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}
