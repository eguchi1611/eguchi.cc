import { IconChevronsDown } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

import styles from "./Hero.module.css";
import { HeroBackground } from "./HeroBackground";

export function Hero() {
  return (
    <div
      className={`relative grid min-h-96 place-content-center place-items-center bg-primary-50 bg-fixed ${styles["bg-pattern"]}`}
    >
      <HeroBackground />
      <Link href="/" className="z-10">
        <Image
          alt=""
          src="/logo.svg"
          width={96.48}
          height={21.26}
          className="h-16 w-auto"
        />
      </Link>
      <a href="#aboutme" className="absolute bottom-0 animate-bounce p-8">
        <IconChevronsDown size={32} className="text-primary-500" />
      </a>
    </div>
  );
}
