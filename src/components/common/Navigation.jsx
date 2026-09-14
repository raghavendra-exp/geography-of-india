import React from 'react';
import { 
  Compass, 
  Map, 
  GitMerge, 
  Activity, 
  Waves, 
  CheckSquare, 
  Award, 
  BookMarked, 
  AlertOctagon, 
  FileText, 
  Database,
  Layers
} from 'lucide-react';

export const NAV_ITEMS = [
  { id: 'dashboard', label: 'Cockpit', hindi: 'कॉकपिट', icon: Compass },
  { id: 'masterflow', label: 'Master Causal Flow', hindi: 'कारण-कार्य प्रवाह', icon: GitMerge },
  { id: 'maplab', label: 'Map Lab', hindi: 'मानचित्र प्रयोगशाला', icon: Map },
  { id: 'simulators', label: 'Simulators', hindi: 'सिम्युलेटर', icon: Activity },
  { id: 'rivers', label: 'River Basins', hindi: 'नदी द्रोणी', icon: Waves },
  { id: 'practice', label: 'Practice Arena', hindi: 'अभ्यास अखाड़ा', icon: CheckSquare, badge: '500 Qs' },
  { id: 'mock', label: 'Prelims Mock', hindi: 'मॉक टेस्ट', icon: Award, badge: 'UPSC' },
  { id: 'flashcards', label: 'Flashcards', hindi: 'स्मृति कार्ड', icon: BookMarked },
  { id: 'mistakes', label: 'Error Book', hindi: 'त्रुटि पंजिका', icon: AlertOctagon },
  { id: 'pyq', label: 'PYQ & Syllabus', hindi: 'पीवाईक्यू', icon: FileText },
  { id: 'tools', label: 'Backup & Notes', hindi: 'बैकअप / नोट्स', icon: Database }
];

export default function Navigation({ 
  activeTab, 
  setActiveTab, 
  lang = 'en',
  mobileMenuOpen,
  setMobileMenuOpen
}) {
  return (
    <>
      {/* Desktop Sub-Nav Tab Bar */}
      <nav className="hidden md:block border-b transition-colors duration-300
        border-sepia-300/40 bg-[#e7dfc8]/80 dark:border-slate-800 dark:bg-[#121824]/80 backdrop-blur-sm sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-1 overflow-x-auto py-2 no-scrollbar">
            {NAV_ITEMS.map(item => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-150 relative ${
                    isActive
                      ? 'bg-saffron-600 text-white shadow-sm shadow-saffron-700/30 ring-1 ring-saffron-500'
                      : 'text-sepia-800 dark:text-slate-300 hover:bg-sepia-200/60 dark:hover:bg-slate-800/80 hover:text-sepia-950 dark:hover:text-white'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-sepia-600 dark:text-slate-400'}`} />
                  <span>{lang === 'hi' ? item.hindi : item.label}</span>
                  {item.badge && (
                    <span className={`px-1.5 py-0.2 text-[9px] font-mono font-bold rounded-full ${
                      isActive 
                        ? 'bg-saffron-800 text-saffron-100' 
                        : 'bg-sepia-200 text-sepia-800 dark:bg-slate-700 dark:text-slate-300'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}>
          <div 
            className="fixed top-0 bottom-0 left-0 w-72 max-w-[80vw] p-5 shadow-2xl transition-transform border-r
              bg-[#efe9d8] text-sepia-900 border-sepia-300
              dark:bg-[#0c1017] dark:text-slate-100 dark:border-slate-800 overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-sepia-300 dark:border-slate-800">
              <div className="flex items-center space-x-2">
                <Compass className="w-5 h-5 text-saffron-600 dark:text-amber-400" />
                <span className="font-display font-bold text-base">BHARAT ATLAS</span>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-md text-sepia-600 dark:text-slate-400 hover:bg-sepia-200 dark:hover:bg-slate-800"
              >
                ✕
              </button>
            </div>

            <div className="space-y-1">
              {NAV_ITEMS.map(item => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-saffron-600 text-white'
                        : 'text-sepia-800 dark:text-slate-300 hover:bg-sepia-200/70 dark:hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className="w-4 h-4" />
                      <span>{lang === 'hi' ? item.hindi : item.label}</span>
                    </div>
                    {item.badge && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/20 text-white font-mono">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
