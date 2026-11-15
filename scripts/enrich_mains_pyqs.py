import json, os

# Load existing
with open(r"C:\Users\ragha\.gemini\antigravity\scratch\geography-of-india\public\data\mains-pyqs-bank.json", "r", encoding="utf-8") as f:
    existing = json.load(f)

additional_mains = [
  {
    "id": "mains_2022_q03",
    "year": 2022,
    "paper": "GS Paper 1",
    "marks": 10,
    "wordLimit": 150,
    "topic": "Geophysical Hazards & Meteorology",
    "syllabusModule": "Geophysical Phenomena & Disaster Management",
    "question": "Discuss the meaning of colour-coded weather warnings for cyclone prone areas given by India Meteorological Department (IMD).",
    "bookReferences": {
      "ncert": "NCERT Class 11 'India: Physical Environment', Chapter 7: Natural Hazards & Disasters",
      "majidHusain": "Majid Husain 'Geography of India', Chapter 13: Cyclones and Disaster Preparedness",
      "topperNotes": "NDMA Guidelines & IMD Cyclone Protocols"
    },
    "modelAnswerBlueprint": {
      "introduction": "The India Meteorological Department (IMD) issues universal 4-stage colour-coded weather warnings (Green, Yellow, Orange, Red) to alert disaster response agencies and the public about impending severe weather hazards like cyclones, storm surges, and torrential downpours.",
      "colourCodedMatrix": [
        "GREEN (All Clear / No Warning): Indicates tranquil weather conditions with no adverse weather expected. Disaster management authorities maintain normal operational readiness without special mobilization.",
        "YELLOW (Be Updated / Watch): Signals that a weather system is developing and may cause minor disruption over the next 48 to 72 hours. Advises district administrations and citizens to monitor ongoing bulletins.",
        "ORANGE (Be Prepared / Alert): Indicates high likelihood of severe weather (e.g. cyclonic storm landfall within 24–48 hours, wind speeds 65–115 km/h, disruption to transport/power). Triggers pre-positioning of NDRF/SDRF teams, opening of cyclone shelters, and warning fishermen to stay ashore.",
        "RED (Take Action / Warning): Represents extreme danger (Very Severe / Extremely Severe / Super Cyclonic landfall within 24 hours, wind speeds >115 km/h, catastrophic storm surges). Requires mandatory immediate evacuation of vulnerable coastal populations, suspension of train and flight operations, and activation of emergency life-saving protocols."
      ],
      "significanceInDisasterMitigation": [
        "Universal Visual Standard: Eliminates scientific jargon, enabling immediate comprehension across non-technical populations and local Panchayats.",
        "Synchronized Inter-Agency Action: Links directly into Standard Operating Procedures (SOPs) of NDMA, Coast Guard, Navy, and State Disaster Management Authorities (SDMAs).",
        "Zero-Casualty Governance: Proven success during Super Cyclone Phailin (2013), Fani (2019), and Biparjoy (2023) where timely Red Alerts enabled record mass evacuations (>1 million people within 48 hours)."
      ],
      "diagramRecommendation": "Color-coded 4-tier risk ladder diagram (Green -> Yellow -> Orange -> Red) indicating increasing wind speeds, response levels, and lead-time.",
      "conclusion": "IMD's colour-coded early warning architecture exemplifies proactive disaster risk reduction, transitioning India from reactive relief to precision-guided preventive disaster governance."
    }
  },
  {
    "id": "mains_2022_q04",
    "year": 2022,
    "paper": "GS Paper 1",
    "marks": 15,
    "wordLimit": 250,
    "topic": "Energy Resources",
    "syllabusModule": "Mineral & Energy Resources",
    "question": "Examine the potential of wind energy in India and explain the reasons for their limited spatial spread.",
    "bookReferences": {
      "ncert": "NCERT Class 12 'India: People and Economy', Chapter 7: Mineral and Energy Resources, pp. 78-80",
      "majidHusain": "Majid Husain 'Geography of India', Chapter 7: Non-Conventional Energy Belts",
      "topperNotes": "Wind Power.docx & Rajtanil Lecture 24"
    },
    "modelAnswerBlueprint": {
      "introduction": "India ranks 4th globally in installed wind power capacity (~44+ GW), with the National Institute of Wind Energy (NIWE) assessing an onshore exploitable potential of ~695 GW at 120m hub height and over 70 GW offshore potential off Gujarat and Tamil Nadu coasts.",
      "resourcePotential": [
        "Extensive Coastal Fetch: 7,516 km coastline exposed to strong seasonal monsoonal pressure gradients (South-West and North-East monsoons).",
        "High-Altitude Plateau Ridges: Wind gap corridors in the Western Ghats (e.g. Palghat Gap, Muppandal corridor in Kanyakumari, Satara plateau) funnel concentrated, high-velocity air streams.",
        "Offshore Frontier: Shallow continental shelves in the Gulf of Khambhat (Gujarat) and Gulf of Mannar (Tamil Nadu) offer constant, high-capacity-factor offshore winds without land acquisition hurdles."
      ],
      "reasonsForLimitedSpatialSpread": [
        "Geographical & Orographic Clustered Endowments: Wind density is highly localized. Over 85% of installed capacity is concentrated in just 5 states (Tamil Nadu, Gujarat, Maharashtra, Karnataka, Rajasthan). Plains of North and Central India have low average wind speeds (<5 m/s at 100m) due to continental friction and weak pressure gradients.",
        "Seasonal Intermittency: Over 65-70% of wind generation occurs during the 4 monsoonal months (May to August). Winters and transition months witness substantial generation drops, requiring thermal/battery back-up.",
        "Grid Integration & Evacuation Bottlenecks: Major wind sites are located in remote coastal/desert regions far from industrial demand centers, demanding massive capital expenditure on Green Energy Corridors (GEC) and high-voltage transmission lines.",
        "High Land Footprint & Environmental Conflicts: Large land requirements clash with agriculture and wildlife (e.g. transmission lines causing mortality to the critically endangered Great Indian Bustard in Rajasthan).",
        "Financial Strains of DISCOMs: Delayed payments and renegotiation of Power Purchase Agreements (PPAs) by state utilities stifle fresh capital investment."
      ],
      "diagramRecommendation": "Map of India highlighting major wind corridors: Muppandal (TN), Jaisalmer (Rajasthan), Gulf of Khambhat (Gujarat), and Satara/Sangli (Maharashtra).",
      "conclusion": "To transcend spatial limitations, India must deploy hybrid Wind-Solar projects, repower older low-hub turbines with modern 3+ MW machines, and swiftly launch offshore wind tenders under the National Offshore Wind Energy Policy."
    }
  },
  {
    "id": "mains_2021_q03",
    "year": 2021,
    "paper": "GS Paper 1",
    "marks": 10,
    "wordLimit": 150,
    "topic": "Geomorphology & Climatology",
    "syllabusModule": "World Physical Geography",
    "question": "Briefly mention the alignment of major mountain ranges of the world and explain their impact on local weather conditions with examples.",
    "bookReferences": {
      "ncert": "NCERT Class 11 'Fundamentals of Physical Geography', Chapter 10: Atmospheric Circulation and Weather Systems",
      "gcLeong": "G.C. Leong 'Certificate Physical and Human Geography', Orographic Dynamics",
      "topperNotes": "Sunep Jamir MRG1 P1 & Rajtanil Lecture 3"
    },
    "modelAnswerBlueprint": {
      "introduction": "Major mountain ranges exhibit distinct spatial alignments shaped by global plate tectonics: North-South cordilleras (Rockies, Andes) and East-West alpine belts (Himalayas, Alps, Pyrenees, Atlas), each exerting profound control over regional atmospheric thermodynamics.",
      "alignmentAndLocalWeatherImpact": [
        "North-South Alignment (Rockies & Andes): (a) Funneling of Polar and Tropical Air Masses: The absence of an east-west barrier in North America allows Arctic blizzards to plunge unimpeded south into the Gulf of Mexico, while warm Gulf moisture surges north, creating 'Tornado Alley'. (b) Foehn / Chinook Winds: Westerly winds ascending the windward slopes descend the eastern leeward slopes as warm, dry katabatic winds ('Chinook' or snow-eater in Rockies; 'Zonda' in Andes), melting snow and raising winter temperatures by 15°C within hours.",
        "East-West Alignment (Himalayas & Alps): (a) Climatic Divide & Shielding: The Himalayas (East-West arc for 2,400 km) act as an impenetrable meteorological wall. They block freezing Siberian polar winds from entering the Indian subcontinent in winter and trap South-West monsoon winds, forcing torrential orographic rainfall across the Indo-Gangetic Plains. (b) Cold Katabatic Winds (Mistral & Bora): Alps shield the Mediterranean basin from northern cold air, but local valley gaps funnel severe cold winds (Mistral in Rhone valley, Bora on Adriatic coast)."
      ],
      "diagramRecommendation": "Global sketch highlighting N-S Rockies/Andes with Chinook descent vs E-W Himalayas blocking Siberian cold and trapping SW monsoon.",
      "conclusion": "Mountain alignment serves as the primary planetary baffle, determining moisture trajectories, temperature inversions, and local micro-climatic regimes."
    }
  },
  {
    "id": "mains_2020_q03",
    "year": 2020,
    "paper": "GS Paper 1",
    "marks": 15,
    "wordLimit": 250,
    "topic": "Water Resources & River Systems",
    "syllabusModule": "Indian Geography — Water Resources & Drainage",
    "question": "The interlinking of rivers can provide viable solutions to the multi-dimensional inter-related problems of droughts, floods and interrupted navigation. Critically examine.",
    "bookReferences": {
      "ncert": "NCERT Class 11 'India: Physical Environment', Chapter 3: Drainage Systems; Class 12 'India: People and Economy', Ch 6",
      "majidHusain": "Majid Husain 'Geography of India', Chapter 6: Water Resources (National Perspective Plan)",
      "topperNotes": "Water Dispute.docx & Sunep Jamir MRG2 P1 (Dying Rivers of India)"
    },
    "modelAnswerBlueprint": {
      "introduction": "The National River Interlinking Project (NRLP), managed by the National Water Development Agency (NWDA), envisions linking 30 river basins (14 Himalayan and 16 Peninsular links) through ~15,000 km of canals to transfer 174 billion cubic meters of surplus floodwater to water-deficit regions.",
      "potentialSolutions": [
        "Mitigation of Floods and Droughts Paradox: Transfers surplus flood discharge from perennial snow-fed basins (Ganga, Brahmaputra, Mahanadi) to chronically drought-prone tracts (Marathwada, Rayalaseema, Saurashtra, Bundelkhand through Ken-Betwa link).",
        "Irrigation & Food Security: Projected to expand net irrigated area by ~35 million hectares, stabilizing agrarian distress and buffering against monsoon failures.",
        "Clean Hydropower Generation: Potential to harness ~34,000 MW of hydroelectric power at dam transfer nodes, augmenting green energy baseload.",
        "Inland Navigation (National Waterways): Inter-basin canal networks maintain perennial navigable depths (3–4 meters draft), slashing freight logistics costs (Sagarmala / Jal Marg Vikas)."
      ],
      "criticalChallengesAndDownsides": [
        "Ecological Disruption of Riverine Regimes: Reducing freshwater outflows to estuaries alters salinity gradients, decimating deltaic ecosystems (Sundarbans mangrove degradation) and reducing sediment replenishment, accelerating coastal erosion.",
        "Submergence of Critical Habitats: The Ken-Betwa link will submerge over 6,000 hectares of Panna Tiger Reserve, fragmenting core wildlife corridors.",
        "Massive Socio-Economic Displacement: Estimated to displace ~1.5 million people, predominantly indigenous tribal communities, triggering rehabilitation crises.",
        "Federal Inter-State Water Conflicts: Water is a State list subject (Entry 17). States contest 'surplus' declarations (e.g. Kerala opposes Pamba-Achankovil-Vaigai link; Odisha opposes Mahanadi-Godavari link).",
        "Enormous Capital Cost: Estimated project expenditure exceeds ₹10 lakh crore, raising concerns over economic return compared to decentralized watershed alternatives."
      ],
      "diagramRecommendation": "Map sketch showing key proposed links: Ken-Betwa, Damanganga-Pinjal, and Godavari-Cauvery link alignments.",
      "conclusion": "Rather than monolithic mega-canals, priority should be accorded to intra-state links, decentralized micro-watershed development, rainwater harvesting, and ecological flow (E-flow) protection under integrated water resource management (IWRM)."
    }
  },
  {
    "id": "mains_2018_q02",
    "year": 2018,
    "paper": "GS Paper 1",
    "marks": 10,
    "wordLimit": 150,
    "topic": "Geomorphology & Geotectonics",
    "syllabusModule": "World Physical Geography",
    "question": "Define mantle plume and explain its role in plate tectonics.",
    "bookReferences": {
      "ncert": "NCERT Class 11 'Fundamentals of Physical Geography', Chapter 3: Interior of the Earth & Chapter 4: Plate Tectonics",
      "gcLeong": "G.C. Leong 'Certificate Physical and Human Geography', Vulcanism",
      "topperNotes": "Sunep Jamir MRG1 P1 (Hotspot Volcanoes & Plume Dynamics)"
    },
    "modelAnswerBlueprint": {
      "introduction": "A mantle plume (postulated by J. Tuzo Wilson and W.J. Morgan) is an upwelling of abnormally hot rock within the Earth's mantle that originates from the core-mantle boundary (Gutenberg Discontinuity at ~2,900 km depth, the D'' layer) and ascends through the mantle as a buoyant diapir.",
      "characteristicsAndMechanics": [
        "Mushroom-Headed Structure: Comprises a bulbous hot head that spreads beneath the lithosphere and a narrow trailing conduit/tail feeding magma continuously for tens of millions of years.",
        "Stationary Hotspots: Unlike tectonic plates which continuously glide over the asthenosphere, mantle plumes remain relatively stationary in the deep mantle.",
        "Decompression Melting: As the hot plume reaches shallower depths, lowering of lithostatic pressure induces massive partial melting, erupting as intra-plate basaltic volcanism."
      ],
      "roleInPlateTectonics": [
        "Continental Rifting & Supercontinent Breakup: The thermal doming and outward dragging forces of large plume heads (super-plumes) generate triple-junction radial rift systems. E.g., The Afar plume head is actively tearing the African continent apart along the East African Rift System.",
        "Hotspot Island Chains & Plate Motion Tracers: As a tectonic plate moves across a stationary mantle plume, an age-progressive linear chain of volcanic islands and seamounts is formed. The Hawaiian-Emperor Seamount Chain tracks the Pacific Plate's northwesterly drift and a 43-million-year-old motion change.",
        "Flood Basalt Provinces (Large Igneous Provinces - LIPs): Initial impingement of massive plume heads causes catastrophic outpourings of flood basalts. E.g., The Deccan Traps formed when the Indian plate glided over the Réunion plume ~66 million years ago; Columbia River Basalts (Yellowstone plume).",
        "Driving Mantle Convection: Plumes act as the primary ascending thermal limbs in global whole-mantle convective heat transfer, balancing cold descending oceanic slabs at subduction zones."
      ],
      "diagramRecommendation": "Cross-sectional sketch showing core-mantle boundary D'' layer -> Ascending narrow plume conduit -> Bulbous plume head impinging on moving lithospheric plate -> Linear hotspot track (Hawaii).",
      "conclusion": "Mantle plumes provide the indispensable geodynamic link connecting thermal turbulence in the Earth's outer core to surface continental rifting, volcanism, and plate velocity reconstructions."
    }
  },
  {
    "id": "mains_2017_q01",
    "year": 2017,
    "paper": "GS Paper 1",
    "marks": 10,
    "wordLimit": 150,
    "topic": "Cryosphere & Climate Dynamics",
    "syllabusModule": "World Physical & Environmental Shifts",
    "question": "How does the Cryosphere affect the global climate?",
    "bookReferences": {
      "ncert": "NCERT Class 11 'Fundamentals of Physical Geography', Chapter 12: World Climate and Climate Change",
      "topperNotes": "Sunep Jamir MRG2 P2 (Melting of Glaciers & Climate Change Impact)"
    },
    "modelAnswerBlueprint": {
      "introduction": "The Cryosphere encompasses all portions of Earth's surface where water is in solid form—including continental ice sheets, mountain glaciers, sea ice, snow cover, and permafrost—functioning as one of the most critical regulators of planetary energy balance.",
      "climaticInfluenceMechanisms": [
        "Surface Albedo Feedback (Planetary Radiative Cooling): Fresh snow and sea ice possess exceptionally high albedo (reflecting 80–90% of incoming solar radiation back into space). Melting replaces bright ice with dark ocean/land (albedo ~10%), creating a positive feedback loop (Arctic Amplification) that accelerates global warming.",
        "Thermohaline Ocean Circulation Engine: Sea ice formation in the Arctic and Antarctic expels brine (salt), producing cold, highly dense, saline waters that sink to form North Atlantic Deep Water (NADW) and Antarctic Bottom Water (AABW). This drives the global ocean conveyor belt (AMOC), distributing tropical heat toward higher latitudes.",
        "Permafrost Carbon & Methane Reservoir: Arctic permafrost locks ~1,500 billion tonnes of organic carbon (twice the atmospheric carbon content). Permafrost thawing releases methane (CH4, with 28x warming potential of CO2) and CO2, amplifying the greenhouse effect.",
        "Atmospheric Pressure & Jet Stream Modulation: Temperature contrasts between ice-covered poles and warm equator drive the latitudinal temperature gradient that fuels the high-velocity Polar Jet Stream. Cryospheric warming weakens this gradient, causing erratic jet stream meandering and extreme weather stalls."
      ],
      "diagramRecommendation": "Diagram showing the Ice-Albedo Positive Feedback Loop: Temperature Rises -> Ice Melts -> Dark Ocean Exposed -> More Solar Absorption -> Further Warming.",
      "conclusion": "The Cryosphere is Earth's primary climatic stabilizer; safeguarding its integrity through aggressive global emission reductions is foundational to planetary climate stability."
    }
  },
  {
    "id": "mains_2017_q02",
    "year": 2017,
    "paper": "GS Paper 1 / GS-3",
    "marks": 15,
    "wordLimit": 250,
    "topic": "Disaster Management Frameworks",
    "syllabusModule": "Geophysical Hazards & Disasters",
    "question": "Mention the core strategies of the Sendai Framework for Disaster Risk Reduction (2015-2030).",
    "bookReferences": {
      "ncert": "NCERT Class 11 'India: Physical Environment', Chapter 7: Natural Hazards & Disasters",
      "topperNotes": "Sendai UN PDF & NDMA Guidelines"
    },
    "modelAnswerBlueprint": {
      "introduction": "Adopted at the Third UN World Conference on Disaster Risk Reduction in Sendai, Japan (2015), the Sendai Framework succeeded the Hyogo Framework (2005-2015) as the premier 15-year voluntary global blueprint to prevent new and reduce existing disaster risk.",
      "fourCorePrioritiesForAction": [
        "Priority 1: Understanding Disaster Risk: Policies must be grounded in multi-hazard risk assessments, disaster baseline data, and scientific modeling of hazard, exposure, and vulnerability (e.g. India's National Disaster Management Information System - NDMIS).",
        "Priority 2: Strengthening Disaster Risk Governance: Clear mandates, inter-institutional coordination across administrative levels (NDMA, SDMA, DDMA), and legal frameworks (DM Act 2005) to manage disaster risk across all public and private sectors.",
        "Priority 3: Investing in Disaster Risk Reduction for Resilience: Direct public and private investment in structural (retrofitting, flood bypass canals, coastal bio-shields) and non-structural measures (micro-insurance, social safety nets, land-use zoning).",
        "Priority 4: Enhancing Disaster Preparedness for Effective Response and to 'Build Back Better': Integrating risk reduction into recovery, rehabilitation, and reconstruction phases to ensure that rebuilt infrastructure is resilient to future shocks."
      ],
      "sevenGlobalTargets (Sendai Targets A to G)": [
        "Target A: Substantially reduce global disaster mortality by 2030.",
        "Target B: Substantially reduce the number of affected people globally.",
        "Target C: Reduce direct disaster economic loss in relation to global GDP.",
        "Target D: Substantially reduce disaster damage to critical infrastructure and disruption of basic services.",
        "Target E: Substantially increase the number of countries with national and local DRR strategies (achieved in India via National Disaster Management Plan - NDMP 2016/2019 aligned to Sendai).",
        "Target F: Substantially enhance international cooperation to developing countries.",
        "Target G: Substantially increase the availability of and access to multi-hazard early warning systems (MHEWS)."
      ],
      "diagramRecommendation": "Sendai Framework Architecture Diagram: 4 Priorities for Action feeding into 7 Global Targets (A to G) under the overarching goal of Resilience.",
      "conclusion": "The Sendai Framework signifies a paradigm shift from emergency disaster response to ex-ante disaster risk prevention, encapsulated in India's Prime Minister's 10-Point Agenda on DRR."
    }
  },
  {
    "id": "mains_2016_q02",
    "year": 2016,
    "paper": "GS Paper 1",
    "marks": 10,
    "wordLimit": 150,
    "topic": "Climatology & Meteorology",
    "syllabusModule": "World Physical Geography",
    "question": "Discuss the concept of air mass and explain its role in macro-climatic changes.",
    "bookReferences": {
      "ncert": "NCERT Class 11 'Fundamentals of Physical Geography', Chapter 10: Atmospheric Circulation and Weather Systems, pp. 88-91",
      "gcLeong": "G.C. Leong 'Certificate Physical and Human Geography', Air Masses & Fronts",
      "topperNotes": "Sunep Jamir MRG1 P1 & Rajtanil Lecture 6"
    },
    "modelAnswerBlueprint": {
      "introduction": "An air mass is a colossal body of air (spanning thousands of square kilometers and several kilometers in depth) characterized by relatively uniform horizontal temperature and moisture properties acquired over an extensive, homogeneous source region.",
      "characteristicsAndClassification": [
        "Source Regions: Require flat, uniform terrain (oceans, deserts, ice sheets) with light, stagnant winds under high pressure systems to allow air to assimilate thermodynamic traits.",
        "Primary Classification: (1) Maritime Tropical (mT) — warm, moist, unstable; (2) Continental Tropical (cT) — hot, dry, stable; (3) Maritime Polar (mP) — cold, damp, cloudy; (4) Continental Polar (cP) — bitterly cold, dry, dense; (5) Continental Arctic (cA) — ultracold."
      ],
      "roleInMacro-ClimaticChangesAndWeather": [
        "Frontogenesis & Extra-Tropical Cyclones: When two contrasting air masses meet (e.g. cold dense cP meets warm moist mT along the Polar Front at 60° N), they do not mix immediately. A sloping boundary zone (Front) is created. The warm air is forced to rise over the cold wedge, initiating frontal cyclogenesis, heavy precipitation, and blizzard storms across Europe and North America.",
        "Monsoon Circulation Systems: The South-West Monsoon over India represents the macro-scale invasion of an equatorial Maritime Tropical (mT) air mass that originated as maritime polar/subtropical air in the southern Indian Ocean, crosses the equator, becomes intensely heated and moisture-laden, and produces the Indian rainy season.",
        "Temperature Inversions & Extreme Weather: Subtropical subsidence air masses generate persistent thermal inversions that maintain arid desert climates (e.g. cT over Sahara), while polar continental air mass outbreaks cause severe freeze damage across mid-latitudes."
      ],
      "diagramRecommendation": "Cross-sectional sketch of Warm Front vs Cold Front showing contrasting air masses (cP vs mT), sloping boundary, and cloud generation (Nimbostratus/Cumulonimbus).",
      "conclusion": "Air masses serve as the principal thermodynamic agents of planetary heat transport, driving middle and high-latitude storm tracks and global seasonal weather oscillations."
    }
  },
  {
    "id": "mains_2013_q03",
    "year": 2013,
    "paper": "GS Paper 1",
    "marks": 10,
    "wordLimit": 150,
    "topic": "Geomorphology & Fluvial Hydrology",
    "syllabusModule": "Physical Geography of India — Drainage",
    "question": "There is no formation of deltas by rivers of the Western Ghats. Why?",
    "bookReferences": {
      "ncert": "NCERT Class 11 'India: Physical Environment', Chapter 3: Drainage System, pp. 27-30",
      "majidHusain": "Majid Husain 'Geography of India', Chapter 2: Drainage System of Peninsular India",
      "topperNotes": "Sunep Jamir MRG1 P3 & Rajtanil Lecture 11"
    },
    "modelAnswerBlueprint": {
      "introduction": "While east-flowing Peninsular rivers (Mahanadi, Godavari, Krishna, Cauvery) create vast deltaic plains along the Bay of Bengal coast, the west-flowing rivers originating in the Western Ghats (Sharavati, Mandovi, Zuari, Periyar, Bharathapuzha) form steep estuaries rather than deltas.",
      "geomorphologicalReasons": [
        "Short Course & Steep Gradient: The Western Ghats stand as a precipitous escarpment close to the Arabian Sea. West-flowing rivers have extremely short courses (typically 50–150 km) and plunge down steep gradients, generating high velocities that flush sediments straight out to sea without deposition.",
        "Absence of Fine Sediment Load: These rivers flow over hard, erosion-resistant Archaean crystalline rocks and basaltic rocks, resulting in minimal silt and suspended sediment load compared to long meandering east-flowing rivers draining extensive sedimentary basins.",
        "Active Coastal Faulting & Submerged Escarpment: The western continental margin is a down-faulted, submerged coast with deep offshore waters close to the shore. Deep waters accommodate large volumes of water without shallow depositional shelf accretion.",
        "Intense Tidal Scouring (Estuarine Dynamics): Strong tidal action and high wave energy in the Arabian Sea actively scour river mouths, sweeping sediments offshore into deep ocean canyons and forming open funnel-shaped estuaries (ideal for natural ports like Mormugao and Kochi).",
        "Absence of Extensive Distributary Bifurcation: The narrow coastal strip (Konkan/Malabar) provides insufficient horizontal space for river velocities to attenuate and branch into deltaic distributaries."
      ],
      "diagramRecommendation": "Cross-section comparison of Peninsular India: Steep Western Ghats escarpment dropping directly into deep Arabian Sea (Estuary) vs Gentle eastern slope draining over 1,400 km into shallow Bay of Bengal shelf (Delta).",
      "conclusion": "The lack of deltas on the west coast is a direct geomorphic consequence of Peninsular tilting, high fall gradients, resistant lithology, and vigorous marine tidal scouring."
    }
  }
]

combined = existing + additional_mains
with open(r"C:\Users\ragha\.gemini\antigravity\scratch\geography-of-india\public\data\mains-pyqs-bank.json", "w", encoding="utf-8") as f:
    json.dump(combined, f, indent=2, ensure_ascii=False)

print(f"Total UPSC Mains PYQs in public/data/mains-pyqs-bank.json: {len(combined)}")
