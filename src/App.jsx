import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/common/Header';
import Navigation from './components/common/Navigation';
import GlobalSearchModal from './components/common/GlobalSearchModal';

import Dashboard from './components/dashboard/Dashboard';
import MasterFlowExplorer from './components/atlas/MasterFlowExplorer';
import InteractiveMapLab from './components/maplab/InteractiveMapLab';
import MapPointingDrill from './components/maplab/MapPointingDrill';
import MonsoonSimulator from './components/simulators/MonsoonSimulator';
import CrossSectionLab from './components/atlas/CrossSectionLab';
import CropLocationGame from './components/simulators/CropLocationGame';
import RiverBasinExplorer from './components/atlas/RiverBasinExplorer';

import PracticeArena from './components/practice/PracticeArena';
import FlashcardDeck from './components/practice/FlashcardDeck';
import MistakesNotebook from './components/practice/MistakesNotebook';
import ExamSimulator from './components/mock/ExamSimulator';
import PyqExplorer from './components/tools/PyqExplorer';
import BackupSync from './components/tools/BackupSync';

import { 
  getStored, 
  setStored, 
  getAttempts, 
  getBookmarks, 
  getMistakes, 
  updateDailyStreak 
} from './utils/dataManager';
import { calculateReadiness } from './utils/readinessCalculator';

export default function App() {
  // Theme state: 'parchment' | 'night'
  const [theme, setTheme] = useState(() => getStored('bharat_geo_theme', 'parchment'));
  const [lang, setLang] = useState(() => getStored('bharat_geo_lang', 'en'));
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sub-modes
  const [drillActive, setDrillActive] = useState(false);
  const [simulatorSubTab, setSimulatorSubTab] = useState('monsoon'); // monsoon, crosssection, cropgame
  const [practiceInitialTopic, setPracticeInitialTopic] = useState('All');

  // Datasets
  const [datasets, setDatasets] = useState({
    masterFlow: [],
    passesPeaks: [],
    rivers: [],
    climate: {},
    soils: {},
    vegetation: {},
    minerals: {},
    projects: [],
    disasters: {},
    biodiversity: {},
    transport: {},
    pyq: [],
    questions: [],
    loaded: false
  });

  // User Stats & State
  const [userAttempts, setUserAttempts] = useState(() => getAttempts());
  const [dailyStreak, setDailyStreak] = useState(1);

  // Sync theme to root class
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'night') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    setStored('bharat_geo_theme', theme);
  }, [theme]);

  // Sync lang
  useEffect(() => {
    setStored('bharat_geo_lang', lang);
  }, [lang]);

  // Load datasets on mount
  useEffect(() => {
    const loadAll = async () => {
      try {
        const [
          masterFlow,
          passesPeaks,
          rivers,
          climate,
          soils,
          vegetation,
          minerals,
          projects,
          disasters,
          biodiversity,
          pyq,
          questions
        ] = await Promise.all([
          fetch('./data/master-flow.json').then(r => r.json()),
          fetch('./data/passes-peaks.json').then(r => r.json()),
          fetch('./data/rivers.json').then(r => r.json()),
          fetch('./data/climate-monsoon.json').then(r => r.json()),
          fetch('./data/soils-india.json').then(r => r.json()),
          fetch('./data/vegetation-forests.json').then(r => r.json()),
          fetch('./data/minerals-energy.json').then(r => r.json()),
          fetch('./data/multi-purpose-projects.json').then(r => r.json()),
          fetch('./data/disaster-geography.json').then(r => r.json()),
          fetch('./data/biodiversity-protected.json').then(r => r.json()),
          fetch('./data/prelims-pyqs.json').then(r => r.json()),
          fetch('./data/questions.json').then(r => r.json())
        ]);

        setDatasets({
          masterFlow,
          passesPeaks,
          rivers,
          climate,
          soils,
          vegetation,
          minerals,
          projects,
          disasters,
          biodiversity,
          pyq,
          questions,
          loaded: true
        });
      } catch (err) {
        console.error('Error fetching atlas datasets:', err);
      }
    };

    loadAll();
    const curStreak = updateDailyStreak();
    setDailyStreak(curStreak);
  }, []);

  // Compute Readiness
  const readiness = useMemo(() => {
    return calculateReadiness(userAttempts, datasets.questions);
  }, [userAttempts, datasets.questions]);

  const refreshUserStats = () => {
    setUserAttempts(getAttempts());
  };

  const handleToggleTheme = () => {
    setTheme(prev => (prev === 'parchment' ? 'night' : 'parchment'));
  };

  const handleToggleLang = () => {
    setLang(prev => (prev === 'en' ? 'hi' : 'en'));
  };

  // Navigate from global search or presets
  const handleNavigateItem = (item) => {
    if (item.type === 'open_search') {
      setSearchOpen(true);
      return;
    }
    if (item.targetTab) {
      setActiveTab(item.targetTab);
    }
  };

  const handleStartSession = ({ topic = 'All', count = 25 }) => {
    setPracticeInitialTopic(topic);
    setActiveTab('practice');
  };

  const bookmarks = getBookmarks();
  const mistakes = getMistakes();
  const unresolvedMistakesCount = Object.values(mistakes).filter(m => !m.resolved).length;

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-300
      bg-[#f7f3e8] text-sepia-900 selection:bg-saffron-500 selection:text-white
      dark:bg-[#070a0f] dark:text-slate-100">
      
      {/* Top Header */}
      <Header
        streak={dailyStreak}
        readinessScore={readiness.overallScore}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        lang={lang}
        onToggleLang={handleToggleLang}
        onOpenSearch={() => setSearchOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Main Sub-Nav Tabs */}
      <Navigation
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setDrillActive(false);
        }}
        lang={lang}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Global Search Modal */}
      <GlobalSearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigateItem={handleNavigateItem}
        datasets={datasets}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        
        {/* Loading Spinner */}
        {!datasets.loaded && (
          <div className="py-24 flex flex-col items-center justify-center space-y-3">
            <div className="w-10 h-10 border-4 border-saffron-600 border-t-transparent rounded-full animate-spin" />
            <p className="text-xs font-mono font-bold tracking-widest uppercase text-sepia-600 dark:text-slate-400">
              Initializing Bharat Vector Atlas & Question Engine...
            </p>
          </div>
        )}

        {datasets.loaded && (
          <>
            {/* 1. Cockpit & Readiness Dashboard */}
            {activeTab === 'dashboard' && (
              <Dashboard
                readiness={readiness}
                streak={dailyStreak}
                onStartSession={handleStartSession}
                setActiveTab={setActiveTab}
                unresolvedMistakesCount={unresolvedMistakesCount}
                bookmarksCount={Object.keys(bookmarks).length}
                lang={lang}
              />
            )}

            {/* 2. Master Causal Flow */}
            {activeTab === 'masterflow' && (
              <MasterFlowExplorer
                masterFlowData={datasets.masterFlow}
                onStartStationPractice={(title) => {
                  setPracticeInitialTopic(title);
                  setActiveTab('practice');
                }}
                lang={lang}
              />
            )}

            {/* 3. Interactive Map Lab / Blind Map Pointing Drill */}
            {activeTab === 'maplab' && (
              drillActive ? (
                <MapPointingDrill
                  passesPeaksData={datasets.passesPeaks}
                  onExitDrill={() => setDrillActive(false)}
                />
              ) : (
                <InteractiveMapLab
                  passesPeaksData={datasets.passesPeaks}
                  riversData={datasets.rivers}
                  biodiversityData={datasets.biodiversity}
                  mineralsData={datasets.minerals}
                  onStartDrill={() => setDrillActive(true)}
                  lang={lang}
                />
              )
            )}

            {/* 4. Simulators & Cross Sections */}
            {activeTab === 'simulators' && (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
                <div className="flex rounded-2xl bg-white/80 dark:bg-slate-900/80 p-1 border border-sepia-300 dark:border-slate-800 text-xs font-bold w-fit">
                  {[
                    { id: 'monsoon', label: '8-Stage Monsoon Physics' },
                    { id: 'crosssection', label: 'Topographic Cross-Sections' },
                    { id: 'cropgame', label: 'Crop-Soil-Climate Match' }
                  ].map(sub => (
                    <button
                      key={sub.id}
                      onClick={() => setSimulatorSubTab(sub.id)}
                      className={`px-4 py-2 rounded-xl transition-all ${
                        simulatorSubTab === sub.id
                          ? 'bg-saffron-600 text-white shadow-xs'
                          : 'text-sepia-600 dark:text-slate-400 hover:text-sepia-900'
                      }`}
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>

                {simulatorSubTab === 'monsoon' && (
                  <MonsoonSimulator
                    climateData={datasets.climate}
                    onStartClimatePractice={() => {
                      setPracticeInitialTopic('Climate & Monsoon');
                      setActiveTab('practice');
                    }}
                  />
                )}

                {simulatorSubTab === 'crosssection' && (
                  <CrossSectionLab />
                )}

                {simulatorSubTab === 'cropgame' && (
                  <CropLocationGame />
                )}
              </div>
            )}

            {/* 5. River Basins Explorer */}
            {activeTab === 'rivers' && (
              <RiverBasinExplorer
                riversData={datasets.rivers}
                onStartRiverPractice={(riverName) => {
                  setPracticeInitialTopic('Drainage & River Systems');
                  setActiveTab('practice');
                }}
              />
            )}

            {/* 6. Practice Arena (500 Questions) */}
            {activeTab === 'practice' && (
              <PracticeArena
                questions={datasets.questions}
                initialTopic={practiceInitialTopic}
                lang={lang}
                onAttemptRecorded={refreshUserStats}
              />
            )}

            {/* 7. Prelims Exam Simulator */}
            {activeTab === 'mock' && (
              <ExamSimulator
                questions={datasets.questions}
                onExamComplete={refreshUserStats}
              />
            )}

            {/* 8. Spaced Repetition Flashcards */}
            {activeTab === 'flashcards' && (
              <FlashcardDeck />
            )}

            {/* 9. Mistakes Notebook */}
            {activeTab === 'mistakes' && (
              <MistakesNotebook
                questions={datasets.questions}
                onSolveQuestion={(qId) => {
                  setActiveTab('practice');
                }}
              />
            )}

            {/* 10. PYQ & Syllabus */}
            {activeTab === 'pyq' && (
              <PyqExplorer
                pyqData={datasets.pyq}
                onStartPyqPractice={(year) => {
                  setPracticeInitialTopic('All');
                  setActiveTab('practice');
                }}
              />
            )}

            {/* 11. Backup & Notes */}
            {activeTab === 'tools' && (
              <BackupSync
                onDataResetOrImport={refreshUserStats}
              />
            )}
          </>
        )}

      </main>

      {/* Footer */}
      <footer className="border-t border-sepia-300/60 dark:border-slate-800 bg-[#efe9d8]/80 dark:bg-[#0c1017]/80 text-sepia-700 dark:text-slate-400 py-6 text-xs transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="space-y-0.5">
            <p className="font-bold text-sepia-900 dark:text-slate-200">
              BHARAT ATLAS MASTER (Geography of India) • v2.0
            </p>
            <p className="text-[11px] text-sepia-600 dark:text-slate-500">
              UPSC Civil Services Prelims GS-I & Mains GS-I/III • State PSCs • 100% Offline-First
            </p>
          </div>
          <div className="flex items-center space-x-4 text-xs font-medium">
            <button onClick={() => setActiveTab('masterflow')} className="hover:underline">Causal Flow</button>
            <button onClick={() => setActiveTab('maplab')} className="hover:underline">Vector Atlas</button>
            <button onClick={() => setActiveTab('practice')} className="hover:underline">500 MCQs</button>
            <button onClick={() => setActiveTab('tools')} className="hover:underline">JSON Backup</button>
          </div>
        </div>
      </footer>

    </div>
  );
}
