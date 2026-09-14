// Coordinate Projection & Mapping Utilities for India (Bharat Atlas)
// Bounding box: Lat 6.5°N to 37.5°N; Lon 68.0°E to 97.5°E

export const INDIA_BOUNDS = {
  minLat: 6.5,
  maxLat: 37.5,
  minLon: 68.0,
  maxLon: 97.5
};

// Converts geographic (lat, lon) to SVG viewBox coordinates (width x height)
export const projectCoordinates = (lat, lon, width = 800, height = 900, padding = 40) => {
  const drawWidth = width - padding * 2;
  const drawHeight = height - padding * 2;

  // Normalize lon [0, 1] from west to east
  const normX = (lon - INDIA_BOUNDS.minLon) / (INDIA_BOUNDS.maxLon - INDIA_BOUNDS.minLon);
  // Normalize lat [0, 1] from north to south (SVG y goes downwards)
  const normY = (INDIA_BOUNDS.maxLat - lat) / (INDIA_BOUNDS.maxLat - INDIA_BOUNDS.minLat);

  const x = padding + normX * drawWidth;
  const y = padding + normY * drawHeight;

  return {
    x: Math.round(x * 10) / 10,
    y: Math.round(y * 10) / 10
  };
};

// Great-circle distance between two points in kilometers (Haversine formula)
export const calculateDistanceKm = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Earth's radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
};

// Pre-defined SVG boundary contours for India's major physiographic divisions
// (Normalized to 800x900 canvas)
export const PHYSIOGRAPHIC_REGIONS = [
  {
    id: 'himalayas',
    name: 'The Northern Mountains (Himalayas)',
    hindi: 'उत्तरी पर्वतीय प्रदेश (हिमालय)',
    color: '#8b5cf6',
    path: 'M 180 60 Q 320 120, 520 180 T 730 250 L 740 280 Q 530 210, 310 150 T 160 110 Z',
    desc: 'Young fold mountains stretching 2,400 km from Indus gorge in west to Brahmaputra (Dihang) gorge in east.'
  },
  {
    id: 'northern_plains',
    name: 'The Great Northern Plains',
    hindi: 'विशाल उत्तरी मैदान',
    color: '#10b981',
    path: 'M 170 120 Q 320 160, 530 220 T 720 300 L 710 360 Q 510 290, 300 230 T 160 200 Z',
    desc: 'Alluvial aggradational plain formed by Indus, Ganga, and Brahmaputra deposition; divided into Bhabar, Terai, Bhangar, Khadar.'
  },
  {
    id: 'peninsular_plateau',
    name: 'The Peninsular Plateau',
    hindi: 'प्रायद्वीपीय पठार',
    color: '#f59e0b',
    path: 'M 180 280 L 460 280 L 530 450 L 380 730 L 260 550 L 170 360 Z',
    desc: 'Ancient Archaean-Gondwana crystalline shield; comprises Central Highlands, Deccan Trap, Western Ghats (Sahyadri), and Eastern Ghats.'
  },
  {
    id: 'coastal_plains',
    name: 'The Coastal Plains & Ghats',
    hindi: 'तटीय मैदान एवं घाट',
    color: '#06b6d4',
    path: 'M 155 350 L 190 350 L 255 560 L 375 745 L 390 750 L 380 720 L 540 440 L 560 450 L 400 760 L 360 760 Z',
    desc: 'Western Coastal Plain (submergent, narrow, lagoons/kayals) vs Eastern Coastal Plain (emergent, broad, deltaic).'
  },
  {
    id: 'thar_desert',
    name: 'The Great Indian Desert (Thar)',
    hindi: 'थार मरुस्थल',
    color: '#ea580c',
    path: 'M 80 180 Q 150 170, 190 230 L 160 300 Q 100 270, 80 180 Z',
    desc: 'Arid sandy waste with crescent dunes (barchans), ephemeral streams (Luni), and inland saline playas (Sambhar).'
  },
  {
    id: 'islands',
    name: 'The Islands (Andaman, Nicobar & Lakshadweep)',
    hindi: 'द्वीप समूह',
    color: '#0284c7',
    path: 'M 190 680 A 15 15 0 1 1 190 710 Z M 720 620 L 740 760 L 725 760 Z',
    desc: 'Andaman & Nicobar: Submerged tertiary fold mountains (volcanic Barren & Narcondam). Lakshadweep: 36 coral atolls.'
  }
];

// Major Rivers coordinate lines for SVG schematic rendering
export const SCHEMATIC_RIVER_PATHS = [
  {
    id: 'ganga',
    name: 'Ganga',
    color: '#0284c7',
    d: 'M 305 130 Q 380 200, 480 240 T 630 310 L 650 360'
  },
  {
    id: 'brahmaputra',
    name: 'Brahmaputra (Tsangpo/Dihang/Jamuna)',
    color: '#0369a1',
    d: 'M 360 110 Q 560 115, 730 190 Q 750 220, 710 260 L 645 355'
  },
  {
    id: 'indus',
    name: 'Indus (Sindhu)',
    color: '#0284c7',
    d: 'M 340 100 L 250 80 Q 160 120, 130 240 L 110 330'
  },
  {
    id: 'narmada',
    name: 'Narmada (Rift Valley)',
    color: '#0891b2',
    d: 'M 440 330 L 320 335 L 210 345'
  },
  {
    id: 'tapi',
    name: 'Tapi',
    color: '#0891b2',
    d: 'M 410 360 L 320 365 L 215 375'
  },
  {
    id: 'godavari',
    name: 'Godavari (Dakshin Ganga)',
    color: '#2563eb',
    d: 'M 245 420 Q 360 430, 470 450 L 515 480'
  },
  {
    id: 'krishna',
    name: 'Krishna',
    color: '#1d4ed8',
    d: 'M 255 490 Q 370 510, 460 520 L 500 545'
  },
  {
    id: 'cauvery',
    name: 'Cauvery (Kaveri)',
    color: '#1e40af',
    d: 'M 270 600 Q 340 615, 410 635 L 435 645'
  },
  {
    id: 'mahanadi',
    name: 'Mahanadi',
    color: '#0284c7',
    d: 'M 430 370 Q 480 375, 530 385 L 565 400'
  }
];
