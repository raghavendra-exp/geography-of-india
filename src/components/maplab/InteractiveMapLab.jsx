import React, { useState, useEffect, useRef, useMemo } from 'react';
import L from 'leaflet';
import { 
  Layers, 
  MapPin, 
  Mountain, 
  Waves, 
  Trees, 
  Gem, 
  Compass, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  X, 
  ExternalLink,
  Search,
  Globe,
  Droplets,
  Building2,
  Info,
  CheckCircle2
} from 'lucide-react';

const TILE_PROVIDERS = {
  googleHybrid: {
    name: 'Google Satellite Hybrid',
    url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',
    attribution: '&copy; Google Maps Satellite Imagery',
    badge: 'Real Satellite + Labels'
  },
  googleTerrain: {
    name: 'Google Physical / Terrain',
    url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',
    attribution: '&copy; Google Maps Terrain & Relief',
    badge: '3D Elevation & Contours'
  },
  googleRoadmap: {
    name: 'Google Standard Roadmap',
    url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
    attribution: '&copy; Google Maps Vector',
    badge: 'Clean Roads & Borders'
  },
  osm: {
    name: 'OpenStreetMap Carto',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '&copy; OpenStreetMap contributors',
    badge: 'Open Source Community'
  }
};

const COMPREHENSIVE_PINS = [
  {
    id: 'pass_zojila', category: 'passes', typeLabel: 'Himalayan Pass', name: 'Zoji La', hindi: 'ज़ोजी ला',
    lat: 34.28, lon: 75.80, elevationM: 3528, state: 'Ladakh / J&K',
    significance: 'High mountain pass in Great Himalayas carrying NH-1. Connects Srinagar Valley with Kargil and Leh. The 14.15 km Zoji La Tunnel is being built to provide all-weather year-round access.',
    tags: ['NH-1', 'Great Himalayas', 'All-weather tunnel']
  },
  {
    id: 'pass_banihal', category: 'passes', typeLabel: 'Pir Panjal Pass', name: 'Banihal Pass', hindi: 'बनिहाल दर्रा',
    lat: 33.52, lon: 75.19, elevationM: 2832, state: 'Jammu & Kashmir',
    significance: 'Gateway pass across Pir Panjal connecting Jammu with Srinagar. Crossed by Jawahar Tunnel (1956), Qazigund-Banihal road tunnel (8.45 km), and USBRL railway tunnel T-49.',
    tags: ['Pir Panjal', 'Jawahar Tunnel', 'USBRL']
  },
  {
    id: 'pass_rohtang', category: 'passes', typeLabel: 'Pir Panjal Pass', name: 'Rohtang Pass & Atal Tunnel', hindi: 'रोहतांग दर्रा एवं अटल टनल',
    lat: 32.37, lon: 77.25, elevationM: 3979, state: 'Himachal Pradesh',
    significance: 'Connects Kullu Valley with Lahaul and Spiti. Separates Beas watershed from Chenab watershed. The 9.02 km Atal Tunnel beneath it is the longest highway tunnel above 10,000 ft.',
    tags: ['Atal Tunnel', 'Beas-Chenab divide', 'Manali-Leh']
  },
  {
    id: 'pass_shipkila', category: 'passes', typeLabel: 'Himalayan Pass', name: 'Shipki La', hindi: 'शिपकी ला',
    lat: 31.81, lon: 78.74, elevationM: 3930, state: 'Himachal Pradesh (Kinnaur)',
    significance: 'Himalayan pass on Indo-Tibetan border. The Satluj enters India from Tibet through a deep gorge adjacent to this pass.',
    tags: ['Satluj Entry Gorge', 'Kinnaur', 'Indo-China Trade']
  },
  {
    id: 'pass_nathula', category: 'passes', typeLabel: 'Sikkim Pass', name: 'Nathu La', hindi: 'नाथू ला',
    lat: 27.39, lon: 88.83, elevationM: 4310, state: 'Sikkim',
    significance: 'Strategic Himalayan pass on Sikkim-Tibet border. Ancient Silk Road branch connecting Gangtok to the Chumbi Valley and Lhasa.',
    tags: ['Chumbi Valley', 'Old Silk Route', 'Border Trade']
  },
  {
    id: 'pass_palghat', category: 'passes', typeLabel: 'Western Ghats Gap', name: 'Palghat Gap (Palakkad)', hindi: 'पालघाट दर्रा',
    lat: 10.78, lon: 76.65, elevationM: 140, state: 'Kerala / Tamil Nadu',
    significance: '30-km wide geological break between Nilgiri Hills to the north and Anaimalai Hills to the south. Carries NH-544 and funnels southwest monsoon winds into western TN.',
    tags: ['Nilgiri-Anaimalai break', 'NH-544', 'Monsoon funnel']
  },
  {
    id: 'pass_bhorghat', category: 'passes', typeLabel: 'Western Ghats Pass', name: 'Bhor Ghat (Khandala)', hindi: 'भोर घाट',
    lat: 18.75, lon: 73.34, elevationM: 610, state: 'Maharashtra',
    significance: 'Strategic pass connecting Mumbai with Pune and the Deccan Plateau. Carries Mumbai-Pune Expressway.',
    tags: ['Mumbai-Pune Expressway', 'Deccan gateway', 'Sahyadri']
  },
  {
    id: 'peak_k2', category: 'peaks', typeLabel: 'Mountain Peak', name: 'K2 (Godwin-Austen)', hindi: 'के-२ (गॉडविन ऑस्टिन)',
    lat: 35.88, lon: 76.51, elevationM: 8611, state: 'Ladakh (Karakoram)',
    significance: 'Second highest mountain peak on Earth and highest point in the Karakoram Range.',
    tags: ['Highest in Karakoram', 'World #2', 'Karakoram Range']
  },
  {
    id: 'peak_kanchenjunga', category: 'peaks', typeLabel: 'Mountain Peak', name: 'Kanchenjunga', hindi: 'कंचनजंघा',
    lat: 27.70, lon: 88.15, elevationM: 8586, state: 'Sikkim / Nepal border',
    significance: 'Third highest mountain on Earth and highest peak under Indian administration. UNESCO Mixed World Heritage Site.',
    tags: ['Highest in India (Administered)', 'UNESCO Mixed Site', 'Great Himalayas']
  },
  {
    id: 'peak_nandadevi', category: 'peaks', typeLabel: 'Mountain Peak', name: 'Nanda Devi', hindi: 'नंदा देवी',
    lat: 30.37, lon: 79.97, elevationM: 7816, state: 'Uttarakhand (Chamoli)',
    significance: 'Second highest peak entirely within India. Core zone of Nanda Devi Biosphere Reserve & World Heritage Site.',
    tags: ['Garhwal/Kumaon', 'Highest entirely in India', 'UNESCO Biosphere']
  },
  {
    id: 'peak_anamudi', category: 'peaks', typeLabel: 'Peninsular Peak', name: 'Anamudi Peak', hindi: 'अनामुडी शिखर',
    lat: 10.17, lon: 77.06, elevationM: 2695, state: 'Kerala (Idukki)',
    significance: 'Highest peak in Peninsular India and Western Ghats. Located inside Eravikulam National Park (Nilgiri Tahr habitat).',
    tags: ['Highest in Peninsular India', 'Western Ghats', 'Eravikulam']
  },
  {
    id: 'peak_gurushikhar', category: 'peaks', typeLabel: 'Aravalli Peak', name: 'Guru Shikhar', hindi: 'गुरु शिखर',
    lat: 24.65, lon: 72.78, elevationM: 1722, state: 'Rajasthan (Mount Abu)',
    significance: 'Highest peak of the ancient Aravalli Range. Located on the Mount Abu granitic plateau.',
    tags: ['Highest in Aravalli', 'Mount Abu', 'Oldest Fold Mountain']
  },
  {
    id: 'peak_dhupgarh', category: 'peaks', typeLabel: 'Satpura Peak', name: 'Dhupgarh', hindi: 'धूपगढ़',
    lat: 22.45, lon: 78.37, elevationM: 1350, state: 'Madhya Pradesh (Pachmarhi)',
    significance: 'Highest point in the Satpura Range and in Madhya Pradesh. Located in Pachmarhi Biosphere Reserve.',
    tags: ['Highest in Satpura', 'Mahadeo Hills', 'Pachmarhi']
  }
,
  {
    id: 'river_devprayag', category: 'rivers', typeLabel: 'Sacred Confluence', name: 'Devprayag (Bhagirathi + Alaknanda)', hindi: 'देवप्रयाग संगम',
    lat: 30.14, lon: 78.60, elevationM: 472, state: 'Uttarakhand',
    significance: 'Panch Prayag where Bhagirathi meets Alaknanda. Below this exact confluence, the river officially assumes the name GANGA.',
    tags: ['Birth of Ganga', 'Panch Prayag', 'Garhwal']
  },
  {
    id: 'river_prayagraj', category: 'rivers', typeLabel: 'Grand Confluence', name: 'Triveni Sangam Prayagraj', hindi: 'त्रिवेणी संगम (प्रयागराज)',
    lat: 25.43, lon: 81.88, elevationM: 98, state: 'Uttar Pradesh',
    significance: 'Confluence where Yamuna merges into Ganga. Site of Kumbh Mela and junction of National Waterway 1.',
    tags: ['Ganga + Yamuna', 'Kumbh Mela', 'National Waterway 1']
  },
  {
    id: 'river_majuli', category: 'rivers', typeLabel: 'Riverine Island', name: 'Majuli Island (Brahmaputra)', hindi: 'माजुली द्वीप',
    lat: 26.95, lon: 94.21, elevationM: 85, state: 'Assam',
    significance: 'World largest inhabited freshwater river island, formed by Brahmaputra and Subansiri. Neo-Vaishnavite Satra culture center.',
    tags: ['Brahmaputra', 'World Largest River Island', 'Assam']
  },
  {
    id: 'bio_nilgiri', category: 'biosphere', typeLabel: 'Biosphere Reserve', name: 'Nilgiri Biosphere Reserve', hindi: 'नीलगिरि बायोस्फीयर',
    lat: 11.55, lon: 76.60, elevationM: 2200, state: 'Tamil Nadu, Kerala, Karnataka',
    significance: 'India FIRST Biosphere Reserve (1986). Encompasses Mudumalai, Bandipur, Nagarhole, Wayanad, and Silent Valley. Habitat of Nilgiri Tahr.',
    tags: ['India #1 Biosphere', 'UNESCO MAB', 'Nilgiri Tahr']
  },
  {
    id: 'bio_sundarbans', category: 'biosphere', typeLabel: 'Biosphere Reserve', name: 'Sundarbans Biosphere Reserve', hindi: 'सुंदरवन बायोस्फीयर',
    lat: 21.94, lon: 88.89, elevationM: 5, state: 'West Bengal',
    significance: 'World largest mangrove delta formed by Ganga, Brahmaputra, Meghna. Home to Royal Bengal Tiger and Sundari trees.',
    tags: ['Mangrove Delta', 'Royal Bengal Tiger', 'UNESCO MAB & Ramsar']
  },
  {
    id: 'bio_nokrek', category: 'biosphere', typeLabel: 'Biosphere Reserve', name: 'Nokrek Biosphere Reserve', hindi: 'नोकरेक बायोस्फीयर',
    lat: 25.50, lon: 90.30, elevationM: 1412, state: 'Meghalaya (Garo Hills)',
    significance: 'Gene sanctuary for Citrus indica (ancestral wild orange) in Garo Hills. Crucial habitat for Red Panda.',
    tags: ['Citrus indica', 'Red Panda', 'Garo Hills']
  },
  {
    id: 'wet_chilika', category: 'wetlands', typeLabel: 'Ramsar Wetland', name: 'Chilika Lake', hindi: 'चिल्का झील',
    lat: 19.72, lon: 85.32, elevationM: 0, state: 'Odisha',
    significance: 'Asia largest brackish water lagoon and India first Ramsar site (1981). Flagship habitat for Irrawaddy Dolphin.',
    tags: ['First Ramsar Site', 'Irrawaddy Dolphin', 'Odisha']
  },
  {
    id: 'wet_loktak', category: 'wetlands', typeLabel: 'Ramsar Wetland', name: 'Loktak Lake & Keibul Lamjao', hindi: 'लोकटक झील एवं केबुल लामजाओ',
    lat: 24.55, lon: 93.80, elevationM: 768, state: 'Manipur',
    significance: 'Largest freshwater lake in Northeast India, famous for floating Phumdis. Keibul Lamjao is world only floating national park (Sangai deer).',
    tags: ['Floating Phumdis', 'Keibul Lamjao Floating NP', 'Sangai Deer']
  },
  {
    id: 'wet_vembanad', category: 'wetlands', typeLabel: 'Ramsar Wetland', name: 'Vembanad-Kol Wetland', hindi: 'वेम्बनाड झील',
    lat: 9.60, lon: 76.40, elevationM: 0, state: 'Kerala',
    significance: 'Longest lake in India (96 km). Below-sea-level Kuttanad farming system and Nehru Trophy Boat Race venue.',
    tags: ['Longest Lake in India', 'Kuttanad Farming', 'Ramsar Wetland']
  },
  {
    id: 'wet_wular', category: 'wetlands', typeLabel: 'Tectonic Wetland', name: 'Wular Lake', hindi: 'वुलर झील',
    lat: 34.35, lon: 74.60, elevationM: 1580, state: 'Jammu & Kashmir',
    significance: 'India largest freshwater tectonic lake, fed directly by the meandering Jhelum River.',
    tags: ['Largest Freshwater Lake', 'Tectonic Origin', 'Jhelum River']
  },
  {
    id: 'dam_tehri', category: 'dams', typeLabel: 'Rockfill Dam', name: 'Tehri Dam', hindi: 'टिहरी बांध',
    lat: 30.37, lon: 78.48, elevationM: 830, state: 'Uttarakhand (Bhagirathi)',
    significance: 'Tallest dam in India (260.5 m). Built at confluence of Bhagirathi and Bhilangna rivers. Generates 2,400 MW.',
    tags: ['Highest Dam in India', 'Bhagirathi River', '2400 MW']
  },
  {
    id: 'dam_sardarsarovar', category: 'dams', typeLabel: 'Gravity Dam', name: 'Sardar Sarovar Dam', hindi: 'सरदार सरोवर बांध',
    lat: 21.83, lon: 73.75, elevationM: 163, state: 'Gujarat (Narmada)',
    significance: 'Multipurpose dam on Narmada River. Supplies water to drought-prone Saurashtra, Kutch, and Rajasthan. Statue of Unity downstream.',
    tags: ['Narmada River', 'Saurashtra Lifeline', 'Statue of Unity']
  },
  {
    id: 'dam_hirakud', category: 'dams', typeLabel: 'Earthen Dam', name: 'Hirakud Dam', hindi: 'हीराकुड बांध',
    lat: 21.52, lon: 83.87, elevationM: 195, state: 'Odisha (Mahanadi)',
    significance: 'Longest earthen dam in the world (25.8 km with dykes). Tames the floods of the Mahanadi.',
    tags: ['Longest Dam in World', 'Mahanadi River', 'Sambalpur']
  },
  {
    id: 'min_jharia', category: 'minerals', typeLabel: 'Coking Coalfield', name: 'Jharia Coalfield', hindi: 'झरिया कोयला क्षेत्र',
    lat: 23.75, lon: 86.41, elevationM: 190, state: 'Jharkhand (Dhanbad)',
    significance: 'India premier storehouse of prime metallurgical coking coal for blast furnace steel production in Damodar basin.',
    tags: ['Prime Coking Coal', 'Damodar Valley', 'Steel Feedstock']
  },
  {
    id: 'min_bailadila', category: 'minerals', typeLabel: 'Iron Ore Belt', name: 'Bailadila Iron Ore Mines', hindi: 'बैलाडीला लौह अयस्क',
    lat: 18.72, lon: 81.25, elevationM: 1250, state: 'Chhattisgarh (Dantewada)',
    significance: 'High-grade hematite iron ore (65-68% Fe). Transported via slurry pipeline and railway to Visakhapatnam port for export.',
    tags: ['Hematite 68% Fe', 'Vizag Port Export', 'Bailadila Range']
  },
  {
    id: 'min_kudremukh', category: 'minerals', typeLabel: 'Iron Ore Belt', name: 'Kudremukh', hindi: 'कुद्रेमुख',
    lat: 13.21, lon: 75.25, elevationM: 1894, state: 'Karnataka',
    significance: 'Magnetite iron ore deposit in the Western Ghats; now a protected National Park to preserve rainforest ecology.',
    tags: ['Magnetite Ore', 'Western Ghats', 'Protected NP']
  },
  {
    id: 'min_bombayhigh', category: 'minerals', typeLabel: 'Offshore Petroleum', name: 'Bombay High (Mumbai High)', hindi: 'बॉम्बे हाई अपतटीय',
    lat: 19.42, lon: 71.33, elevationM: 0, state: 'Arabian Sea Offshore',
    significance: 'India most prolific offshore petroleum field, discovered in 1974 by ONGC drilling ship Sagar Samrat.',
    tags: ['Offshore Oilfield', 'ONGC Sagar Samrat', 'Continental Shelf']
  }
];

const REGION_PRESETS = [
  { id: 'all', label: 'Entire India', center: [22.5, 82.0], zoom: 5 },
  { id: 'himalayas', label: 'Himalayas & Ladakh', center: [33.0, 77.5], zoom: 7 },
  { id: 'northeast', label: 'Northeast Frontier', center: [26.5, 93.0], zoom: 7 },
  { id: 'ghats', label: 'Western Ghats', center: [14.0, 75.5], zoom: 7 },
  { id: 'ganga', label: 'Ganga & Plains', center: [26.5, 82.5], zoom: 7 },
  { id: 'deccan', label: 'Deccan & Central', center: [20.5, 78.5], zoom: 6 }
];

export default function InteractiveMapLab({ onStartDrill, lang = 'en' }) {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersLayerRef = useRef(null);
  const tileLayerRef = useRef(null);

  const [activeTileKey, setActiveTileKey] = useState('googleHybrid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEntity, setSelectedEntity] = useState(COMPREHENSIVE_PINS[0]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [activePreset, setActivePreset] = useState('all');

  const [categories, setCategories] = useState({
    passes: true,
    peaks: true,
    rivers: true,
    biosphere: true,
    wetlands: true,
    dams: true,
    minerals: true
  });

  const toggleCategory = (catKey) => {
    setCategories(prev => ({ ...prev, [catKey]: !prev[catKey] }));
  };

  const filteredPins = useMemo(() => {
    return COMPREHENSIVE_PINS.filter(pin => {
      if (!categories[pin.category]) return false;
      if (activeCategory !== 'all' && pin.category !== activeCategory) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = pin.name.toLowerCase().includes(q);
        const matchHindi = pin.hindi && pin.hindi.includes(q);
        const matchState = pin.state.toLowerCase().includes(q);
        const matchSignificance = pin.significance.toLowerCase().includes(q);
        return matchName || matchHindi || matchState || matchSignificance;
      }
      return true;
    });
  }, [categories, activeCategory, searchQuery]);

  const getCategoryConfig = (cat) => {
    switch(cat) {
      case 'passes': return { color: '#0284c7', emoji: '⛰️', label: 'Mountain Passes' };
      case 'peaks': return { color: '#7c3aed', emoji: '🏔️', label: 'Mountain Peaks' };
      case 'rivers': return { color: '#06b6d4', emoji: '🌊', label: 'Rivers & Confluences' };
      case 'biosphere': return { color: '#059669', emoji: '🌳', label: 'Biosphere Reserves' };
      case 'wetlands': return { color: '#0284c7', emoji: '🦆', label: 'Ramsar Wetlands' };
      case 'dams': return { color: '#d97706', emoji: '🏗️', label: 'Major Dams' };
      case 'minerals': return { color: '#e11d48', emoji: '💎', label: 'Mineral Belts' };
      default: return { color: '#ea580c', emoji: '📍', label: 'Landmark' };
    }
  };

  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: [22.5, 82.0],
      zoom: 5,
      minZoom: 4,
      maxZoom: 18,
      zoomControl: false
    });

    L.control.zoom({ position: 'topright' }).addTo(map);

    const initialConfig = TILE_PROVIDERS[activeTileKey];
    const tileLayer = L.tileLayer(initialConfig.url, {
      attribution: initialConfig.attribution,
      maxZoom: 18
    }).addTo(map);

    tileLayerRef.current = tileLayer;
    const markersLayer = L.featureGroup().addTo(map);
    markersLayerRef.current = markersLayer;
    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;
    if (tileLayerRef.current) {
      map.removeLayer(tileLayerRef.current);
    }
    const config = TILE_PROVIDERS[activeTileKey];
    const newTileLayer = L.tileLayer(config.url, {
      attribution: config.attribution,
      maxZoom: 18
    }).addTo(map);
    tileLayerRef.current = newTileLayer;
  }, [activeTileKey]);

  useEffect(() => {
    const map = mapInstanceRef.current;
    const markersLayer = markersLayerRef.current;
    if (!map || !markersLayer) return;

    markersLayer.clearLayers();

    filteredPins.forEach(pin => {
      const { color, emoji } = getCategoryConfig(pin.category);
      const customIcon = L.divIcon({
        className: 'custom-geo-marker',
        html: `<div style="background-color: ${color}; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 4px 10px rgba(0,0,0,0.4); font-size: 14px; cursor: pointer;">${emoji}</div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15]
      });

      const marker = L.marker([pin.lat, pin.lon], { icon: customIcon });
      const popupHtml = `
        <div style="min-width: 220px; font-family: system-ui, sans-serif;">
          <div style="font-size: 10px; text-transform: uppercase; font-weight: 700; color: ${color}; letter-spacing: 0.05em;">
            ${pin.typeLabel}
          </div>
          <div style="font-size: 14px; font-weight: 800; color: #0f172a; margin-top: 2px;">
            ${pin.name}
          </div>
          ${pin.hindi ? `<div style="font-size: 11px; color: #475569; margin-bottom: 4px;">${pin.hindi}</div>` : ''}
          <div style="font-size: 11px; color: #334155; margin-bottom: 8px; line-height: 1.35;">
            ${pin.significance.substring(0, 110)}...
          </div>
          <a href="https://www.google.com/maps/search/?api=1&query=${pin.lat},${pin.lon}" target="_blank" rel="noopener noreferrer" 
             style="background: #0284c7; color: white; padding: 4px 8px; border-radius: 6px; font-size: 10px; font-weight: 700; text-decoration: none; display: inline-block;">
             Open in Google Maps ↗
          </a>
        </div>
      `;

      marker.bindPopup(popupHtml);
      marker.on('click', () => {
        setSelectedEntity(pin);
      });

      markersLayer.addLayer(marker);
    });
  }, [filteredPins]);

  const handlePresetSelect = (preset) => {
    setActivePreset(preset.id);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(preset.center, preset.zoom, { duration: 1.2 });
    }
  };

  const handleSelectPin = (pin) => {
    setSelectedEntity(pin);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([pin.lat, pin.lon], 9, { duration: 1.0 });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 animate-fade-in">
      <div className="p-6 rounded-3xl border shadow-sm bg-white/80 border-sepia-300 text-sepia-900 dark:bg-slate-900/80 dark:border-slate-800 dark:text-slate-100">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                GOOGLE MAPS & REAL TILE ENGINE
              </span>
              <span className="text-xs text-sepia-600 dark:text-slate-400 font-mono">
                {filteredPins.length} Active Landmarks
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-sepia-900 dark:text-slate-100 mt-1">
              Bharat Spatial Vector & Satellite Lab
            </h2>
            <p className="text-xs sm:text-sm text-sepia-600 dark:text-slate-400 mt-0.5">
              High-resolution Google Satellite, Physical Terrain, and Roadmap mapping for UPSC Prelims map-pointing and GS-I/III spatial mastery.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex rounded-xl bg-sepia-100 dark:bg-slate-800 p-1 border border-sepia-200 dark:border-slate-700 text-xs font-bold">
              {Object.entries(TILE_PROVIDERS).map(([key, prov]) => (
                <button
                  key={key}
                  onClick={() => setActiveTileKey(key)}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    activeTileKey === key
                      ? 'bg-saffron-600 text-white shadow-xs'
                      : 'text-sepia-700 dark:text-slate-300 hover:text-sepia-900'
                  }`}
                  title={prov.badge}
                >
                  {prov.name.split(' ')[1] || prov.name}
                </button>
              ))}
            </div>

            {onStartDrill && (
              <button
                onClick={onStartDrill}
                className="px-4 py-2 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white text-xs font-bold shadow-sm transition-all flex items-center space-x-1.5"
              >
                <Compass className="w-4 h-4" />
                <span>Blind Map Drill</span>
              </button>
            )}
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-sepia-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="font-bold text-sepia-700 dark:text-slate-300 mr-1 flex items-center space-x-1">
              <Globe className="w-3.5 h-3.5 text-saffron-600" />
              <span>Quick Focus:</span>
            </span>
            {REGION_PRESETS.map(preset => (
              <button
                key={preset.id}
                onClick={() => handlePresetSelect(preset)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  activePreset === preset.id
                    ? 'bg-saffron-600 text-white font-bold'
                    : 'bg-white/80 dark:bg-slate-800 border border-sepia-200 dark:border-slate-700 text-sepia-700 dark:text-slate-300 hover:bg-sepia-100'
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>

          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-sepia-400 dark:text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search passes, peaks, rivers, dams..."
              className="w-full pl-9 pr-4 py-1.5 rounded-xl text-xs bg-white dark:bg-slate-800 border border-sepia-300 dark:border-slate-700 focus:outline-hidden focus:ring-2 focus:ring-saffron-500 text-sepia-900 dark:text-slate-100"
            />
          </div>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2 pt-2 text-xs">
          <span className="font-bold text-sepia-700 dark:text-slate-300 text-[11px] uppercase tracking-wider">
            Layers:
          </span>
          {[
            { id: 'passes', label: 'Passes', color: 'bg-sky-500' },
            { id: 'peaks', label: 'Peaks', color: 'bg-purple-500' },
            { id: 'rivers', label: 'River Points', color: 'bg-cyan-500' },
            { id: 'biosphere', label: 'Biospheres', color: 'bg-emerald-500' },
            { id: 'wetlands', label: 'Wetlands', color: 'bg-blue-600' },
            { id: 'dams', label: 'Dams', color: 'bg-amber-500' },
            { id: 'minerals', label: 'Minerals', color: 'bg-rose-500' }
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => toggleCategory(cat.id)}
              className={`px-2.5 py-1 rounded-lg border text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                categories[cat.id]
                  ? 'bg-sepia-100 dark:bg-slate-800 border-sepia-300 dark:border-slate-700 text-sepia-900 dark:text-slate-100'
                  : 'opacity-40 border-transparent bg-transparent text-sepia-500'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${cat.color}`} />
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-8 rounded-3xl overflow-hidden border shadow-lg relative bg-slate-900 border-sepia-300 dark:border-slate-800">
          <div 
            ref={mapContainerRef} 
            className="w-full h-[620px] z-10" 
            style={{ minHeight: '620px' }}
          />
          <div className="absolute bottom-4 left-4 z-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-sepia-200 dark:border-slate-700 shadow-md text-[11px] font-mono flex items-center space-x-3">
            <span className="flex items-center space-x-1 text-emerald-600 dark:text-emerald-400 font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Google Tiles Active</span>
            </span>
            <span className="text-sepia-400 dark:text-slate-600">|</span>
            <span className="text-sepia-700 dark:text-slate-300">
              Provider: {TILE_PROVIDERS[activeTileKey].name}
            </span>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-4">
          {selectedEntity && (
            <div className="p-6 rounded-3xl border shadow-md bg-[#faf7ee] border-sepia-300 text-sepia-900 dark:bg-[#0c121d] dark:border-slate-800 dark:text-slate-100 space-y-4 transition-all animate-fade-in">
              <div>
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-saffron-100 text-saffron-800 dark:bg-amber-950 dark:text-amber-300 border border-saffron-300 dark:border-amber-800">
                    {selectedEntity.typeLabel}
                  </span>
                  <span className="font-mono text-xs text-sepia-600 dark:text-slate-400 font-semibold">
                    {selectedEntity.state}
                  </span>
                </div>
                <h3 className="text-xl font-bold font-display text-sepia-900 dark:text-slate-100 mt-2">
                  {selectedEntity.name}
                </h3>
                {selectedEntity.hindi && (
                  <p className="text-xs font-hindi text-saffron-700 dark:text-amber-300 font-medium">
                    {selectedEntity.hindi}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-sepia-200 dark:border-slate-700">
                  <span className="text-[10px] text-sepia-500 dark:text-slate-400 block uppercase">Coordinates</span>
                  <span className="font-bold text-sepia-900 dark:text-slate-100">
                    {selectedEntity.lat.toFixed(2)}°N, {selectedEntity.lon.toFixed(2)}°E
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-sepia-200 dark:border-slate-700">
                  <span className="text-[10px] text-sepia-500 dark:text-slate-400 block uppercase">Elevation</span>
                  <span className="font-bold text-sepia-900 dark:text-slate-100">
                    {selectedEntity.elevationM ? `${selectedEntity.elevationM}m` : 'Sea level / Basin'}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/70 dark:bg-slate-800/50 border border-sepia-200 dark:border-slate-800 space-y-2 text-xs">
                <div className="font-bold text-saffron-800 dark:text-amber-300 flex items-center space-x-1.5">
                  <Info className="w-3.5 h-3.5" />
                  <span>UPSC Syllabus & Prelims Value:</span>
                </div>
                <p className="text-sepia-800 dark:text-slate-300 leading-relaxed font-sans">
                  {selectedEntity.significance}
                </p>
                {selectedEntity.tags && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {selectedEntity.tags.map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded-md bg-sepia-200/70 dark:bg-slate-700/80 text-[10px] font-mono text-sepia-700 dark:text-slate-300 font-medium">
                        #{t}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-2 border-t border-sepia-200 dark:border-slate-800 flex items-center justify-between gap-2">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${selectedEntity.lat},${selectedEntity.lon}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold shadow-xs flex items-center justify-center space-x-1.5 transition-all text-center"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={`https://earth.google.com/web/search/${selectedEntity.lat},${selectedEntity.lon}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 rounded-xl bg-sepia-200 dark:bg-slate-800 hover:bg-sepia-300 dark:hover:bg-slate-700 text-sepia-800 dark:text-slate-200 text-xs font-bold border border-sepia-300 dark:border-slate-700 flex items-center space-x-1 transition-all"
                  title="Explore in Google Earth 3D"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>3D Earth</span>
                </a>
              </div>
            </div>
          )}

          <div className="p-4 rounded-3xl border shadow-sm bg-white/80 border-sepia-300 text-sepia-900 dark:bg-slate-900/80 dark:border-slate-800 dark:text-slate-100 max-h-[290px] overflow-y-auto space-y-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-sepia-600 dark:text-slate-400 px-1">
              Select to Fly ({filteredPins.length}):
            </h4>
            <div className="space-y-1">
              {filteredPins.map(pin => {
                const isSelected = selectedEntity && selectedEntity.id === pin.id;
                return (
                  <button
                    key={pin.id}
                    onClick={() => handleSelectPin(pin)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-saffron-100 dark:bg-amber-950/60 font-bold text-saffron-900 dark:text-amber-300 border border-saffron-300 dark:border-amber-800'
                        : 'hover:bg-sepia-100 dark:hover:bg-slate-800 text-sepia-800 dark:text-slate-300'
                    }`}
                  >
                    <span className="truncate pr-2">{pin.name}</span>
                    <span className="text-[10px] font-mono text-sepia-500 dark:text-slate-400 shrink-0">
                      {pin.state.split('/')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
