export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  thumbnail: string;
  images: string[];
  techStack: string[];
  playStoreUrl?: string;
  appStoreUrl?: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: "xpk-tour",
    title: "XPK Tour App",
    shortDescription: "Complete tourism platform for exploring destinations",
    description: "A comprehensive tourism application featuring destination guides, booking systems, and interactive maps. Built with Flutter for cross-platform support, integrating Firebase for real-time updates and secure payment gateways.",
    thumbnail: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    techStack: ["Flutter", "Firebase", "Google Maps API", "Stripe"],
    playStoreUrl: "#",
    category: "Travel"
  },
  {
    id: "lgu-ride",
    title: "LGU Ride App",
    shortDescription: "Campus ride-sharing solution for students",
    description: "University-focused ride-sharing application connecting students and faculty for safe campus transportation. Features real-time tracking, secure payments, and rating systems.",
    thumbnail: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    techStack: ["Flutter", "Node.js", "MongoDB", "Socket.io"],
    playStoreUrl: "#",
    category: "Transportation"
  },
  {
    id: "linza-mart",
    title: "Linza Mart",
    shortDescription: "Multi-vendor e-commerce marketplace",
    description: "Full-featured e-commerce platform supporting multiple vendors, product catalogs, cart management, and integrated payment systems. Built for scalability and performance.",
    thumbnail: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    techStack: ["Flutter", "Firebase", "Stripe", "REST API"],
    playStoreUrl: "#",
    appStoreUrl: "#",
    category: "E-commerce"
  },
  {
    id: "tripocna",
    title: "Tripocna",
    shortDescription: "Travel planning and itinerary management",
    description: "Smart travel companion app helping users plan trips, manage itineraries, and discover attractions. Features offline maps and collaborative planning.",
    thumbnail: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    techStack: ["Flutter", "Firebase", "Google Maps", "SQLite"],
    playStoreUrl: "#",
    category: "Travel"
  },
  {
    id: "lunch-box",
    title: "Lunch Box",
    shortDescription: "Food delivery and meal planning app",
    description: "Innovative food delivery platform with meal planning features, dietary preferences, and subscription models. Connects customers with local restaurants.",
    thumbnail: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    techStack: ["Flutter", "Node.js", "MongoDB", "JazzCash"],
    playStoreUrl: "#",
    category: "Food"
  },
  {
    id: "omn-cart",
    title: "Omn Cart",
    shortDescription: "Smart shopping cart with AI recommendations",
    description: "Next-generation shopping app featuring AI-powered product recommendations, smart cart management, and seamless checkout experience.",
    thumbnail: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    techStack: ["Flutter", "Firebase", "ML Kit", "Stripe"],
    playStoreUrl: "#",
    category: "E-commerce"
  },
  {
    id: "tm-ride",
    title: "TM Ride App",
    shortDescription: "Professional ride-hailing service",
    description: "Enterprise-grade ride-hailing application with driver management, route optimization, and corporate billing systems.",
    thumbnail: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    techStack: ["Flutter", "Firebase", "Google Maps", "Stripe"],
    playStoreUrl: "#",
    category: "Transportation"
  },
  {
    id: "vale-50",
    title: "Vale 50",
    shortDescription: "Discount and deals aggregator platform",
    description: "Comprehensive deals platform aggregating offers from multiple vendors, featuring personalized recommendations and location-based deals.",
    thumbnail: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    techStack: ["Flutter", "REST API", "Firebase", "Push Notifications"],
    category: "Shopping"
  },
  {
    id: "trading-app",
    title: "Trading App",
    shortDescription: "Real-time stock trading and portfolio management",
    description: "Advanced trading platform with real-time market data, portfolio tracking, and secure transaction processing. Features charts and analysis tools.",
    thumbnail: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    techStack: ["Flutter", "WebSocket", "Firebase", "REST API"],
    category: "Finance"
  },
  {
    id: "inote",
    title: "iNote App",
    shortDescription: "Feature-rich note-taking and organization",
    description: "Powerful note-taking application with rich text editing, cloud sync, and advanced organization features including tags and folders.",
    thumbnail: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    techStack: ["Flutter", "Firebase", "SQLite", "Cloud Sync"],
    playStoreUrl: "#",
    category: "Productivity"
  }
];
