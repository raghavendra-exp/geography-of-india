import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/data');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. MASTER FLOW (16 Stations)
const masterFlow = [
  {
    id: "location",
    station: 1,
    title: "Geographical Location & Frontiers",
    hindi: "भौगोलिक स्थिति एवं सीमाएँ",
    coords: "8°4'N–37°6'N, 68°7'E–97°25'E",
    def: "India lies in the northern and eastern hemispheres, between 8°4'N and 37°6'N latitudes and 68°7'E and 97°25'E longitudes. The Tropic of Cancer (23°30'N) divides the nation into almost equal tropical and subtropical halves. Total land frontier is ~15,200 km; coastline including islands is 7,516.6 km (mainland 6,100 km).",
    why: "Location dictates macro-climate (tropical monsoon), biological diversity, strategic Indian Ocean dominance across sea lines of communication (SLOCs), and agricultural calendar.",
    connects: ["geology", "climate", "ocean"],
    facts: [
      "Standard Meridian is 82°30'E passing through Mirzapur (UP), determining Indian Standard Time (IST = UTC+5:30).",
      "Tropic of Cancer cuts across 8 states: Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura, Mizoram.",
      "Extreme points: North = Indira Col (Siachen, 35.6°N), South = Indira Point (Great Nicobar, 6.75°N; Cape Comorin on mainland, 8.4°N), East = Kibithu (Arunachal, 97.03°E), West = Guhar Moti/Sir Creek (Gujarat, 68.13°E).",
      "Longitudinal span of ~30° results in a 2-hour local solar time difference between Arunachal Pradesh and Gujarat."
    ],
    upscTip: "UPSC Prelims frequently asks the north-to-south or east-to-west arrangement of frontier passes, state borders crossing the 82°30'E meridian (UP, MP, Chhattisgarh, Odisha, AP), and Tropic of Cancer cities."
  },
  {
    id: "geology",
    station: 2,
    title: "Geological Structure & Rock Systems",
    hindi: "भूगर्भीय संरचना एवं शैल तंत्र",
    coords: "Precambrian to Quaternary",
    def: "India's geology is divided into three primary morphological blocks: (1) The rigid Archaean/Precambrian Peninsular Shield; (2) The young, ductile Cenozoic Fold Mountains of the Himalayas; (3) The Quaternary Indo-Gangetic Alluvial Trough filled with aggradational river sediments.",
    why: "Rock systems determine mineral distribution (Dharwar for metals, Gondwana for coal, Cuddapah/Vindhyan for non-metals/limestone), groundwater reservoirs, and earthquake vulnerability.",
    connects: ["physiography", "minerals"],
    facts: [
      "Archaean System (gneisses and schists) contains some of the oldest continental crust (Dharwar craton ~3.4 billion years).",
      "Dharwar System is the most economically vital metalliferous rock system in India (Iron ore, gold, manganese, copper).",
      "Gondwana System (Permian-Carboniferous) formed in down-faulted rift valleys (Damodar, Mahanadi, Godavari) holding 98% of India's coal reserves.",
      "Deccan Traps: Flood basalt vulcanism (~66 Ma, Cretaceous-Palaeogene boundary) covering ~500,000 km², weathering into fertile black cotton soil (Regur)."
    ],
    upscTip: "Chronological sequence: Archaean -> Dharwar -> Cuddapah -> Vindhyan -> Gondwana -> Deccan Trap -> Tertiary -> Quaternary."
  },
  {
    id: "physiography",
    station: 3,
    title: "Physiographic Divisions",
    hindi: "भू-आकृतिक विभाजन",
    coords: "6 Major Macro-Units",
    def: "The six primary physiographic divisions are: 1. The Northern Mountains (Himalayas & Purvanchal); 2. The Great Northern Plains; 3. The Peninsular Plateau; 4. The Indian Desert (Thar); 5. The Coastal Plains; 6. The Islands.",
    why: "Forms the physical relief grid controlling surface runoff, climatic barriers, soil development, biodiversity niches, and human settlement density.",
    connects: ["drainage", "climate", "soils"],
    facts: [
      "Himalayas run for 2,400 km in an arc from the Indus gorge in the west to the Brahmaputra gorge (Namcha Barwa) in the east.",
      "Peninsular Plateau is bounded by Aravallis in the northwest, Rajmahal hills in the northeast, and Western/Eastern Ghats along coasts.",
      "The Northern Plains extend ~3,200 km east-west with an average width of 150-300 km, formed by alluvium deposition up to 2,000 m deep.",
      "Thar Desert lies in the rain-shadow of the Aravalli Range, which aligns parallel to the incoming Southwest Monsoon Arabian Sea branch."
    ],
    upscTip: "Understand the syntaxis bends of the Himalayas at Nanga Parbat (West) and Namcha Barwa (East) where structural trend sharply shifts southwards."
  },
  {
    id: "climate",
    station: 4,
    title: "Climate & Monsoon Dynamics",
    hindi: "जलवायु एवं मानसून तंत्र",
    coords: "Köppen: Amw, Aw, BShw, Cwg",
    def: "India experiences a Tropical Monsoon climate characterized by the seasonal reversal of wind direction. Driven by differential heating of land and sea, Tibetan plateau thermal low, shift of the ITCZ, the Somali Low-Level Jet, and Subtropical Westerly/Tropical Easterly Jet Streams.",
    why: "The monsoon delivers 75–80% of India's annual rainfall between June and September. Governs Kharif sowing, hydroelectric generation, and rural purchasing power.",
    connects: ["drainage", "soils", "agriculture"],
    facts: [
      "Onset over Kerala occurs normally by June 1; withdraws completely from the northwest by mid-October.",
      "Mawsynram and Cherrapunji in the Khasi Hills receive world-record precipitation (>11,000 mm) due to the funnel-shaped orography forcing the Bay of Bengal branch.",
      "Coromandel Coast (Tamil Nadu) receives its primary rainfall from the retreating Northeast Monsoon (Oct–Dec) picking moisture over the Bay of Bengal.",
      "Western Disturbances (temperate shallow depressions from the Mediterranean) supply vital winter precipitation for northern wheat crops."
    ],
    upscTip: "Master the impacts of ENSO (El Niño = generally deficit rainfall; La Niña = surplus/normal) and Positive IOD (warmer western Indian Ocean = enhances monsoon)."
  },
  {
    id: "drainage",
    station: 5,
    title: "Drainage Systems & River Networks",
    hindi: "अपवाह तंत्र एवं नदी प्रणालियाँ",
    coords: "Himalayan vs Peninsular",
    def: "India's drainage network comprises two major systems: Himalayan Rivers (Indus, Ganga, Brahmaputra) that are antecedent, perennial, fed by glaciers and monsoons; and Peninsular Rivers (Godavari, Krishna, Mahanadi, Kaveri, Narmada, Tapi) that are consequent, superimposed, and largely seasonal.",
    why: "Controls freshwater distribution, deltaic agriculture, inland navigation, hydroelectric potential, and interstate river dispute politics.",
    connects: ["agriculture", "resources", "disasters"],
    facts: [
      "77% of India's drainage flow discharges into the Bay of Bengal; only 23% drains into the Arabian Sea.",
      "Narmada and Tapi flow west into the Arabian Sea via tectonic rift valleys (graben) between the Vindhyan and Satpura ranges, forming estuaries rather than deltas.",
      "Ganga-Brahmaputra-Meghna basin is the world's 3rd largest by discharge and forms the largest mangrove delta (Sundarbans).",
      "Antecedent rivers like Indus, Satluj, and Brahmaputra cut deep gorges through rising Himalayan ranges before entering India."
    ],
    upscTip: "Memorize left-bank vs right-bank tributaries for Ganga, Godavari, Krishna, and Kaveri, as well as headwater confluences (Panch Prayag: Vishnu, Nand, Karn, Rudra, Devprayag)."
  },
  {
    id: "soils",
    station: 6,
    title: "Soils of India & Soil Health",
    hindi: "भारत की मृदा एवं मृदा स्वास्थ्य",
    coords: "ICAR 8-Group Classification",
    def: "India has 8 major soil classes recognized by the Indian Council of Agricultural Research (ICAR): Alluvial (40%), Black/Regur (15%), Red & Yellow (18.5%), Laterite (4.3%), Arid/Desert, Saline/Alkaline, Peaty/Organic, and Forest/Mountain soils.",
    why: "Soil characteristics determine agricultural productivity, cropping zones, fertilizer subsidy needs, and vulnerability to desertification and erosion.",
    connects: ["agriculture", "vegetation"],
    facts: [
      "Alluvial soils are rich in potash and lime, but deficient in nitrogen, phosphorus, and organic matter (humus).",
      "Black soil has high montmorillonite clay content, showing swell-shrink properties ('self-ploughing' through deep summer cracks).",
      "Laterite soils form under conditions of high temperature and alternating wet and dry seasons; intense leaching removes silica, leaving iron and aluminium sesquioxides.",
      "Over-irrigation in Punjab, Haryana, and western UP has created waterlogging and canal-induced salinity (Kallar/Reh)."
    ],
    upscTip: "UPSC tests differences between Bhangar (older, lime nodules/Kankar, above flood levels) and Khadar (newer, highly fertile flood-plain alluvium)."
  },
  {
    id: "vegetation",
    station: 7,
    title: "Natural Vegetation & Forest Wealth",
    hindi: "प्राकृतिक वनस्पति एवं वन संपदा",
    coords: "Champion & Seth Classification",
    def: "Forest types in India follow rainfall, temperature, and altitudinal gradients: Tropical Wet Evergreen (>200 cm rain), Tropical Moist Deciduous (100–200 cm), Tropical Dry Deciduous (70–100 cm), Tropical Thorn (<70 cm), Montane Forests, and Littoral/Mangroves.",
    why: "Forests sequester carbon, preserve watershed headwaters, sustain tribal livelihoods, and provide habitat for endangered megafauna.",
    connects: ["biodiversity", "soils", "climate"],
    facts: [
      "Tropical Deciduous (Monsoon) forests are the most widespread forest type in India, dominated by Sal, Teak, Shisham, and Mahua.",
      "Per India State of Forest Report (ISFR), total forest and tree cover accounts for ~24.62% of geographical area (Target is 33% under National Forest Policy 1988).",
      "Madhya Pradesh has the largest forest cover by area; Mizoram has the highest percentage of forest cover relative to total area (~84.5%).",
      "Mangroves cover ~4,992 sq km, with West Bengal (Sundarbans) holding ~42% of the national total, followed by Gujarat."
    ],
    upscTip: "UPSC Prelims tests indicator tree species: Rosewood, Mahogany, Ebony = Evergreen; Teak, Sal, Sandalwood = Deciduous; Babool, Kikar, Khair = Thorn."
  },
  {
    id: "resources",
    station: 8,
    title: "Minerals & Energy Resources",
    hindi: "खनिज एवं ऊर्जा संसाधन",
    coords: "Peninsular Belts & Offshore Basins",
    def: "India is richly endowed with ferrous metallic minerals and bauxite, but deficient in non-ferrous base metals (copper, lead, zinc, gold) and critical energy minerals (lithium, cobalt, nickel). Primary mineral belts lie in the Chota Nagpur Plateau, Odisha-Jharkhand, Central, and Southern belts.",
    why: "Determines industrial location, import dependency (crude oil, lithium), manufacturing competitiveness, and energy transition.",
    connects: ["industry", "transport"],
    facts: [
      "Odisha is the top producer of Iron Ore, Bauxite, Manganese, and Chromite in India.",
      "Jharia (Jharkhand) is India's premier metallurgical coking coalfield, located in the Damodar river valley.",
      "Offshore Bombay High produces ~60% of domestic crude oil, supplemented by Assam (Digboi, Naharkatiya) and Rajasthan (Mangala, Barmer).",
      "Beach sands of Kerala (Chavara) and Odisha hold world-class deposits of Monazite (thorium source) and Ilmenite (titanium source)."
    ],
    upscTip: "Stay updated on the 2023 MMDR Amendment Act and the 2025 National Critical Mineral Mission (NCMM) targeting domestic extraction of 24 critical minerals."
  },
  {
    id: "agriculture",
    station: 9,
    title: "Agricultural Patterns & Food Security",
    hindi: "कृषि प्रतिरूप एवं खाद्य सुरक्षा",
    coords: "Kharif, Rabi, Zaid Seasons",
    def: "Indian agriculture spans three cropping seasons: Kharif (monsoon sowings: Rice, Maize, Cotton, Jowar), Rabi (winter crops: Wheat, Gram, Mustard, Barley), and Zaid (summer intercrops: Watermelon, Cucumber, Fodder). Over 50% of the workforce is directly dependent on agriculture.",
    why: "Anchors food self-sufficiency, inflation dynamics, rural prosperity, and export earnings (basmati rice, spices, marine products).",
    connects: ["industry", "population"],
    facts: [
      "India is the world's largest producer of milk, pulses, and spices; 2nd largest in rice, wheat, sugarcane, cotton, and groundnut.",
      "Green Revolution (1960s) focused on HYV dwarf varieties (semi-dwarf wheat Lerma Rojo/Sonora 64), tubewell irrigation, and chemical fertilizers in Punjab, Haryana, and Western UP.",
      "Net irrigated area in India is ~49%; groundwater (tubewells/wells) accounts for over 62% of total net irrigated area.",
      "Millets (Shree Anna: Jowar, Bajra, Ragi) are climate-resilient C4 crops celebrated under the International Year of Millets (2023)."
    ],
    upscTip: "UPSC Prelims tests climatic requirements: Wheat = 10-15°C sowing, 50-75 cm rain; Rice = >25°C, >100 cm rain; Cotton = 210 frost-free days; Tea = well-drained acidic soil."
  },
  {
    id: "industry",
    station: 10,
    title: "Industrial Geography & Manufacturing Hubs",
    hindi: "औद्योगिक भूगोल एवं विनिर्माण केंद्र",
    coords: "Weber Locational Principles",
    def: "Industrial concentration in India follows raw material proximity (Iron & Steel in Chota Nagpur), port connectivity (Petrochemicals in Jamnagar/Visakhapatnam), labour & market agglomeration (Textiles in Mumbai-Ahmedabad-Coimbatore), and knowledge clusters (IT in Bengaluru-Hyderabad-Pune-NCR).",
    why: "Manufacturing expansion is essential to absorb surplus agricultural labour, drive exports, and achieve GDP value-addition targets.",
    connects: ["transport", "economic"],
    facts: [
      "The Chota Nagpur region is known as the 'Ruhr of India' due to co-location of iron ore, coking coal, limestone, and water.",
      "Textile industry shifted from Mumbai/Ahmedabad towards decentralized powerloom centers (Surat, Bhiwandi, Tirupur, Salem).",
      "Jamnagar Refinery (Reliance) in Gujarat is the world's largest single-site integrated refining complex (1.24 million bpd capacity).",
      "11 National Industrial Corridors (NIC) including DMIC (Delhi-Mumbai) and CBIC (Chennai-Bengaluru) are being developed along freight spines."
    ],
    upscTip: "Weberian locational triangle questions in GS-I: Why did the sugar industry shift from Northern India (UP/Bihar) to Peninsular India (Maharashtra/TN)? Longer crushing season, higher sucrose content."
  },
  {
    id: "transport",
    station: 11,
    title: "Transport Infrastructure & Logistics",
    hindi: "परिवहन अवसंरचना एवं संभार-तंत्र",
    coords: "Roads, Rails, Ports, Air, Pipelines",
    def: "National logistics network encompasses: Roadways (Golden Quadrilateral, North-South and East-West Corridors, Bharatmala Pariyojana); Railways (Dedicated Freight Corridors EDFC & WDFC, Vande Bharat); Ports (12 Major Ports under Sagarmala); Inland Waterways (NW-1 to NW-5); and Cross-country Pipelines (HVJ).",
    why: "Logistics cost currently stands at ~13-14% of GDP; modern multimodal freight corridors aim to reduce this to <9% for global manufacturing competitiveness.",
    connects: ["industry", "economic"],
    facts: [
      "Golden Quadrilateral connects Delhi, Mumbai, Chennai, and Kolkata, spanning 5,846 km.",
      "Eastern DFC (Ludhiana to Dankuni, 1,875 km) and Western DFC (Dadri to JNPT, 1,506 km) relieve passenger tracks and enable 100 km/h heavy freight.",
      "National Waterway-1 (Ganga-Bhagirathi-Hooghly from Prayagraj to Haldia, 1,620 km) is India's most important inland cargo artery.",
      "JNPT (Nhava Sheva) in Maharashtra and Mundra in Gujarat handle the vast majority of India's container traffic."
    ],
    upscTip: "UPSC tests locations of major ports from North to South along both coasts, and the alignment of DFC corridors."
  },
  {
    id: "population",
    station: 12,
    title: "Demographic Structure & Migration",
    hindi: "जनसांख्यिकी संरचना एवं प्रवास",
    coords: "Census 2011 & UN Projections",
    def: "India crossed 1.43 billion people in 2023, surpassing China to become the world's most populous nation. Population distribution is highly skewed: densely populated northern plains (Bihar density 1,106/km²) vs sparse Himalayan terrain (Arunachal density 17/km²).",
    why: "India is traversing its demographic dividend with a median age of ~28 years, creating an economic window of opportunity that will close by ~2045.",
    connects: ["urbanisation", "economic"],
    facts: [
      "National sex ratio was 943 females per 1,000 males (Census 2011); NFHS-5 showed an improved adult ratio but persistent child sex ratio challenges in northern states.",
      "Total Fertility Rate (TFR) has fallen to 2.0 nationally (below replacement level of 2.1), with southern states at ~1.6–1.8.",
      "Interstate labour migration flows prominently from Uttar Pradesh, Bihar, Odisha, and Rajasthan towards Maharashtra, Gujarat, Delhi-NCR, Karnataka, and Kerala.",
      "Scheduled Tribes (STs) constitute 8.6% of population (Census 2011), concentrated in the Central Tribal Belt (MP, Odisha, Jharkhand, Chhattisgarh) and Northeast."
    ],
    upscTip: "Analyze demographic divergence between Northern and Southern states and its implications for fiscal transfers (15th/16th Finance Commission) and parliamentary delimitation."
  },
  {
    id: "urbanisation",
    station: 13,
    title: "Urbanisation & Megacity Dynamics",
    hindi: "शहरीकरण एवं महानगर प्रतिरूप",
    coords: "Census: 31.16% -> Projected 40%+",
    def: "India's urban population stood at 31.16% in Census 2011 (~377 million) and is projected to surpass 40% (600+ million) by 2035. Characterized by 'top-heavy' growth concentrated in 53 million-plus urban agglomerations (Mumbai, Delhi, Kolkata, Chennai, Bengaluru, Hyderabad).",
    why: "Cities generate over 63% of national GDP, but suffer from infrastructure deficits, water crisis (Day Zero threats), urban floods, and slum growth.",
    connects: ["environment", "disasters"],
    facts: [
      "Urban Heat Island (UHI) effect elevates central city temperatures by 2–6°C compared to peripheral rural areas.",
      "The Smart Cities Mission covered 100 cities with integrated command and control centers (ICCCs) to optimize municipal services.",
      "Pradhan Mantri Awas Yojana - Urban (PMAY-U) addresses the urban affordable housing backlog.",
      "Census definition of Census Town: population >= 5,000; at least 75% male working population in non-agriculture; density >= 400 persons/sq km."
    ],
    upscTip: "UPSC Mains GS-I consistently asks about peri-urban sprawl, rurban development, and the vulnerability of Indian cities to localized cloudburst flooding."
  },
  {
    id: "disasters",
    station: 14,
    title: "Disaster Geography & Hazard Zoning",
    hindi: "आपदा भूगोल एवं जोखिम क्षेत्रीकरण",
    coords: "Seismic, Flood, Cyclone, Landslide",
    def: "Over 58% of India's landmass is prone to moderate to very severe earthquakes (Zones III to V); 12% to riverine flooding; 75% of coastline to cyclones; 68% of cultivable land to drought; and 15% of landmass to landslides.",
    why: "Disasters wipe out developmental gains. Modern frameworks emphasize Sendai Framework targets: Disaster Risk Reduction (DRR) over post-disaster relief.",
    connects: ["climatechange", "physiography"],
    facts: [
      "Bureau of Indian Standards (IS 1893) classifies India into 4 seismic zones: Zone II (Low), Zone III (Moderate), Zone IV (Severe: Delhi, parts of Himalayas, Gujarat), Zone V (Very Severe: Kashmir, HP, Uttarakhand, Northeast, Kutch).",
      "Bay of Bengal generates 4 times more cyclones than the Arabian Sea due to higher SST (>28°C), higher humidity, and upper-level divergence.",
      "Glacial Lake Outburst Floods (GLOFs) are accelerating in the Himalayas (e.g., South Lhonak lake outburst in Sikkim, October 2023; Chamoli flash flood 2021).",
      "National Disaster Management Authority (NDMA) chaired by the Prime Minister spearheads preparedness under the Disaster Management Act, 2005."
    ],
    upscTip: "Mains GS-III requires linking physiography with mitigation: Early warning radar (DWR), cyclone shelters under NCRMP, slope bio-engineering, and urban sponge cities."
  },
  {
    id: "climatechange",
    station: 15,
    title: "Climate Change & Ecological Resilience",
    hindi: "जलवायु परिवर्तन एवं पारिस्थितिक अनुकूलन",
    coords: "IPCC AR6 South Asia Assessment",
    def: "India faces compounding climate risks: Himalayan cryosphere retreat, changing frequency and intensity of monsoon depressions, sea level rise threatening coastal megacities and Sundarban mangroves, and recurring wet-bulb temperature heat waves exceeding human survival limits (35°C).",
    why: "Shapes India's commitments under the Paris Agreement (Panchamrit goals: 500 GW non-fossil capacity by 2030, 50% renewable share, Net Zero by 2070).",
    connects: ["disasters", "upsc"],
    facts: [
      "India's updated Nationally Determined Contributions (NDCs) commit to reduce emissions intensity of GDP by 45% by 2030 from 2005 level.",
      "Over 7,000 Himalayan glaciers are retreating at average rates of 10–30 meters per year, threatening long-term lean season flows of the Indus and Ganga.",
      "Sundarbans delta is submerging four times faster than the global sea level rise average due to subsidence and sediment starvation.",
      "National Action Plan on Climate Change (NAPCC) encompasses 8 missions including Solar, Enhanced Energy Efficiency, Sustainable Habitat, and Sustaining Himalayan Ecosystem."
    ],
    upscTip: "Connect static physical geography with Mission LiFE (Lifestyle for Environment) and the International Solar Alliance (headquartered in Gurugram, India)."
  },
  {
    id: "upsc",
    station: 16,
    title: "UPSC Synthesis & Exam Application",
    hindi: "यूपीएससी संश्लेषण एवं परीक्षा अनुप्रयोग",
    coords: "Prelims GS-I, Mains GS-I & GS-III",
    def: "Indian Geography forms the core foundation for competitive exams: Prelims tests precise factual cartography, river drainage sequences, pass locations, and protected area coordinates; Mains GS-I tests physical processes and resource distribution; Mains GS-III tests agriculture, disasters, and environment.",
    why: "Geography provides the highest scoring leverage when studied as a single interconnected causal network rather than memorized as disjointed facts.",
    connects: ["location"],
    facts: [
      "Prelims allocates 12–18 direct questions each year to Indian Geography, Environment, and Ecology.",
      "Map pointing accounts for 3–5 elimination-critical questions annually in UPSC Prelims.",
      "Mains GS-I contains 100+ marks of Geography questions requiring diagrams, sketch maps, and Weber/Christaller locational rationale.",
      "Interdisciplinary questions frequently bridge Geography with Geopolitics (IMEC corridor, Chabahar port, border infrastructure)."
    ],
    upscTip: "In every Mains geography answer, always draw an outline sketch map of India with labeled features to secure top-tier marks."
  }
];

fs.writeFileSync(path.join(outDir, 'master-flow.json'), JSON.stringify(masterFlow, null, 2), 'utf8');
console.log('Created master-flow.json');
// 2. PHYSIOGRAPHY (6 Divisions + Sub-divisions & Profiles)
const physiography = [
  {
    id: "himalayas",
    tag: "01 · Northern Mountain Wall",
    name: "The Himalayan Mountains & Purvanchal",
    hindi: "हिमालय पर्वतमाला एवं पूर्वांचल",
    span: "2,400 km long, 150–400 km wide",
    area: "~500,000 sq km",
    highestPoint: "K2 (Godwin-Austen, 8,611 m in PoK) / Kanchenjunga (8,598 m in Sikkim)",
    formation: "Formed by continent-continent collision between the northward-drifting Indian Plate and Eurasian Plate (~50–65 Ma), folding the geosynclinal sediments of the Tethys Sea. The process is active today with India indenting Eurasia at ~4–5 cm/year.",
    reliefFeatures: [
      {
        zone: "Trans-Himalayas (Tibetan Himalaya)",
        ranges: "Karakoram, Ladakh, Zaskar, Kailash ranges",
        elevation: "Average ~6,000 m",
        characteristics: "Arid, barren, rain-shadow plateau environment; hosts major glaciers: Siachen (76 km), Baltoro, Biafo."
      },
      {
        zone: "Greater Himalayas (Himadri)",
        ranges: "Continuous crystalline core (Archaean granite/gneisses)",
        elevation: "Average 6,100 m",
        characteristics: "Highest peaks on Earth (Everest 8,848.86 m in Nepal, Kanchenjunga 8,598 m, Nanda Devi 7,817 m, Kamet 7,756 m, Namcha Barwa 7,782 m); perennial snowfields feed major river systems."
      },
      {
        zone: "Lesser Himalayas (Himachal)",
        ranges: "Pir Panjal (longest), Dhauladhar, Mussoorie, Nag Tibba, Mahabharat",
        elevation: "3,700–4,500 m",
        characteristics: "Famous hill resorts (Shimla, Mussoorie, Nainital, Darjeeling); contains scenic structural valleys like Kashmir Valley and Kangra Valley; dissected by antecedent river gorges."
      },
      {
        zone: "Outer Himalayas (Shiwalik Range)",
        ranges: "Outermost foothills of loose unconsolidated tertiary deposits",
        elevation: "900–1,100 m",
        characteristics: "Prone to landslides; contains flat-bottomed longitudinal structural valleys called 'Duns' (e.g., Dehradun, Kotli Dun, Patli Dun) and 'Duars' in the east."
      },
      {
        zone: "Eastern Hills (Purvanchal)",
        ranges: "Patkai Bum, Naga Hills, Manipur Hills, Mizo (Lushai) Hills",
        elevation: "1,500–3,000 m (Highest: Saramati, 3,826 m in Nagaland)",
        characteristics: "Convex southward bend forming the India-Myanmar border; covered in dense subtropical/temperate forests; Loktak lake with floating phumdis (Keibul Lamjao NP)."
      }
    ],
    drainage: "Origin of Indus, Ganga, and Brahmaputra networks. Show antecedent drainage patterns cutting through rising ranges.",
    climate: "Altitudinal zonation ranging from subtropical foot-slopes to alpine tundras and permafrost.",
    soils: "Mountain/forest soils, podzolic soils in coniferous belts, skeletally thin on steep slopes.",
    agri: "Terrace cultivation (rice, maize), apple orchards (Himachal, Kashmir), off-season temperate vegetables, tea plantations in Darjeeling and Assam foothills.",
    hazards: "Severe seismicity (Zone IV & V), landslides, cloudbursts, and Glacial Lake Outburst Floods (GLOFs)."
  },
  {
    id: "plains",
    tag: "02 · Great Alluvial Trough",
    name: "The Great Northern Plains",
    hindi: "उत्तर का विशाल मैदान",
    span: "~3,200 km east-west, 150–300 km north-south",
    area: "~780,000 sq km",
    highestPoint: "Ambala divide (~291 m above sea level separating Indus and Ganga basins)",
    formation: "Formed by aggradational filling of the deep foredeep trough created between the rising Himalayas and the ancient Peninsular shield with river-borne alluvial sediments over the Pleistocene and Holocene epochs.",
    reliefFeatures: [
      {
        zone: "Bhabar Belt",
        characteristics: "Pebbly, unassorted coarse gravel belt along the Shiwalik foot-slopes (8–16 km wide). Extremely high porosity causes mountain streams to sink underground and disappear."
      },
      {
        zone: "Terai Belt",
        characteristics: "Marshy, swampy, highly moist lowland strip (15–30 km wide) south of Bhabar where underground streams re-emerge at the surface. Historically dense malarial jungle; cleared for agriculture (sugarcane, rice, wheat) in UP/Uttarakhand."
      },
      {
        zone: "Bhangar Belt",
        characteristics: "Older alluvium lying above the annual flood levels of rivers, forming terrace-like features. Contains calcareous nodules called 'Kankar'. Clayey and dark-colored."
      },
      {
        zone: "Khadar Belt",
        characteristics: "Newer, fine-grained, light-colored flood-plain alluvium deposited by annual river inundations. Highly fertile, self-renewing, ideal for intensive double/triple cropping."
      },
      {
        zone: "Reh / Kallar",
        characteristics: "Saline and alkaline efflorescences appearing on over-irrigated Bhangar soils in arid tracts of Punjab, Haryana, and Western UP."
      },
      {
        zone: "Bhur",
        characteristics: "Elevated pieces of land along the banks of Ganga-Yamuna formed by accumulation of wind-blown sands during hot dry summer months."
      }
    ],
    drainage: "Dense network: Indus system (west), Ganga-Yamuna-Ghaghara-Gandak-Kosi (central), Brahmaputra (east). Extensive doabs (Bari, Rechna, Chaj, Sind Sagar, Ganga-Yamuna Doab).",
    climate: "Continental subtropical monsoon; extreme seasonal temperature variation (hot 'Loo' winds in summer, frost/cold waves in winter).",
    soils: "Deep, productive alluvial soils rich in potash and lime, deficient in nitrogen and organic matter.",
    agri: "The 'Granary of India' — primary rice and wheat producing belt, sugarcane, mustard, jute (Bengal).",
    hazards: "Catastrophic monsoon floods (Kosi 'Sorrow of Bihar', Brahmaputra in Assam), waterlogging, canal-induced soil salinity."
  },
  {
    id: "plateau",
    tag: "03 · Ancient Cratonic Block",
    name: "The Peninsular Plateau",
    hindi: "प्रायद्वीपीय पठार",
    span: "Triangular plateau covering ~1.6 million sq km",
    area: "Largest and oldest physiographic unit (~50% of India)",
    highestPoint: "Anamudi (2,695 m, Anamalai Hills, Kerala)",
    formation: "Part of the ancient Gondwanaland shield that broke away during the Mesozoic era. Composed of Precambrian crystalline gneisses, granites, schists, with basaltic lava flows (Deccan Trap) poured out in the Late Cretaceous (~66 Ma).",
    reliefFeatures: [
      {
        zone: "Central Highlands",
        components: "Malwa Plateau, Bundelkhand, Baghelkhand, Vindhyan Range, Satpura Range",
        characteristics: "Bounded by Aravallis in the northwest. Malwa is drained northward by Chambal, Sind, Betwa, Ken into the Yamuna. Chambal is famous for badland ravine topography (Khad)."
      },
      {
        zone: "Deccan Plateau",
        components: "Maharashtra Plateau, Karnataka Plateau (Malnad & Maidan), Telangana Plateau",
        characteristics: "Slopes gently from west to east; Deccan Trap basalt in Maharashtra, crystalline Mysore plateau in Karnataka. Drained eastwards by Godavari, Krishna, and Kaveri."
      },
      {
        zone: "Chota Nagpur Plateau",
        components: "Ranchi, Hazaribagh, Koderma plateaus, Rajmahal Hills",
        characteristics: "The 'Mineral Heartland of India'; drained by Damodar (rift valley coalfields), Subarnarekha, and Barakar; radial drainage pattern from Ranchi plateau."
      },
      {
        zone: "Meghalaya (Shillong) Plateau & Karbi Anglong",
        components: "Garo, Khasi, Jaintia hills, Mikir hills",
        characteristics: "An eastward detached extension of the Peninsular block separated by the Malda Gap (Ganga-Brahmaputra alluvial gap); receives highest rainfall on Earth."
      },
      {
        zone: "Western Ghats (Sahyadri)",
        components: "Northern, Central, and Southern Sahyadri; Nilgiri, Anamalai, Cardamom hills",
        characteristics: "Continuous steep escarpment (average elevation 1,200 m); biodiversity hotspot; pierced by four major passes: Thal Ghat, Bhor Ghat, Palghat Gap, Shencottah Gap."
      },
      {
        zone: "Eastern Ghats",
        components: "Discontinuous hill ranges: Mahendragiri, Nallamala, Palkonda, Javadi, Shevaroy",
        characteristics: "Lower elevation (average 600 m), ancient relict hills severely eroded and dissected by Godavari, Krishna, Mahanadi, and Kaveri deltas. Highest peak: Jindhagada / Arma Konda (1,690 m)."
      }
    ],
    drainage: "East-flowing (Godavari, Krishna, Mahanadi, Kaveri) into Bay of Bengal; West-flowing rift rivers (Narmada, Tapi) and short torrential coastal streams (Sharavathi, Mandovi, Periyar) into Arabian Sea.",
    climate: "Tropical savanna (Aw) and semi-arid steppe (BShw) in the central rain-shadow tract.",
    soils: "Black cotton soil (Regur) on Deccan Traps; Red and Yellow soils on crystalline shields; Laterite soils on high plateaus.",
    agri: "Cotton, sugarcane, groundnut, soybean, pulses, coarse cereals (Jowar, Bajra, Ragi); coffee and tea on Western Ghats.",
    hazards: "Recurrent drought in rain-shadow districts (Marathwada, Rayalaseema, North Karnataka), landslides along Western Ghats escarpment."
  },
  {
    id: "desert",
    tag: "04 · Arid Zone",
    name: "The Indian (Thar) Desert",
    hindi: "भारतीय मरुस्थल (थार)",
    span: "Extends over ~200,000 sq km in Rajasthan, Gujarat, Punjab, Haryana",
    area: "World's 9th largest subtropical desert",
    highestPoint: "Aravalli contact fringe (~300–400 m; Guru Shikhar peak 1,722 m overlooks it)",
    formation: "Underlying geology is an extension of the Peninsular craton (marine fossils at Akal Wood Fossil Park near Jaisalmer prove it was submerged under the sea in the Jurassic era), covered by wind-blown aeolian sands during the Quaternary arid phase.",
    reliefFeatures: [
      {
        zone: "Marusthali (Desert Proper)",
        characteristics: "Shifting sand dunes (Dhrians), longitudinal dunes, transverse dunes, and crescent-shaped Barchans. Annual rainfall <150 mm."
      },
      {
        zone: "Rajasthan Bagar (Semi-arid transitional tract)",
        characteristics: "Grassland steppe east of Marusthali up to the Aravalli range. Drained by small seasonal streams into inland depressions."
      },
      {
        zone: "Playa Lakes & Dhads",
        characteristics: "Ephemeral salt lakes in enclosed basins (e.g., Sambhar Lake — India's largest inland salt lake, Didwana, Pachpadra) where commercial salt is extracted from brine."
      },
      {
        zone: "Rohi & Chos",
        characteristics: "Fertile alluvial tracts created by seasonal hill torrents near the Aravalli piedmont."
      }
    ],
    drainage: "Inland and ephemeral drainage; Luni is the only significant integrated river, originating near Pushkar and terminating in the marshy Rann of Kutch.",
    climate: "Arid desert (BWhw); extreme diurnal range of temperature (>15°C difference between day and night); intense evapotranspiration.",
    soils: "Desert/Arid soils: coarse texture, sandy, low nitrogen, high phosphate and soluble salts, alkaline pH.",
    agri: "Traditionally pastoralism and drought-hardy coarse grains (Bajra, Guar, Moth). Transformed by the Indira Gandhi Canal (Harike Barrage, 650 km) enabling wheat, cotton, and mustard in Ganganagar and Bikaner.",
    hazards: "Severe meteorological and hydrological drought, dust storms (Andhi), desertification, and wind erosion."
  },
  {
    id: "coasts",
    tag: "05 · Maritime Margins",
    name: "The Coastal Plains",
    hindi: "तटीय मैदान",
    span: "Mainland coastline: ~6,100 km (total 7,516.6 km)",
    area: "West Coast (narrow, submergent) vs East Coast (broad, emergent)",
    highestPoint: "Piedmont transitions from Ghats escarpments",
    formation: "Formed through coastal marine transgressions, regressions, wave deposition, and deltaic alluvium sedimentation flanking the Peninsular plateau.",
    reliefFeatures: [
      {
        zone: "Western Coastal Plain",
        characteristics: "Narrow strip (average 50–65 km wide) squeezed between the Western Ghats and the Arabian Sea. Submergent coastline (except Malabar which has emergent features). Divided into: Kutch & Kathiawar coast; Konkan coast (Maharashtra/Goa); Kannad/Karavali coast (Karnataka); Malabar coast (Kerala) with lagoons and backwaters called 'Kayals' (e.g., Vembanad Lake — India's longest lake, Ashtamudi)."
      },
      {
        zone: "Eastern Coastal Plain",
        characteristics: "Broad and emergent alluvial plain (average 100–130 km wide) with extensive fertile deltas formed by Mahanadi, Godavari, Krishna, and Kaveri. Divided into: Utkal coast (Odisha, with Chilika Lake — India's largest brackish lagoon); Northern Circars (between Mahanadi and Krishna); Coromandel coast (between Krishna and Kanyakumari, Tamil Nadu)."
      }
    ],
    drainage: "West-flowing: short, swift, non-deltaic rivers (Mandovi, Zuari, Sharavathi, Periyar, Bharathapuzha) forming estuaries. East-flowing: large deltaic rivers with wide distributary networks.",
    climate: "Humid tropical maritime; equable temperatures; East Coast is severely cyclone-exposed from October to December.",
    soils: "Coastal alluvium, deltaic alluvium, saline littoral soils, and lateritic patches on elevated coastal terraces.",
    agri: "Paddy in deltas ('Rice bowl of South India' in Krishna-Godavari and Thanjavur Kaveri deltas), coconut palms, arecanut, spices (black pepper, cardamom), cashews.",
    hazards: "Tropical cyclones, storm surges, coastal erosion, saltwater intrusion into coastal aquifers, and tsunami vulnerability."
  },
  {
    id: "islands",
    tag: "06 · Insular Territories",
    name: "The Island Groups",
    hindi: "द्वीपीय समूह (अंडमान-निकोबार एवं लक्षद्वीप)",
    span: "Two distinct archipelagos in Bay of Bengal & Arabian Sea",
    area: "Andaman & Nicobar: ~8,249 sq km (572 islands); Lakshadweep: ~32 sq km (36 islands)",
    highestPoint: "Saddle Peak (732 m, North Andaman)",
    formation: "Andaman & Nicobar are an elevated, subaerial continuation of the Arakan Yoma Tertiary fold mountain belt (tectonic origin). Lakshadweep islands are coral atolls resting on the submarine Chagos-Laccadive volcanic ridge.",
    reliefFeatures: [
      {
        zone: "Andaman & Nicobar Archipelago",
        characteristics: "Separated by the 10° Channel (10°N latitude separates Little Andaman from Car Nicobar). Duncan Passage separates South Andaman and Little Andaman. Contains India's only active volcano on Barren Island (last erupted 2017) and dormant volcano on Narcondam Island. Great Nicobar hosts the southernmost point: Indira Point (6°45'N)."
      },
      {
        zone: "Lakshadweep Archipelago",
        characteristics: "Low coral atolls (none exceeding 5 m above sea level). Ringed by coral reefs and calm lagoons. 9° Channel separates Minicoy (southernmost island) from the main Lakshadweep group; 8° Channel separates Minicoy from the Maldives."
      }
    ],
    drainage: "No major integrated river systems; Kalpong River in North Andaman is the only river in the archipelago with a hydroelectric project.",
    climate: "Equatorial / maritime; heavy rainfall from both SW and NE monsoons; high humidity year-round.",
    soils: "Forest soils in Andaman & Nicobar; thin calcareous coral sand soils in Lakshadweep.",
    agri: "Coconut, arecanut, tropical fruits, fisheries, seaweed cultivation, and burgeoning eco-tourism.",
    hazards: "High seismic and tsunami risk in Andaman & Nicobar (Subduction zone where Indo-Australian plate subducts under Burma microplate, 2004 tsunami epicenter nearby); coral bleaching from marine heatwaves."
  }
];

fs.writeFileSync(path.join(outDir, 'physiography.json'), JSON.stringify(physiography, null, 2), 'utf8');
console.log('Created physiography.json');
// 3. RIVERS DATASET (14 Major Basins)
const rivers = [
  {
    id: "ganga",
    name: "Ganga",
    hindi: "गंगा",
    system: "Himalayan",
    flowDirection: "East-flowing",
    lengthKm: 2525,
    basinAreaSqKm: 861452,
    source: {
      name: "Gangotri Glacier (Gaumukh) as Bhagirathi",
      range: "Garhwal Himalaya",
      elevation: "7,010 m",
      state: "Uttarakhand",
      lat: 30.92,
      lon: 79.08
    },
    mouth: {
      name: "Sundarbans Delta (Meghna estuary into Bay of Bengal)",
      state: "West Bengal / Bangladesh",
      lat: 21.65,
      lon: 88.15
    },
    flowChain: [
      "Gaumukh (Bhagirathi origin)",
      "Devprayag (Bhagirathi + Alaknanda confluence = Ganga)",
      "Haridwar (enters Northern Plains)",
      "Prayagraj (Triveni Sangam with Yamuna & mythical Saraswati)",
      "Varanasi & Patna (joined by Ghaghara, Gandak, Son)",
      "Farakka Barrage (bifurcates into Bhagirathi-Hooghly & Padma into Bangladesh)",
      "Sundarbans Delta → Bay of Bengal"
    ],
    leftBankTributaries: ["Ramganga", "Gomti", "Ghaghara (Karnali)", "Gandak", "Kosi", "Mahananda"],
    rightBankTributaries: ["Yamuna", "Tons", "Son", "Punpun", "Damodar (into Hooghly)"],
    statesCovered: [
      { state: "Uttar Pradesh", share: "34.2%" },
      { state: "Madhya Pradesh (via Yamuna/Son)", share: "20.9%" },
      { state: "Bihar", share: "16.7%" },
      { state: "West Bengal", share: "8.3%" },
      { state: "Uttarakhand", share: "6.1%" },
      { state: "Others (Rajasthan, Haryana, HP, Delhi, Chhattisgarh)", share: "13.8%" }
    ],
    majorDamsProjects: [
      "Tehri Dam (on Bhagirathi, highest dam in India: 260.5 m)",
      "Farakka Barrage (diverts water to Hooghly to flush Kolkata port silt)",
      "Bhimgauda Barrage (Haridwar, feeds Upper Ganga Canal)",
      "Narora Atomic Power Station weir"
    ],
    interstateDisputes: [
      "Ganga Water Sharing Treaty (1996) with Bangladesh for Farakka discharge",
      "Interstate sharing of Son river waters (MP, UP, Bihar)"
    ],
    specialFeatures: [
      "National River of India (declared 2008).",
      "National Waterway-1 (Prayagraj to Haldia, 1,620 km).",
      "Gangetic River Dolphin (Platanista gangetica) — National Aquatic Animal.",
      "Sundarbans: world's largest mangrove forest and delta."
    ],
    liveCurrentAffairs: "Namami Gange Mission Phase II (expanded to rural sanitation and tributary cleaning under National Mission for Clean Ganga)."
  },
  {
    id: "indus",
    name: "Indus (Sindhu)",
    hindi: "सिंधु",
    system: "Himalayan Antecedent",
    flowDirection: "Southwest-flowing",
    lengthKm: 3180,
    lengthInIndiaKm: 1114,
    basinAreaSqKm: 1165000,
    basinAreaInIndiaSqKm: 321289,
    source: {
      name: "Bokhar Chu Glacier (near Lake Mansarovar as Singi Khamban / Lion's Mouth)",
      range: "Kailash Range, Tibetan Plateau",
      elevation: "5,180 m",
      state: "Tibet (China)",
      lat: 31.37,
      lon: 81.28
    },
    mouth: {
      name: "Arabian Sea delta south of Karachi",
      state: "Pakistan (Sindh)",
      lat: 23.95,
      lon: 67.45
    },
    flowChain: [
      "Bokhar Chu (Tibet)",
      "Enters India in Ladakh at Demchok",
      "Flows between Ladakh and Zaskar ranges past Leh",
      "Cuts deep gorge near Nanga Parbat (~5,200 m deep)",
      "Joined by Kabul river in Pakistan",
      "Receives Panjnad (combined flow of Jhelum, Chenab, Ravi, Beas, Sutlej) at Mithankot",
      "Arabian Sea Delta"
    ],
    leftBankTributaries: ["Zaskar", "Suru", "Sohan", "Panjnad (Jhelum, Chenab, Ravi, Beas, Satluj)"],
    rightBankTributaries: ["Shyok (with Nubra)", "Gilgit", "Hunza", "Shigar", "Kabul", "Khurram", "Tochi", "Gomal"],
    statesCovered: [
      { state: "Jammu & Kashmir / Ladakh", share: "catchment headwaters" },
      { state: "Himachal Pradesh", share: "tributary basins (Chenab, Ravi, Beas, Satluj)" },
      { state: "Punjab", share: "plains of Sutlej and Beas" },
      { state: "Rajasthan & Haryana", share: "canal beneficiaries (Indira Gandhi Canal)" }
    ],
    majorDamsProjects: [
      "Bhakra Nangal Dam (on Satluj in HP/Punjab, Gobind Sagar)",
      "Pong Dam / Maharana Pratap Sagar (on Beas)",
      "Thein (Ranjit Sagar) Dam (on Ravi in Punjab/J&K)",
      "Salal, Baglihar, and Ratle Hydroelectric Projects (on Chenab in J&K)",
      "Kishanganga Hydroelectric Project (on Jhelum tributary in J&K)"
    ],
    interstateDisputes: [
      "Indus Waters Treaty (IWT, 1960 brokered by World Bank): Eastern rivers (Ravi, Beas, Satluj) allocated exclusively to India; Western rivers (Indus, Jhelum, Chenab) allocated to Pakistan with India retaining non-consumptive and run-of-the-river hydropower rights.",
      "Current Affairs 2025–2026: India placed the IWT in abeyance in April 2025 following cross-border security escalations, halting Permanent Indus Commission meetings; Court of Arbitration proceedings remain contested."
    ],
    specialFeatures: [
      "Gives India its name (from Sanskrit Sindhu to Greek Indos to India).",
      "Antecedent river that existed prior to Himalayan uplift, cutting steep V-shaped gorges."
    ],
    liveCurrentAffairs: "Strategic dam acceleration on western rivers (Ujh multipurpose project, Shahpur Kandi barrage) to utilize India's full treaty-entitled water share."
  },
  {
    id: "brahmaputra",
    name: "Brahmaputra",
    hindi: "ब्रह्मपुत्र",
    system: "Himalayan Antecedent",
    flowDirection: "East then Southwest",
    lengthKm: 2880,
    lengthInIndiaKm: 916,
    basinAreaSqKm: 580000,
    basinAreaInIndiaSqKm: 194413,
    source: {
      name: "Chemayungdung / Angsi Glacier near Lake Mansarovar (as Yarlung Tsangpo)",
      range: "Himalayan-Transhimalayan boundary, Tibet",
      elevation: "5,150 m",
      state: "Tibet (China)",
      lat: 30.42,
      lon: 82.0
    },
    mouth: {
      name: "Joins Padma in Bangladesh to form Meghna into Bay of Bengal",
      state: "Bangladesh",
      lat: 22.05,
      lon: 90.5
    },
    flowChain: [
      "Flows eastward across Tibet as Yarlung Tsangpo for ~1,700 km",
      "Great Bend around Namcha Barwa peak (7,782 m) through the Yarlung Tsangpo Grand Canyon (deepest canyon on Earth)",
      "Enters Arunachal Pradesh near Gelling as Siang / Dihang",
      "Joined by Dibang and Lohit near Sadiya (Assam) to become the Brahmaputra",
      "Braided channel across the Assam Valley past Kaziranga and Guwahati",
      "Turns south around Garo Hills near Dhubri, enters Bangladesh as Jamuna",
      "Meets Ganga (Padma) at Goalundo Ghat → Bay of Bengal"
    ],
    leftBankTributaries: ["Lohit", "Dibang", "Burhi Dihing", "Dhansiri", "Kopili"],
    rightBankTributaries: ["Subansiri (largest tributary, gold-bearing sand)", "Kameng (Jiabhoreli)", "Manas", "Sankosh", "Teesta"],
    statesCovered: [
      { state: "Assam", share: "41.6% of Indian basin" },
      { state: "Arunachal Pradesh", share: "41.9%" },
      { state: "Nagaland, Meghalaya, Sikkim, West Bengal", share: "16.5%" }
    ],
    majorDamsProjects: [
      "Subansiri Lower Hydroelectric Project (2,000 MW run-of-the-river, Assam-Arunachal border)",
      "Kameng Hydroelectric Project (600 MW)",
      "Bogibeel Bridge (longest rail-cum-road bridge in India, 4.94 km across Brahmaputra in Dibrugarh)",
      "Dhola-Sadiya (Bhupen Hazarika) Bridge (longest bridge over water in India, 9.15 km across Lohit)"
    ],
    interstateDisputes: [
      "Transboundary water geopolitical concerns over Chinese upstream mega-dams (Zangmu, Dagu, Jiexu, and the proposed 60 GW Medog dam at the Great Bend).",
      "Teesta water dispute between India (West Bengal) and Bangladesh."
    ],
    specialFeatures: [
      "Majuli Island in Assam: the world's largest inhabited freshwater river island.",
      "National Waterway-2 (Sadiya to Dhubri, 891 km).",
      "Annual sediment load of over 400 million tonnes causes catastrophic braided channel flooding."
    ],
    liveCurrentAffairs: "Subansiri Lower project commissioning milestones and flood-resilience riverbed dredging in Assam."
  },
  {
    id: "godavari",
    name: "Godavari (Dakshin Ganga)",
    hindi: "गोदावरी (दक्षिण गंगा)",
    system: "Peninsular",
    flowDirection: "East-flowing",
    lengthKm: 1465,
    basinAreaSqKm: 312812,
    source: {
      name: "Trimbakeshwar near Nashik",
      range: "Western Ghats (Sahyadri)",
      elevation: "1,067 m",
      state: "Maharashtra",
      lat: 19.93,
      lon: 73.53
    },
    mouth: {
      name: "Godavari Delta (Bay of Bengal at Rajahmundry/Antarvedi)",
      state: "Andhra Pradesh",
      lat: 16.95,
      lon: 82.25
    },
    flowChain: [
      "Trimbakeshwar (Maharashtra)",
      "Flows southeast across Marathwada into Telangana",
      "Joined by Manjira (from south) and Pranhita (combined Wardha, Penganga, Wainganga)",
      "Carves gorge through Papikonda hill range into Andhra Pradesh",
      "Rajahmundry (splits into Gautami Godavari and Vasishta Godavari distributaries)",
      "Delta into Bay of Bengal"
    ],
    leftBankTributaries: ["Dharani", "Penganga", "Wainganga", "Wardha", "Pranhita (largest tributary by discharge)", "Indravati", "Sabari"],
    rightBankTributaries: ["Pravara", "Mula", "Manjra (Manjira)", "Peddavagu", "Maner"],
    statesCovered: [
      { state: "Maharashtra", share: "48.6%" },
      { state: "Telangana & Andhra Pradesh", share: "23.4%" },
      { state: "Madhya Pradesh & Chhattisgarh", share: "20.9%" },
      { state: "Odisha & Karnataka", share: "7.1%" }
    ],
    majorDamsProjects: [
      "Polavaram National Irrigation Project (multi-purpose dam in AP, inter-basin transfer)",
      "Kaleshwaram Lift Irrigation Project (world's largest multi-stage lift irrigation system, Telangana)",
      "Sriram Sagar Project (Pochampad dam, Telangana)",
      "Jayakwadi Dam (Paithan, Maharashtra — Nath Sagar)"
    ],
    interstateDisputes: [
      "Godavari Water Disputes Tribunal (GWDT, 1980) award; ongoing friction over Polavaram backwater submergence in Odisha and Chhattisgarh.",
      "Babli barrage dispute between Maharashtra and Telangana/Andhra Pradesh."
    ],
    specialFeatures: [
      "Longest river of Peninsular India and second longest in India after Ganga.",
      "Often termed 'Vridha Ganga' (Old Ganga) or 'Dakshin Ganga'.",
      "Coringa Mangroves at the mouth are the second largest mangrove formation on the Indian east coast."
    ],
    liveCurrentAffairs: "Polavaram dam diaphragm wall repair and Godavari-Cauvery link under the National Perspective Plan."
  },
  {
    id: "krishna",
    name: "Krishna",
    hindi: "कृष्णा",
    system: "Peninsular",
    flowDirection: "East-flowing",
    lengthKm: 1400,
    basinAreaSqKm: 258948,
    source: {
      name: "Jor village near Mahabaleshwar",
      range: "Western Ghats (Sahyadri)",
      elevation: "1,337 m",
      state: "Maharashtra",
      lat: 17.92,
      lon: 73.65
    },
    mouth: {
      name: "Krishna Delta (Hamsaladeevi into Bay of Bengal)",
      state: "Andhra Pradesh",
      lat: 15.78,
      lon: 80.88
    },
    flowChain: [
      "Mahabaleshwar (Maharashtra)",
      "Flows through Sangli and enters Karnataka",
      "Joined by Ghataprabha and Malaprabha",
      "Receives Bhima from north and Tungabhadra from south at Kudavalli",
      "Enters Telangana/Andhra Pradesh border gorge",
      "Nagarjuna Sagar & Srisailam reservoirs",
      "Prakasam Barrage at Vijayawada → Delta into Bay of Bengal"
    ],
    leftBankTributaries: ["Bhima (longest tributary)", "Dindi", "Musi (flows through Hyderabad)", "Paleru", "Muneru"],
    rightBankTributaries: ["Koyna", "Venna", "Panchganga", "Dudhganga", "Ghataprabha", "Malaprabha", "Tungabhadra (largest tributary by volume)"],
    statesCovered: [
      { state: "Karnataka", share: "43.7%" },
      { state: "Maharashtra", share: "26.8%" },
      { state: "Telangana & Andhra Pradesh", share: "29.5%" }
    ],
    majorDamsProjects: [
      "Almatti Dam (Upper Krishna Project, Karnataka)",
      "Narayanpur Dam (Karnataka)",
      "Srisailam Dam (major hydroelectric project on AP/Telangana border)",
      "Nagarjuna Sagar Dam (one of the largest masonry dams in the world, AP/Telangana)",
      "Prakasam Barrage (Vijayawada, feeds delta canals)",
      "Koyna Dam (Maharashtra, site of the 1967 reservoir-induced earthquake M6.3)"
    ],
    interstateDisputes: [
      "Krishna Water Disputes Tribunal-II (KWDT-II, Brijesh Kumar Tribunal); contested water allocation between Karnataka (raising Almatti dam height) and lower riparian AP/Telangana.",
      "Division of 811 TMC Krishna water between Andhra Pradesh and Telangana following the 2014 AP Reorganisation Act."
    ],
    specialFeatures: [
      "Krishna-Godavari (KG) Offshore Basin is India's largest domestic deepwater natural gas producing reserve (KG-D6).",
      "Panchganga confluence at Narsobawadi is a prominent pilgrim center."
    ],
    liveCurrentAffairs: "Pattiseema Lift Irrigation scheme linking Godavari waters to Krishna delta; dispute over Rayalaseema lift irrigation project."
  },
  {
    id: "kaveri",
    name: "Kaveri (Cauvery)",
    hindi: "कावेरी (दक्षिण भारत की गंगा)",
    system: "Peninsular",
    flowDirection: "East-flowing",
    lengthKm: 805,
    basinAreaSqKm: 81155,
    source: {
      name: "Talakaveri in Brahmagiri Hills, Kodagu (Coorg)",
      range: "Western Ghats",
      elevation: "1,341 m",
      state: "Karnataka",
      lat: 12.38,
      lon: 75.48
    },
    mouth: {
      name: "Poompuhar / Kaveripattinam into Bay of Bengal",
      state: "Tamil Nadu",
      lat: 11.13,
      lon: 79.85
    },
    flowChain: [
      "Talakaveri (Kodagu)",
      "Flows through Mysuru plateau, feeds Krishna Raja Sagara (KRS) Dam",
      "Forms Shivanasamudra river island with twin waterfalls (Gaganachukki & Barachukki)",
      "Hogenakkal Falls on Karnataka-Tamil Nadu border",
      "Mettur Dam (Stanley Reservoir, Tamil Nadu)",
      "Bhavani confluence at Kooduthurai",
      "Tiruchirappalli (splits into Kollidam / Coleroon and Kaveri at Srirangam island)",
      "Thanjavur Delta (Granary of South India) → Bay of Bengal"
    ],
    leftBankTributaries: ["Harangi", "Hemavati", "Shimsha", "Arkavathi"],
    rightBankTributaries: ["Lakshmantirtha", "Kabbani (Kabini)", "Suvarnavathi", "Bhavani", "Noyyal", "Amaravati"],
    statesCovered: [
      { state: "Tamil Nadu", share: "56%" },
      { state: "Karnataka", share: "41%" },
      { state: "Kerala", share: "3% (Kabini, Bhavani, Pambar catchments)" },
      { state: "Puducherry (Karaikal)", share: "<1%" }
    ],
    majorDamsProjects: [
      "Krishna Raja Sagara (KRS) Dam (near Mysuru, engineered by Sir M. Visvesvaraya)",
      "Mettur Dam (Stanley Reservoir, Tamil Nadu)",
      "Kabini Dam and Gorur Dam (on Hemavati in Karnataka)",
      "Bhavanisagar Dam (Tamil Nadu)",
      "Grand Anicut (Kallanai) built by Chola King Karikalan in 2nd century CE — one of the oldest water diversion structures in the world."
    ],
    interstateDisputes: [
      "Cauvery Water Disputes Tribunal (CWDT, 2007) and Supreme Court Verdict (2018): Karnataka allocated 284.75 TMC, Tamil Nadu 404.25 TMC, Kerala 30 TMC, Puducherry 7 TMC.",
      "Cauvery Water Management Authority (CWMA) and Cauvery Water Regulation Committee (CWRC) monitor distress water release during deficit monsoon years.",
      "Mekedatu balancing reservoir project proposed by Karnataka near the border opposed by Tamil Nadu."
    ],
    specialFeatures: [
      "Unique regime: Upper catchment receives SW Monsoon (June–Sept), while lower delta receives NE Monsoon (Oct–Dec), ensuring relatively perennial flow unlike most peninsular rivers.",
      "Shivanasamudra (1902) was the site of Asia's first commercial hydroelectric plant, powering Kolar Gold Fields (KGF)."
    ],
    liveCurrentAffairs: "Mekedatu environmental clearance controversy and distress water sharing during consecutive drought years."
  },
  {
    id: "narmada",
    name: "Narmada (Rewa)",
    hindi: "नर्मदा",
    system: "Peninsular Rift-Valley",
    flowDirection: "West-flowing",
    lengthKm: 1312,
    basinAreaSqKm: 98796,
    source: {
      name: "Amarkantak Plateau, Anuppur district",
      range: "Maikal Hills",
      elevation: "1,057 m",
      state: "Madhya Pradesh",
      lat: 22.67,
      lon: 81.75
    },
    mouth: {
      name: "Funnel-shaped Estuary into Gulf of Khambhat (Arabian Sea near Bharuch)",
      state: "Gujarat",
      lat: 21.65,
      lon: 72.62
    },
    flowChain: [
      "Amarkantak spring (MP)",
      "Kapildhara and Dhuandhar Falls (Bhedaghat, marble rock gorge near Jabalpur)",
      "Rift valley between Vindhyan Range (north) and Satpura Range (south)",
      "Hoshangabad, Omkareshwar, and Maheshwar",
      "Enters Gujarat near Kevadia (Statue of Unity & Sardar Sarovar Dam)",
      "Broad estuary past Bharuch → Gulf of Khambhat"
    ],
    leftBankTributaries: ["Burner", "Banjar", "Sher", "Shakkar", "Dudhi", "Tawa (longest tributary)", "Ganjal", "Kundi", "Goi"],
    rightBankTributaries: ["Hiran", "Barna", "Choral", "Kolar", "Man", "Uri", "Hatni", "Orsang"],
    statesCovered: [
      { state: "Madhya Pradesh", share: "86.18%" },
      { state: "Gujarat", share: "11.60%" },
      { state: "Maharashtra", share: "1.50%" },
      { state: "Chhattisgarh", share: "0.72%" }
    ],
    majorDamsProjects: [
      "Sardar Sarovar Dam (1,450 MW, concrete gravity dam, Kevadia, Gujarat)",
      "Indira Sagar Project (Punasa, MP — largest reservoir storage capacity in India, ~12.2 billion m³)",
      "Omkareshwar Dam (MP, hosts India's premier floating solar power plant)",
      "Bargi Dam (near Jabalpur, MP)",
      "Maheshwar Dam (MP)"
    ],
    interstateDisputes: [
      "Narmada Water Disputes Tribunal (NWDT, 1979) allocating 28 MAF: MP 18.25 MAF, Gujarat 9 MAF, Rajasthan 0.5 MAF, Maharashtra 0.25 MAF.",
      "Narmada Bachao Andolan (NBA) led by Medha Patkar against submergence and displacement caused by raising dam height."
    ],
    specialFeatures: [
      "Longest west-flowing river in India.",
      "Flows through a structural rift valley (graben) caused by faulting, preventing delta formation.",
      "Statue of Unity (182 m, world's tallest statue) is sited downstream of Sardar Sarovar on Sadhu Bet island."
    ],
    liveCurrentAffairs: "Narmada Main Canal (458 km) carrying drinking and irrigation water across Saurashtra and Kutch into Rajasthan (Jalore/Barmer)."
  },
  {
    id: "mahanadi",
    name: "Mahanadi",
    hindi: "महानदी",
    system: "Peninsular",
    flowDirection: "East-flowing",
    lengthKm: 851,
    basinAreaSqKm: 141600,
    source: {
      name: "Sihawa mountain foothills, Dhamtari district",
      range: "Bastar Hills / Dandakaranya",
      elevation: "442 m",
      state: "Chhattisgarh",
      lat: 20.35,
      lon: 81.97
    },
    mouth: {
      name: "Joint Delta with Brahmani at False Point (Bay of Bengal)",
      state: "Odisha",
      lat: 20.30,
      lon: 86.70
    },
    flowChain: [
      "Sihawa (Chhattisgarh)",
      "Drains the fertile Chhattisgarh plain (Rice Bowl of India)",
      "Enters Odisha, impounded at Hirakud Dam (Sambalpur)",
      "Cuts through Eastern Ghats via the 22 km Satkosia Gorge",
      "Cuttack (bifurcates into Birupa, Kathajodi, Kuakhai distributaries)",
      "Delta near Paradip port → Bay of Bengal"
    ],
    leftBankTributaries: ["Seonath (longest tributary)", "Hasdeo", "Mand", "Ib"],
    rightBankTributaries: ["Ong", "Tel (second largest tributary)", "Jonk"],
    statesCovered: [
      { state: "Chhattisgarh", share: "52.8%" },
      { state: "Odisha", share: "46.6%" },
      { state: "Madhya Pradesh, Jharkhand, Maharashtra", share: "<1%" }
    ],
    majorDamsProjects: [
      "Hirakud Dam (one of India's earliest post-independence multipurpose projects, longest earthen dam in the world: 25.8 km total length)",
      "Gangrel (Ravishankar Sagar) Dam in Chhattisgarh",
      "Hasdeo Bango Dam in Korba (Chhattisgarh)"
    ],
    interstateDisputes: [
      "Mahanadi Water Disputes Tribunal (MWDT) constituted in 2018 regarding upstream barrages built by Chhattisgarh affecting non-monsoon flows into Odisha."
    ],
    specialFeatures: [
      "Drains some of India's richest mineral tracts (coal in Hasdeo Arand and Ib Valley; iron ore in Bailadila).",
      "Paradip Port, one of India's premier iron-ore and coking-coal export-import hubs, sits at its coastal margin."
    ],
    liveCurrentAffairs: "Hasdeo Arand coal mining environmental clearance hearings and MWDT site inspection proceedings."
  },
  {
    id: "tapi",
    name: "Tapi (Tapti)",
    hindi: "तापी (ताप्ती)",
    system: "Peninsular Rift-Valley",
    flowDirection: "West-flowing",
    lengthKm: 724,
    basinAreaSqKm: 65145,
    source: {
      name: "Multai (Mul Tapi) in Betul district",
      range: "Satpura Range",
      elevation: "752 m",
      state: "Madhya Pradesh",
      lat: 21.78,
      lon: 78.25
    },
    mouth: {
      name: "Estuary at Dumas near Surat into Gulf of Khambhat (Arabian Sea)",
      state: "Gujarat",
      lat: 21.05,
      lon: 72.68
    },
    flowChain: [
      "Multai plateau (MP)",
      "Flows west in a tectonic rift valley south of the Satpura Range and north of the Ajanta Hills",
      "Drains Khandesh plain of Maharashtra (Jalgaon, Dhule)",
      "Enters Gujarat plain, impounded at Ukai Dam",
      "Surat city → Gulf of Khambhat"
    ],
    leftBankTributaries: ["Purna (chief tributary, drains Vidarbha)", "Girna", "Panjhra", "Bori", "Vaghur", "Aner"],
    rightBankTributaries: ["Betul", "Patki", "Suki", "Gomai", "Arunavati"],
    statesCovered: [
      { state: "Maharashtra", share: "79%" },
      { state: "Madhya Pradesh", share: "15%" },
      { state: "Gujarat", share: "6%" }
    ],
    majorDamsProjects: [
      "Ukai Dam (Vallabh Sagar, second largest reservoir in Gujarat after Sardar Sarovar)",
      "Kakrapar Weir (Gujarat, provides cooling water to Kakrapar Atomic Power Station)",
      "Hathnur Dam (Maharashtra)"
    ],
    interstateDisputes: [
      "Joint basin management between Maharashtra and Gujarat for flood discharge coordination."
    ],
    specialFeatures: [
      "Twin and southern parallel counterpart of the Narmada River.",
      "Historically, the port of Surat at its estuary was India's foremost international maritime trade gateway during the 16th and 17th centuries."
    ],
    liveCurrentAffairs: "Surat flood prevention embankment modernization and Tapi riverfront development project."
  },
  {
    id: "yamuna",
    name: "Yamuna (Kalindi)",
    hindi: "यमुना",
    system: "Himalayan (Ganga's largest tributary)",
    flowDirection: "Southeast-flowing",
    lengthKm: 1376,
    basinAreaSqKm: 366223,
    source: {
      name: "Yamunotri Glacier near Bandarpunch Peak, Uttarkashi district",
      range: "Mussoorie Range, Lower Himalaya",
      elevation: "6,387 m",
      state: "Uttarakhand",
      lat: 31.02,
      lon: 78.45
    },
    mouth: {
      name: "Triveni Sangam with Ganga at Prayagraj",
      state: "Uttar Pradesh",
      lat: 25.43,
      lon: 81.88
    },
    flowChain: [
      "Yamunotri (Uttarakhand)",
      "Joined by Tons river (its largest headwater tributary) at Dakpathar",
      "Hathnikund Barrage (Haryana-UP border, splits into Western & Eastern Yamuna Canals)",
      "Flows through Delhi (Wazirabad to Okhla Barrage)",
      "Mathura, Vrindavan, and Agra (Taj Mahal on right bank)",
      "Receives Chambal, Sind, Betwa, and Ken from the Peninsular plateau",
      "Prayagraj confluence"
    ],
    leftBankTributaries: ["Tons (carries more water than Yamuna at confluence)", "Giri", "Asan", "Rishi Ganga", "Hindon"],
    rightBankTributaries: ["Chambal", "Sind", "Betwa", "Ken"],
    statesCovered: [
      { state: "Rajasthan & MP (via tributaries)", share: "57.9%" },
      { state: "Uttar Pradesh", share: "20.4%" },
      { state: "Haryana & Delhi", share: "12.0%" },
      { state: "Uttarakhand & Himachal Pradesh", share: "9.7%" }
    ],
    majorDamsProjects: [
      "Hathnikund Barrage (Haryana)",
      "Lakhwar-Vyasi Hydroelectric Dam (under construction on Yamuna in Dehradun)",
      "Gandhi Sagar, Rana Pratap Sagar, Kota Barrage (on Chambal)",
      "Rajghat and Matatila Dams (on Betwa in UP/MP)",
      "Ken-Betwa River Interlinking Project (KBRP — Daudhan Dam on Ken river)"
    ],
    interstateDisputes: [
      "Upper Yamuna River Board (UYRB, 1994 agreement) between Haryana, UP, Rajasthan, HP, and Delhi.",
      "Delhi vs Haryana seasonal dispute over water release from Hathnikund and ammonia pollution in Delhi supply."
    ],
    specialFeatures: [
      "Longest tributary river in India.",
      "Yamuna-Ganga Doab is one of the world's most densely populated and agriculturally productive alluvial tracts.",
      "Critical lifeline for Delhi-NCR drinking water supply."
    ],
    liveCurrentAffairs: "Ken-Betwa River Link Project implementation (transferring 1,074 MCM water to Bundelkhand) and National Green Tribunal (NGT) orders on Delhi Yamuna rejuvenation."
  }
];

fs.writeFileSync(path.join(outDir, 'rivers.json'), JSON.stringify(rivers, null, 2), 'utf8');
console.log('Created rivers.json');
// 4. PASSES & PEAKS DATASET (36 Key Geographic Nodes)
const passesPeaks = [
  // Passes
  {
    id: "zojila",
    type: "pass",
    name: "Zoji La",
    hindi: "ज़ोजी ला",
    range: "Great Himalayas",
    state: "Ladakh / Jammu & Kashmir",
    elevationM: 3528,
    connects: "Srinagar Valley (Kashmir) with Kargil and Leh (Ladakh)",
    route: "National Highway 1 (NH-1)",
    importance: "Vital strategic lifeline connecting Ladakh to the Kashmir valley; under winter closure due to heavy snowfall. The 14.15 km Zoji La Tunnel (Asia's longest bi-directional tunnel) is under construction to ensure all-weather year-round connectivity.",
    lat: 34.28,
    lon: 75.80
  },
  {
    id: "banihal",
    type: "pass",
    name: "Banihal Pass",
    hindi: "बनिहाल दर्रा",
    range: "Pir Panjal Range",
    state: "Jammu & Kashmir",
    elevationM: 2832,
    connects: "Jammu with Srinagar across the Pir Panjal",
    route: "NH-44 (via Jawahar Tunnel & new Banihal-Qazigund four-lane tunnel)",
    importance: "Primary gateway into the Kashmir Valley. Jawahar Tunnel (2.5 km, opened 1956) was supplemented in 2021 by the 8.45 km twin-tube Qazigund-Banihal road tunnel, and the USBRL railway line with the 11.2 km T-49 railway tunnel.",
    lat: 33.52,
    lon: 75.19
  },
  {
    id: "baralacha",
    type: "pass",
    name: "Bara-lacha La",
    hindi: "बारा-लाचा ला",
    range: "Zaskar Range",
    state: "Himachal Pradesh / Ladakh border",
    elevationM: 5045,
    connects: "Lahaul district in Himachal Pradesh with Leh in Ladakh",
    route: "Manali–Leh Highway",
    importance: "High-altitude pass where the Bhaga and Chandra rivers originate (merging into the Chandrabhaga / Chenab river); snow-bound from November to May.",
    lat: 32.73,
    lon: 77.42
  },
  {
    id: "rohtang",
    type: "pass",
    name: "Rohtang Pass & Atal Tunnel",
    hindi: "रोहतांग दर्रा एवं अटल टनल",
    range: "Pir Panjal Range",
    state: "Himachal Pradesh",
    elevationM: 3979,
    connects: "Kullu Valley with the Lahaul and Spiti Valleys",
    route: "Manali–Leh Highway",
    importance: "Divides the moist watershed of the Beas (Kullu) from the dry cold-desert watershed of Chenab (Lahaul). The 9.02 km Atal Tunnel beneath Rohtang (built at >3,000 m altitude) provides all-weather connectivity.",
    lat: 32.37,
    lon: 77.25
  },
  {
    id: "shipkila",
    type: "pass",
    name: "Shipki La",
    hindi: "शिपकी ला",
    range: "Zaskar Range",
    state: "Himachal Pradesh (Kinnaur)",
    elevationM: 3930,
    connects: "Kinnaur (Himachal Pradesh) with Tibet (China)",
    route: "NH-5 (Hindustan-Tibet Road along Satluj gorge)",
    importance: "River Satluj enters India from Tibet through a deep gorge near Shipki La. An official border trade post between India and China.",
    lat: 31.81,
    lon: 78.74
  },
  {
    id: "nathula",
    type: "pass",
    name: "Nathu La",
    hindi: "नाथू ला",
    range: "Dongkya Range, Eastern Himalayas",
    state: "Sikkim",
    elevationM: 4310,
    connects: "Sikkim (Gangtok) with the Chumbi Valley (Tibet, China)",
    route: "Old Silk Route branch",
    importance: "Historic trading route; scene of 1967 Indo-Chinese clashes; reopened for bilateral border trade in 2006. Also an alternative pilgrimage route to Lake Mansarovar.",
    lat: 27.39,
    lon: 88.83
  },
  {
    id: "jelepla",
    type: "pass",
    name: "Jelep La",
    hindi: "जेलेप ला",
    range: "Eastern Himalayas",
    state: "Sikkim / West Bengal border",
    elevationM: 4270,
    connects: "Kalimpong / Gangtok with Lhasa via Chumbi Valley",
    route: "Historic trade route via Teesta valley",
    importance: "Scenic pass formed by the Teesta river gorge; bypasses Nathu La into the Chumbi Valley tri-junction.",
    lat: 27.36,
    lon: 88.88
  },
  {
    id: "lipulekh",
    type: "pass",
    name: "Lipu Lekh",
    hindi: "लिपुलेख दर्रा",
    range: "Kumaun Himalaya",
    state: "Uttarakhand (Pithoragarh)",
    elevationM: 5200,
    connects: "Kumaun (Uttarakhand) with Tibet near tri-junction with Nepal",
    route: "Kailash-Mansarovar Yatra pilgrimage route",
    importance: "Highest point of the traditional Kailash Mansarovar pilgrimage route. Near the Kalapani-Limpiyadhura dispute region with Nepal.",
    lat: 30.23,
    lon: 81.04
  },
  {
    id: "nitipass",
    type: "pass",
    name: "Niti Pass",
    hindi: "नीति दर्रा",
    range: "Zaskar Range",
    state: "Uttarakhand (Chamoli)",
    elevationM: 5068,
    connects: "Uttarakhand with Tibet",
    route: "Ancient Indo-Tibet trade route",
    importance: "Sits at the northern edge of the Nanda Devi Biosphere Reserve; closed for civilian trade since the 1962 Sino-Indian war.",
    lat: 30.96,
    lon: 79.87
  },
  {
    id: "manapass",
    type: "pass",
    name: "Mana Pass (Dungri La)",
    hindi: "माना दर्रा (डूंगरी ला)",
    range: "Zaskar Range",
    state: "Uttarakhand (Chamoli)",
    elevationM: 5545,
    connects: "Uttarakhand with Tibet, north of Badrinath",
    route: "Border road beyond Mana village",
    importance: "One of the highest motorable road passes in the world (built by BRO for border defense supplies to Siachen/Tibet border); near the origin of Saraswati river (Alaknanda tributary).",
    lat: 31.06,
    lon: 79.42
  },
  {
    id: "khardungla",
    type: "pass",
    name: "Khardung La",
    hindi: "खारदुंग ला",
    range: "Ladakh Range",
    state: "Ladakh (Leh)",
    elevationM: 5359,
    connects: "Leh with the Shyok and Nubra valleys",
    route: "Gateway to Siachen Glacier",
    importance: "World-famous high-altitude motorable pass maintained by Project Himank (BRO); critical supply corridor to forward military posts at Siachen.",
    lat: 34.28,
    lon: 77.60
  },
  {
    id: "selapass",
    type: "pass",
    name: "Sela Pass & Sela Tunnel",
    hindi: "सेला दर्रा एवं सेला टनल",
    range: "Eastern Himalayas",
    state: "Arunachal Pradesh",
    elevationM: 4170,
    connects: "Tawang district with West Kameng and Guwahati",
    route: "Balipara-Charduar-Tawang (BCT) Road",
    importance: "Strategic gateway to Tawang on the Mc-Mahon line. The Sela Tunnel (opened March 2024, world's longest twin-lane tunnel above 13,000 ft) bypasses treacherous winter snowdrifts.",
    lat: 27.50,
    lon: 92.10
  },
  {
    id: "diphupass",
    type: "pass",
    name: "Diphu Pass",
    hindi: "दीफू दर्रा",
    range: "Mishmi Hills, Eastern Himalayas",
    state: "Arunachal Pradesh",
    elevationM: 4587,
    connects: "Arunachal Pradesh with Upper Myanmar and Yunnan (China)",
    route: "India-China-Myanmar tri-junction area",
    importance: "Strategic tri-junction pass that stays open year-round for border patrols and historic cross-border trade.",
    lat: 28.16,
    lon: 97.35
  },
  {
    id: "thalghat",
    type: "pass",
    name: "Thal Ghat (Kasara Ghat)",
    hindi: "थल घाट",
    range: "Western Ghats (Sahyadri)",
    state: "Maharashtra",
    elevationM: 585,
    connects: "Mumbai with Nashik, Dhule, and North India",
    route: "NH-3 (Mumbai-Agra) & Central Railway main line",
    importance: "A major gap in the northern Sahyadri allowing road and heavy rail freight to cross from coastal Konkan to the Deccan Plateau.",
    lat: 19.70,
    lon: 73.49
  },
  {
    id: "bhorghat",
    type: "pass",
    name: "Bhor Ghat (Khandala Ghat)",
    hindi: "भोर घाट",
    range: "Western Ghats (Sahyadri)",
    state: "Maharashtra",
    elevationM: 390,
    connects: "Mumbai / Navi Mumbai with Pune and the Southern Deccan",
    route: "Mumbai-Pune Expressway (NH-48) & Central Railway",
    importance: "Historically connected ports like Kalyan and Chaul to inland Buddhist monasteries (Karla, Bhaja) and plateau trade routes; today the busiest economic pass in Western India.",
    lat: 18.77,
    lon: 73.34
  },
  {
    id: "palghat",
    type: "pass",
    name: "Palghat Gap (Palakkad Gap)",
    hindi: "पालघाट दर्रा",
    range: "Western Ghats Discontinuity",
    state: "Kerala / Tamil Nadu",
    elevationM: 140,
    connects: "Palakkad (Kerala) with Coimbatore (Tamil Nadu)",
    route: "NH-544 & Southern Railway trunk line",
    importance: "A massive 32 km wide structural gap in the Western Ghats between the Nilgiri Hills (north) and the Anamalai Hills (south). Primary conduit channeling the Southwest Monsoon into interior Tamil Nadu and major transport artery.",
    lat: 10.78,
    lon: 76.65
  },
  {
    id: "shencottah",
    type: "pass",
    name: "Shencottah Gap",
    hindi: "शेनकोट्टा दर्रा",
    range: "Cardamom / Agasthyamalai Hills",
    state: "Kerala / Tamil Nadu",
    elevationM: 160,
    connects: "Kollam (Kerala) with Madurai and Tenkasi (Tamil Nadu)",
    route: "NH-744 & Kollam-Sengottai railway",
    importance: "Southernmost major pass in the Western Ghats; historic spice trade route between the Malabar coast and Pandyan kingdom.",
    lat: 8.98,
    lon: 77.25
  },

  // Mountain Peaks
  {
    id: "k2",
    type: "peak",
    name: "K2 (Mount Godwin-Austen / Qogir)",
    hindi: "के2 (गॉडविन ऑस्टिन)",
    range: "Karakoram Range",
    state: "Ladakh (Gilgit-Baltistan / PoK)",
    elevationM: 8611,
    rank: "2nd highest mountain on Earth; highest in Indian territory (PoK)",
    importance: "Known as the 'Savage Mountain' due to extreme difficulty of ascent; located near the Baltoro Glacier.",
    lat: 35.88,
    lon: 76.51
  },
  {
    id: "kanchenjunga",
    type: "peak",
    name: "Kanchenjunga",
    hindi: "कंचनजंगा",
    range: "Great Himalayas",
    state: "Sikkim / Nepal border",
    elevationM: 8598,
    rank: "3rd highest peak in the world; highest point officially administered by India",
    importance: "Khangchendzonga National Park around it is India's only UNESCO Mixed World Heritage Site (recognized for both natural biodiversity and cultural significance).",
    lat: 27.70,
    lon: 88.15
  },
  {
    id: "nandadevi",
    type: "peak",
    name: "Nanda Devi",
    hindi: "नंदा देवी",
    range: "Garhwal Himalaya",
    state: "Uttarakhand (Chamoli)",
    elevationM: 7817,
    rank: "2nd highest peak in India; highest peak situated entirely within Indian territory",
    importance: "Surrounded by a ring of high peaks forming the Nanda Devi Sanctuary; a UNESCO World Heritage Biosphere Reserve.",
    lat: 30.38,
    lon: 79.97
  },
  {
    id: "kamet",
    type: "peak",
    name: "Kamet",
    hindi: "कामेत",
    range: "Zaskar Range",
    state: "Uttarakhand (Chamoli near Tibet border)",
    elevationM: 7756,
    rank: "2nd highest peak in the Garhwal Himalayas after Nanda Devi",
    importance: "Glaciers around it feed the Dhauliganga and Saraswati rivers.",
    lat: 30.92,
    lon: 79.57
  },
  {
    id: "namchabarwa",
    type: "peak",
    name: "Namcha Barwa",
    hindi: "नामचा बरवा",
    range: "Eastern Syntaxis of Himalayas",
    state: "Tibet / Arunachal Pradesh frontier",
    elevationM: 7782,
    rank: "Eastern anchor of the Himalayas",
    importance: "Marks the eastern structural bend (syntaxis) of the Himalayas around which the Yarlung Tsangpo/Brahmaputra cuts its dramatic canyon.",
    lat: 29.63,
    lon: 95.06
  },
  {
    id: "anamudi",
    type: "peak",
    name: "Anamudi",
    hindi: "अनामुडी",
    range: "Anamalai Hills, Western Ghats",
    state: "Kerala (Idukki district)",
    elevationM: 2695,
    rank: "Highest peak in South India and the Western Ghats ('Everest of South India')",
    importance: "Located inside Eravikulam National Park, home to the largest surviving wild population of the endangered Nilgiri Tahr.",
    lat: 10.17,
    lon: 77.06
  },
  {
    id: "doddabetta",
    type: "peak",
    name: "Doddabetta",
    hindi: "डोड्डाबेट्टा",
    range: "Nilgiri Hills",
    state: "Tamil Nadu (near Ooty)",
    elevationM: 2637,
    rank: "2nd highest peak in South India; highest peak in the Nilgiri Hills",
    importance: "Sits at the junction where the Western Ghats and Eastern Ghats meet; surrounded by reserved Shola-grassland mosaics.",
    lat: 11.40,
    lon: 76.73
  },
  {
    id: "gurushikhar",
    type: "peak",
    name: "Guru Shikhar",
    hindi: "गुरु शिखर",
    range: "Aravalli Range",
    state: "Rajasthan (Mount Abu)",
    elevationM: 1722,
    rank: "Highest peak of the Aravalli Range — India's oldest fold mountain system",
    importance: "Hosts the Mount Abu Observatory; sacred temple of Dattatreya at the summit.",
    lat: 24.65,
    lon: 72.78
  },
  {
    id: "jindhagada",
    type: "peak",
    name: "Jindhagada / Arma Konda",
    hindi: "जिंधागड़ा (अरमा कोंडा)",
    range: "Eastern Ghats",
    state: "Andhra Pradesh (Visakhapatnam)",
    elevationM: 1690,
    rank: "Highest peak of the entire Eastern Ghats",
    importance: "Surpasses Mahendragiri (1,501 m in Odisha); located in the coffee-growing and bauxite-rich Araku valley highlands.",
    lat: 18.23,
    lon: 82.72
  },
  {
    id: "dhupgarh",
    type: "peak",
    name: "Mount Dhupgarh",
    hindi: "धूपगढ़",
    range: "Mahadeo Hills, Satpura Range",
    state: "Madhya Pradesh (Pachmarhi)",
    elevationM: 1350,
    rank: "Highest peak of the Satpura Range and highest point in Madhya Pradesh",
    importance: "Located inside the Pachmarhi Biosphere Reserve; famous for sunset vistas over deep sandstone ravines.",
    lat: 22.45,
    lon: 78.37
  },
  {
    id: "saddlepeak",
    type: "peak",
    name: "Saddle Peak",
    hindi: "सैडल पीक",
    range: "North Andaman Ridge",
    state: "Andaman & Nicobar Islands",
    elevationM: 732,
    rank: "Highest point in the entire Andaman & Nicobar archipelago",
    importance: "Enclosed by Saddle Peak National Park; source of the Kalpong River (only hydroelectric dam in the islands).",
    lat: 13.16,
    lon: 93.01
  },
  {
    id: "kudremukh",
    type: "peak",
    name: "Kudremukh Peak",
    hindi: "कुद्रेमुख",
    range: "Western Ghats",
    state: "Karnataka (Chikkamagaluru)",
    elevationM: 1892,
    rank: "3rd highest peak in Karnataka (after Mullayanagiri 1,930 m)",
    importance: "Shaped like a horse's face ('Kudre-mukha' in Kannada); site of a historic iron ore mining project (now closed for Kudremukh National Park conservation).",
    lat: 13.21,
    lon: 75.25
  },
  {
    id: "parasnah",
    type: "peak",
    name: "Parasnath (Shikharji)",
    hindi: "पारसनाथ (शिखरजी)",
    range: "Chota Nagpur Plateau",
    state: "Jharkhand (Giridih)",
    elevationM: 1365,
    rank: "Highest peak in Jharkhand and the Chota Nagpur Plateau",
    importance: "Holiest pilgrimage site for Jainism (where 20 of the 24 Tirthankaras attained Moksha/nirvana).",
    lat: 23.96,
    lon: 86.13
  }
];

fs.writeFileSync(path.join(outDir, 'passes-peaks.json'), JSON.stringify(passesPeaks, null, 2), 'utf8');
console.log('Created passes-peaks.json');
// 5. CLIMATE & MONSOON DATASET
const climateMonsoon = {
  overview: {
    type: "Tropical Monsoon Climate (Köppen Amw / Cwg / Aw)",
    drivers: [
      "Differential heating of land (Indian subcontinent) and sea (Indian Ocean)",
      "Thermal low over the Tibetan Plateau acting as an elevated heat engine (Tibetan Anticyclone)",
      "Northward seasonal shift of the Inter-Tropical Convergence Zone (ITCZ) over the Indo-Gangetic plain (Monsoon Trough)",
      "High-pressure cell over the South Indian Ocean near Madagascar (Mascarene High)",
      "Low-level cross-equatorial Somali Jet (Findlater Jet) transporting immense moisture from East Africa into the Arabian Sea",
      "Subtropical Westerly Jet Stream withdrawal from north of Himalayas & appearance of Tropical Easterly Jet (TEJ) over peninsular India (~14°N)",
      "ENSO (El Niño Southern Oscillation) & Indian Ocean Dipole (IOD) teleconnections"
    ]
  },
  stages: [
    {
      stage: 1,
      name: "Intense Summer Continental Heating",
      hindi: "ग्रीष्मकालीन तापीय तापन",
      period: "April – May",
      physics: "The apparent northward movement of the sun towards the Tropic of Cancer (23.5°N) causes solar insolation to peak over northern and northwestern India, pushing daytime temperatures >45°C in the Thar Desert and central plains. The Tibetan Plateau heats up rapidly due to its high altitude and thin atmosphere.",
      phenomena: "Creation of intense thermal low pressure (<996 hPa) centered over Multan and the Thar desert. Generates localized pre-monsoon convective storms: Loo (hot dry winds in Northern Plains), Kalbaishakhi / Nor'westers (severe thunderstorms in Bengal/Assam aiding tea & jute), Mango Showers in Kerala, and Cherry Blossom Showers in Karnataka coffee estates."
    },
    {
      stage: 2,
      name: "ITCZ Migration & Pressure Gradient Reversal",
      hindi: "आईटीसीजेड (ITCZ) का उत्तर की ओर विस्थापन",
      period: "Late May",
      physics: "The equatorial trough of low pressure (ITCZ) migrates from the equator to 20°–25°N over the Gangetic plain, becoming the 'Monsoon Trough'. Simultaneously, a persistent high-pressure cell develops over the southern Indian Ocean near Madagascar (Mascarene High, ~30°S).",
      phenomena: "Creates an immense trans-hemispheric barometric pressure gradient between the Mascarene High and the Northwest Indian Thermal Low."
    },
    {
      stage: 3,
      name: "Cross-Equatorial Flow & Somali Jet Trigger",
      hindi: "विषुवतीय पवन एवं सोमाली जेट प्रवाह",
      period: "Late May – Early June",
      physics: "Southeast Trade Winds in the Southern Hemisphere blow towards the equator, cross it off the coast of East Africa, and are deflected to the right by Coriolis force, becoming southwesterly winds. This flow is concentrated into a high-speed low-level atmospheric jet: the Somali Low-Level Jet (Findlater Jet).",
      phenomena: "The Somali Jet sweeps northeastward across the Arabian Sea, sucking massive moisture from the warm sea surface and hurtling it directly towards the west coast of India."
    },
    {
      stage: 4,
      name: "Onset / 'Monsoon Burst' over Kerala",
      hindi: "केरल तट पर मानसून का प्रस्फोट (Burst)",
      period: "June 1 (Standard Onset Date)",
      physics: "The Subtropical Westerly Jet Stream suddenly shifts north of the Tibetan Plateau. Concurrently, the Tropical Easterly Jet (TEJ) establishes itself in the upper troposphere (150–100 hPa) at ~14°N over Peninsular India, creating upper-air divergence that triggers rapid ascending air motion.",
      phenomena: "Sudden onset of persistent, heavy convective rainfall accompanied by thunder and lightning along the Malabar Coast of Kerala, termed the 'Burst of the Monsoon'."
    },
    {
      stage: 5,
      name: "Bifurcation into Arabian Sea & Bay of Bengal Branches",
      hindi: "अरब सागर एवं बंगाल की खाड़ी शाखाओं में विभाजन",
      period: "June 1 – June 15",
      physics: "The tapering Peninsular landmass splits the incoming moist Southwest Monsoon current into two distinct branches: the Arabian Sea Branch and the Bay of Bengal Branch.",
      phenomena: "Arabian Sea Branch strikes the steep western face of the Western Ghats (orographic rainfall >250–400 cm), creating a stark rain-shadow (<60 cm) across the Deccan plateau (Marathwada, North Karnataka). The Bay of Bengal branch sweeps towards the Myanmar and Northeast hills, deflected westward along the Himalayan foothills towards Delhi."
    },
    {
      stage: 6,
      name: "Full Country Coverage & Orographic Funneling",
      hindi: "अखिल भारतीय विस्तार एवं चेरापूंजी संकेंद्रण",
      period: "June 15 – July 15",
      physics: "By mid-July, both branches merge over Punjab and Haryana. The Bay of Bengal branch encounters the funnel-shaped Garo-Khasi-Jaintia hill alignment in Meghalaya, forcing rapid orographic ascent.",
      phenomena: "Mawsynram and Cherrapunji receive world-record annual rainfall (>11,000 mm). The northern plains experience progressive westward decline in rainfall (Kolkata ~150 cm -> Patna ~100 cm -> Prayagraj ~90 cm -> Delhi ~60 cm -> Jaisalmer <15 cm)."
    },
    {
      stage: 7,
      name: "Monsoon Breaks & Trough Oscillations",
      hindi: "मानसून विच्छेद (Break in Monsoon)",
      period: "July – August",
      physics: "During the monsoon season, there are periods of dry spells called 'Breaks' lasting 1 to 2 weeks. This occurs when the Monsoon Trough shifts northwards close to the Himalayan foothills, or when tropical depressions fail to form in the Bay of Bengal.",
      phenomena: "Rainfall ceases abruptly over the central and northern plains, while heavy downpours pound the Himalayan catchments, causing devastating flash floods in Bihar, Bengal, and Assam while the plains suffer dry spells."
    },
    {
      stage: 8,
      name: "Retreating (Northeast) Monsoon & October Heat",
      hindi: "मानसून का निवर्तन एवं उत्तर-पूर्वी मानसून",
      period: "September – December",
      physics: "As the sun retreats southwards towards the Tropic of Capricorn, the land cools rapidly and high pressure establishes over northern India. The monsoon withdraws from Rajasthan by September 1, Delhi by mid-September, and South India by December.",
      phenomena: "Clear skies and high temperatures with moist soil produce oppressive weather called 'October Heat'. As retreating winds cross the Bay of Bengal, they pick up moisture and strike the Coromandel Coast (Tamil Nadu and coastal AP), providing their primary annual rainfall between October and December."
    }
  ],
  teleconnections: [
    {
      name: "El Niño Southern Oscillation (ENSO)",
      impact: "Warm phase (El Niño) in the central/eastern equatorial Pacific weakens the Walker Circulation and Mascarene High, historically correlating with drought or deficit monsoon in ~60% of cases. Cold phase (La Niña) typically enhances monsoon rains."
    },
    {
      name: "Indian Ocean Dipole (IOD)",
      impact: "Positive IOD (warmer Western Indian Ocean near Arabian Sea, cooler eastern Indian Ocean near Sumatra) strengthens the monsoon and can offset an El Niño impact. Negative IOD dampens monsoon moisture flow."
    },
    {
      name: "Madden-Julian Oscillation (MJO)",
      impact: "An eastward-moving pulse of cloud and rainfall traversing the global tropics every 30–60 days. When active over the Indian Ocean, it triggers heavy active spells in the monsoon."
    },
    {
      name: "Western Disturbances",
      impact: "Extra-tropical temperate shallow depressions originating over the Mediterranean and Caspian seas, steered into northwest India by the Subtropical Westerly Jet stream from December to March. Provide crucial 5–10 cm winter rainfall for Rabi wheat in Punjab, Haryana, and Western UP, and snowfall in Western Himalayas."
    }
  ],
  koppenClassification: [
    { code: "Amw", name: "Tropical Monsoon (short dry winter)", region: "Western coastal plain (Malabar, Konkan), parts of Tripura" },
    { code: "Aw", name: "Tropical Savanna", region: "Most of the Peninsular Plateau, south of Tropic of Cancer" },
    { code: "As", name: "Tropical with dry summer", region: "Coromandel Coast of Tamil Nadu (winter rainfall)" },
    { code: "BShw", name: "Semi-Arid Steppe", region: "Rain-shadow belt east of Western Ghats, parts of Rajasthan/Gujarat/Haryana" },
    { code: "BWhw", name: "Hot Desert", region: "Extreme western Rajasthan (Thar/Marusthali)" },
    { code: "Cwg", name: "Monsoon with dry winter (Gangetic type)", region: "Northern Plains, Ganga basin, Assam valley" },
    { code: "Dfc", name: "Cold humid winter with short summer", region: "Arunachal Pradesh, Sikkim" },
    { code: "E", name: "Polar / Tundra", region: "Higher reaches of Jammu & Kashmir, Ladakh, Himachal, Uttarakhand" }
  ]
};

fs.writeFileSync(path.join(outDir, 'climate-monsoon.json'), JSON.stringify(climateMonsoon, null, 2), 'utf8');
console.log('Created climate-monsoon.json');

// 6. SOILS OF INDIA (8 ICAR Groups)
const soilsIndia = [
  {
    id: "alluvial",
    name: "Alluvial Soil",
    hindi: "जलोढ़ मृदा",
    sharePercent: 40.0,
    areaSqKm: "1,500,000",
    order: "Inceptisols & Entisols",
    genesis: "Depositional soil formed by the silt, clay, and sand brought down by Himalayan and Peninsular river systems. Transported (azonal) soil with immature horizons.",
    distribution: "Indo-Gangetic-Brahmaputra plains (Punjab, Haryana, UP, Bihar, West Bengal, Assam), coastal deltas (Mahanadi, Godavari, Krishna, Kaveri), and Narmada/Tapi valleys.",
    subtypes: [
      { name: "Khadar", desc: "Newer, light-colored, fine alluvium deposited in active annual floodplains. Highly fertile, non-calcareous." },
      { name: "Bhangar", desc: "Older, dark clayey alluvium on elevated river terraces above flood levels. Contains calcareous concretions (Kankar)." }
    ],
    chemistry: {
      richIn: ["Potash (K2O)", "Lime (CaO)", "Phosphoric acid (moderate)"],
      deficientIn: ["Nitrogen (N)", "Phosphorus (P)", "Organic Humus"]
    },
    physicalProperties: "Loamy to clayey-loam texture, highly porous, well-drained, neutral to mildly alkaline pH (6.5–8.4).",
    suitableCrops: ["Rice (Paddy)", "Wheat", "Sugarcane", "Jute", "Oilseeds", "Pulses", "Maize"],
    problems: "Over-irrigation in canal colonies causes waterlogging and secondary salinization (Reh/Kallar); riverbank erosion during monsoon floods."
  },
  {
    id: "black",
    name: "Black Soil (Regur / Black Cotton Soil)",
    hindi: "काली मृदा (रेगुर)",
    sharePercent: 15.0,
    areaSqKm: "546,000",
    order: "Vertisols",
    genesis: "Formed in-situ by the weathering of basaltic lava rocks of the Deccan Traps (Cretaceous vulcanism) under sub-humid to semi-arid conditions.",
    distribution: "Deccan lava plateau: Maharashtra, Madhya Pradesh (Malwa), Gujarat (Kathiawar), Karnataka (northern districts), Telangana, and Andhra Pradesh.",
    chemistry: {
      richIn: ["Iron (gives dark color)", "Lime", "Calcium", "Potassium", "Magnesium carbonates", "Aluminium"],
      deficientIn: ["Nitrogen", "Phosphorus", "Organic matter"]
    },
    physicalProperties: "High clay content (>50% montmorillonite clay), exceptionally high moisture retention capacity. Highly sticky when wet; contracts and develops wide, deep cracks when dry (self-ploughing property facilitating aeration).",
    suitableCrops: ["Cotton (premier crop)", "Sugarcane", "Soybean (MP)", "Jowar", "Wheat (under irrigation)", "Citrus fruits (Nagpur oranges)"],
    problems: "Extremely difficult to plough when wet; poor drainage in low-lying tracts; cracks increase moisture evaporation during prolonged dry spells."
  },
  {
    id: "redyellow",
    name: "Red & Yellow Soil",
    hindi: "लाल एवं पीली मृदा",
    sharePercent: 18.5,
    areaSqKm: "600,000",
    order: "Alfisols & Ultisols",
    genesis: "Formed by the weathering of ancient crystalline and metamorphic Archaean rocks (granites, gneisses, schists) under low-rainfall conditions. Red color is due to wide diffusion of ferric iron oxides; turns yellow when hydrated.",
    distribution: "Eastern and southern Peninsular plateau: Odisha, Chhattisgarh, Jharkhand (Chota Nagpur), Telangana, Andhra Pradesh, Tamil Nadu, Karnataka, and parts of Bundelkhand and Meghalaya.",
    chemistry: {
      richIn: ["Potash", "Iron"],
      deficientIn: ["Nitrogen", "Phosphorus", "Humus", "Lime"]
    },
    physicalProperties: "Porous, friable, sandy to loamy texture on uplands; heavier clayey texture in valley bottoms. Acidic to neutral pH.",
    suitableCrops: ["Millets (Ragi, Jowar, Bajra)", "Pulses", "Groundnut", "Tobacco", "Rice (in irrigated valleys)"],
    problems: "Low moisture retention; highly prone to sheet and gully erosion; requires heavy application of nitrogenous and phosphatic fertilizers."
  },
  {
    id: "laterite",
    name: "Laterite Soil",
    hindi: "लैटेराइट मृदा",
    sharePercent: 4.3,
    areaSqKm: "126,000",
    order: "Oxisols & Ultisols",
    genesis: "Formed under conditions of high temperature and alternating heavy rainfall and dry seasons. Intense leaching (desilication) washes away silica and soluble bases, leaving behind residual iron and aluminium oxides (bauxite/ferrite crust). Name from Latin 'Later' meaning brick.",
    distribution: "High summits of Western Ghats (Kerala, Karnataka), Eastern Ghats (Odisha), Rajmahal Hills, Meghalaya Plateau, and parts of MP and Assam.",
    chemistry: {
      richIn: ["Iron oxide", "Aluminium sesquioxides", "Titanium"],
      deficientIn: ["Silica", "Lime", "Magnesia", "Potash", "Nitrogen", "Phosphoric acid", "Humus"]
    },
    physicalProperties: "Coarse, highly porous, acidic pH (4.5–5.5). Soft when wet, but hardens irreversibly like a brick upon drying and exposure to air (used for building blocks).",
    suitableCrops: ["Cashew nuts", "Tea", "Coffee", "Rubber", "Coconut", "Arecanut", "Cardamom (with organic manuring and fertilizers)"],
    problems: "Acidic, highly leached, poor in plant nutrients; prone to severe water erosion on hill slopes."
  },
  {
    id: "arid",
    name: "Arid / Desert Soil",
    hindi: "शुष्क / मरुस्थलीय मृदा",
    sharePercent: 4.3,
    areaSqKm: "142,000",
    order: "Aridisols",
    genesis: "Formed under arid and semi-arid conditions characterized by low rainfall, intense heat, and high evaporation. Mechanical disintegration of rocks and aeolian wind deposition dominate over chemical weathering.",
    distribution: "Western Rajasthan (Thar), southern Punjab, southern Haryana, and northern Gujarat (Kutch).",
    chemistry: {
      richIn: ["Soluble salts", "Phosphate (normal levels)"],
      deficientIn: ["Nitrogen", "Organic matter / Humus", "Moisture"]
    },
    physicalProperties: "Sandy to gravelly texture, low clay content, very high permeability and low water retention. Alkaline pH (7.5–9.2); bottom horizons contain calcium carbonate (Kankar) layers restricting root penetration.",
    suitableCrops: ["Bajra (Pearl Millet)", "Guar", "Moth bean", "Barley", "Mustard & Wheat (under canal irrigation like IGNP)"],
    problems: "Severe wind erosion, high salinity, moisture deficiency, and shifting sand dune encroachment."
  },
  {
    id: "saline",
    name: "Saline & Alkaline Soil (Usara / Reh / Kallar)",
    hindi: "लवणीय एवं क्षारीय मृदा (ऊसर)",
    sharePercent: 2.1,
    areaSqKm: "68,000",
    order: "Halomorphic soils",
    genesis: "Contains large proportions of soluble sodium, potassium, and magnesium salts. Occurs in arid tracts due to high evaporation, in coastal tracts due to seawater inundation, and in canal-irrigated zones due to capillary action and waterlogging.",
    distribution: "Sundarbans (saline coastal alluvium), Rann of Kutch, canal-irrigated tracts of Punjab, Haryana, Western UP (locally known as Reh, Kallar, Usar), and coastal deltas.",
    chemistry: {
      richIn: ["Sodium chloride", "Sodium sulphate", "Sodium carbonate"],
      deficientIn: ["Nitrogen", "Calcium"]
    },
    physicalProperties: "White efflorescent crust on surface; structureless; alkaline pH (>8.5); impermeable to water and air, preventing germination.",
    suitableCrops: ["Generally barren; salt-tolerant crops like Berseem, Dhaincha, and barley can grow after gypsum treatment and drainage leaching."],
    problems: "Total destruction of soil structure; toxic sodium ion concentration; loss of productive agricultural land."
  },
  {
    id: "peaty",
    name: "Peaty & Marshy Soil (Kari)",
    hindi: "पीट एवं दलदली मृदा (कारी)",
    sharePercent: 1.5,
    areaSqKm: "50,000",
    order: "Histosols",
    genesis: "Formed under conditions of excessive rainfall, high humidity, and continuous waterlogging where slow decomposition of plant residues leads to accumulation of huge amounts of organic matter.",
    distribution: "Alappuzha and Kottayam districts of Kerala (locally called 'Kari' soils), coastal Odisha, Sundarbans of West Bengal, and Terai belt of Bihar and Uttarakhand.",
    chemistry: {
      richIn: ["Organic matter / Humus (40–50%)", "Iron"],
      deficientIn: ["Potash", "Phosphate"]
    },
    physicalProperties: "Heavy, dark black or bluish-grey color, highly acidic (pH 3.5–4.5), contains soluble ferrous salts and hydrogen sulphide.",
    suitableCrops: ["Paddy (Rice cultivation in Kerala's below-sea-level Kuttanad system), Jute, Mangrove vegetation"],
    problems: "Extreme acidity, waterlogging, toxic levels of iron and aluminium compounds."
  },
  {
    id: "forest",
    name: "Forest & Mountain Soil",
    hindi: "पर्वतीय एवं वन मृदा",
    sharePercent: 8.6,
    areaSqKm: "285,000",
    order: "Inceptisols & Entisols (Uplands)",
    genesis: "Formed in forested and mountainous areas where sufficient rainfall occurs. Soil formation is dominated by mechanical weathering caused by snow, rain, and temperature fluctuations combined with decomposition of organic leaf litter.",
    distribution: "Himalayan mountain ranges (Jammu & Kashmir, Ladakh, Himachal Pradesh, Uttarakhand, Sikkim, Arunachal Pradesh) and higher elevations of Western Ghats.",
    chemistry: {
      richIn: ["Humus (in surface layer under dense forest canopy)"],
      deficientIn: ["Potash", "Phosphorus", "Lime"]
    },
    physicalProperties: "Loamy and silty on valley floors, but coarse-grained on upper steep slopes; acidic with low humus in snow-covered areas due to podzolization.",
    suitableCrops: ["Tea (Darjeeling, Assam), Coffee (Nilgiris), Apple, Pear, Peach orchards, Spices (cardamom, pepper), Maize and Potato"],
    problems: "Thin soil profiles on steep gradients; highly vulnerable to deforestation-induced soil erosion, landslides, and rill washing."
  }
];

fs.writeFileSync(path.join(outDir, 'soils-india.json'), JSON.stringify(soilsIndia, null, 2), 'utf8');
console.log('Created soils-india.json');
// 7. NATURAL VEGETATION & FORESTS
const vegetationForests = [
  {
    id: "evergreen",
    name: "Tropical Wet Evergreen & Semi-Evergreen",
    hindi: "उष्णकटिबंधीय सदाबहार एवं अर्ध-सदाबहार वन",
    rainfallCm: ">200 cm (often >250 cm)",
    tempC: "25°–27°C with high humidity (>77%)",
    distribution: "Western slopes of Western Ghats (Kerala, Karnataka, Goa, Maharashtra), hills of Northeast India (Assam, Meghalaya, Nagaland, Manipur, Mizoram, Tripura), and Andaman & Nicobar Islands.",
    structure: "Tiered multi-layered canopy (up to 60 meters and above); dense shrub and creeper undergrowth; trees do not have a synchronized leaf-shedding season, appearing green year-round.",
    indicatorSpecies: ["Rosewood (Dalbergia latifolia)", "Mahogany", "Ebony", "Aini", "Champa", "Mesua", "White Cedar", "Hollock", "Bambusa (bamboo)"],
    economicUtility: "Source of valuable dense hardwood timber, spices, medicinal herbs; highly restricted commercial exploitation due to high biodiversity conservation priorities.",
    conservationIssues: "Fragmentation due to linear infrastructure, monoculture plantations (rubber, oil palm, tea), and shifting cultivation (Jhum) in Northeast."
  },
  {
    id: "moistdeciduous",
    name: "Tropical Moist Deciduous (Monsoon Forests)",
    hindi: "उष्णकटिबंधीय आर्द्र पर्णपाती वन",
    rainfallCm: "100–200 cm",
    tempC: "27°C average",
    distribution: "North-eastern states along Himalayan foothills (Bhabar-Terai belt), eastern slopes of Western Ghats, Odisha, Chhattisgarh, Jharkhand, parts of MP and UP.",
    structure: "Open canopy compared to evergreen; trees shed their leaves synchronously for 6 to 8 weeks during the dry spring/early summer to minimize transpiration.",
    indicatorSpecies: ["Sal (Shorea robusta — dominant)", "Teak (Tectona grandis)", "Shisham (Dalbergia sissoo)", "Mahua", "Amla", "Semul", "Kusum", "Sandalwood (Santalum album in Karnataka)"],
    economicUtility: "India's most commercially valuable forests; provides heavy railway sleeper timber (Sal), shipbuilding and furniture timber (Teak), fragrant sandalwood, and non-timber forest produce (NTFP: tendu leaves for beedi, mahua flowers).",
    conservationIssues: "Heavy historic clearance for agriculture and settlement; logging pressure; forest fires during the dry spring season."
  },
  {
    id: "drydeciduous",
    name: "Tropical Dry Deciduous Forests",
    hindi: "उष्णकटिबंधीय शुष्क पर्णपाती वन",
    rainfallCm: "70–100 cm",
    tempC: "High summer temperatures (>40°C)",
    distribution: "Most widespread forest type in India by area: covers vast rain-shadow interior plains of UP, Bihar, Madhya Pradesh, Maharashtra, Karnataka, Telangana, and Tamil Nadu.",
    structure: "Open forest with large grassland patches (parkland landscape); trees shed leaves for prolonged dry season (up to 3-4 months), standing completely leafless.",
    indicatorSpecies: ["Teak (dominant in central/southern tracts)", "Tendu (Diospyros melanoxylon)", "Palas / Flame of the Forest (Butea monosperma)", "Amaltas (Cassia fistula)", "Bel", "Khair", "Axlewood"],
    economicUtility: "Fuelwood, local timber, tendu leaf collection (supporting rural tribal economy), cattle grazing.",
    conservationIssues: "Severe overgrazing, lopping for fodder, frequent summer brush fires, conversion to agricultural scrub."
  },
  {
    id: "thornscrub",
    name: "Tropical Thorn & Scrub Forests",
    hindi: "उष्णकटिबंधीय कंटीले वन एवं झाड़ियाँ",
    rainfallCm: "<70 cm (often <50 cm)",
    tempC: "Hot arid/semi-arid climate with prolonged drought",
    distribution: "Northwestern India: western Rajasthan, southern Punjab, Haryana, Gujarat (Kutch/Saurashtra), and interior rain-shadow Deccan (parts of Maharashtra, Karnataka, Andhra).",
    structure: "Open, xerophytic vegetation; low stunted trees (rarely >6 meters) scattered amidst thorny scrub and grasses; deep taproots to seek groundwater, thick fleshy stems to store water, and modified thorns instead of leaves to stop transpiration.",
    indicatorSpecies: ["Babool / Acacia nilotica", "Khejri / Prosopis cineraria (State tree of Rajasthan, sacred to Bishnois)", "Khair", "Ber (Ziziphus)", "Wild date palm", "Cacti and Euphorbias"],
    economicUtility: "Khejri pods (Sangri) used for food, acacia bark used for tanning leather, gum arabic, camel and goat fodder.",
    conservationIssues: "Desertification, overgrazing, fuel wood extraction."
  },
  {
    id: "montane",
    name: "Montane Subtropical & Temperate / Alpine Forests",
    hindi: "पर्वतीय उपोष्ण, शीतोष्ण एवं अल्पाइन वन",
    rainfallCm: "150–300 cm with altitudinal temperature decline",
    tempC: "Subtropical to sub-zero alpine conditions",
    distribution: "Himalayas from Kashmir to Arunachal Pradesh; higher summits of Western Ghats (Nilgiris, Anamalai, Palani hills) as 'Shola-grassland' mosaics.",
    structure: "Vertical zonation with increasing altitude: (1) Subtropical pine/broadleaf (1,000–2,000 m: Chir Pine, Oak); (2) Wet Temperate / Coniferous (1,500–3,000 m: Blue Pine, Deodar, Spruce, Silver Fir, Birch); (3) Alpine scrub and meadows (3,000–4,000 m: Rhododendrons, Junipers, Bugyals/alpine pastures); (4) Permanent snow/ice (>4,500 m).",
    indicatorSpecies: ["Deodar (Cedrus deodara — durable rot-resistant timber)", "Chir Pine", "Oak (Quercus)", "Rhododendron", "Bhojpatra (Betula utilis / Himalayan Birch)", "Silver Fir"],
    economicUtility: "Softwood timber for packaging and paper pulp, resin from pine, medicinal plants, seasonal transhumant pastoralism by Gujjars, Bakarwals, and Gaddis on alpine pastures (Bugyals/Margs).",
    conservationIssues: "Pine needle forest fires, pine invasion displacing water-conserving broadleaved oaks, retreat of alpine treelines due to climate warming."
  },
  {
    id: "mangrove",
    name: "Littoral & Swamp / Mangrove Forests (Tidal Forests)",
    hindi: "मैंग्रोव / ज्वारीय एवं अनूप वन",
    rainfallCm: "Variable (tidal estuarine/deltaic environment)",
    tempC: "Warm coastal tropical waters (>20°C SST)",
    distribution: "Deltas of the Ganga-Brahmaputra (Sundarbans), Mahanadi, Godavari, Krishna, and Kaveri; Gulf of Kutch and Gulf of Khambhat (Gujarat); Andaman & Nicobar Islands. Total Indian coverage: ~4,992 sq km (~0.15% of land area).",
    structure: "Halophytic, salt-tolerant evergreen woody plants adapted to anaerobic, waterlogged, saline muddy substrates; equipped with stilt/prop roots, knee roots, and aerial breathing roots (pneumatophores) projecting vertically above water; exhibit viviparous germination (seeds germinate while still attached to parent tree).",
    indicatorSpecies: ["Sundari (Heritiera fomes — gives Sundarbans its name)", "Rhizophora (Red mangrove)", "Avicennia (Black mangrove)", "Sonneratia", "Nypa fruticans (mangrove palm)"],
    economicUtility: "Critical coastal bio-shield buffering cyclones and storm surges; primary nursery and breeding ground for fish, shrimp, and crabs; timber resistant to shipworm rot.",
    conservationIssues: "Aquaculture pond expansion, upstream freshwater diversion reducing estuarine flushing, coastal urbanization, sea-level rise."
  }
];

fs.writeFileSync(path.join(outDir, 'vegetation-forests.json'), JSON.stringify(vegetationForests, null, 2), 'utf8');
console.log('Created vegetation-forests.json');

// 8. MINERALS & ENERGY RESOURCES
const mineralsEnergy = {
  metallic: [
    {
      mineral: "Iron Ore",
      hindi: "लौह अयस्क",
      types: "Hematite (Fe 60–70%, red ore, 85% of Indian reserves) & Magnetite (Fe 72%, black magnetic ore, 15%)",
      rank: "India is the 4th largest producer in the world (after Australia, Brazil, China)",
      leadingState: "Odisha (produces >50% of national total), followed by Chhattisgarh, Karnataka, Jharkhand",
      majorBelts: [
        {
          name: "Odisha-Jharkhand Belt",
          mines: "Badampahar, Gorumahisani, Sulaipat (Mayurbhanj); Joda, Barbil, Thakurani (Kendujhar); Noamundi and Gua (Singhbhum, Jharkhand)",
          feeds: "Steel plants at Jamshedpur (Tata), Bokaro, Rourkela, Durgapur, Burnpur"
        },
        {
          name: "Durg-Bastar-Chandrapur Belt",
          mines: "Bailadila Range (Bastar, Chhattisgarh — super high-grade hematite deposits); Dalli-Rajhara (Durg)",
          feeds: "Bhilai Steel Plant; exported as high-grade lumps to Japan and South Korea via Visakhapatnam Port"
        },
        {
          name: "Ballari-Chitradurga-Chikkamagaluru-Tumakuru Belt",
          mines: "Sandur, Hospet (Ballari); Kudremukh (100% export-oriented magnetite, ore transported as liquid slurry via 67 km pipeline to Panambur/Mangaluru port); Bababudan Hills",
          feeds: "Vijayanagar Steel Plant (Toranagallu) and export"
        },
        {
          name: "Maharashtra-Goa Belt",
          mines: "Ratnagiri (Maharashtra); Bicholim, Sanquelim (Goa — low-grade ore exported via Marmagao Port)"
        }
      ]
    },
    {
      mineral: "Manganese",
      hindi: "मैंगनीज",
      types: "Pyrolusite and Psilomelane ores; essential ferro-alloy input (approx. 10 kg manganese required to manufacture 1 tonne of steel)",
      rank: "India holds significant reserves, mostly in ancient Dharwar rock systems",
      leadingState: "Odisha (Bonai, Kendujhar, Sundargarh), followed by Madhya Pradesh (Balaghat, Chhindwara), Maharashtra (Nagpur, Bhandara), Karnataka",
      majorBelts: ["Nagpur-Bhandara-Balaghat belt holds the highest quality metallurgical grade ore in India (MOIL headquarters at Nagpur)"]
    },
    {
      mineral: "Bauxite (Aluminium Ore)",
      hindi: "बॉक्साइट",
      types: "Hydrated aluminium oxide formed by intense weathering of laterite rocks on plateau summits",
      rank: "India is self-sufficient and exports alumina; smelting requires huge electricity (~14,000 kWh per tonne), so smelters site near cheap hydro/thermal power",
      leadingState: "Odisha (produces >50% of national output)",
      majorBelts: [
        {
          name: "Panchpatmali & Baphlimali Deposits (Koraput & Rayagada, Odisha)",
          desc: "Largest bauxite reserve in India; feeds NALCO refinery at Damanjodi and smelter at Angul; Vedanta at Lanjigarh"
        },
        {
          name: "Amarkantak Plateau & Maikal Hills (MP/Chhattisgarh)",
          desc: "Feeds HINDALCO smelter at Renukoot (UP) powered by Rihand Dam"
        }
      ]
    },
    {
      mineral: "Copper",
      hindi: "तांबा",
      types: "Chalcopyrite ore; India is critically deficient in copper, importing over 85% of copper concentrates",
      rank: "Deficient producer",
      leadingState: "Madhya Pradesh (Balaghat - Malanjkhand copper deposit produces ~50% of Indian ore), followed by Rajasthan (Khetri-Singhana belt, Jhunjhunu), Jharkhand (Singhbhum - Mosabani/Rakha)",
      majorBelts: ["Hindustan Copper Limited (HCL, PSU) operates Malanjkhand and Khetri mines"]
    }
  ],
  nonMetallic: [
    {
      mineral: "Mica",
      hindi: "अभ्रक",
      properties: "Exceptional dielectric strength, low power-loss factor, insulating, high heat resistance; critical for electrical and electronic equipment",
      leadingState: "Jharkhand (Koderma belt — historically 'Mica Capital of the World'), followed by Andhra Pradesh (Nellore belt) and Rajasthan (Bhilwara-Ajmer belt)",
      status: "India was historically the world's top exporter of sheet mica; synthetic substitutes and glass fibre have reduced global demand."
    },
    {
      mineral: "Limestone",
      hindi: "चूना पत्थर",
      properties: "Calcium carbonate sedimentary rock; primary raw material for the cement industry and flux material in blast furnaces",
      leadingState: "Rajasthan (Chittorgarh, Nagaur), Madhya Pradesh, Andhra Pradesh, Gujarat",
      status: "Cement plants cluster along limestone belts (e.g., Satna-Katni belt in MP, Chittorgarh in Rajasthan)."
    }
  ],
  fossilFuels: [
    {
      fuel: "Coal",
      hindi: "कोयला",
      types: "Anthracite (hard, >85% C, found only in J&K/Kalakot); Bituminous (commercial, 60–80% C, non-coking & coking); Lignite (brown coal, 40–55% C); Peat (<40% C)",
      geology: "Two distinct geological ages: (1) Gondwana Coal Fields (~250 Ma, Permian, accounts for 98% of reserves and production, low sulphur, high ash content 20–40%); (2) Tertiary Coal Fields (~55 Ma, Eocene, accounts for 2%, high sulphur content, found in Assam, Meghalaya, Arunachal, Nagaland).",
      leadingState: "Jharkhand ranks 1st in reserves (Jharia, Bokaro, Dhanbad, Karanpura), followed by Odisha (Talcher, Ib Valley), Chhattisgarh (Korba, Hasdeo Arand), West Bengal (Raniganj — oldest coalfield in India, 1774).",
      ligniteReserves: "Neyveli in Tamil Nadu holds over 70% of India's lignite reserves, mined by NLC India for pithead thermal power generation; also in Palana (Rajasthan) and Gujarat."
    },
    {
      fuel: "Petroleum & Natural Gas",
      hindi: "पेट्रोलियम एवं प्राकृतिक गैस",
      basins: [
        {
          name: "Offshore Western Basin (Bombay High & Bassein)",
          share: "~60% of domestic crude oil production",
          desc: "Discovered 1974 by ONGC drilling ship 'Sagar Samrat', located 160 km west of Mumbai in the Arabian Sea continental shelf."
        },
        {
          name: "Assam / Brahmaputra Shelf Basin",
          share: "Oldest producing basin in India",
          desc: "Digboi (oldest operational refinery in Asia, 1901), Naharkatiya, Moran-Hugrijan, Sibsagar; oil piped to Barauni and Guwahati refineries."
        },
        {
          name: "Gujarat / Cambay Basin",
          share: "~18% of domestic production",
          desc: "Ankleshwar, Kalol, Mehsana, Gandhar, Nawagam, and offshore Aliabet island."
        },
        {
          name: "Rajasthan / Barmer-Sanchore Basin",
          share: "Largest onshore oil discovery in recent decades",
          desc: "Mangala, Bhagyam, and Aishwarya fields operated by Cairn/Vedanta, producing ~20% of domestic crude."
        },
        {
          name: "Krishna-Godavari (KG) Offshore Deepwater Basin",
          share: "Major domestic natural gas source",
          desc: "Deepwater blocks KG-D6 (Reliance-BP) and KG-DWN-98/2 (ONGC) producing natural gas from deep sea wells."
        }
      ]
    }
  ],
  criticalMinerals: {
    overview: "In 2023, the Ministry of Mines identified 30 critical minerals essential for economic development and national security, focusing on electric vehicles, batteries, semiconductors, and defence.",
    ncmaMission: "National Critical Minerals Mission (NCMM) approved in January 2025 with an outlay of ₹34,300 crore to secure supply chains, boost GSI exploration (1,200 projects), and establish domestic refining/recycling.",
    keyFinds: [
      "Lithium: Inferred resources of 5.9 million tonnes identified in Salal-Haimana area, Reasi district, Jammu & Kashmir (2023); lithium pegmatite reserves in Mandya, Karnataka.",
      "Rare Earth Elements (REEs): Monazite beach sand deposits in Kerala, Tamil Nadu, Andhra, and Odisha containing cerium, neodymium, lanthanum managed by IREL (India) Ltd.",
      "Overseas Acquisition: Khanij Bidesh India Ltd. (KABIL — JV of NALCO, HCL, MECL) acquired 5 lithium brine blocks in Catamarca Province, Argentina (2024)."
    ]
  },
  nuclearMinerals: [
    {
      mineral: "Uranium",
      hindi: "यूरेनियम",
      mines: "Jaduguda, Bhatin, Narwapahar, Turamdih (Singhbhum copper belt, Jharkhand operated by UCIL); Tummalapalle (Kadapa district, Andhra Pradesh — world-class low-grade uranium deposit in Cuddapah basin); Domiasiat/Kylleng-Pyndengsohiong (Meghalaya)."
    },
    {
      mineral: "Thorium",
      hindi: "थोरियम",
      reserves: "India holds the world's largest known reserves of Thorium, contained in the mineral Monazite in coastal placer beach sands of Kerala (Chavara), Tamil Nadu (Manavalakurichi), Andhra Pradesh, and Odisha.",
      strategy: "Foundation of Stage 3 of India's Three-Stage Nuclear Power Programme (Dr. Homi Bhabha) using Advanced Heavy Water Reactors (AHWR) and Fast Breeder Reactors (PFBR at Kalpakkam)."
    }
  ]
};

fs.writeFileSync(path.join(outDir, 'minerals-energy.json'), JSON.stringify(mineralsEnergy, null, 2), 'utf8');
console.log('Created minerals-energy.json');
