import { Project, ServiceItem, PillarItem, StatItem, TimelineMilestone, SkillCategory, ValueProposition } from './types';

export const FAIZAN_LOGO = "/faizan-cutout.png";
export const FAIZAN_PORTRAIT = "/faizan-cutout.png";
export const CYBER_UI_PREVIEW = "https://lh3.googleusercontent.com/aida-public/AB6AXuCuPuwCIWalekIsrkErIASYf1FQ2QloIpjnO9uPAsTWQ77WGUH_Y97Hh7oX8FMb45I-Jss3kBtE1RgL3YJmWHQUicK1IKsOYiGMbDEUn185w5OLHHtfQ1dDSYBoUY93VGteeJMNUyLPXahuTnfMDKMl9tSVAIdDe0HcDI2W7Ba2cmKsWfTA-bysPNL4BrQrDgmNWtJwrlAkl5v2hRlQwc3ZC1QfXtfCbROOsVRqtmyy_ZvPsoXo9dr9";

export const PERSONAL_INFO = {
  name: "Faizan Jutt",
  brand: "Faizan Evolution",
  brandTagline: "We Build. You Evolve.",
  portrait: FAIZAN_PORTRAIT,
  avatar: FAIZAN_PORTRAIT,
  role: "Full Stack Web Developer • SEO Expert",
  tagline: "Building Modern Digital Experiences with Innovation, Creativity & Technology.",
  whoIAm: "Hi! I'm Faizan Jutt, a passionate developer and creative professional dedicated to designing high-quality digital experiences. I specialize in building fast, modern, and user-friendly websites, web applications, AI-powered solutions, and creative visual content. My mission is simple: Turn ideas into professional digital products that make an impact.",
  bio: "Hi! I'm Faizan Jutt, a passionate developer and creative professional dedicated to designing high-quality digital experiences. I specialize in building fast, modern, and user-friendly websites, web applications, AI-powered solutions, and creative visual content.",
  simpleMission: "Turn ideas into professional digital products that make an impact.",
  quote: "Every project deserves innovation, quality, and attention to detail. I create digital solutions that are fast, scalable, visually appealing, and built for the future.",
  mission: "Every project deserves innovation, quality, and attention to detail. I create digital solutions that are fast, scalable, visually appealing, and built for the future.",
  location: "Sialkot, Pakistan",
  coordinates: "32.4945° N, 74.5229° E",
  timezone: "UTC+5",
  whatsappNumber: "+92 322 6470149",
  whatsappUrl: "https://wa.me/923226470149",
  email: "faizanjutt272272@gmail.com",
  instagramUrl: "https://faizanjutt272.pages.dev",
  instagramHandle: "Faizan Jutt 272",
  tiktokUrl: "https://faizanjutt272.pages.dev",
  tiktokHandle: "Faizan Jutt 272",
  facebookUrl: "https://faizanjutt272.pages.dev",
  facebookName: "Faizan Jutt (Faizan Evolution)",
  snapchatUrl: "https://faizanjutt272.pages.dev",
  snapchatHandle: "Faizan Jutt 272",
  portfolioMirror: "https://faizanjutt272.pages.dev",
  githubUrl: "https://github.com/ft96583-beep",
  workspaceImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAS5Wn-1-6QewRrd3WwdSO40MITbPiLyzXLYwbIz0kVn09_cZ9wpyN0SDNc7LYhVf-8k94nfTwN-uXK8mRZWdF-4k-joPszsN5ayBmNsFckJfwcL4dSwJ1H4SH-BHYX1enyXQmirthvTeGJZ_yPyBeiLrmJllZWT6TrUwIfgg4VTgYl2nTUT_Ug26jr2el0-Zd4Lihb3oj-7Ey5TL4z7xzjAqcL6JCcySHmEI-Ox6mTWYpGMKD_LM7C",
  studioWorkroomImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEigWUe8fQvdBE0mKLWBnyDAjePhQcxu0CVJyGmKjmwB3RV4vPQg480U33Ly6ySHayTakx-gmXcXfQ8UbscFxP--nkb3NjaPuS8pfENHc0HpSJg98SRSKsmhyQXlqG7Xh9ylG18MYp20v4fPIZRBRtiNtbCmgOZs_CuXXkS9zgGXW8XC-2XB681GQP2bR_CABH9xn2zo6gVz6GYiiVmqPlmuuFQJIGzSJgcjsF0_MB3Rl_4JDugxS0",
  mapImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuApw5aqeeoPKGnWQmFz--iBG_irU3HpqzQZRbwTooqTsMKgNOdHgzFU9d21oCSh1xgsLDV1izMCTVtAQLz0e7-EEhCM_Gmvgf2e3eyZyiTrnU-A585WfhdY7wvgwllgZDZ7_sRL5yyfuIiG5f3YxGYl_Bh7xnUnTHWSfN47qwFxi1Vjc6ddgnk2MoKS-SnkoHlY5bqfN9hKt0vr2G-zQ2wJszrdCnpVAnvz0tH5EnKLy8zhV87o9_RT",
};

export const STATS: StatItem[] = [
  {
    value: "2+",
    label: "Years Experience",
    subtitle: "Active production builds",
    iconName: "history_edu"
  },
  {
    value: "30+",
    label: "Projects Delivered",
    subtitle: "Global clientele & startups",
    iconName: "rocket_launch"
  },
  {
    value: "100%",
    label: "Client Satisfaction",
    subtitle: "Flawless review history",
    iconName: "verified"
  },
  {
    value: "24/7",
    label: "Rapid Response",
    subtitle: "Dedicated direct support",
    iconName: "support_agent"
  }
];

export const PILLARS: PillarItem[] = [
  {
    id: "responsive",
    title: "Modern & Responsive Architecture",
    description: "Pixel-accurate layouts engineered flawlessly across ultra-wide monitors, tablets, and smartphones using dynamic CSS grid systems.",
    iconType: "devices"
  },
  {
    id: "ai-auto",
    title: "AI-Powered Automation",
    description: "Leveraging intelligent LLM models, predictive endpoints, and autonomous pipelines to streamline mission-critical business operations.",
    iconType: "ai"
  },
  {
    id: "performance",
    title: "Lightning Web Performance",
    description: "Obsessed with 100/100 Google Lighthouse metrics, zero render bottlenecks, lean bundle sizes, and instant micro-loads.",
    iconType: "speed"
  },
  {
    id: "artistry",
    title: "Creative Visual Artistry",
    description: "Bridging high-end brand identity, video aesthetics, 3D motion elements, and dark cyber minimalism for unforgettable visual impact.",
    iconType: "palette"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "web-dev",
    number: "01",
    categoryCode: "DEV",
    title: "Premium Website Development",
    description: "Bespoke digital architecture crafted with semantic hygiene, lighthouse scores above 98%, and instantaneous edge load speeds across all modern browsers.",
    tags: ["Next.js", "Tailwind", "SEO 100", "Zero-Bloat"],
    iconType: "web",
    whatsappMessage: "Hi Faizan, I'm interested in Premium Website Development",
    deliverables: ["Custom Next.js & React Frontend", "100/100 Lighthouse Performance", "SEO & Meta Tag Automation", "CMS or Database Integration"]
  },
  {
    id: "responsive-apps",
    number: "02",
    categoryCode: "APPS",
    title: "Responsive Web Applications",
    description: "Adaptive user interfaces built mobile-first with complex touch controls, offline caching capabilities, and fluid dynamic layouts tailored for every screen form factor.",
    tags: ["PWA Enabled", "Touch-Gesture UX", "Fluid Breakpoints"],
    iconType: "apps",
    whatsappMessage: "Hi Faizan, I'm interested in Responsive Web Applications",
    deliverables: ["Fluid Mobile & Tablet Viewports", "Progressive Web App (PWA) Offline Cache", "Touch-Optimized Gesture Controls", "Cross-Platform Cross-Browser Testing"]
  },
  {
    id: "ai-integration",
    number: "03",
    categoryCode: "AI",
    title: "AI Integration & Automation",
    description: "Autonomous agent pipelines, OpenAI/Anthropic model integrations, context-aware customer chatbots, and automated webhook chains that remove manual overhead.",
    tags: ["Custom GPT", "Vector Embeddings", "Workflow Nodes"],
    iconType: "ai",
    whatsappMessage: "Hi Faizan, I'm interested in AI Integration & Automation",
    deliverables: ["Custom LLM Agent Pipelines", "Prompt Engineering & Evaluation", "Webhook & Bot Automations", "Vector DB & Semantic Retrieval"]
  },
  {
    id: "react-js",
    number: "04",
    categoryCode: "DEV",
    title: "React.js & Modern JavaScript",
    description: "Scalable Single Page Applications (SPAs) with robust state topologies (Zustand/Redux), dynamic routing, reusable design system modules, and memoized rendering.",
    tags: ["React 19", "TypeScript Core", "Modular Architecture"],
    iconType: "react",
    whatsappMessage: "Hi Faizan, I'm interested in React.js & Modern JavaScript",
    deliverables: ["React 19 / Modern Hooks Architecture", "TypeScript End-to-End Type Safety", "State Management & UI Caching", "Component Library Integration"]
  },
  {
    id: "uiux-design",
    number: "05",
    categoryCode: "UI/UX",
    title: "UI/UX Design",
    description: "Human-centered research transformed into high-fidelity Figma components, interactive micro-prototypes, accessibility audits (WCAG AA), and design handoff specs.",
    tags: ["Figma Auto-Layout", "Design Tokens", "Wireframing"],
    iconType: "uiux",
    whatsappMessage: "Hi Faizan, I'm interested in UI/UX Design",
    deliverables: ["High-Fidelity Figma Wireframes", "Design Token Design Systems", "Interactive Prototype Testing", "Design Handoff to Engineers"]
  },
  {
    id: "tailwind-css",
    number: "06",
    categoryCode: "DESIGN",
    title: "Tailwind CSS",
    description: "Pixel-perfect utility-first styling with customized brand configs, fluid typographic clamps, dark-mode switches, and zero unused CSS bundle output.",
    tags: ["Custom Tokens", "JIT Optimizer", "Strict Theme Config"],
    iconType: "tailwind",
    whatsappMessage: "Hi Faizan, I'm interested in Tailwind CSS Architecture",
    deliverables: ["Custom Design Token Configuration", "Dark/Light Theme Engineering", "Responsive Mobile-First Utilities", "Zero-Bloat Production Bundle"]
  },
  {
    id: "database-apis",
    number: "07",
    categoryCode: "BACKEND",
    title: "Database & REST APIs",
    description: "Secure backend services with resilient schema designs in PostgreSQL, MongoDB, or Firebase, shielded by JWT authorization and encrypted database transactions.",
    tags: ["PostgreSQL / Supabase", "RESTful CRUD", "JWT Auth"],
    iconType: "database",
    whatsappMessage: "Hi Faizan, I'm interested in Database & REST APIs",
    deliverables: ["Schema Modeling & Relational Design", "RESTful CRUD Endpoints", "Authentication & JWT Authorization", "Fast Query Execution & Indexes"]
  },
  {
    id: "video-editing",
    number: "08",
    categoryCode: "MOTION",
    title: "Video Editing",
    description: "Dynamic visual storytelling tailored for TikTok, Reels, and YouTube. Includes rhythmic cuts, kinetic typography, Foley sound design, and color grading.",
    tags: ["Premiere Pro & AE", "Kinetic Titles", "Viral Pacing"],
    iconType: "motion",
    whatsappMessage: "Hi Faizan, I'm interested in Video Editing & Motion",
    deliverables: ["High-Paced Viral Social Reels", "Product Promotional Teasers", "Cinematic Sound Design & FX", "Motion Graphics Typography"]
  },
  {
    id: "graphic-branding",
    number: "09",
    categoryCode: "IDENTITY",
    title: "Graphic Design & Branding",
    description: "Uncompromising brand identity guidelines, memorable vector emblems, advertising collateral, 3D social kits, and visual assets built to command industry authority.",
    tags: ["Identity Systems", "Vector Precision", "Asset Packages"],
    iconType: "branding",
    whatsappMessage: "Hi Faizan, I'm interested in Graphic Design & Branding",
    deliverables: ["Vector Logo Identity Suite", "Typography & Color Matrix Guide", "Social Media Launch Kit", "Print & Packaging Design"]
  },
  {
    id: "digital-marketing",
    number: "10",
    categoryCode: "GROWTH",
    title: "Digital Marketing",
    description: "Comprehensive organic visibility strategies combining technical on-page audits, schema structure generation, core web vitals speed tuning, and Google Analytics 4 tracking loops to guarantee conversion-led ROI.",
    tags: ["JSON-LD Schemas", "Vitals 100/100", "CRO Funnels", "GA4 & SEO"],
    iconType: "marketing",
    whatsappMessage: "Hi Faizan, I'm interested in Digital Marketing & SEO",
    deliverables: ["Core Web Vitals 100/100 Tuning", "Technical On-Page & Schema Markup", "Conversion Funnel Optimization", "Analytics & Conversion Event Setup"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "faizan-evolution-agency",
    title: "Faizan Evolution Agency",
    category: "Brand & Motion",
    subtitle: "Web Development & SEO Agency Website",
    description: "Multi-page agency website with 6 services, blog, quote leads, admin panel, cookie banner and per-page SEO — built under the Faizan Evolution brand.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7KbxdHL-jCt-slGpFUIxIBzmQxZWJ5YQi_85egm9Jw5uZg3UcXKGbDqGyZWdoqY7XhSb-ByZqeqBhyP1xBhS1S_rHhl29wNeGxl_YyDe_zB2RfwFQtEOSeZnum-meeEKlhJwJZ34LHcykcXE5L321TgJ1GnsK8c9tqTCKLkxc39Dnx0lavCbPS2NJgrjD3mAL4asuUga6W13RB_hQpMuqzl-rLVB4J1nolKJ74CLGL9NJuf6m-kLB",
    tags: ["Web Development", "SEO", "Admin Panel"],
    metrics: "6 Services Live",
    client: "Faizan Evolution",
    year: "2026",
    liveUrl: "https://faizanjutt272.pages.dev",
    githubUrl: "https://github.com/ft96583-beep",
    features: [
      "6 service pages with per-page SEO",
      "Blog, quote-lead form and admin panel",
      "Cookie banner and honeypot spam protection",
      "Sitemap, robots and Open Graph setup"
    ]
  },
  {
    id: "digitalbazaar",
    title: "DigitalBazaar",
    category: "E-Commerce & UX",
    subtitle: "Digital Tools Store",
    description: "Digital tools store with cart and checkout, WhatsApp orders, live Supabase backend, admin roles and activity logs, and automated stock sync.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoJKVIsT83jY096AqkgQgSYU9gBf9RNrZ9ip_-saobs8HphURLHzNs15oiaMIg6G3fcWm3UI0_OKkkxkXjPTOojLzBtYNzGe6dl719ltDcd1AxqigHhNwugs2jnJqRATXIxs-Zwfu2XeTcblbphd8HIy-lkIb1YZirBJ372UFoNuM_LCqbpn-TeAAAlgx-Csk7YnXSMoZ-0vMGV3Er3O4VnLmEx6cmL-61GKCjEl9lLuzHtnBlHsF6",
    tags: ["React", "Supabase", "E-Commerce"],
    metrics: "Live Store + Admin",
    client: "Faizan Evolution",
    year: "2025",
    liveUrl: "https://faizanjutt272.pages.dev",
    githubUrl: "https://github.com/ft96583-beep",
    features: [
      "Cart, checkout and WhatsApp order flow",
      "Supabase-backed products, orders and settings",
      "Admin roles, activity logs and My Account",
      "Glass Jelly UI with admin-controlled themes"
    ]
  },
  {
    id: "zynixstore",
    title: "ZynixStore",
    category: "E-Commerce & UX",
    subtitle: "Digital Goods Store",
    description: "Digital goods storefront with product catalogue, on-site ordering and admin-managed content, built as one of Faizan's own store projects.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEX1JEtCiNdeKwMlOjNAOTFwJwb76ae7V4ji5lFkvs0hqBBJW_tvOSgf3WDO-oQFNet28qPwoo61e1owgokp3nSoVoVsnpT8SDCdwAGnfH-vgCReHvaQd_MXZcxaFTpo0W0eriW4ow4R6PsHVbeQ7EwUZIIACifUZ7yp_QiCAUIv7mnWsynT_HRin4AchSJjJqij9mb1ZCXUyz6tI8IyTL59SBvhL8HGKPcHDoHtD0aCN6cWjTSiOF",
    tags: ["E-Commerce", "Web Development", "SEO"],
    metrics: "Storefront + Admin",
    client: "Faizan Evolution",
    year: "2025",
    liveUrl: "https://faizanjutt272.pages.dev",
    githubUrl: "https://github.com/ft96583-beep",
    features: [
      "Product catalogue with search and categories",
      "On-site cart and checkout flow",
      "Admin-managed products and orders",
      "Mobile-first responsive storefront"
    ]
  },
  {
    id: "luxury-feminine",
    title: "Luxury Feminine Store",
    category: "E-Commerce & UX",
    subtitle: "Premium Jewellery Shop in Pakistan",
    description: "Premium jewellery store with WhatsApp-only orders, live Supabase backend, 5 admin-controlled themes and a 31-tab admin panel.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7KbxdHL-jCt-slGpFUIxIBzmQxZWJ5YQi_85egm9Jw5uZg3UcXKGbDqGyZWdoqY7XhSb-ByZqeqBhyP1xBhS1S_rHhl29wNeGxl_YyDe_zB2RfwFQtEOSeZnum-meeEKlhJwJZ34LHcykcXE5L321TgJ1GnsK8c9tqTCKLkxc39Dnx0lavCbPS2NJgrjD3mAL4asuUga6W13RB_hQpMuqzl-rLVB4J1nolKJ74CLGL9NJuf6m-kLB",
    tags: ["E-Commerce", "Supabase", "WhatsApp Orders"],
    metrics: "80 Products in Code",
    client: "Luxury Feminine",
    year: "2025",
    liveUrl: "https://luxuryfeminine.vercel.app/",
    githubUrl: "https://github.com/ft96583-beep",
    features: [
      "WhatsApp-only ordering with product cards",
      "Live Supabase products, clicks and orders",
      "5 themes controlled from Admin Settings",
      "SEO title, keywords meta and JSON-LD"
    ]
  },
  {
    id: "dental-clinic-booking",
    title: "Dental Clinic Appointment Booking System",
    category: "AI & Full-Stack",
    subtitle: "Booking & Appointment System",
    description: "Appointment booking system for a dental clinic — patients book slots online and the clinic manages appointments from an admin view.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoJKVIsT83jY096AqkgQgSYU9gBf9RNrZ9ip_-saobs8HphURLHzNs15oiaMIg6G3fcWm3UI0_OKkkxkXjPTOojLzBtYNzGe6dl719ltDcd1AxqigHhNwugs2jnJqRATXIxs-Zwfu2XeTcblbphd8HIy-lkIb1YZirBJ372UFoNuM_LCqbpn-TeAAAlgx-Csk7YnXSMoZ-0vMGV3Er3O4VnLmEx6cmL-61GKCjEl9lLuzHtnBlHsF6",
    tags: ["Booking System", "Web App", "Admin Panel"],
    metrics: "Online Appointments",
    client: "Dental Clinic",
    year: "2025",
    liveUrl: "https://faizanjutt272.pages.dev",
    githubUrl: "https://github.com/ft96583-beep",
    features: [
      "Online appointment booking form",
      "Slot and appointment management",
      "Clinic admin view for bookings",
      "Mobile-friendly booking flow"
    ]
  },
  {
    id: "xenics-ai",
    title: "Xenics AI",
    category: "AI & Full-Stack",
    subtitle: "Desktop AI Assistant",
    description: "Python/Eel desktop AI assistant with voice interaction — one of Faizan's own product builds, packaged for desktop use.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEX1JEtCiNdeKwMlOjNAOTFwJwb76ae7V4ji5lFkvs0hqBBJW_tvOSgf3WDO-oQFNet28qPwoo61e1owgokp3nSoVoVsnpT8SDCdwAGnfH-vgCReHvaQd_MXZcxaFTpo0W0eriW4ow4R6PsHVbeQ7EwUZIIACifUZ7yp_QiCAUIv7mnWsynT_HRin4AchSJjJqij9mb1ZCXUyz6tI8IyTL59SBvhL8HGKPcHDoHtD0aCN6cWjTSiOF",
    tags: ["Python", "AI Assistant", "Desktop App"],
    metrics: "Voice-Enabled Assistant",
    client: "Faizan Evolution",
    year: "2025",
    liveUrl: "https://faizanjutt272.pages.dev",
    githubUrl: "https://github.com/ft96583-beep",
    features: [
      "Desktop AI assistant interface",
      "Voice interaction support",
      "Task and assistant workflows",
      "Packaged desktop build"
    ]
  },
  {
    id: "premium-menswear-store",
    title: "Premium Menswear Store",
    category: "E-Commerce & UX",
    subtitle: "Premium Menswear Clothing Store",
    description: "Premium menswear clothing store website with product showcase, categories and a premium storefront design.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7KbxdHL-jCt-slGpFUIxIBzmQxZWJ5YQi_85egm9Jw5uZg3UcXKGbDqGyZWdoqY7XhSb-ByZqeqBhyP1xBhS1S_rHhl29wNeGxl_YyDe_zB2RfwFQtEOSeZnum-meeEKlhJwJZ34LHcykcXE5L321TgJ1GnsK8c9tqTCKLkxc39Dnx0lavCbPS2NJgrjD3mAL4asuUga6W13RB_hQpMuqzl-rLVB4J1nolKJ74CLGL9NJuf6m-kLB",
    tags: ["E-Commerce", "Fashion Store", "Web Design"],
    metrics: "Premium Storefront",
    client: "Faizan Evolution",
    year: "2025",
    liveUrl: "https://faizanjutt272.pages.dev",
    githubUrl: "https://github.com/ft96583-beep",
    features: [
      "Menswear product showcase",
      "Category browsing and product views",
      "Premium storefront layout",
      "Mobile-responsive design"
    ]
  }
];

export const TECH_BADGES = [
  { name: "React 19", role: "Frontend UI", color: "text-[#00eefc]" },
  { name: "Next.js 14", role: "Full-Stack / SSR", color: "text-[#ffdbcd]" },
  { name: "Tailwind CSS", role: "Design Architecture", color: "text-[#7df4ff]" },
  { name: "FastAPI / Node", role: "Backend Engines", color: "text-[#ffb596]" },
  { name: "AI Automation", role: "LLM Pipelines", color: "text-[#ffb952]" },
  { name: "Figma", role: "Product Prototyping", color: "text-[#ff6600]" },
  { name: "After Effects", role: "Motion & Reels", color: "text-[#d3fbff]" },
  { name: "PostgreSQL", role: "Persistent State", color: "text-[#00dbe9]" }
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    year: "2022",
    title: "The Inception",
    description: "Started coding with foundational HTML, CSS, and modern JavaScript. Explored typography, web layout physics, and responsive front-end fundamentals.",
    status: "STATUS: MASTERED CORE",
    iconName: "code",
    accentColor: "text-[#ff6600]"
  },
  {
    year: "2023",
    title: "Stack Evolution",
    description: "Mastered React.js ecosystem, component lifecycle architectures, Tailwind CSS design engineering, RESTful backend APIs, and Full-Stack client-server communication.",
    status: "STATUS: FULL-STACK READY",
    iconName: "layers",
    accentColor: "text-[#00eefc]"
  },
  {
    year: "2024",
    title: "AI & Visual Mastery",
    description: "Expanded deeply into AI integrations, LLM prompts & automation workflows. Parallel mastery in creative multimedia: branding, vector graphic arts, and dynamic video editing.",
    status: "STATUS: MULTI-DISCIPLINARY",
    iconName: "smart_toy",
    accentColor: "text-[#ffb952]"
  },
  {
    year: "2025",
    title: "Faizan Evolution Agency",
    description: "Faizan Evolution — web development and SEO agency. Delivering production-grade websites, online stores, booking systems and Google ranking work for clients worldwide.",
    status: "ACTIVE SCALE // GLOBAL",
    iconName: "rocket_launch",
    accentColor: "text-[#ff6600]"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    subtitle: "PIXEL-PERFECT REACTIVE UI",
    avgScore: "96% AVG",
    description: "High-performance web applications built with declarative reactive components, strict modularity, and ultra-fluid mobile viewports.",
    iconName: "devices",
    accentColor: "text-[#ff6600]",
    barColor: "bg-[#ff6600]",
    skills: [
      { name: "React.js & Next.js", percentage: 95 },
      { name: "Modern JavaScript (ES6+)", percentage: 92 },
      { name: "HTML5 & Semantic Web", percentage: 98 },
      { name: "Tailwind CSS & CSS3 Layouts", percentage: 97 }
    ],
    badges: ["DOM Optimization", "SSR/SSG", "Responsive Fluidity"]
  },
  {
    id: "backend",
    title: "Backend & Systems",
    subtitle: "APIS & DATA PIPELINES",
    avgScore: "88% AVG",
    description: "Architecting robust JSON endpoints, data schemas, asynchronous worker routines, and scalable serverless runtimes.",
    iconName: "dns",
    accentColor: "text-[#00eefc]",
    barColor: "bg-[#00eefc]",
    skills: [
      { name: "Node.js Runtimes", percentage: 90 },
      { name: "REST API Architecture", percentage: 93 },
      { name: "Database Management (SQL/NoSQL)", percentage: 85 },
      { name: "Python Scripting & Microservices", percentage: 84 }
    ],
    badges: ["CRUD APIs", "Auth & JWT", "Vercel Serverless"]
  },
  {
    id: "ai",
    title: "AI & Automation",
    subtitle: "NEURAL WORKFLOWS & AGENTS",
    avgScore: "93% AVG",
    description: "Engineering contextual LLM gateways, autonomous conversational interfaces, automated data triggers, and smart bots.",
    iconName: "psychology",
    accentColor: "text-[#ffb952]",
    barColor: "bg-[#ffb952]",
    skills: [
      { name: "AI Integration & Function Calling", percentage: 94 },
      { name: "LLM APIs (OpenAI / Claude / Gemini)", percentage: 95 },
      { name: "Workflow Automation & Webhooks", percentage: 92 },
      { name: "Custom Intelligent Chatbots", percentage: 91 }
    ],
    badges: ["Context Pipelines", "Prompt Logic", "Automated CRMs"]
  },
  {
    id: "creative",
    title: "Creative & Visuals",
    subtitle: "UI/UX & MOTION PRODUCTION",
    avgScore: "95% AVG",
    description: "High-converting digital brand identities, user interfaces with intuitive flow, and thumb-stopping cinematic video editing.",
    iconName: "palette",
    accentColor: "text-[#ffb596]",
    barColor: "bg-[#ffb596]",
    skills: [
      { name: "UI/UX Design Systems", percentage: 95 },
      { name: "Figma Prototyping & Layout", percentage: 96 },
      { name: "Graphic Design & Brand Identity", percentage: 94 },
      { name: "Video Editing & Motion Graphics", percentage: 95 }
    ],
    badges: ["Visual Directing", "Content Strategy", "Social Formats"]
  }
];

export const VALUE_PROPOSITIONS: ValueProposition[] = [
  {
    id: "responsive",
    title: "Modern & Responsive Design",
    description: "Pixel-accurate responsiveness across all smartphones, tablets, and desktop resolutions with crisp typography and effortless navigation.",
    iconName: "devices_fold"
  },
  {
    id: "speed",
    title: "Fast Performance",
    description: "Zero bloatware. Code splitting, compressed assets, 98+ Lighthouse scores, and sub-second load times for maximum conversion and retention.",
    iconName: "speed"
  },
  {
    id: "clean-code",
    title: "Clean & Maintainable Code",
    description: "Written for longevity and scale. Modular components, strict typing, standard conventions, and clean readable documentation.",
    iconName: "cleaning_services"
  },
  {
    id: "uiux",
    title: "Creative UI/UX",
    description: "Human-centric interface systems, high-converting layouts, dark mode elegance, and micro-interactions that leave a lasting impression.",
    iconName: "auto_awesome"
  },
  {
    id: "ai-solutions",
    title: "AI-Powered Solutions",
    description: "Seamless integration of intelligent models, LLM APIs, autonomous pipelines, and smart automations that solve real-world problems.",
    iconName: "neurology"
  },
  {
    id: "communication",
    title: "Professional Communication",
    description: "Clear roadmaps, rapid responsiveness on WhatsApp & Email, milestone demonstrations, and collaborative clarity from day one.",
    iconName: "handshake"
  },
  {
    id: "support",
    title: "Reliable Support",
    description: "Dedicated post-launch warranty, ongoing technical assistance, proactive troubleshooting, and reliable long-term partnership.",
    iconName: "verified_user",
    doubleWidth: true
  }
];
