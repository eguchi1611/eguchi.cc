import { useCallback, useEffect, useState } from "react";

interface WindowSize {
  width: number;
  height: number;
}

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowSize | null>(null);

  const handleResize = useCallback(() => {
    const { innerWidth: width, innerHeight: height } = window;
    setWindowSize({ width, height });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return { windowSize };
}
