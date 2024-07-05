"use client";

import Image from "next/image";
import Link from "next/link";

import styles from "./Hero.module.css";
import { useOffsetTop } from "@/hooks/useOffsetTop";
import { useRef } from "react";
import { useWindowSize } from "@/hooks/useWindowSize";
import { minmax } from "@/lib/utils";

export function Hero() {
  const masterRef = useRef(null);
  const { viewportTop } = useOffsetTop(masterRef);
  const { windowSize } = useWindowSize();

  // useMemo使わない方がパフォーマンスが良い
  const scroll = calcRatio(viewportTop || undefined, windowSize?.height);

  return (
    <div
      ref={masterRef}
      className={`relative grid min-h-svh place-content-center place-items-center bg-primary-50 bg-fixed ${styles["bg-pattern"]}`}
    >
      <div
        className="absolute inset-0 bg-primary-700 transition-none"
        style={{ opacity: Math.min(scroll, 0.7) }}
      />
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

/**
 * 画面の表示比率を計算
 * @param viewportTop 要素の位置
 * @param windowHeight ウィンドウの高さ
 * @returns 画面の表示比率
 */
function calcRatio(viewportTop = 0, windowHeight = 1): number {
  return minmax(0, 1 - (viewportTop + windowHeight) / windowHeight, 1);
}
