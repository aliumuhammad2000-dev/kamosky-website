import type { IconName } from "./site-icons";

export type NavigationItem = {
  label: string;
  href: string;
};

export type SourceLink = {
  label: string;
  href: string;
};

export type Initiative = {
  title: string;
  icon: IconName;
  text: string;
  number: string;
  image?: SiteImage;
};

export type SiteImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const profilePortrait: SiteImage = {
  src: "/images/portraits/Kamosky.jpg",
  alt: "Portrait of Alhaji Kamorudeen Olawale Yusuf wearing a dark suit and tie",
  width: 1952,
  height: 2146,
};

export const aboutSources: SourceLink[] = [
  {
    label: "Personal profile",
    href: "https://kamorudeenyusuf.ng/profile/",
  },
  {
    label: "The Punch · Education report",
    href: "https://punchng.com/tinubus-aide-donates-learning-materials-to-10000-ogun-pupils/",
  },
  {
    label: "Vanguard · Vocational training report",
    href: "https://www.vanguardngr.com/2025/08/traditional-rulers-hail-tinubus-aide-over-skill-acquisition-initiative-for-ogun-youth/",
  },
];

export const navigationItems: NavigationItem[] = [
  { label: "About", href: "#about" },
  { label: "Initiatives", href: "#initiatives" },
  { label: "Stories", href: "#stories" },
  { label: "Media", href: "#media" },
];

export const initiatives: Initiative[] = [
  {
    title: "Education",
    icon: "book",
    text: "A space for verified education initiatives, programmes, and opportunities to be shared.",
    number: "01",
    image: {
      src: "/images/initiatives/markaz.jpg",
      alt: "Students and young people in blue uniforms gathered outside a building",
      width: 2048,
      height: 1366,
    },
  },
  {
    title: "Skills Acquisition",
    icon: "spark",
    text: "A space for verified skills and empowerment programmes to be documented clearly.",
    number: "02",
    image: {
      src: "/images/initiatives/ogunsummit.jpg",
      alt: "Group onstage holding large ceremonial cheques at a summit event",
      width: 1080,
      height: 771,
    },
  },
  {
    title: "Humanitarian Support",
    icon: "heart",
    text: "A space for verified humanitarian work and community support stories to be added.",
    number: "03",
  },
  {
    title: "Community Development",
    icon: "people",
    text: "A space for verified community-focused projects and public updates to be published.",
    number: "04",
  },
];

export const impactStoryPlaceholders = [
  "Story placeholder · verified account to be added",
  "Story placeholder · source to be confirmed",
  "Story placeholder · details to be supplied",
];

export const mediaPlaceholders = [
  "Media item placeholder · date and source to be added",
  "Media item placeholder · date and source to be added",
  "Media item placeholder · date and source to be added",
];

export const galleryImages: SiteImage[] = [
  {
    src: "/images/initiatives/markaz1.jpg",
    alt: "Students and young people in blue uniforms gathered indoors around a speaker",
    width: 2048,
    height: 1366,
  },
  {
    src: "/images/initiatives/ogunsummit1.jpg",
    alt: "Attendees gathered for a summit event",
    width: 1080,
    height: 771,
  },
];
