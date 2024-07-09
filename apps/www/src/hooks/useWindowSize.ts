import { useCallback, useEffect, useState } from "react";
import { useThrottle } from "./useThrottle";

interface WindowSize {
  width: number;
  height: number;
}

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowSize | null>(null);

  const handleResize = useThrottle(
    useCallback(() => {
      const { innerWidth: width, innerHeight: height } = window;
      setWindowSize({ width, height });
    }, []),
  );

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return { windowSize };
}
