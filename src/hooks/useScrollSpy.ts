import { useEffect, useState } from "react";
export function useScrollSpy() {
  const [active, set] = useState("hero");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) set(e.target.id);
        });
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return active;
}
