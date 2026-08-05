export interface HeroScene {
  id: number;
  startFrame: number;
  endFrame: number;

  badge: string;
  title: string;
  subtitle: string;

  primaryButton: string;
  secondaryButton: string;
}

export const heroScenes: HeroScene[] = [
  {
    id: 1,
    startFrame: 0,
    endFrame: 74,

    badge: "PREMIUM INDUSTRIAL DEHUMIDIFIERS",

    title: "Engineered From\nThe Inside Out.",

    subtitle:
      "Industrial dehumidification systems engineered for precision, reliability and long-term performance.",

    primaryButton: "Explore Products",

    secondaryButton: "Watch Demo",
  },

  {
    id: 2,
    startFrame: 75,
    endFrame: 149,

    badge: "PRECISION ENGINEERING",

    title: "Every Component\nHas A Purpose.",

    subtitle:
      "Every fan, coil and compressor is carefully engineered to maximize airflow, efficiency and durability.",

    primaryButton: "Discover Engineering",

    secondaryButton: "View Components",
  },

  {
    id: 3,
    startFrame: 150,
    endFrame: 224,

    badge: "HIGH PERFORMANCE",

    title: "Built For\nContinuous Operation.",

    subtitle:
      "Designed for demanding industrial environments where reliability matters every hour of every day.",

    primaryButton: "View Applications",

    secondaryButton: "Learn More",
  },

  {
    id: 4,
    startFrame: 225,
    endFrame: 299,

    badge: "PROTECT WHAT MATTERS",

    title: "Control Moisture.\nProtect Performance.",

    subtitle:
      "Protect products, equipment and environments with advanced industrial humidity control solutions.",

    primaryButton: "Request Quote",

    secondaryButton: "Contact Sales",
  },
];