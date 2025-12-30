import React from "react";

export default function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div style={{textAlign:"center", marginBottom: 28}}>
      <div className="shadowText" style={{fontSize: 42, fontWeight: 900, letterSpacing: ".3px"}}>
        {title}
      </div>
      {subtitle ? (
        <div className="muted" style={{marginTop: 6}}>{subtitle}</div>
      ) : null}
    </div>
  );
}
