import {
  IconCake,
  IconMapPin,
  IconSchool,
  IconSignature,
} from "@tabler/icons-react";

import styles from "./Section.module.css";
import { SectionTitle } from "./SectionTitle";

export function AboutSection() {
  return (
    <section className={styles.section}>
      <SectionTitle href="about" label="About" />
      <div className="flex flex-col justify-around gap-4 sm:flex-row">
        <div className="grid shrink-0 place-items-center">
          <img
            src="/icon.png"
            alt="logo"
            width="320"
            height="320"
            className="h-auto w-32 rounded-full"
            aria-hidden="true"
          />
        </div>
        <ul className="flex flex-col gap-2">
          <li className="flex gap-2">
            <IconSignature aria-label="name" />
            <p className="flex-1">
              伊藤啓太 (Keita Ito)
              <br />
              えぐち
            </p>
          </li>
          <li className="flex gap-2">
            <IconCake aria-label="birthday" />
            <p className="flex-1" aria-label="2004年生まれ">
              &apos;04 ({new Date().getFullYear() - 2004})
            </p>
          </li>
          <li className="flex gap-2">
            <IconMapPin aria-label="address" />
            <p className="flex-1">東京都調布市</p>
          </li>
          <li className="flex gap-2">
            <IconSchool aria-label="school" />
            <p className="flex-1">
              国立大学法人 電気通信大学
              <br />
              情報理工学域 I類
              <br />
              メディア情報学プログラム
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
