import { SectionTitle } from "./SectionTitle";

import { IconBrandX, IconMail } from "@tabler/icons-react";
import styles from "./Section.module.css";

export function ContactSection() {
  return (
    <div className={styles.section}>
      <SectionTitle href="contact" label="Contact" />
      <div className="flex flex-col">
        <a
          className="clickable flex items-center gap-2 px-4 py-3"
          href="https://x.com/keita_ito_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconMail />
          <div>contact(at)eguchi.cc</div>
        </a>
        <a
          className="clickable flex items-center gap-2 px-4 py-3"
          href="https://x.com/keita_ito_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandX />
          <div>@keita_ito_</div>
        </a>
      </div>
    </div>
  );
}
