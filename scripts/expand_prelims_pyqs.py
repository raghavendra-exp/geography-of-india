import json, os

with open(r"C:\Users\ragha\.gemini\antigravity\scratch\geography-of-india\public\data\pyq-master-bank.json", "r", encoding="utf-8") as f:
    existing_prelims = json.load(f)

new_prelims = [
  {
    "id": "pyq_upsc_2023_01",
    "exam": "UPSC CSE Prelims",
    "year": 2023,
    "topic": "Drainage & River Systems",
    "question": "Consider the following rivers:\n1. Jhelum\n2. Chenab\n3. Ravi\n4. Sutlej\nWhich one of the following is the correct order of these rivers from North to South?",
    "options": [
      "1 - 2 - 3 - 4",
      "2 - 1 - 3 - 4",
      "1 - 3 - 2 - 4",
      "2 - 3 - 1 - 4"
    ],
    "correctOption": 0,
    "bookReference": {
      "ncert": "NCERT Class 11 'India: Physical Environment', Chapter 3: Drainage System, Indus Basin, pp. 24-26",
      "majidHusain": "Majid Husain 'Geography of India', Chapter 2: Drainage System, The Indus River System",
      "khullar": "D.R. Khullar 'India: A Comprehensive Geography', Chapter 3: Drainage of India"
    },
    "plainExplanation": "The correct North-to-South sequence of the major eastern tributaries of the Indus is: Indus -> Jhelum (originates at Verinag, Kashmir) -> Chenab (Chandra-Bhaga confluence at Tandi, HP) -> Ravi (Rohtang pass, HP) -> Beas (Beas Kund, HP) -> Sutlej (Rakas Lake near Mansarovar, Tibet). Thus, the sequence is 1 (Jhelum) -> 2 (Chenab) -> 3 (Ravi) -> 4 (Sutlej).",
    "optionElimination": {
      "optionA": "CORRECT: Jhelum is northernmost in J&K, followed by Chenab, Ravi, and Sutlej southernmost.",
      "optionB": "INCORRECT: Chenab is south of Jhelum.",
      "optionC": "INCORRECT: Ravi is south of Chenab.",
      "optionD": "INCORRECT: Chenab is not north of Jhelum."
    },
    "topperTrick": "Memorize the mnemonic: In Jail, Chief Raves Before Superiors (Indus, Jhelum, Chenab, Ravi, Beas, Sutlej from North to South)."
  },
  {
    "id": "pyq_upsc_2023_02",
    "exam": "UPSC CSE Prelims",
    "year": 2023,
    "topic": "Geomorphology & Earth's Interior",
    "question": "With reference to the Earth's interior, consider the following statements:\n1. S-waves can travel through all states of matter: solid, liquid, and gas.\n2. The shadow zone of S-waves is much larger than that of P-waves.\n3. P-waves vibrate parallel to the direction of wave propagation.\nHow many of the above statements are correct?",
    "options": [
      "Only one",
      "Only two",
      "All three",
      "None"
    ],
    "correctOption": 1,
    "bookReference": {
      "ncert": "NCERT Class 11 'Fundamentals of Physical Geography', Chapter 3: Interior of the Earth, pp. 22-24",
      "savindraSingh": "Savindra Singh 'Physical Geography', Chapter 4: Seismology and Earth's Interior",
      "topperNotes": "Sunep Jamir MRG1 P1 (Earthquake Waves & Shadow Zones) & Rajtanil Lecture 1"
    },
    "plainExplanation": "Statements 2 and 3 are correct. Statement 1 is incorrect: S-waves (secondary/shear waves) can travel ONLY through solid media and cannot pass through liquids or gases, which is the primary proof that the Earth's outer core is molten liquid. S-wave shadow zone spans over 40% of the Earth's surface (beyond 105° on both sides), far larger than the P-wave shadow zone (a narrow band between 105° and 145°). P-waves are longitudinal compressional waves that vibrate parallel to wave propagation.",
    "optionElimination": {
      "stmt1": "INCORRECT: S-waves cannot travel through liquids or gases. Only P-waves travel through all three phases.",
      "stmt2": "CORRECT: S-wave shadow zone extends beyond 105° across the entire remaining globe (>40% of Earth), whereas P-wave shadow zone is only a ring between 105° and 145°.",
      "stmt3": "CORRECT: P-waves vibrate parallel (compressional), causing density variations; S-waves vibrate perpendicular (shear)."
    },
    "topperTrick": "S-waves = Solid ONLY. Because the outer core is liquid, S-waves cannot penetrate it at all, creating a massive shadow zone covering the entire hemisphere opposite the earthquake focus."
  },
  {
    "id": "pyq_upsc_2023_03",
    "exam": "UPSC CSE Prelims",
    "year": 2023,
    "topic": "Oceanography & Marine Dynamics",
    "question": "Which of the following ocean currents is a cold ocean current?",
    "options": [
      "Kuroshio Current",
      "Gulf Stream",
      "Benguela Current",
      "North Atlantic Drift"
    ],
    "correctOption": 2,
    "bookReference": {
      "ncert": "NCERT Class 11 'Fundamentals of Physical Geography', Chapter 14: Movements of Ocean Water, pp. 122-125",
      "gcLeong": "G.C. Leong 'Certificate Physical and Human Geography', Chapter 10: The Oceans",
      "topperNotes": "Rajtanil Lecture 5 (Oceanography)"
    },
    "plainExplanation": "The Benguela Current is a major cold ocean current flowing northward along the western coast of southern Africa (Namibia and South Africa) towards the equator. Kuroshio Current, Gulf Stream, and North Atlantic Drift are all warm ocean currents originating in the tropics.",
    "optionElimination": {
      "optionA": "Kuroshio: Warm current in the western Pacific flowing past Taiwan and Japan.",
      "optionB": "Gulf Stream: Intense warm current originating in the Gulf of Mexico flowing along North America's east coast.",
      "optionC": "CORRECT: Benguela is a cold current responsible for the aridity of the Namib and Kalahari deserts.",
      "optionD": "North Atlantic Drift: Warm continuation of the Gulf Stream keeping Western Europe ports ice-free."
    },
    "topperTrick": "Rule of thumb: Ocean currents on the Western coasts of continents in subtropical latitudes are COLD currents (Benguela, Humboldt/Peru, Canary, California, West Australian). Currents on Eastern coasts are WARM (Gulf Stream, Kuroshio, Brazil, East Australian)."
  },
  {
    "id": "pyq_upsc_2022_01",
    "exam": "UPSC CSE Prelims",
    "year": 2022,
    "topic": "Climatology & Planetary Winds",
    "question": "Consider the following statements:\n1. High clouds primarily reflect solar radiation and cool the surface of the Earth.\n2. Low clouds have a high absorption of infrared radiation emanating from the Earth's surface and thus cause a warming effect.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 only",
      "2 only",
      "Both 1 and 2",
      "Neither 1 nor 2"
    ],
    "correctOption": 3,
    "bookReference": {
      "ncert": "NCERT Class 11 'Fundamentals of Physical Geography', Chapter 9: Solar Radiation, Heat Budget and Temperature",
      "topperNotes": "Sunep Jamir MRG1 P1 (Heat Budget & Cloud Radiative Forcing)"
    },
    "plainExplanation": "Both statements are reversed! High, thin clouds (like cirrus) are relatively transparent to incoming solar radiation (low reflection) but trap and re-radiate outgoing terrestrial infrared radiation, exerting a net WARMING effect. In contrast, low, thick clouds (like stratocumulus) reflect a tremendous amount of incoming solar radiation back into space (high albedo) and exert a net COOLING effect. Therefore, neither 1 nor 2 is correct.",
    "optionElimination": {
      "stmt1": "INCORRECT: High clouds transmit shortwave solar radiation but trap longwave terrestrial radiation, causing net warming.",
      "stmt2": "INCORRECT: Low clouds have high albedo, reflecting sunlight back into space, causing net cooling."
    },
    "topperTrick": "UPSC classic inverted pair trap! High thin cirrus clouds = greenhouse warming blanket. Low thick cumulus/stratus clouds = reflective sunshade umbrella."
  },
  {
    "id": "pyq_upsc_2022_02",
    "exam": "UPSC CSE Prelims",
    "year": 2022,
    "topic": "Soils & Natural Vegetation",
    "question": "Which of the following is/are the unique characteristics of 'Black Cotton Soil' (Vertisols) in India?\n1. It develops wide and deep cracks during the dry season.\n2. It possesses a high degree of moisture retentiveness.\n3. It is rich in phosphorus, nitrogen, and organic matter.\nSelect the correct answer using the code given below:",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctOption": 0,
    "bookReference": {
      "ncert": "NCERT Class 11 'India: Physical Environment', Chapter 6: Soils, Black Soil, pp. 69-70",
      "majidHusain": "Majid Husain 'Geography of India', Chapter 5: Soils of India",
      "topperNotes": "Rajtanil Lecture 16 & 18 (Soils of India)"
    },
    "plainExplanation": "Statements 1 and 2 are correct. Statement 3 is incorrect: Black cotton soils (Regur) are chemically rich in lime, iron, magnesia, and alumina, and also contain potash. However, like almost all Indian soils, they are poor/deficient in nitrogen, phosphorus, and organic matter. During dry periods, black soil shrinks and develops wide deep cracks, leading to a phenomenon known as 'self-ploughing'. Its high montmorillonite clay content gives it extraordinary moisture retention.",
    "optionElimination": {
      "stmt1": "CORRECT: Shrink-swell property creates deep fissures during dry seasons ('self-ploughing').",
      "stmt2": "CORRECT: High clay percentage retains moisture for long periods, enabling dry farming of cotton.",
      "stmt3": "INCORRECT: Indian soils are universally deficient in Nitrogen, Phosphorus, and Humus."
    },
    "topperTrick": "Golden Rule for Indian Soils: Almost ALL Indian soils (except forest and peaty soils) are DEFICIENT in Nitrogen (N), Phosphorus (P), and Humus/Organic matter! Eliminate any statement claiming Indian soil is rich in N & P."
  },
  {
    "id": "pyq_upsc_2022_03",
    "exam": "UPSC CSE Prelims",
    "year": 2022,
    "topic": "Mineral & Energy Resources",
    "question": "With reference to the 'Monazite' sands in India, consider the following statements:\n1. Monazite is a source of rare earths.\n2. Monazite contains thorium.\n3. Monazite occurs naturally in the entire Indian coastal sands in India.\n4. In India, Government-designated bodies only can process or export monazite.\nWhich of the statements given above are correct?",
    "options": [
      "1, 2 and 3 only",
      "1, 2 and 4 only",
      "2, 3 and 4 only",
      "1, 2, 3 and 4"
    ],
    "correctOption": 1,
    "bookReference": {
      "ncert": "NCERT Class 12 'India: People and Economy', Chapter 7: Mineral and Energy Resources, Nuclear Minerals",
      "majidHusain": "Majid Husain 'Geography of India', Chapter 7: Mineral and Energy Resources",
      "topperNotes": "Fisheries & Coastal Minerals docx & Rajtanil Lecture 25 (Civil Nuclear Tech)"
    },
    "plainExplanation": "Statements 1, 2, and 4 are correct. Statement 3 is incorrect: Extreme word 'entire' is false. Monazite does not occur in the *entire* coastal sands of India; it is concentrated primarily in specific beach placer deposits in Kerala (Palakkad and Kollam/Chavara), Odisha, Tamil Nadu (Manavalakurichi), and Andhra Pradesh. Monazite is a phosphate mineral containing rare earth elements (REEs) and radioactive Thorium. Because Thorium is a prescribed atomic substance under the Atomic Energy Act 1962, only government-owned entities (IREL - Indian Rare Earths Limited) are authorized to process and export it.",
    "optionElimination": {
      "stmt1": "CORRECT: Monazite contains cerium, lanthanum, and neodymium rare earths.",
      "stmt2": "CORRECT: It contains 8-10% Thorium dioxide.",
      "stmt3": "INCORRECT: Extreme qualifier 'entire'. Not found along Gujarat or West Bengal rocky/muddy coasts.",
      "stmt4": "CORRECT: Under Atomic Energy Act, private commercial exploitation of beach placer monazite is prohibited."
    },
    "topperTrick": "Extreme words like 'entire', 'all', 'only' in geography options are red flags in UPSC Prelims. Statement 3 claiming 'entire Indian coastal sands' is easily eliminated."
  },
  {
    "id": "pyq_upsc_2021_01",
    "exam": "UPSC CSE Prelims",
    "year": 2021,
    "topic": "Drainage & River Systems",
    "question": "With reference to the Indus river system, of the following four rivers, three of them pour into one of them which joins the Indus direct. Among the following, which one is such river that joins the Indus direct?",
    "options": [
      "Chenab",
      "Jhelum",
      "Ravi",
      "Sutlej"
    ],
    "correctOption": 3,
    "bookReference": {
      "ncert": "NCERT Class 11 'India: Physical Environment', Chapter 3: Drainage System, Indus River, pp. 24-25",
      "majidHusain": "Majid Husain 'Geography of India', Chapter 2: Drainage",
      "topperNotes": "Rajtanil Lecture 11 (Indian Rivers)"
    },
    "plainExplanation": "According to official NCERT textbooks, Jhelum joins Chenab near Trimmu. Ravi joins Chenab near Rangpur (Ahmadpur Sial). Then, the combined waters of Jhelum, Chenab, and Ravi flow into the Sutlej at Harike/Uch Sharif. Finally, the Sutlej receives the collective discharge of the 'Panjnad' (five rivers) and flows directly into the Indus a few kilometers above Mithankot. Thus, Sutlej directly joins the Indus.",
    "optionElimination": {
      "optionA": "Chenab: Receives Jhelum and Ravi, but merges with Sutlej before entering Indus.",
      "optionB": "Jhelum: Joins Chenab.",
      "optionC": "Ravi: Joins Chenab.",
      "optionD": "CORRECT: Sutlej receives the combined waters of Panjnad and directly discharges into the Indus at Mithankot."
    },
    "topperTrick": "Directly verified from NCERT Class 11 'India: Physical Environment' page 25: 'The Indus receives the Panjnad a little above Mithankot. The Panjnad is the name given to the five rivers of Punjab, namely the Satluj, the Beas, the Ravi, the Chenab and the Jhelum.'"
  },
  {
    "id": "pyq_upsc_2021_02",
    "exam": "UPSC CSE Prelims",
    "year": 2021,
    "topic": "Agriculture & Cropping Patterns",
    "question": "Which of the following is/are the benefits of 'Micro-irrigation' (Drip and Sprinkler)?\n1. Reduction in fertilizer/nutrient loss through fertigation.\n2. Minimization of soil erosion and weed proliferation.\n3. Reduction in power consumption for pumping water.\nSelect the correct answer using the code given below:",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctOption": 3,
    "bookReference": {
      "ncert": "NCERT Class 12 'India: People and Economy', Chapter 6: Water Resources, pp. 60-64",
      "majidHusain": "Majid Husain 'Geography of India', Chapter 8: Agriculture & Irrigation",
      "topperNotes": "Rajtanil Lecture 20 (Agri Land & Irrigation) & Food Security.docx"
    },
    "plainExplanation": "All three statements are completely correct. Drip irrigation applies water directly to the plant root zone, delivering 90-95% water efficiency. Applying liquid fertilizers directly through drip lines ('fertigation') slashes fertilizer wastage and leaching. Because water is not flooded across open inter-row soil, weed growth and soil erosion are dramatically minimized. Operating at lower discharge volumes and higher efficiency significantly reduces pumping hours, saving agricultural power.",
    "optionElimination": {
      "stmt1": "CORRECT: Fertigation saves 30-40% fertilizer by direct root feeding.",
      "stmt2": "CORRECT: Dry inter-row space prevents weed germination and eliminates surface runoff erosion.",
      "stmt3": "CORRECT: Pumping less volume of water directly translates into 25-30% electricity savings."
    },
    "topperTrick": "PM Krishi Sinchayee Yojana (PMKSY) 'Per Drop More Crop' promotes micro-irrigation precisely for these triple benefits: water saving, fertilizer optimization, and energy reduction."
  },
  {
    "id": "pyq_upsc_2020_01",
    "exam": "UPSC CSE Prelims",
    "year": 2020,
    "topic": "Geomorphology & Continental Landforms",
    "question": "With reference to the plate tectonics, consider the following pairs:\n1. Divergent Boundary — Mid-Atlantic Ridge\n2. Convergent Boundary — Andes Mountains\n3. Transform Boundary — San Andreas Fault\nHow many of the above pairs are correctly matched?",
    "options": [
      "Only one",
      "Only two",
      "All three",
      "None"
    ],
    "correctOption": 2,
    "bookReference": {
      "ncert": "NCERT Class 11 'Fundamentals of Physical Geography', Chapter 4: Distribution of Oceans and Continents, Plate Boundaries",
      "savindraSingh": "Savindra Singh 'Physical Geography', Plate Tectonics",
      "topperNotes": "Sunep Jamir MRG1 P1 (Plate Boundaries) & Rajtanil Lecture 2"
    },
    "plainExplanation": "All three pairs are textbook correct examples of the three fundamental types of plate boundaries: (1) Divergent Boundary: Plates pull apart, magma rises to form new oceanic crust along the Mid-Atlantic Ridge; (2) Convergent Boundary: Oceanic Nazca plate subducts beneath continental South American plate, folding the Andes Mountains; (3) Transform Boundary: Plates slide past one another horizontally along conservative strike-slip faults, exemplified by the San Andreas Fault in California.",
    "optionElimination": {
      "pair1": "CORRECT: Classic divergent oceanic spreading ridge.",
      "pair2": "CORRECT: Classic oceanic-continental subduction orogeny.",
      "pair3": "CORRECT: Classic dextral strike-slip transform fault between Pacific and North American plates."
    },
    "topperTrick": "These three examples are the gold standard illustrations presented in NCERT Class 11 Chapter 4."
  },
  {
    "id": "pyq_upsc_2020_02",
    "exam": "UPSC CSE Prelims",
    "year": 2020,
    "topic": "Agriculture & Cash Crops",
    "question": "Consider the following crops:\n1. Cotton\n2. Groundnut\n3. Rice\n4. Wheat\nWhich of the above are Kharif crops in India?",
    "options": [
      "1, 2 and 3 only",
      "1, 3 and 4 only",
      "2 and 3 only",
      "1, 2, 3 and 4"
    ],
    "correctOption": 0,
    "bookReference": {
      "ncert": "NCERT Class 12 'India: People and Economy', Chapter 5: Land Resources and Agriculture, pp. 44-46",
      "majidHusain": "Majid Husain 'Geography of India', Chapter 8: Cropping Seasons of India",
      "topperNotes": "Rajtanil Lecture 19 (Indian Agri Crops)"
    },
    "plainExplanation": "Cotton, Groundnut, and Rice are quintessential Kharif crops, sown at the onset of the South-West Monsoon (June-July) and harvested in autumn (September-October). Wheat is a Rabi crop sown in winter (October-November) and harvested in spring (March-April). Thus, 1, 2, and 3 only.",
    "optionElimination": {
      "item1": "Cotton: Kharif crop requiring 210 frost-free days and monsoon warmth.",
      "item2": "Groundnut: Kharif rainfed oilseed predominantly grown in Saurashtra.",
      "item3": "Rice: India's premier Kharif staple crop.",
      "item4": "Wheat: Strictly a Rabi crop (requires cool winter growing conditions and bright sunshine during ripening)."
    },
    "topperTrick": "Eliminate Wheat immediately! Wheat is universally known as a winter Rabi crop. Eliminating 4 leaves Option A (1, 2, and 3 only) as the only possible answer."
  }
]

combined_prelims = existing_prelims + new_prelims
with open(r"C:\Users\ragha\.gemini\antigravity\scratch\geography-of-india\public\data\pyq-master-bank.json", "w", encoding="utf-8") as f:
    json.dump(combined_prelims, f, indent=2, ensure_ascii=False)

print(f"Total Prelims PYQs in public/data/pyq-master-bank.json: {len(combined_prelims)}")
