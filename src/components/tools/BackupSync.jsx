import React, { useState, useRef } from 'react';
import { 
  Database, 
  Download, 
  Upload, 
  Trash2, 
  CheckCircle2, 
  AlertTriangle, 
  FileText,
  Save
} from 'lucide-react';
import { 
  exportAllData, 
  importAllData, 
  resetAllData, 
  getAttempts, 
  getBookmarks, 
  getMistakes, 
  getAllUserNotes, 
  getDailyStreak 
} from '../../utils/dataManager';

export default function BackupSync({ onDataResetOrImport }) {
  const [importStatus, setImportStatus] = useState(null);
  const [showConfirmReset, setShowConfirmReset] = useState(false);
  const fileInputRef = useRef(null);

  const attempts = getAttempts();
  const bookmarks = getBookmarks();
  const mistakes = getMistakes();
  const notes = getAllUserNotes();
  const streak = getDailyStreak();

  const handleExport = () => {
    const jsonStr = exportAllData();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bharat_atlas_backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result;
      if (typeof content === 'string') {
        const res = importAllData(content);
        if (res.success) {
          setImportStatus('success');
          onDataResetOrImport?.();
        } else {
          setImportStatus('error');
        }
      }
    };
    reader.readAsText(file);
  };

  const handleReset = () => {
    resetAllData();
    setShowConfirmReset(false);
    onDataResetOrImport?.();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 animate-fade-in">
      
      {/* Header */}
      <div className="border-b border-sepia-300 dark:border-slate-800 pb-4">
        <div className="flex items-center space-x-2">
          <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-saffron-100 text-saffron-800 dark:bg-amber-950 dark:text-amber-300">
            OFFLINE PERSISTENCE & DATA MANAGEMENT
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-sepia-900 dark:text-slate-100 mt-1">
          Backup, Export & Personal Notes
        </h2>
        <p className="text-xs sm:text-sm text-sepia-600 dark:text-slate-400 mt-0.5">
          100% offline-first application. All your question attempts, streaks, custom notes, and bookmarks are saved securely in your browser's localStorage.
        </p>
      </div>

      {/* Local Data Storage Overview */}
      <div className="p-6 rounded-3xl border shadow-sm bg-white/90 border-sepia-300 text-sepia-900 dark:bg-[#0f172a]/90 dark:border-slate-800 dark:text-slate-100 space-y-4">
        <h3 className="text-base font-bold font-display flex items-center space-x-2">
          <Database className="w-5 h-5 text-saffron-600 dark:text-amber-400" />
          <span>Local Storage Health & Statistics</span>
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-2xl bg-sepia-50/80 dark:bg-slate-800/60 border border-sepia-200 dark:border-slate-700">
            <span className="text-[11px] font-mono text-sepia-500 dark:text-slate-400 block">QUESTIONS ATTEMPTED</span>
            <span className="text-2xl font-mono font-bold text-sepia-900 dark:text-slate-100">
              {Object.keys(attempts).length}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-sepia-50/80 dark:bg-slate-800/60 border border-sepia-200 dark:border-slate-700">
            <span className="text-[11px] font-mono text-sepia-500 dark:text-slate-400 block">BOOKMARKS</span>
            <span className="text-2xl font-mono font-bold text-amber-600 dark:text-amber-400">
              {Object.keys(bookmarks).length}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-sepia-50/80 dark:bg-slate-800/60 border border-sepia-200 dark:border-slate-700">
            <span className="text-[11px] font-mono text-sepia-500 dark:text-slate-400 block">ERROR BOOK ITEMS</span>
            <span className="text-2xl font-mono font-bold text-rose-600 dark:text-rose-400">
              {Object.keys(mistakes).length}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-sepia-50/80 dark:bg-slate-800/60 border border-sepia-200 dark:border-slate-700">
            <span className="text-[11px] font-mono text-sepia-500 dark:text-slate-400 block">DAILY STREAK</span>
            <span className="text-2xl font-mono font-bold text-emerald-600 dark:text-emerald-400">
              {streak} Days
            </span>
          </div>
        </div>
      </div>

      {/* Export & Import Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* 1-Click Export */}
        <div className="p-6 rounded-3xl border shadow-sm bg-white/80 border-sepia-300 text-sepia-900 dark:bg-slate-900/80 dark:border-slate-800 dark:text-slate-100 space-y-4 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center mb-3">
              <Download className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold font-display">Export Complete Study State</h4>
            <p className="text-xs text-sepia-600 dark:text-slate-400 mt-1 leading-relaxed">
              Download your full profile including streaks, mistake notebook, flashcards, and question history as a JSON backup file.
            </p>
          </div>
          <button
            onClick={handleExport}
            className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow flex items-center justify-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Download JSON Backup</span>
          </button>
        </div>

        {/* 1-Click Import */}
        <div className="p-6 rounded-3xl border shadow-sm bg-white/80 border-sepia-300 text-sepia-900 dark:bg-slate-900/80 dark:border-slate-800 dark:text-slate-100 space-y-4 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 flex items-center justify-center mb-3">
              <Upload className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold font-display">Restore / Import Backup</h4>
            <p className="text-xs text-sepia-600 dark:text-slate-400 mt-1 leading-relaxed">
              Upload a previously downloaded JSON backup file to resume your progress on a new browser or machine.
            </p>
          </div>
          <div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".json"
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow flex items-center justify-center space-x-2"
            >
              <Upload className="w-4 h-4" />
              <span>Select Backup File</span>
            </button>
            {importStatus === 'success' && (
              <p className="text-xs text-emerald-600 font-semibold mt-2 text-center">
                Backup restored successfully!
              </p>
            )}
            {importStatus === 'error' && (
              <p className="text-xs text-rose-600 font-semibold mt-2 text-center">
                Failed to restore. Please ensure the file is a valid Bharat Atlas backup.
              </p>
            )}
          </div>
        </div>

      </div>

      {/* Danger Zone: Reset */}
      <div className="p-6 rounded-3xl border border-rose-300/80 dark:border-rose-900/60 bg-rose-50/50 dark:bg-rose-950/20 text-sepia-900 dark:text-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-rose-900 dark:text-rose-300 flex items-center space-x-1.5">
            <AlertTriangle className="w-4 h-4 text-rose-600" />
            <span>Danger Zone: Clear Local Data</span>
          </h4>
          <p className="text-xs text-sepia-700 dark:text-slate-400 mt-0.5">
            Permanently erases all attempts, streaks, custom notes, and bookmarks from this browser.
          </p>
        </div>

        {!showConfirmReset ? (
          <button
            onClick={() => setShowConfirmReset(true)}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-rose-600 text-white hover:bg-rose-700 shrink-0"
          >
            Reset All Data
          </button>
        ) : (
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowConfirmReset(false)}
              className="px-3 py-1.5 rounded-lg text-xs font-bold border border-sepia-300 dark:border-slate-700"
            >
              Cancel
            </button>
            <button
              onClick={handleReset}
              className="px-4 py-1.5 rounded-lg text-xs font-bold bg-rose-700 text-white"
            >
              Confirm Clear
            </button>
          </div>
        )}
      </div>

    </div>
  );
}
