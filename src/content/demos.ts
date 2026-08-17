export type Demo = {
  slug: string;
  name: string;
  sector: string;
  theme: { background: string; surface: string; ink: string; accent: string };
  image: string;
  imagePosition: string;
  headline: string;
  lead: string;
  cta: string;
  services: Array<{ title: string; copy: string }>;
  projects: string[];
  statement: string;
};

export const demos: Demo[] = [
  {
    slug: 'architecture',
    name: 'Atelier North',
    sector: 'Architecture studio',
    theme: { background: '#f3f0e9', surface: '#ffffff', ink: '#282725', accent: '#bd5b37' },
    image: '/images/work-architecture.jpg',
    imagePosition: '78% 32%',
    headline: 'Architecture for enduring places.',
    lead: 'Residential and cultural spaces shaped by context, material and everyday use.',
    cta: 'Discuss a project',
    services: [
      { title: 'Residential', copy: 'New homes, careful extensions and long-term renovation plans.' },
      { title: 'Cultural', copy: 'Public spaces designed around movement, access and shared use.' },
      { title: 'Interior', copy: 'Material-led interiors with practical detail and lasting finishes.' },
    ],
    projects: ['Courtyard House', 'Stone Pavilion', 'Field Studio'],
    statement: 'We design calm, useful buildings that become better through use.',
  },
  {
    slug: 'bakery',
    name: 'Hearth & Grain',
    sector: 'Bakery and café',
    theme: { background: '#f5efe5', surface: '#fffaf2', ink: '#35251d', accent: '#747947' },
    image: '/images/work-bakery.jpg',
    imagePosition: '76% 25%',
    headline: 'Bread made slowly. Served daily.',
    lead: 'Naturally leavened bread, seasonal pastries and coffee roasted close to home.',
    cta: 'See today’s menu',
    services: [
      { title: 'Morning bake', copy: 'Sourdough, rye and seeded loaves from the first oven.' },
      { title: 'Pastry counter', copy: 'Croissants, buns and fruit tarts made in small batches.' },
      { title: 'Lunch', copy: 'Simple sandwiches, soup and salads until they sell out.' },
    ],
    projects: ['Country sourdough', 'Seasonal pastry', 'Lunch counter'],
    statement: 'Good flour, time and skilled hands. Nothing unnecessary.',
  },
  {
    slug: 'physio',
    name: 'Mova',
    sector: 'Physiotherapy clinic',
    theme: { background: '#edf1ea', surface: '#ffffff', ink: '#303a31', accent: '#778f64' },
    image: '/images/work-physio.jpg',
    imagePosition: '78% 28%',
    headline: 'Move well. Return stronger.',
    lead: 'Practical physiotherapy for pain, recovery and confident movement.',
    cta: 'Book an assessment',
    services: [
      { title: 'Assessment', copy: 'A clear diagnosis and plan based on how you need to move.' },
      { title: 'Treatment', copy: 'Hands-on care combined with focused, manageable exercise.' },
      { title: 'Performance', copy: 'Strength and movement coaching for a durable return to activity.' },
    ],
    projects: ['Back and neck', 'Sports recovery', 'Movement coaching'],
    statement: 'Clear guidance, useful exercise and progress you can feel.',
  },
  {
    slug: 'construction',
    name: 'Common Ground',
    sector: 'Building and renovation',
    theme: { background: '#eeeae1', surface: '#faf8f2', ink: '#26362c', accent: '#31523d' },
    image: '/images/work-construction.jpg',
    imagePosition: '76% 30%',
    headline: 'Building better for people and planet.',
    lead: 'Low-energy homes and careful renovations, built with accountable local teams.',
    cta: 'Plan your build',
    services: [
      { title: 'New homes', copy: 'Efficient, comfortable homes with a clear programme and budget.' },
      { title: 'Renovation', copy: 'Sensitive upgrades that improve space, comfort and energy use.' },
      { title: 'Retrofit', copy: 'Fabric-first improvements planned around the building you already have.' },
    ],
    projects: ['Garden house', 'Stone extension', 'Whole-home retrofit'],
    statement: 'Straightforward building, considered materials and fewer surprises.',
  },
];
