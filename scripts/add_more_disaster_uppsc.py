import json

with open("public/data/questions.json", "r", encoding="utf-8") as f:
    questions = json.load(f)

print(f"Current count: {len(questions)}")

more_questions = [
    {
        "id": "geo_q_516",
        "topic": "Natural Hazards & Disasters",
        "subtopic": "Urban Flooding",
        "examType": "Conceptual Mastery",
        "difficulty": "Medium",
        "question": "Which of the following is considered the primary hydrological factor contributing to recurrent urban flooding in Indian metropolitan cities like Mumbai, Chennai, and Bengaluru?",
        "questionHindi": "मुंबई, चेन्नई और बेंगलुरु जैसे भारतीय महानगरों में बार-बार आने वाली शहरी बाढ़ के लिए निम्नलिखित में से किस कारक को प्राथमिक जलवैज्ञानिक कारण माना जाता है?",
        "options": [
            "Drastic reduction in natural infiltration due to high impervious surface cover (concretization)",
            "Rise in regional groundwater tables above the surface",
            "Continuous seismic liquefaction of the subsoil",
            "High evaporation rates causing intense convective cloud seeding"
        ],
        "optionsHindi": [
            "कंक्रीटीकरण और अभेद्य सतह आवरण के कारण प्राकृतिक जल रिसाव (इन्फिल्ट्रेशन) में अत्यधिक कमी",
            "क्षेत्रीय भूजल स्तर का सतह से ऊपर उठ जाना",
            "उप-मृदा का निरंतर भूकंपीय द्रवीकरण (लिक्विफैक्शन)",
            "उच्च वाष्पीकरण दर से तीव्र संवहनीय बादल बनना"
        ],
        "correct": 0,
        "hints": [
            "Hint 1: Natural soil infiltrates ~50% of precipitation; concrete surfaces infiltrate <10%.",
            "Hint 2: Stormwater runoff volume increases by 3 to 6 times.",
            "Hint 3: Destruction of urban wetlands, lakes, and interconnecting canals."
        ],
        "trapAlert": "Urban flooding is primarily driven by anthropogenic alteration of urban hydrology and loss of sponge capacity.",
        "explanation": "Urban concretization replaces permeable natural soil with impermeable asphalt and roofs, turning 80–90% of storm precipitation into instantaneous surface runoff, choking drainage channels.",
        "explanationHindi": "शहरी कंक्रीटीकरण के कारण मिट्टी की प्राकृतिक जल सोखने की क्षमता खत्म हो जाती है, जिससे 80-90% वर्षा का पानी तत्काल सतही बहाव (रनऑफ) में बदल जाता है और जलनिकासी व्यवस्था ध्वस्त हो जाती है।"
    },
    {
        "id": "geo_q_517",
        "topic": "Natural Hazards & Disasters",
        "subtopic": "Landslides",
        "examType": "Conceptual Mastery",
        "difficulty": "Hard",
        "question": "Regarding the geomorphological differences in landslide vulnerability between the Himalayas and the Western Ghats, which statement is correct?",
        "questionHindi": "हिमालय और पश्चिमी घाट के बीच भूस्खलन संवेदनशीलता के भू-आकृतिक अंतर के संबंध में कौन सा कथन सही है?",
        "options": [
            "Himalayan landslides are driven by active tectonic shearing and young lithology, whereas Western Ghats landslides are primarily debris flows on saturated lateritic regolith triggered by intense rain",
            "Western Ghats are tectonically more active than the young fold mountains of the Himalayas",
            "Himalayan landslides occur exclusively due to human road-cutting with zero natural triggers",
            "Western Ghats landslides are primarily caused by glacial retreat and moraine dam failure"
        ],
        "optionsHindi": [
            "हिमालयी भूस्खलन सक्रिय विवर्तनिक हलचलों और नवीन शैलों द्वारा संचालित होते हैं, जबकि पश्चिमी घाट के भूस्खलन भारी बारिश से संतृप्त लेटेराइट मिट्टी पर मलबे के बहाव (डेब्रिस फ्लो) से होते हैं",
            "पश्चिमी घाट हिमालय के युवा वलित पर्वतों की तुलना में विवर्तनिक रूप से अधिक सक्रिय हैं",
            "हिमालयी भूस्खलन केवल मानवीय सड़क निर्माण के कारण होते हैं, कोई प्राकृतिक कारण नहीं होता",
            "पश्चिमी घाट के भूस्खलन मुख्य रूप से हिमनदों के पिघलने और मोरेन बांध टूटने से होते हैं"
        ],
        "correct": 0,
        "hints": [
            "Hint 1: Himalayas are young, ductile, seismically active fold mountains with deep fractures.",
            "Hint 2: Western Ghats are an ancient stable fault scarp, but experience heavy orographic rain (>2,500 mm).",
            "Hint 3: Intense rainfall saturates the lateritic weathering mantle (regolith)."
        ],
        "trapAlert": "Do not assume the Western Ghats are tectonically active; they are a stable Precambrian shield scarp.",
        "explanation": "Himalayan landslides involve tectonically shattered, young sedimentary/metamorphic rocks with steep seismic gradients. Western Ghats landslides are debris flows and soil slips caused by heavy rainfall saturating deep lateritic soil profiles on steep denuded slopes.",
        "explanationHindi": "हिमालय में विवर्तनिक रूप से टूटी हुई युवा चट्टानें और भूकंपीय सक्रियता मुख्य कारक हैं, जबकि पश्चिमी घाट में भारी मानसूनी बारिश से लेटेराइट मिट्टी के संतृप्त होने से मलबे का तीव्र प्रवाह होता है।"
    },
    {
        "id": "geo_q_518",
        "topic": "Natural Hazards & Disasters",
        "subtopic": "Forest Fires",
        "examType": "UPSC Prelims PYQ",
        "difficulty": "Medium",
        "question": "In the Western Himalayas (Uttarakhand and Himachal Pradesh), which tree species sheds resin-rich dry needles during summer that make the forest floor highly susceptible to rapid wildfire spread?",
        "questionHindi": "पश्चिमी हिमालय (उत्तराखंड और हिमाचल प्रदेश) में, कौन सी वृक्ष प्रजाति गर्मियों में राल (रेजिन) युक्त सूखी पत्तियां गिराती है जो वन तल को तेजी से आग फैलने के प्रति अत्यधिक संवेदनशील बनाती है?",
        "options": [
            "Chir Pine (Pinus roxburghii)",
            "Deodar Cedar (Cedrus deodara)",
            "Silver Fir (Abies pindrow)",
            "Rhododendron (Rhododendron arboreum)"
        ],
        "optionsHindi": [
            "चीड़ / चिर पाइन (Pinus roxburghii)",
            "देवदार (Cedrus deodara)",
            "सिल्वर फर (Abies pindrow)",
            "बुरांश / रोडोडेंड्रोन"
        ],
        "correct": 0,
        "hints": [
            "Hint 1: Highly inflammable needle-like foliage called 'Pirul'.",
            "Hint 2: Promoted during British forestry for timber and resin extraction.",
            "Hint 3: It releases turpentine and volatile oils when ignited."
        ],
        "trapAlert": "Deodar and Rhododendron do not shed combustible resinous needles like Chir Pine.",
        "explanation": "Chir Pine (Pinus roxburghii) covers extensive mid-altitude Himalayan slopes. Its needles (Pirul) contain flammable resins and do not decompose easily, creating a thick combustible carpet in dry summer months.",
        "explanationHindi": "चीड़ (चिर पाइन) की पत्तियां (पिरुल) राल और तेल से भरपूर होती हैं। गर्मियों में ये जमीन पर सूखकर एक ज्वलनशील परत बनाती हैं, जिससे जरा सी चिंगारी से भीषण वनाग्नि भड़क उठती है।"
    },
    {
        "id": "geo_q_519",
        "topic": "Biodiversity & Conservation",
        "subtopic": "UPPSC Special - UP Wetlands",
        "examType": "UPPSC Special",
        "difficulty": "Medium",
        "question": "Which of the following wetlands in eastern Uttar Pradesh was designated as a Ramsar site in 2021 and serves as the largest natural freshwater floodplain lake in the region?",
        "questionHindi": "पूर्वी उत्तर प्रदेश की निम्नलिखित में से किस आर्द्रभूमि को 2021 में रामसर स्थल के रूप में नामित किया गया था और यह इस क्षेत्र की सबसे बड़ी प्राकृतिक मीठे पानी की बाढ़ के मैदान की झील है?",
        "options": [
            "Bakhira Wildlife Sanctuary (Sant Kabir Nagar)",
            "Haiderpur Wetland (Muzaffarnagar)",
            "Sur Sarovar (Agra)",
            "Parvati Arga (Gonda)"
        ],
        "optionsHindi": [
            "बखीरा वन्यजीव अभयारण्य (संत कबीर नगर)",
            "हैदरपुर वेटलैंड (मुजफ्फरनगर)",
            "सूर सरोवर (आगरा)",
            "पार्वती अरगा (गोंडा)"
        ],
        "correct": 0,
        "hints": [
            "Hint 1: Located near Khalilabad in Sant Kabir Nagar district.",
            "Hint 2: Formed as a natural oxbow/floodplain depression of the Rapti river system.",
            "Hint 3: Also famous for local brass and bell metal craft in the surrounding region."
        ],
        "trapAlert": "Haiderpur is in Western UP (Bijnor/Muzaffarnagar); Bakhira is in Eastern UP (Sant Kabir Nagar).",
        "explanation": "Bakhira Wildlife Sanctuary in Sant Kabir Nagar district (eastern UP) is a premier freshwater floodplain lake designated as a Ramsar wetland on World Wetlands Day 2022 (notified 2021).",
        "explanationHindi": "संत कबीर नगर जिले में स्थित बखीरा वन्यजीव अभयारण्य पूर्वी उत्तर प्रदेश की सबसे बड़ी प्राकृतिक मीठे पानी की झील है, जिसे 2021 में रामसर स्थल घोषित किया गया था।"
    },
    {
        "id": "geo_q_520",
        "topic": "Transport & Infrastructure",
        "subtopic": "UPPSC Special - UP Canals",
        "examType": "UPPSC Special",
        "difficulty": "Medium",
        "question": "The Sharda Canal, the longest canal network in Uttar Pradesh, originates from which river and at which location?",
        "questionHindi": "उत्तर प्रदेश का सबसे लंबा नहर नेटवर्क 'शारदा नहर', किस नदी और किस स्थान से निकाली गई है?",
        "options": [
            "Sharda River at Banbasa",
            "Ganga River at Narora",
            "Yamuna River at Tajewala",
            "Ghaghara River at Katarniaghat"
        ],
        "optionsHindi": [
            "बनबसा में शारदा नदी से",
            "नरौरा में गंगा नदी से",
            "ताजेवाला में यमुना नदी से",
            "कतरनियाघाट में घाघरा नदी से"
        ],
        "correct": 0,
        "hints": [
            "Hint 1: Located on the border of Pilibhit district and Uttarakhand.",
            "Hint 2: Constructed between 1920 and 1928.",
            "Hint 3: Irrigates over 8 lakh hectares across Rohilkhand and Awadh plains."
        ],
        "trapAlert": "Narora is where the Lower Ganga Canal originates, not Sharda Canal.",
        "explanation": "The Sharda Canal was taken out from the right bank of the Sharda River at Banbasa (Pilibhit/Uttarakhand border) in 1928, creating an extensive network of over 12,000 km of canals.",
        "explanationHindi": "शारदा नहर 1928 में पीलीभीत-उत्तराखंड सीमा पर स्थित बनबसा में शारदा नदी से निकाली गई थी। यह उत्तर प्रदेश की सबसे बड़ी नहर प्रणाली है।"
    },
    {
        "id": "geo_q_521",
        "topic": "Mineral & Energy Resources",
        "subtopic": "UPPSC Special - Energy",
        "examType": "UPPSC Special",
        "difficulty": "Medium",
        "question": "Uttar Pradesh's only nuclear power station, the Narora Atomic Power Station (NAPS), is located in which district and what type of reactors does it operate?",
        "questionHindi": "उत्तर प्रदेश का एकमात्र परमाणु ऊर्जा केंद्र, 'नरौरा परमाणु ऊर्जा स्टेशन' (NAPS), किस जिले में स्थित है और यह किस प्रकार के रिएक्टर संचालित करता है?",
        "options": [
            "Bulandshahr district; Pressurized Heavy Water Reactors (PHWR)",
            "Sonbhadra district; Fast Breeder Reactors (FBR)",
            "Prayagraj district; Boiling Water Reactors (BWR)",
            "Gorakhpur district; Pressurized Water Reactors (PWR)"
        ],
        "optionsHindi": [
            "बुलंदशहर जिला; दाबित भारी जल रिएक्टर (PHWR)",
            "सोनभद्र जिला; तीव्र प्रजनक रिएक्टर (FBR)",
            "प्रयागराज जिला; क्वथन जल रिएक्टर (BWR)",
            "गोरखपुर जिला; दाबित जल रिएक्टर (PWR)"
        ],
        "correct": 0,
        "hints": [
            "Hint 1: Situated on the banks of the Upper Ganga Canal in western UP.",
            "Hint 2: It houses two indigenous 220 MWe reactors commissioned in 1989 and 1991.",
            "Hint 3: Heavy water (D2O) is used as both moderator and coolant."
        ],
        "trapAlert": "Gorakhpur Nuclear Power Plant is in Haryana (Fatehabad district), not Gorakhpur in UP.",
        "explanation": "Narora Atomic Power Station (2 x 220 MW PHWRs) is located in Bulandshahr district, UP. It utilizes heavy water moderator/coolant and natural uranium fuel.",
        "explanationHindi": "नरौरा परमाणु ऊर्जा केंद्र बुलंदशहर जिले में गंगा नदी के तट पर स्थित है। इसमें 220 मेगावाट क्षमता के दो स्वदेशी दाबित भारी जल रिएक्टर (PHWR) कार्यरत हैं।"
    },
    {
        "id": "geo_q_522",
        "topic": "Mineral & Energy Resources",
        "subtopic": "UPPSC Special - Reservoirs",
        "examType": "UPPSC Special",
        "difficulty": "Easy",
        "question": "Govind Ballabh Pant Sagar, India's largest artificial reservoir, is created by the impoundment of which dam on which river in Uttar Pradesh?",
        "questionHindi": "भारत का सबसे बड़ा कृत्रिम जलाशय 'गोविंद वल्लभ पंत सागर', उत्तर प्रदेश में किस नदी पर बने किस बांध द्वारा निर्मित है?",
        "options": [
            "Rihand Dam on Rihand River (Sonbhadra)",
            "Matatila Dam on Betwa River (Lalitpur)",
            "Parichha Dam on Betwa River (Jhansi)",
            "Tehri Dam on Bhagirathi River (Uttarakhand)"
        ],
        "optionsHindi": [
            "रिहंद नदी पर रिहंद बांध (सोनभद्र)",
            "बेतवा नदी पर माताटीला बांध (ललितपुर)",
            "बेतवा नदी पर पारीछा बांध (झांसी)",
            "भागीरथी नदी पर टिहरी बांध (उत्तराखंड)"
        ],
        "correct": 0,
        "hints": [
            "Hint 1: Located at Pipri in the southernmost district of UP.",
            "Hint 2: Rihand is a major right-bank tributary of the Son River.",
            "Hint 3: Named after the first Chief Minister of Uttar Pradesh."
        ],
        "trapAlert": "Govind Sagar is in Himachal (Bhakra); Govind Ballabh Pant Sagar is in Sonbhadra, UP.",
        "explanation": "Govind Ballabh Pant Sagar reservoir is formed by the Rihand Dam across the Rihand river (a tributary of the Son) at Pipri in Sonbhadra district, UP.",
        "explanationHindi": "सोनभद्र जिले के पिपरी में रिहंद नदी (सोन की सहायक) पर बने रिहंद बांध का जलाशय 'गोविंद वल्लभ पंत सागर' कहलाता है, जो भारत का सबसे बड़ा मानव निर्मित जलाशय है।"
    },
    {
        "id": "geo_q_523",
        "topic": "Soils & Natural Vegetation",
        "subtopic": "UPPSC Special - Soil Degradation",
        "examType": "UPPSC Special",
        "difficulty": "Medium",
        "question": "In Uttar Pradesh, extensive areas of fertile alluvial soil in districts like Aligarh, Mainpuri, and Kanpur have degraded into alkaline 'Usar' (Reh) soils primarily due to which factor?",
        "questionHindi": "उत्तर प्रदेश में अलीगढ़, मैनपुरी और कानपुर जैसे जिलों में उपजाऊ जलोढ़ मिट्टी के बड़े क्षेत्र मुख्य रूप से किस कारक के कारण क्षारीय 'ऊसर' (रेह) मिट्टी में बदल गए हैं?",
        "options": [
            "Excessive canal over-irrigation causing waterlogging, high water table, and capillary salt efflorescence",
            "Severe wind erosion removing the topsoil",
            "Acid rain caused by thermal power emissions",
            "Excessive application of chemical gypsum"
        ],
        "optionsHindi": [
            "अत्यधिक नहरी सिंचाई से जलभराव, उच्च भूजल स्तर और केशिकत्व (कैपिलरी) द्वारा सतह पर लवणों का जमना",
            "तीव्र वायु अपरदन द्वारा ऊपरी मिट्टी का उड़ जाना",
            "थर्मल पावर उत्सर्जन से होने वाली अम्लीय वर्षा",
            "रासायनिक जिप्सम का अत्यधिक प्रयोग"
        ],
        "correct": 0,
        "hints": [
            "Hint 1: Faulty water management in flat floodplains with poor sub-surface drainage.",
            "Hint 2: High evaporation draws dissolved sodium salts (carbonate, bicarbonate, sulfate) upward.",
            "Hint 3: White crust of salts ('Reh') appears on the surface, making soil barren."
        ],
        "trapAlert": "Gypsum is used to cure Usar soils; it is NOT the cause of alkalization.",
        "explanation": "Over-irrigation from canals in low-gradient plains raises the water table. Under intense solar heat, capillary action pulls dissolved sodium salts to the surface, creating barren alkaline Usar/Reh tracts.",
        "explanationHindi": "नहरों से अनियंत्रित सिंचाई के कारण भूजल स्तर ऊपर उठ जाता है। तेज धूप में केशिकत्व क्रिया द्वारा जमीन के नीचे के सोडियम लवण ऊपर आकर सफेद परत (रेह) बना देते हैं, जिससे मिट्टी ऊसर हो जाती है।"
    },
    {
        "id": "geo_q_524",
        "topic": "Natural Hazards & Disasters",
        "subtopic": "Heat Action Plans",
        "examType": "Conceptual Mastery",
        "difficulty": "Medium",
        "question": "Which municipal city in India pioneered South Asia's first comprehensive Heat Action Plan (HAP) in 2013 following a deadly heatwave, serving as the benchmark model replicated across India?",
        "questionHindi": "भारत के किस नगर निगम ने 2013 में एक घातक लू के बाद दक्षिण एशिया की पहली व्यापक 'हीट एक्शन प्लान' (HAP) की शुरुआत की, जो पूरे भारत में अपनाए जाने वाले मॉडल के रूप में उभरी?",
        "options": [
            "Ahmedabad (Gujarat)",
            "Jaipur (Rajasthan)",
            "Nagpur (Maharashtra)",
            "Lucknow (Uttar Pradesh)"
        ],
        "optionsHindi": [
            "अहमदाबाद (गुजरात)",
            "जयपुर (राजस्थान)",
            "नागपुर (महाराष्ट्र)",
            "लखनऊ (उत्तर प्रदेश)"
        ],
        "correct": 0,
        "hints": [
            "Hint 1: Developed following the catastrophic May 2010 heatwave that caused over 1,300 deaths.",
            "Hint 2: Introduced color-coded heat alerts, cool roofs initiative, and public cooling shelters.",
            "Hint 3: Partnered with the Indian Institute of Public Health (IIPH) and NRDC."
        ],
        "trapAlert": "Nagpur and Jaipur implemented HAPs later, based on the Ahmedabad pioneer blueprint.",
        "explanation": "Ahmedabad Municipal Corporation pioneered South Asia's first Heat Action Plan in 2013, implementing early warnings, cool roof coatings, and public water stations, significantly reducing heat mortality.",
        "explanationHindi": "अहमदाबाद नगर निगम ने 2010 की भीषण लू के बाद 2013 में दक्षिण एशिया की पहली 'हीट एक्शन प्लान' शुरू की, जिसमें समय पूर्व चेतावनी, कूल रूफ और पेयजल कियोस्क शामिल थे।"
    },
    {
        "id": "geo_q_525",
        "topic": "Natural Hazards & Disasters",
        "subtopic": "Disaster Financing",
        "examType": "UPSC Prelims PYQ",
        "difficulty": "Hard",
        "question": "Under the recommendations of the 15th Finance Commission (2021–2026), what is the ratio of allocation between Response/Relief and Mitigation within the National and State Disaster Risk Management Funds?",
        "questionHindi": "15वें वित्त आयोग (2021-2026) की सिफारिशों के तहत, राष्ट्रीय एवं राज्य आपदा जोखिम प्रबंधन कोष के अंतर्गत प्रतिक्रिया/राहत और शमन (मिटिगेशन) के बीच आवंटन का क्या अनुपात है?",
        "options": [
            "80% for Disaster Response (SDRF/NDRF) and 20% for Disaster Mitigation (SDMF/NDMF)",
            "50% for Disaster Response and 50% for Disaster Mitigation",
            "90% for Disaster Response and 10% for Disaster Mitigation",
            "70% for Disaster Response and 30% for Disaster Mitigation"
        ],
        "optionsHindi": [
            "80% आपदा प्रतिक्रिया (SDRF/NDRF) और 20% आपदा शमन (SDMF/NDMF)",
            "50% आपदा प्रतिक्रिया और 50% आपदा शमन",
            "90% आपदा प्रतिक्रिया और 10% आपदा शमन",
            "70% आपदा प्रतिक्रिया और 30% आपदा शमन"
        ],
        "correct": 0,
        "hints": [
            "Hint 1: The 15th FC integrated disaster management funds into Disaster Risk Management Funds (NDRMF/SDRMF).",
            "Hint 2: Response comprises Response (40%), Recovery & Reconstruction (30%), and Preparedness (10%) = 80%.",
            "Hint 3: Mitigation receives a dedicated 20% allocation for proactive risk reduction."
        ],
        "trapAlert": "Prior to the 15th FC, almost all funds went to response; the 15th FC specifically carved out 20% for mitigation.",
        "explanation": "The 15th Finance Commission established the National/State Disaster Risk Management Funds with an 80:20 split: 80% for Response (SDRF/NDRF covering response, recovery, preparedness) and 20% dedicated to Mitigation (SDMF/NDMF).",
        "explanationHindi": "15वें वित्त आयोग ने आपदा कोषों को 80:20 अनुपात में विभाजित किया: 80% आपदा प्रतिक्रिया/राहत के लिए और 20% आपदा पूर्व शमन (मिटिगेशन) के लिए समर्पित किया।"
    }
]

questions.extend(more_questions)

with open("public/data/questions.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, ensure_ascii=False, indent=2)

print(f"Updated total questions: {len(questions)}")
