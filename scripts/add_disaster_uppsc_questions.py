import json

with open("public/data/questions.json", "r", encoding="utf-8") as f:
    questions = json.load(f)

print(f"Current questions count: {len(questions)}")

new_questions = [
    {
        "id": "geo_q_501",
        "topic": "Natural Hazards & Disasters",
        "subtopic": "Disaster Governance",
        "examType": "UPSC Prelims PYQ",
        "difficulty": "Medium",
        "question": "Under the Disaster Management Act, 2005, who is the ex-officio Chairperson of the District Disaster Management Authority (DDMA)?",
        "questionHindi": "आपदा प्रबंधन अधिनियम, 2005 के अंतर्गत जिला आपदा प्रबंधन प्राधिकरण (DDMA) का पदेन अध्यक्ष कौन होता है?",
        "options": [
            "District Magistrate / Collector / Deputy Commissioner",
            "Superintendent of Police",
            "Chief Medical Officer of the District",
            "District Forest Officer"
        ],
        "optionsHindi": [
            "जिला मजिस्ट्रेट / कलेक्टर / उपायुक्त",
            "पुलिस अधीक्षक",
            "जिले के मुख्य चिकित्सा अधिकारी",
            "प्रभागीय वनाधिकारी"
        ],
        "correct": 0,
        "hints": [
            "Hint 1: The DM acts as the executive head of the district administration.",
            "Hint 2: Section 25 of the DM Act 2005 designates the Collector as Chairperson and the elected head of the local body as Co-Chairperson.",
            "Hint 3: In sixth schedule areas, the Chief Executive Member of the District Council serves as Co-Chair."
        ],
        "trapAlert": "Do not confuse with State Disaster Management Authority (SDMA), which is chaired by the Chief Minister.",
        "explanation": "Section 25 of the Disaster Management Act, 2005 establishes the DDMA with the District Magistrate/Collector/Deputy Commissioner as the ex-officio Chairperson and the elected head of the local authority as Co-Chairperson.",
        "explanationHindi": "आपदा प्रबंधन अधिनियम, 2005 की धारा 25 के अनुसार, जिला मजिस्ट्रेट/कलेक्टर डीडीएमए का पदेन अध्यक्ष होता है और स्थानीय निकाय का निर्वाचित प्रमुख सह-अध्यक्ष होता है।"
    },
    {
        "id": "geo_q_502",
        "topic": "Natural Hazards & Disasters",
        "subtopic": "International Frameworks",
        "examType": "Conceptual Mastery",
        "difficulty": "Hard",
        "question": "Consider the following statements regarding the Sendai Framework for Disaster Risk Reduction (2015–2030):\n1. It succeeded the Hyogo Framework for Action (2005–2015).\n2. It explicitly emphasizes the concept of 'Build Back Better' in recovery, rehabilitation, and reconstruction.\n3. It is legally binding on all signatory member states.\nWhich of the statements given above is/are correct?",
        "questionHindi": "सेंडाई आपदा जोखिम न्यूनीकरण रूपरेखा (2015-2030) के संबंध में निम्नलिखित कथनों पर विचार कीजिए:\n1. इसने ह्योगो फ्रेमवर्क फॉर एक्शन (2005-2015) का स्थान लिया।\n2. यह पुनर्प्राप्ति, पुनर्वास और पुनर्निर्माण में 'बिल्ड बैक बेटर' की अवधारणा पर बल देता है।\n3. यह सभी हस्ताक्षरकर्ता सदस्य देशों पर कानूनी रूप से बाध्यकारी है।\nउपर्युक्त में से कौन सा/से कथन सही है/हैं?",
        "options": [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2 and 3"
        ],
        "optionsHindi": [
            "केवल 1 और 2",
            "केवल 2 और 3",
            "केवल 1 और 3",
            "1, 2 और 3"
        ],
        "correct": 0,
        "hints": [
            "Hint 1: The Sendai Framework was adopted at the 3rd UN World Conference in Japan (2015).",
            "Hint 2: Like many international voluntary frameworks, it is non-binding.",
            "Hint 3: Priority 4 focuses directly on 'Build Back Better'."
        ],
        "trapAlert": "Sendai Framework is a non-binding voluntary agreement, not a legally binding treaty.",
        "explanation": "Statements 1 and 2 are correct. The Sendai Framework succeeded the Hyogo Framework and Priority 4 promotes 'Build Back Better'. Statement 3 is incorrect because the Sendai Framework is a voluntary, non-binding agreement.",
        "explanationHindi": "कथन 1 और 2 सही हैं। सेंडाई फ्रेमवर्क ने ह्योगो फ्रेमवर्क का स्थान लिया और प्राथमिकता 4 'बिल्ड बैक बेटर' को बढ़ावा देती है। कथन 3 गलत है क्योंकि यह एक स्वैच्छिक, गैर-बाध्यकारी समझौता है।"
    },
    {
        "id": "geo_q_503",
        "topic": "Natural Hazards & Disasters",
        "subtopic": "Seismic Zonation",
        "examType": "UPSC Prelims PYQ",
        "difficulty": "Medium",
        "question": "According to the Bureau of Indian Standards (BIS IS 1893:2016) seismic zonation map of India, which of the following regions falls in Seismic Zone V (Very Severe)?",
        "questionHindi": "भारतीय मानक ब्यूरो (BIS IS 1893:2016) के भूकंपीय क्षेत्रीकरण मानचित्र के अनुसार, निम्नलिखित में से कौन सा क्षेत्र भूकंपीय क्षेत्र V (अति गंभीर) में आता है?",
        "options": [
            "Entire Northeast India and Rann of Kutch (Gujarat)",
            "Delhi-NCR and Indo-Gangetic Plains",
            "Western Ghats and Coastal Maharashtra",
            "Central Deccan Plateau and Chhota Nagpur Plateau"
        ],
        "optionsHindi": [
            "संपूर्ण पूर्वोत्तर भारत और कच्छ का रण (गुजरात)",
            "दिल्ली-एनसीआर और भारत-गंगा के मैदान",
            "पश्चिमी घाट और तटीय महाराष्ट्र",
            "मध्य दक्कन पठार और छोटा नागपुर पठार"
        ],
        "correct": 0,
        "hints": [
            "Hint 1: Zone V has the highest zone factor (0.36) and covers tectonically active zones.",
            "Hint 2: The 2001 Bhuj earthquake epicenter lies in this zone.",
            "Hint 3: Northeast India is an active tri-junction of Indian, Eurasian, and Burmese plates."
        ],
        "trapAlert": "Delhi-NCR falls under Zone IV (Severe), not Zone V.",
        "explanation": "Zone V (Zone Factor 0.36) covers the entire Northeast Indian states, parts of J&K, Ladakh, Himachal Pradesh, Uttarakhand, the Rann of Kutch in Gujarat, North Bihar, and the Andaman & Nicobar Islands.",
        "explanationHindi": "ज़ोन V (ज़ोन फैक्टर 0.36) में संपूर्ण पूर्वोत्तर भारत, जम्मू-कश्मीर, लद्दाख, हिमाचल, उत्तराखंड के कुछ हिस्से, गुजरात का कच्छ का रण, उत्तरी बिहार और अंडमान एवं निकोबार द्वीप समूह शामिल हैं।"
    },
    {
        "id": "geo_q_504",
        "topic": "Natural Hazards & Disasters",
        "subtopic": "Glacial Lake Outburst Floods",
        "examType": "Conceptual Mastery",
        "difficulty": "Hard",
        "question": "The catastrophic flash flood that destroyed the 1,200 MW Chungthang (Teesta-III) hydro project in October 2023 was caused by a Glacial Lake Outburst Flood (GLOF) originating from which lake?",
        "questionHindi": "अक्टूबर 2023 में 1,200 मेगावाट की चुंगथांग (तीस्ता-III) जलविद्युत परियोजना को नष्ट करने वाली विनाशकारी बाढ़ किस हिमनदी झील (GLOF) के फटने से उत्पन्न हुई थी?",
        "options": [
            "South Lhonak Lake (Sikkim)",
            "Chorabari Lake (Uttarakhand)",
            "Tso Moriri (Ladakh)",
            "Gepang Gath (Himachal Pradesh)"
        ],
        "optionsHindi": [
            "दक्षिण ल्होनक झील (सिक्किम)",
            "चोराबाड़ी झील (उत्तराखंड)",
            "त्सो मोरीरी (लद्दाख)",
            "गेपांग गथ (हिमाचल प्रदेश)"
        ],
        "correct": 0,
        "hints": [
            "Hint 1: Located in North Sikkim at an altitude of over 5,200 meters.",
            "Hint 2: It breached its end-moraine dam following intense rainfall and possible ice/rock avalanche.",
            "Hint 3: The Teesta River experienced rapid flash flooding downstream."
        ],
        "trapAlert": "Chorabari Lake caused the 2013 Kedarnath disaster, not the 2023 Teesta disaster.",
        "explanation": "The October 2023 Sikkim disaster was caused by the sudden breach of South Lhonak Lake (elevation 5,200 m) in North Sikkim, releasing millions of cubic meters of water that destroyed the Chungthang Dam on the Teesta River.",
        "explanationHindi": "अक्टूबर 2023 की सिक्किम आपदा उत्तरी सिक्किम में 5,200 मीटर की ऊंचाई पर स्थित दक्षिण ल्होनक झील के मोरेन बांध के टूटने से हुई थी, जिसने तीस्ता नदी पर चुंगथांग बांध को नष्ट कर दिया।"
    },
    {
        "id": "geo_q_505",
        "topic": "Natural Hazards & Disasters",
        "subtopic": "Tropical Cyclones",
        "examType": "Conceptual Mastery",
        "difficulty": "Medium",
        "question": "Why does the Bay of Bengal experience approximately four times more tropical cyclones than the Arabian Sea?",
        "questionHindi": "बंगाल की खाड़ी में अरब सागर की तुलना में लगभग चार गुना अधिक उष्णकटिबंधीय चक्रवात क्यों आते हैं?",
        "options": [
            "Higher sea surface temperature, enclosed basin geometry, and fresh water stratification",
            "Stronger vertical wind shear in the Bay of Bengal",
            "Absence of Coriolis force in the Arabian Sea",
            "Cold ocean currents prevailing continuously in the Bay of Bengal"
        ],
        "optionsHindi": [
            "समुद्र की सतह का उच्च तापमान, संवृत द्रोणी की ज्यामिति और मीठे पानी का स्तरीकरण",
            "बंगाल की खाड़ी में तीव्र ऊर्ध्वाधर पवन अपरूपण",
            "अरब सागर में कोरिओलिस बल की अनुपस्थिति",
            "बंगाल की खाड़ी में लगातार ठंडी समुद्री धाराओं का प्रवाह"
        ],
        "correct": 0,
        "hints": [
            "Hint 1: Large rivers like Ganga and Brahmaputra pour massive freshwater, preventing mixing and keeping the surface warmer.",
            "Hint 2: Enclosed concave bay traps cyclonic energy.",
            "Hint 3: Typhoons from the South China Sea cross over into the Bay of Bengal."
        ],
        "trapAlert": "Strong wind shear prevents cyclonic development; Bay of Bengal has low, favorable shear.",
        "explanation": "The Bay of Bengal has higher sea surface temperatures (>28°C), low vertical wind shear, and massive freshwater river discharge that forms a thin, warm upper layer, unlike the cooler, high-salinity, well-mixed Arabian Sea.",
        "explanationHindi": "बंगाल की खाड़ी में समुद्र की सतह का तापमान अधिक होता है, गंगा-ब्रह्मपुत्र से मीठे पानी के आने से ऊपर गर्म पानी की परत बन जाती है, और संवृत खाड़ी अवदाबों को तेजी से चक्रवात में बदल देती है।"
    },
    {
        "id": "geo_q_506",
        "topic": "Natural Hazards & Disasters",
        "subtopic": "IMD Color Warning",
        "examType": "UPSC Prelims PYQ",
        "difficulty": "Easy",
        "question": "Under the India Meteorological Department (IMD) 4-stage color-coded weather alert system, which color indicates 'Take Action' (extreme bad weather expected)?",
        "questionHindi": "भारत मौसम विज्ञान विभाग (IMD) की 4-स्तरीय रंग-कोडित मौसम चेतावनी प्रणाली में, कौन सा रंग 'कार्रवाई करें / टेक एक्शन' (अत्यधिक खराब मौसम) का संकेत देता है?",
        "options": [
            "Red Alert",
            "Orange Alert",
            "Yellow Alert",
            "Green Alert"
        ],
        "optionsHindi": [
            "रेड अलर्ट (लाल)",
            "ऑरेंज अलर्ट (नारंगी)",
            "येलो अलर्ट (पीला)",
            "ग्रीन अलर्ट (हरा)"
        ],
        "correct": 0,
        "hints": [
            "Hint 1: Green means 'No warning / all clear'.",
            "Hint 2: Yellow means 'Be updated / Watch'.",
            "Hint 3: Orange means 'Be prepared'. Red means 'Take action'."
        ],
        "trapAlert": "Orange means 'Be prepared', whereas Red specifically commands 'Take action'.",
        "explanation": "IMD Color Codes: Green = No warning; Yellow = Be Updated (watch); Orange = Be Prepared; Red = Take Action (extreme weather posing risk to life and infrastructure).",
        "explanationHindi": "IMD रंग कोड: ग्रीन = कोई चेतावनी नहीं; येलो = नजर रखें (अपडेट रहें); ऑरेंज = तैयार रहें; रेड = कार्रवाई करें (जीवन और संपत्ति के लिए गंभीर खतरा)।"
    },
    {
        "id": "geo_q_507",
        "topic": "Human & Economic Geography",
        "subtopic": "UPPSC Special - UP Physiography",
        "examType": "UPPSC Special",
        "difficulty": "Medium",
        "question": "In Uttar Pradesh, the narrow strip of land lying parallel to the Shiwalik foothills composed of pebbles and gravels where rivers sink underground is known as:",
        "questionHindi": "उत्तर प्रदेश में शिवालिक की तलहटी के समानांतर कंकड़-पत्थरों से निर्मित वह संकीर्ण पट्टी जहां नदियां भूमिगत हो जाती हैं, कहलाती है:",
        "options": [
            "Bhabar Belt",
            "Terai Belt",
            "Bhangar Belt",
            "Khadar Belt"
        ],
        "optionsHindi": [
            "भाबर क्षेत्र",
            "तराई क्षेत्र",
            "बांगर क्षेत्र",
            "खादर क्षेत्र"
        ],
        "correct": 0,
        "hints": [
            "Hint 1: Found in northern parts of Saharanpur and Bijnor districts.",
            "Hint 2: The high porosity of unassorted boulders allows water to filter down.",
            "Hint 3: Terai lies south of this belt where streams re-emerge."
        ],
        "trapAlert": "Terai is the marshy zone where streams re-emerge, whereas Bhabar is where they sink.",
        "explanation": "In northern UP (Saharanpur, Bijnor), the Bhabar belt is an 8–10 km wide zone of porous gravels and boulders where mountain streams disappear subterraneanly.",
        "explanationHindi": "उत्तर प्रदेश के उत्तरी भाग (सहारनपुर, बिजनौर) में शिवालिक की तलहटी में 8-10 किमी चौड़ा कंकड़-पत्थरों वाला क्षेत्र 'भाबर' कहलाता है, जहाँ नदियाँ भूमिगत हो जाती हैं।"
    },
    {
        "id": "geo_q_508",
        "topic": "Drainage & River Systems",
        "subtopic": "UPPSC Special - UP Rivers",
        "examType": "UPPSC Special",
        "difficulty": "Medium",
        "question": "The Gomti River, which flows past Lucknow and Jaunpur, originates from which of the following lakes in Uttar Pradesh?",
        "questionHindi": "लखनऊ और जौनपुर से होकर बहने वाली गोमती नदी का उद्गम उत्तर प्रदेश की निम्नलिखित में से किस झील से होता है?",
        "options": [
            "Fulhar Jheel / Gomat Taal (Pilibhit)",
            "Keetham Lake / Sur Sarovar (Agra)",
            "Bakhira Lake (Sant Kabir Nagar)",
            "Sarsai Nawar (Etawah)"
        ],
        "optionsHindi": [
            "फुलहर झील / गोमत ताल (पीलीभीत)",
            "कीठम झील / सूर सरोवर (आगरा)",
            "बखीरा झील (संत कबीर नगर)",
            "सरसई नावर (इटावा)"
        ],
        "correct": 0,
        "hints": [
            "Hint 1: Gomti is an intra-state alluvial river originating entirely in the plains.",
            "Hint 2: Located near Madhotanda in the Terai district of Pilibhit.",
            "Hint 3: It meets the Ganga at Kaithi near Ghazipur."
        ],
        "trapAlert": "Unlike Ganga and Yamuna, Gomti does NOT originate in the Himalayas.",
        "explanation": "The Gomti river originates from Fulhar Jheel (also known as Gomat Taal) near Madhotanda in Pilibhit district, UP. It flows ~960 km across UP before merging into the Ganga near Ghazipur.",
        "explanationHindi": "गोमती नदी का उद्गम पीलीभीत जिले के माधोटांडा के पास स्थित फुलहर झील (गोमत ताल) से होता है। यह मैदानी भाग से निकलने वाली प्रमुख नदी है जो गाजीपुर के कैथी में गंगा से मिलती है।"
    },
    {
        "id": "geo_q_509",
        "topic": "Soils & Natural Vegetation",
        "subtopic": "UPPSC Special - Bundelkhand Soils",
        "examType": "UPPSC Special",
        "difficulty": "Hard",
        "question": "In the Bundelkhand region of Uttar Pradesh, which local black clayey soil exhibits high moisture retention and develops deep cracks during the dry season, making it ideal for Rabi crops like gram and wheat?",
        "questionHindi": "उत्तर प्रदेश के बुंदेलखंड क्षेत्र में कौन सी स्थानीय काली चीका मिट्टी उच्च नमी धारण क्षमता रखती है और शुष्क मौसम में गहरी दरारें विकसित करती है, जो चना और गेहूं जैसी रबी फसलों के लिए आदर्श है?",
        "options": [
            "Mar Soil (Māar)",
            "Rakar Soil",
            "Parwa Soil (Padwa)",
            "Bhur Soil"
        ],
        "optionsHindi": [
            "मार (माड़) मिट्टी",
            "राकर मिट्टी",
            "पड़वा (परवा) मिट्टी",
            "भूर मिट्टी"
        ],
        "correct": 0,
        "hints": [
            "Hint 1: Bundelkhand soils are categorized into Mar, Kabar, Parwa, and Rakar.",
            "Hint 2: Mar resembles black cotton soil (Regur) with montmorillonite clay.",
            "Hint 3: Rakar is the shallow stony soil on hill slopes."
        ],
        "trapAlert": "Parwa is light reddish-yellow sandy loam; Mar is the deep black fertile clay.",
        "explanation": "In Bundelkhand, 'Mar' is a fertile, black clayey soil with high organic and moisture retention capacity that contracts and cracks when dry, supporting Rabi gram and wheat.",
        "explanationHindi": "बुंदेलखंड में 'मार' (माड़) एक उपजाऊ, काली चिकनी मिट्टी है जिसमें नमी धारण करने की उच्च क्षमता होती है। यह सूखने पर गहरी दरारें बनाती है और चना व गेहूं के लिए बहुत उपयुक्त है।"
    },
    {
        "id": "geo_q_510",
        "topic": "Biodiversity & Conservation",
        "subtopic": "UPPSC Special - Protected Areas",
        "examType": "UPPSC Special",
        "difficulty": "Medium",
        "question": "Which wildlife sanctuary was notified in 2022 as the 4th Tiger Reserve of Uttar Pradesh (and the 53rd Tiger Reserve of India)?",
        "questionHindi": "2022 में किस वन्यजीव अभयारण्य को उत्तर प्रदेश का चौथा बाघ अभयारण्य (और भारत का 53वां टाइगर रिजर्व) अधिसूचित किया गया था?",
        "options": [
            "Ranipur Tiger Reserve (Chitrakoot)",
            "Amangarh Tiger Reserve (Bijnor)",
            "Pilibhit Tiger Reserve (Pilibhit)",
            "Katerniaghat Wildlife Sanctuary (Bahraich)"
        ],
        "optionsHindi": [
            "रानीपुर टाइगर रिजर्व (चित्रकूट)",
            "अमानगढ़ टाइगर रिजर्व (बिजनौर)",
            "पीलीभीत टाइगर रिजर्व (पीलीभीत)",
            "कतरनियाघाट वन्यजीव अभयारण्य (बहराइच)"
        ],
        "correct": 0,
        "hints": [
            "Hint 1: Located in the Bundelkhand plateau region of southern UP.",
            "Hint 2: It forms an essential corridor for tigers dispersing from Panna Tiger Reserve in Madhya Pradesh.",
            "Hint 3: Situated in Chitrakoot district."
        ],
        "trapAlert": "Dudhwa was 1st, Pilibhit 2nd, Amangarh 3rd, and Ranipur is the 4th Tiger Reserve of UP.",
        "explanation": "Ranipur Wildlife Sanctuary in Chitrakoot district was notified as UP's 4th Tiger Reserve in October 2022. It serves as a vital corridor for tiger movement from Panna (MP).",
        "explanationHindi": "चित्रकूट जिले में स्थित रानीपुर वन्यजीव अभयारण्य को अक्टूबर 2022 में उत्तर प्रदेश का चौथा (और भारत का 53वां) टाइगर रिजर्व अधिसूचित किया गया। यह पन्ना टाइगर रिजर्व से बाघों के आवागमन का गलियारा है।"
    },
    {
        "id": "geo_q_511",
        "topic": "Biodiversity & Conservation",
        "subtopic": "UPPSC Special - Ramsar Wetlands",
        "examType": "UPPSC Special",
        "difficulty": "Medium",
        "question": "Which Ramsar wetland site in Uttar Pradesh is famous as a permanent breeding haven for the Sarus Crane (Grus antigone), the official State Bird of Uttar Pradesh?",
        "questionHindi": "उत्तर प्रदेश का कौन सा रामसर आर्द्रभूमि स्थल उत्तर प्रदेश के राज्य पक्षी सारस क्रेन (Grus antigone) के स्थायी प्रजनन आश्रय के रूप में प्रसिद्ध है?",
        "options": [
            "Sarsai Nawar Jheel (Etawah)",
            "Sur Sarovar (Agra)",
            "Sandi Bird Sanctuary (Hardoi)",
            "Haiderpur Wetland (Bijnor)"
        ],
        "optionsHindi": [
            "सरसई नावर झील (इटावा)",
            "सूर सरोवर (आगरा)",
            "सांडी पक्षी अभयारण्य (हरदोई)",
            "हैदरपुर वेटलैंड (बिजनौर)"
        ],
        "correct": 0,
        "hints": [
            "Hint 1: Located in the Etawah district of south-western UP.",
            "Hint 2: Designated as a Ramsar site in 2019.",
            "Hint 3: It sustains the largest concentration of non-breeding Sarus cranes in the region."
        ],
        "trapAlert": "Sur Sarovar is in Agra and Sandi is in Hardoi; Sarsai Nawar is in Etawah.",
        "explanation": "Sarsai Nawar Jheel in Etawah is a permanent marsh that provides breeding and foraging habitat for over 400 Sarus Cranes (the state bird of Uttar Pradesh).",
        "explanationHindi": "इटावा स्थित सरसई नावर झील एक स्थायी आर्द्रभूमि है जो उत्तर प्रदेश के राज्य पक्षी सारस (Sarus Crane) के लिए प्रमुख आवास और प्रजनन स्थल है।"
    },
    {
        "id": "geo_q_512",
        "topic": "Transport & Infrastructure",
        "subtopic": "UPPSC Special - Water Resources",
        "examType": "UPPSC Special",
        "difficulty": "Hard",
        "question": "Under the Ken-Betwa River Interlinking Project, water will be transferred from the Ken basin to the Betwa basin primarily through the construction of which landmark dam?",
        "questionHindi": "केन-बेतवा नदी जोड़ो परियोजना के तहत केन बेसिन से बेतवा बेसिन में पानी मुख्य रूप से किस ऐतिहासिक बांध के निर्माण द्वारा स्थानांतरित किया जाएगा?",
        "options": [
            "Daudhan Dam",
            "Matatila Dam",
            "Rihand Dam",
            "Rajghat Dam"
        ],
        "optionsHindi": [
            "दौधन बांध (Daudhan Dam)",
            "माताटीला बांध",
            "रिहंद बांध",
            "राजघाट बांध"
        ],
        "correct": 0,
        "hints": [
            "Hint 1: Planned on the Ken river inside the Panna Tiger Reserve landscape.",
            "Hint 2: A 221-km link canal will convey water across Bundelkhand.",
            "Hint 3: Matatila and Rajghat are existing dams on the Betwa river."
        ],
        "trapAlert": "Matatila is on the Betwa; Daudhan is the newly planned reservoir on the Ken river.",
        "explanation": "The Ken-Betwa Link Project entails constructing the Daudhan Dam across the Ken river in MP to transfer surplus monsoon discharge via a 221 km canal to the Betwa river in UP.",
        "explanationHindi": "केन-बेतवा लिंक परियोजना के तहत केन नदी पर 'दौधन बांध' का निर्माण किया जा रहा है, जहाँ से 221 किमी लंबी नहर के माध्यम से अधिशेष जल बेतवा बेसिन में भेजा जाएगा।"
    },
    {
        "id": "geo_q_513",
        "topic": "Mineral & Energy Resources",
        "subtopic": "UPPSC Special - UP Minerals",
        "examType": "UPPSC Special",
        "difficulty": "Medium",
        "question": "In Uttar Pradesh, the Shankargarh region of Prayagraj (Allahabad) district is renowned across India for the extraction and processing of which mineral resource?",
        "questionHindi": "उत्तर प्रदेश में प्रयागराज (इलाहाबाद) जिले का शंकरगढ़ क्षेत्र किस खनिज संसाधन के निष्कर्षण और प्रसंस्करण के लिए पूरे भारत में प्रसिद्ध है?",
        "options": [
            "Silica Sand (Glass Sand)",
            "Bauxite Ore",
            "Limestone",
            "Gypsum"
        ],
        "optionsHindi": [
            "सिलिका बालू (कांच बालू)",
            "बॉक्साइट अयस्क",
            "चूना पत्थर",
            "जिप्सम"
        ],
        "correct": 0,
        "hints": [
            "Hint 1: Essential raw material for the glass and foundry industry.",
            "Hint 2: Derived from the weathering of Vindhyan sandstones.",
            "Hint 3: Supplies glass factories in Firozabad ('City of Bangles')."
        ],
        "trapAlert": "Bauxite is found in Banda/Chitrakoot, while Shankargarh is famous for Silica Sand.",
        "explanation": "Shankargarh in Prayagraj district is India's leading producer of high-grade Silica Sand (Glass Sand), supplying the glass manufacturing clusters of Firozabad and Northern India.",
        "explanationHindi": "प्रयागराज जिले का शंकरगढ़ क्षेत्र उच्च गुणवत्ता वाली 'सिलिका बालू' (कांच बालू) के उत्पादन के लिए प्रसिद्ध है, जो फिरोजाबाद के कांच उद्योग के लिए मुख्य कच्चा माल है।"
    },
    {
        "id": "geo_q_514",
        "topic": "Natural Hazards & Disasters",
        "subtopic": "UPPSC Special - UP Disasters",
        "examType": "UPPSC Special",
        "difficulty": "Medium",
        "question": "Which division of Uttar Pradesh experiences the highest frequency of recurrent riverine floods and waterborne epidemics (such as Japanese Encephalitis) during the monsoon?",
        "questionHindi": "उत्तर प्रदेश का कौन सा मंडल मानसून के दौरान बार-बार आने वाली नदीय बाढ़ और जलजनित महामारियों (जैसे जापानी इंसेफेलाइटिस) की उच्चतम आवृत्ति का अनुभव करता है?",
        "options": [
            "Gorakhpur & Basti Divisions (Eastern Terai Plains)",
            "Jhansi & Chitrakoot Divisions (Bundelkhand)",
            "Agra & Aligarh Divisions (Western Plains)",
            "Meerut & Saharanpur Divisions (Upper Doab)"
        ],
        "optionsHindi": [
            "गोरखपुर एवं बस्ती मंडल (पूर्वी तराई मैदान)",
            "झांसी एवं चित्रकूट मंडल (बुंदेलखंड)",
            "आगरा एवं अलीगढ़ मंडल (पश्चिमी मैदान)",
            "मेरठ एवं सहारनपुर मंडल (ऊपरी दोआब)"
        ],
        "correct": 0,
        "hints": [
            "Hint 1: Drained by Rapti, Ghaghara, Rohini, and Kuwana rivers.",
            "Hint 2: Catchment runoff originates from the steep Churia hills of Nepal.",
            "Hint 3: Flat gradient causes extensive drainage congestion and waterlogging."
        ],
        "trapAlert": "Bundelkhand suffers from drought, whereas Gorakhpur-Basti experiences catastrophic floods.",
        "explanation": "The Gorakhpur and Basti divisions in eastern UP receive immense discharge from the Nepal Himalayas via the Rapti, Ghaghara, and Rohini rivers, resulting in extensive waterlogging and vector-borne diseases.",
        "explanationHindi": "पूर्वी यूपी के गोरखपुर और बस्ती मंडल में नेपाल से आने वाली राप्ती, घाघरा और रोहिणी नदियों के कारण भीषण बाढ़ और जलभराव होता है, जिससे जापानी इंसेफेलाइटिस का प्रकोप बढ़ता है।"
    },
    {
        "id": "geo_q_515",
        "topic": "Natural Hazards & Disasters",
        "subtopic": "Drought Management",
        "examType": "Conceptual Mastery",
        "difficulty": "Medium",
        "question": "According to the Manual for Drought Management (2016) issued by the Ministry of Agriculture, which trigger is mandatory for the declaration of drought by State Governments?",
        "questionHindi": "कृषि मंत्रालय द्वारा जारी सूखा प्रबंधन नियमावली (2016) के अनुसार, राज्य सरकारों द्वारा सूखा घोषित करने के लिए कौन सा अनिवार्य प्राथमिक ट्रिगर है?",
        "options": [
            "Rainfall deviation (Deficit of >= 60% or rainfall < 50% of normal over 3-4 consecutive weeks)",
            "Failure of tubewell electricity supply",
            "Fall in wholesale market grain prices",
            "Rise in local market food subsidies"
        ],
        "optionsHindi": [
            "वर्षा विचलन (3-4 लगातार हफ्तों में >= 60% की कमी या सामान्य से < 50% वर्षा)",
            "नलकूप बिजली आपूर्ति की विफलता",
            "थोक बाजार में अनाज की कीमतों में गिरावट",
            "स्थानीय बाजार में खाद्य सब्सिडी में वृद्धि"
        ],
        "correct": 0,
        "hints": [
            "Hint 1: The 2016 Manual has a two-step mandatory verification system.",
            "Hint 2: Step 1 assesses rainfall deficiency (Trigger 1).",
            "Hint 3: Step 2 examines impact indicators (NDVI, soil moisture, reservoir levels)."
        ],
        "trapAlert": "Declaration is strictly scientific and metric-driven, not based on market prices.",
        "explanation": "Under the 2016 Drought Manual, 'Trigger 1' requires mandatory rainfall deviation verification (>= 60% deficit or <50% normal rain for 3-4 consecutive weeks during monsoon).",
        "explanationHindi": "सूखा प्रबंधन नियमावली (2016) के अनुसार, प्राथमिक अनिवार्य ट्रिगर वर्षा विचलन (लगातार 3-4 हफ्तों में >=60% की कमी) है, जिसके बाद वनस्पति सूचकांक (NDVI) और मृदा नमी की जांच होती है।"
    }
]

# Append new questions
questions.extend(new_questions)

with open("public/data/questions.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, ensure_ascii=False, indent=2)

print(f"Successfully updated questions.json! New total questions: {len(questions)}")
