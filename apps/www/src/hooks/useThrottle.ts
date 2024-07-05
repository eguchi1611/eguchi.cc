import { useCallback, useRef } from "react";

/**
 *
 * @param func スロットリングされる関数
 * @param duration スロットリングする間隔 (ms)
 * @returns スロットリングされた関数
 */
export function useThrottle<T>(func: (args?: T) => void, duration: number) {
  const scrollingTimer = useRef<NodeJS.Timeout>();

  return useCallback(
    (args?: T) => {
      if (scrollingTimer.current) return;
      scrollingTimer.current = setTimeout(() => {
        func(args);
        scrollingTimer.current = undefined;
      }, duration);
    },
    [scrollingTimer, func, duration],
  );
}
