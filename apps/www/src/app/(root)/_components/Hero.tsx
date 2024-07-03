import Image from "next/image";
import Link from "next/link";

import styles from "./Hero.module.css";

export function Hero() {
  return (
    <div
      className={`grid min-h-svh place-content-center place-items-center ${styles.bg}`}
    >
      <Link href="/">
        <Image
          alt=""
          src="/logo.svg"
          width={96.48}
          height={21.26}
          className="h-16 w-auto"
        />
      </Link>
    </div>
  );
}
