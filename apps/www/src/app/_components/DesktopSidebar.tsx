import {
  IconAddressBook,
  IconBooks,
  IconChevronsUp,
  IconMessage,
} from "@tabler/icons-react";
import Link from "next/link";

import classNames from "classnames";
import styles from "./DesktopSidebar.module.css";

const items = [
  { src: "/twitter.svg", alt: "twitter", width: 128, height: 128 },
  { src: "/bluesky.svg", alt: "bluesky", width: 682.667, height: 682.667 },
  { src: "/qiita.svg", alt: "qiita", width: 400, height: 400 },
  { src: "/zenn.svg", alt: "zenn", width: 88.3, height: 88.3 },
  { src: "/github.svg", alt: "github", width: 128, height: 128 },
] as const;

const navs = [
  { name: "About", href: "#", icon: <IconAddressBook /> },
  { name: "Works", href: "#", icon: <IconBooks /> },
  { name: "Contact", href: "#", icon: <IconMessage /> },
] as const;

export function DesktopSidebar() {
  return (
    <div className="flex h-full flex-col">
      <Link href="/" className="p-4">
        <img
          src="/logo.svg"
          alt="logo"
          width="96.48"
          height="21.26"
          className="h-auto w-full"
        />
      </Link>
      <div className="flex flex-col">
        <a href="#" className={classNames(styles.button, "border-y px-4 py-2")}>
          <IconChevronsUp />
        </a>
        {navs.map(({ name, href, icon }) => (
          <a
            key={name}
            href={href}
            className={classNames(
              styles.button,
              "flex items-center gap-2 px-4 py-2",
            )}
          >
            {icon}
            {name}
          </a>
        ))}
      </div>
      <div className="mt-auto flex justify-between gap-1 p-4">
        {items.map(({ alt, ...props }) => (
          <a
            key={alt}
            className="transition-transform hover:translate-y-1"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img {...props} alt={alt} className="h-6 w-auto" />
          </a>
        ))}
      </div>
      <div className="border-t p-4">(c) 2021 Keita Ito</div>
    </div>
  );
}
