import { RefObject, useCallback, useEffect, useState } from "react";
import { useThrottle } from "./useThrottle";

export function useOffsetTop(ref: RefObject<HTMLElement>) {
  const [offsetTop, setOffsetTop] = useState<number | null>(null);
  const [viewportTop, setViewportTop] = useState<number | null>(null);

  const handleScroll = useThrottle(
    useCallback(() => {
      if (!ref.current) return;

      const clientRect = ref.current.getBoundingClientRect();
      setViewportTop(clientRect.top);
      setOffsetTop(clientRect.top + window.pageYOffset);
    }, [ref]),
    10,
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return { offsetTop, viewportTop };
}
