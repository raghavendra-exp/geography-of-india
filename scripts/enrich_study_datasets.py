import json, os

data_dir = r"C:\Users\ragha\.gemini\antigravity\scratch\geography-of-india\public\data"

# 1. Enrich world-physical-geography.json
world_path = os.path.join(data_dir, "world-physical-geography.json")
with open(world_path, "r", encoding="utf-8") as f:
    world_data = json.load(f)

# Add topper notes from Sunep Jamir & Rajtanil to geomorphology subtopics
for sub in world_data.get("geomorphology", {}).get("subtopics", []):
    if sub["id"] == "plate-tectonics":
        sub["topperSynthesis"] = {
            "title": "Topper's Advanced Synthesis: Wilson Cycle & Orogenic Phases (Sunep Jamir Notes)",
            "points": [
                "Wilson Cycle: The 6-stage lifecycle of ocean basins and supercontinents: (1) Embryonic (East African Rift), (2) Juvenile (Red Sea), (3) Mature (Atlantic Ocean with passive margins), (4) Declining (Pacific Ocean with subduction zones), (5) Terminal (Mediterranean Sea), and (6) Relict/Suturing (Himalayan collision).",
                "Why Andes have volcanoes but Himalayas do not: Andes represent Oceanic-Continental (O-C) convergence where the dense Nazca plate subducts and undergoes dewatering and partial melting at 100-200 km, erupting explosive andesitic magma. Himalayas represent Continental-Continental (C-C) collision between buoyant Indian and Eurasian plates; neither plate subducts deep enough to melt into magma chambers. Hence, Himalayas experience severe earthquakes but NO active volcanism!",
                "Mid-plate Hotspots: Not all volcanoes occur at plate boundaries. Plumes of hot rock rising from the core-mantle boundary (D'' layer at 2,900 km depth) form stationary hotspots (Hawaii, Réunion, Hoggar/Tibesti in central Sahara). As plates move over them, age-progressive volcanic island chains are created."
            ]
        }
    elif sub["id"] == "earthquakes-volcanoes-dist":
        sub["topperSynthesis"] = {
            "title": "Topper's Advanced Synthesis: Seismic Geomorphology & Magma Geochemistry",
            "points": [
                "Magma Geochemistry: Continental magma is Andesitic/Rhyolitic (high silica ~60-70%, highly viscous, traps gases, causing violent explosive Plinian/Pelean eruptions e.g. Krakatoa). Oceanic magma is Basaltic/Mafic (low silica ~45-50%, rich in Fe & Mg, fluid, gas escapes easily, causing effusive Hawaiian/fissure flows).",
                "Geomorphological Effects of Earthquakes: Seismic shaking causes ground rupture, sand boils/liquefaction in alluvial floodplains and lakebed sediments (e.g. Kathmandu valley in 2015 Nepal quake), slope failure/avalanches, and compaction of un-consolidated sediments.",
                "Isoseismal vs Homoseismal Lines: Isoseismal lines connect places experiencing equal seismic intensity (Mercalli scale damage). Homoseismal lines connect places where earthquake waves arrive at the exact same point in time."
            ]
        }

for sub in world_data.get("climatology", {}).get("subtopics", []):
    if sub["id"] == "circulation-weather-systems":
        sub["topperSynthesis"] = {
            "title": "Topper's Advanced Synthesis: Jet Streams Classification & Coriolis Desiccation",
            "points": [
                "5 Major Jet Stream Types: (1) Polar Front Jet Stream (westerly, 9-12 km height, associated with polar front), (2) Subtropical Westerly Jet Stream (westerly, 12-14 km height, steering western disturbances into India), (3) Tropical Easterly Jet (easterly, summer season over Tibetan plateau, triggers Indian monsoon low), (4) Polar Night / Stratospheric Jet (polar vortex during winter), and (5) Local Jet Streams (e.g. Somali Low-Level Jet / Findlater Jet driving monsoon winds to Indian west coast).",
                "Why Major Hot Deserts Lie on Western Margins (20°-30° N): Triple meteorological control: (1) Subtropical high pressure subsidence (descending dry air of Hadley cell), (2) Offshore dry trade winds (shed moisture on east coasts, arrive completely dry on west coasts), and (3) Cold ocean currents (Canary, Benguela, California, Peru) creating severe atmospheric temperature inversions that suppress convection."
            ]
        }

with open(world_path, "w", encoding="utf-8") as f:
    json.dump(world_data, f, indent=2, ensure_ascii=False)
print("Enriched world-physical-geography.json")

# 2. Enrich global-resources-industries.json
res_path = os.path.join(data_dir, "global-resources-industries.json")
with open(res_path, "r", encoding="utf-8") as f:
    res_data = json.load(f)

for sub in res_data.get("naturalResources", {}).get("subtopics", []):
    if sub["id"] == "minerals-energy-resources":
        sub["strategicGeopolitics"] = {
            "title": "Topper's Strategic Resource Geopolitics: India's Global Resource Diplomacy (Sunep Jamir Treatises)",
            "points": [
                "South China Sea: Vital trade corridor (>55% of India's maritime trade) and untapped hydrocarbon reserves. India's ONGC Videsh holds exploration stakes in Vietnam's offshore blocks 127 and 128 to assert freedom of navigation and secure equity oil.",
                "Mongolia & Central Asian Republics (CARs): Tavan Tolgoi coking coal and Oyu Tolgoi copper-gold in Mongolia; Kazakhstan provides over 80% of India's imported Uranium; Turkmenistan holds the Galkynysh gas field (TAPI pipeline).",
                "Latin America (Lithium Triangle & Pre-salt): Argentina, Bolivia, and Chile hold >55% of world Lithium reserves (vital for India's National Electric Mobility Mission); Venezuela's Orinoco heavy oil belt and Brazil's offshore Santos pre-salt fields provide crude diversification.",
                "Canada & Australia: World's leading suppliers of nuclear uranium fuel (Athabasca basin in Saskatchewan) and potash fertilizers.",
                "Arctic Northern Sea Route: USGS estimates the Arctic holds 13% of undiscovered oil and 30% of gas. India's Arctic Policy (2022) targets polar scientific linkages to the Indian monsoon and long-term energy equity in Russian LNG (Yamal/Vankor)."
            ]
        }
    elif sub["id"] == "agricultural-resources":
        sub["agroClimaticBoundaries"] = {
            "title": "Topper's Agrarian Synthesis: Isohyets & Climate Change Impacts",
            "points": [
                "100 cm Isohyet Agricultural Boundary: The 100 cm annual rainfall isohyet separates India's Rice-dominant agro-ecosystem in the East and South from the Wheat/Millets-dominant agro-ecosystem in the West and North.",
                "Cotton Agro-Climatic Divergence: Requires 210 frost-free days and deep moisture-retentive black soil. In Punjab, it is sown in April-May with canal irrigation; in Maharashtra/Gujarat, it is sown in June-July with the onset of the monsoon.",
                "Climate Change & Food Security Paradox: Higher atmospheric CO2 accelerates plant growth (CO2 fertilization), but experiments reveal a 'nutrient dilution' effect—crops produce higher biomass but with diminished protein, zinc, and iron content.",
                "Urban & Peri-Urban Agriculture (UPA): Cultivation of vegetables and dairy in municipal peripheries reduces the urban heat island effect, cuts food transport emissions, and recycles treated urban wastewater."
            ]
        }

for sub in res_data.get("industrialLocation", {}).get("subtopics", []):
    if sub["id"] == "location-factors-weber":
        sub["weberCaseStudies"] = {
            "title": "Topper's Industrial Location Case Studies (Weber's Theory in Action)",
            "points": [
                "Sugar Industry Spatial Shift: Historically located in Uttar Pradesh and Bihar (near subtropical cane tracts). Over recent decades, it has shifted dramatically to Maharashtra and Tamil Nadu because tropical southern climate provides higher sucrose content, longer crushing season (180+ days vs 120 days in North), and better cooperative management.",
                "Aluminium Smelting (Power-Oriented Location): Smelting bauxite into alumina requires ore proximity, but smelting alumina into aluminium requires enormous continuous electric power (~14,000 kWh per tonne of aluminium). Plants locate near cheap hydropower or pithead thermal plants (e.g. NALCO at Angul, Odisha; HINDALCO at Renukoot, UP near Rihand Dam).",
                "Coastal Port-Based Steel Smelters: Why steel plants locate away from coal/iron mines: Modern blast furnaces consume far less coke (down from 4t to 0.6t per tonne of steel), while exhaustion of high-grade domestic ores makes importing Australian coking coal and Brazilian iron ore cheaper at coastal ports (e.g. Visakhapatnam RINL, JSW Dolvi, POSCO South Korea)."
            ]
        }

with open(res_path, "w", encoding="utf-8") as f:
    json.dump(res_data, f, indent=2, ensure_ascii=False)
print("Enriched global-resources-industries.json")

# 3. Enrich geophysical-phenomena.json
geo_path = os.path.join(data_dir, "geophysical-phenomena.json")
with open(geo_path, "r", encoding="utf-8") as f:
    geo_data = json.load(f)

for sub in geo_data.get("geophysicalPhenomena", {}).get("subtopics", []):
    if sub["id"] == "earthquakes":
        sub["himalayanSeismicGap"] = {
            "title": "Topper's Seismic Hazard Synthesis: Himalayan Seismic Gaps & Measurement Scales",
            "points": [
                "Himalayan Seismic Gaps: Along the 2,400 km Himalayan arc, tectonic stress has accumulated between historical earthquake rupture zones along the Main Himalayan Thrust (MHT). The 'Central Himalayan Seismic Gap' (spanning Uttarakhand and Western Nepal) has not experienced a major mega-quake (M > 8) for over 500 years, storing enough elastic strain energy to unleash catastrophic future seismicity.",
                "Why Moment Magnitude Scale (Mw) is Superior to Richter Scale: The Richter scale (Ml) measures ground displacement on a Wood-Anderson seismograph and 'saturates' (fails to distinguish) between very large earthquakes (M > 7.5). The Moment Magnitude Scale (Mw) measures the total physical energy released based on: Seismic Moment = Shear Modulus of Rock × Rupture Area of Fault × Average Fault Slip.",
                "Liquefaction in Soft Sediments: Saturated loose alluvial or lacustrine sands temporarily lose shear strength and behave as a viscous liquid during seismic shaking, causing heavy buildings to tilt or sink (observed in Kathmandu lakebed sediments during 2015 Gorkha earthquake)."
            ]
        }
    elif sub["id"] == "changing-geographical-features":
        sub["criticalFeaturesSynthesis"] = {
            "title": "Topper's Environmental Crisis Synthesis: Dying Rivers & Cryosphere Retreat",
            "points": [
                "Dying Rivers of India (Ecological Flow Deficit): Rivers like Yamuna, Sabarmati, and Damodar suffer complete ecological death along non-monsoon stretches because upstream diversion for irrigation and drinking deprives the river of its mandatory 'E-flow' (Ecological Flow), turning downstream reaches into toxic sewage conduits.",
                "Brahmaputra Bank Oscillation & Majuli Shrinking: High seismicity in Assam coupled with massive siltation from young Himalayan terrain causes the braided river channel of the Brahmaputra to oscillate wildly, eroding thousands of hectares of agrarian land and shrinking Majuli, the world's largest river island, from ~1,250 sq km to under 400 sq km.",
                "Urban Flooding vs Riverine Flooding: Urban flooding is an anthropogenic disaster caused by concretization (reducing soil infiltration from 80% to <10%), encroachment on urban wetlands and tanks (e.g. Pallikaranai in Chennai, Bellandur in Bengaluru), and undersized stormwater drains designed for 12 mm/h rain overwhelmed by climate-induced 50-100 mm/h downpours."
            ]
        }

with open(geo_path, "w", encoding="utf-8") as f:
    json.dump(geo_data, f, indent=2, ensure_ascii=False)
print("Enriched geophysical-phenomena.json")
