// Shared content data for the landing page and case-study template.
// Single source of truth so both pages stay in sync.

const TAB_LIST = [
  'Brand Identity',
  'Social Media',
  'Print & Editorial',
  'Brand Applications',
  'Interior Design & Visualization',
];

const WORK_DATA = [
  { tag: 'Charity', name: 'Nubia Designs', category: 'Brand Identity', slug: 'nubia', image: 'assets/hero-nubia.jpg', placeholder: 'Nubia Designs visual', hasCaseStudy: true },
  { tag: 'Real Estate', name: 'Godo Properties', category: 'Brand Identity', slug: 'godo-properties', image: 'assets/hero-godo.jpg', placeholder: 'Godo Properties visual', hasCaseStudy: true },
  { tag: 'Charity', name: 'LHC', category: 'Brand Identity', slug: 'lhc', image: 'assets/hero-lhc.jpg', placeholder: 'LHC visual', hasCaseStudy: true },
  { tag: 'Human Rights', name: 'HALE HRIN', category: 'Brand Identity', slug: 'hale', image: 'assets/hero-hale.jpg', placeholder: 'HALE HRIN visual', hasCaseStudy: true },
  { name: 'Yotor Marketing', category: 'Social Media', slug: 'yotor-marketing', image: null, placeholder: 'Yotor Marketing post', hasCaseStudy: true },
  { name: 'Gara Missional Bootcamp', category: 'Social Media', slug: 'gara-missional-bootcamp', image: null, placeholder: 'Gara Missional Bootcamp post', hasCaseStudy: true },
  { name: 'Peace Campaign', category: 'Social Media', slug: 'peace-campaign', image: null, placeholder: 'Peace Campaign post', hasCaseStudy: true },
  { name: 'HU Fellow Works', category: 'Social Media', slug: 'hu-fellow-works', image: null, placeholder: 'HU Fellow Works post', hasCaseStudy: true },
  { name: 'African Holding Group — General Assembly', category: 'Print & Editorial', slug: 'ahg-general-assembly', image: null, placeholder: 'AHG General Assembly asset', hasCaseStudy: true },
  { name: 'Purity Magazine', category: 'Print & Editorial', slug: 'purity-magazine', image: null, placeholder: 'Purity Magazine spread', hasCaseStudy: true },
  { name: 'African Holding Group — Stationery', category: 'Brand Applications', slug: 'ahg-stationery', image: null, placeholder: 'AHG stationery design', hasCaseStudy: true },
  { name: 'African Holding Group — Sales Uniform', category: 'Brand Applications', slug: 'ahg-uniform', image: 'assets/work-uniform.jpg', placeholder: 'Uniform design', hasCaseStudy: true },
  { name: 'Cafe and Restaurant', category: 'Interior Design & Visualization', slug: 'cafe-and-restaurant', image: null, placeholder: 'Cafe and restaurant visualization', hasCaseStudy: true },
  { name: 'Hotel Rooms', category: 'Interior Design & Visualization', slug: 'hotel-rooms', image: null, placeholder: 'Hotel rooms visualization', hasCaseStudy: true },
  { name: 'Podcast Studio', category: 'Interior Design & Visualization', slug: 'podcast-studio', image: null, placeholder: 'Podcast studio visualization', hasCaseStudy: true },
  { name: 'Show Room', category: 'Interior Design & Visualization', slug: 'show-room', image: null, placeholder: 'Show room visualization', hasCaseStudy: true },
];

const STATS = [
  { value: '20+', label: 'Projects delivered' },
  { value: '4.9/5', label: 'Client rating' },
  { value: '10 Day', label: 'Avg turnaround' },
];

const ROADMAP = [
  { year: 'Present', org: 'HALE Inclusive Network', role: 'Digital Media Head & Social Media Manager' },
  { year: '2024', org: 'Independent / Freelance', role: 'Brand & Graphic Designer' },
  { year: '2023', org: 'Great Commission Ministry Ethiopia', role: 'Digital Strategy Intern' },
  { year: '2022', org: 'African Holding Group', role: 'Marketing Officer' },
];

const SKILLS = [
  'Logo & mark design',
  'Brand identity systems',
  'Social media & print graphics',
  'Signage & merchandise',
];

const TOOLS = [
  { code: 'Ai', name: 'Adobe Illustrator' },
  { code: 'Ps', name: 'Adobe Photoshop' },
  { code: 'Id', name: 'Adobe InDesign' },
  { code: 'Pr', name: 'Adobe Premiere' },
];

const GUARANTEE_POINTS = [
  { title: 'Free discovery sprint', body: "I map your positioning and audience before any contract is signed." },
  { title: 'Pay after the first concept', body: 'You see real design direction before committing a dollar.' },
  { title: 'Unlimited revisions in scope', body: 'I keep refining until the identity feels unmistakably yours.' },
];

const TESTIMONIALS = [
  { quote: 'He gave our organization an identity that finally felt like us, not a template with our name on it.', name: 'Bethelhem G.', role: 'Program Lead, Nubia Designs' },
  { quote: 'Every symbol in the mark had a reason. It made the whole network feel unified for the first time.', name: 'Yonas M.', role: 'Coordinator, HALE' },
  { quote: 'The union finally has a mark that feels like it belongs to the students who use it.', name: 'Selam T.', role: 'Chairperson, HUSU' },
];

const SOCIAL_LINKS = [
  { label: 'Telegram', href: 'https://t.me/ab7tariku', icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M21.05 3.87 2.9 10.98c-1.24.5-1.23 1.2-.23 1.5l4.65 1.45 1.8 5.6c.22.6.36.84.73.84.28 0 .4-.13.56-.29l2.1-2.03 4.37 3.23c.8.45 1.38.22 1.58-.74l2.86-13.5c.3-1.2-.45-1.7-1.27-1.17Zm-11.3 10.1-1.9-.6L17.6 7.4c.32-.2.61-.09.35.15l-8.2 6.42Z"/></svg>' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abraham-tariku7', icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M4.98 3.5C4.98 4.6 4.13 5.5 3 5.5S1 4.6 1 3.5 1.9 1.5 3 1.5s1.98.9 1.98 2ZM1.5 8.24h3V22h-3V8.24Zm6 0h2.88v1.88h.04c.4-.76 1.4-1.56 2.88-1.56 3.08 0 3.65 2.03 3.65 4.66V22h-3v-6.4c0-1.53-.03-3.5-2.13-3.5-2.14 0-2.47 1.67-2.47 3.4V22h-3V8.24Z"/></svg>' },
  { label: 'Behance', href: 'https://www.behance.net/abrahamtariku', icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M7.8 12.16c1-.44 1.6-1.3 1.6-2.62 0-2.36-1.7-3.3-3.87-3.3H0v13.6h5.85c2.4 0 4.5-1.02 4.5-3.7 0-1.68-.83-2.7-2.55-3ZM2.7 8.4h2.55c1.03 0 1.95.28 1.95 1.5 0 1.1-.75 1.6-1.87 1.6H2.7V8.4Zm2.95 9.2H2.7v-3.5h3.02c1.25 0 2.14.53 2.14 1.75 0 1.28-1 1.75-2.2 1.75ZM24 14.55c0-2.9-1.7-5.35-4.83-5.35-3.05 0-5.14 2.3-5.14 5.35 0 3.1 1.98 5.3 5.17 5.3 2.28 0 3.9-1 4.63-3.14h-2.34c-.24.68-1.05 1.1-2.15 1.1-1.5 0-2.35-.9-2.5-2.34h7.13c.02-.3.03-.6.03-.92Zm-7.14-1.4c.15-1.2 1-1.94 2.2-1.94 1.15 0 1.95.78 2.03 1.94h-4.23ZM13.9 5.3h5.55v1.4H13.9V5.3Z"/></svg>' },
];

// Case-study projects, in "next project" cycle order.
// heroImage is intentionally null for all of these: the case-study hero is a
// dedicated shot, not a reuse of the work-grid thumbnail. Drop a per-project
// file in assets/ and set heroImage to its path once available.
const PROJECT_LIST = [
  { slug: 'hale', name: 'HALE HRIN', category: 'Branding', heroImage: 'assets/case-hale-hero.jpg', gallery: Array.from({ length: 13 }, (_, i) => 'assets/case-hale-mockup-' + String(i + 1).padStart(2, '0') + '.jpg'), headline: 'A human rights and inclusion network identity.', overview1: 'HALE: Human Rights and Inclusion Network (H-HRIN) is a board-led CSO in Ethiopia advancing access to justice, gender equality, child and labor rights, disability inclusion, cultural rights, and environmental sustainability.', overview2: 'The mark combines a running kid symbolizing empowerment, a carrying hand representing unity and support, and a green leaf signifying environmental sustainability and growth.' },
  { slug: 'nubia', name: 'Nubia Designs', category: 'Branding', heroImage: 'assets/case-nubia-hero.jpg', gallery: Array.from({ length: 14 }, (_, i) => 'assets/case-nubia-mockup-' + String(i + 1).padStart(2, '0') + '.jpg'), headline: 'A brand identity built for a growing design venture.', overview1: 'Nubia Designs needed a mark that felt distinctive and premium from the very first touchpoint.', overview2: 'The system pairs a confident wordmark with a flexible visual language built to scale across print and digital.' },
  { slug: 'godo-properties', name: 'Godo Properties', category: 'Branding', heroImage: 'assets/case-godo-properties-hero.jpg', gallery: Array.from({ length: 12 }, (_, i) => 'assets/case-godo-properties-mockup-' + String(i + 1).padStart(2, '0') + '.jpg'), headline: 'A real estate brand identity built on trust and scale.', overview1: 'Godo Properties needed an identity that read as established and trustworthy to buyers and investors alike.', overview2: 'The mark and system carry across signage, marketing collateral, and digital touchpoints with the same confident tone.' },
  { slug: 'lhc', name: 'LHC', category: 'Branding', heroImage: null, headline: 'A charity brand identity for children in need.', overview1: 'LHC is a charity club dedicated to helping children in need. The identity had to carry warmth and hope while staying credible for donors and partners.', overview2: 'The system pairs a friendly mark with a warm palette, extended into a supporting pattern used across materials.' },
  { slug: 'ahg-uniform', name: 'African Holding Group Sales Uniform', category: 'Merchandise', heroImage: 'assets/uniform-hero.jpg', headline: 'More than a uniform, this concept was designed as a wearable extension of the brand.', overview1: "For African Holding Group's sales team, I created a visual system that balances professionalism, cultural character, and everyday comfort.", overview2: 'Sage green, bold black, tailored silhouettes, heritage-inspired geometric details, and signature gold accessories come together to create a confident and recognizable identity — ensuring the team looks unified while allowing flexibility and individual expression.', gallery: ['assets/uniform-detail-1.jpg', 'assets/uniform-detail-2.jpg'] },

  // Below: case studies awaiting real photos. gallery is pre-sized to the
  // agreed mockup count (see the naming convention in README.md) so the
  // page shows exactly that many placeholder tiles instead of a generic
  // 13 — swap heroImage/gallery to real paths as files land in assets/.
  { slug: 'yotor-marketing', name: 'Yotor Marketing', category: 'Social Media', heroImage: null, headline: 'Case study write-up coming soon.', overview1: 'Full project details for Yotor Marketing are in progress.', overview2: '', gallery: new Array(3) },
  { slug: 'gara-missional-bootcamp', name: 'Gara Missional Bootcamp', category: 'Social Media', heroImage: null, headline: 'Case study write-up coming soon.', overview1: 'Full project details for Gara Missional Bootcamp are in progress.', overview2: '', gallery: new Array(3) },
  { slug: 'peace-campaign', name: 'Peace Campaign', category: 'Social Media', heroImage: null, headline: 'Case study write-up coming soon.', overview1: 'Full project details for the Peace Campaign are in progress.', overview2: '', gallery: new Array(3) },
  { slug: 'hu-fellow-works', name: 'HU Fellow Works', category: 'Social Media', heroImage: null, headline: 'Case study write-up coming soon.', overview1: 'Full project details for HU Fellow Works are in progress.', overview2: '', gallery: new Array(3) },
  { slug: 'ahg-general-assembly', name: 'African Holding Group — General Assembly', category: 'Print', heroImage: null, headline: 'Case study write-up coming soon.', overview1: 'Full project details for the AHG General Assembly are in progress.', overview2: '', gallery: new Array(4) },
  { slug: 'purity-magazine', name: 'Purity Magazine', category: 'Print', heroImage: null, headline: 'Case study write-up coming soon.', overview1: 'Full project details for Purity Magazine are in progress.', overview2: '', gallery: new Array(4) },
  { slug: 'ahg-stationery', name: 'African Holding Group — Stationery', category: 'Stationery', heroImage: null, headline: 'Case study write-up coming soon.', overview1: 'Full project details for AHG Stationery are in progress.', overview2: '', gallery: new Array(3) },
  { slug: 'cafe-and-restaurant', name: 'Cafe and Restaurant', category: 'Interior Design', heroImage: null, headline: 'Case study write-up coming soon.', overview1: 'Full project details for this Cafe and Restaurant visualization are in progress.', overview2: '', gallery: new Array(8) },
  { slug: 'hotel-rooms', name: 'Hotel Rooms', category: 'Interior Design', heroImage: null, headline: 'Case study write-up coming soon.', overview1: 'Full project details for this Hotel Rooms visualization are in progress.', overview2: '', gallery: new Array(6) },
  { slug: 'podcast-studio', name: 'Podcast Studio', category: 'Interior Design', heroImage: null, headline: 'Case study write-up coming soon.', overview1: 'Full project details for this Podcast Studio visualization are in progress.', overview2: '', gallery: new Array(4) },
  { slug: 'show-room', name: 'Show Room', category: 'Interior Design', heroImage: null, headline: 'Case study write-up coming soon.', overview1: 'Full project details for this Show Room visualization are in progress.', overview2: '', gallery: new Array(6) },
];

const PROJECTS = {};
PROJECT_LIST.forEach((p) => { PROJECTS[p.slug] = p; });
const ALL_SLUGS = PROJECT_LIST.map((p) => p.slug);
