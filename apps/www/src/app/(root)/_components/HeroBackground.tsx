"use client";

import { useOffsetTop } from "@/hooks/useOffsetTop";
import { useWindowSize } from "@/hooks/useWindowSize";
import { minmax } from "@/lib/utils";
import { useRef } from "react";

export function HeroBackground() {
  const masterRef = useRef(null);
  const { viewportTop } = useOffsetTop(masterRef);
  const { windowSize } = useWindowSize();

  // useMemo使わない方がパフォーマンスが良い
  const scroll = calcRatio(viewportTop || undefined, windowSize?.height);

  return (
    <div
      ref={masterRef}
      className="absolute inset-0 bg-primary-700 transition-none"
      style={{ opacity: Math.min(scroll, 0.7) }}
    />
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
