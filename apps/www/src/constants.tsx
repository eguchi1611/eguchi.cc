import { IconBooks, IconHome } from "@tabler/icons-react";

export const socials = [
  {
    href: "https://x.com/keita_ito_",
    src: "/twitter.svg",
    alt: "twitter",
    width: 128,
    height: 128,
  },
  {
    href: "https://bsky.app/profile/eguchi.cc",
    src: "/bluesky.svg",
    alt: "bluesky",
    width: 682.667,
    height: 682.667,
  },
  {
    href: "https://qiita.com/eguchi1611",
    src: "/qiita.svg",
    alt: "qiita",
    width: 400,
    height: 400,
  },
  {
    href: "https://zenn.dev/kk79it",
    src: "/zenn.svg",
    alt: "zenn",
    width: 88.3,
    height: 88.3,
  },
  {
    href: "https://github.com/eguchi1611",
    src: "/github.svg",
    alt: "github",
    width: 128,
    height: 128,
  },
] as const;

export const navs = [
  { name: "Home", href: "/", icon: <IconHome /> },
  { name: "Works", href: "/works", icon: <IconBooks /> },
] as const;
