import { SectionTitle } from "./SectionTitle";

import { IconBrandX, IconMail } from "@tabler/icons-react";
import styles from "./Section.module.css";

export function ContactSection() {
  return (
    <div className={styles.section}>
      <SectionTitle href="contact" label="Contact" />
      <div className="flex flex-col">
        <div className="flex items-center gap-2 px-4 py-3">
          <IconMail />
          <div>contact(at)eguchi.cc</div>
        </div>
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
