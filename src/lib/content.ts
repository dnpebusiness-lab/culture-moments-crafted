import workChristmasMarket from "@/assets/work-christmas-market.jpg";
import workCultureNight from "@/assets/work-culture-night.jpg";
import workOyster from "@/assets/work-oyster.jpg";
import workTallShips from "@/assets/work-tall-ships.jpg";
import workSamhain from "@/assets/work-samhain.jpg";
import workVolvo from "@/assets/work-volvo.jpg";
import workCruinniu from "@/assets/work-cruinniu.jpg";
import workTonnta from "@/assets/work-tonnta.jpg";

export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  client: string;
  impactLine: string;
  image: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    slug: "galway-christmas-market",
    title: "Galway Christmas Market",
    category: "Cultural Festival",
    year: "Annual",
    client: "Galway City Council",
    impactLine: "400,000+ visitors across nearly 60 days of activity.",
    image: workChristmasMarket,
    tags: ["Production", "Commercial", "Operations"],
  },
  {
    slug: "culture-night",
    title: "Culture Night",
    category: "National Programme",
    year: "Recurring",
    client: "Galway City",
    impactLine: "Coordinated cultural activations across the city in a single night.",
    image: workCultureNight,
    tags: ["Programming", "Coordination"],
  },
  {
    slug: "galway-oyster-festival",
    title: "Galway International Oyster & Seafood Festival",
    category: "Heritage Festival",
    year: "70th Edition",
    client: "Festival Committee",
    impactLine: "Production for the world's longest-running oyster festival.",
    image: workOyster,
    tags: ["Project Management", "Programming"],
  },
  {
    slug: "tall-ships-races",
    title: "Tall Ships Races",
    category: "International Maritime Event",
    year: "Galway Edition",
    client: "Sail Training International",
    impactLine: "Hundreds of thousands welcomed to the Galway waterfront.",
    image: workTallShips,
    tags: ["Production", "Marketing"],
  },
  {
    slug: "samhain-fire-and-shadows",
    title: "Samhain — Fire & Shadows Processions",
    category: "Public Procession",
    year: "Recurring",
    client: "Cultural Partnership",
    impactLine: "An ancient festival reimagined for contemporary public space.",
    image: workSamhain,
    tags: ["Programming", "Production"],
  },
  {
    slug: "volvo-ocean-race-galway",
    title: "Volvo Ocean Race — Galway Stopover",
    category: "Global Sporting Event",
    year: "Stopover",
    client: "Let's Do It Global",
    impactLine: "City-wide stopover delivery for one of sailing's premier events.",
    image: workVolvo,
    tags: ["Operations", "Marketing & Comms"],
  },
  {
    slug: "cruinniu-na-nog",
    title: "Cruinniú na nÓg",
    category: "Children's Programme",
    year: "Annual",
    client: "Creative Ireland",
    impactLine: "A national day of free creativity for children and young people.",
    image: workCruinniu,
    tags: ["Programming", "Coordination"],
  },
  {
    slug: "tonnta",
    title: "Tonnta",
    category: "Coastal Programme",
    year: "Special Project",
    client: "Cultural Commission",
    impactLine: "A site-specific cultural programme along the Atlantic shore.",
    image: workTonnta,
    tags: ["Curation", "Production"],
  },
];

export const services = [
  {
    n: "01",
    title: "Event Production",
    desc: "From site planning and supplier coordination to logistics, staffing, safety and live delivery, we manage the moving parts that make complex events feel seamless.",
  },
  {
    n: "02",
    title: "Event Programming",
    desc: "We shape cultural programmes that connect with audiences, places and public purpose.",
  },
  {
    n: "03",
    title: "Project Management",
    desc: "We bring clarity, timing and control to creative projects with multiple partners, stakeholders and deadlines.",
  },
  {
    n: "04",
    title: "Marketing & Communications",
    desc: "We help cultural events reach the right audiences with clear messaging, campaign planning and public visibility.",
  },
  {
    n: "05",
    title: "Research & Evaluation",
    desc: "Robust audience and impact research that informs strategy and demonstrates public value.",
  },
  {
    n: "06",
    title: "Sponsorship & Commercial Revenue",
    desc: "Sponsorship strategy, commercial packaging and partner servicing for festivals and public programmes.",
  },
  {
    n: "07",
    title: "Training",
    desc: "Tailored training in event management, programming and cultural production for organisations and teams.",
  },
  {
    n: "08",
    title: "Conference Management",
    desc: "End-to-end conference design and delivery for cultural, public and professional sectors.",
  },
];
