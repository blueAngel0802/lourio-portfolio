import React, { useMemo } from "react";
import Navbar from "./components/Navbar";
import SectionTitle from "./components/SectionTitle";
import AnimatedWaves from "./components/AnimatedWaves";
import SkillsCards from "./components/SkillsCards";
import SkillBar from "./components/SkillBar";
import Timeline from "./components/Timeline";
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";
import FloatingButtons from "./components/FloatingButtons";
import profile from "./content/profile.json";

function WaveBackdrop() {
  // simple decorative wave, similar vibe to Boris's "layered hills"
  return (
    <svg width="100%" height="180" viewBox="0 0 1200 180" preserveAspectRatio="none" aria-hidden="true"
      style={{position:"absolute", top:0, left:0, opacity:.26, pointerEvents:"none"}}>
      <path d="M0,60 C200,10 360,10 600,60 C840,110 1000,110 1200,60 L1200,0 L0,0 Z" fill="black" opacity=".35"/>
      <path d="M0,100 C240,40 420,40 600,100 C780,160 960,160 1200,100 L1200,0 L0,0 Z" fill="black" opacity=".22"/>
    </svg>
  );
}

function HeroArt() {
  // lightweight illustration: floating "code cards" and a desk block (SVG)
  return (
    <svg viewBox="0 0 900 520" width="100%" height="100%" aria-hidden="true" style={{maxWidth: 520}}>
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--accent)" stopOpacity=".95" />
          <stop offset="1" stopColor="var(--accent)" stopOpacity=".25" />
        </linearGradient>
      </defs>

      <rect x="80" y="60" width="150" height="90" rx="12" fill="url(#g1)" opacity=".85"/>
      <rect x="110" y="85" width="90" height="10" rx="5" fill="white" opacity=".45"/>
      <rect x="110" y="105" width="110" height="10" rx="5" fill="white" opacity=".30"/>

      <rect x="660" y="70" width="150" height="90" rx="12" fill="url(#g1)" opacity=".65"/>
      <rect x="690" y="95" width="90" height="10" rx="5" fill="white" opacity=".45"/>
      <rect x="690" y="115" width="110" height="10" rx="5" fill="white" opacity=".30"/>

      <g opacity=".9">
        <rect x="250" y="260" width="420" height="200" rx="18" fill="rgba(255,255,255,.08)"/>
        <rect x="280" y="290" width="170" height="110" rx="14" fill="rgba(0,0,0,.18)" stroke="rgba(98,210,198,.35)"/>
        <rect x="470" y="290" width="170" height="110" rx="14" fill="rgba(0,0,0,.18)" stroke="rgba(98,210,198,.35)"/>
        <rect x="320" y="420" width="280" height="18" rx="9" fill="rgba(98,210,198,.35)"/>
        <circle cx="640" cy="360" r="26" fill="rgba(98,210,198,.18)"/>
        <path d="M632 360h16M640 352v16" stroke="rgba(255,255,255,.45)" strokeWidth="2" strokeLinecap="round"/>
      </g>
    </svg>
  );
}

export default function App() {
  const skillScores = useMemo(() => ([
    { label: "React / TypeScript", value: 92 },
    { label: "Node.js / APIs", value: 90 },
    { label: "AWS (SNS/SQS/Lambda)", value: 86 },
    { label: "Distributed Systems", value: 84 },
    { label: "Databases (Postgres/Mongo)", value: 86 },
    { label: "Testing (Jest/Cypress)", value: 82 },
    { label: "CI/CD + DevOps", value: 80 },
  ]), []);

  const interests = useMemo(() => ([
    "Web Applications",
    "Frontend Development",
    "Backend Development",
    "Distributed Systems",
    "Cloud & DevOps",
    "Testing & Quality",
    "Performance Optimization",
    "Product Collaboration",
  ]), []);

  return (
    <>
      <Navbar />
      <FloatingButtons />

      {/* HOME */}
      <section id="home" className="section" style={{paddingTop: 120, minHeight: "92vh", display:"grid", alignItems:"center"}}>
        <div className="container" style={{display:"grid", gap: 26, alignItems:"center"}}>
          <div className="grid cols-2" style={{alignItems:"center"}}>
            <div>
              <div className="script accent" style={{fontSize: 56, lineHeight: 1.05}}>
                {profile.name}
              </div>
              <div style={{fontSize: 22, fontWeight: 800, marginTop: 10}} className="shadowText">
                {profile.tagline}
              </div>

              <p className="muted" style={{maxWidth: 560, marginTop: 18, lineHeight: 1.7}}>
                {profile.summary}
              </p>

              <div style={{display:"flex", flexWrap:"wrap", gap: 10, marginTop: 14}}>
                <span className="pill">Remote‑friendly</span>
                <span className="pill">10+ years</span>
                <span className="pill">React • Node • AWS</span>
              </div>

              <div style={{display:"flex", gap: 12, flexWrap:"wrap", marginTop: 18}}>
                <a className="btn" href="#projects">View Projects</a>
                <a className="btn" href={profile.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="btn" href={`mailto:${profile.contact.email}`}>Email</a>
              </div>

              <div className="muted small" style={{marginTop: 14}}>
                Tip: use <span className="kbd">Home</span>/<span className="kbd">End</span> or navbar to jump sections.
              </div>
            </div>

            <div style={{display:"grid", placeItems:"center"}}>
              <HeroArt />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <AnimatedWaves />
        <div className="container">
          <SectionTitle title="About" />
          <div className="grid cols-2" style={{alignItems:"center"}}>
            <div style={{display:"grid", placeItems:"center"}}>
              <div style={{
                width: 240, height: 240, borderRadius: 999,
                background: "radial-gradient(120px 120px at 40% 35%, rgba(98,210,198,.38), rgba(0,0,0,.15))",
                border: "3px solid rgba(98,210,198,.55)",
                boxShadow: "0 18px 40px rgba(0,0,0,.25)",
                display:"grid", placeItems:"center",
                textAlign:"center",
                padding: 18
              }}>
                <div>
                  <div style={{fontWeight: 900, fontSize: 18}}>Senior Full‑Stack</div>
                  <div className="muted small" style={{marginTop: 6}}>
                    React • Node.js • AWS • Distributed Systems
                  </div>
                </div>
              </div>
            </div>

            <div className="card glow" style={{padding: 20}}>
              <p style={{marginTop: 0, lineHeight: 1.75}}>
                I build <span className="accent" style={{fontWeight: 900}}>reliable, scalable</span> web applications—shipping
                polished user experiences while keeping the backend architecture maintainable and observable.
              </p>
              <p className="muted" style={{lineHeight: 1.75}}>
                My strengths are deep ownership, clear communication, and rapid autonomous execution—especially across
                <span className="accent" style={{fontWeight: 900}}> distributed systems</span>, event‑driven patterns, and cloud infrastructure.
              </p>

              <div style={{marginTop: 16}}>
                <div style={{fontWeight: 900, marginBottom: 10}}>Interests</div>
                <div className="grid cols-4">
                  {interests.map((x) => (
                    <div key={x} className="card" style={{padding: 14, borderRadius: 14, background: "var(--card2)"}}>
                      <div style={{fontWeight: 800}} className="small">{x}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
<section id="skills" className="section">
  <div className="container">
    <SectionTitle title="Technical Skills" />
    <SkillsCards
      
groups={[
  {
    title: "Languages",
    items: [
      { label: "C", iconClass: "devicon-c-plain" },
      { label: "C++", iconClass: "devicon-cplusplus-plain" },
      { label: "Python", iconClass: "devicon-python-plain" },
      { label: "JavaScript", iconClass: "devicon-javascript-plain" },
      { label: "TypeScript", iconClass: "devicon-typescript-plain" },
      { label: "Java", iconClass: "devicon-java-plain" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { label: "HTML5", iconClass: "devicon-html5-plain" },
      { label: "CSS3", iconClass: "devicon-css3-plain" },
      { label: "Tailwind", iconClass: "devicon-tailwindcss-plain" },
      { label: "React", iconClass: "devicon-react-original" },
      { label: "Angular", iconClass: "devicon-angularjs-plain" },
      { label: "Bootstrap", iconClass: "devicon-bootstrap-plain" },
    ],
  },
  {
    title: "Backend",
    items: [
      { label: "Django", iconClass: "devicon-django-plain" },
      { label: "Express", iconClass: "devicon-express-original" },
      { label: "Node.js", iconClass: "devicon-nodejs-plain" },
      { label: ".NET", iconClass: "devicon-dotnetcore-plain" },
    ],
  },
  {
    title: "Cloud",
    items: [
      { label: "AWS", iconClass: "devicon-amazonwebservices-original" },
      { label: "GCP", iconClass: "devicon-googlecloud-plain" },
      { label: "Kubernetes", iconClass: "devicon-kubernetes-plain" },
    ],
  },
  {
    title: "Databases",
    items: [
      { label: "MongoDB", iconClass: "devicon-mongodb-plain" },
      { label: "PostgreSQL", iconClass: "devicon-postgresql-plain" },
      { label: "MySQL", iconClass: "devicon-mysql-plain" },
    ],
  },
  {
    title: "Tools",
    items: [
      { label: "Nginx", iconClass: "devicon-nginx-original" },
      { label: "Figma", iconClass: "devicon-figma-plain" },
      { label: "Linux", iconClass: "devicon-linux-plain" },
      { label: "GitHub", iconClass: "devicon-github-original" },
      { label: "Git", iconClass: "devicon-git-plain" },
      { label: "Jira", iconClass: "devicon-jira-plain" },
      { label: "Postman", iconClass: "devicon-postman-plain" },
      { label: "VS Code", iconClass: "devicon-vscode-plain" },
      { label: "Docker", iconClass: "devicon-docker-plain" },
    ],
  },
]}          />

    <div className="muted small" style={{ marginTop: 14, textAlign: "center" }}>
      </div>
  </div>
</section>

{/* RESUME */}
      <section id="resume" className="section">
        <AnimatedWaves />
        <div className="container">
          <SectionTitle title="Resume" />
          <div className="grid cols-2">
            <div className="grid" style={{gap: 22}}>
              <div className="card glow" style={{padding: 20}}>
                <div style={{fontWeight: 900, fontSize: 18}}>Education</div>
                <div className="hairline" style={{margin:"12px 0"}}/>
                {profile.education.map((e) => (
                  <div key={e.school} style={{display:"grid", gap: 6}}>
                    <div className="accent" style={{fontWeight: 900}}>{e.school}</div>
                    <div className="muted">{e.degree}</div>
                    <div className="pill" style={{width:"fit-content"}}>{e.dates}</div>
                  </div>
                ))}
              </div>

              <div className="card glow" style={{padding: 20}}>
                <div style={{fontWeight: 900, fontSize: 18}}>Highlights</div>
                <div className="hairline" style={{margin:"12px 0"}}/>
                <ul style={{margin: 0, paddingLeft: 18}} className="small">
                  <li style={{marginBottom: 10}}>10+ years across full‑stack web development and cloud systems.</li>
                  <li style={{marginBottom: 10}}>Strong event‑driven architecture experience (SNS/SQS/Lambda).</li>
                  <li style={{marginBottom: 10}}>Testing and CI/CD focus for predictable, safe releases.</li>
                </ul>
              </div>
            </div>

            <div className="card glow" style={{padding: 20}}>
              <div style={{fontWeight: 900, fontSize: 18}}>Work Experience</div>
              <div className="hairline" style={{margin:"12px 0"}}/>
              <Timeline items={profile.experience} />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="container">
          <SectionTitle title="Projects" subtitle="Representative work based on my experience"/>
          <div className="grid cols-2">
            {profile.projects.map((p) => (
              <ProjectCard key={p.title} p={p as any} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section" style={{paddingBottom: 120}}>
        <AnimatedWaves />
        <div className="container">
          <SectionTitle title="Contact" />
          <div className="grid cols-2" style={{alignItems:"start"}}>
            <ContactForm email={profile.contact.email} />
            <div className="card glow" style={{padding: 20}}>
              <div style={{display:"grid", gap: 14}}>
                <div>
                  <div style={{fontWeight: 900, fontSize: 18}}>Email</div>
                  <div className="accent small" style={{marginTop: 6}}>{profile.contact.email}</div>
                </div>
                <div>
                  <div style={{fontWeight: 900, fontSize: 18}}>Phone</div>
                  <div className="accent small" style={{marginTop: 6}}>{profile.contact.phone}</div>
                </div>
                <div>
                  <div style={{fontWeight: 900, fontSize: 18}}>LinkedIn</div>
                  <a className="accent small" style={{marginTop: 6, display:"inline-block"}} href={profile.contact.linkedin} target="_blank" rel="noreferrer">
                    {profile.contact.linkedin}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer style={{padding: "22px 0", textAlign:"center"}} className="muted small">
        © {new Date().getFullYear()} {profile.name}. Built with React + Vite.
      </footer>
    </>
  );
}
