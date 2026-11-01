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
  supportingText?: string;
  source?: SourceLink;
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
    text: "Supporting access to learning through school-material distributions, scholarships, and educational outreach.",
    number: "01",
    image: {
      src: "/images/initiatives/markaz.jpg",
      alt: "Students and young people in blue uniforms gathered outside a building",
      width: 2048,
      height: 1366,
    },
    supportingText: "The Punch reported that Yusuf distributed school bags, exercise books, pens and pencils to over 10,000 pupils in selected primary schools across Ogun State through the Alliance for Kamosky Group.",
    source: {
      label: "Read the report",
      href: "https://punchng.com/tinubus-aide-donates-learning-materials-to-10000-ogun-pupils/",
    },
  },
  {
    title: "Skills Acquisition",
    icon: "spark",
    text: "Vocational training and youth empowerment programmes designed to build practical skills and self-reliance.",
    number: "02",
    image: {
      src: "/images/initiatives/ogunsummit.jpg",
      alt: "Group onstage holding large ceremonial cheques at a summit event",
      width: 1080,
      height: 771,
    },
    supportingText: "Vanguard reported that the Alliance for Kamosky's month-long skills-acquisition programme began in Ado-Odo and was designed to train students and young adults across Ogun State in vocational skills.",
    source: {
      label: "Read the report",
      href: "https://www.vanguardngr.com/2025/08/traditional-rulers-hail-tinubus-aide-over-skill-acquisition-initiative-for-ogun-youth/",
    },
  },
  {
    title: "Humanitarian Support",
    icon: "heart",
    text: "Community-focused relief efforts supporting vulnerable residents and families facing difficult circumstances.",
    number: "03",
    image: {
      src: "/images/initiatives/humanitarian.jpeg",
      alt: "Two men holding bags of rice during a community food-relief distribution",
      width: 432,
      height: 297,
    },
    supportingText: "Public reporting has documented food-relief distributions to vulnerable groups across Ogun State, including widows, widowers and students. These efforts represent a reported area of humanitarian support associated with Kamorudeen Yusuf and his wider network.",
    source: {
      label: "Read the report",
      href: "https://www.thecable.ng/tinubus-aide-distributes-rice-to-vulnerable-groups-in-ogun-amid-economic-challenges/",
    },
  },
  {
    title: "Community Development",
    icon: "people",
    text: "Supporting community priorities through engagement, advocacy, and attention to local infrastructure needs.",
    number: "04",
    image: {
      src: "/images/initiatives/community_service.jpg",
      alt: "A fuel tanker navigating a flooded, eroded stretch of rural road lined with vegetation",
      width: 1280,
      height: 720,
    },
    supportingText: "Reporting on the Atan–Alapoti–Ado-Odo–Ikoga road project described Kamorudeen Yusuf's role in bringing attention to the road's condition. The project illustrates how engagement between community representatives and public institutions can help bring local infrastructure concerns into focus.",
    source: {
      label: "Read the report",
      href: "https://guardian.ng/news/nigeria/metro/ogun-communities-elated-over-award-of-atan-alapoti-ado-odo-ikoga-road/",
    },
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
