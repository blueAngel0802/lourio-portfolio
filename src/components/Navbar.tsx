import React, { useEffect, useMemo, useState } from "react";
import { LogoMark } from "./icons";

type Item = { id: string; label: string };

const ITEMS: Item[] = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "skills", label: "TECHNICAL SKILLS" },
  { id: "resume", label: "RESUME" },
  { id: "projects", label: "PROJECTS" },
  { id: "contact", label: "CONTACT" },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 78;
  window.scrollTo({ top: y, behavior: "smooth" });
}

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      const visible = entries.filter(e => e.isIntersecting).sort((a,b) => (b.intersectionRatio - a.intersectionRatio));
      if (visible[0]?.target?.id) setActive(visible[0].target.id);
    }, { rootMargin: "-35% 0px -60% 0px", threshold: [0, .2, .5, .8, 1] });

    for (const item of ITEMS) {
      const el = document.getElementById(item.id);
      if (el) obs.observe(el);
    }
    return () => obs.disconnect();
  }, []);

  return (
    <header style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 30,
      background: "rgba(52,61,79,.72)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid rgba(255,255,255,.06)"
    }}>
      <div className="container" style={{display:"flex", alignItems:"center", justifyContent:"space-between", padding:"10px 0"}}>
        <div style={{display:"flex", alignItems:"center", gap:12}}>
          <LogoMark size={46}/>
          <div style={{lineHeight: 1}}>
            <div style={{fontWeight: 800}}>Lou Rio King</div>
            <div className="muted small">Senior Full‑Stack Engineer</div>
          </div>
        </div>

        <nav style={{display:"flex", gap:18, alignItems:"center"}}>
          {ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToId(item.id)}
              className="btn"
              style={{
                padding:"9px 10px",
                background: "transparent",
                border: "none",
                borderRadius: 10,
                color: active === item.id ? "var(--accent)" : "var(--muted)",
                fontWeight: 700,
                letterSpacing: ".8px",
                fontSize: 13
              }}
              aria-label={item.label}
            >
              <span style={{borderBottom: active === item.id ? "2px solid var(--accent)" : "2px solid transparent", paddingBottom: 3}}>
                {item.label}
              </span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
