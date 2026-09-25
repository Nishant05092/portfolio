import { useState } from "react";
export function useTheme() {
  const [dark, setDark] = useState(
    document.documentElement.classList.contains("dark"),
  );
  function toggle() {
    const value = !dark;
    setDark(value);
    document.documentElement.classList.toggle("dark", value);
    try {
      localStorage.setItem("theme", value ? "dark" : "light");
    } catch {
      /* Storage may be unavailable in private mode. */
    }
  }
  return { dark, toggle };
}
