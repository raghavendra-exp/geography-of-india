import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  Bookmark, 
  ExternalLink, 
  Search, 
  CheckCircle2, 
  FileText, 
  Layers, 
  Award, 
  Compass, 
  ChevronRight, 
  Sparkles, 
  GraduationCap, 
  Zap,
  Filter,
  ArrowRight
} from 'lucide-react';

export default function ReferenceBooksLibrary({ 
  booksData = {}, 
  onStartTopicPractice,
  lang = 'en'
}) {
  const [selectedBookId, setSelectedBookId] = useState('majid-husain-india');
  const [activeTab, setActiveTab] = useState('books'); // 'books' | 'syllabus-map' | 'strategy'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModule, setSelectedModule] = useState('All');

  const books = booksData?.curriculumOverview?.coreBooks || [];
  const syllabusMapping = booksData?.curriculumOverview?.syllabusTopicMapping || [];

  const selectedBook = useMemo(() => {
    return books.find(b => b.id === selectedBookId) || books[0];
  }, [books, selectedBookId]);

  // Filtered books or chapters
  const filteredChapters = useMemo(() => {
    if (!selectedBook?.keyChapters) return [];
    if (!searchQuery.trim()) return selectedBook.keyChapters;
    const q = searchQuery.toLowerCase();
    return selectedBook.keyChapters.filter(c => 
      c.name.toLowerCase().includes(q) || 
      c.topics.toLowerCase().includes(q)
    );
  }, [selectedBook, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-sepia-300 dark:border-slate-800 bg-gradient-to-br from-amber-500/10 via-saffron-500/5 to-transparent p-6 sm:p-8 backdrop-blur-md">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-1 text-[11px] font-mono font-bold uppercase rounded-md bg-saffron-600 text-white">
                Standard Books & Syllabus Mapper
              </span>
              <span className="px-2.5 py-1 text-[11px] font-mono font-bold uppercase rounded-md bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">
                UPSC CSE GS-I & Optional • State PSCs
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-display font-black text-sepia-900 dark:text-slate-100">
              Reference Books & Standard Curriculum Library
            </h1>
            <p className="text-xs sm:text-sm text-sepia-700 dark:text-slate-300 leading-relaxed">
              Authoritative book references mapped chapter-by-chapter to the UPSC Geography syllabus. Ground your preparation in <strong>Prof. Majid Husain</strong>, <strong>NCERT Textbooks (Classes 11 & 12)</strong>, <strong>G.C. Leong</strong>, <strong>Dr. D.R. Khullar</strong>, and <strong>Dr. Savindra Singh</strong>.
            </p>
          </div>

          <div className="flex items-center space-x-2 w-full md:w-auto">
            <button
              onClick={() => setActiveTab('books')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
                activeTab === 'books'
                  ? 'bg-saffron-600 text-white shadow-md shadow-saffron-600/30'
                  : 'bg-white/80 dark:bg-slate-900/80 text-sepia-700 dark:text-slate-300 hover:bg-sepia-100 dark:hover:bg-slate-800'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Standard Books</span>
            </button>
            <button
              onClick={() => setActiveTab('syllabus-map')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
                activeTab === 'syllabus-map'
                  ? 'bg-saffron-600 text-white shadow-md shadow-saffron-600/30'
                  : 'bg-white/80 dark:bg-slate-900/80 text-sepia-700 dark:text-slate-300 hover:bg-sepia-100 dark:hover:bg-slate-800'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Syllabus Mapping</span>
            </button>
            <button
              onClick={() => setActiveTab('strategy')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
                activeTab === 'strategy'
                  ? 'bg-saffron-600 text-white shadow-md shadow-saffron-600/30'
                  : 'bg-white/80 dark:bg-slate-900/80 text-sepia-700 dark:text-slate-300 hover:bg-sepia-100 dark:hover:bg-slate-800'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Toppers' Strategy</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mode 1: Standard Books Explorer */}
      {activeTab === 'books' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Book Selector Cards */}
          <div className="lg:col-span-4 space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-sepia-600 dark:text-slate-400">
              Select Authoritative Textbook ({books.length})
            </h2>

            <div className="space-y-2.5 max-h-[700px] overflow-y-auto pr-1 no-scrollbar">
              {books.map(book => {
                const isSelected = book.id === selectedBookId;
                return (
                  <div
                    key={book.id}
                    onClick={() => setSelectedBookId(book.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'border-saffron-500 bg-white dark:bg-slate-900 shadow-md ring-1 ring-saffron-500/40'
                        : 'border-sepia-300/60 dark:border-slate-800 bg-white/60 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-900 hover:border-sepia-400'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-sepia-200/70 dark:bg-slate-800 text-sepia-800 dark:text-slate-300">
                          {book.category}
                        </span>
                        <h3 className="font-display font-bold text-sm sm:text-base text-sepia-900 dark:text-slate-100 mt-1">
                          {book.title}
                        </h3>
                        <p className="text-xs text-saffron-700 dark:text-amber-400 font-medium">
                          {book.author} • {book.publisher}
                        </p>
                      </div>
                      <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-saffron-600 rotate-90' : 'text-sepia-400'}`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Selected Book Deep Dive */}
          {selectedBook && (
            <div className="lg:col-span-8 space-y-6">
              <div className="rounded-3xl border border-sepia-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-6 shadow-xs">
                
                {/* Book Header Meta */}
                <div className="border-b border-sepia-200 dark:border-slate-800 pb-6 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 text-xs font-mono font-bold rounded-lg bg-saffron-100 text-saffron-800 dark:bg-saffron-950/60 dark:text-amber-300 border border-saffron-300/60 dark:border-saffron-800">
                      {selectedBook.category}
                    </span>
                    {selectedBook.latestEdition && (
                      <span className="px-3 py-1 text-xs font-mono font-medium rounded-lg bg-sepia-100 dark:bg-slate-800 text-sepia-700 dark:text-slate-300">
                        Edition: {selectedBook.latestEdition}
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-display font-black text-sepia-900 dark:text-slate-100">
                    {selectedBook.title}
                  </h2>
                  <p className="text-sm font-semibold text-sepia-800 dark:text-slate-200">
                    By {selectedBook.author} | Published by {selectedBook.publisher}
                  </p>
                  
                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-300/60 dark:border-amber-900/50 text-xs sm:text-sm text-sepia-800 dark:text-slate-300 leading-relaxed">
                    <strong>UPSC / PSC Exam Role:</strong> {selectedBook.relevance}
                  </div>
                </div>

                {/* Chapter breakdown */}
                {selectedBook.keyChapters && (
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <h3 className="font-display font-bold text-base text-sepia-900 dark:text-slate-100 flex items-center space-x-2">
                        <BookOpen className="w-4 h-4 text-saffron-600" />
                        <span>Core High-Yield Chapters ({selectedBook.keyChapters.length})</span>
                      </h3>

                      <div className="relative w-full sm:w-64">
                        <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-sepia-400" />
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search chapter or topic..."
                          className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-sepia-300 dark:border-slate-700 bg-sepia-50 dark:bg-slate-800 text-xs text-sepia-900 dark:text-slate-100 focus:outline-hidden focus:ring-1 focus:ring-saffron-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2.5 max-h-[500px] overflow-y-auto pr-1 no-scrollbar">
                      {filteredChapters.map((ch, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-2xl border border-sepia-200 dark:border-slate-800 bg-sepia-50/50 dark:bg-slate-800/40 hover:bg-white dark:hover:bg-slate-800 transition-all flex flex-col sm:flex-row sm:items-start justify-between gap-3"
                        >
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                              <span className="w-6 h-6 rounded-md bg-saffron-600 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                                {ch.ch}
                              </span>
                              <h4 className="font-bold text-sm text-sepia-900 dark:text-slate-100">
                                {ch.name}
                              </h4>
                            </div>
                            <p className="text-xs text-sepia-600 dark:text-slate-400 pl-8">
                              {ch.topics}
                            </p>
                          </div>

                          <button
                            onClick={() => onStartTopicPractice?.(ch.name)}
                            className="self-end sm:self-center shrink-0 px-3 py-1.5 rounded-xl bg-saffron-600/10 hover:bg-saffron-600 text-saffron-700 hover:text-white dark:text-amber-400 dark:hover:text-white text-xs font-bold transition-all flex items-center space-x-1"
                          >
                            <span>Practice MCQs</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>
          )}

        </div>
      )}

      {/* Mode 2: Syllabus Mapping Matrix */}
      {activeTab === 'syllabus-map' && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase text-sepia-600 dark:text-slate-400 mr-2">
              Filter Module:
            </span>
            {['All', 'World Physical', 'Natural Resources', 'Industries', 'Geophysical Phenomena', 'Indian Geography'].map(m => (
              <button
                key={m}
                onClick={() => setSelectedModule(m)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedModule === m
                    ? 'bg-saffron-600 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-900 text-sepia-700 dark:text-slate-300 border border-sepia-300/60 dark:border-slate-800'
                }`}
              >
                {m}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {syllabusMapping.map((item, idx) => (
              <div 
                key={idx}
                className="rounded-3xl border border-sepia-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4 shadow-xs"
              >
                <div className="space-y-1">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">
                    UPSC GS-I & State PSCs
                  </span>
                  <h3 className="font-display font-bold text-lg text-sepia-900 dark:text-slate-100">
                    {item.module}
                  </h3>
                </div>

                {item.submodules ? (
                  <div className="space-y-3">
                    {item.submodules.map((sub, sIdx) => (
                      <div key={sIdx} className="p-3.5 rounded-2xl bg-sepia-50 dark:bg-slate-800/60 border border-sepia-200 dark:border-slate-700/60 space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-sm text-saffron-700 dark:text-amber-400">
                            {sub.name}
                          </h4>
                          <span className="text-[10px] font-mono text-sepia-500">
                            {sub.topics.length} Subtopics
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {sub.topics.map((t, tIdx) => (
                            <span key={tIdx} className="px-2 py-0.5 text-[11px] rounded bg-white dark:bg-slate-900 border border-sepia-200 dark:border-slate-700 text-sepia-800 dark:text-slate-300">
                              {t}
                            </span>
                          ))}
                        </div>
                        <p className="text-xs text-sepia-600 dark:text-slate-400 pt-1 border-t border-sepia-200/60 dark:border-slate-700/60">
                          <strong>Standard Sources:</strong> {sub.primaryBooks}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {item.topics.map((t, tIdx) => (
                        <span key={tIdx} className="px-2.5 py-1 text-xs rounded-lg bg-sepia-50 dark:bg-slate-800 border border-sepia-200 dark:border-slate-700 text-sepia-800 dark:text-slate-200 font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="p-3 rounded-xl bg-saffron-50 dark:bg-saffron-950/30 border border-saffron-200 dark:border-saffron-900/50 text-xs text-sepia-800 dark:text-slate-300">
                      <strong>Recommended Reading:</strong> {item.primaryBooks}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mode 3: Toppers' Study Strategy */}
      {activeTab === 'strategy' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-sepia-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-saffron-100 dark:bg-saffron-900/40 text-saffron-600 dark:text-amber-400 flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="font-display font-bold text-lg text-sepia-900 dark:text-slate-100">
              The 3-Tier Book Pyramid
            </h3>
            <p className="text-xs sm:text-sm text-sepia-700 dark:text-slate-300 leading-relaxed">
              <strong>Tier 1: Foundation</strong> — Read NCERT Class 11 (Physical & India) cover-to-cover twice. Over 60% of factual questions in Prelims stem directly from diagrams and tables in these two books.<br /><br />
              <strong>Tier 2: Conceptual Mastery</strong> — G.C. Leong for Landforms, Vulcanism, and all 12 World Climates. Prof. Majid Husain for Indian physiography, river basins, and mineral belts.<br /><br />
              <strong>Tier 3: Value Addition</strong> — Savindra Singh for advanced geomorphological theories; D.R. Khullar for economic and regional data.
            </p>
          </div>

          <div className="rounded-3xl border border-sepia-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="font-display font-bold text-lg text-sepia-900 dark:text-slate-100">
              The Causal Flow Principle
            </h3>
            <p className="text-xs sm:text-sm text-sepia-700 dark:text-slate-300 leading-relaxed">
              Never study Indian or World geography as isolated facts. Master the unbroken causal chain:<br /><br />
              $$\text{Tectonics} \to \text{Relief} \to \text{Climate} \to \text{Soils} \to \text{Vegetation} \to \text{Agriculture} \to \text{Settlement}$$<br />
              When you understand WHY the Deccan Traps consist of basalt (Réunion hotspot during the Cretaceous), you automatically know WHY its soil is black clayey Vertisol, WHY it retains moisture, and WHY it grows cotton!
            </p>
          </div>

          <div className="rounded-3xl border border-sepia-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="font-display font-bold text-lg text-sepia-900 dark:text-slate-100">
              Map-Centric Drilling
            </h3>
            <p className="text-xs sm:text-sm text-sepia-700 dark:text-slate-300 leading-relaxed">
              Always study with an interactive atlas or blank map beside you. In UPSC Prelims:<br /><br />
              • River tributaries must be memorized strictly in downstream flow direction (Left-bank vs Right-bank).<br />
              • Mountain passes must be memorized with their strategic highway routes (e.g. Zoji La on NH-1, Banihal on NH-44).<br />
              • World ocean currents must be linked to desert locations along the western coastlines.
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
