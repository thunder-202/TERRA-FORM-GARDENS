export interface PlantingItem {
  name: string;
  botanical: string;
  role: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  location: string;
  suburb: string;
  category: 'Courtyard Design' | 'Coastal Architecture' | 'Luxury Residential' | 'Master Planning' | 'Poolside & Spatial' | 'Native Ecology';
  filterTag: 'all' | 'courtyard' | 'coastal' | 'residential' | 'native';
  year: string;
  siteArea: string;
  architectCollaborator: string;
  aspect: string;
  heroImage: string;
  galleryImages: string[];
  shortDescription: string;
  designConcept: string;
  siteCharacteristics: string;
  materials: string[];
  plantingPalette: PlantingItem[];
  architecturalDescription: string;
  stats: { label: string; value: string }[];
}

export const PROJECTS: Project[] = [
  {
    id: 'stone-courtyard',
    slug: 'the-stone-courtyard',
    title: 'The Stone Courtyard',
    location: 'Toorak, Melbourne',
    suburb: 'Toorak',
    category: 'Courtyard Design',
    filterTag: 'courtyard',
    year: '2025',
    siteArea: '420 m²',
    architectCollaborator: 'Bates & Thorne Architects',
    aspect: 'North-facing sheltered atrium',
    heroImage: '/src/assets/images/project_stone_courtyard_1793642938794.jpg',
    galleryImages: [
      '/src/assets/images/project_stone_courtyard_1793642938794.jpg',
      '/src/assets/images/philosophy_stone_foliage_1793642938458.jpg',
      '/src/assets/images/hero_architectural_garden_1793642936950.jpg'
    ],
    shortDescription: 'A sanctuary of honed travertine, monolithic basalt, and sculpted evergreen cloud forms framed by vertical blackened ash battens.',
    designConcept: 'Conceived as an outdoor gallery room extending seamlessly from the residence’s double-height living pavilion. The design balances strict geometric order with organic stillness, centered around a 1.8-tonne custom-honed basalt water vessel that reflects seasonal changes in light.',
    siteCharacteristics: 'Enclosed urban perimeter with restricted direct sunlight, wind turbulence between double-storey volumes, and demanding acoustic privacy criteria in an established heritage enclave.',
    materials: [
      'Large-format Navona Travertine pavers (unfilled & honed)',
      '1.8T Hand-hewn Victorian Basalt monolithic water vessel',
      'Charred Victorian Ash screening (traditional Shou Sugi Ban)',
      'Subsurface low-voltage linear warm brass LED fixtures (2700K)',
      'River-tumbled charcoal basalt drainage bedding'
    ],
    plantingPalette: [
      { name: 'Cloud-Pruned Black Pine', botanical: 'Pinus thunbergii', role: 'Specimen sculpture & primary focal anchor' },
      { name: 'Japanese Bloodgood Maple', botanical: 'Acer palmatum "Bloodgood"', role: 'Seasonal canopy contrast & ruby autumn foliage' },
      { name: 'Dwarf Mondo Grass', botanical: 'Ophiopogon japonicus "Nana"', role: 'Velvety ground plane cushion' },
      { name: 'Rough Tree Fern', botanical: 'Dicksonia antarctica', role: 'Sub-canopy architectural moisture collector' }
    ],
    architecturalDescription: 'The Stone Courtyard demonstrates our philosophy of radical restraint. Rather than crowding the perimeter with domestic clutter, we established precise proportional axes that align with interior sightlines from the kitchen and primary salon. Every stone joint aligns millimeter-perfect with interior floor modules, dissolving the threshold between architecture and landscape.',
    stats: [
      { label: 'Completion', value: 'Autumn 2025' },
      { label: 'Site Footprint', value: '420 m²' },
      { label: 'Orientation', value: 'True North' },
      { label: 'Water System', value: 'Zero-loss recirculating weir' }
    ]
  },
  {
    id: 'coastal-house',
    slug: 'coastal-house-landscape',
    title: 'Coastal House Landscape',
    location: 'Flinders, Mornington Peninsula',
    suburb: 'Flinders',
    category: 'Coastal Architecture',
    filterTag: 'coastal',
    year: '2024',
    siteArea: '2,800 m²',
    architectCollaborator: 'McEwan Studio',
    aspect: 'Exposed South-West Bass Strait coastal bluff',
    heroImage: '/src/assets/images/project_coastal_flinders_1793642940932.jpg',
    galleryImages: [
      '/src/assets/images/project_coastal_flinders_1793642940932.jpg',
      '/src/assets/images/philosophy_stone_foliage_1793642938458.jpg',
      '/src/assets/images/project_native_garden_1793642958810.jpg'
    ],
    shortDescription: 'Rammed earth architecture nested into wind-sculpted coastal tussocks and weathered Australian hardwood cantilevered over Bass Strait.',
    designConcept: 'An exercise in topographical humility. The design anchors a modern rammed earth pavilion into a harsh, saline coastal bluff using wind-tolerant endemic coastal flora, irregular Castlemaine slate pathways, and silver-weathered ironbark boardwalks that float over fragile sand dunes.',
    siteCharacteristics: 'Severe maritime salt spray, corrosive prevailing south-westerly gales, extreme sandy loam soils, and strict coastal vegetation protection overlays.',
    materials: [
      'Site-excavated Rammed Earth retaining bulkheads',
      'Rough-split Castlemaine Slate stepping slabs',
      'Class 1 Silvertop Ash timber decking (naturally silvered)',
      'Weathered Core-Ten marine alloy retaining blades',
      'Permeable granitic sand pathways'
    ],
    plantingPalette: [
      { name: 'Coastal Tussock Grass', botanical: 'Poa poiformis', role: 'Wind-responsive dune stabilization' },
      { name: 'Coast Banksia', botanical: 'Banksia integrifolia', role: 'Salt-tolerant canopy structure' },
      { name: 'Cushion Bush', botanical: 'Leucophyta brownii', role: 'Silver maritime massing' },
      { name: 'Coastal Rosemary', botanical: 'Westringia fruticosa', role: 'Sculpted windbreaks' }
    ],
    architecturalDescription: 'At Flinders, nature dictates the terms. We abandoned manicured lawns in favor of continuous sweeps of indigenous coastal grasses that dance with ocean gales. The boardwalks hover slightly above the terrain to allow uninterrupted sand migration and rainwater infiltration, creating an architecture that feels eroded from the headland itself.',
    stats: [
      { label: 'Completion', value: 'Spring 2024' },
      { label: 'Site Footprint', value: '2,800 m²' },
      { label: 'Orientation', value: 'South-West Maritime' },
      { label: 'Ecological Status', value: '100% Endemic flora' }
    ]
  },
  {
    id: 'sculpted-garden',
    slug: 'the-sculpted-garden',
    title: 'The Sculpted Garden',
    location: 'South Yarra, Melbourne',
    suburb: 'South Yarra',
    category: 'Luxury Residential',
    filterTag: 'residential',
    year: '2025',
    siteArea: '680 m²',
    architectCollaborator: 'Kerstin Wood Architecture',
    aspect: 'North-East sheltered urban amphitheatre',
    heroImage: '/src/assets/images/project_sculpted_garden_1793642939849.jpg',
    galleryImages: [
      '/src/assets/images/project_sculpted_garden_1793642939849.jpg',
      '/src/assets/images/hero_architectural_garden_1793642936950.jpg',
      '/src/assets/images/project_stone_courtyard_1793642938794.jpg'
    ],
    shortDescription: 'A sunken conversation terrace carved from dry-stacked bluestone, enveloped by ancient tree ferns and a custom patinated bronze hearth.',
    designConcept: 'Creating an intimate, subterranean sanctuary in the heart of urban Melbourne. By excavating 1.2 meters below ground level, we established microclimatic wind shelter, absolute acoustic isolation, and an immersive canopy of lush architectural ferns crowned with a sculptural fire brazier.',
    siteCharacteristics: 'Dense inner-city boundary surrounded by historic brick masonry and tight access pathways requiring modular material staging.',
    materials: [
      'Hand-chiseled Victorian Bluestone dry-stack walling',
      'Honed Raven Black Granite terrace paving',
      'Solid patinated Bronze water spout and custom fire vessel',
      'Black powder-coated steel architectural handrails',
      'Concealed warm cove perimeter lighting'
    ],
    plantingPalette: [
      { name: 'Soft Tree Fern', botanical: 'Dicksonia antarctica', role: 'Dense prehistoric canopy' },
      { name: 'Japanese Maple', botanical: 'Acer palmatum "Sango Kaku"', role: 'Coral bark winter interest' },
      { name: 'Cast Iron Plant', botanical: 'Aspidistra elatior', role: 'Deep shade textural undergrowth' },
      { name: 'Silver Falls', botanical: 'Dichondra argentea', role: 'Cascading masonry drapery' }
    ],
    architecturalDescription: 'The Sculpted Garden serves as an evening retreat for entertaining. The sunken geometry invites guests into a sheltered microclimate where ambient garden lighting catches rising mist from the concealed water feature. The balance of heavy masonry and feathery foliage creates a timeless dialogue between permanence and organic growth.',
    stats: [
      { label: 'Completion', value: 'Summer 2025' },
      { label: 'Excavation Depth', value: '-1.20 m Grade' },
      { label: 'Orientation', value: 'North-East' },
      { label: 'Thermal Element', value: 'Handmade bronze brazier' }
    ]
  },
  {
    id: 'hillside-residence',
    slug: 'modern-hillside-residence',
    title: 'Modern Hillside Residence',
    location: 'Red Hill, Mornington Peninsula',
    suburb: 'Red Hill',
    category: 'Master Planning',
    filterTag: 'residential',
    year: '2024',
    siteArea: '8,500 m²',
    architectCollaborator: 'Studio Carr Architecture',
    aspect: 'North-West slope overlooking vineyard valley',
    heroImage: '/src/assets/images/project_hillside_residence_1793642957877.jpg',
    galleryImages: [
      '/src/assets/images/project_hillside_residence_1793642957877.jpg',
      '/src/assets/images/hero_architectural_garden_1793642936950.jpg',
      '/src/assets/images/philosophy_stone_foliage_1793642938458.jpg'
    ],
    shortDescription: 'Tiered granite terraces and an infinity-edge thermal plunge pool woven into a productive olive grove and vineyard slopes.',
    designConcept: 'Terracing a steep hillside into a sequence of functional outdoor rooms. The landscape architecture anchors a dramatic steel and glass pavilion into the topography using massive dry-stack granite retaining walls, gravel walkways, and an infinity plunge pool that mirrors the sky.',
    siteCharacteristics: 'Steep 22-degree gradient slope, rich volcanic red soil, surface water runoff management challenges, and high solar exposure.',
    materials: [
      'Local Harcourt Granite boulder retaining walls',
      'Endicott split-stone paving',
      'Oxidized steel edge restraints',
      'Weathered spotted gum timber decking',
      'Micro-cement pool coping'
    ],
    plantingPalette: [
      { name: 'European Olive', botanical: 'Olea europaea "Frantoio"', role: 'Productive architectural grove' },
      { name: 'Lomandra "Tanika"', botanical: 'Lomandra longifolia', role: 'Slope stabilization & movement' },
      { name: 'Creeping Rosemary', botanical: 'Salvia rosmarinus "Prostratus"', role: 'Terrace wall softening' },
      { name: 'Kangaroo Grass', botanical: 'Themeda triandra', role: 'Endemic grassland fringe' }
    ],
    architecturalDescription: 'Master planning an estate of this scale required resolving steep grade transitions into effortless, rhythmic experiences. By carving stepped terraces, we created distinct destinations: a pool pavilion, a dining terrace shaded by mature olive canopies, and quiet contemplation perches looking out across the valley.',
    stats: [
      { label: 'Completion', value: 'Winter 2024' },
      { label: 'Site Footprint', value: '8,500 m²' },
      { label: 'Elevation Delta', value: '18.4 m Fall' },
      { label: 'Waterbody', value: 'Geothermal plunge pool' }
    ]
  },
  {
    id: 'minimalist-retreat',
    slug: 'the-minimalist-retreat',
    title: 'The Minimalist Retreat',
    location: 'Brighton, Melbourne',
    suburb: 'Brighton',
    category: 'Poolside & Spatial',
    filterTag: 'residential',
    year: '2025',
    siteArea: '950 m²',
    architectCollaborator: 'Elenberg Fraser Interiors',
    aspect: 'North-facing sheltered rear courtyard',
    heroImage: '/src/assets/images/project_minimalist_retreat_1793642957072.jpg',
    galleryImages: [
      '/src/assets/images/project_minimalist_retreat_1793642957072.jpg',
      '/src/assets/images/hero_architectural_garden_1793642936950.jpg',
      '/src/assets/images/project_stone_courtyard_1793642938794.jpg'
    ],
    shortDescription: 'A fluted concrete cabana and black glass mosaic lap pool bordered by sculpted tropical foliage and honed light limestone.',
    designConcept: 'Monolithic minimalism tailored for resort-grade residential living. The centerpiece is a 20-meter obsidian lap pool reflecting a fluted charcoal concrete cabana with integrated outdoor kitchen, surrounded by structural subtropical flora that softens the clean architectural lines.',
    siteCharacteristics: 'Level bayside allotment with high groundwater table, requiring complex deep piling and hydraulic pool engineering.',
    materials: [
      'Custom fluted charcoal precast concrete',
      'French Jura Beige limestone paving',
      'Obsidian iridescent glass mosaic pool tiles',
      'Hidden linear drainage grates in stainless steel',
      'Matte black architectural hardware'
    ],
    plantingPalette: [
      { name: 'Giant Bird of Paradise', botanical: 'Strelitzia nicolai', role: 'Dramatic architectural backdrop' },
      { name: 'Fan Palm', botanical: 'Trachycarpus fortunei', role: 'Vertical rhythm' },
      { name: 'Elephant Ear', botanical: 'Alocasia macrorrhizos', role: 'Understory broadleaf contrast' },
      { name: 'Zoysia Lawn', botanical: 'Zoysia japonica "Empire"', role: 'Crisp manicured negative space' }
    ],
    architecturalDescription: 'Every junction in this Brighton estate was calculated to within 2mm. The pool coping cantilevers precisely over the dark water line to create a razor-sharp mirror surface. At dusk, concealed linear LED extrusions illuminate the fluted concrete ribs, creating a sculptural presence visible from every ground-floor room.',
    stats: [
      { label: 'Completion', value: 'Late 2025' },
      { label: 'Site Footprint', value: '950 m²' },
      { label: 'Lap Pool Length', value: '20.0 m' },
      { label: 'Finish', value: 'Charcoal fluted precast' }
    ]
  },
  {
    id: 'native-garden',
    slug: 'the-native-garden-project',
    title: 'The Native Garden Project',
    location: 'Warrandyte, Victoria',
    suburb: 'Warrandyte',
    category: 'Native Ecology',
    filterTag: 'native',
    year: '2024',
    siteArea: '4,200 m²',
    architectCollaborator: 'Balarinji Indigenous Design Partners',
    aspect: 'Undulating bushland edge along Yarra River corridor',
    heroImage: '/src/assets/images/project_native_garden_1793642958810.jpg',
    galleryImages: [
      '/src/assets/images/project_native_garden_1793642958810.jpg',
      '/src/assets/images/philosophy_stone_foliage_1793642938458.jpg',
      '/src/assets/images/project_coastal_flinders_1793642940932.jpg'
    ],
    shortDescription: 'An indigenous botanical tapestry of golden sandstone, river stones, kangaroo paw, and sculptural river red gums that regenerates the riparian biome.',
    designConcept: 'Ecological luxury that honors the ancient Wurundjeri landscape. Rejecting imported exotics, the design integrates dry ephemeral creek beds, massive natural sandstone flagstones, and a biodiverse mosaic of 48 indigenous Victoria species that attract endemic birdlife and pollinators.',
    siteCharacteristics: 'Riparian flood fringe, clay loam with shale bedrock, high bushfire management overlay, and strict indigenous canopy preservation.',
    materials: [
      'Uncut Donnybrook Sandstone flagstones',
      'River-worn Yarra quartz pebbles and boulders',
      'Recycled Ironbark wharf timber seating benches',
      'Crushed sandstone permeable trails',
      'Integrated stormwater bio-retention swales'
    ],
    plantingPalette: [
      { name: 'Yellow Box Gum', botanical: 'Eucalyptus melliodora', role: 'Majestic open canopy' },
      { name: 'Red & Green Kangaroo Paw', botanical: 'Anigozanthos manglesii', role: 'Sculptural floral accent' },
      { name: 'Hairpin Banksia', botanical: 'Banksia spinulosa', role: 'Architectural nectar cones' },
      { name: 'Common Tussock Grass', botanical: 'Poa labillardierei', role: 'Soft riparian understory' }
    ],
    architecturalDescription: 'The Warrandyte landscape demonstrates that endemic Australian flora possesses extraordinary architectural presence. We sculpted dry creek beds that fill with rainwater during storms, naturally filtering runoff before it meets the Yarra River. The result is a living ecological sanctuary that requires zero potable irrigation.',
    stats: [
      { label: 'Completion', value: 'Spring 2024' },
      { label: 'Site Footprint', value: '4,200 m²' },
      { label: 'Endemic Species', value: '48 Identified Biotypes' },
      { label: 'Irrigation', value: '100% Passive rainwater' }
    ]
  }
];
