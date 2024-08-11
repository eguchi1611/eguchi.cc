import { IconChevronsUp } from "@tabler/icons-react";
import classNames from "classnames";
import Link from "next/link";

import { navs, socials } from "@/constants";
import styles from "./DesktopSidebar.module.css";

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
      <ul className="flex flex-col">
        <li>
          <a
            href="#top"
            className={classNames(styles.button, "clickable block border-y")}
          >
            <IconChevronsUp aria-label="top" />
          </a>
        </li>
        {navs.map(({ name, href, icon }) => (
          <li key={name}>
            <a
              href={href}
              className={classNames(
                styles.button,
                "clickable flex items-center gap-2",
              )}
            >
              {icon}
              {name}
            </a>
          </li>
        ))}
      </ul>
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
