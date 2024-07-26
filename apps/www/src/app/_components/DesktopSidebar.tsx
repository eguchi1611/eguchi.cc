import {
  IconAddressBook,
  IconBooks,
  IconChevronsUp,
  IconMessage,
} from "@tabler/icons-react";
import classNames from "classnames";
import Link from "next/link";

import { socials } from "@/constants";
import styles from "./DesktopSidebar.module.css";

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
          className={classNames(styles.button, "clickable block border-y")}
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
      <ul className="mt-auto flex justify-between p-4">
        {socials.map(({ alt, ...props }) => (
          <li key={alt}>
            <a
              className="block p-1"
              href={props.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={alt}
            >
              <img {...props} alt={alt} className="h-6 w-auto" />
            </a>
          </li>
        ))}
      </ul>
      <div className="border-t p-4">(c) 2021 Keita Ito</div>
    </nav>
  );
}
