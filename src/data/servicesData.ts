export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  focusAreas: string[];
  associatedProject: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'landscape-architecture',
    number: '01',
    title: 'Landscape Architecture',
    shortDesc: 'Comprehensive macro-scale spatial planning, earthwork grading, structural masonry, and statutory council coordination.',
    fullDesc: 'We practice landscape architecture as an integral extension of built architecture. From initial contour manipulation to complex civil levels and council vegetation overlays, our architectural documentation provides millimeter precision for premium builders and structural engineers.',
    deliverables: [
      'Topographic contour modeling & civil grading plans',
      'Council planning submission & permit documentation',
      'Structural retaining wall & foundation detailing',
      'Comprehensive lighting and hydraulic storm plans'
    ],
    focusAreas: ['Civic & residential interfaces', 'Structural engineering integration', 'Grade transitions & retaining', 'Statutory compliance'],
    associatedProject: 'Modern Hillside Residence'
  },
  {
    id: 'luxury-garden-design',
    number: '02',
    title: 'Luxury Garden Design',
    shortDesc: 'Bespoke residential estates designed for sensory repose, microclimatic shelter, and enduring architectural beauty.',
    fullDesc: 'Every luxury garden begins with the art of subtraction. We curate generous negative space, dramatic specimen plantings, and artisan-crafted water features to create private, deeply secluded domestic retreats tailored for high-end Melbourne residences.',
    deliverables: [
      'Concept spatial sketches & hand-rendered master layouts',
      'Photorealistic 3D visualization & sun studies',
      'Artisan stonework & water feature details',
      'Custom outdoor fireplace & pergola designs'
    ],
    focusAreas: ['Bespoke urban retreats', 'Microclimate curation', 'Evening lighting choreography', 'Sensory planting'],
    associatedProject: 'The Sculpted Garden'
  },
  {
    id: 'residential-master-planning',
    number: '03',
    title: 'Residential Master Planning',
    shortDesc: 'Holistic visioning for acreage, coastal compounds, and sprawling multi-pavilion properties.',
    fullDesc: 'Acreage landscapes require strategic foresight that balances human circulation, vehicle management, productive agricultural zones, and ecological land rehabilitation over decades. We establish enduring spatial frameworks that gracefully accept future expansions.',
    deliverables: [
      'Multi-stage phased development master plans',
      'Vehicular arrival, forecourt & carriage drives',
      'Ecological fire-buffer and windbreak planning',
      'Service, utility, and guest circulation matrices'
    ],
    focusAreas: ['Multi-hectare estates', 'Circulation & arrival sequences', 'Phased multi-year staging', 'Bushfire & water resilience'],
    associatedProject: 'Modern Hillside Residence'
  },
  {
    id: 'courtyard-design',
    number: '04',
    title: 'Courtyard Design',
    shortDesc: 'High-density urban sanctuaries engineered for acoustic isolation, intimate scale, and seamless glass thresholds.',
    fullDesc: 'Urban courtyards present exquisite design challenges of tight geometry, reflected heat, and vertical enclosure. We transform compact boundaries into meditative living atriums using floating stone steps, vertical green textures, and sound-cancelling reflecting pools.',
    deliverables: [
      'Internal atrium & lightwell landscape layouts',
      'Custom acoustic water walls & reflecting ponds',
      'Vertical trellis & privacy screen engineering',
      'Shade-adapted architectural plant selections'
    ],
    focusAreas: ['Boundary wall articulation', 'Acoustic dampening with water', 'Sub-canopy light optimization', 'Zero-sill indoor integration'],
    associatedProject: 'The Stone Courtyard'
  },
  {
    id: 'poolside-landscaping',
    number: '05',
    title: 'Poolside Landscaping',
    shortDesc: 'Monolithic pool surrounds, fluted concrete cabanas, integrated spas, and seamless water level transitions.',
    fullDesc: 'We view the pool not as a standalone amenity, but as a kinetic mirror that grounds the residence. We design concealed balance tanks, flush coping details, frameless glass thresholds, and sheltered pavilion cabanas for year-round poolside leisure.',
    deliverables: [
      'Geometric pool shape & elevation integration plans',
      'Cabana, pergola & outdoor kitchen architecture',
      'Concealed equipment & hydraulic enclosure design',
      'Compliant minimalist safety barrier detailing'
    ],
    focusAreas: ['Razor-edge infinity copings', 'Outdoor culinary pavilions', 'Integrated thermal plunge spas', 'Slip-resistant natural stone'],
    associatedProject: 'The Minimalist Retreat'
  },
  {
    id: 'outdoor-spatial-design',
    number: '06',
    title: 'Outdoor Spatial Design',
    shortDesc: 'Al fresco culinary pavilions, sunken fire salons, and curated lounge terraces engineered for effortless entertaining.',
    fullDesc: 'Outdoor living should offer the ergonomic comfort and material sophistication of an interior salon. We design sunken seating areas, bespoke bronze cooking hearths, weather-protected dining loggias, and integrated heated masonry.',
    deliverables: [
      'Bespoke outdoor kitchen & bar technical joinery',
      'Integrated sunken banquette & hearth detailing',
      'Retractable architectural shade & heating plans',
      'Custom metalwork and artisan furniture curation'
    ],
    focusAreas: ['Ergonomic outdoor living', 'Subterranean fire pits', 'All-weather entertaining', 'Architectural joinery'],
    associatedProject: 'The Sculpted Garden'
  },
  {
    id: 'planting-design',
    number: '07',
    title: 'Planting Design',
    shortDesc: 'Sculptural botanical composition balancing architectural silhouette, seasonal mutation, and Victorian soil chemistry.',
    fullDesc: 'Our planting palettes are informed by botanical rigor and high artistic sensibility. We compose contrasting foliage textures—from the glaucous, bold fronds of Cycads to the wispy movement of Australian native tussocks—crafting dynamic seasonal chapters throughout the year.',
    deliverables: [
      'Botanical species schedule & procurement registry',
      'Microclimate sun/wind suitability matrices',
      'Soil preparation & biological remediation briefs',
      'Specimen tree tagging & nursery sourcing'
    ],
    focusAreas: ['Sculptural specimen curation', 'Endemic Victoria flora', 'Drought-hardy microclimates', 'Four-season textural rhythm'],
    associatedProject: 'The Native Garden Project'
  },
  {
    id: 'landscape-consultation',
    number: '08',
    title: 'Landscape Consultation',
    shortDesc: 'Early architectural pre-design advisory, site feasibility analysis, and pre-purchase property assessments.',
    fullDesc: 'Engage our studio at property acquisition or during early architectural schematics. We assess slope stability, solar access, existing mature canopy value, soil characteristics, and council planning overlays to maximize design potential before construction begins.',
    deliverables: [
      'Site feasibility & constraint appraisal report',
      'Preliminary orientation & spatial potential review',
      'Tree health & preservation overlay evaluation',
      'Budgetary cost-band guidance for construction'
    ],
    focusAreas: ['Pre-purchase appraisal', 'Architectural collaboration', 'Council overlay discovery', 'Value-engineering advisory'],
    associatedProject: 'Coastal House Landscape'
  }
];
