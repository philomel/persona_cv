import { ExperienceItem, AdvantageItem } from './types';

export const SOCIAL_LINKS = {
  email: "mailto:lostmuxi@gmail.com",
  github: "https://github.com",
  twitter: "https://twitter.com",
  linkedin: "https://linkedin.com",
};

export const ADVANTAGES: AdvantageItem[] = [
  {
    title: "Visionary Execution",
    content: "I firmly believe that being a PM is about integrating a vision for the future into the product and realizing it in reality.",
    iconName: "Target"
  },
  {
    title: "Agile & Efficient",
    content: "Fast learner with a strong thirst for knowledge. I thrive in environments with efficient colleagues and rapid iteration cycles.",
    iconName: "Zap"
  },
  {
    title: "Product Philosophy",
    content: "8 years of experience bridging technical constraints with user needs, focusing on scalable architecture and sustainable growth.",
    iconName: "Brain"
  },
  {
    title: "Web3 Native",
    content: "Deep expertise in DePIN, RWA, Yield Protocols, and Tokenomics across the TON and EVM ecosystems.",
    iconName: "Globe"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "HashPower",
    role: "Web3 Product Manager",
    period: "2025.01 — Present",
    description: "HashPower is a high-yield Web3 protocol platform operating top-ranking mining infrastructure across IO.net and Aethir, managing over 80,000 machines globally.",
    achievements: [
      "Led full architecture and design of the yield protocol product, focusing on scalable DePIN-based mining rewards (APY ~50%).",
      "Launched a successful joint staking campaign with Duckchain (TON ecosystem), engaging over 100,000 community users.",
      "Expanded collaborations with DePIN projects including Merlin, ATOM, LPT, and DENT.",
      "Maintained strategic relationships with exchanges like Gate.io and Coinstore."
    ],
    tags: ["DePIN", "RWA", "Tokenomics", "TON Ecosystem"]
  },
  {
    company: "MetaTrust Labs",
    role: "Web3 Project Manager & BD",
    period: "2024.05 — 2024.12",
    description: "Incubated at NTU Singapore, providing Web3 AI security tools and code auditing services.",
    achievements: [
      "Led end-to-end product design for MetaScout and MetaScan, focusing on AI-driven risk detection and smart contract security.",
      "Conducted market research and defined functional requirements for developer-oriented security tools.",
      "Identified new business opportunities and managed client relationships with key stakeholders in the blockchain space.",
      "Bridged technical auditing teams with client needs to ensure precise service delivery."
    ],
    tags: ["AI Security", "Smart Contracts", "Product Strategy", "B2B Sales"]
  },
  {
    company: "Helicode",
    role: "Teaching & Community Growth",
    period: "2024.11 — 2025.03",
    description: "A Web3 Remote Knowledge Education Platform targeting emerging regions.",
    achievements: [
      "Contributed to setup and business development, focusing on underdeveloped regions like Africa.",
      "Attracted 1,000+ students from African countries (e.g., Ghana) via Discord community building.",
      "Strengthened platform reputation through high-quality learning experiences and student engagement."
    ],
    tags: ["Education", "Community Growth", "Remote", "Emerging Markets"]
  },
  {
    company: "Bosideng Corporation",
    role: "Senior Product Manager",
    period: "2021.09 — 2024.02",
    description: "Leading apparel enterprise focused on digital transformation and industrial internet integration.",
    achievements: [
      "Oversaw product design of 'Points Mall' and internal store network management systems for thousands of stores.",
      "Contributed to winning the '2022 Industrial Internet Integration Innovation Case'.",
      "Managed Agile R&D processes using Zentao/RA, handling competitive analysis and requirement research from 0 to 1."
    ],
    tags: ["Digital Transformation", "Agile", "Enterprise Systems", "0-1 Product"]
  }
];