import { useEffect, useState } from "react";
export function useMediaQuery(query: string) {
  const [matches, set] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const m = window.matchMedia(query);
    const change = () => set(m.matches);
    change();
    m.addEventListener("change", change);
    return () => m.removeEventListener("change", change);
  }, [query]);
  return matches;
}
export function useReducedMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
