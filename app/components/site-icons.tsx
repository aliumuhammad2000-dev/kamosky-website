import type { ReactNode } from "react";

export type IconName =
  | "arrow"
  | "menu"
  | "book"
  | "spark"
  | "heart"
  | "people"
  | "quote"
  | "camera"
  | "mail";

type IconProps = {
  name: IconName;
  className?: string;
};

const iconPaths: Record<IconName, ReactNode> = {
  arrow: <path d="M5 12h13m-5-5 5 5-5 5" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  book: <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Zm0 0V21m4-14h8m-8 4h8" />,
  spark: <path d="m12 3 1.4 5.6L19 10l-5.6 1.4L12 17l-1.4-5.6L5 10l5.6-1.4L12 3Zm6.5 12 .5 2 .5-2 2-.5-2-.5-.5-2-.5 2-2 .5 2 .5Z" />,
  heart: <path d="M20.8 8.7c0 5.3-8.8 10.1-8.8 10.1S3.2 14 3.2 8.7A4.7 4.7 0 0 1 12 6.2a4.7 4.7 0 0 1 8.8 2.5Z" />,
  people: <path d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20m6-9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm6-6.5a3 3 0 0 1 0 5.8M20 20v-1.5a3.5 3.5 0 0 0-2.5-3.4" />,
  quote: <path d="M7.5 17H4.8A1.8 1.8 0 0 1 3 15.2V11a4 4 0 0 1 4-4h.5v3H7a1 1 0 0 0-1 1v1h1.5a1.8 1.8 0 0 1 1.8 1.8v1.4A1.8 1.8 0 0 1 7.5 17Zm10 0h-2.7a1.8 1.8 0 0 1-1.8-1.8V11a4 4 0 0 1 4-4h.5v3H17a1 1 0 0 0-1 1v1h1.5a1.8 1.8 0 0 1 1.8 1.8v1.4a1.8 1.8 0 0 1-1.8 1.8Z" />,
  camera: <path d="M4 7.5A1.5 1.5 0 0 1 5.5 6h2l1.2-2h6.6l1.2 2h2A1.5 1.5 0 0 1 20 7.5v10a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5v-10ZM12 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />,
  mail: <path d="M4 6h16v12H4V6Zm0 1 8 6 8-6" />,
};

export function Icon({ name, className = "size-5" }: IconProps) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.7}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {iconPaths[name]}
    </svg>
  );
}
