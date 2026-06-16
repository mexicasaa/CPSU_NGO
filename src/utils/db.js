/**
 * CSR & Educational India Foundation CMS Data Store
 * Handles client-side persistent storage (localStorage)
 * Supports Draft/Live states and role-based permissions
 */

// Initial Seed Data - exact match to the current static site contents
const INITIAL_SETTINGS = {
  phone: '+91 98106 00994',
  email: 'aumdcarya@gmail.com',
  address: 'B2A-102 Golflinks Residency\nSector 18 B, Dwarka New Delhi-110078',
  logo: '/logo.jpg', // path or base64
  socials: {
    facebook: '#',
    linkedin: 'https://linkedin.com',
    instagram: '#',
    youtube: '#'
  },
  seo: {
    metaTitle: 'CSR & Educational India Foundation',
    metaDesc: 'A citizen-led non-profit working on environment, education, livelihood and social cohesion across communities in India.',
    metaKeywords: 'NGO, CSR, India, Education, Environment, Livelihood, Social Reform, Dwarka, Delhi'
  }
};

const INITIAL_HOME_SECTIONS = {
  hero: {
    visible: true,
    eyebrow: 'INDIA | REGISTERED IN 2025 | A NON-PROFIT FOUNDATION',
    titleLine1: 'Towards a Greener, Healthier, Better-Educated,',
    titleItalic: 'Self-Sufficient',
    titleLine2: ' India',
    description: 'We inspire communities to build a cleaner environment, empower youth through education, and strengthen society through ethical values.',
    videoUrl: '/download.mp4',
    primaryCtaText: 'Donate Now',
    primaryCtaUrl: '/donate',
    secondaryCtaText: 'Join as Volunteer',
    secondaryCtaUrl: '/volunteer'
  },
  about: {
    visible: true,
    eyebrow: 'WHO WE ARE',
    title: 'A serious, human-centred foundation - not a slogan.',
    descParagraph1: 'Founded in 2025, CSR & Educational India Foundation works towards addressing critical social and environmental challenges through awareness, education, and community engagement.',
    descParagraph2: 'The foundation believes that true progress is achieved when society grows not only economically, but also morally, educationally, and environmentally. Through seminars, educational initiatives, social outreach programs, and collaborative efforts, the foundation aims to create meaningful and long-term impact for individuals, families, and future generations.',
    leaders: [
      {
        name: 'Sh Bajrang Bagra',
        role: 'Chairman',
        image: '/images/Bajrang Lal Bagra.jpg',
        bio: 'True development in India is achieved by blending professional and industrial excellence with deep-rooted cultural values, integrity, and cooperative social responsibility.',
        subtitle: 'Former CMD, NALCO • General Secretary, VHP'
      },
      {
        name: 'Sh D.C. Arya',
        role: 'Founder & Secretary',
        image: '/dc_arya_suit_v3.jpg',
        bio: 'True progress is built on pure air, clean minds, and ethical values. We must address not only environmental pollution, but also moral and social challenges.',
        subtitle: 'Former Chairman, NIRC-ICMAI • Former Director (Finance), IRFC'
      }
    ],
    timeline: [
      { year: '2025', title: 'Foundation Established', desc: 'Registered as a Section 8 non-profit with core ecological, educational, and livelihood focus areas aligned.' },
      { year: '2025', title: 'Sankalp & Hunar Pilot Initiatives', desc: 'Launched first grassroots student coaching centers and vocational livelihood modules.' },
      { year: '2026', title: 'Operations Scale-up', desc: 'Expansion of digital literacy libraries, local trade workshops, and Parivar Samvad dialogue circles.' }
    ]
  },
  stats: {
    visible: true,
    eyebrow: 'MEASURED IMPACT',
    title: 'Impact Updates',
    description: 'The foundation’s measurable impact data will be updated as programs and initiatives continue to expand. This section will showcase the outcomes, reach, and community impact created through our environmental, educational, and social initiatives.',
    items: [
      { num: '150+', label: 'Solar kits distributed' },
      { num: '200+', label: 'Policy roundtable youth' },
      { num: '5+', label: 'Focus areas active' },
      { num: '3+', label: 'Pilot program locations' },
      { num: '1000+', label: 'Trees planted' },
      { num: '0%', label: 'Overhead on field donations' }
    ]
  },
  testimonial: {
    visible: true,
    eyebrow: 'YOUTH INSPIRATION',
    title: 'Tarun Bidani Goyal',
    badge: 'Youth Icon',
    roleChips: ['Finance & Governance Specialist', 'CA • CMA'],
    quote: 'Young people are not just the future of the nation—they are the driving force behind positive change.',
    description: 'Tarun actively empowers India\'s youth to lead sustainable living, environmental conservation, and active nation-building. Combining finance and governance expertise, he inspires the next generation to protect our planet and communities.',
    image: '/images/Tarun_Bidani_Goyal_v2.jpg',
    ctaText: 'Read Leadership Profile',
    ctaUrl: '/leadership'
  },
  involved: {
    visible: true,
    eyebrow: 'GET INVOLVED',
    title: 'Three clear ways to join the work.',
    description: 'We believe in collaborative transformation. Choose the pathway that matches your goals and capacity to make an on-the-ground difference.',
    ways: [
      {
        num: '01',
        title: 'Donate',
        desc: "Fund a child's education, support a skill workshop, or sponsor a forest plantation drive.",
        cta: 'Donate Now',
        link: '/donate',
        image: '/education_classroom.png'
      },
      {
        num: '02',
        title: 'Volunteer',
        desc: 'Join us on the ground. Teach children, facilitate workshops, or join environmental cleanup drives.',
        cta: 'Volunteer',
        link: '/volunteer',
        image: '/environment_cleanup.png'
      },
      {
        num: '03',
        title: 'Corporate CSR',
        desc: 'Align your CSR mandate with transparent, measurable on-the-ground rural programs.',
        cta: 'Partner Us',
        link: '/partners',
        image: '/skill_workshop.png'
      }
    ]
  }
};

// Default section order on the homepage
const INITIAL_SECTION_ORDER = ['hero', 'about', 'focus', 'interviews', 'stats', 'testimonial', 'programs', 'gallery', 'involved', 'donation', 'blog'];

const INITIAL_MEDIA_ITEMS = [
  {
    id: 'media-0',
    title: 'Pollution Control Measures in Delhi State',
    category: 'seminar',
    date: 'May 2026',
    image: '/images/ngo_policy_meeting.jpg',
    desc: 'Meeting with Sh. Ashok Goel MLA, Model Town, regarding advancing Pollution Control Measures in Delhi.'
  },
  {
    id: 'media-1',
    title: 'Clean Solar Light Distribution Drive',
    category: 'field-work',
    date: 'February 2026',
    image: '/images/solar_light.png',
    desc: 'Distributed over 150 solar-powered home lighting kits in off-grid urban settlements to enhance safety and educational facilities.'
  },
  {
    id: 'media-2',
    title: 'Delhi Youth Environmental Policy Forum',
    category: 'press',
    date: 'April 2026',
    image: '/images/youth_forum.png',
    desc: 'Organized an environmental policy roundtable with 200+ students from Delhi schools, presenting climate action models to municipal leaders.'
  }
];

const INITIAL_PRESS_ITEMS = [
  {
    id: 'press-0',
    title: 'प्रदूषण मुक्त संसार ही स्वस्थ जीवन और विकास का आधार : डी.सी. आर्य',
    subtitle: 'स्मार्ट विजन समाचार • News Report',
    image: '/images/newspaper_clip_4.png',
    desc: 'D.C. Arya addresses the rising pollution challenges, emphasizing that environmental protection and pure air are essential for a healthy life and development.'
  },
  {
    id: 'press-1',
    title: 'Pollution-Free World: Basis of Life & Development',
    subtitle: 'द वुमन न्यूज • News Report',
    image: '/images/newspaper_clip_1.png',
    desc: 'Covering D.C. Arya\'s address on environmental restoration, AQI measures in cities, and the national "Ek Ped Maa Ke Naam" campaign.'
  },
  {
    id: 'press-2',
    title: 'Nature Protection Poster: हम हैं प्रकृति से, प्रकृति से हम',
    subtitle: 'Public Campaign Poster by Tarun Bidani',
    image: '/images/nature_poster.jpg',
    desc: 'A beautiful awareness poster conveying that humanity and nature are mutually dependent, featuring environmental preservation verses.'
  },
  {
    id: 'press-3',
    title: 'Air Quality & Civic Responsibility Editorial',
    subtitle: 'द वुमन न्यूज • Editorial',
    image: '/images/newspaper_clip_2.png',
    desc: 'A focused column detailing the direct impact of air pollution on human health, and recommendations like daily Yajna and planting indigenous trees.'
  },
  {
    id: 'press-4',
    title: 'Plantation & Irrigation Care Column',
    subtitle: 'द वुमन न्यूज • Press Column',
    image: '/images/newspaper_clip_3.png',
    desc: 'Focusing on the importance of not just planting, but regularly watering and caring for trees to ensure high survival rates.'
  }
];

const INITIAL_LEADERSHIP = {
  leaders: [
    {
      id: 'leader-0',
      name: 'Sh Bajrang Bagra',
      role: 'Chairman',
      bio: 'He served as the former Chairman and Managing Director (CMD) of the public sector undertaking, National Aluminium Company Limited (NALCO), and is the General Secretary (Mahamantri) of the Vishva Hindu Parishad (VHP).',
      image: '/images/Bajrang Lal Bagra.jpg',
      linkedin: 'https://linkedin.com',
      email: 'contact@csreduindia.org',
      visible: true
    },
    {
      id: 'leader-1',
      name: 'Sh D C Arya',
      role: 'Founder & Secretary',
      bio: 'A visionary leader dedicated to environmental awareness, education, and social responsibility. He has actively served as an elected Council Member and Former Chairman of the NIRC of the Institute of Cost Accountants of India (ICMAI).',
      image: '/dc_arya_suit_v3.jpg',
      linkedin: 'https://linkedin.com',
      email: 'dcarya@csreduindia.org',
      visible: true
    },
    {
      id: 'leader-2',
      name: 'Sh H N Sharma',
      role: 'Director',
      bio: 'He served as the trusted political secretary and advisor to the former Prime Minister of India, Chandra Shekhar, bringing decades of high-level social, political, and administrative expertise to the foundation.',
      image: '/images/HN Sharma.png',
      linkedin: 'https://linkedin.com',
      email: 'hnsharma@csreduindia.org',
      visible: true
    },
    {
      id: 'leader-3',
      name: 'Sh Balwinder Singh',
      role: 'Director',
      bio: 'He served as the President of the Institute of Cost Accountants of India (ICMAI). He regularly interfaces with senior union ministries and regulatory bodies in India to advocate for Cost Accountants in national audits and CSR spending social audits.',
      image: '/images/Dr. Bawindar Singh.jpg',
      linkedin: 'https://linkedin.com',
      email: 'contact@csreduindia.org',
      visible: true
    },
    {
      id: 'leader-4',
      name: 'Sh C S Nanda',
      role: 'Director',
      bio: 'He serves as the 73rd President of the Institute of Chartered Accountants of India (ICAI) for the 2025–26 term. He actively supports Indian regulatory bodies, serving as a Board Member of IRDAI and a member of SEBI\'s Primary Market Advisory Committee.',
      image: '/images/CS Nanda.jpg',
      linkedin: 'https://linkedin.com',
      email: 'contact@csreduindia.org',
      visible: true
    },
    {
      id: 'leader-5',
      name: 'Sh A K Tiwari',
      role: 'Director',
      bio: 'Shri Anjani Kumar Tiwari, currently serving as Member of the Petroleum and Natural Gas Regulatory Board (PNGRB), previously held the board-level position of Director (Finance) at GAIL (India) Limited, where he oversaw corporate financial strategy, investor relations, and overall fiscal management.',
      image: '/images/A K Tiwari.png',
      linkedin: 'https://linkedin.com',
      email: 'contact@csreduindia.org',
      visible: true
    },
    {
      id: 'leader-6',
      name: 'Sh Y P Bhola',
      role: 'Director',
      bio: 'A distinguished corporate leader who served as the Director of Finance at National Fertilizers Limited (NFL), a prominent Navratna CPSE under the Government of India, culminating a distinguished corporate career spanning nearly four decades.',
      image: '/images/Y P Bhola.jpg',
      linkedin: 'https://linkedin.com',
      email: 'ypbhola@csreduindia.org',
      visible: true
    },
    {
      id: 'leader-7',
      name: 'Sh Subhash Agrawal',
      role: 'Director',
      bio: 'A renowned RTI activist who previously served as a Director of Finance for the Cement Corporation of India, combining corporate financial governance with strong advocacy for organizational transparency and accountability.',
      image: '/images/Subhash C Agrawal.jpg',
      linkedin: 'https://linkedin.com',
      email: 'subhashagrawal@csreduindia.org',
      visible: true
    },
    {
      id: 'leader-8',
      name: 'Sh Sunil Singh',
      role: 'Director',
      bio: 'He has held major leadership positions within the Northern India Regional Council of the Institute of Cost Accountants of India (ICMAI), notably serving consecutive terms as the Chairman of NIRC-ICMAI (2017–18 and 2018–19).',
      image: '/images/Sunil Singh.png',
      linkedin: 'https://linkedin.com',
      email: 'contact@csreduindia.org',
      visible: true
    }
  ],
  advisors: [
    {
      id: 'advisor-0',
      name: 'Atul Gupta',
      role: 'Member',
      bio: 'He served as the President of the Institute of Chartered Accountants of India (ICAI) for the 2020–21 term and has served on multiple high-level government advisory bodies, including the Government Accounting Standards Advisory Board (GASAB) and the Audit Advisory Board.',
      image: '/images/Atul Gupta.jpg',
      linkedin: 'https://linkedin.com',
      email: 'contact@csreduindia.org',
      visible: true
    },
    {
      id: 'advisor-1',
      name: 'Vinod Chittora',
      role: 'Member',
      bio: 'A prominent member of the Institute of Cost Accountants of India (ICMAI) who has actively served the profession as the Past Chairman of the Jaipur Chapter of ICMAI.',
      image: '/images/Vinod Chittora.jpg',
      linkedin: 'https://linkedin.com',
      email: 'contact@csreduindia.org',
      visible: true
    },
    {
      id: 'advisor-2',
      name: 'Neeraj Kumar Pandey',
      role: 'Member',
      bio: 'He serves as a Senior Journalist at Hamara Metro Newspaper and Editor-in-Chief of NP News Metro. In his advisory role, he contributes expertise in journalism, public engagement, and community-focused communication.',
      image: '/images/neeraj_pandey.jpg',
      linkedin: 'https://linkedin.com',
      email: 'contact@csreduindia.org',
      visible: true
    }
  ]
};

const INITIAL_PROGRAMS = [
  {
    id: 'environmental-awareness',
    title: 'Environmental Awareness Seminars',
    category: 'Environment',
    image: '/environment_cleanup.png',
    shortDesc: 'The foundation organizes seminars and awareness campaigns focused on pollution control, environmental responsibility, public health, and sustainable living.',
    longDesc: '<p>Our <strong>Environmental Awareness Seminars</strong> are designed to address critical issues of air and water pollution, conservation, and health. We actively conduct awareness sessions, community discussions, and distribute practical guides to promote green living and sustainable habits across schools, resident associations, and public spaces.</p>',
    focus: 'Pollution Control, Environmental Responsibility, Public Health, Sustainable Living.',
    metrics: [
      { label: 'Seminars Conducted', value: '15+' },
      { label: 'Participants Reached', value: '1,500+' }
    ],
    volunteerRoles: ['Seminar Coordinator', 'Community Outreach Lead', 'Environmental Educator'],
    fundingNeed: 'Funds support educational materials, seminar venue organization, and awareness brochures.',
    visible: true
  },
  {
    id: 'educational-initiatives',
    title: 'Educational Initiatives',
    category: 'Education',
    image: '/education_classroom.png',
    shortDesc: 'We support programs that encourage learning, awareness, practical education, and knowledge sharing for individuals and communities.',
    longDesc: '<p>Education is the cornerstone of societal development. We partner with local institutions to run supplementary educational support sessions, distribute books and study aids, and emphasize value-driven learning that empowers both the mind and the character of students.</p>',
    focus: 'Practical Learning, Character Building, Student Empowerment, Knowledge Sharing.',
    metrics: [
      { label: 'Students Enrolled', value: '120+' },
      { label: 'Support Centers', value: '2' }
    ],
    volunteerRoles: ['After-School Educator', 'Reading Mentor', 'Curriculum Assistant'],
    fundingNeed: 'Covers costs of school supplies, books, learning aids, and classroom organization.',
    visible: true
  },
  {
    id: 'skill-development',
    title: 'Skill Development Programs',
    category: 'Skills & Livelihood',
    image: '/skill_workshop.png',
    shortDesc: 'The foundation promotes vocational and professional training initiatives aimed at improving employability and self-reliance.',
    longDesc: '<p>We believe true empowerment is built upon self-reliance. Our vocational training focus is dedicated to delivering professional and technical skills—ranging from digital literacy to vocational crafts—which help youth and women secure local employment or launch self-sustained initiatives.</p>',
    focus: 'Vocational Training, Digital Literacy, Professional Readiness, Economic Self-Reliance.',
    metrics: [
      { label: 'Vocational Cohorts', value: '4' },
      { label: 'Self-Reliant Graduates', value: '45+' }
    ],
    volunteerRoles: ['Vocational Trainer', 'Resume Coach', 'Tech Skills Instructor'],
    fundingNeed: 'Covers training equipment, digital tools, certifications, and career counseling sessions.',
    visible: true
  },
  {
    id: 'community-outreach',
    title: 'Community Outreach Activities',
    category: 'Community Outreach',
    image: '/family_community.png',
    shortDesc: 'We engage with communities through awareness drives, social initiatives, discussions, and collaborative programs that encourage positive social impact.',
    longDesc: '<p>Our community outreach programs bring together individuals, resident welfare groups, and local leaders to collaborate on community-led challenges. From health and hygiene drives to eldercare assistance, we foster family harmony, ethical values, and mutual support across all neighborhoods.</p>',
    focus: 'Social Harmony, Family Values, Eldercare Assistance, Collaborative Action.',
    metrics: [
      { label: 'Outreach Drives', value: '12+' },
      { label: 'Communities Served', value: '5+' }
    ],
    volunteerRoles: ['Community Coordinator', 'Eldercare Assistant', 'Event Organizer'],
    fundingNeed: 'Underwrites costs of local gatherings, outreach materials, health resources, and neighborhood campaign tools.',
    visible: true
  }
];

const INITIAL_FOCUS_AREAS = [
  {
    id: 'focus-0',
    num: '01',
    tag: 'ENVIRONMENT',
    title: 'Environment Protection',
    desc: 'Promoting awareness regarding pollution, clean air, water conservation, and sustainable living practices.',
    image: '/environment_cleanup.png'
  },
  {
    id: 'focus-1',
    num: '02',
    tag: 'EDUCATION',
    title: 'Education & Awareness',
    desc: 'Supporting initiatives that encourage knowledge, awareness, practical learning, and character development.',
    image: '/education_classroom.png'
  },
  {
    id: 'focus-2',
    num: '03',
    tag: 'LIVELIHOOD',
    title: 'Skill Development',
    desc: 'Encouraging vocational and professional training programs that build self-reliance and career readiness.',
    image: '/skill_workshop.png'
  },
  {
    id: 'focus-3',
    num: '04',
    tag: 'SOCIAL REFORM',
    title: 'Social Reform & Values',
    desc: 'Working towards a value-driven society by promoting ethics, social harmony, and positive family values.',
    image: '/family_community.png'
  },
  {
    id: 'focus-4',
    num: '05',
    tag: 'YOUTH EMPOWERMENT',
    title: 'Youth Empowerment',
    desc: 'Guiding young individuals towards leadership, responsibility, discipline, and community contribution.',
    image: '/images/seminar.png'
  }
];

const INITIAL_CAREERS = [
  {
    id: 'career-0',
    title: 'Volunteer Programs',
    desc: 'Engage on the ground in our environmental campaigns, educational initiatives, or community outreach drives.',
    icon: 'volunteer',
    visible: true
  },
  {
    id: 'career-1',
    title: 'Internship Opportunities',
    desc: 'Gain practical experience in social sector operations, field coordination, and community engagement structures.',
    icon: 'internship',
    visible: true
  },
  {
    id: 'career-2',
    title: 'Community Outreach Support',
    desc: 'Work directly with resident associations and local leaders to organize social welfare and value-driven initiatives.',
    icon: 'outreach',
    visible: true
  },
  {
    id: 'career-3',
    title: 'Social Media & Communication Assistance',
    desc: 'Help write compelling copy, design visual posts, capture event photography, and amplify public awareness campaigns.',
    icon: 'media',
    visible: true
  },
  {
    id: 'career-4',
    title: 'Event Coordination',
    desc: 'Structure, coordinate, and execute environmental seminars, vocational workshops, and public outreach events.',
    icon: 'event',
    visible: true
  },
  {
    id: 'career-5',
    title: 'Research & Awareness Initiatives',
    desc: 'Conduct surveys and research on pollution control, educational requirements, and social values to inform our strategy.',
    icon: 'research',
    visible: true
  }
];

const INITIAL_PARTNERS = {
  models: [
    {
      id: 'model-0',
      title: 'CSR Program Sponsorship',
      desc: 'Deploy corporate capital directly into structured, Section-135-compliant programs. Sponsor complete water filter clusters, school upgrades, or Delhi-NCR clean-air monitoring campaigns.',
      icon: 'shield'
    },
    {
      id: 'model-1',
      title: 'Employee Volunteering & Service',
      desc: 'Align your workforce with meaningful grassroots action. Engage employee cohorts in plantation festivals, plastic clean-up drives, or teaching guest-lectures at our digital literacy labs.',
      icon: 'users'
    },
    {
      id: 'model-2',
      title: 'Technology & Material Support',
      desc: 'Contribute necessary industrial and technological assets. Sponsor computers, sewing machines, high-capacity water filters, air sensors, or mature sapling protective guards.',
      icon: 'monitor'
    },
    {
      id: 'model-3',
      title: 'Long-Term Co-Developed Initiatives',
      desc: 'Co-design custom socio-ecological initiatives tailored to your organization’s mandate. We build custom, long-term roadmaps with continuous reporting and deep community ownership.',
      icon: 'edit'
    }
  ],
  benefits: [
    {
      id: 'benefit-0',
      title: '80G Tax Benefits',
      desc: 'All corporate donations are issued quick, formal tax certificates under Section 80G, maximizing tax deductions.'
    },
    {
      id: 'benefit-1',
      title: 'Comprehensive Audits',
      desc: 'Receive photographic field reports, receipt balance sheets, and impact scorecards ready for corporate audits.'
    },
    {
      id: 'benefit-2',
      title: 'Section 135 Compliance',
      desc: 'Our administrative transparency guarantees zero legal friction for statutory corporate social expenditures.'
    },
    {
      id: 'benefit-3',
      title: 'Public Credibility',
      desc: 'Prominent, tasteful co-branding placement on community water filtration setups, air sensors, and public materials.'
    }
  ]
};

const INITIAL_STORIES = [
  {
    id: 'pollution-awareness',
    title: 'Pollution Control Measures in Delhi State',
    subtitle: 'Advancing ecological policy for pure air',
    author: 'D.C. Arya',
    date: 'May 20, 2026',
    category: 'Environment',
    image: '/images/ngo_policy_meeting.jpg',
    summary: 'Tarun Bidani and D.C. Arya meet with Ashok Goel MLA to discuss policy measures, AQI monitoring, and community tree plantation programs.',
    content: `<h3>Collaborative Dialogue for a Cleaner Delhi</h3>
<p>In a major step forward for local environmental action, key leaders of the CSR & Educational India Foundation met with Sh. Ashok Goel MLA of Model Town, Delhi. The dialogue focused on identifying high-pollution zones, deploying low-cost ambient air sensors, and organizing targeted tree plantation drives.</p>
<blockquote>"We cannot wait for global policies. Local communities and local municipal systems must act now to plant trees and filter our water." — D.C. Arya</blockquote>
<p>The foundation proposed a model where local resident welfare associations actively care for new saplings, raising survival rates to over 90%. Additionally, the foundation is planning student workshops across Delhi schools to educate children on AQI indices, practical recycling habits, and health precautions during severe air episodes.</p>`,
    visible: true
  },
  {
    id: 'sankalp-2025',
    title: 'Sankalp 2025: Supporting Educational Centers',
    subtitle: 'Free coaching and mentorship modules in Dwarka',
    author: 'Sunil Singh',
    date: 'December 15, 2025',
    category: 'Education',
    image: '/education_classroom.png',
    summary: 'Announcing our supplementary educational clusters helping underprivileged students with studies and value-driven learning.',
    content: `<h3>Bridging the Learning Gap</h3>
<p>Sankalp 2025 is our flagship initiative designed to provide high-quality supplementary education to students who lack access to private tutoring. Operating out of community centers, the program focuses on Math, Science, and English, taught by volunteer educators and senior students.</p>
<p>In addition to standard curriculum work, Sankalp integrates strong character-building sessions, emphasizing ethical values, cleanliness, civic responsibility, and respect for nature. We believe that true education shapes both the intellect and the character of a person.</p>
<p>With support from local contributors, the foundation provides free study kits, including books, stationery, and geometry sets, ensuring that financial barriers do not stop a child from learning.</p>`,
    visible: true
  },
  {
    id: 'hunar-workshops',
    title: 'Hunar Vocational Skill Development Workshops',
    subtitle: 'Fostering digital literacy and self-reliance for youth',
    author: 'Bajrang Lal Bagra',
    date: 'January 10, 2026',
    category: 'Skills & Livelihood',
    image: '/skill_workshop.png',
    summary: 'A look at our vocational training schedules empowering women and youth with technical skills for local employment.',
    content: `<h3>Empowering Through Self-Reliance</h3>
<p>Under the Hunar banner, the foundation organizes vocational cohorts targeting digital literacy, financial coordination, and local tailoring crafts. The goal is to make candidates self-reliant within 3 to 6 months of training.</p>
<p>The digital literacy modules teach basic computer operations, document formatting, email communication, and online transaction handling. These fundamental skills open opportunities for data entry, retail billing, and administrative support roles.</p>
<p>By partnering with local industry leaders, we also organize career readiness workshops, help candidates prepare resumes, and set up mock interviews to build corporate confidence.</p>`,
    visible: true
  }
];

const INITIAL_DB = {
  settings: INITIAL_SETTINGS,
  homeSections: INITIAL_HOME_SECTIONS,
  sectionOrder: INITIAL_SECTION_ORDER,
  mediaItems: INITIAL_MEDIA_ITEMS,
  pressItems: INITIAL_PRESS_ITEMS,
  leadership: INITIAL_LEADERSHIP,
  programs: INITIAL_PROGRAMS,
  focusAreas: INITIAL_FOCUS_AREAS,
  careers: INITIAL_CAREERS,
  partners: INITIAL_PARTNERS,
  stories: INITIAL_STORIES
};

// Storage Keys
const KEY_LIVE = 'cpsu_live_db_v2';
const KEY_DRAFT = 'cpsu_draft_db_v2';

// Initial Load and Setup
const loadFromStorage = (key) => {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    console.error('Error reading from localStorage', e);
    return null;
  }
};

const saveToStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error('Error writing to localStorage', e);
  }
};

// Ensure databases are initialized
let liveDb = loadFromStorage(KEY_LIVE);
let draftDb = loadFromStorage(KEY_DRAFT);

if (!liveDb) {
  liveDb = JSON.parse(JSON.stringify(INITIAL_DB));
  saveToStorage(KEY_LIVE, liveDb);
}
if (!draftDb) {
  draftDb = JSON.parse(JSON.stringify(INITIAL_DB));
  saveToStorage(KEY_DRAFT, draftDb);
}

// Database Manager Instance
export const db = {
  // Check if we have draft changes that are unpublished
  hasChanges() {
    try {
      const liveStr = localStorage.getItem(KEY_LIVE) || '';
      const draftStr = localStorage.getItem(KEY_DRAFT) || '';
      return liveStr !== draftStr;
    } catch (e) {
      return false;
    }
  },

  // Publish all drafts to live
  publish(role) {
    if (role !== 'Administrator') {
      throw new Error('Unauthorized: Only Administrators can publish live changes.');
    }
    const currentDraft = loadFromStorage(KEY_DRAFT);
    if (currentDraft) {
      saveToStorage(KEY_LIVE, currentDraft);
      liveDb = currentDraft;
      return { success: true, message: 'All changes have been successfully published live!' };
    }
    return { success: false, message: 'No draft data found.' };
  },

  // Discard all drafts and reset to live
  discard() {
    const currentLive = loadFromStorage(KEY_LIVE);
    if (currentLive) {
      saveToStorage(KEY_DRAFT, currentLive);
      draftDb = currentLive;
      return { success: true, message: 'Draft changes discarded. Reset to live version.' };
    }
    return { success: false, message: 'No live data found to reset.' };
  },

  // Generic Get database state (live vs draft)
  getDb(isPreview) {
    return isPreview ? loadFromStorage(KEY_DRAFT) : loadFromStorage(KEY_LIVE);
  },

  // Generic Update draft database
  updateDraft(updater) {
    const draft = loadFromStorage(KEY_DRAFT) || JSON.parse(JSON.stringify(INITIAL_DB));
    updater(draft);
    saveToStorage(KEY_DRAFT, draft);
    draftDb = draft;
  },

  // ==========================================
  // SECTION: GLOBAL SETTINGS
  // ==========================================
  getSettings(isPreview) {
    return this.getDb(isPreview).settings || INITIAL_SETTINGS;
  },

  saveSettings(data) {
    this.updateDraft(draft => {
      draft.settings = { ...draft.settings, ...data };
    });
  },

  // ==========================================
  // SECTION: HOME SECTIONS
  // ==========================================
  getHomeSection(sectionName, isPreview) {
    const dbState = this.getDb(isPreview);
    return dbState.homeSections[sectionName] || INITIAL_HOME_SECTIONS[sectionName];
  },

  saveHomeSection(sectionName, data) {
    this.updateDraft(draft => {
      draft.homeSections[sectionName] = { ...draft.homeSections[sectionName], ...data };
    });
  },

  getHomeSectionOrder(isPreview) {
    return this.getDb(isPreview).sectionOrder || INITIAL_SECTION_ORDER;
  },

  saveHomeSectionOrder(order) {
    this.updateDraft(draft => {
      draft.sectionOrder = order;
    });
  },

  // ==========================================
  // SECTION: MEDIA PAGE
  // ==========================================
  getMediaItems(isPreview) {
    return this.getDb(isPreview).mediaItems || INITIAL_MEDIA_ITEMS;
  },

  saveMediaItems(items) {
    this.updateDraft(draft => {
      draft.mediaItems = items;
    });
  },

  getPressItems(isPreview) {
    return this.getDb(isPreview).pressItems || INITIAL_PRESS_ITEMS;
  },

  savePressItems(items) {
    this.updateDraft(draft => {
      draft.pressItems = items;
    });
  },

  // ==========================================
  // SECTION: LEADERSHIP PAGE
  // ==========================================
  getLeadership(isPreview) {
    return this.getDb(isPreview).leadership || INITIAL_LEADERSHIP;
  },

  saveLeadership(data) {
    this.updateDraft(draft => {
      draft.leadership = data;
    });
  },

  // ==========================================
  // SECTION: PROGRAMS & FOCUS AREAS
  // ==========================================
  getPrograms(isPreview) {
    return this.getDb(isPreview).programs || INITIAL_PROGRAMS;
  },

  savePrograms(programs) {
    this.updateDraft(draft => {
      draft.programs = programs;
    });
  },

  getFocusAreas(isPreview) {
    return this.getDb(isPreview).focusAreas || INITIAL_FOCUS_AREAS;
  },

  saveFocusAreas(focusAreas) {
    this.updateDraft(draft => {
      draft.focusAreas = focusAreas;
    });
  },

  // ==========================================
  // SECTION: CAREER & VOLUNTEERING LISTINGS
  // ==========================================
  getCareers(isPreview) {
    return this.getDb(isPreview).careers || INITIAL_CAREERS;
  },

  saveCareers(careers) {
    this.updateDraft(draft => {
      draft.careers = careers;
    });
  },

  // ==========================================
  // SECTION: PARTNERS PAGE DATA
  // ==========================================
  getPartners(isPreview) {
    return this.getDb(isPreview).partners || INITIAL_PARTNERS;
  },

  savePartners(partners) {
    this.updateDraft(draft => {
      draft.partners = partners;
    });
  },

  // ==========================================
  // SECTION: BLOG / STORIES ENGINE
  // ==========================================
  getStories(isPreview) {
    return this.getDb(isPreview).stories || INITIAL_STORIES;
  },

  saveStories(stories) {
    this.updateDraft(draft => {
      draft.stories = stories;
    });
  },

  getStoryById(id, isPreview) {
    const stories = this.getStories(isPreview);
    return stories.find(s => s.id === id) || null;
  }
};

// ==========================================
// UTILITY: CLIENT SIDE CANVAS IMAGE COMPRESSION
// ==========================================
export const compressImage = (file, maxWidth = 800, maxHeight = 800, quality = 0.7) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        // Calculate aspect ratio resizing
        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        // Compress and resolve as JPEG data URL
        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(dataUrl);
      };
      img.onerror = (err) => reject(err);
    };
    reader.onerror = (err) => reject(err);
  });
};
