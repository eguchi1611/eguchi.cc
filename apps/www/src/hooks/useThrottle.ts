import { useCallback, useRef } from "react";

/**
 *
 * @param func スロットリングされる関数
 * @returns スロットリングされた関数
 */
export function useThrottle<T>(func: (args?: T) => void) {
  const scrollingTimer = useRef<NodeJS.Timeout>();

  return useCallback(
    (args?: T) => {
      if (scrollingTimer.current) return;
      scrollingTimer.current = setTimeout(() => {
        scrollingTimer.current = undefined;
        func(args);
      }, 50);
    },
    [scrollingTimer, func],
  );
}
