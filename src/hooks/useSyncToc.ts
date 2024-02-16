import { useEffect, useState } from "react";

export default function useSyncToc(sections: string[]) {
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setSelected(entries.find((entry) => entry.isIntersecting)!.target.id);
      },
      { root: null, rootMargin: "-50% 0px", threshold: 0 },
    );

    sections
      .map((elementId) => document.getElementById(elementId)!)
      .forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  return { selected };
}
