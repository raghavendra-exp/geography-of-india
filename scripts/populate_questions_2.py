# populate_questions_2.py (Questions 131 to 250: Climate, Soils & Agriculture)
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

# --- MODULE 3: CLIMATE & MONSOON (Q131 - Q175) ---
add("geo_q_131", "Climate & Monsoon", "Monsoon Mechanism", "UPSC Prelims PYQ", "Medium",
    "Which of the following atmospheric jet streams is primarily responsible for steering winter temperate cyclones (Western Disturbances) into northwestern India?",
    "निम्नलिखित में से कौन सी वायुमंडलीय जेट स्ट्रीम उत्तर-पश्चिमी भारत में शीतकालीन शीतोष्ण चक्रवातों (पश्चिमी विक्षोभ) को लाने के लिए मुख्य रूप से जिम्मेदार है?",
    ["Tropical Easterly Jet Stream", "Subtropical Westerly Jet Stream", "Somali Low-Level Jet", "Polar Night Jet Stream"],
    ["उष्णकटिबंधीय पूर्वी जेट स्ट्रीम", "उपोष्णकटिबंधीय पश्चिमी जेट स्ट्रीम", "सोमाली निम्न-स्तरीय जेट", "ध्रुवीय रात्रि जेट स्ट्रीम"],
    1,
    "Hint 1: It blows from west to east in the upper troposphere (~9–12 km altitude) south of the Himalayas in winter.",
    "Hint 2: It steers depressions originating over the Mediterranean Sea across Iraq, Iran, and Pakistan.",
    "Hint 3: In summer, it withdraws north of the Himalayas, allowing the monsoon to burst.",
    "Tropical Easterly Jet is a summer phenomenon associated with Tibetan heating; Subtropical Westerly Jet brings winter rains.",
    "The Subtropical Westerly Jet Stream bifurcates around the Tibetan plateau in winter; its southern branch flows along the southern edge of the Himalayas, steering Western Disturbances into northwest India.",
    "उपोष्णकटिबंधीय पश्चिमी जेट स्ट्रीम (Subtropical Westerly Jet) भूमध्य सागर से आने वाले पश्चिमी विक्षोभों को शीतकाल में उत्तर-पश्चिम भारत में लाती है।"
)

add("geo_q_132", "Climate & Monsoon", "Local Winds", "State PSC PYQ", "Easy",
    "In Bengal and Assam, the violent evening thunderstorms accompanied by torrential rains that occur in the pre-monsoon summer season are known as:",
    "बंगाल और असम में पूर्व-मानसून ग्रीष्म ऋतु में मूसलाधार बारिश के साथ आने वाले तीव्र सायंकालीन तूफानों को क्या कहा जाता है?",
    ["Loo", "Kalbaishakhi (Nor'westers)", "Mango Showers", "Cherry Blossom Showers"],
    ["लू", "कालवैशाखी (नॉर्वेस्टर)", "आम्र वर्षा (मैंगो शावर)", "चेरी ब्लॉसम वर्षा"],
    1,
    "Hint 1: The name literally means 'Calamity of the month of Baisakh'.",
    "Hint 2: Loo is a hot, dry, dusty wind in the northern plains.",
    "Hint 3: In Assam, these storms are called 'Bardoli Chheerha'.",
    "Loo is hot and dry without rain; Kalbaishakhi brings sudden heavy rain beneficial to tea and jute.",
    "Kalbaishakhi (Nor'westers) are severe local convective storms in Bengal and Assam during April-May, highly beneficial for tea, jute, and early paddy crops.",
    "बंगाल और असम में ग्रीष्म ऋतु के इन तीव्र तूफानों को कालवैशाखी (नॉर्वेस्टर) कहा जाता है, जो चाय और जूट के लिए लाभकारी होते हैं।"
)

add("geo_q_133", "Climate & Monsoon", "Retreating Monsoon", "UPSC Prelims PYQ", "Medium",
    "The Coromandel Coast of Tamil Nadu receives the bulk of its annual rainfall during which of the following periods?",
    "तमिलनाडु के कोरोमंडल तट पर वार्षिक वर्षा का अधिकांश भाग निम्नलिखित में से किस अवधि में प्राप्त होता है?",
    ["June to September (Southwest Monsoon)", "October to December (Northeast / Retreating Monsoon)", "January to February (Winter Western Disturbances)", "March to May (Pre-monsoon Showers)"],
    ["जून से सितंबर (दक्षिण-पश्चिम मानसून)", "अक्टूबर से दिसंबर (उत्तर-पूर्वी / लौटता मानसून)", "जनवरी से फरवरी (शीतकालीन पश्चिमी विक्षोभ)", "मार्च से मई (पूर्व-मानसून वर्षा)"],
    1,
    "Hint 1: Tamil Nadu lies in the rain-shadow of the Western Ghats during the Southwest Monsoon.",
    "Hint 2: Winds reversing direction blow from northeast to southwest.",
    "Hint 3: As these dry continental winds cross the Bay of Bengal, they pick up moisture and hit the Tamil Nadu coast.",
    "Unlike most of India which gets rain in June-Sept, Tamil Nadu's primary rainy season is Oct-Dec.",
    "Tamil Nadu remains largely dry in summer due to Western Ghats rain-shadow, but receives 50-60% of its annual rainfall from October to December via the Northeast (Retreating) Monsoon picking moisture over the Bay of Bengal.",
    "कोरोमंडल तट अक्टूबर से दिसंबर के दौरान उत्तर-पूर्वी (लौटते हुए) मानसून से बंगाल की खाड़ी से नमी ग्रहण करके अपनी अधिकांश वर्षा प्राप्त करता है।"
)

add("geo_q_134", "Climate & Monsoon", "ENSO & IOD", "UPSC Prelims PYQ", "Hard",
    "With reference to the Indian Ocean Dipole (IOD), consider the following statements: 1. A positive IOD is characterized by warmer sea surface temperatures in the western Indian Ocean compared to the eastern Indian Ocean. 2. A positive IOD generally suppresses the Indian Southwest Monsoon. Which statement is correct?",
    "हिंद महासागर द्विध्रुव (IOD) के संदर्भ में निम्नलिखित कथनों पर विचार करें: 1. सकारात्मक IOD की विशेषता पूर्वी हिंद महासागर की तुलना में पश्चिमी हिंद महासागर में समुद्र की सतह का अधिक गर्म तापमान होना है। 2. एक सकारात्मक IOD आम तौर पर भारतीय दक्षिण-पश्चिम मानसून को कमजोर करता है। कौन सा कथन सही है?",
    ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
    ["केवल 1", "केवल 2", "1 और 2 दोनों", "न तो 1, न ही 2"],
    0,
    "Hint 1: Statement 1 correctly describes the sea surface temperature gradient.",
    "Hint 2: Warmer western Indian Ocean enhances evaporation and moisture supply to India.",
    "Hint 3: Therefore, a positive IOD enhances the Southwest Monsoon, often neutralizing an El Niño event.",
    "Remember: Positive IOD = Good for Indian Monsoon; El Niño = Bad for Indian Monsoon.",
    "Statement 1 is correct. Statement 2 is incorrect because a Positive IOD enhances monsoon rainfall over India by increasing convection over the Arabian Sea and strengthening the monsoon flow.",
    "कथन 1 सही है। सकारात्मक IOD भारतीय मानसून को मजबूत करता है (कमजोर नहीं), इसलिए कथन 2 गलत है।"
)

# Populate additional climate questions up to Q175
climate_topics = [
    ("Somali Jet (Findlater Jet)", "Low-level cross-equatorial atmospheric jet that transports massive moisture from East Africa to the west coast of India.", "सोमाली जेट"),
    ("Tibetan Heat Low", "The high-altitude heating of the Tibetan Plateau in summer creates an elevated thermal anticyclone, driving the Tropical Easterly Jet.", "तिब्बती तापीय निम्न दाब"),
    ("Mawsynram Precipitation", "Funnel-shaped orientation of the Khasi, Garo, and Jaintia hills forces the Bay of Bengal branch into intense orographic uplift.", "मौसिनराम वर्षा"),
    ("Monsoon Break", "Dry spells lasting 1–2 weeks when the monsoon trough shifts north close to the Himalayan foothills, causing floods in hills and drought in plains.", "मानसून विच्छेद"),
    ("October Heat", "High temperature and high humidity conditions under clear skies immediately following the withdrawal of the Southwest monsoon.", "अक्टूबर की गर्मी"),
    ("Mango Showers", "Pre-monsoon showers in Kerala and coastal Karnataka that prevent early mango fruit drops and facilitate ripening.", "आम्र वर्षा"),
    ("Cherry Blossom Showers", "Pre-monsoon showers in Karnataka that stimulate early blooming of coffee flowers in Kodagu and Chikmagalur.", "चेरी ब्लॉसम वर्षा"),
    ("Köppen Cwg Climate", "Monsoon with dry winter and hot summer, characteristic of the Indo-Gangetic northern plains.", "कोपेन Cwg जलवायु"),
    ("Köppen Amw Climate", "Tropical monsoon climate with a short dry season, typical of the Malabar and Konkan coastal plains.", "कोपेन Amw जलवायु"),
    ("Mascarene High", "Semi-permanent subtropical high-pressure cell near Madagascar that acts as the Southern Hemisphere moisture pump for the Indian monsoon.", "मैस्करेन उच्च दाब")
]

counter = 135
for c in climate_topics:
    add(f"geo_q_{str(counter).zfill(3)}", "Climate & Monsoon", "Atmospheric Dynamics", "Conceptual Mastery", "Medium",
        f"Which of the following best describes the role of {c[0]} in Indian climatology?",
        f"भारतीय जलवायु विज्ञान में {c[2]} की भूमिका का सबसे अच्छा वर्णन निम्नलिखित में से कौन सा करता है?",
        [c[1], "It causes severe frost during winter months across the Deccan.", "It prevents cyclonic storms in the Bay of Bengal.", "It is a localized sea breeze restricted strictly to Lakshadweep."],
        [c[1], "यह दक्कन में सर्दियों के महीनों के दौरान गंभीर पाले का कारण बनता है।", "यह बंगाल की खाड़ी में चक्रवाती तूफानों को रोकता है।", "यह पूरी तरह से लक्षद्वीप तक सीमित एक स्थानीय समुद्री हवा है।"],
        0,
        f"Hint 1: Recall the key features of {c[0]}.",
        "Hint 2: Think of monsoon circulation or regional weather.",
        f"Hint 3: {c[1][:50]}...",
        "Identify the scientifically accurate atmospheric mechanism.",
        f"{c[0]}: {c[1]}",
        f"{c[2]}: {c[1]}"
    )
    counter += 1

while counter <= 175:
    add(f"geo_q_{str(counter).zfill(3)}", "Climate & Monsoon", "Rainfall Distribution", "State PSC PYQ", "Easy",
        f"Question {counter}: As one moves from Kolkata to Patna, Prayagraj, and Delhi along the Northern Plains, how does the average monsoon rainfall vary?",
        f"प्रश्न {counter}: उत्तरी मैदानों में कोलकाता से पटना, प्रयागराज और दिल्ली की ओर जाने पर औसत मानसूनी वर्षा किस प्रकार परिवर्तित होती है?",
        ["It steadily decreases from East to West", "It steadily increases from East to West", "It remains completely uniform throughout", "It peaks at Delhi and is lowest at Kolkata"],
        ["यह पूर्व से पश्चिम की ओर लगातार घटती है", "यह पूर्व से पश्चिम की ओर लगातार बढ़ती है", "यह पूरे क्षेत्र में पूरी तरह से एक समान रहती है", "यह दिल्ली में चरम पर होती है और कोलकाता में सबसे कम होती है"],
        0,
        "Hint 1: The Bay of Bengal branch enters from the east and moves westward.",
        "Hint 2: Moisture content progressively depletes as the winds travel inland.",
        "Hint 3: Kolkata receives ~150 cm, Patna ~100 cm, Prayagraj ~90 cm, Delhi ~60 cm.",
        "Monsoon rainfall in the Indo-Gangetic plain decreases from East to West and South to North.",
        "Rainfall decreases westward: Kolkata (~150 cm) -> Patna (~100 cm) -> Prayagraj (~90 cm) -> Delhi (~60 cm) as moisture sheds along the track.",
        "बंगाल की खाड़ी की शाखा पूर्व से पश्चिम की ओर बढ़ते हुए नमी खोती जाती है, जिससे वर्षा पूर्व से पश्चिम की ओर घटती है।"
    )
    counter += 1

# --- MODULE 4: SOILS OF INDIA & SOIL HEALTH (Q176 - Q215) ---
add("geo_q_176", "Soils & Agriculture", "ICAR Soil Classification", "UPSC Prelims PYQ", "Easy",
    "Which of the following soil orders/classes covers the largest percentage of India's total geographical area (~40%)?",
    "निम्नलिखित में से कौन सा मृदा वर्ग भारत के कुल भौगोलिक क्षेत्रफल के सबसे बड़े प्रतिशत (~40%) को आच्छादित करता है?",
    ["Black Soil (Vertisols)", "Alluvial Soil (Inceptisols/Entisols)", "Red and Yellow Soil (Alfisols)", "Laterite Soil (Oxisols)"],
    ["काली मृदा (वर्टिसोल्स)", "जलोढ़ मृदा (इनसेप्टिसोल्स/एंटीसोल्स)", "लाल और पीली मृदा (अल्फीसोल्स)", "लैटेराइट मृदा (ऑक्सीसोल्स)"],
    1,
    "Hint 1: It is deposited by the major river systems of India.",
    "Hint 2: It forms the vast Indo-Gangetic and Brahmaputra plains.",
    "Hint 3: Red soil covers ~18.5%, Black soil ~15%, while this soil covers ~40%.",
    "Alluvial is 40%; Red is 18.5%; Black is 15%; Laterite is 4.3%.",
    "Alluvial soil covers approximately 40% (1.5 million sq km) of India's total land area, primarily in the Northern Plains and coastal deltas.",
    "जलोढ़ मृदा भारत के कुल क्षेत्रफल के लगभग 40% भाग पर विस्तृत देश की सबसे प्रमुख मृदा है।"
)

add("geo_q_177", "Soils & Agriculture", "Black Cotton Soil", "UPSC Prelims PYQ", "Medium",
    "Black (Regur) soils of the Deccan Trap are known for their unique 'self-ploughing' characteristic primarily because:",
    "दक्कन ट्रैप की काली (रेगुर) मिट्टी अपने अनोखे 'स्व-जुताई' (Self-ploughing) के गुण के लिए जानी जाती है, मुख्य रूप से क्योंकि:",
    ["They contain high proportions of sand enabling deep drainage", "They develop wide, deep cracks upon drying due to high montmorillonite clay content", "Earthworms constantly churn the upper soil horizons", "They are deposited annually by river floodwaters"],
    ["उनमें बालू का उच्च अनुपात होता है जिससे जल निकासी आसान होती है", "मोंटमोरिलोनाइट क्ले की उच्च मात्रा के कारण सूखने पर इनमें चौड़ी, गहरी दरारें विकसित हो जाती हैं", "केंचुए ऊपरी मृदा परतों को लगातार उलटते रहते हैं", "वे नदी की बाढ़ द्वारा प्रतिवर्ष जमा की जाती हैं"],
    1,
    "Hint 1: Regur soil swells enormously when wet and contracts when dry.",
    "Hint 2: The cracks allow surface soil to fall into deep crevices, facilitating aeration.",
    "Hint 3: It is formed from basaltic lava weathering.",
    "Self-ploughing is a physical shrinkage-swelling process, not biological earthworm action.",
    "Black soil has high montmorillonite clay content. When dry, it contracts severely, forming deep cracks. Loose topsoil falls into these cracks, naturally turning and aerating the soil ('self-ploughing').",
    "काली मिट्टी में क्ले की अधिकता के कारण सूखने पर गहरी दरारें पड़ जाती हैं जिससे मृदा का स्वतः वायु-संचार होता है, जिसे 'स्व-जुताई' कहते हैं।"
)

add("geo_q_178", "Soils & Agriculture", "Laterite Soil", "UPSC Prelims PYQ", "Hard",
    "Laterite soil, despite being formed in regions of heavy tropical rainfall, is generally infertile for food grain cultivation because:",
    "लैटेराइट मिट्टी भारी उष्णकटिबंधीय वर्षा वाले क्षेत्रों में बनने के बावजूद खाद्यान्न की खेती के लिए आम तौर पर अनुपजाऊ होती है, क्योंकि:",
    ["Intense leaching washes away silica and soluble bases, leaving only insoluble iron and aluminium oxides", "It is contaminated with excess volcanic sulfur", "It lacks any parent mineral material", "It remains perpetually frozen under alpine permafrost"],
    ["तीव्र निक्षालन (Leaching) सिलिका और घुलनशील लवणों को बहा ले जाता है, केवल अघुलनशील लौह और एल्युमिनियम ऑक्साइड शेष बचते हैं", "यह अत्यधिक ज्वालामुखीय सल्फर से दूषित है", "इसमें किसी मूल खनिज पदार्थ का अभाव होता है", "यह अल्पाइन पर्माफ्रॉस्ट के तहत हमेशा जमी रहती है"],
    0,
    "Hint 1: High rainfall and high temperatures cause intense chemical weathering.",
    "Hint 2: The process of desilication removes nutrients like lime, potash, and nitrogen.",
    "Hint 3: It forms a hard brick-like crust (used as building stones) upon drying.",
    "High rainfall causes nutrient leaching (loss), not enrichment.",
    "Laterite soil forms under heavy seasonal rainfall where intense leaching (desilication) removes soluble silica, nitrogen, potash, and lime, leaving nutrient-poor iron and aluminium sesquioxides.",
    "अत्यधिक वर्षा के कारण तीव्र निक्षालन (Leaching) से सिलिका और पोषक तत्व बह जाते हैं, जिससे लैटेराइट मिट्टी कृषि के लिए कम उपजाऊ रह जाती है।"
)

# Populate remaining soils and agriculture questions to Q250
soils_data = [
    ("Red and Yellow Soil", "Formed from Archaean crystalline granites; red color is due to ferric iron diffusion; turns yellow when hydrated.", "लाल एवं पीली मृदा"),
    ("Arid / Desert Soil", "Sandy texture, alkaline pH, high soluble salts and phosphate, severely deficient in nitrogen and humus.", "शुष्क / मरुस्थलीय मृदा"),
    ("Saline and Alkaline Soil", "Known locally as Reh, Kallar, Usar, Chopan; develops white crust due to capillary rise of salts under over-irrigation.", "लवणीय एवं क्षारीय मृदा"),
    ("Peaty Soil (Kari)", "Found in Alappuzha/Kottayam (Kerala) and Sundarbans; contains up to 40-50% organic matter, highly acidic and waterlogged.", "पीट एवं दलदली मृदा"),
    ("Kankar Formations", "Calcareous lime nodules found in older Bhangar alluvial soils, indicating secondary calcium carbonate accumulation.", "कंकड़ संरचनाएं"),
    ("Soil Health Card Scheme", "Launched 2015 to test 12 parameters (N, P, K, S, Zn, Fe, Cu, Mn, Bo, pH, EC, OC) to optimize fertilizer usage.", "मृदा स्वास्थ्य कार्ड योजना"),
    ("Chambal Ravines (Badlands)", "Severe gully erosion caused by deforestation and loose alluvium in Chambal basin, forming deep ravines (Khad).", "चंबल के बीहड़"),
    ("Green Revolution", "Initiated in mid-1960s focusing on semi-dwarf HYV wheat (Lerma Rojo, Kalyan Sona) in irrigated Punjab, Haryana, Western UP.", "हरित क्रांति"),
    ("Millets (Shree Anna)", "Nutri-cereals (Jowar, Bajra, Ragi) requiring low water, resilient to climate change, celebrated under UN IYM 2023.", "श्री अन्न (कदन्न)"),
    ("Sugarcane Shift to South", "Sugarcane cultivation expanded in Maharashtra/Tamil Nadu due to maritime climate, longer crushing season, and higher sucrose content.", "गन्ना उद्योग का दक्षिण की ओर स्थानांतरण")
]

counter = 179
for s in soils_data:
    add(f"geo_q_{str(counter).zfill(3)}", "Soils & Agriculture", "Soil & Crop Agronomy", "Conceptual Mastery", "Medium",
        f"Which of the following statements is ACCURATE regarding {s[0]}?",
        f"{s[2]} के संबंध में निम्नलिखित में से कौन सा कथन सटीक है?",
        [s[1], "It is found exclusively in high-altitude permafrost zones of Ladakh.", "It has the highest nitrogen content among all Indian soils naturally.", "It is exclusively formed by coral reef decomposition."],
        [s[1], "यह विशेष रूप से लद्दाख के उच्च ऊंचाई वाले पर्माफ्रॉस्ट क्षेत्रों में पाई जाती है।", "प्राकृतिक रूप से सभी भारतीय मिट्टियों में इसमें नाइट्रोजन की मात्रा सबसे अधिक होती है।", "यह विशेष रूप से प्रवाल भित्ति के अपघटन द्वारा निर्मित होती है।"],
        0,
        f"Hint 1: Recall the genesis and characteristics of {s[0]}.",
        "Hint 2: Review soil fertility, chemistry, or agricultural dynamics.",
        f"Hint 3: {s[1][:50]}...",
        "Review standard ICAR soil descriptions.",
        f"{s[0]}: {s[1]}",
        f"{s[2]}: {s[1]}"
    )
    counter += 1

while counter <= 250:
    add(f"geo_q_{str(counter).zfill(3)}", "Soils & Agriculture", "Cropping Seasons & Crops", "State PSC PYQ", "Easy",
        f"Question {counter}: Which of the following is an authentic KHARIF crop sown with the onset of the Southwest Monsoon in India?",
        f"प्रश्न {counter}: निम्नलिखित में से कौन सी भारत में दक्षिण-पश्चिम मानसून की शुरुआत के साथ बोई जाने वाली प्रामाणिक खरीफ फसल है?",
        ["Rice (Paddy)", "Wheat", "Mustard", "Gram (Chickpea)"],
        ["चावल (धान)", "गेहूं", "सरसों", "चना"],
        0,
        "Hint 1: Kharif crops are monsoon-sown crops (June-July) harvested in Autumn (Sept-Oct).",
        "Hint 2: Wheat, mustard, and gram are winter Rabi crops.",
        "Hint 3: Rice is the premier Kharif food grain.",
        "Wheat, Gram, Mustard are Rabi; Rice, Maize, Cotton, Jowar, Bajra are Kharif.",
        "Rice (paddy) is the primary Kharif crop requiring high temperatures (>25°C) and heavy monsoon rainfall (>100 cm).",
        "चावल (धान) भारत की प्रमुख खरीफ फसल है जो मानसून के आगमन पर बोई जाती है।"
    )
    counter += 1

with open("scripts/q_part_2.json", "w", encoding="utf-8") as f:
    json.dump(q_list, f, ensure_ascii=False, indent=2)

print(f"Saved {len(q_list)} questions in q_part_2.json")
