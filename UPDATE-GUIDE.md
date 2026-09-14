# BHARAT ATLAS MASTER — UPDATE & ARCHITECTURE GUIDE

This guide explains the architectural features of **Bharat Atlas Master v2.0**, how datasets are organized, and how to maintain, extend, and update its Disaster Management and UPPSC PCS Special modules.

---

## 📁 Directory Structure & Datasets

```
geography-of-india/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions deploy to GitHub Pages
├── public/
│   ├── .nojekyll                  # Prevents Jekyll processing on GitHub Pages
│   ├── icon.svg                   # High-res vector compass emblem
│   └── data/                      # 17 Decoupled JSON Datasets
│       ├── master-flow.json       # 16 causal stations
│       ├── physiography.json      # 6 divisions + subsections
│       ├── rivers.json            # 14 major river systems & tributaries
│       ├── passes-peaks.json      # 36 passes & peaks with coordinates
│       ├── climate-monsoon.json   # 8-stage monsoon physics
│       ├── soils-india.json       # 8 ICAR soil orders & chemistry
│       ├── vegetation-forests.json# 6 ISFR forest classifications
│       ├── minerals-energy.json   # Cratons, Gondwana coal & NCMM critical minerals
│       ├── multi-purpose-projects.json # 12 landmark dams & barrages
│       ├── disaster-geography.json# NDMA 2005, Sendai, BIS Seismic Zones II-V, Cyclones, GLOFs
│       ├── uppsc-special-geography.json # UPPSC Papers 5 & 6: UP Relief, Drainage, Soils, Ramsar, Disasters
│       ├── biodiversity-protected.json # Biosphere reserves & Ramsar sites
│       ├── transport-infrastructure.json # DFCs, Golden Quadrilateral, Ports
│       ├── economic-human-geo.json# 2011 Census metrics & industrial clusters
│       ├── prelims-pyqs.json      # Official 2015-2026 UPSC/PSC question papers
│       ├── mock-presets.json      # Exam configurations
│       └── questions.json         # 525+ Verified MCQs with hints & explanations
├── src/
│   ├── components/
│   │   ├── common/                # Header, Navigation, GlobalSearchModal
│   │   ├── dashboard/             # Dashboard (Cockpit & Readiness gauge)
│   │   ├── atlas/                 # MasterFlowExplorer, CrossSectionLab, RiverBasinExplorer
│   │   ├── maplab/                # InteractiveMapLab, MapPointingDrill
│   │   ├── simulators/            # MonsoonSimulator, CropLocationGame
│   │   ├── disaster/              # DisasterManagementLab (Hazards, Seismic, Sendai, Case Studies)
│   │   ├── uppsc/                 # UppscGeoSpecial (UP Physiography, Ken-Betwa, Soils, Ramsar, Disasters)
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
└── vite.config.js                 # Vite configuration with base: './'
```

---

## 🔧 Managing & Extending Study Material

### 1. Disaster Management Module (`public/data/disaster-geography.json`)
The disaster dataset contains three primary structures:
- `frameworks`: Contains statutory details for the Disaster Management Act 2005 (3-tier governance), the Sendai Framework for Disaster Risk Reduction 2015-2030 (4 Priorities & 7 Targets), and the PM's 10-Point Agenda on DRR.
- `hazards`: Detailed geomorphic etiology, BIS seismic zones, IMD color alert stages, hotspots, and structural/non-structural mitigation strategies.
- `caseStudies`: Real-world disaster forensic analyses (South Lhonak GLOF 2023, Chamoli Avalanche 2021, Cyclone Fani 2019).

### 2. UPPSC PCS Geography Special (`public/data/uppsc-special-geography.json`)
Tailored directly for the revised UPPSC PCS pattern (Mains Papers 5 & 6):
- `physiography`: Bhabar and Terai belts, Gangetic Plain, and Bundelkhand plateau.
- `drainage`: Ganga, Yamuna, Gomti (intra-state origin at Fulhar Jheel / Gomat Taal), Sharda Canal, and Ken-Betwa Link.
- `soilsOfUP`: Alluvial (Khadar/Bhangar), Usar/Reh reclamation, and Bundelkhand soils (*Mar, Kabar, Parwa, Rakar*).
- `disastersInUP`: Terai flood districts, Bundelkhand chronic drought, and Western UP Seismic Zone IV.
- `protectedAreasAndRamsar`: 4 Tiger Reserves (Dudhwa, Pilibhit, Amangarh, Ranipur) and all 10 Ramsar wetland sites in UP.
- `mineralsAndEnergy`: Sonbhadra limestone/coal, Prayagraj silica sand, Banda bauxite, Narora Atomic Power Station, and Rihand Dam.

---

## 🧪 Testing the Production Build

Run in PowerShell:
```powershell
npm.cmd run build
```
Ensure exit code is 0 and output files are generated in `dist/`.
