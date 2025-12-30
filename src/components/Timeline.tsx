import React, { useState } from "react";

type Item = {
  company: string;
  role: string;
  dates: string;
  highlights: string[];
};

export default function Timeline({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<Record<number, boolean>>({ 0: true });

  return (
    <div style={{position:"relative", paddingLeft: 26}}>
      <div style={{
        position:"absolute",
        left: 10,
        top: 10,
        bottom: 10,
        width: 2,
        background: "rgba(98,210,198,.35)"
      }}/>

      <div style={{display:"grid", gap: 18}}>
        {items.map((it, idx) => (
          <div key={idx} style={{position:"relative"}}>
            <div style={{
              position:"absolute",
              left: -1,
              top: 14,
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "var(--bg)",
              border: "2px solid var(--accent)"
            }}/>
            <div style={{display:"flex", justifyContent:"space-between", gap: 12, alignItems:"center"}}>
              <div>
                <div style={{fontWeight: 900, fontSize: 18}} className="accent">{it.company}</div>
                <div className="muted">{it.role}</div>
              </div>
              <button
                className="btn"
                onClick={() => setOpen(prev => ({...prev, [idx]: !prev[idx]}))}
                style={{padding:"8px 10px", fontWeight: 800}}
                aria-label={`Toggle details for ${it.company}`}
              >
                {open[idx] ? "Hide" : "Details"}
              </button>
            </div>
            <div style={{marginTop: 10}}>
              <span className="pill" style={{borderColor:"rgba(98,210,198,.35)"}}>{it.dates}</span>
            </div>

            {open[idx] ? (
              <ul style={{margin: "12px 0 0 0", paddingLeft: 18, color:"var(--text)"}}>
                {it.highlights.map((h, i) => (
                  <li key={i} style={{marginBottom: 8}} className="small">{h}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
