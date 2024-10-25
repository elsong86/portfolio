// hooks/useInView.tsx
import { useEffect, useState, RefObject } from "react";

export const useInView = (ref: RefObject<HTMLElement>) => {
  const [visibility, setVisibility] = useState(0); // Track visibility as a percentage

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Calculate visible percentage
        const visiblePercentage = entry.intersectionRatio * 100;
        setVisibility(visiblePercentage);
      },
      { threshold: Array.from({ length: 101 }, (_, i) => i * 0.01) } // 0 to 1 threshold steps
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return visibility;
};
