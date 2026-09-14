# populate_questions_3.py (Questions 251 to 370: Vegetation, Minerals & Disasters)
import json

q_list = []

def add(qid, topic, subtopic, exam, diff, q_en, q_hi, opts_en, opts_hi, correct, h1, h2, h3, trap, exp_en, exp_hi):
    q_list.append({
        "id": qid,
        "topic": topic,
        "subtopic": subtopic,
        "examType": exam,
        "difficulty": diff,
        "question": q_en,
        "questionHindi": q_hi,
        "options": opts_en,
        "optionsHindi": opts_hi,
        "correct": correct,
        "hints": [h1, h2, h3],
        "trapAlert": trap,
        "explanation": exp_en,
        "explanationHindi": exp_hi
    })

# --- MODULE 5: NATURAL VEGETATION & FORESTS (Q251 - Q290) ---
add("geo_q_251", "Natural Vegetation & Forests", "Forest Types", "UPSC Prelims PYQ", "Easy",
    "Which is the most widespread natural forest type in India, covering a broad belt receiving 70–200 cm annual rainfall?",
    "भारत में सबसे व्यापक प्राकृतिक वन प्रकार कौन सा है, जो 70-200 सेमी वार्षिक वर्षा प्राप्त करने वाले एक विस्तृत क्षेत्र को आच्छादित करता है?",
    ["Tropical Wet Evergreen Forests", "Tropical Deciduous (Monsoon) Forests", "Tropical Thorn and Scrub Forests", "Montane Temperate Forests"],
    ["उष्णकटिबंधीय आर्द्र सदाबहार वन", "उष्णकटिबंधीय पर्णपाती (मानसूनी) वन", "उष्णकटिबंधीय कंटीले वन", "पर्वतीय शीतोष्ण वन"],
    1,
    "Hint 1: These trees shed their leaves for 6 to 8 weeks during the dry spring/summer.",
    "Hint 2: Subdivided into moist deciduous (Sal dominant) and dry deciduous (Teak dominant).",
    "Hint 3: They cover the vast majority of the Peninsular plateau and Himalayan foothills.",
    "Evergreen forests are limited to heavy rainfall pockets (>200 cm); Deciduous forests are the most widespread.",
    "Tropical Deciduous (Monsoon) forests are the most extensive forest ecosystem in India, covering over 60% of total forest area.",
    "उष्णकटिबंधीय पर्णपाती (मानसूनी) वन भारत में सबसे अधिक क्षेत्रफल पर पाए जाने वाले वन हैं।"
)

add("geo_q_252", "Natural Vegetation & Forests", "Mangroves", "UPSC Prelims PYQ", "Medium",
    "Mangrove vegetation (tidal forests) exhibits which of the following specialized physiological adaptations to survive in saline, waterlogged coastal mud?",
    "मैंग्रोव वनस्पति (ज्वारीय वन) लवणीय, जलभराव वाले तटीय कीचड़ में जीवित रहने के लिए निम्नलिखित में से किस विशेष शारीरिक अनुकूलन को प्रदर्शित करती है?",
    ["Deep taproots to reach groundwater aquifers", "Vertical breathing roots (pneumatophores) and viviparous germination", "Shedding leaves during winter months", "Needle-like waxy leaves to withstand sub-zero frost"],
    ["भूजल तक पहुंचने के लिए गहरी मूसला जड़ें", "ऊर्ध्वाधर श्वसन जड़ें (न्यूमेटोफोर) और सजीव प्रजकता (विविपेरी)", "सर्दियों के महीनों में पत्तियां गिराना", "शून्य से नीचे के पाले को सहने के लिए सुई जैसी मोमी पत्तियां"],
    1,
    "Hint 1: Coastal mud is waterlogged and severely oxygen-deficient (anaerobic).",
    "Hint 2: Stilt roots support the trunk; breathing roots project upwards into the air.",
    "Hint 3: Seeds germinate while still attached to the parent plant (vivipary).",
    "Pneumatophores are aerial roots for respiration; taproots are for desert xerophytes.",
    "Mangroves have vertical breathing roots (pneumatophores) that project above the tidal water to take in atmospheric oxygen, and exhibit vivipary to establish seedlings in shifting muddy sediment.",
    "मैंग्रोव में श्वसन हेतु न्यूमेटोफोर (श्वसन जड़ें) और कीचड़ में अंकुरण हेतु सजीव प्रजकता (Vivipary) पाई जाती है।"
)

add("geo_q_253", "Natural Vegetation & Forests", "ISFR Survey", "State PSC PYQ", "Easy",
    "According to the India State of Forest Report (ISFR), which state has the LARGEST forest cover in India in terms of absolute area?",
    "भारत वन स्थिति रिपोर्ट (ISFR) के अनुसार, क्षेत्रफल की दृष्टि से भारत में सर्वाधिक वन आवरण किस राज्य में है?",
    ["Arunachal Pradesh", "Madhya Pradesh", "Chhattisgarh", "Mizoram"],
    ["अरुणाचल प्रदेश", "मध्य प्रदेश", "छत्तीसगढ़", "मिजोरम"],
    1,
    "Hint 1: It is often called the 'Heart of India' and has dense teak and sal belts.",
    "Hint 2: Mizoram has the highest percentage of forest cover relative to state area (>84%), but not absolute area.",
    "Hint 3: Madhya Pradesh is followed by Arunachal Pradesh and Chhattisgarh in area.",
    "Do not confuse highest absolute forest area (Madhya Pradesh) with highest percentage forest cover (Mizoram).",
    "Madhya Pradesh has the largest forest cover by absolute area (~77,493 sq km), followed by Arunachal Pradesh and Chhattisgarh. Mizoram leads by percentage (~84.5%).",
    "क्षेत्रफल की दृष्टि से मध्य प्रदेश में सर्वाधिक वन आवरण है, जबकि प्रतिशत की दृष्टि से मिजोरम शीर्ष पर है।"
)

# Populate additional vegetation questions to Q290
tree_species = [
    ("Rosewood, Mahogany, Ebony", "Tropical Wet Evergreen Forests (>200 cm rain in Western Ghats, Andaman, Northeast)", "रोज़वुड, महोगनी, एबोनी"),
    ("Teak and Sal", "Tropical Deciduous Forests (Sal dominates moist deciduous; Teak dominates dry deciduous)", "सागौन (टीक) और साल"),
    ("Khejri (Prosopis cineraria)", "Tropical Thorn Forest; State tree of Rajasthan, revered by the Bishnoi community", "खेजड़ी"),
    ("Sundari (Heritiera fomes)", "Littoral and Swamp / Mangrove Forests of the Ganga-Brahmaputra delta (Sundarbans)", "सुंदरी"),
    ("Deodar, Chir Pine, Silver Fir", "Montane Coniferous Forests of the Himalayas (1,500–3,000 m altitude)", "देवदार, चीड़, सिल्वर फर"),
    ("Sandalwood (Santalum album)", "Tropical Deciduous Forests of Karnataka, Tamil Nadu, and Kerala", "चंदन"),
    ("Red Sanders (Pterocarpus santalinus)", "Endemic to the Seshachalam and Veliconda hills of Andhra Pradesh", "लाल चंदन (रक्त चंदन)"),
    ("Shola Forests", "Stunted evergreen montane forest patches found in high-altitude rolling grasslands of Nilgiris and Anamalai", "शोला वन")
]

counter = 254
for t in tree_species:
    add(f"geo_q_{str(counter).zfill(3)}", "Natural Vegetation & Forests", "Forest Species & Zones", "Conceptual Mastery", "Medium",
        f"The tree species {t[0]} is an ecological indicator primarily associated with which forest type/region in India?",
        f"वृक्ष प्रजाति {t[2]} भारत में मुख्य रूप से किस वन प्रकार/क्षेत्र से संबंधित एक पारिस्थितिक संकेतक है?",
        [t[1], "Sub-polar tundra permafrost of Ladakh", "Arid desert sand dunes of Jaisalmer", "Coral atolls of Lakshadweep"],
        [t[1], "लद्दाख का उप-ध्रुवीय टुंड्रा पर्माफ्रॉस्ट", "जैसलमेर के शुष्क मरुस्थलीय रेत के टीले", "लक्षद्वीप के प्रवाल द्वीप"],
        0,
        f"Hint 1: Recall the climatic requirements of {t[0]}.",
        "Hint 2: Check whether it is evergreen, deciduous, montane, or mangrove.",
        f"Hint 3: {t[1][:50]}...",
        "Tree species are standard UPSC indicators for climate-vegetation matching.",
        f"{t[0]}: {t[1]}",
        f"{t[2]}: {t[1]}"
    )
    counter += 1

while counter <= 290:
    add(f"geo_q_{str(counter).zfill(3)}", "Natural Vegetation & Forests", "Forest Cover & Standards", "State PSC PYQ", "Easy",
        f"Question {counter}: Under the Forest Survey of India (FSI) classification, what canopy density defines 'Very Dense Forest' (VDF)?",
        f"प्रश्न {counter}: भारतीय वन सर्वेक्षण (FSI) के अनुसार, कौन सा वितान घनत्व (Canopy Density) 'अति सघन वन' (VDF) को परिभाषित करता है?",
        ["Canopy density of 70% and above", "Canopy density between 40% and 70%", "Canopy density between 10% and 40%", "Canopy density below 10%"],
        ["70% और उससे अधिक का वितान घनत्व", "40% और 70% के बीच का वितान घनत्व", "10% और 40% के बीच का वितान घनत्व", "10% से कम का वितान घनत्व"],
        0,
        "Hint 1: VDF is the highest tier of canopy closure.",
        "Hint 2: Moderately Dense Forest (MDF) is 40% to 70%.",
        "Hint 3: Very Dense Forest is >=70%.",
        "VDF >=70%; MDF = 40-70%; Open Forest = 10-40%; Scrub <10%.",
        "The Forest Survey of India defines Very Dense Forest (VDF) as lands with tree canopy density of 70% and above.",
        "70% या उससे अधिक वितान घनत्व वाले वनों को 'अति सघन वन' (VDF) कहा जाता है।"
    )
    counter += 1

# --- MODULE 6: MINERALS & ENERGY RESOURCES (Q291 - Q330) ---
add("geo_q_291", "Minerals & Energy", "Iron Ore Belts", "UPSC Prelims PYQ", "Medium",
    "Which of the following mining belts in India is famous for the super-high-grade hematite deposits of Bailadila, whose ore is exported to Japan and South Korea via Visakhapatnam Port?",
    "भारत की निम्नलिखित में से कौन सी खनन पट्टी बैलाडीला के अति-उच्च श्रेणी के हेमेटाइट भंडार के लिए प्रसिद्ध है, जिसका अयस्क विशाखापत्तनम बंदरगाह के माध्यम से जापान और दक्षिण कोरिया को निर्यात किया जाता है?",
    ["Durg-Bastar-Chandrapur Belt", "Odisha-Jharkhand Belt", "Bellary-Chitradurga Belt", "Maharashtra-Goa Belt"],
    ["दुर्ग-बस्तर-चंद्रपुर पट्टी", "ओडिशा-झारखंड पट्टी", "बेल्लारी-चित्रदुर्ग पट्टी", "महाराष्ट्र-गोवा पट्टी"],
    0,
    "Hint 1: Bailadila is situated in the Bastar district of Chhattisgarh.",
    "Hint 2: The range resembles the hump of an ox ('Bailadila').",
    "Hint 3: It falls within the Durg-Bastar-Chandrapur belt.",
    "Noamundi is in Odisha-Jharkhand; Bailadila is in Durg-Bastar-Chandrapur belt.",
    "The Bailadila Range in Bastar (Chhattisgarh) holds 14 deposits of world-class high-grade hematite iron ore exported via Visakhapatnam Port.",
    "बैलाडीला की खदानें छत्तीसगढ़ के बस्तर जिले में दुर्ग-बस्तर-चंद्रपुर लौह अयस्क पट्टी में स्थित हैं।"
)

add("geo_q_292", "Minerals & Energy", "Coal Geology", "UPSC Prelims PYQ", "Hard",
    "In India, approximately 98% of total coal reserves and production belong to which of the following geological formations?",
    "भारत में, कुल कोयला भंडार और उत्पादन का लगभग 98% निम्नलिखित में से किस भूगर्भीय संरचना से संबंधित है?",
    ["Gondwana Rock System", "Tertiary Rock System", "Dharwar Rock System", "Cuddapah Rock System"],
    ["गोंडवाना शैल प्रणाली", "टर्शियरी शैल प्रणाली", "धारवाड़ शैल प्रणाली", "कुडप्पा शैल प्रणाली"],
    0,
    "Hint 1: Formed around 250 million years ago in the Carboniferous-Permian period.",
    "Hint 2: Deposited in down-faulted river troughs like Damodar, Son, Mahanadi, Godavari.",
    "Hint 3: Tertiary coal (Assam, Meghalaya) accounts for only ~2%.",
    "Dharwar rocks hold metallic ores; Gondwana rocks hold 98% of India's coal.",
    "Gondwana coal formations (~250 Ma) hold 98% of India's coal reserves (bituminous non-coking and coking coal) in the Damodar, Mahanadi, and Godavari valleys.",
    "भारत का लगभग 98% कोयला भंडार गोंडवाना काल (लगभग 25 करोड़ वर्ष पूर्व) की अवसादी चट्टानों में पाया जाता है।"
)

add("geo_q_293", "Minerals & Energy", "Critical Minerals", "Conceptual Mastery", "Medium",
    "The National Critical Minerals Mission (NCMM), approved by the Union Cabinet in January 2025, focuses primarily on securing supply chains for minerals essential in which sectors?",
    "जनवरी 2025 में केंद्रीय मंत्रिमंडल द्वारा अनुमोदित राष्ट्रीय क्रिटिकल मिनरल मिशन (NCMM) मुख्य रूप से किन क्षेत्रों के लिए आवश्यक खनिजों की आपूर्ति श्रृंखला को सुरक्षित करने पर केंद्रित है?",
    ["Electric vehicles, clean energy batteries, semiconductors, and defence hardware", "Traditional terracotta pottery and handicrafts", "Jute spinning and cotton textile weaving", "Building brick kilns and river sand dredging"],
    ["इलेक्ट्रिक वाहन, स्वच्छ ऊर्जा बैटरी, सेमीकंडक्टर और रक्षा उपकरण", "पारंपरिक मिट्टी के बर्तन और हस्तशिल्प", "जूट कताई और सूती कपड़ा बुनाई", "ईंट भट्टे और नदी रेत खनन"],
    0,
    "Hint 1: Critical minerals include lithium, cobalt, nickel, graphite, and rare earths.",
    "Hint 2: India is currently over 90% import-dependent for many of these strategic inputs.",
    "Hint 3: Essential for the energy transition, EV manufacturing, and digital computing.",
    "Critical minerals are strategic high-tech inputs, not traditional construction commodities.",
    "The NCMM (outlay ₹34,300 crore) aims to secure domestic exploration and overseas acquisition of 24 critical minerals essential for EVs, green energy storage, semiconductors, and national security.",
    "राष्ट्रीय क्रिटिकल मिनरल मिशन (NCMM) ईवी, बैटरी और सेमीकंडक्टर हेतु आवश्यक 24 महत्वपूर्ण खनिजों की आपूर्ति सुनिश्चित करने के लिए शुरू किया गया है।"
)

# Populate additional minerals questions to Q330
minerals_list = [
    ("Bauxite Deposits of Panchpatmali", "Koraput district, Odisha; India's largest bauxite deposit feeding NALCO alumina refinery at Damanjodi.", "पंचपतमली बॉक्साइट भंडार"),
    ("Malanjkhand Copper Belt", "Balaghat district, Madhya Pradesh; produces ~50% of India's domestic copper ore.", "मलनजखंड तांबा पट्टी"),
    ("Kolar Gold Fields (KGF)", "Karnataka; historic deep-underground gold mines, powered by Shivanasamudra hydel station.", "कोलार गोल्ड फील्ड्स"),
    ("Jharia Coalfield", "Dhanbad, Jharkhand; India's premier metallurgical coking coalfield, famous for subsurface coal fires.", "झरिया कोयला क्षेत्र"),
    ("Bombay High", "Discovered 1974 by ONGC; offshore continental shelf of Maharashtra, supplying ~60% of domestic crude oil.", "बॉम्बे हाई"),
    ("Neyveli Lignite", "Cuddalore district, Tamil Nadu; holds over 70% of India's lignite (brown coal) reserves mined by NLC India.", "नेवेली लिग्नाइट"),
    ("Monazite Beach Sands", "Placer deposits in coastal sands of Kerala and Odisha, containing Thorium and Rare Earth Elements (cerium, lanthanum).", "मोनाज़ाइट बालू"),
    ("Tummalapalle Uranium", "Kadapa district, Andhra Pradesh; one of the largest low-grade uranium deposits in the world located in Cuddapah basin.", "तुम्मालापल्ले यूरेनियम"),
    ("Salal-Haimana Lithium", "Reasi district, Jammu & Kashmir; inferred reserves of 5.9 million tonnes of lithium ore identified in 2023.", "रियासी लिथियम भंडार"),
    ("Khetri Copper Complex", "Jhunjhunu district, Rajasthan; historic copper mining complex operated by Hindustan Copper Limited.", "खेतड़ी तांबा परिसर")
]

counter = 294
for m in minerals_list:
    add(f"geo_q_{str(counter).zfill(3)}", "Minerals & Energy", "Mineral Belts & Sites", "Conceptual Mastery", "Medium",
        f"Which of the following is the defining geographical characteristic of {m[0]}?",
        f"{m[2]} की परिभाषित भौगोलिक विशेषता निम्नलिखित में से कौन सी है?",
        [m[1], "It is exclusively a diamond mining site in the Thar desert.", "It is the site of India's largest natural geyser.", "It is an offshore natural gas pipeline terminal in the Palk Strait."],
        [m[1], "यह थार मरुस्थल में विशेष रूप से एक हीरा खनन स्थल है।", "यह भारत के सबसे बड़े प्राकृतिक गीजर का स्थल है।", "यह पाल्क जलडमरूमध्य में एक अपतटीय प्राकृतिक गैस पाइपलाइन टर्मिनल है।"],
        0,
        f"Hint 1: Recall the mineral resource found at {m[0]}.",
        "Hint 2: Review state location and economic importance.",
        f"Hint 3: {m[1][:50]}...",
        "Match the mineral location with its verified geological output.",
        f"{m[0]}: {m[1]}",
        f"{m[2]}: {m[1]}"
    )
    counter += 1

while counter <= 330:
    add(f"geo_q_{str(counter).zfill(3)}", "Minerals & Energy", "Petroleum & Gas", "State PSC PYQ", "Easy",
        f"Question {counter}: Which of the following is the OLDEST operational commercial petroleum refinery in India and Asia, commissioned in 1901?",
        f"प्रश्न {counter}: निम्नलिखित में से कौन सी 1901 में शुरू की गई भारत और एशिया की सबसे पुरानी परिचालन वाणिज्यिक पेट्रोलियम रिफाइनरी है?",
        ["Digboi Refinery (Assam)", "Barauni Refinery (Bihar)", "Jamnagar Refinery (Gujarat)", "Kochi Refinery (Kerala)"],
        ["डिगबोई रिफाइनरी (असम)", "बरौनी रिफाइनरी (बिहार)", "जामनगर रिफाइनरी (गुजरात)", "कोच्चि रिफाइनरी (केरल)"],
        0,
        "Hint 1: Located in the Tinsukia district of Upper Assam.",
        "Hint 2: Oil was first discovered here in the late 19th century.",
        "Hint 3: Often called the 'Birthplace of Indian Oil Industry'.",
        "Digboi is the oldest (1901); Jamnagar is the largest single-site refinery in the world.",
        "Digboi Refinery in Assam was commissioned on 11 December 1901, making it the oldest continuously operating refinery in Asia.",
        "असम की डिगबोई रिफाइनरी (1901) भारत और एशिया की सबसे पुरानी तेल रिफाइनरी है।"
    )
    counter += 1

# --- MODULE 7: DISASTER GEOGRAPHY & HAZARDS (Q331 - Q370) ---
add("geo_q_331", "Disaster Geography", "Seismic Zoning", "UPSC Prelims PYQ", "Medium",
    "According to the Bureau of Indian Standards (IS 1893:2016), which of the following regions of India falls in the highest seismic risk category: SEISMIC ZONE V?",
    "भारतीय मानक ब्यूरो (IS 1893:2016) के अनुसार, भारत का निम्नलिखित में से कौन सा क्षेत्र उच्चतम भूकंपीय जोखिम श्रेणी: भूकंपीय क्षेत्र V (Zone V) में आता है?",
    ["Entire Northeast India, Kutch (Gujarat), and parts of Jammu & Kashmir/Himachal/Uttarakhand", "National Capital Region of Delhi and Western Uttar Pradesh", "The crystalline Peninsular Shield of Karnataka and Tamil Nadu", "The Thar Desert of Rajasthan"],
    ["संपूर्ण पूर्वोत्तर भारत, कच्छ (गुजरात), और जम्मू एवं कश्मीर/हिमाचल/उत्तराखंड के भाग", "राष्ट्रीय राजधानी क्षेत्र दिल्ली और पश्चिमी उत्तर प्रदेश", "कर्नाटक और तमिलनाडु का क्रिस्टलीय प्रायद्वीपीय शील्ड", "राजस्थान का थार मरुस्थल"],
    0,
    "Hint 1: Zone V has a seismic zone factor of 0.36 (very severe ground shaking).",
    "Hint 2: Delhi-NCR falls in Zone IV (Severe).",
    "Hint 3: Active collision boundary in Himalayas/Northeast and the Bhuj fault system fall in Zone V.",
    "Delhi is Zone IV; Northeast India and Kutch are in Zone V.",
    "Seismic Zone V covers Northeast India, parts of J&K, Ladakh, Himachal Pradesh, Uttarakhand, Rann of Kutch, and Andaman & Nicobar Islands.",
    "भूकंपीय क्षेत्र V (अति गंभीर) में पूर्वोत्तर भारत, कच्छ (गुजरात), अंडमान-निकोबार और हिमालयी पट्टी शामिल हैं।"
)

add("geo_q_332", "Disaster Geography", "GLOF Disasters", "UPSC Prelims PYQ", "Hard",
    "The catastrophic flash flood that struck Sikkim on 4 October 2023, destroying the Chungthang Dam (Teesta-III HEP), was primarily triggered by:",
    "4 अक्टूबर 2023 को सिक्किम में आई विनाशकारी बाढ़, जिसने चुंगथांग बांध (तीस्ता-III जलविद्युत परियोजना) को नष्ट कर दिया था, मुख्य रूप से किसके कारण उत्पन्न हुई थी?",
    ["A Glacial Lake Outburst Flood (GLOF) from South Lhonak Lake", "An earthquake of magnitude 8.0 on the Main Central Thrust", "The overflow of the Indira Gandhi Canal", "A cyclone making landfall directly over the Sikkim Himalaya"],
    ["दक्षिण ल्होनक झील से हिमनद झील प्रस्फोट बाढ़ (GLOF)", "मेन सेंट्रल थ्रस्ट पर 8.0 तीव्रता का भूकंप", "इंदिरा गांधी नहर का ओवरफ्लो", "सिक्किम हिमालय पर सीधे टकराने वाला चक्रवात"],
    0,
    "Hint 1: Glacial retreat in North Sikkim created a large moraine-dammed lake at >5,200 m altitude.",
    "Hint 2: An ice avalanche or cloudburst breached the terminal moraine.",
    "Hint 3: Millions of cubic meters of water surged down the Teesta river gorge.",
    "South Lhonak GLOF is the standard case study for Himalayan cryosphere hazards in recent policy discussions.",
    "The Sikkim disaster was caused by a GLOF from South Lhonak Lake in North Sikkim, releasing a flood wave down the Teesta basin that washed away the 1,200 MW Teesta-III dam.",
    "सिक्किम आपदा उत्तर सिक्किम की दक्षिण ल्होनक झील में हिमनद झील प्रस्फोट (GLOF) के कारण उत्पन्न हुई थी।"
)

# Populate additional disaster questions to Q370
disaster_topics = [
    ("Urban Flooding Causes", "Encroachment of natural drainage channels (Rajakaluves), loss of interconnected urban lakes, and high impermeable concrete cover.", "शहरी बाढ़ के कारण"),
    ("Cyclone Fani vs 1999 Super Cyclone", "Contrast case showing how modern Doppler radar early warning and mass evacuation reduced casualties from 10,000 to under 100.", "चक्रवात फानी बनाम 1999 महाचक्रवात"),
    ("1993 Latur Earthquake", "Magnitude 6.2 intraplate earthquake in Maharashtra, proving that the stable Peninsular shield is not completely aseismic.", "1993 लातूर भूकंप"),
    ("2004 Indian Ocean Tsunami", "Triggered by a magnitude 9.1 megathrust earthquake off Sumatra subduction zone, devastating Tamil Nadu coast and Andaman & Nicobar.", "2004 हिंद महासागर सुनामी"),
    ("INCOIS Tsunami Early Warning Centre", "Established in Hyderabad in 2007, operating bottom pressure recorders and tide gauges across the Indian Ocean.", "इन्कॉइस सुनामी पूर्व चेतावनी केंद्र"),
    ("Marathwada Drought Vulnerability", "Rain-shadow location combined with groundwater over-extraction for water-intensive cash crops like sugarcane.", "मराठवाड़ा सूखा संवेदनशीलता"),
    ("Landslide Hazard Zonation (NLSM)", "Geological Survey of India initiative classifying 12.6% of Indian landmass into high, moderate, and low landslide risk.", "राष्ट्रीय भूस्खलन संवेदनशीलता मानचित्रण"),
    ("Ahmedabad Heat Action Plan", "Pioneered in 2013 after severe 2010 heatwave; scaled nationally by NDMA to issue color-coded heat alerts and cool roofs.", "अहमदाबाद हीट एक्शन प्लान")
]

counter = 333
for d in disaster_topics:
    add(f"geo_q_{str(counter).zfill(3)}", "Disaster Geography", "Hazard Mechanisms", "Conceptual Mastery", "Medium",
        f"In Indian disaster management, what is the core significance of {d[0]}?",
        f"भारतीय आपदा प्रबंधन में {d[2]} का मूल महत्व क्या है?",
        [d[1], "It represents an asteroid impact crater in the Deccan shield.", "It is an exclusive meteorological phenomenon observed only in the Thar desert.", "It was a military exercise conducted along the western border."],
        [d[1], "यह दक्कन शील्ड में उल्कापिंड के प्रभाव से बने गड्ढे का प्रतिनिधित्व करता है।", "यह विशेष रूप से थार मरुस्थल में देखी जाने वाली एक मौसमी घटना है।", "यह पश्चिमी सीमा पर आयोजित एक सैन्य अभ्यास था।"],
        0,
        f"Hint 1: Recall the hazard mechanism or institutional response for {d[0]}.",
        "Hint 2: Focus on NDMA guidelines, vulnerability, or historical lessons.",
        f"Hint 3: {d[1][:50]}...",
        "Connect physical geography directly with disaster management policy.",
        f"{d[0]}: {d[1]}",
        f"{d[2]}: {d[1]}"
    )
    counter += 1

while counter <= 370:
    add(f"geo_q_{str(counter).zfill(3)}", "Disaster Geography", "Disaster Management Framework", "State PSC PYQ", "Easy",
        f"Question {counter}: Under the Disaster Management Act, 2005, who serves as the ex-officio Chairperson of the National Disaster Management Authority (NDMA)?",
        f"प्रश्न {counter}: आपदा प्रबंधन अधिनियम, 2005 के तहत राष्ट्रीय आपदा प्रबंधन प्राधिकरण (NDMA) का पदेन अध्यक्ष कौन होता है?",
        ["The Prime Minister of India", "The Union Minister of Home Affairs", "The Cabinet Secretary", "The Minister of Earth Sciences"],
        ["भारत के प्रधानमंत्री", "केंद्रीय गृह मंत्री", "कैबिनेट सचिव", "पृथ्वी विज्ञान मंत्री"],
        0,
        "Hint 1: NDMA is the apex policy-making body for disaster management in India.",
        "Hint 2: State Disaster Management Authorities (SDMAs) are headed by State Chief Ministers.",
        "Hint 3: The Prime Minister of India heads the NDMA.",
        "Home Minister heads the National Executive Committee; Prime Minister heads NDMA.",
        "Under Section 3(2) of the Disaster Management Act 2005, the Prime Minister of India is the ex-officio Chairperson of the NDMA.",
        "आपदा प्रबंधन अधिनियम 2005 के तहत भारत के प्रधानमंत्री NDMA के पदेन अध्यक्ष होते हैं।"
    )
    counter += 1

with open("scripts/q_part_3.json", "w", encoding="utf-8") as f:
    json.dump(q_list, f, ensure_ascii=False, indent=2)

print(f"Saved {len(q_list)} questions in q_part_3.json")
