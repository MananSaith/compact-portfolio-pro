import c1 from "../assets/projects/c1.png";
import c2 from "../assets/projects/c2.png";

import co1 from "../assets/projects/co1.png";
import co2 from "../assets/projects/co2.png";

import i1 from "../assets/projects/i1.png";
import i2 from "../assets/projects/i2.png";
import i3 from "../assets/projects/i3.png";
import i4 from "../assets/projects/i4.png";
import i5 from "../assets/projects/i5.png";
import i6 from "../assets/projects/i6.png";
import i7 from "../assets/projects/i7.png";

import t1 from "../assets/projects/t1.png";

import r1 from "../assets/projects/ride1.png";
import x1 from "../assets/projects/xpk1.png";

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
    id: "velo-store",
    title: "Velo Store",
    shortDescription: "Multi-vendor e-commerce marketplace",
    description: "This bike shop mobile app UI features a sleek, modern, and minimal design focused on an intuitive shopping experience. The interface uses a dark-to-blue gradient theme with soft shadows and rounded cards, giving it a futuristic and premium look. Users can easily browse bikes, helmets, and accessories through clean category icons and smooth navigation tabs. The design also highlights discounts and product details clearly, improving engagement and conversion. Overall, it blends aesthetic appeal with usability, perfect for an eCommerce or bike rental app.",
    thumbnail: c1,
    images: [c1,c2],
    techStack: ["Flutter", "Firebase", "Stripe", "Node.js", "MongoDB", "FCM","REST API"],
    playStoreUrl: "https://github.com/MananSaith",
    appStoreUrl: "https://github.com/MananSaith",
    category: "E-commerce"
  },
  {
    
    id: "xpk-tour",
    title: "XPK Tour App",
    shortDescription: "Complete tourism platform for exploring destinations",
    description: "A comprehensive tourism application featuring destination guides, booking systems, and interactive maps. Built with Flutter for cross-platform support, integrating Firebase for real-time updates and secure payment gateways.",
    thumbnail: x1,
    images: [x1],
    techStack: ["Flutter", "Firebase", "Google Maps API", "Stripe"],
    playStoreUrl: "https://github.com/MananSaith",
    category: "Travel"
  },
  {
    id: "cup-coffee",
    title: "Cup Coffee",
    shortDescription: "Professional ride-hailing service",
    description: " Cup Coffee, a modern and intuitive mobile application for seamless coffee ordering. The primary objective was to create a smooth, user-friendly experience that allows customers to explore coffee options, view detailed information, and place orders effortlessly. Challenge: The client required a minimal yet visually appealing design that showcased coffee products without clutter. Solution: Implemented a dark-themed, modern UI with high-quality imagery, clean typography, and intuitive navigation to deliver a premium look and feel.",
    thumbnail: co1,
    images: [co1,co2],
    techStack: ["Flutter", "Firebase", "Stripe"],
    playStoreUrl: "https://github.com/MananSaith",
    category: "E-commerce"
  },
   {
    id: "inote",
    title: "iNote App",
    shortDescription: "Feature-rich note-taking and organization",
    description: "iNotes is an intelligent productivity app that seamlessly connects with Google Meet, Microsoft Teams, and Zoom to automatically generate detailed notes, summaries, quizzes, and flashcards for every meeting, no matter how many speakers are involved. Users can also record their own voice, upload images, or add documents to create rich, organized content. With iNotes, staying on top of meetings, lectures, and discussions becomes easier, smarter, and more interactive than ever.",
    thumbnail: i2,
    images: [i1,i2,i3,i4,i5,i6,i7],
    techStack: ["Flutter", "Firebase", "SQLite", "Cloud Sync"],
    playStoreUrl: "https://drive.google.com/file/d/1ZknAMSUBPiGqMo62j_2J480PXn6yrlEG/view?usp=sharing",
    category: "Productivity"
  },
  {
    id: "lgu-ride",
    title: "LGU Ride App",
    shortDescription: "Campus ride-sharing solution for students",
    description: "University-focused ride-sharing application connecting students and faculty for safe campus transportation. Features real-time tracking, secure payments, and rating systems.",
    thumbnail: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    techStack: ["Flutter", "Node.js", "MongoDB", "Socket.io"],
    playStoreUrl: "https://github.com/MananSaith",
    category: "Transportation"
  },
  
  {
    id: "tripocna",
    title: "Tripocna",
    shortDescription: "Travel planning and itinerary management",
    description: "Smart travel companion app helping users plan trips, manage itineraries, and discover attractions. Features offline maps and collaborative planning.",
    thumbnail: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    techStack: ["Flutter", "Firebase", "Google Maps", "SQLite"],
    playStoreUrl: "https://play.google.com/store/apps/dev?id=7250394146729013971",
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
    playStoreUrl: "https://play.google.com/store/apps/dev?id=7250394146729013971",
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
    playStoreUrl:"https://drive.google.com/file/d/1ZknAMSUBPiGqMo62j_2J480PXn6yrlEG/view?usp=sharing",
    category: "E-commerce"
  },
  
  {
    id: "vale-50",
    title: "Vale 50",
    shortDescription: "Discount and deals aggregator platform",
    description: "Comprehensive deals platform aggregating offers from multiple vendors, featuring personalized recommendations and location-based deals.",
    thumbnail: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    techStack: ["Flutter", "REST API", "Firebase", "Push Notifications"],
    playStoreUrl: "https://play.google.com/store/apps/dev?id=7250394146729013971",
    category: "Shopping"
  },
  {
    id: "trading-app",
    title: "Trading App",
    shortDescription: "Real-time stock trading and portfolio management",
    description: "Advanced trading platform with real-time market data, portfolio tracking, and secure transaction processing. Features charts and analysis tools.",
    thumbnail: t1,
    images: [t1],
    techStack: ["Flutter", "WebSocket", "Firebase", "REST API"],
    category: "Finance"
  },
 
];
