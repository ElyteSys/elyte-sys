export type HeroSlide = {
  id: number;
  title: string;
  description: string;
  image: string;
  actionText: string;
  targetSection: string;
};

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Build a Business That Cyber Threats Can't Stop",
    description: "Expect Threats. Fear Nothing.",
    image: "./images/hero/cyber-security.png",
    actionText: "Learn More",
    targetSection: "services",
  },
  {
    id: 2,
    title: "Empowering Companies to Scale Apple Devices Across India",
    description: "Apple Deployment, PAN-India",
    image: "./images/hero/banner-apple.jpg",
    actionText: "Learn More",
    targetSection: "services",
  },
  {
    id: 3,
    title: "Powering GCCs with Complete IT Excellence",
    description: "Seamless Technology. Smarter Outcomes.",
    image: "./images/hero/gcc-banner.jpg",
    actionText: "Learn More",
    targetSection: "services",
  },
];
