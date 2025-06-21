import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

import { SiNextdotjs, SiTailwindcss, SiFramer, SiReact } from "react-icons/si";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Shows",
    href: "/shows",
  },
  {
    label: "Cast",
    href: "/cast",
  },
  {
    label: "Schedule",
    href: "/schedule",
  },
];

const SOCIAL_ITEMS = [
  {
    label: "Facebook",
    href: "https://facebook.com/",
    icon: FaFacebook,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/",
    icon: FaInstagram,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/",
    icon: FaTiktok,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/",
    icon: FaTwitter,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/",
    icon: FaYoutube,
  },
];
const TECH_STACKS = [
  {
    label: "Next.js",
    href: "https://nextjs.org/",
    icon: SiNextdotjs,
    className: "text-3xl text-black",
  },
  {
    label: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    icon: SiTailwindcss,
    className: "text-3xl text-sky-400",
  },
  {
    label: "Framer Motion",
    href: "https://www.framer.com/motion/",
    icon: SiFramer,
    className: "text-3xl text-fuchsia-500",
  },
  {
    label: "React",
    href: "https://react.dev/",
    icon: SiReact,
    className: "text-3xl text-cyan-400",
  },
];

export { NAV_ITEMS, SOCIAL_ITEMS, TECH_STACKS };
