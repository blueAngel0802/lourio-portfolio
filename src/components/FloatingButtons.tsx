import React, { useEffect, useMemo, useState } from "react";
import { IconArrowUp, IconMoon, IconSun } from "./icons";

function setTheme(theme: "dark" | "light") {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("theme", theme);
}

export default function FloatingButtons() {
  const [theme, setThemeState] = useState<"dark" | "light">("dark");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as "dark" | "light" | null);
    const initial = saved ?? "dark";
    setThemeState(initial);
    setTheme(initial);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 800);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setThemeState(next);
    setTheme(next);
  };

  return (
    <>
      <button
        onClick={toggle}
        className="btn"
        style={{
          position:"fixed",
          left: 18,
          bottom: 18,
          width: 52,
          height: 52,
          borderRadius: 999,
          justifyContent:"center",
          zIndex: 50
        }}
        aria-label="Toggle theme"
        title="Toggle theme"
      >
        {theme === "dark" ? <IconSun /> : <IconMoon />}
      </button>

      {showTop ? (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="btn"
          style={{
            position:"fixed",
            right: 18,
            bottom: 18,
            width: 52,
            height: 52,
            borderRadius: 999,
            justifyContent:"center",
            zIndex: 50
          }}
          aria-label="Scroll to top"
          title="Back to top"
        >
          <IconArrowUp />
        </button>
      ) : null}
    </>
  );
}
