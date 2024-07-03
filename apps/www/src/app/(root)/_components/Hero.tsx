"use client";

import Image from "next/image";
import Link from "next/link";

import styles from "./Hero.module.css";
import { useOffsetTop } from "@/hooks/useOffsetTop";
import { useRef } from "react";
import { useWindowSize } from "@/hooks/useWindowSize";

export function Hero() {
  const masterRef = useRef(null);
  const { viewportTop } = useOffsetTop(masterRef);
  const { windowSize } = useWindowSize();

  const a =
    viewportTop && windowSize
      ? Math.max(
          0,
          Math.min(
            1,
            1 - (viewportTop + windowSize?.height) / windowSize?.height,
          ),
        )
      : 0;

  console.log(a);

  return (
    <div
      ref={masterRef}
      className={`relative grid min-h-svh place-content-center place-items-center bg-primary-50 bg-fixed ${styles["bg-pattern"]}`}
    >
      <div className="absolute inset-0 bg-primary-700" style={{ opacity: a }} />
      <Link href="/" className="z-10">
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
