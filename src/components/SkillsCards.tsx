import React from "react";

type SkillGroup = {
  title: string;
  items: { label: string; iconClass?: string }[];
};

function IconTile({ label, iconClass }: { label: string; iconClass?: string }) {
  const cls = iconClass ? `${iconClass} colored` : undefined;
  return (
    <div className="iconTile" title={label}>
      {cls ? (
        <i className={cls} aria-hidden="true" />
      ) : (
        <span style={{ fontWeight: 900, letterSpacing: ".6px", fontSize: 14, color: "#0f172a" }}>
          {label.slice(0, 4).toUpperCase()}
        </span>
      )}
    </div>
  );
}

function SkillCard
({ g }: { g: SkillGroup }) {
  return (
    <div
      className="card skillCard"
      style={{
        padding: 18,
        position: "relative",
        overflow: "hidden",
        borderRadius: 16,
        background: "rgba(255,255,255,.06)",
      }}
    >
      {/* faux 3D layers (like Boris) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 16,
          boxShadow:
            "12px 12px 0 rgba(98,210,198,.20), 22px 22px 0 rgba(98,210,198,.10)",
          pointerEvents: "none",
          opacity: 0.9,
        }}
      />
      <div style={{ position: "relative" }}>
        <div style={{ fontWeight: 900, fontSize: 18, marginBottom: 14 }}>{g.title}</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          {g.items.map((s) => (
            <IconTile key={s.label} label={s.label} iconClass={s.iconClass} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SkillsCards({ groups }: { groups: SkillGroup[] }) {
  return (
    <div className="grid cols-3">
      {groups.map((g) => (
        <SkillCard key={g.title} g={g} />
      ))}
    </div>
  );
}
