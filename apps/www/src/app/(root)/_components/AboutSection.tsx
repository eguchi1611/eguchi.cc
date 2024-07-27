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
            width="320"
            height="320"
            className="h-auto w-32 rounded-full"
            aria-hidden="true"
            loading="lazy"
            fetchPriority="high"
            alt="logo"
            srcSet="https://eguchi-cc.imgix.net/icon.png?auto=format,compress&w=100 100w, https://eguchi-cc.imgix.net/icon.png?auto=format,compress&w=116 116w, https://eguchi-cc.imgix.net/icon.png?auto=format,compress&w=134 134w, https://eguchi-cc.imgix.net/icon.png?auto=format,compress&w=156 156w, https://eguchi-cc.imgix.net/icon.png?auto=format,compress&w=182 182w, https://eguchi-cc.imgix.net/icon.png?auto=format,compress&w=210 210w, https://eguchi-cc.imgix.net/icon.png?auto=format,compress&w=244 244w, https://eguchi-cc.imgix.net/icon.png?auto=format,compress&w=282 282w, https://eguchi-cc.imgix.net/icon.png?auto=format,compress&w=328 328w, https://eguchi-cc.imgix.net/icon.png?auto=format,compress&w=380 380w, https://eguchi-cc.imgix.net/icon.png?auto=format,compress&w=442 442w, https://eguchi-cc.imgix.net/icon.png?auto=format,compress&w=512 512w, https://eguchi-cc.imgix.net/icon.png?auto=format,compress&w=594 594w, https://eguchi-cc.imgix.net/icon.png?auto=format,compress&w=688 688w, https://eguchi-cc.imgix.net/icon.png?auto=format,compress&w=798 798w, https://eguchi-cc.imgix.net/icon.png?auto=format,compress&w=926 926w, https://eguchi-cc.imgix.net/icon.png?auto=format,compress&w=1074 1074w, https://eguchi-cc.imgix.net/icon.png?auto=format,compress&w=1246 1246w, https://eguchi-cc.imgix.net/icon.png?auto=format,compress&w=1446 1446w, https://eguchi-cc.imgix.net/icon.png?auto=format,compress&w=1678 1678w, https://eguchi-cc.imgix.net/icon.png?auto=format,compress&w=1946 1946w, https://eguchi-cc.imgix.net/icon.png?auto=format,compress&w=2258 2258w, https://eguchi-cc.imgix.net/icon.png?auto=format,compress&w=2618 2618w, https://eguchi-cc.imgix.net/icon.png?auto=format,compress&w=3038 3038w, https://eguchi-cc.imgix.net/icon.png?auto=format,compress&w=3524 3524w, https://eguchi-cc.imgix.net/icon.png?auto=format,compress&w=4088 4088w, https://eguchi-cc.imgix.net/icon.png?auto=format,compress&w=4742 4742w, https://eguchi-cc.imgix.net/icon.png?auto=format,compress&w=5500 5500w, https://eguchi-cc.imgix.net/icon.png?auto=format,compress&w=6380 6380w, https://eguchi-cc.imgix.net/icon.png?auto=format,compress&w=7400 7400w"
            src="https://eguchi-cc.imgix.net/icon.png?ixembed=1722011240807&auto=format,compress"
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
