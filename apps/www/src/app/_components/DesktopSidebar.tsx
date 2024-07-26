import {
  IconAddressBook,
  IconBooks,
  IconChevronsUp,
  IconMessage,
} from "@tabler/icons-react";
import classNames from "classnames";
import Link from "next/link";

import styles from "./DesktopSidebar.module.css";

const items = [
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

const navs = [
  { name: "About", href: "#about", icon: <IconAddressBook /> },
  { name: "Skills", href: "#skills", icon: <IconBooks /> },
  { name: "Contact", href: "#contact", icon: <IconMessage /> },
] as const;

export function DesktopSidebar() {
  return (
    <nav className="flex h-full flex-col">
      <Link href="/" className="p-4">
        <img
          src="/logo.svg"
          alt="logo"
          width="96.48"
          height="21.26"
          className="h-auto w-full"
          aria-label="logo"
        />
      </Link>
      <div className="flex flex-col">
        <a
          href="#top"
          className={classNames(styles.button, "clickable border-y")}
        >
          <IconChevronsUp aria-label="top" />
        </a>
        {navs.map(({ name, href, icon }) => (
          <a
            key={name}
            href={href}
            className={classNames(
              styles.button,
              "clickable flex items-center gap-2",
            )}
          >
            {icon}
            {name}
          </a>
        ))}
      </div>
      <div className="mt-auto flex justify-between p-4">
        {items.map(({ alt, ...props }) => (
          <a
            key={alt}
            className="p-1"
            href={props.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={alt}
          >
            <img {...props} alt={alt} className="h-6 w-auto" />
          </a>
        ))}
      </div>
      <div className="border-t p-4">(c) 2021 Keita Ito</div>
    </nav>
  );
}
