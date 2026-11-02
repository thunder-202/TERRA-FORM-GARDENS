export interface Testimonial {
  id: string;
  quote: string;
  client: string;
  role: string;
  location: string;
  projectName: string;
  year: string;
  architecturalFeature: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'toorak-courtyard',
    quote: 'TERRA FORM transformed our enclosed Toorak residence into an ethereal sanctuary. The honed travertine and basalt water vessel have created an atmosphere of absolute quietude right in the middle of the city. Every room in our house now feels like it looks into a private gallery.',
    client: 'Julian & Sophia Hawthorne',
    role: 'Private Residence Owners',
    location: 'Toorak, Melbourne',
    projectName: 'The Stone Courtyard',
    year: '2025',
    architecturalFeature: 'Honed Navona Travertine & Basalt Reflection Basin'
  },
  {
    id: 'flinders-bluff',
    quote: 'Designing for a severe Bass Strait cliff requires architects who respect the elemental power of nature. Callum and Alistair worked with the wind rather than fighting it. The silvertop ash boardwalks and native tussock fields look as though they have anchored this headland for centuries.',
    client: 'Eleanor Vance & Marcus Chen',
    role: 'Estate Commissioners',
    location: 'Flinders, Mornington Peninsula',
    projectName: 'Coastal House Landscape',
    year: '2024',
    architecturalFeature: 'Endemic Coastal Tussock & Weathered Hardwood Boardwalk'
  },
  {
    id: 'south-yarra-garden',
    quote: 'The sunken conversation terrace has fundamentally shifted how we live and entertain. By dropping the grade, they turned what was once a wind-swept lawn into an intimate, warm open-air salon wrapped in tree ferns and soft bronze lighting. Their precision is simply peerless.',
    client: 'David & Katherine Mercer',
    role: 'Residential Patrons',
    location: 'South Yarra, Melbourne',
    projectName: 'The Sculpted Garden',
    year: '2025',
    architecturalFeature: 'Dry-Stack Bluestone Sunken Amphitheatre'
  }
];
