import { SectionTitle } from "./SectionTitle";

import { IconBrandX, IconMail } from "@tabler/icons-react";
import styles from "./Section.module.css";

export function ContactSection() {
  return (
    <section className={styles.section}>
      <SectionTitle href="contact" label="Contact" />
      <ul className="flex flex-col">
        <li className="flex items-center gap-2 px-4 py-3">
          <IconMail aria-hidden="true" />
          contact(at)eguchi.cc
        </li>
        <li>
          <a
            className="clickable flex items-center gap-2 px-4 py-3"
            href="https://x.com/keita_ito_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandX aria-hidden="true" />
            <span>@keita_ito_</span>
          </a>
        </li>
      </ul>
    </section>
  );
}
