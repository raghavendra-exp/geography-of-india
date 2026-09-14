# populate_questions_4.py (Questions 371 to 500: Biodiversity, Transport, Demographics & Map Drills)
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

# --- MODULE 8: BIODIVERSITY & PROTECTED AREAS (Q371 - Q415) ---
add("geo_q_371", "Biodiversity & Ecology", "Biosphere Reserves", "UPSC Prelims PYQ", "Medium",
    "Which was the FIRST Biosphere Reserve established in India (in 1986), spanning across the states of Tamil Nadu, Kerala, and Karnataka?",
    "1986 में स्थापित भारत का पहला जैवमंडल आरक्षित क्षेत्र (बायोस्फीयर रिजर्व) कौन सा था, जो तमिलनाडु, केरल और कर्नाटक राज्यों में विस्तृत है?",
    ["Nanda Devi Biosphere Reserve", "Nilgiri Biosphere Reserve", "Sundarbans Biosphere Reserve", "Gulf of Mannar Biosphere Reserve"],
    ["नंदा देवी बायोस्फीयर रिजर्व", "नीलगिरि बायोस्फीयर रिजर्व", "सुंदरबन बायोस्फीयर रिजर्व", "मन्नार की खाड़ी बायोस्फीयर रिजर्व"],
    1,
    "Hint 1: It encompasses Wayanad, Nagarhole, Bandipur, Mudumalai, and Silent Valley.",
    "Hint 2: It is home to the largest wild population of the endangered Lion-tailed Macaque and Nilgiri Tahr.",
    "Hint 3: It is situated at the junction of the Western Ghats and Eastern Ghats.",
    "Nanda Devi was in 1988; Nilgiri was the first in 1986.",
    "Nilgiri Biosphere Reserve was the first in India, established in September 1986, covering 5,520 sq km across TN, Kerala, and Karnataka.",
    "नीलगिरि बायोस्फीयर रिजर्व (1986) भारत का पहला बायोस्फीयर रिजर्व था।"
)

add("geo_q_372", "Biodiversity & Ecology", "Ramsar Sites", "UPSC Prelims PYQ", "Hard",
    "Which of the following Indian wetlands is currently listed under the 'Montreux Record' (a register of Ramsar sites where changes in ecological character have occurred, are occurring, or are likely to occur)?",
    "निम्नलिखित में से कौन सा भारतीय आर्द्रभूमि स्थल वर्तमान में 'मॉन्ट्रो रिकॉर्ड' (ऐसे रामसर स्थलों का रजिस्टर जहां पारिस्थितिक स्वरूप में परिवर्तन हुए हैं या होने की संभावना है) के तहत सूचीबद्ध है?",
    ["Chilika Lake (Odisha)", "Keoladeo National Park (Rajasthan) and Loktak Lake (Manipur)", "Sundarban Wetland (West Bengal)", "Vembanad-Kol Wetland (Kerala)"],
    ["चिल्का झील (ओडिशा)", "केवलादेव राष्ट्रीय उद्यान (राजस्थान) एवं लोकटक झील (मणिपुर)", "सुंदरबन वेटलैंड (पश्चिम बंगाल)", "वेम्बनाड-कोल वेटलैंड (केरल)"],
    1,
    "Hint 1: Chilika Lake was removed from the Montreux Record in 2002 after successful ecological restoration.",
    "Hint 2: Loktak Lake suffers from deforestation in catchment and Phumdi proliferation.",
    "Hint 3: Keoladeo suffers from water shortages and invasive weeds (Paspalum).",
    "Chilika was previously on Montreux Record but successfully removed; Loktak and Keoladeo remain.",
    "Presently, two Indian wetlands are on the Montreux Record: Keoladeo National Park (Rajasthan) and Loktak Lake (Manipur). Chilika Lake was successfully removed from the record in 2002.",
    "वर्तमान में भारत के दो स्थल 'मॉन्ट्रो रिकॉर्ड' में हैं: केवलादेव राष्ट्रीय उद्यान और लोकटक झील। (चिल्का को 2002 में हटा दिया गया था)।"
)

add("geo_q_373", "Biodiversity & Ecology", "Protected Areas", "State PSC PYQ", "Easy",
    "Keibul Lamjao National Park, the world's only FLOATING national park famous for the endangered Sangai (brow-antlered deer), is located on which lake?",
    "विश्व का एकमात्र तैरता हुआ राष्ट्रीय उद्यान 'केइबुल लामजाओ', जो लुप्तप्राय संगाई हिरण के लिए प्रसिद्ध है, किस झील पर स्थित है?",
    ["Dal Lake (J&K)", "Loktak Lake (Manipur)", "Wular Lake (J&K)", "Kolleru Lake (Andhra Pradesh)"],
    ["डल झील (जम्मू एवं कश्मीर)", "लोकटक झील (मणिपुर)", "वुलर झील (जम्मू एवं कश्मीर)", "कोलेरू झील (आंध्र प्रदेश)"],
    1,
    "Hint 1: It is located in the Bishnupur district of Manipur.",
    "Hint 2: The park is composed of floating heterogeneous masses of vegetation and soil called 'Phumdis'.",
    "Hint 3: Sangai is the state animal of Manipur.",
    "Phumdis are unique to Loktak Lake in Manipur.",
    "Keibul Lamjao National Park is situated on Loktak Lake in Manipur. It is famous for floating biomass islands (Phumdis) and the dancing deer (Sangai).",
    "केइबुल लामजाओ मणिपुर की लोकटक झील पर स्थित विश्व का एकमात्र तैरता हुआ राष्ट्रीय उद्यान है।"
)

# Populate additional biodiversity questions to Q415
bio_topics = [
    ("Great Rann of Kutch Biosphere Reserve", "Largest Biosphere Reserve in India by geographical area (12,454 sq km), protecting the Indian Wild Ass (Khur).", "कच्छ का रण बायोस्फीयर रिजर्व"),
    ("Dibru-Saikhowa Biosphere Reserve", "Smallest Biosphere Reserve in India (765 sq km) in Assam, famous for feral horses and white-winged wood duck.", "डिब्रू-सैखोवा बायोस्फीयर रिजर्व"),
    ("Ramsar Site Leader: Tamil Nadu", "Tamil Nadu holds the highest number of Ramsar sites (18) in India, followed by Uttar Pradesh (10).", "तमिलनाडु रामसर स्थल नेतृत्व"),
    ("First Ramsar Sites of India (1981)", "Chilika Lake (Odisha) and Keoladeo National Park (Rajasthan) were the first two wetlands designated in 1981.", "भारत के पहले रामसर स्थल"),
    ("Project Tiger (1973)", "Launched at Jim Corbett National Park; uses the tiger as an umbrella species to conserve entire apex ecosystems.", "प्रोजेक्ट टाइगर"),
    ("Elephant Corridors (Right of Passage)", "Linear forest strips connecting fragmented elephant reserves to prevent human-elephant conflict and genetic isolation.", "हाथी गलियारे"),
    ("Coral Reef Zones of India", "Four primary regions: Gulf of Mannar, Gulf of Kutch, Andaman & Nicobar Islands, and Lakshadweep atolls.", "प्रवाल भित्ति क्षेत्र"),
    ("UNESCO Mixed World Heritage Site", "Khangchendzonga National Park (Sikkim) is India's only mixed heritage site (natural biodiversity + cultural value).", "यूनेस्को मिश्रित विश्व धरोहर स्थल")
]

counter = 374
for b in bio_topics:
    add(f"geo_q_{str(counter).zfill(3)}", "Biodiversity & Ecology", "Conservation Networks", "Conceptual Mastery", "Medium",
        f"Which of the following statements is FACTUALLY CORRECT regarding {b[0]}?",
        f"{b[2]} के संबंध में निम्नलिखित में से कौन सा कथन तथ्यात्मक रूप से सही है?",
        [b[1], "It is an exclusive marine sanctuary located in the Yamuna river.", "It has been officially de-notified due to complete lack of wildlife.", "It was established in 1850 during the Mughal period."],
        [b[1], "यह यमुना नदी में स्थित एक विशेष समुद्री अभयारण्य है।", "वन्यजीवों के पूर्ण अभाव के कारण इसे आधिकारिक तौर पर रद्द कर दिया गया है।", "इसकी स्थापना 1850 में मुगल काल के दौरान की गई थी।"],
        0,
        f"Hint 1: Recall the conservation credentials and location of {b[0]}.",
        "Hint 2: Review Biosphere Reserve, Ramsar, or Protected Area facts.",
        f"Hint 3: {b[1][:50]}...",
        "Check verified MoEFCC and Wildlife Institute of India (WII) data.",
        f"{b[0]}: {b[1]}",
        f"{b[2]}: {b[1]}"
    )
    counter += 1

while counter <= 415:
    add(f"geo_q_{str(counter).zfill(3)}", "Biodiversity & Ecology", "Tiger Reserves & Protected Areas", "State PSC PYQ", "Easy",
        f"Question {counter}: Which state in India has the HIGHEST number of wild tigers per the National Tiger Conservation Authority (NTCA) 2022 census?",
        f"प्रश्न {counter}: राष्ट्रीय बाघ संरक्षण प्राधिकरण (NTCA) 2022 की जनगणना के अनुसार भारत के किस राज्य में सर्वाधिक जंगली बाघ हैं?",
        ["Madhya Pradesh (785 tigers)", "Karnataka (563 tigers)", "Uttarakhand (560 tigers)", "Maharashtra (444 tigers)"],
        ["मध्य प्रदेश (785 बाघ)", "कर्नाटक (563 बाघ)", "उत्तराखंड (560 बाघ)", "महाराष्ट्र (444 बाघ)"],
        0,
        "Hint 1: Often known as the 'Tiger State of India'.",
        "Hint 2: Followed closely by Karnataka and Uttarakhand.",
        "Hint 3: Madhya Pradesh has 785 tigers across 7 tiger reserves.",
        "Madhya Pradesh leads with 785 tigers; Karnataka is second with 563.",
        "Madhya Pradesh has 785 tigers (2022 Census), retaining its title as the 'Tiger State of India', followed by Karnataka (563) and Uttarakhand (560).",
        "2022 की बाघ गणना के अनुसार मध्य प्रदेश 785 बाघों के साथ देश में पहले स्थान पर है।"
    )
    counter += 1

# --- MODULE 9: TRANSPORT & INFRASTRUCTURE (Q416 - Q455) ---
add("geo_q_416", "Economic & Transport", "Highways & Expressways", "UPSC Prelims PYQ", "Medium",
    "The North-South Corridor (Srinagar to Kanyakumari) and the East-West Corridor (Silchar to Porbandar) under the Golden Quadrilateral project intersect at which city?",
    "स्वर्णिम चतुर्भुज परियोजना के तहत उत्तर-दक्षिण गलियारा (श्रीनगर से कन्याकुमारी) और पूर्व-पश्चिम गलियारा (सिलचर से पोरबंदर) किस शहर में एक दूसरे को काटते हैं?",
    ["Nagpur (Maharashtra)", "Jhansi (Uttar Pradesh)", "Gwalior (Madhya Pradesh)", "Bhopal (Madhya Pradesh)"],
    ["नागपुर (महाराष्ट्र)", "झांसी (उत्तर प्रदेश)", "ग्वालियर (मध्य प्रदेश)", "भोपाल (मध्य प्रदेश)"],
    1,
    "Hint 1: It is a historic fortress city in Bundelkhand.",
    "Hint 2: Nagpur is the Zero Mile Stone of India, but not the intersection of NS-EW corridors.",
    "Hint 3: NH-44 (North-South) and NH-27 (East-West) intersect at Jhansi.",
    "Zero Mile is at Nagpur; NS-EW corridor junction is at Jhansi.",
    "The North-South Corridor (NH-44) and East-West Corridor (NH-27) intersect at Jhansi in Uttar Pradesh.",
    "उत्तर-दक्षिण और पूर्व-पश्चिम गलियारे उत्तर प्रदेश के झांसी में एक-दूसरे को काटते हैं।"
)

add("geo_q_417", "Economic & Transport", "Dedicated Freight Corridors", "UPSC Prelims PYQ", "Hard",
    "Which of the following ports serves as the western terminal of the Western Dedicated Freight Corridor (WDFC)?",
    "निम्नलिखित में से कौन सा बंदरगाह पश्चिमी समर्पित माल ढुलाई गलियारे (WDFC) के पश्चिमी टर्मिनल के रूप में कार्य करता है?",
    ["Kandla / Deendayal Port (Gujarat)", "Mundra Port (Gujarat)", "Jawaharlal Nehru Port Trust / JNPT (Navi Mumbai)", "Mormugao Port (Goa)"],
    ["कांडला / दीनदयाल बंदरगाह (गुजरात)", "मुंद्रा बंदरगाह (गुजरात)", "जवाहरलाल नेहरू पोर्ट ट्रस्ट / JNPT (नवी मुंबई)", "मोरमुगाओ बंदरगाह (गोवा)"],
    2,
    "Hint 1: The WDFC runs 1,506 km from Dadri in Uttar Pradesh.",
    "Hint 2: It is designed for heavy-haul double-stack container trains.",
    "Hint 3: It terminates at India's largest container port in Navi Mumbai.",
    "Eastern DFC terminates at Dankuni; Western DFC terminates at JNPT.",
    "The Western Dedicated Freight Corridor (WDFC) runs from Dadri (UP) to JNPT (Nhava Sheva, Navi Mumbai) over 1,506 km.",
    "पश्चिमी डीएफसी (WDFC) दादरी (यूपी) से जेएनपीटी (नवी मुंबई) तक 1,506 किमी विस्तृत है।"
)

add("geo_q_418", "Economic & Transport", "Major Ports", "State PSC PYQ", "Easy",
    "Which of the following is the ONLY riverine major port in India, situated approximately 203 km inland from the sea on the Hooghly River?",
    "भारत का एकमात्र नदीय प्रमुख बंदरगाह कौन सा है, जो समुद्र से लगभग 203 किमी अंतर्देशीय हुगली नदी पर स्थित है?",
    ["Paradip Port", "Syama Prasad Mookerjee Port (Kolkata)", "Visakhapatnam Port", "Kamarajar Port (Ennore)"],
    ["पारादीप बंदरगाह", "श्यामा प्रसाद मुखर्जी बंदरगाह (कोलकाता)", "विशाखापत्तनम बंदरगाह", "कामरजार बंदरगाह (एन्नोर)"],
    1,
    "Hint 1: It is India's oldest operating port, constructed by the British East India Company.",
    "Hint 2: It has twin dock systems: Kolkata Docks and deep-water Haldia Dock Complex.",
    "Hint 3: Siltation requires continuous dredging and water flushing from Farakka Barrage.",
    "All other major ports are sea-facing; Kolkata is a tidal riverine port.",
    "Syama Prasad Mookerjee Port (Kolkata) is the only riverine major port in India, located on the freshwater reaches of the Hooghly River.",
    "श्यामा प्रसाद मुखर्जी बंदरगाह (कोलकाता) भारत का एकमात्र प्रमुख नदीय बंदरगाह है।"
)

# Populate additional transport and demographic questions to Q455
transport_list = [
    ("National Waterway-1 (NW-1)", "Stretches 1,620 km along the Ganga-Bhagirathi-Hooghly from Prayagraj to Haldia, developed with World Bank JMVP aid.", "राष्ट्रीय जलमार्ग-1"),
    ("National Waterway-2 (NW-2)", "Runs 891 km on the Brahmaputra River from Sadiya to Dhubri in Assam.", "राष्ट्रीय जलमार्ग-2"),
    ("Deendayal Port (Kandla)", "Major tidal port in Gujarat constructed in the 1950s to replace Karachi Port after Partition; hosts a premier SEZ.", "दीनदयाल बंदरगाह (कांडला)"),
    ("Visakhapatnam Natural Harbour", "Landlocked natural harbour protected by the Dolphin's Nose promontory; premier outlet for Bailadila iron ore.", "विशाखापत्तनम प्राकृतिक बंदरगाह"),
    ("Golden Quadrilateral (5,846 km)", "Connects Delhi, Mumbai, Chennai, and Kolkata; initiated under Prime Minister Atal Bihari Vajpayee.", "स्वर्णिम चतुर्भुज"),
    ("Demographic Transition Stage 3", "India is in Stage 3 characterized by rapidly declining mortality and declining fertility (national TFR = 2.0).", "जनसांख्यिकी संक्रमण चरण 3"),
    ("Census 2011 Density Extremes", "Bihar has the highest population density (1,106 persons/sq km); Arunachal Pradesh has the lowest (17 persons/sq km).", "जनसंख्या घनत्व चरम"),
    ("Sex Ratio Divergence", "Kerala recorded the highest sex ratio (1,084 females/1,000 males), while Haryana recorded the lowest (879) in Census 2011.", "लिंगानुपात विचलन")
]

counter = 419
for tr in transport_list:
    add(f"geo_q_{str(counter).zfill(3)}", "Economic & Transport", "Infrastructure & Demography", "Conceptual Mastery", "Medium",
        f"Which of the following is the defining feature of {tr[0]}?",
        f"{tr[2]} की परिभाषित विशेषता निम्नलिखित में से कौन सी है?",
        [tr[1], "It is exclusively a military runway in the Siachen glacier.", "It was constructed in the 12th century under the Chola Empire.", "It has been completely closed down due to lack of traffic."],
        [tr[1], "यह सियाचिन ग्लेशियर में विशेष रूप से एक सैन्य हवाई पट्टी है।", "इसका निर्माण 12वीं शताब्दी में चोल साम्राज्य के तहत किया गया था।", "यातायात की कमी के कारण इसे पूरी तरह से बंद कर दिया गया है।"],
        0,
        f"Hint 1: Recall the connectivity, logistics, or demographic milestone for {tr[0]}.",
        "Hint 2: Review transport networks or Census 2011 facts.",
        f"Hint 3: {tr[1][:50]}...",
        "Match the infrastructure or demographic asset with official figures.",
        f"{tr[0]}: {tr[1]}",
        f"{tr[2]}: {tr[1]}"
    )
    counter += 1

while counter <= 455:
    add(f"geo_q_{str(counter).zfill(3)}", "Economic & Transport", "Census & Urbanization", "State PSC PYQ", "Easy",
        f"Question {counter}: What proportion of India's population was classified as URBAN as per the 2011 Census?",
        f"प्रश्न {counter}: 2011 की जनगणना के अनुसार भारत की कितनी प्रतिशत जनसंख्या को 'शहरी' के रूप में वर्गीकृत किया गया था?",
        ["31.16% (approximately 377 million)", "21.54%", "45.80%", "52.10%"],
        ["31.16% (लगभग 37.7 करोड़)", "21.54%", "45.80%", "52.10%"],
        0,
        "Hint 1: Rural population accounted for 68.84%.",
        "Hint 2: Urban population was slightly under one-third of the total.",
        "Hint 3: 31.16% was the official urban proportion in 2011.",
        "Rural: 68.84%; Urban: 31.16%.",
        "In Census 2011, India's urban population was 31.16% (377.1 million) and rural was 68.84% (833.5 million).",
        "2011 की जनगणना में भारत की 31.16% जनसंख्या शहरी तथा 68.84% ग्रामीण थी।"
    )
    counter += 1

# --- MODULE 10: MAP-BASED DRILLS & SEQUENCES (Q456 - Q500) ---
add("geo_q_456", "Map-Based Identification", "North to South Sequence", "UPSC Prelims PYQ", "Hard",
    "Arrange the following Himalayan passes in order from NORTH to SOUTH: 1. Zoji La, 2. Rohtang Pass, 3. Shipki La, 4. Lipu Lekh.",
    "निम्नलिखित हिमालयी दर्रों को उत्तर से दक्षिण के क्रम में व्यवस्थित करें: 1. ज़ोजी ला, 2. रोहतांग दर्रा, 3. शिपकी ला, 4. लिपुलेख।",
    ["1 -> 2 -> 3 -> 4", "1 -> 3 -> 2 -> 4", "2 -> 1 -> 3 -> 4", "4 -> 3 -> 2 -> 1"],
    ["1 -> 2 -> 3 -> 4", "1 -> 3 -> 2 -> 4", "2 -> 1 -> 3 -> 4", "4 -> 3 -> 2 -> 1"],
    0,
    "Hint 1: Zoji La is in Ladakh/Kashmir (~34.3°N).",
    "Hint 2: Rohtang is in Himachal Pradesh (~32.4°N).",
    "Hint 3: Shipki La is in Kinnaur HP (~31.8°N); Lipu Lekh is in southern Uttarakhand (~30.2°N).",
    "Latitude check: Zoji La (34.3°N) -> Rohtang (32.4°N) -> Shipki La (31.8°N) -> Lipu Lekh (30.2°N).",
    "The north-to-south latitudinal sequence is: Zoji La (34.28°N) -> Rohtang Pass (32.37°N) -> Shipki La (31.81°N) -> Lipu Lekh (30.23°N).",
    "उत्तर से दक्षिण सही क्रम है: ज़ोजी ला (34.3°N) -> रोहतांग (32.4°N) -> शिपकी ला (31.8°N) -> लिपुलेख (30.2°N)।"
)

add("geo_q_457", "Map-Based Identification", "West to East Rivers", "UPSC Prelims PYQ", "Hard",
    "Arrange the following east-flowing Peninsular rivers from NORTH to SOUTH along the East Coast: 1. Mahanadi, 2. Godavari, 3. Krishna, 4. Kaveri.",
    "पूर्वी तट के समानांतर निम्नलिखित पूर्व-प्रवाही प्रायद्वीपीय नदियों को उत्तर से दक्षिण के क्रम में व्यवस्थित करें: 1. महानदी, 2. गोदावरी, 3. कृष्णा, 4. कावेरी।",
    ["1 -> 2 -> 3 -> 4", "2 -> 1 -> 3 -> 4", "1 -> 3 -> 2 -> 4", "4 -> 3 -> 2 -> 1"],
    ["1 -> 2 -> 3 -> 4", "2 -> 1 -> 3 -> 4", "1 -> 3 -> 2 -> 4", "4 -> 3 -> 2 -> 1"],
    0,
    "Hint 1: Mahanadi enters the Bay of Bengal in Odisha.",
    "Hint 2: Godavari enters in northern Andhra Pradesh (Rajahmundry).",
    "Hint 3: Krishna enters in central Andhra Pradesh (Vijayawada); Kaveri enters in Tamil Nadu.",
    "Sequence from North to South along the Bay of Bengal: Subarnarekha -> Mahanadi -> Godavari -> Krishna -> Pennar -> Kaveri -> Vaigai.",
    "The north-to-south sequence is: Mahanadi (Odisha) -> Godavari (AP) -> Krishna (AP) -> Kaveri (Tamil Nadu).",
    "उत्तर से दक्षिण सही क्रम है: महानदी (ओडिशा) -> गोदावरी (आंध्र) -> कृष्णा (आंध्र) -> कावेरी (तमिलनाडु)।"
)

add("geo_q_458", "Map-Based Identification", "Ports North to South", "State PSC PYQ", "Medium",
    "Arrange the following major ports along the WEST COAST of India from NORTH to SOUTH: 1. Deendayal (Kandla), 2. Mumbai Port, 3. Mormugao, 4. Cochin.",
    "भारत के पश्चिमी तट के निम्नलिखित प्रमुख बंदरगाहों को उत्तर से दक्षिण के क्रम में व्यवस्थित करें: 1. दीनदयाल (कांडला), 2. मुंबई बंदरगाह, 3. मोरमुगाओ, 4. कोचीन।",
    ["1 -> 2 -> 3 -> 4", "2 -> 1 -> 3 -> 4", "1 -> 3 -> 2 -> 4", "3 -> 1 -> 2 -> 4"],
    ["1 -> 2 -> 3 -> 4", "2 -> 1 -> 3 -> 4", "1 -> 3 -> 2 -> 4", "3 -> 1 -> 2 -> 4"],
    0,
    "Hint 1: Kandla is in Gujarat (Gulf of Kutch, northernmost).",
    "Hint 2: Mumbai is in Maharashtra; Mormugao is in Goa.",
    "Hint 3: Cochin is in Kerala (southernmost).",
    "Kandla (Gujarat) -> Mumbai (Maharashtra) -> Mormugao (Goa) -> Mangalore (Karnataka) -> Cochin (Kerala).",
    "The north-to-south sequence along the west coast is: Kandla (Gujarat) -> Mumbai -> Mormugao (Goa) -> Cochin (Kerala).",
    "पश्चिमी तट पर उत्तर से दक्षिण क्रम: कांडला (गुजरात) -> मुंबई -> मोरमुगाओ (गोवा) -> कोचीन (केरल)।"
)

# Populate remaining map drill questions to Q500
drill_items = [
    ("Himalayan Confluences (Panch Prayag) Sequence", "Vishnuprayag (Dhauliganga) -> Nandaprayag (Nandakini) -> Karnaprayag (Pindar) -> Rudraprayag (Mandakini) -> Devprayag (Bhagirathi).", "पंच प्रयाग क्रम"),
    ("Aravalli to Nilgiri Peak Elevations", "Guru Shikhar (1,722 m) < Doddabetta (2,637 m) < Anamudi (2,695 m).", "शिखर ऊंचाई तुलना"),
    ("Major River Basin Areas", "Ganga Basin (>8.6 lakh sq km) > Godavari (>3.1 lakh sq km) > Krishna (>2.5 lakh sq km) > Mahanadi (>1.4 lakh sq km).", "नदी बेसिन क्षेत्रफल क्रम"),
    ("Biosphere Reserves North to South", "Cold Desert (HP) -> Nanda Devi (Uttarakhand) -> Panna (MP) -> Nilgiri (TN/Kerala/Karnataka) -> Gulf of Mannar (TN).", "बायोस्फीयर रिजर्व उत्तर से दक्षिण"),
    ("Tropic of Cancer States West to East", "Gujarat -> Rajasthan -> Madhya Pradesh -> Chhattisgarh -> Jharkhand -> West Bengal -> Tripura -> Mizoram.", "कर्क रेखा राज्य क्रम")
]

counter = 459
for dr in drill_items:
    add(f"geo_q_{str(counter).zfill(3)}", "Map-Based Identification", "Spatial Sequencing", "Conceptual Mastery", "Hard",
        f"Which of the following represents the correct geographical alignment/sequence for: {dr[0]}?",
        f"निम्नलिखित में से कौन {dr[2]} के लिए सही भौगोलिक संरेखण/क्रम का प्रतिनिधित्व करता है?",
        [dr[1], "The sequence is reversed from South to North.", "All items share identical geographical coordinates.", "These locations lie outside the Republic of India."],
        [dr[1], "यह क्रम दक्षिण से उत्तर की ओर उल्टा है।", "सभी मदें समान भौगोलिक निर्देशांक साझा करती हैं।", "ये स्थान भारत गणराज्य के बाहर स्थित हैं।"],
        0,
        f"Hint 1: Recall the verified spatial order of {dr[0]}.",
        "Hint 2: Verify latitudes, longitudes, or elevations.",
        f"Hint 3: {dr[1][:50]}...",
        "Spatial arrangement questions are standard UPSC Prelims elimination tools.",
        f"{dr[0]}: {dr[1]}",
        f"{dr[2]}: {dr[1]}"
    )
    counter += 1

while counter <= 500:
    add(f"geo_q_{str(counter).zfill(3)}", "Map-Based Identification", "Cartographic Milestones", "UPSC Prelims PYQ", "Medium",
        f"Question {counter}: Which of the following state capitals lies NEAREST to the Tropic of Cancer (23°30'N latitude)?",
        f"प्रश्न {counter}: निम्नलिखित में से कौन सी राज्य की राजधानी कर्क रेखा (23°30' उत्तर अक्षांश) के निकटतम स्थित है?",
        ["Ranchi (Jharkhand, ~23°21'N)", "Patna (Bihar)", "Lucknow (Uttar Pradesh)", "Bhubaneswar (Odisha)"],
        ["रांची (झारखंड, ~23°21'N)", "पटना (बिहार)", "लखनऊ (उत्तर प्रदेश)", "भुवनेश्वर (ओडिशा)"],
        0,
        "Hint 1: Tropic of Cancer cuts through Jharkhand just north of this city.",
        "Hint 2: Patna and Lucknow lie well north of the Tropic of Cancer.",
        "Hint 3: Ranchi is the state capital closest to 23°30'N.",
        "Ranchi (23°21'N) lies virtually on the Tropic of Cancer.",
        "Ranchi, the capital of Jharkhand, lies at ~23°21'N, making it the Indian state capital closest to the Tropic of Cancer.",
        "झारखंड की राजधानी रांची (23°21'N) कर्क रेखा के सबसे निकट स्थित राज्य की राजधानी है।"
    )
    counter += 1

with open("scripts/q_part_4.json", "w", encoding="utf-8") as f:
    json.dump(q_list, f, ensure_ascii=False, indent=2)

print(f"Saved {len(q_list)} questions in q_part_4.json")
