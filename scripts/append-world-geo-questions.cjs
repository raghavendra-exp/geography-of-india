const fs = require('fs');
const path = require('path');

const questionsPath = path.join(__dirname, '..', 'public', 'data', 'questions.json');
const raw = fs.readFileSync(questionsPath, 'utf8');
const questions = JSON.parse(raw);

const newQuestions = [
  {
    id: "geo_q_526",
    topic: "World Physical Geography",
    subtopic: "Geomorphology — Interior of Earth",
    examType: "UPSC Prelims Standard",
    difficulty: "Medium",
    question: "Why do transverse seismic shear waves (S-waves) completely disappear at a depth of approximately 2,900 km within the Earth's interior?",
    questionHindi: "पृथ्वी के आंतरिक भाग में लगभग 2,900 किमी की गहराई पर अनुप्रस्थ भूकंपीय कतरनी तरंगें (S-तरंगें) पूरी तरह से क्यों गायब हो जाती हैं?",
    options: [
      "Because the asthenosphere becomes completely solid",
      "Because S-waves cannot propagate through the liquid molten outer core",
      "Because the magnetic field deflects the seismic rays upward",
      "Because S-waves are converted completely into Rayleigh surface waves"
    ],
    optionsHindi: [
      "क्योंकि दुर्बलता मंडल (एस्थेनोस्फीयर) पूरी तरह ठोस हो जाता है",
      "क्योंकि S-तरंगें तरल पिघले हुए बाह्य कोर के माध्यम से संचरित नहीं हो सकती हैं",
      "क्योंकि चुंबकीय क्षेत्र भूकंपीय किरणों को ऊपर की ओर मोड़ देता है",
      "क्योंकि S-तरंगें पूरी तरह से रेले धरातलीय तरंगों में परिवर्तित हो जाती हैं"
    ],
    correct: 1,
    hints: [
      "Hint 1: S-waves are shear waves that require rigidity in the medium to transmit shear stress.",
      "Hint 2: Liquids and gases have zero shear modulus.",
      "Hint 3: The boundary at 2,900 km is the Gutenberg Discontinuity."
    ],
    trapAlert: "P-waves can travel through solids, liquids, and gases, but S-waves travel ONLY through rigid solids.",
    explanation: "S-waves (shear waves) depend on the shear strength of the medium. Because liquids and fluids have zero shear rigidity, S-waves cannot travel through liquids. Their complete disappearance at the Gutenberg Discontinuity (2,900 km) is the definitive proof that Earth's outer core is in a molten liquid state.",
    explanationHindi: "S-तरंगें केवल ठोस माध्यम में संचरित हो सकती हैं क्योंकि द्रवों का अपरूपण मापांक (shear modulus) शून्य होता है। 2,900 किमी (गुटेनबर्ग असांतत्य) पर उनका गायब होना इस बात का अकाट्य प्रमाण है कि बाह्य कोर तरल अवस्था में है।"
  },
  {
    id: "geo_q_527",
    topic: "World Physical Geography",
    subtopic: "Geomorphology — Plate Tectonics",
    examType: "UPSC Prelims Standard",
    difficulty: "Hard",
    question: "The collision between the Indian Plate and the Eurasian Plate formed the Himalayas. Why is there virtually NO active volcanism in the Himalayan mountain range?",
    questionHindi: "भारतीय प्लेट और यूरेशियन प्लेट के टकराव से हिमालय का निर्माण हुआ। हिमालयी पर्वत श्रृंखला में व्यावहारिक रूप से कोई सक्रिय ज्वालामुखी क्यों नहीं है?",
    options: [
      "Because both plates are oceanic plates with high water content",
      "Because both colliding plates are buoyant continental crusts that resist deep subduction into the mantle",
      "Because the Himalayan fault lines are transform boundaries with no vertical movement",
      "Because cold Siberian winds rapidly freeze any rising subterranean magma"
    ],
    optionsHindi: [
      "क्योंकि दोनों प्लेटें उच्च जल सामग्री वाली महासागरीय प्लेटें हैं",
      "क्योंकि दोनों टकराने वाली प्लेटें उछाल वाली महाद्वीपीय पर्पटी हैं जो मेंटल में गहरे क्षेपण का विरोध करती हैं",
      "क्योंकि हिमालयी भ्रंश रेखाएं बिना ऊर्ध्वाधर गति वाली रूपांतर सीमाएं हैं",
      "क्योंकि ठंडी साइबेरियाई हवाएं किसी भी उभरते हुए मैग्मा को तुरंत जमा देती हैं"
    ],
    correct: 1,
    hints: [
      "Hint 1: Oceanic crust is dense and readily subducts into the mantle to melt, generating volcanic magma.",
      "Hint 2: Continental crust is granitic, thick, and buoyant.",
      "Hint 3: Continent-Continent (C-C) convergence results in crustal crumpling and thickening rather than deep subduction."
    ],
    trapAlert: "Do not assume all convergent plate boundaries have volcanoes. O-C and O-O boundaries have volcanoes, but C-C boundaries (Himalayas, Alps) do NOT have active volcanism.",
    explanation: "In Continental-Continental (C-C) convergent boundaries, both the Indian and Eurasian continental crusts are buoyant, low-density granitic blocks. Neither plate can subduct deep enough into the asthenosphere to undergo melting and produce volcanic magma; instead, the crust buckles and doubles in thickness (up to 70 km), generating immense fold mountains and earthquakes without volcanism.",
    explanationHindi: "महाद्वीप-महाद्वीप (C-C) अभिसरण में दोनों प्लेटें कम घनत्व वाली और उत्प्लावक होती हैं। कोई भी प्लेट मेंटल में गहराई तक क्षेपित होकर पिघल नहीं पाती, जिससे केवल पर्वत निर्माण और भूकंप होते हैं, ज्वालामुखी नहीं।"
  },
  {
    id: "geo_q_528",
    topic: "World Physical Geography",
    subtopic: "Geomorphology — Landforms",
    examType: "UPSC Prelims Standard",
    difficulty: "Medium",
    question: "Regarding sand dunes formed in arid desert landscapes, the crescent-shaped dunes whose two horns point strictly in the downwind direction are known as:",
    questionHindi: "शुष्क मरुस्थलीय परिदृश्यों में बनने वाले बालू के टीलों के संबंध में, वे अर्धचंद्राकार टीले जिनके दो नुकीले सींग पवन प्रवाह की दिशा में होते हैं, कहलाते हैं:",
    options: [
      "Seif dunes",
      "Barchans",
      "Parabolic dunes",
      "Star dunes"
    ],
    optionsHindi: [
      "सीफ टीले",
      "बरखान",
      "परवलयिक (पैराबोलिक) टीले",
      "तारा (स्टार) टीले"
    ],
    correct: 1,
    hints: [
      "Hint 1: They form in regions with a constant, unidirectional prevailing wind.",
      "Hint 2: The convex side faces upwind, and the crescent horns extend downwind.",
      "Hint 3: Parabolic dunes have the exact opposite horn orientation."
    ],
    trapAlert: "In Barchans, the horns point DOWNWIND. In Parabolic dunes, the horns point UPWIND (anchored by vegetation).",
    explanation: "Barchans are crescentic sand dunes formed under unidirectional prevailing winds. Sand is blown up the gentle windward slope and slips down the steep slip-face between the two horns. The horns point downwind (in the direction towards which the wind is blowing).",
    explanationHindi: "बरखान अर्धचंद्राकार बालूका स्तूप होते हैं जिनके दोनों सींग पवन की दिशा में (downwind) आगे की ओर निकले होते हैं। इसके विपरीत पैराबोलिक स्तूपों में सींग विपरीत दिशा में होते हैं।"
  },
  {
    id: "geo_q_529",
    topic: "World Physical Geography",
    subtopic: "Oceanography — Marine Dynamics",
    examType: "UPSC Prelims Standard",
    difficulty: "Hard",
    question: "Consider the following statements regarding Ocean Salinity:\n1. The highest open-ocean surface salinity is recorded at the Equator due to intense solar insolation.\n2. The meeting zone of warm and cold ocean currents creates world-renowned commercial fishing banks.\n3. The Baltic Sea records exceptionally high salinity because of high rates of evaporation.\nWhich of the statements given above is/are correct?",
    questionHindi: "महासागरीय लवणता के संबंध में निम्नलिखित कथनों पर विचार कीजिए:\n1. तीव्र सौर विकिरण के कारण भूमध्य रेखा पर उच्चतम खुले महासागरीय सतह लवणता दर्ज की जाती है।\n2. गर्म और ठंडी महासागरीय धाराओं का मिलन क्षेत्र विश्व प्रसिद्ध वाणिज्यिक मत्स्य पालन बैंक बनाता है।\n3. वाष्पीकरण की उच्च दर के कारण बाल्टिक सागर में असाधारण रूप से उच्च लवणता दर्ज की जाती है।\nउपरोक्त कथनों में से कौन सा/से सही है/हैं?",
    options: [
      "1 and 2 only",
      "2 only",
      "2 and 3 only",
      "1, 2 and 3"
    ],
    optionsHindi: [
      "केवल 1 और 2",
      "केवल 2",
      "केवल 2 और 3",
      "1, 2 और 3"
    ],
    correct: 1,
    hints: [
      "Hint 1: Daily torrential convective rainfall at the Equator dilutes ocean surface water.",
      "Hint 2: The Baltic Sea receives huge freshwater inflows from European rivers and has very low evaporation.",
      "Hint 3: Mixing of Gulf Stream and Labrador current creates Grand Banks fishing zone."
    ],
    trapAlert: "Highest open-ocean salinity occurs in the SUBTROPICAL HIGH pressure belts (20°-35° N/S), NOT at the Equator.",
    explanation: "Statement 1 is incorrect: Equatorial oceans receive heavy daily convective precipitation which dilutes salinity; highest salinity occurs in the Subtropical High belts where evaporation far exceeds precipitation. Statement 2 is correct: Mixing of warm and cold currents (e.g. Gulf Stream and Labrador Current at Grand Banks) creates nutrient upwelling, abundant phytoplankton, and world-class fisheries. Statement 3 is incorrect: The Baltic Sea has exceptionally LOW salinity (5-15‰) due to massive river discharge and low evaporation.",
    explanationHindi: "कथन 1 गलत है: भूमध्य रेखा पर दैनिक भारी वर्षा लवणता को कम कर देती है; उच्चतम लवणता उपोष्णकटिबंधीय उच्च दाब पेटियों (20°-35°) में पाई जाती है। कथन 2 सही है: गर्म-ठंडी धाराओं के मिलन से समृद्ध मत्स्य क्षेत्र (जैसे ग्रैंड बैंक्स) बनते हैं। कथन 3 गलत है: बाल्टिक सागर में नदियों के ताजे पानी और कम वाष्पीकरण के कारण बहुत कम लवणता पाई जाती है।"
  },
  {
    id: "geo_q_530",
    topic: "World Physical Geography",
    subtopic: "Climatology — Heat Budget & Atmosphere",
    examType: "UPSC Prelims Standard",
    difficulty: "Medium",
    question: "Why is the troposphere significantly thicker (taller, ~18 km) at the Equator than at the Poles (~8 km)?",
    questionHindi: "क्षोभमंडल ध्रुवों (~8 किमी) की तुलना में भूमध्य रेखा पर काफी अधिक मोटा (~18 किमी) क्यों है?",
    options: [
      "Because Earth's gravitational pull is strongest at the Equator",
      "Because strong convective updrafts driven by intense solar heating transport air to greater heights at the Equator",
      "Because the ozone layer is thickest over the equatorial tropopause",
      "Because the Westerlies push the tropopause upward across the tropics"
    ],
    optionsHindi: [
      "क्योंकि भूमध्य रेखा पर पृथ्वी का गुरुत्वाकर्षण खिंचाव सबसे मजबूत होता है",
      "क्योंकि तीव्र सौर तापन द्वारा संचालित संवहनीय वायु धाराएं हवा को अधिक ऊंचाई तक ले जाती हैं",
      "क्योंकि भूमध्यरेखीय क्षोभसीमा पर ओजोन परत सबसे मोटी होती है",
      "क्योंकि पछुआ पवनें उष्णकटिबंधीय क्षोभसीमा को ऊपर की ओर धकेलती हैं"
    ],
    correct: 1,
    hints: [
      "Hint 1: Intense vertical convection currents exist over the Inter-Tropical Convergence Zone.",
      "Hint 2: Cold, dense air subsides at the poles, compressing the troposphere.",
      "Hint 3: Earth's rotation also adds centrifugal expansion at the equator."
    ],
    trapAlert: "Gravity is actually WEAKEST at the Equator due to equatorial bulge, not strongest.",
    explanation: "Intense equatorial solar heating produces powerful vertical convection currents that transport warm air to great heights (up to 18 km). At the poles, extreme cold causes air to subside and compress, reducing tropospheric thickness to ~8 km. Centrifugal force from Earth's rotation also aids equatorial bulge.",
    explanationHindi: "भूमध्य रेखा पर अत्यधिक सौर तापन के कारण शक्तिशाली संवहनीय धाराएं (convection currents) उठती हैं जो वायु को 18 किमी की ऊंचाई तक ले जाती हैं, जबकि ध्रुवों पर अत्यधिक ठंड के कारण वायु नीचे बैठती है जिससे मोटाई मात्र 8 किमी रह जाती है।"
  },
  {
    id: "geo_q_531",
    topic: "World Physical Geography",
    subtopic: "Climatology — World Climates",
    examType: "UPSC Prelims Standard",
    difficulty: "Medium",
    question: "Under the Köppen Climate Classification, which one of the following climatic types is characterized by mild, wet winters and hot, completely dry summers?",
    questionHindi: "कोपेन के जलवायु वर्गीकरण के तहत, निम्नलिखित में से कौन सा जलवायु प्रकार हल्के, आर्द्र सर्दियों और गर्म, पूरी तरह से शुष्क ग्रीष्मकाल की विशेषता रखता है?",
    options: [
      "Tropical Savanna (Aw)",
      "Mediterranean Climate (Cs)",
      "Humid Subtropical / China Type (Cfa)",
      "Marine West Coast / British Type (Cfb)"
    ],
    optionsHindi: [
      "उष्णकटिबंधीय सवाना (Aw)",
      "भूमध्यसागरीय जलवायु (Cs)",
      "आर्द्र उपोष्णकटिबंधीय / चीन तुल्य (Cfa)",
      "पश्चिमी समुद्री तटीय / ब्रिटिश तुल्य (Cfb)"
    ],
    correct: 1,
    hints: [
      "Hint 1: The letter 's' in Köppen indicates dry summer (sommer-trocken).",
      "Hint 2: Famous for citrus fruit orchards, olives, and viticulture (wine-making).",
      "Hint 3: Prevalent in Southern Europe, Central California, Central Chile, and SW Australia."
    ],
    trapAlert: "Most climates receive rain in summer. Mediterranean climate is the classic exception where summer is bone dry and rain falls strictly in winter!",
    explanation: "The Mediterranean climate (Cs) is defined by its unique rainfall rhythm: summers are dry because the subtropical high-pressure belt shifts poleward, blocking storm tracks; winters are moist and rainy because the Westerly wind belt shifts equatorward, bringing cyclonic rain. It is the global heartland of citrus fruits, olives, and viticulture.",
    explanationHindi: "भूमध्यसागरीय जलवायु (Cs) की सबसे प्रमुख विशेषता यह है कि इसमें ग्रीष्म ऋतु पूरी तरह शुष्क होती है और लगभग संपूर्ण वर्षा शीत ऋतु में पछुआ पवनों के प्रभाव से होती है। यह खट्टे फलों और अंगूर की खेती (शराब उद्योग) के लिए प्रसिद्ध है।"
  },
  {
    id: "geo_q_532",
    topic: "World Physical Geography",
    subtopic: "Soil Geography — Pedogenesis",
    examType: "UPSC Prelims Standard",
    difficulty: "Hard",
    question: "In soil science, the process of Podzolization is characterized by:",
    questionHindi: "मृदा विज्ञान में, पॉडज़ोलीकरण (Podzolization) की प्रक्रिया की विशेषता क्या है?",
    options: [
      "Leaching of silica from upper horizons leaving behind insoluble iron and aluminium sesquioxides",
      "Intense upward capillary movement of sodium salts in arid regions forming a white crust",
      "Leaching of iron and aluminium sesquioxides from upper horizons under acidic coniferous litter, leaving behind a bleached silica-rich horizon",
      "Accumulation of calcium carbonate in the subsoil of semi-arid temperate grasslands"
    ],
    optionsHindi: [
      "ऊपरी संस्तरों से सिलिका का निक्षालन होकर अघुलनशील लोहे और एल्यूमीनियम सेसक्विऑक्साइड का अवशेष रह जाना",
      "शुष्क क्षेत्रों में सोडियम लवणों का ऊपर की ओर तीव्र केशिकीय संचलन जिससे सफेद पपड़ी बनती है",
      "अम्लीय शंकुधारी पत्तियों के तहत ऊपरी संस्तरों से लोहे और एल्यूमीनियम का निक्षालन, जिससे एक राख जैसा सिलिका-युक्त संस्तर रह जाता है",
      "अर्ध-शुष्क समशीतोष्ण घास के मैदानों में उपमृदा में कैल्शियम कार्बोनेट का संचय"
    ],
    correct: 2,
    hints: [
      "Hint 1: Occurs in cool, humid temperate climates under taiga/coniferous forests.",
      "Hint 2: 'Podzol' is a Russian word meaning 'under-ash'.",
      "Hint 3: Laterization leaches silica; Podzolization leaches iron and aluminium."
    ],
    trapAlert: "Do not confuse Podzolization with Laterization. Laterization removes silica (leaving iron/aluminium), whereas Podzolization removes iron and aluminium (leaving silica ash).",
    explanation: "Podzolization occurs in cool, moist climates under acidic coniferous pine litter. Humic acids leach iron and aluminium downward from the E-horizon, leaving behind an ash-grey, bleached, silica-rich horizon. Option A describes Laterization, Option B describes Salinization, and Option D describes Calcification.",
    explanationHindi: "पॉडज़ोलीकरण (Podzolization) ठंडे नम शंकुधारी वन क्षेत्रों में होता है जहाँ अम्लीय पत्तियां लोहे और एल्यूमीनियम को नीचे निक्षालित (leach) कर देती हैं, जिससे ऊपरी संस्तर में राख के रंग की सिलिका बच जाती है। सिलिका का निक्षालन लेटेराइट मृदा (Laterization) में होता है।"
  },
  {
    id: "geo_q_533",
    topic: "Natural Resources & Industries",
    subtopic: "Industrial Location — Weber's Theory",
    examType: "UPSC Prelims Standard",
    difficulty: "Medium",
    question: "According to Alfred Weber's Least Cost Theory of Industrial Location, an industry with a Material Index (MI) greater than 1 (MI > 1) will tend to locate:",
    questionHindi: "अल्फ्रेड वेबर के औद्योगिक अवस्थिति के न्यूनतम लागत सिद्धांत के अनुसार, 1 से अधिक पदार्थ सूचकांक (Material Index > 1) वाला उद्योग कहाँ स्थापित होने की प्रवृत्ति रखेगा?",
    options: [
      "At the consumption market center to minimize distribution costs",
      "At the source of raw materials to avoid transporting heavy waste weight",
      "At an intermediate transshipment port regardless of raw material location",
      "At any arbitrary footloose location since transport cost is zero"
    ],
    optionsHindi: [
      "वितरण लागत को कम करने के लिए उपभोग बाजार केंद्र पर",
      "भारी अपशिष्ट भार के परिवहन से बचने के लिए कच्चे माल के स्रोत पर",
      "कच्चे माल की स्थिति की परवाह किए बिना किसी मध्यवर्ती पत्तन पर",
      "किसी भी अनिर्धारित (footloose) स्थान पर क्योंकि परिवहन लागत शून्य है"
    ],
    correct: 1,
    hints: [
      "Hint 1: Material Index = (Weight of localized raw materials) / (Weight of finished product).",
      "Hint 2: Weight-losing raw materials like iron ore, sugarcane, and copper ore have MI > 1.",
      "Hint 3: Crushing sugar cane produces heavy bagasse waste; transporting cane over long distances is uneconomical."
    ],
    trapAlert: "If MI > 1, the industry is raw-material oriented. If MI < 1 (weight-gaining), it is market-oriented. Pure materials have MI = 1.",
    explanation: "Alfred Weber defined Material Index (MI) as the weight of localized raw material divided by the weight of the finished product. When MI > 1, the raw material loses substantial weight during processing (e.g. Iron & Steel, Sugar mills, Copper smelting). Transporting raw material is much costlier than transporting the finished product, so the industry is firmly pulled to the raw material site.",
    explanationHindi: "वेबर के अनुसार जब पदार्थ सूचकांक (MI) > 1 होता है, तो कच्चा माल वजन घटाने वाला (weight-losing) होता है (जैसे गन्ना, लौह अयस्क)। अतः भारी कचरे के परिवहन खर्च से बचने के लिए कारखाना कच्चे माल के स्रोत के निकट ही लगाया जाता है।"
  },
  {
    id: "geo_q_534",
    topic: "Natural Resources & Industries",
    subtopic: "Footloose Industries",
    examType: "UPSC Prelims Standard",
    difficulty: "Easy",
    question: "Which of the following is a key characteristic of 'Footloose Industries'?",
    questionHindi: "निम्नलिखित में से कौन सी 'स्वच्छंद उद्योगों' (Footloose Industries) की एक प्रमुख विशेषता है?",
    options: [
      "They are heavily dependent on raw materials that lose >80% weight during processing",
      "They can be located in a wide variety of places because transport costs form a negligible fraction of total production costs",
      "They require massive quantities of fresh water and must locate alongside perennial river banks",
      "They are exclusively owned by public sector state governments"
    ],
    optionsHindi: [
      "वे भारी कच्चे माल पर निर्भर होते हैं जो प्रसंस्करण के दौरान >80% वजन खो देते हैं",
      "उन्हें कई प्रकार के स्थानों पर स्थापित किया जा सकता है क्योंकि परिवहन लागत कुल उत्पादन लागत का एक नगण्य हिस्सा होती है",
      "उन्हें भारी मात्रा में ताजे पानी की आवश्यकता होती है और उन्हें बारहमासी नदी के किनारों पर ही स्थित होना चाहिए",
      "वे विशेष रूप से सार्वजनिक क्षेत्र की राज्य सरकारों के स्वामित्व में होते हैं"
    ],
    correct: 1,
    hints: [
      "Hint 1: Examples include semiconductor chip design, precision watchmaking, and diamond cutting.",
      "Hint 2: Products have high value-to-weight ratios.",
      "Hint 3: They rely on roads, airports, and electrical power rather than raw material mineheads."
    ],
    trapAlert: "Footloose industries are NOT tied to raw materials or raw coalfields. They have maximum spatial mobility.",
    explanation: "Footloose industries produce goods with very high value-to-weight ratios (e.g. microchips, software, mobile assembly, luxury watches). Since raw materials and products are lightweight, transport costs do not dictate location. They can locate anywhere with skilled labor, power, and road/air connectivity.",
    explanationHindi: "स्वच्छंद उद्योग (Footloose industries) कच्चे माल या बाजार से बंधे नहीं होते क्योंकि उनके उत्पादों का मूल्य-से-वजन अनुपात बहुत अधिक होता है और परिवहन लागत नगण्य होती है (जैसे सेमीकंडक्टर चिप, मोबाइल असेंबली, घड़ियां)।"
  },
  {
    id: "geo_q_535",
    topic: "Natural Resources & Industries",
    subtopic: "Energy Resources — Coal",
    examType: "UPSC Prelims Standard",
    difficulty: "Medium",
    question: "Regarding Coal Resources in India, consider the following statements:\n1. Over 98% of India's total coal reserves are of Gondwana age.\n2. Gondwana coal in India is completely free of ash and sulfur.\n3. Tertiary coals in India are found primarily in the North-Eastern states.\nWhich of the statements given above is/are correct?",
    questionHindi: "भारत में कोयला संसाधनों के संबंध में निम्नलिखित कथनों पर विचार कीजिए:\n1. भारत के कुल कोयला भंडार का 98% से अधिक गोंडवाना काल का है।\n2. भारत में गोंडवाना कोयला पूरी तरह से राख और सल्फर से मुक्त है।\n3. भारत में टर्शियरी कोयला मुख्य रूप से उत्तर-पूर्वी राज्यों में पाया जाता है।\nउपरोक्त कथनों में से कौन सा/से सही है/हैं?",
    options: [
      "1 and 2 only",
      "1 and 3 only",
      "3 only",
      "1, 2 and 3"
    ],
    optionsHindi: [
      "केवल 1 और 2",
      "केवल 1 और 3",
      "केवल 3",
      "1, 2 और 3"
    ],
    correct: 1,
    hints: [
      "Hint 1: Gondwana coal is located in the Damodar, Mahanadi, Son, and Godavari river basins.",
      "Hint 2: Indian coal is notoriously high in ash content (35-45%), though relatively low in sulfur.",
      "Hint 3: Tertiary coal occurs in Assam (Makum), Meghalaya, and Arunachal Pradesh."
    ],
    trapAlert: "Indian coal has VERY HIGH ASH CONTENT (often 35-45%). It is NOT free of ash!",
    explanation: "Statement 1 is correct: Over 98% of India's coal reserves belong to the Permian Gondwana formations. Statement 2 is incorrect: Indian Gondwana coal has remarkably high ash content (35-45%), necessitating coal washeries, though it is low in sulfur. Statement 3 is correct: Tertiary coal accounts for <2% of reserves, located in Assam, Meghalaya, Arunachal Pradesh, and J&K, and has high sulfur content.",
    explanationHindi: "कथन 1 सही है: भारत का 98% से अधिक कोयला गोंडवाना काल का है। कथन 2 गलत है: भारतीय कोयले में राख की मात्रा बहुत अधिक (35-45%) होती है। कथन 3 सही है: टर्शियरी कोयला मुख्य रूप से असम, मेघालय और पूर्वोत्तर राज्यों में पाया जाता है और इसमें सल्फर अधिक होता है।"
  },
  {
    id: "geo_q_536",
    topic: "Geophysical Phenomena",
    subtopic: "Earthquakes — Shadow Zones",
    examType: "UPSC Prelims Standard",
    difficulty: "Hard",
    question: "With reference to Earthquake Shadow Zones, which of the following statements is correct?",
    questionHindi: "भूकंपीय छाया क्षेत्रों (Shadow Zones) के संदर्भ में निम्नलिखित में से कौन सा कथन सही है?",
    options: [
      "The P-wave shadow zone is much larger than the S-wave shadow zone",
      "The S-wave shadow zone extends continuously from 103° to 180° from the earthquake epicenter",
      "P-waves are not recorded anywhere on Earth beyond 103° from the epicenter",
      "Shadow zones exist only for deep-focus earthquakes and disappear for shallow-focus earthquakes"
    ],
    optionsHindi: [
      "P-तरंग छाया क्षेत्र S-तरंग छाया क्षेत्र से बहुत बड़ा होता है",
      "S-तरंग छाया क्षेत्र भूकंप के अधिकेंद्र से 103° से 180° तक लगातार फैला हुआ है",
      "अधिकेंद्र से 103° से परे पृथ्वी पर कहीं भी P-तरंगें दर्ज नहीं की जाती हैं",
      "छाया क्षेत्र केवल गहरे भूकंपों के लिए होते हैं और उथले भूकंपों के लिए गायब हो जाते हैं"
    ],
    correct: 1,
    hints: [
      "Hint 1: S-waves cannot enter the liquid outer core at 2,900 km depth.",
      "Hint 2: P-waves reappear beyond 142° after being refracted by the core.",
      "Hint 3: S-waves do not reappear at all across the entire antipodal hemisphere."
    ],
    trapAlert: "P-waves DO reappear between 142° and 180°. S-waves NEVER reappear beyond 103°!",
    explanation: "Because S-waves cannot travel through the liquid outer core, an immense S-wave shadow zone extends continuously from 103° to 180° around the globe (covering over 40% of the Earth's surface). The P-wave shadow zone is merely a ring between 103° and 142° because P-waves refract through the core and reappear beyond 142°.",
    explanationHindi: "S-तरंगें तरल बाह्य कोर से नहीं गुजर सकतीं, इसलिए उनका छाया क्षेत्र अधिकेंद्र से 103° से लेकर 180° तक लगातार फैला रहता है (पृथ्वी के 40% से अधिक भाग पर)। P-तरंगें 142° के बाद पुनः प्रकट हो जाती हैं।"
  },
  {
    id: "geo_q_537",
    topic: "Geophysical Phenomena",
    subtopic: "Tsunami Mechanics",
    examType: "UPSC Prelims Standard",
    difficulty: "Medium",
    question: "When a tsunami wave travels from the deep ocean onto a shallow continental shelf, what happens to its wave speed and wave height?",
    questionHindi: "जब सुनामी तरंग गहरे महासागर से उथले महाद्वीपीय शेल्फ पर पहुँचती है, तो उसकी तरंग गति और तरंग ऊँचाई पर क्या प्रभाव पड़ता है?",
    options: [
      "Wave speed increases and wave height decreases",
      "Wave speed decreases and wave height drastically increases (Shoaling effect)",
      "Both wave speed and wave height remain unchanged due to conservation of momentum",
      "Wave speed decreases and wave height decreases until the wave completely disperses"
    ],
    optionsHindi: [
      "तरंग गति बढ़ती है और तरंग ऊँचाई घटती है",
      "तरंग गति घटती है और तरंग ऊँचाई में अत्यधिक वृद्धि होती है (शोलिंग प्रभाव)",
      "संवेग संरक्षण के कारण तरंग गति और तरंग ऊँचाई दोनों अपरिवर्तित रहती हैं",
      "तरंग गति घटती है और तरंग ऊँचाई घटती है जब तक कि तरंग पूरी तरह से समाप्त न हो जाए"
    ],
    correct: 1,
    hints: [
      "Hint 1: In the deep ocean, tsunami travels at jet speed (700-900 km/h) with height <1 meter.",
      "Hint 2: Frictional drag against the shallow seabed slows the wave to 30-50 km/h.",
      "Hint 3: Conservation of wave energy flux forces compressed wavelength upward into a colossal wall of water."
    ],
    trapAlert: "Do not confuse deep water with coastal water. In deep water, speed is high and height is low. Near the coast, speed drops and height skyrockets!",
    explanation: "This is the classic 'Shoaling Effect'. In deep ocean water (>4,000 m), tsunami travels at 700–900 km/h with imperceptible height (<1 m). In shallow coastal waters, seabed friction slows the wave to 30–50 km/h, compressing its wavelength. To conserve total wave energy flux, the wave height surges into a towering wall of water (10–30 meters).",
    explanationHindi: "उथले जल में पहुँचने पर तली के घर्षण से सुनामी तरंग की गति 800 किमी/घंटा से घटकर 30-50 किमी/घंटा रह जाती है, जिससे तरंगदैर्ध्य संकुचित होती है और ऊर्जा संरक्षण के कारण तरंग की ऊँचाई 10 से 30 मीटर तक बढ़ जाती है (Shoaling Effect)।"
  },
  {
    id: "geo_q_538",
    topic: "Geophysical Phenomena",
    subtopic: "Volcanoes — Intrusive Bodies",
    examType: "UPSC Prelims Standard",
    difficulty: "Hard",
    question: "Match the following intrusive volcanic landforms with their correct structural descriptions:\n1. Batholith — A. Near-vertical wall-like intrusion cutting discordantly across bedding planes\n2. Sill — B. Massive, deep-seated granitic magma chamber forming the root of mountain ranges\n3. Dyke — C. Tabular horizontal intrusive sheet injected concordantly parallel to bedding planes\nWhich of the following is the correct matching?",
    questionHindi: "निम्नलिखित अंतर्वेधी ज्वालामुखीय स्थलरूपों का उनके सही संरचनात्मक विवरणों से मिलान कीजिए:\n1. बैथोलिथ — A. संस्तर तलों को लंबवत रूप से काटने वाला दीवार जैसा अंतर्वेधन\n2. सिल — B. पर्वतीय श्रेणियों की जड़ बनाने वाला विशाल, गहरा ग्रेनाइट मैग्मा कक्ष\n3. डाइक — C. संस्तर तलों के समानांतर क्षैतिज रूप से प्रविष्ट चादर\nसही मिलान कौन सा है?",
    options: [
      "1-B, 2-C, 3-A",
      "1-A, 2-C, 3-B",
      "1-B, 2-A, 3-C",
      "1-C, 2-B, 3-A"
    ],
    optionsHindi: [
      "1-B, 2-C, 3-A",
      "1-A, 2-C, 3-B",
      "1-B, 2-A, 3-C",
      "1-C, 2-B, 3-A"
    ],
    correct: 0,
    hints: [
      "Hint 1: Batholiths are the largest plutonic bodies.",
      "Hint 2: Sills are horizontal (concordant).",
      "Hint 3: Dykes are vertical/transverse walls (discordant)."
    ],
    trapAlert: "Dykes are DISCORDANT (vertical/oblique), whereas Sills are CONCORDANT (horizontal sheets).",
    explanation: "Batholiths (1-B) are colossal plutonic granite masses cooling at great depth. Sills (2-C) are concordant horizontal sheets injected parallel to bedding planes. Dykes (3-A) are discordant, near-vertical wall-like intrusions that cut across strata.",
    explanationHindi: "बैथोलिथ (1-B) गहरे विशाल ग्रेनाइट मैग्मा कक्ष होते हैं। सिल (2-C) परतों के समानांतर क्षैतिज चादरें होती हैं। डाइक (3-A) चट्टानी परतों को लंबवत काटने वाली दीवार जैसी संरचनाएं होती हैं।"
  },
  {
    id: "geo_q_539",
    topic: "Geophysical Phenomena",
    subtopic: "Tropical Cyclones",
    examType: "UPSC Prelims Standard",
    difficulty: "Medium",
    question: "Why do Tropical Cyclones NOT form in the equatorial ocean belt between 0° and 5° North and South latitudes?",
    questionHindi: "0° से 5° उत्तर और दक्षिण अक्षांशों के बीच भूमध्यरेखीय महासागरीय पट्टी में उष्णकटिबंधीय चक्रवात क्यों नहीं बनते हैं?",
    options: [
      "Because the sea surface temperature is below 20°C at the Equator",
      "Because the Coriolis force is zero at the Equator, preventing the organization of a rotating vortex",
      "Because vertical wind shear is excessively high along the equator",
      "Because trade winds blow with hurricane force across the equator"
    ],
    optionsHindi: [
      "क्योंकि भूमध्य रेखा पर समुद्र की सतह का तापमान 20°C से नीचे होता है",
      "क्योंकि भूमध्य रेखा पर कोरिओलिस बल शून्य होता है, जिससे चक्रवाती भंवर नहीं बन पाता",
      "क्योंकि भूमध्य रेखा के साथ ऊर्ध्वाधर पवन अपरूपण अत्यधिक उच्च होता है",
      "क्योंकि व्यापारिक पवनें भूमध्य रेखा पर तूफान के वेग से चलती हैं"
    ],
    correct: 1,
    hints: [
      "Hint 1: Coriolis force is proportional to the sine of the latitude (2Ωv sin φ).",
      "Hint 2: At latitude 0°, sin(0) = 0.",
      "Hint 3: Without Coriolis force, air rushes directly into low pressure without spinning."
    ],
    trapAlert: "SST at the equator is very warm (>27°C), which satisfies the thermal criterion, but cyclogenesis fails purely because Coriolis force is zero!",
    explanation: "Coriolis force is mathematically zero at the Equator (latitude 0°). Without Coriolis deflection, inflowing winds blow directly into the central low-pressure area without spinning into a rotating cyclonic vortex. Tropical cyclones require a minimum latitude of ~5° to develop rotational momentum.",
    explanationHindi: "भूमध्य रेखा पर कोरिओलिस बल शून्य होता है। कोरिओलिस बल के अभाव में वायु सीधे निम्न दाब केंद्र की ओर बहकर उसे भर देती है और चक्रवाती भंवर (cyclonic vortex) का रूप नहीं ले पाती।"
  },
  {
    id: "geo_q_540",
    topic: "Human Geography",
    subtopic: "Demography & Census",
    examType: "UPSC Prelims Standard",
    difficulty: "Medium",
    question: "In Indian demographic history, why is the Census year 1921 officially designated as the 'Year of the Great Divide'?",
    questionHindi: "भारतीय जनसांख्यिकीय इतिहास में, जनगणना वर्ष 1921 को आधिकारिक तौर पर 'महान विभाजन का वर्ष' (Year of the Great Divide) क्यों कहा जाता है?",
    options: [
      "Because India was partitioned into India and Pakistan during that census",
      "Because it was the only census in Indian history where a negative population growth rate (-0.31%) was recorded, followed by continuous rapid growth",
      "Because the first synchronous census under Lord Ripon was held in that year",
      "Because urban population surpassed rural population for the first time"
    ],
    optionsHindi: [
      "क्योंकि उस जनगणना के दौरान भारत का भारत और पाकिस्तान में विभाजन हुआ था",
      "क्योंकि यह भारतीय इतिहास की एकमात्र जनगणना थी जिसमें नकारात्मक जनसंख्या वृद्धि दर (-0.31%) दर्ज की गई थी, जिसके बाद निरंतर तीव्र वृद्धि हुई",
      "क्योंकि लॉर्ड रिपन के तहत पहली समकालिक जनगणना उसी वर्ष आयोजित की गई थी",
      "क्योंकि पहली बार शहरी जनसंख्या ग्रामीण जनसंख्या से अधिक हो गई थी"
    ],
    correct: 1,
    hints: [
      "Hint 1: The 1918 Spanish Flu pandemic and widespread famines caused immense mortality.",
      "Hint 2: Population declined from 252 million in 1911 to 251.3 million in 1921.",
      "Hint 3: After 1921, India entered Stage 2 of the Demographic Transition Model with mortality falling steadily."
    ],
    trapAlert: "1921 is the Year of the Great Divide because growth was NEGATIVE (-0.31%). After 1921, India's population never declined.",
    explanation: "Census 1921 is designated the 'Year of the Great Divide' because it was the only decadal period in modern Indian history where population recorded a negative growth rate (-0.31%, a loss of ~7.7 lakh people) due to the 1918 influenza pandemic, plague, and famines. After 1921, mortality was brought under control while birth rates remained high, initiating explosive population growth.",
    explanationHindi: "1921 को 'महान विभाजन का वर्ष' कहा जाता है क्योंकि 1918 के स्पैनिश फ्लू और अकाल के कारण 1911-1921 के दशक में भारत की जनसंख्या वृद्धि दर नकारात्मक (-0.31%) रही थी। 1921 के बाद भारत की जनसंख्या में कभी गिरावट नहीं आई और यह लगातार तेजी से बढ़ी।"
  }
];

// Check if questions already exist to avoid duplicate appending
const existingIds = new Set(questions.map(q => q.id));
let addedCount = 0;

for (const nq of newQuestions) {
  if (!existingIds.has(nq.id)) {
    questions.push(nq);
    addedCount++;
  }
}

fs.writeFileSync(questionsPath, JSON.stringify(questions, null, 2), 'utf8');
console.log(`Successfully appended ${addedCount} new questions. Total questions now: ${questions.length}`);
