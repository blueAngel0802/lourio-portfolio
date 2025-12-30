import React from "react";

export default function SkillBar({ label, value }: { label: string; value: number }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div style={{display:"grid", gap:8}}>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"baseline"}}>
        <div style={{fontWeight:800}}>{label}</div>
        <div className="muted small">{pct}%</div>
      </div>
      <div style={{
        height: 10,
        borderRadius: 999,
        background: "rgba(0,0,0,.18)",
        border: "1px solid rgba(255,255,255,.06)",
        overflow: "hidden"
      }}>
        <div style={{
          width: `${pct}%`,
          height: "100%",
          background: "linear-gradient(90deg, var(--accent), rgba(98,210,198,.45))",
          borderRadius: 999,
          boxShadow: "0 10px 20px rgba(98,210,198,.16)"
        }}/>
      </div>
    </div>
  );
}
