import React from "react";

type IconProps = { size?: number; className?: string };

export function IconSun({ size = 18, className }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" stroke="currentColor" strokeWidth="2" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function IconMoon({ size = 18, className }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21 13.2A8 8 0 0 1 10.8 3 7 7 0 1 0 21 13.2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconArrowUp({ size = 18, className }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M6 11l6-6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconLink({ size = 18, className }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.07 0l1.41-1.41a5 5 0 0 0 0-7.07 5 5 0 0 0-7.07 0L10 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M14 11a5 5 0 0 0-7.07 0L5.52 12.4a5 5 0 1 0 7.07 7.07L14 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function LogoMark({ size = 48 }: { size?: number }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: 999,
      border: "2px solid rgba(98,210,198,.55)",
      display: "grid", placeItems: "center",
      boxShadow: "0 18px 35px rgba(0,0,0,.22)",
      background: "rgba(0,0,0,.10)"
    }}>
      <div style={{fontWeight: 800, letterSpacing: ".5px"}}>
        <span className="accent">L</span>K
      </div>
    </div>
  );
}
