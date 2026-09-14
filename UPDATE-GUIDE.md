# BHARAT ATLAS MASTER — UPDATE & ARCHITECTURE GUIDE

This guide explains the architectural transformation of `geography-of-india` from its legacy prototype to **Bharat Atlas Master v2.0**, and how to maintain, extend, and update its datasets and components.

---

## 🏛️ Architectural Transformation Summary

| Feature | Legacy Prototype (`legacy_index.html`) | Bharat Atlas Master v2.0 (`src/`) |
| :--- | :--- | :--- |
| **Code Structure** | Monolithic 3,736-line single HTML file | Modular React 18 + Vite 6 component architecture |
| **Styling** | Static inline CSS classes | Tailwind CSS with dynamic Parchment & Night Atlas design tokens |
| **Data Storage** | Hardcoded inside JavaScript script tags | 16 decoupled JSON datasets in `public/data/` |
| **Questions** | Minimal sample questions | **500 verified bilingual questions** with 3-level hints & UPSC traps |
| **Maps** | Basic static SVG layout | Georeferenced vector map with 6 toggleable layers & blind map drill |
| **Physics** | Static text descriptions | Interactive 8-stage monsoon engine & topographic cross-sections |
| **Exams** | None | Full 100Q UPSC Prelims exam simulator with TCS iON palette & -0.66 marks |
| **State Persistence** | Transient session state | Offline-first `localStorage` with JSON export/import and daily streak |

---

## 📁 Directory Structure

```
geography-of-india/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions deploy to GitHub Pages
├── public/
│   ├── .nojekyll                  # Prevents Jekyll processing on GitHub Pages
│   ├── icon.svg                   # High-res vector compass emblem
│   └── data/                      # 16 Decoupled JSON Datasets
│       ├── master-flow.json       # 16 causal stations
│       ├── physiography.json      # 6 divisions + subsections
│       ├── rivers.json            # 14 major river systems & tributaries
│       ├── passes-peaks.json      # 36 passes & peaks with coordinates
│       ├── climate-monsoon.json   # 8-stage monsoon physics
│       ├── soils-india.json       # 8 ICAR soil orders & chemistry
│       ├── vegetation-forests.json# 6 ISFR forest classifications
│       ├── minerals-energy.json   # Cratons, Gondwana coal & NCMM critical minerals
│       ├── multi-purpose-projects.json # 12 landmark dams & barrages
│       ├── disaster-geography.json# BIS Seismic zones, cyclones, GLOFs
│       ├── biodiversity-protected.json # Biosphere reserves & Ramsar sites
│       ├── transport-infrastructure.json # DFCs, Golden Quadrilateral, Ports
│       ├── economic-human-geo.json# 2011 Census metrics & industrial clusters
│       ├── prelims-pyqs.json      # Official 2015-2026 UPSC/PSC question papers
│       ├── mock-presets.json      # Exam configurations
│       └── questions.json         # 500 Verified MCQs with hints & explanations
├── src/
│   ├── components/
│   │   ├── common/                # Header, Navigation, GlobalSearchModal
│   │   ├── dashboard/             # Dashboard (Cockpit & Readiness gauge)
│   │   ├── atlas/                 # MasterFlowExplorer, CrossSectionLab, RiverBasinExplorer
│   │   ├── maplab/                # InteractiveMapLab, MapPointingDrill
│   │   ├── simulators/            # MonsoonSimulator, CropLocationGame
│   │   ├── practice/              # PracticeArena, FlashcardDeck, MistakesNotebook
│   │   ├── mock/                  # ExamSimulator
│   │   └── tools/                 # PyqExplorer, BackupSync
│   ├── utils/
│   │   ├── dataManager.js         # LocalStorage, attempts, streak, bookmarks, backup
│   │   ├── readinessCalculator.js # Readiness Index (0-100) & topic weights
│   │   └── mapProjections.js      # Lat/Lon to SVG coordinate projection math
│   ├── App.jsx                    # Master state & tab orchestrator
│   ├── main.jsx                   # React root entrypoint
│   └── index.css                  # Fonts, scrollbar, and Tailwind directives
├── index.html                     # HTML root template with fonts
├── package.json                   # Project dependencies & scripts
├── tailwind.config.js             # Cartographic design tokens
├── vite.config.js                 # Vite configuration with base: './'
└── legacy_index.html              # Full backup of the original single-page file
```

---

## 🔧 How to Update & Extend

### 1. Adding or Editing Questions
All practice and exam questions live in `public/data/questions.json`. Each question follows this schema:
```json
{
  "id": "geo_q_501",
  "topic": "Drainage & River Systems",
  "subtopic": "Peninsular Drainage",
  "examType": "UPSC Prelims PYQ",
  "difficulty": "Medium",
  "question": "Which of the following is a west-flowing river of the peninsular plateau?",
  "questionHindi": "निम्नलिखित में से कौन सी प्रायद्वीपीय पठार की पश्चिम की ओर बहने वाली नदी है?",
  "options": ["Narmada", "Mahanadi", "Godavari", "Krishna"],
  "optionsHindi": ["नर्मदा", "महानदी", "गोदावरी", "कृष्णा"],
  "correct": 0,
  "hints": [
    "Hint 1: Flows through a fault/rift valley between Vindhyas and Satpuras.",
    "Hint 2: Empties into the Gulf of Khambhat (Arabian Sea).",
    "Hint 3: Famous for the Dhuandhar Falls at Jabalpur."
  ],
  "trapAlert": "Do not confuse east-flowing Mahanadi with west-flowing Narmada.",
  "explanation": "Narmada and Tapi flow westwards through tectonic rift valleys into the Arabian Sea.",
  "explanationHindi": "नर्मदा और तापी विवर्तनिक भ्रंश घाटी से होकर पश्चिम की ओर अरब सागर में गिरती हैं।"
}
```

### 2. Adding a Mountain Pass or Peak Pin
Add a new object to `public/data/passes-peaks.json` with geographical latitude and longitude:
```json
{
  "id": "new_pass",
  "type": "pass",
  "name": "Pass Name",
  "hindi": "दर्रे का नाम",
  "range": "Mountain Range",
  "state": "State or UT",
  "elevationM": 4500,
  "connects": "Region A with Region B",
  "route": "NH-X",
  "importance": "Strategic and exam significance...",
  "lat": 32.5,
  "lon": 77.2
}
```
The `mapProjections.js` utility will automatically calculate its exact SVG canvas position.

### 3. Modifying Syllabus Weightages
Open `src/utils/readinessCalculator.js` and adjust `TOPIC_WEIGHTS`:
```javascript
export const TOPIC_WEIGHTS = {
  'Physiography & Relief': 0.15,
  'Drainage & River Systems': 0.15,
  'Climate & Monsoon': 0.15,
  ...
};
```

---

## 🧪 Testing the Production Build

Run in PowerShell:
```powershell
npm.cmd run build
```
Ensure exit code is 0 and output files are generated in `dist/`.
