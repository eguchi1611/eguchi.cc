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
    <div className={styles.section}>
      <SectionTitle href="about" label="About" />
      <div className="flex flex-col justify-around gap-4 sm:flex-row">
        <div className="grid shrink-0 place-items-center">
          <img
            src="/icon.png"
            alt=""
            width="320"
            height="320"
            className="h-auto w-32 rounded-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <IconSignature />
            <div className="flex-1">
              伊藤啓太 (Keita Ito)
              <br />
              えぐち
            </div>
          </div>
          <div className="flex gap-2">
            <IconCake />
            <div className="flex-1">
              &apos;04 ({new Date().getFullYear() - 2004})
            </div>
          </div>
          <div className="flex gap-2">
            <IconMapPin />
            <div className="flex-1">東京都調布市</div>
          </div>
          <div className="flex gap-2">
            <IconSchool />
            <div className="flex-1">
              国立大学法人 電気通信大学
              <br />
              情報理工学域 I類
              <br />
              メディア情報学プログラム
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
