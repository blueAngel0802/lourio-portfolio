import React from "react";
import { IconLink } from "./icons";

type Project = {
  title: string;
  subtitle: string;
  tags: string[];
  description: string;
  links: { label: string; href: string }[];
};

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="card glow" style={{padding: 18}}>
      <div style={{display:"flex", justifyContent:"space-between", gap: 14, alignItems:"start"}}>
        <div>
          <div style={{fontWeight: 900, fontSize: 18}}>{p.title}</div>
          <div className="muted small" style={{marginTop: 4}}>{p.subtitle}</div>
        </div>
      </div>

      <div style={{display:"flex", flexWrap:"wrap", gap: 8, marginTop: 12}}>
        {p.tags.map((t) => (
          <span key={t} className="pill">{t}</span>
        ))}
      </div>

      <p className="small" style={{marginTop: 12, marginBottom: 12, color: "var(--text)"}}>
        {p.description}
      </p>

      {p.links.length ? (
        <div style={{display:"flex", gap: 10, flexWrap:"wrap"}}>
          {p.links.map((l) => (
            <a key={l.href} className="btn" href={l.href} target="_blank" rel="noreferrer">
              <IconLink />
              {l.label}
            </a>
          ))}
        </div>
      ) : (
        <div className="btn small">Links to</div>
      )}
    </div>
  );
}
