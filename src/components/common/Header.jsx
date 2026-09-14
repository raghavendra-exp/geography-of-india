import React from 'react';
import { 
  Compass, 
  Flame, 
  Search, 
  Moon, 
  Sun, 
  Menu, 
  X, 
  BookOpen, 
  Layers, 
  Award,
  Globe2
} from 'lucide-react';

export default function Header({ 
  streak = 1, 
  readinessScore = 0, 
  theme = 'parchment', 
  onToggleTheme, 
  lang = 'en', 
  onToggleLang, 
  onOpenSearch, 
  activeTab, 
  setActiveTab,
  mobileMenuOpen,
  setMobileMenuOpen
}) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md border-b transition-colors duration-300
      border-sepia-300/40 bg-[#efe9d8]/90 text-sepia-900 
      dark:border-slate-800 dark:bg-[#0c1017]/90 dark:text-slate-100">
      
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Brand */}
          <div 
            className="flex items-center space-x-3 cursor-pointer select-none"
            onClick={() => setActiveTab('dashboard')}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-saffron-500 to-amber-700 flex items-center justify-center text-white shadow-md shadow-saffron-600/20 ring-1 ring-saffron-400/30">
              <Compass className="w-6 h-6 animate-pulse-slow" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-display font-black tracking-tight text-lg sm:text-xl text-sepia-900 dark:text-amber-300">
                  BHARAT ATLAS
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-mono font-bold uppercase rounded bg-saffron-100 text-saffron-800 dark:bg-amber-900/60 dark:text-amber-300 border border-saffron-300/50 dark:border-amber-700/50">
                  v2.0
                </span>
              </div>
              <p className="text-[11px] font-sans font-medium text-sepia-700/80 dark:text-slate-400 hidden sm:block">
                Geography of India • UPSC & State PSC Mastery
              </p>
            </div>
          </div>

          {/* Center Quick Stats / Pills */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Daily Streak */}
            <div 
              title="Consecutive daily study streak"
              className="flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100/80 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300 border border-amber-300/60 dark:border-amber-800/60"
            >
              <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
              <span>{streak} Day{streak > 1 ? 's' : ''} Streak</span>
            </div>

            {/* Geography Readiness Score */}
            <div 
              title="Calculated Geography Readiness Index (0–100)"
              className="flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100/80 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-300/60 dark:border-emerald-800/60 cursor-pointer hover:opacity-90"
              onClick={() => setActiveTab('dashboard')}
            >
              <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Readiness: <strong className="font-mono">{readinessScore}%</strong></span>
            </div>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Global Search Button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all
                border-sepia-300/60 bg-white/70 hover:bg-white text-sepia-800
                dark:border-slate-700 dark:bg-slate-900/80 dark:hover:bg-slate-800 dark:text-slate-200"
              title="Search passes, peaks, rivers, minerals, hazards (Ctrl+K)"
            >
              <Search className="w-4 h-4 text-sepia-600 dark:text-slate-400" />
              <span className="hidden lg:inline">Search Atlas...</span>
              <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-sepia-100 dark:bg-slate-800 rounded border border-sepia-300 dark:border-slate-700 text-sepia-600 dark:text-slate-400">
                ⌘K
              </kbd>
            </button>

            {/* Language Toggle (EN / HI) */}
            <button
              onClick={onToggleLang}
              className="flex items-center space-x-1 px-2.5 py-1.5 rounded-lg text-xs font-bold border transition-colors
                border-sepia-300/60 bg-sepia-100/60 hover:bg-sepia-200 text-sepia-900
                dark:border-slate-700 dark:bg-slate-800/80 dark:hover:bg-slate-700 dark:text-amber-300"
              title="Toggle English / Hindi terminology"
            >
              <Globe2 className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'हिन्दी' : 'English'}</span>
            </button>

            {/* Theme Toggle (Parchment vs Night Atlas) */}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg border transition-colors
                border-sepia-300/60 bg-white/70 hover:bg-white text-sepia-800
                dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-amber-300"
              title={`Switch to ${theme === 'parchment' ? 'Night Atlas Mode' : 'Parchment Atlas Mode'}`}
              aria-label="Toggle Theme"
            >
              {theme === 'parchment' ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg border border-sepia-300/60 dark:border-slate-700 text-sepia-800 dark:text-slate-200"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
