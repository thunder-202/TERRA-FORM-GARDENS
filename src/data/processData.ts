export interface ProcessStep {
  number: string;
  title: string;
  phase: string;
  timeframe: string;
  summary: string;
  deliverables: string[];
  clientRole: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Initial Consultation',
    phase: 'Discovery & Vision',
    timeframe: 'Weeks 1–2',
    summary: 'An exploratory dialogue on-site or in our Flinders Lane studio to understand your architectural aspirations, functional requirements, and personal aesthetic sensibilities.',
    deliverables: [
      'Comprehensive spatial brief and lifestyle aspiration matrix',
      'Preliminary budgetary allocation and scope framework',
      'Studio engagement proposal and fee schedule'
    ],
    clientRole: 'Sharing lifestyle routines, preferred architectural references, and key living requirements.'
  },
  {
    number: '02',
    title: 'Site Analysis',
    phase: 'Topographical & Environmental Due Diligence',
    timeframe: 'Weeks 2–4',
    summary: 'A forensic evaluation of the site’s natural systems: microclimate, wind patterns, seasonal sun paths, soil profile, drainage topography, and council regulatory overlays.',
    deliverables: [
      'Digital 3D contour mapping and shadow trajectory models',
      'Soil chemical profile & drainage permeability report',
      'Arboricultural report on significant existing canopy trees',
      'Municipal planning overlay & setback constraint assessment'
    ],
    clientRole: 'Providing survey title boundaries, architectural drawings, and existing engineering files.'
  },
  {
    number: '03',
    title: 'Concept Development',
    phase: 'Spatial Choreography & Form',
    timeframe: 'Weeks 5–8',
    summary: 'Translating site data into bold architectural ideas. We establish primary circulation axes, exterior room geometry, material selections, and sculptural focal points.',
    deliverables: [
      'Hand-rendered schematic master plan alternatives',
      'Photorealistic 3D perspective visualizations',
      'Tactile mood boards with raw stone and timber samples',
      'Preliminary plant species silhouettes and mood palette'
    ],
    clientRole: 'Reviewing concept sketches during an immersive in-studio presentation and aligning on the chosen direction.'
  },
  {
    number: '04',
    title: 'Design Refinement',
    phase: 'Technical Documentation & Detailing',
    timeframe: 'Weeks 9–14',
    summary: 'Developing the approved concept into an exhaustive set of construction-ready architectural drawings, engineering schedules, and council-approved document packages.',
    deliverables: [
      'Millimeter-exact dimensioned set-out and hardscape plans',
      'Civil grading, drainage levels, and surface invert details',
      'Structural retaining, pool coping, and masonry construction details',
      'Comprehensive botanical planting schedule and lighting layout'
    ],
    clientRole: 'Final sign-off on technical documentation and finish specifications.'
  },
  {
    number: '05',
    title: 'Project Delivery',
    phase: 'Artisan Construction & Horticultural Curation',
    timeframe: 'Variable by Scale',
    summary: 'Overseeing the physical realization with master stone masons, pool builders, and specialist landscape contractors, culminating in hand-selected specimen planting.',
    deliverables: [
      'Contractor tendering & procurement assistance',
      'Regular on-site quality assurance inspections and defects checks',
      'Personal tagging and placement of mature specimen trees',
      'Detailed 12-month bespoke horticultural stewardship manual'
    ],
    clientRole: 'Walking the completed garden at final handover and watching your living environment mature.'
  }
];
