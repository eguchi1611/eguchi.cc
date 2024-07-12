import { RefObject, useCallback, useEffect, useState } from "react";

export function useOffsetTop(ref: RefObject<HTMLElement>) {
  const [offsetTop, setOffsetTop] = useState<number | null>(null);
  const [viewportTop, setViewportTop] = useState<number | null>(null);

  const handleScroll = useCallback(() => {
    if (!ref.current) return;

    const clientRect = ref.current.getBoundingClientRect();
    setViewportTop(clientRect.top);
    setOffsetTop(clientRect.top + window.scrollY);
  }, [ref]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return { offsetTop, viewportTop };
}
