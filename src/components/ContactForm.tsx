import React, { useMemo, useState } from "react";

export default function ContactForm({ email }: { email: string }) {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [msg, setMsg] = useState("");

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "someone"}`);
    const body = encodeURIComponent(`Name: ${name}
Email: ${from}

${msg}`);
    return `mailto:${email}?subject=${subject}&body=${body}`;
  }, [email, name, from, msg]);

  return (
    <div className="card glow" style={{padding: 20}}>
      <div className="grid" style={{gap: 14}}>
        <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder="Email" value={from} onChange={(e) => setFrom(e.target.value)} />
        <textarea placeholder="Message" value={msg} onChange={(e) => setMsg(e.target.value)} />
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", gap: 12}}>
          <a className="muted small" href={mailto}>Send me mail directly</a>
          <a className="btn" href={mailto} aria-label="Send email">
            SEND ✈
          </a>
        </div>
      </div>
    </div>
  );
}
