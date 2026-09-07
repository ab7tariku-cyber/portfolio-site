// Shared content data for the landing page and case-study template.
// Single source of truth so both pages stay in sync.

const TAB_LIST = [
  'Brand Identity',
  'Social Media',
  'Print & Editorial',
  'Interior Design & Visualization',
];

const WORK_DATA = [
  { tag: 'Charity', name: 'Nubia Designs', category: 'Brand Identity', slug: 'nubia', image: 'assets/hero-nubia.jpg', placeholder: 'Nubia Designs visual', hasCaseStudy: true },
  { tag: 'Real Estate', name: 'Godo Properties', category: 'Brand Identity', slug: 'godo-properties', image: 'assets/hero-godo.jpg', placeholder: 'Godo Properties visual', hasCaseStudy: true },
  { tag: 'Charity', name: 'LHC', category: 'Brand Identity', slug: 'lhc', image: 'assets/hero-lhc.jpg', placeholder: 'LHC visual', hasCaseStudy: true },
  { tag: 'Human Rights', name: 'HALE HRIN', category: 'Brand Identity', slug: 'hale', image: 'assets/hero-hale.jpg', placeholder: 'HALE HRIN visual', hasCaseStudy: true },
  { tag: 'Industrial', name: 'Lencho Stone Crusher', category: 'Brand Identity', slug: 'lencho', image: 'assets/hero-lencho.jpg', placeholder: 'Lencho Stone Crusher visual', hasCaseStudy: true },
  { name: 'Yotor Marketing', category: 'Social Media', slug: 'yotor-marketing', image: 'assets/hero-yotor-marketing.png', placeholder: 'Yotor Marketing post', hasCaseStudy: true },
  { name: 'GARA Missional Bootcamp', category: 'Social Media', slug: 'gara-missional-bootcamp', image: 'assets/hero-gara-missional-bootcamp.png', placeholder: 'GARA Missional Bootcamp post', hasCaseStudy: true },
  { name: 'Peace Campaign', category: 'Social Media', slug: 'peace-campaign', image: 'assets/hero-peace-campaign.png', placeholder: 'Peace Campaign post', hasCaseStudy: true },
  { name: 'Gospel Week', category: 'Social Media', slug: 'gospel-week', image: null, placeholder: 'Gospel Week post', hasCaseStudy: true },
  { name: 'HU Fellow Posts', category: 'Social Media', slug: 'hu-fellow-posts', image: 'assets/hero-hu-fellow-posts.png', placeholder: 'HU Fellow Posts', hasCaseStudy: true },
  { name: 'Church Posts', category: 'Social Media', slug: 'church-posts', image: 'assets/hero-church-posts.png', placeholder: 'Church Posts', hasCaseStudy: true },
  { name: 'African Holding Group — General Assembly', category: 'Print & Editorial', slug: 'ahg-general-assembly', image: null, placeholder: 'AHG General Assembly asset', hasCaseStudy: true },
  { name: 'Purity Magazine', category: 'Print & Editorial', slug: 'purity-magazine', image: null, placeholder: 'Purity Magazine spread', hasCaseStudy: true },
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
  { year: 'Jul 2024 – Sep 2024', org: 'HALE Inclusive Network', role: 'Digital Media Head & Social Media Manager' },
  { year: '2022 – Present', org: 'Independent / Freelance', role: 'Brand & Graphic Designer and Architect' },
  { year: 'Jan 2026 – Jul 2026', org: 'Great Commission Ministry Ethiopia', role: 'Digital Strategy Intern' },
  { year: 'Jul 2026 – Present', org: 'African Holding Group', role: 'Marketing Officer' },
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
  { slug: 'lencho', name: 'Lencho Stone Crusher', category: 'Branding', heroImage: 'assets/case-lencho-hero.jpg', gallery: Array.from({ length: 14 }, (_, i) => 'assets/case-lencho-mockup-' + String(i + 1).padStart(2, '0') + '.jpg'), headline: 'An industrial brand identity built for durability and scale.', overview1: 'Lencho Stone Crusher needed a mark and system that read as rugged and dependable across heavy equipment, signage, and print.', overview2: 'The identity leans into bold geometry and an industrial palette, built to hold up at any size from a hard hat sticker to a site banner.' },
  { slug: 'nubia', name: 'Nubia Designs', category: 'Branding', heroImage: 'assets/case-nubia-hero.jpg', gallery: Array.from({ length: 14 }, (_, i) => 'assets/case-nubia-mockup-' + String(i + 1).padStart(2, '0') + '.jpg'), headline: 'A brand identity built for a growing design venture.', overview1: 'Nubia Designs needed a mark that felt distinctive and premium from the very first touchpoint.', overview2: 'The system pairs a confident wordmark with a flexible visual language built to scale across print and digital.' },
  { slug: 'godo-properties', name: 'Godo Properties', category: 'Branding', heroImage: 'assets/case-godo-properties-hero.jpg', gallery: Array.from({ length: 12 }, (_, i) => 'assets/case-godo-properties-mockup-' + String(i + 1).padStart(2, '0') + '.jpg'), headline: 'A real estate brand identity built on trust and scale.', overview1: 'Godo Properties needed an identity that read as established and trustworthy to buyers and investors alike.', overview2: 'The mark and system carry across signage, marketing collateral, and digital touchpoints with the same confident tone.' },
  { slug: 'lhc', name: 'LHC', category: 'Branding', heroImage: 'assets/case-lhc-hero.jpg', gallery: Array.from({ length: 14 }, (_, i) => 'assets/case-lhc-mockup-' + String(i + 1).padStart(2, '0') + '.jpg'), headline: 'A charity brand identity for children in need.', overview1: 'LHC is a charity club dedicated to helping children in need. The identity had to carry warmth and hope while staying credible for donors and partners.', overview2: 'The system pairs a friendly mark with a warm palette, extended into a supporting pattern used across materials.' },

  // Below: case studies awaiting real photos. gallery is pre-sized to the
  // agreed mockup count (see the naming convention in README.md) so the
  // page shows exactly that many placeholder tiles instead of a generic
  // 13 — swap heroImage/gallery to real paths as files land in assets/.
  { slug: 'yotor-marketing', name: 'Yotor Marketing', category: 'Social Media', heroImage: 'assets/case-yotor-marketing-hero.png', gallery: Array.from({ length: 5 }, (_, i) => 'assets/case-yotor-marketing-mockup-' + String(i + 1).padStart(2, '0') + '.png'), headline: 'Marketing design for a church management platform.', overview1: 'Yotor is a church management system developed by Great Commission Ministry to help churches manage their communities, activities, and operations more efficiently. My role in the project focused on developing marketing and promotional designs that communicated the platform’s value in a clear and engaging way.', overview2: 'Through social media content and campaign visuals, I helped create a stronger and more consistent visual presence that made the technology more approachable to churches and their communities.' },
  { slug: 'gara-missional-bootcamp', name: 'GARA Missional Bootcamp', category: 'Social Media', heroImage: 'assets/case-gara-missional-bootcamp-hero.png', gallery: Array.from({ length: 5 }, (_, i) => 'assets/case-gara-missional-bootcamp-mockup-' + String(i + 1).padStart(2, '0') + '.png'), headline: 'Campaign identity for a youth mission training program.', overview1: 'GARA Missional Bootcamp is a skill-oriented training program developed by Great Commission Ethiopia to equip young people with practical skills and knowledge for mission and impact. I worked on creating visual communication materials that reflected the energy, purpose, and youth-focused nature of the program.', overview2: 'The designs helped build a recognizable campaign identity while making the program more engaging and accessible to its target audience.' },
  { slug: 'peace-campaign', name: 'Peace Campaign', category: 'Social Media', heroImage: 'assets/case-peace-campaign-hero.png', gallery: [
    'assets/case-peace-campaign-mockup-01.png',
    'assets/case-peace-campaign-mockup-02.png',
    'assets/case-peace-campaign-mockup-03.png',
    'assets/case-peace-campaign-mockup-04.png',
    'assets/case-peace-campaign-mockup-05.png',
    'assets/case-peace-campaign-mockup-06.png',
    'assets/case-peace-campaign-mockup-07.jpg',
    'assets/case-peace-campaign-mockup-08.jpg',
    'assets/case-peace-campaign-mockup-09.jpg',
    'assets/case-peace-campaign-mockup-10.jpg',
    'assets/case-peace-campaign-mockup-11.jpg',
    'assets/case-peace-campaign-mockup-12.jpg',
  ], galleryColumns: 2, galleryRatio: '4 / 5', headline: 'A campaign built on the idea that peace begins with our neighbours.', overview1: 'The Peace Campaign was developed around the central idea that peace begins with the people closest to us — our neighbours. The campaign used this concept to encourage stronger relationships, understanding, and peaceful coexistence within local communities, while supporting the idea of establishing and celebrating a dedicated Neighbours Day.', overview2: 'My design approach focused on transforming this simple but powerful message into engaging visual communication that could inspire conversation and community connection.' },
  { slug: 'gospel-week', name: 'Gospel Week', category: 'Social Media', heroImage: null, headline: 'Case study write-up coming soon.', overview1: 'Full project details for Gospel Week are in progress.', overview2: '', gallery: new Array(5) },
  { slug: 'hu-fellow-posts', name: 'HU Fellow Posts', category: 'Social Media', heroImage: 'assets/case-hu-fellow-posts-hero.png', gallery: Array.from({ length: 5 }, (_, i) => 'assets/case-hu-fellow-posts-mockup-' + String(i + 1).padStart(2, '0') + '.png'), headline: 'Creative work for the Hawassa University Fellowship community.', overview1: 'HU Fellow represents a collection of creative works developed for the Hawassa University Fellowship community. The project involved designing visual materials for different programs, activities, events, and communication needs.', overview2: "My work focused on creating engaging and relevant designs that connected with university students while maintaining a visual language that reflected the fellowship's identity, values, and youthful community." },
  { slug: 'church-posts', name: 'Church Posts', category: 'Social Media', heroImage: 'assets/case-church-posts-hero.png', gallery: Array.from({ length: 5 }, (_, i) => 'assets/case-church-posts-mockup-' + String(i + 1).padStart(2, '0') + '.png'), headline: 'Case study write-up coming soon.', overview1: 'Full project details for Church Posts are in progress.', overview2: '' },
  { slug: 'ahg-general-assembly', name: 'African Holding Group — General Assembly', category: 'Print', heroImage: null, headline: 'Case study write-up coming soon.', overview1: 'Full project details for the AHG General Assembly are in progress.', overview2: '', gallery: new Array(4) },
  { slug: 'purity-magazine', name: 'Purity Magazine', category: 'Print', heroImage: null, headline: 'Case study write-up coming soon.', overview1: 'Full project details for Purity Magazine are in progress.', overview2: '', gallery: new Array(4) },
  { slug: 'cafe-and-restaurant', name: 'Cafe and Restaurant', category: 'Interior Design', heroImage: null, headline: 'Case study write-up coming soon.', overview1: 'Full project details for this Cafe and Restaurant visualization are in progress.', overview2: '', gallery: new Array(8) },
  { slug: 'hotel-rooms', name: 'Hotel Rooms', category: 'Interior Design', heroImage: null, headline: 'Case study write-up coming soon.', overview1: 'Full project details for this Hotel Rooms visualization are in progress.', overview2: '', gallery: new Array(6) },
  { slug: 'podcast-studio', name: 'Podcast Studio', category: 'Interior Design', heroImage: null, headline: 'Case study write-up coming soon.', overview1: 'Full project details for this Podcast Studio visualization are in progress.', overview2: '', gallery: new Array(4) },
  { slug: 'show-room', name: 'Show Room', category: 'Interior Design', heroImage: null, headline: 'Case study write-up coming soon.', overview1: 'Full project details for this Show Room visualization are in progress.', overview2: '', gallery: new Array(6) },
];

const PROJECTS = {};
PROJECT_LIST.forEach((p) => { PROJECTS[p.slug] = p; });
const ALL_SLUGS = PROJECT_LIST.map((p) => p.slug);
