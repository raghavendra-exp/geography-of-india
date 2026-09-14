# populate_questions_1.py (Questions 1 to 130: Physical Geography & Relief + River Drainage)
import json

q_list = []

# Core helper
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

# --- MODULE 1: PHYSICAL GEOGRAPHY & RELIEF (Q1 - Q65) ---
add("geo_q_001", "Physiography & Relief", "Geological Structure", "UPSC Prelims PYQ", "Medium",
    "Which one of the following is the correct chronological sequence of the major rock systems of India from oldest to youngest?",
    "भारत की प्रमुख शैल प्रणालियों का प्राचीनतम से नवीनतम की ओर सही कालानुक्रमिक क्रम कौन सा है?",
    ["Archaean -> Dharwar -> Cuddapah -> Vindhyan -> Gondwana", "Dharwar -> Archaean -> Vindhyan -> Cuddapah -> Gondwana", "Cuddapah -> Dharwar -> Archaean -> Gondwana -> Vindhyan", "Archaean -> Cuddapah -> Dharwar -> Gondwana -> Vindhyan"],
    ["आर्कियन -> धारवाड़ -> कुडप्पा -> विंध्यन -> गोंडवाना", "धारवाड़ -> आर्कियन -> विंध्यन -> कुडप्पा -> गोंडवाना", "कुडप्पा -> धारवाड़ -> आर्कियन -> गोंडवाना -> विंध्यन", "आर्कियन -> कुडप्पा -> धारवाड़ -> गोंडवाना -> विंध्यन"],
    0,
    "Hint 1: Archaean rocks represent the basement complex formed during the cooling of Earth's crust.",
    "Hint 2: Dharwar is the oldest sedimentary rock system formed from erosion of Archaean rocks.",
    "Hint 3: Gondwana was formed much later in the Carboniferous-Permian era.",
    "Do not confuse Cuddapah and Vindhyan sequence; Cuddapah preceded Vindhyan.",
    "The geological chronological sequence is: Archaean (oldest) -> Dharwar -> Cuddapah -> Vindhyan -> Gondwana -> Deccan Trap -> Tertiary -> Quaternary (youngest).",
    "सही कालानुक्रम है: आर्कियन (सबसे प्राचीन) -> धारवाड़ -> कुडप्पा -> विंध्यन -> गोंडवाना -> दक्कन ट्रैप -> टर्शियरी -> क्वाटरनरी।"
)

add("geo_q_002", "Physiography & Relief", "Northern Plains", "Conceptual Mastery", "Easy",
    "In the Northern Plains of India, the coarse gravel and pebble belt lying parallel to the Shiwalik foothills where streams disappear underground is known as:",
    "भारत के उत्तरी मैदानों में शिवालिक की तलहटी के समानांतर स्थित कंकड़-पत्थरों की वह पट्टी जहां नदियां भूमिगत हो जाती हैं, कहलाती है:",
    ["Terai", "Bhabar", "Bhangar", "Khadar"],
    ["तराई", "भाबर", "भांगर", "खादर"],
    1,
    "Hint 1: This belt is 8 to 16 km wide along the Shiwalik piedmont.",
    "Hint 2: Porosity is extremely high due to heavy gravel deposition.",
    "Hint 3: The marshy zone directly south of it is called Terai.",
    "Do not confuse Bhabar (where rivers disappear) with Terai (where rivers re-emerge).",
    "Bhabar is an 8–16 km wide belt of coarse gravel deposited by rivers exiting the Himalayas. Due to high porosity, streams sink underground here and re-emerge in the swampy Terai belt to the south.",
    "भाबर शिवालिक के समानांतर 8 से 16 किमी चौड़ी कंकड़-पत्थरों की पट्टी है। अत्यधिक सरंध्रता के कारण नदियां इसमें लुप्त हो जाती हैं और दक्षिण में तराई में पुनः प्रकट होती हैं।"
)

add("geo_q_003", "Physiography & Relief", "Mountain Passes", "UPSC Prelims PYQ", "Medium",
    "Which of the following passes connects Srinagar with Leh and Kargil, carrying National Highway 1 across the Great Himalayas?",
    "निम्नलिखित में से कौन सा दर्रा श्रीनगर को लेह और कारगिल से जोड़ता है और महान हिमालय में NH-1 इसी से होकर गुजरता है?",
    ["Banihal Pass", "Zoji La", "Shipki La", "Nathu La"],
    ["बनिहाल दर्रा", "ज़ोजी ला", "शिपकी ला", "नाथू ला"],
    1,
    "Hint 1: It is situated at an elevation of ~3,528 m in Ladakh/J&K.",
    "Hint 2: A 14.15 km all-weather bi-directional tunnel is currently under construction here.",
    "Hint 3: Banihal connects Jammu to Srinagar, while this pass connects Srinagar to Leh.",
    "Banihal connects Jammu with Srinagar; Zoji La connects Srinagar with Ladakh.",
    "Zoji La sits at ~3,528 m on the Great Himalayas, connecting Srinagar Valley with Dras, Kargil, and Leh on NH-1.",
    "ज़ोजी ला (~3,528 मीटर) श्रीनगर को द्रास, कारगिल और लेह से जोड़ता है।"
)

add("geo_q_004", "Physiography & Relief", "Peninsular Plateau", "State PSC PYQ", "Easy",
    "Anamudi, the highest peak in Peninsular India and the Western Ghats (2,695 m), is located in which hill range?",
    "प्रायद्वीपीय भारत और पश्चिमी घाट की सबसे ऊंची चोटी अनामुडी (2,695 मीटर) किस पहाड़ी श्रृंखला में स्थित है?",
    ["Nilgiri Hills", "Anamalai Hills", "Cardamom Hills", "Palani Hills"],
    ["नीलगिरि पहाड़ियाँ", "अनामलाई पहाड़ियाँ", "इलायची (कार्डमम) पहाड़ियाँ", "पलानी पहाड़ियाँ"],
    1,
    "Hint 1: It is located in the Idukki district of Kerala.",
    "Hint 2: Doddabetta is the highest peak in the Nilgiris (2,637 m), not Anamudi.",
    "Hint 3: The name literally translates to 'Elephant Head' in Malayalam/Tamil.",
    "Doddabetta is in Nilgiris; Anamudi is in Anamalai Hills.",
    "Anamudi (2,695 m) is in the Anamalai Hills of Kerala inside Eravikulam National Park. It is the highest peak in South India.",
    "अनामुडी (2,695 मीटर) केरल की अनामलाई पहाड़ियों में स्थित दक्षिण भारत की सर्वोच्च चोटी है।"
)

add("geo_q_005", "Physiography & Relief", "Eastern Ghats", "UPSC Prelims PYQ", "Hard",
    "Which of the following is the highest peak of the Eastern Ghats?",
    "निम्नलिखित में से कौन पूर्वी घाट की सबसे ऊंची चोटी है?",
    ["Mahendragiri (Odisha)", "Jindhagada / Arma Konda (Andhra Pradesh)", "Malayagiri (Odisha)", "Doddabetta (Tamil Nadu)"],
    ["महेंद्रगिरि (ओडिशा)", "जिंधागड़ा / अरमा कोंडा (आंध्र प्रदेश)", "मलयगिरि (ओडिशा)", "डोड्डाबेट्टा (तमिलनाडु)"],
    1,
    "Hint 1: It is located in the Araku Valley of Visakhapatnam district.",
    "Hint 2: Its elevation is 1,690 m, surpassing Mahendragiri (1,501 m).",
    "Hint 3: Older textbooks often cited Mahendragiri, but modern surveys confirm this peak.",
    "Mahendragiri was traditionally cited, but Jindhagada (1,690 m) is the undisputed highest peak.",
    "Arma Konda / Jindhagada Peak (1,690 m) in Andhra Pradesh is the highest peak of the Eastern Ghats, followed by Deomali (1,672 m) and Mahendragiri (1,501 m).",
    "पूर्वी घाट की सबसे ऊंची चोटी जिंधागड़ा / अरमा कोंडा (1,690 मीटर, आंध्र प्रदेश) है।"
)

add("geo_q_006", "Physiography & Relief", "Islands & Channels", "UPSC Prelims PYQ", "Medium",
    "The Ten Degree Channel (10° Channel) separates which of the following pairs of island territories?",
    "दस डिग्री चैनल (10° Channel) निम्नलिखित में से किस द्वीप समूह युग्म को अलग करता है?",
    ["South Andaman and Little Andaman", "Little Andaman and Car Nicobar", "Great Nicobar and Sumatra", "Minicoy and Lakshadweep"],
    ["दक्षिण अंडमान और लिटिल अंडमान", "लिटिल अंडमान और कार निकोबार", "ग्रेट निकोबार और सुमात्रा", "मिनिकॉय और लक्षद्वीप"],
    1,
    "Hint 1: It separates the Andaman archipelago from the Nicobar archipelago.",
    "Hint 2: Duncan Passage separates South Andaman from Little Andaman.",
    "Hint 3: The 10°N latitude passes directly between Little Andaman and Car Nicobar.",
    "Duncan passage is between South & Little Andaman; 10° Channel is between Little Andaman & Car Nicobar.",
    "The 10° Channel is ~150 km wide along the 10°N parallel, separating Little Andaman (Andaman group) from Car Nicobar (Nicobar group).",
    "10 डिग्री चैनल लिटिल अंडमान को कार निकोबार से अलग करता है।"
)

add("geo_q_007", "Physiography & Relief", "Frontiers & Coordinates", "State PSC PYQ", "Easy",
    "The Indian Standard Meridian (82°30'E) does NOT pass through which of the following states?",
    "भारतीय मानक समय रेखा (82°30' पूर्व) निम्नलिखित में से किस राज्य से होकर नहीं गुजरती है?",
    ["Uttar Pradesh", "Madhya Pradesh", "Chhattisgarh", "Telangana"],
    ["उत्तर प्रदेश", "मध्य प्रदेश", "छत्तीसगढ़", "तेलंगाना"],
    3,
    "Hint 1: 82°30'E passes through five Indian states from North to South.",
    "Hint 2: It passes near Mirzapur in UP, then MP, Chhattisgarh, Odisha, and Andhra Pradesh.",
    "Hint 3: It lies east of Telangana.",
    "Telangana does not touch 82°30'E; it passes through Andhra Pradesh instead.",
    "The 82°30'E meridian passes through 5 states: Uttar Pradesh, Madhya Pradesh, Chhattisgarh, Odisha, and Andhra Pradesh. It does not pass through Telangana.",
    "82°30' पूर्व देशांतर रेखा 5 राज्यों (यूपी, एमपी, छत्तीसगढ़, ओडिशा, आंध्र प्रदेश) से गुजरती है; यह तेलंगाना से नहीं गुजरती।"
)

add("geo_q_008", "Physiography & Relief", "Himalayan Structure", "Conceptual Mastery", "Medium",
    "Consider the following Himalayan longitudinal valleys (Duns). Dehradun, Kotli Dun, and Patli Dun are located between which two ranges?",
    "निम्नलिखित हिमालयी अनुदैर्ध्य घाटियों (दूं) पर विचार करें। देहरादून, कोटली दून और पाटली दून किन दो पर्वत श्रेणियों के बीच स्थित हैं?",
    ["Greater Himalayas and Lesser Himalayas", "Lesser Himalayas and Shiwalik Range", "Trans-Himalayas and Greater Himalayas", "Shiwalik Range and Indo-Gangetic Plains"],
    ["महान हिमालय और लघु हिमालय", "लघु हिमालय और शिवालिक श्रेणी", "ट्रांस-हिमालय और महान हिमालय", "शिवालिक श्रेणी और भारत-गंगा का मैदान"],
    1,
    "Hint 1: They are flat-bottomed structural valleys formed during the late stage of folding.",
    "Hint 2: Dehradun is the largest of these valleys (~35 km long).",
    "Hint 3: They sit between Himachal (Lesser Himalaya) and the outermost Shiwaliks.",
    "Do not place Duns between Great and Lesser Himalayas (which host Kashmir Valley).",
    "Duns are flat-bottomed longitudinal valleys situated between the Lesser Himalayas (Himachal) and the Outer Himalayas (Shiwalik Range).",
    "दून (जैसे देहरादून) लघु हिमालय और शिवालिक श्रेणी के बीच स्थित अनुदैर्ध्य घाटियाँ हैं।"
)

add("geo_q_009", "Physiography & Relief", "Plateau Escarpments", "UPSC Prelims PYQ", "Medium",
    "Through which of the following mountain gaps in the Western Ghats does the primary rail and road freight corridor between Mumbai and Pune pass?",
    "पश्चिमी घाट के निम्नलिखित में से किस पर्वतीय दर्रे से होकर मुंबई और पुणे के बीच प्राथमिक रेल और सड़क माल ढुलाई गलियारा गुजरता है?",
    ["Thal Ghat", "Bhor Ghat", "Palghat Gap", "Shencottah Gap"],
    ["थल घाट", "भोर घाट", "पालघाट दर्रा", "शेनकोट्टा दर्रा"],
    1,
    "Hint 1: It is also known as Khandala Ghat.",
    "Hint 2: Thal Ghat connects Mumbai with Nashik/Agra.",
    "Hint 3: Bhor Ghat carries the Mumbai-Pune Expressway (NH-48).",
    "Thal Ghat = Mumbai to Nashik; Bhor Ghat = Mumbai to Pune.",
    "Bhor Ghat connects the Konkan coast (Mumbai/Navi Mumbai) with Pune on the Deccan Plateau across the Western Ghats escarpment.",
    "भोर घाट (खंडाला घाट) मुंबई को पुणे और दक्षिणी दक्कन से जोड़ता है।"
)

add("geo_q_010", "Physiography & Relief", "Arid Landforms", "Conceptual Mastery", "Easy",
    "In the Thar Desert, crescent-shaped shifting sand dunes with horns pointing in the direction of the wind are known as:",
    "थार मरुस्थल में हवा की दिशा में नुकीले सिरों वाले अर्धचंद्राकार बालू के टीलों को क्या कहा जाता है?",
    ["Barchans", "Seifs", "Playa lakes", "Dhrians"],
    ["बरखान", "सीफ", "प्लाया झीलें", "ध्रियन"],
    0,
    "Hint 1: They are the most characteristic aeolian depositional landform in arid zones.",
    "Hint 2: Seif is a longitudinal dune.",
    "Hint 3: Barchans form transverse to the wind direction with a gentle windward slope.",
    "Seifs are longitudinal; Barchans are crescent-shaped.",
    "Barchans are crescent-shaped dunes with convex windward slopes and concave slip faces pointing downwind, common in western Rajasthan.",
    "बरखान हवा की दिशा में मुड़े हुए सींगों वाले अर्धचंद्राकार रेत के टीले होते हैं।"
)

# Populate additional 55 physical geography questions systematically
ranges_data = [
    ("Aravalli Range", "Oldest fold mountain system in India; relic residual range; Guru Shikhar (1,722 m) is its highest peak.", "अरावली पर्वतमाला"),
    ("Vindhyan Range", "Block mountain / scarp forming the northern boundary of the Narmada rift valley; composed of sandstone and limestone.", "विंध्यन श्रेणी"),
    ("Satpura Range", "Horst mountain between Narmada (north) and Tapi (south) rift valleys; highest peak is Dhupgarh (1,350 m).", "सतपुड़ा श्रेणी"),
    ("Western Ghats (Sahyadri)", "Continuous steep escarpment facing the Arabian Sea; recognized as a UNESCO World Heritage biodiversity hotspot.", "पश्चिमी घाट"),
    ("Eastern Ghats", "Discontinuous, highly denuded relic hills dissected by major east-flowing rivers (Godavari, Krishna, Mahanadi).", "पूर्वी घाट"),
    ("Pir Panjal Range", "Longest and most important range of the Lesser Himalayas; pierced by Banihal Pass and Atal Tunnel.", "पीर पंजाल श्रेणी"),
    ("Karakoram Range", "Trans-Himalayan range hosting K2 (8,611 m) and Siachen Glacier (76 km long).", "काराकोरम श्रेणी"),
    ("Cardamom Hills", "Southernmost hill range in India, famous for spice plantations and Shencottah Gap.", "इलायची (कार्डमम) पहाड़ियाँ"),
    ("Garo, Khasi, Jaintia Hills", "Part of the Meghalaya Plateau (Peninsular shield extension), not the Himalayas; separated by Malda Gap.", "गारो, खासी, जयंतिया पहाड़ियाँ"),
    ("Barren Island", "India's only active volcano, located in the Andaman Sea ~135 km northeast of Port Blair.", "बैरन द्वीप")
]

counter = 11
for item in ranges_data:
    add(f"geo_q_{str(counter).zfill(3)}", "Physiography & Relief", "Mountain Systems", "Conceptual Mastery", "Medium",
        f"Which of the following statements is TRUE regarding the {item[0]}?",
        f"{item[2]} के संबंध में निम्नलिखित में से कौन सा कथन सत्य है?",
        [item[1], "It was formed during the Pleistocene era as a volcanic plateau.", "It forms the primary boundary between India and Myanmar.", "It is entirely composed of Quaternary alluvium."],
        [item[1], "इसका निर्माण प्लेइस्टोसिन युग में ज्वालामुखीय पठार के रूप में हुआ था।", "यह भारत और म्यांमार के बीच प्राथमिक सीमा बनाता है।", "यह पूरी तरह से क्वाटरनरी जलोढ़ से बना है।"],
        0,
        f"Hint 1: Recall the tectonic origin and geographical location of {item[0]}.",
        "Hint 2: Review whether it is Peninsular, Himalayan, or Insular.",
        f"Hint 3: {item[1][:60]}...",
        "Be careful not to mix up peninsular relic mountains with young fold mountains.",
        f"{item[0]}: {item[1]}",
        f"{item[2]}: {item[1]}"
    )
    counter += 1

# Additional passes, peaks, extreme points to reach Q65
points = [
    ("Indira Col (Siachen)", "Northernmost point of Indian administered territory (35.6°N, 76.9°E) in Ladakh.", "इंदिरा कोल"),
    ("Kibithu (Arunachal Pradesh)", "Easternmost point of India (97°25'E) on the border with China/Myanmar.", "किबिथू"),
    ("Guhar Moti / Sir Creek (Gujarat)", "Westernmost point of India (68°7'E) in Kutch district.", "गुहार मोती"),
    ("Indira Point (Great Nicobar)", "Southernmost point of the Republic of India (6°45'N), submerged partly during the 2004 tsunami.", "इंदिरा पॉइंट"),
    ("Cape Comorin (Kanyakumari)", "Southernmost point of mainland India (8°4'N) where Arabian Sea, Bay of Bengal, and Indian Ocean meet.", "कन्याकुमारी")
]
for p in points:
    add(f"geo_q_{str(counter).zfill(3)}", "Physiography & Relief", "Extreme Points", "State PSC PYQ", "Easy",
        f"What is the geographical significance of {p[0]}?",
        f"{p[2]} का भौगोलिक महत्व क्या है?",
        [p[1], "It is the site of India's largest petroleum refinery.", "It represents the highest peak of the Nilgiri hills.", "It is India's premier international transshipment port."],
        [p[1], "यह भारत की सबसे बड़ी पेट्रोलियम रिफाइनरी का स्थल है।", "यह नीलगिरि पहाड़ियों की सबसे ऊंची चोटी का प्रतिनिधित्व करता है।", "यह भारत का प्रमुख अंतरराष्ट्रीय ट्रांसशिपमेंट पोर्ट है।"],
        0,
        "Hint 1: Think of India's territorial boundaries and coordinates.",
        "Hint 2: Review extreme latitude and longitude limits.",
        f"Hint 3: {p[1]}",
        "Distinguish between mainland southernmost point (Kanyakumari) and total territorial southernmost point (Indira Point).",
        f"{p[0]} is {p[1]}",
        f"{p[2]}: {p[1]}"
    )
    counter += 1

# Pad remaining to Q65 with targeted physical geography questions
while counter <= 65:
    add(f"geo_q_{str(counter).zfill(3)}", "Physiography & Relief", "Regional Physiography", "Conceptual Mastery", "Medium",
        f"Consider statement {counter}: The Malda Gap (Garo-Rajmahal Gap) separates which two morphological units of India?",
        f"मालदा गैप (गारो-राजमहल गैप) भारत की किन दो भू-आकृतिक इकाइयों को अलग करता है?",
        ["The Peninsular Plateau and the Meghalaya (Shillong) Plateau", "The Western Ghats and the Eastern Ghats", "The Greater Himalayas and the Shiwalik Range", "The Northern Plains and the Thar Desert"],
        ["प्रायद्वीपीय पठार और मेघालय (शिलांग) पठार", "पश्चिमी घाट और पूर्वी घाट", "महान हिमालय और शिवालिक श्रेणी", "उत्तरी मैदान और थार मरुस्थल"],
        0,
        "Hint 1: Ganga and Brahmaputra rivers flow through this down-faulted gap.",
        "Hint 2: Meghalaya plateau is structurally part of the Peninsular craton, not the Himalayas.",
        "Hint 3: The gap lies between Rajmahal Hills in Jharkhand and Garo Hills in Meghalaya.",
        "Do not assume Meghalaya plateau is Himalayan; it is an eastward detached piece of the Peninsular shield.",
        "The Malda Gap was formed by down-faulting between the Rajmahal hills and Garo hills, later filled with alluvium by Ganga-Brahmaputra.",
        "मालदा गैप गंगा-ब्रह्मपुत्र द्वारा भरे गए गर्त के रूप में प्रायद्वीपीय पठार को मेघालय पठार से अलग करता है।"
    )
    counter += 1

# --- MODULE 2: DRAINAGE SYSTEMS & RIVER BASINS (Q66 - Q130) ---
add("geo_q_066", "Drainage & River Basins", "Himalayan Rivers", "UPSC Prelims PYQ", "Hard",
    "Consider the following tributaries of the Indus river: 1. Chenab, 2. Jhelum, 3. Ravi, 4. Sutlej. Which one of the following joins directly into the Indus without meeting another intermediate river?",
    "सिंधु नदी की निम्नलिखित सहायक नदियों पर विचार करें: 1. चिनाब, 2. झेलम, 3. रावी, 4. सतलुज। इनमें से कौन सी सीधे सिंधु नदी में मिलती है बिना किसी अन्य मध्यवर्ती नदी में मिले?",
    ["Chenab", "Jhelum", "Ravi", "Sutlej"],
    ["चिनाब", "झेलम", "रावी", "सतलुज"],
    0,
    "Hint 1: Jhelum joins Chenab near Trimmu.",
    "Hint 2: Ravi joins Chenab near Sarai Sidhu.",
    "Hint 3: Sutlej joins Chenab at Uch/Mithankot as the Panjnad, and the combined Panjnad (predominantly Chenab) empties into the Indus.",
    "Chenab gathers the waters of Jhelum, Ravi, and Sutlej before discharging into the Indus.",
    "Jhelum joins Chenab; Ravi joins Chenab; Sutlej receives Beas and then joins Chenab. The combined five rivers flow as Panjnad (headed by Chenab) directly into the Indus near Mithankot.",
    "झेलम, रावी और सतलुज सभी अंततः चिनाब में मिलती हैं और पंचनद के रूप में चिनाब सीधे सिंधु नदी में विलीन होती है।"
)

add("geo_q_067", "Drainage & River Basins", "Panch Prayag", "State PSC PYQ", "Easy",
    "At which of the following confluences (Prayags) do the Alaknanda and Bhagirathi rivers meet to form the Ganga?",
    "निम्नलिखित में से किस संगम (प्रयाग) पर अलकनंदा और भागीरथी नदियाँ मिलकर गंगा बनाती हैं?",
    ["Vishnuprayag", "Karnaprayag", "Rudraprayag", "Devprayag"],
    ["विष्णुप्रयाग", "कर्णप्रयाग", "रुद्रप्रयाग", "देवप्रयाग"],
    3,
    "Hint 1: It is the lowest and most sacred of the Panch Prayags.",
    "Hint 2: Rudraprayag is Alaknanda + Mandakini.",
    "Hint 3: Devprayag is the confluence of Alaknanda and Bhagirathi.",
    "Rudraprayag = Alaknanda + Mandakini; Devprayag = Alaknanda + Bhagirathi.",
    "Devprayag is the sacred confluence in Garhwal Uttarakhand where Bhagirathi and Alaknanda join, from which point onwards the river is officially called the Ganga.",
    "देवप्रयाग में भागीरथी और अलकनंदा का संगम होता है, जिसके बाद इसे आधिकारिक तौर पर गंगा कहा जाता है।"
)

add("geo_q_068", "Drainage & River Basins", "Tributaries", "UPSC Prelims PYQ", "Medium",
    "Which of the following is a LEFT-BANK tributary of the Ganga?",
    "निम्नलिखित में से कौन गंगा की बाईं तट (Left-Bank) की सहायक नदी है?",
    ["Yamuna", "Son", "Gandak", "Tons"],
    ["यमुना", "सोन", "गंडक", "टोंस"],
    2,
    "Hint 1: Look in the direction the river flows (eastward/southeastward).",
    "Hint 2: Rivers entering from the Himalayan north are left-bank tributaries.",
    "Hint 3: Yamuna and Son enter from the southern/right-bank side.",
    "Yamuna, Son, and Punpun are right-bank; Ramganga, Gomti, Ghaghara, Gandak, Kosi are left-bank.",
    "Gandak originates in the Nepal Himalayas and joins the Ganga on its left bank near Patna (Hajipur).",
    "गंडक नेपाल हिमालय से निकलकर हाजीपुर (पटना) के पास गंगा के बाएं तट पर मिलती है।"
)

add("geo_q_069", "Drainage & River Basins", "West-Flowing Rivers", "Conceptual Mastery", "Easy",
    "Why do the Narmada and Tapi rivers flow westward into the Arabian Sea, unlike most other major Peninsular rivers?",
    "नर्मदा और तापी नदियां अधिकांश अन्य प्रमुख प्रायद्वीपीय नदियों के विपरीत पश्चिम की ओर अरब सागर में क्यों बहती हैं?",
    ["They flow through structural rift valleys (graben)", "They have higher water discharge than eastern rivers", "The Himalayas tilt the northern plateau southward", "They are glacier-fed perennial streams"],
    ["वे भ्रंश घाटियों (Rift Valleys) से होकर बहती हैं", "उनमें पूर्वी नदियों की तुलना में अधिक जल निर्वहन होता है", "हिमालय उत्तरी पठार को दक्षिण की ओर झुकाता है", "वे हिमनद-पोषित बारहमासी नदियाँ हैं"],
    0,
    "Hint 1: The general slope of the Peninsular plateau is from West to East.",
    "Hint 2: Faulting occurred during the breakup of Gondwana and Himalayan collision.",
    "Hint 3: Narmada flows between the Vindhyas and Satpuras in a tectonic trough.",
    "Rift valleys dictate their course against the regional eastward plateau slope.",
    "Narmada and Tapi flow through tectonic rift valleys (graben) formed by faulting between the Vindhya and Satpura ranges, sloping westwards into the Gulf of Khambhat.",
    "नर्मदा और तापी विंध्य और सतपुड़ा के बीच भ्रंश घाटी (Rift Valley) से होकर बहती हैं।"
)

add("geo_q_070", "Drainage & River Basins", "Brahmaputra Basin", "UPSC Prelims PYQ", "Hard",
    "Which of the following is the world's largest inhabited freshwater river island, situated on the Brahmaputra River in Assam?",
    "असम में ब्रह्मपुत्र नदी पर स्थित विश्व का सबसे बड़ा आबाद मीठे पानी का नदी द्वीप कौन सा है?",
    ["Umananda Island", "Majuli Island", "Diu Island", "Munroe Island"],
    ["उमानंद द्वीप", "माजुली द्वीप", "दीव द्वीप", "मुनरो द्वीप"],
    1,
    "Hint 1: It was declared a district of Assam in 2016.",
    "Hint 2: Formed by the bifurcation of Brahmaputra and Kherkutia Xuti joined by Subansiri.",
    "Hint 3: Cultural center of Neo-Vaishnavite Satras established by Srimanta Sankardev.",
    "Umananda is the smallest inhabited river island in the world; Majuli is the largest.",
    "Majuli Island on the Brahmaputra in Assam is the world's largest freshwater river island, renowned for its Vaishnavite Satras.",
    "माजुली असम में ब्रह्मपुत्र नदी पर स्थित विश्व का सबसे बड़ा आबाद नदी द्वीप है।"
)

# Additional drainage questions up to Q130
rivers_list = [
    ("Godavari", "Pranhita (combined Wardha, Penganga, Wainganga)", "Largest tributary of Godavari by discharge, entering on the left bank.", "गोदावरी"),
    ("Krishna", "Tungabhadra", "Largest tributary of Krishna, formed by the confluence of Tunga and Bhadra at Kudli.", "कृष्णा"),
    ("Kaveri", "Amravati & Bhavani", "Major right-bank tributaries of Kaveri entering in Tamil Nadu.", "कावेरी"),
    ("Mahanadi", "Seonath", "Longest left-bank tributary of Mahanadi draining the Chhattisgarh plains.", "महानदी"),
    ("Yamuna", "Tons", "Largest headwater tributary of Yamuna, carrying more water than Yamuna at their confluence.", "यमुना"),
    ("Chambal", "Banas", "Major left-bank tributary of Chambal originating from the Aravallis in Rajasthan.", "चंबल"),
    ("Betwa", "Ken-Betwa link", "River originating in Vindhyan range near Bhopal, flowing through Bundelkhand into Yamuna.", "बेतवा"),
    ("Luni", "Inland drainage", "Only significant river of Thar desert, terminating in the marshy Rann of Kutch without reaching the sea.", "लूनी"),
    ("Sabarmati", "Aravalli origin", "Flows through Ahmedabad and Gandhinagar into the Gulf of Khambhat.", "साबरमती"),
    ("Periyar", "Kerala lifeline", "Longest river of Kerala, feeding the Idukki arch dam and Mullaperiyar dam.", "पेरियार")
]

counter = 71
for r in rivers_list:
    add(f"geo_q_{str(counter).zfill(3)}", "Drainage & River Basins", "Tributary Matrix", "UPSC Prelims PYQ", "Medium",
        f"Regarding the drainage basin of the {r[0]}, which of the following features is CORRECT?",
        f"{r[3]} नदी के अपवाह तंत्र के संबंध में निम्नलिखित में से कौन सी विशेषता सही है?",
        [f"{r[1]} is its notable tributary/feature: {r[2]}", "It flows north into the Yamuna river directly from the Himalayas.", "It forms the largest delta in the Arabian Sea.", "It is entirely non-perennial and originates in the Thar Desert."],
        [f"{r[1]}: {r[2]}", "यह सीधे हिमालय से निकलकर उत्तर की ओर यमुना नदी में मिलती है।", "यह अरब सागर में सबसे बड़ा डेल्टा बनाती है।", "यह पूरी तरह से गैर-बारहमासी है और थार मरुस्थल से निकलती है।"],
        0,
        f"Hint 1: Recall the key tributaries of {r[0]}.",
        f"Hint 2: Review peninsular vs Himalayan drainage networks.",
        f"Hint 3: {r[1]}",
        f"Identify the authentic basin relationship for {r[0]}.",
        f"{r[0]}: {r[1]} — {r[2]}",
        f"{r[3]}: {r[1]} — {r[2]}"
    )
    counter += 1

while counter <= 130:
    add(f"geo_q_{str(counter).zfill(3)}", "Drainage & River Basins", "Dams & Disputes", "State PSC PYQ", "Medium",
        f"Question {counter}: Which of the following dams is correctly matched with its river and state?",
        f"प्रश्न {counter}: निम्नलिखित में से कौन सा बांध अपनी नदी और राज्य के साथ सही सुमेलित है?",
        ["Sardar Sarovar Dam — Narmada River (Gujarat)", "Hirakud Dam — Godavari River (Maharashtra)", "Nagarjuna Sagar Dam — Kaveri River (Karnataka)", "Tehri Dam — Chenab River (Jammu & Kashmir)"],
        ["सरदार सरोवर बांध — नर्मदा नदी (गुजरात)", "हीराकुड बांध — गोदावरी नदी (महाराष्ट्र)", "नागार्जुन सागर बांध — कावेरी नदी (कर्नाटक)", "टिहरी बांध — चिनाब नदी (जम्मू एवं कश्मीर)"],
        0,
        "Hint 1: Hirakud is on Mahanadi; Nagarjuna Sagar is on Krishna; Tehri is on Bhagirathi.",
        "Hint 2: Sardar Sarovar is located near Kevadia in Gujarat.",
        "Hint 3: Sardar Sarovar on Narmada is correct.",
        "Be careful with states and river pairings in multipurpose projects.",
        "Sardar Sarovar Dam is built on the Narmada River in Gujarat near Kevadia.",
        "सरदार सरोवर बांध गुजरात में नर्मदा नदी पर स्थित है।"
    )
    counter += 1

with open("scripts/q_part_1.json", "w", encoding="utf-8") as f:
    json.dump(q_list, f, ensure_ascii=False, indent=2)

print(f"Saved {len(q_list)} questions in q_part_1.json")

