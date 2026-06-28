"use client";

import { useEffect, useState } from "react";

const FINAL = "NDJOCK";
const CHARS = "#%@&$/<>*_ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function Hero() {
  const [name, setName] = useState(FINAL);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let i = 0;
    const id = setInterval(() => {
      setName(
        FINAL.split("")
          .map((c, idx) => (idx < i ? FINAL[idx] : CHARS[Math.floor(Math.random() * CHARS.length)]))
          .join("")
      );
      i += 0.5;
      if (i >= FINAL.length) {
        setName(FINAL);
        clearInterval(id);
      }
    }, 45);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero pad" id="hero" data-sec="00">
      <div className="hero__over">
        // PORTFOLIO · BUILD 2026 ·{" "}
        <span className="live">STATUS: OPEN TO SENIOR / REMOTE ROLES</span>
      </div>
      <h1>
        <span className="ln1">{name}</span>
        <span className="ln2">
          MICHEL JUNIOR<span className="caret" />
        </span>
      </h1>
      <p className="hero__sub">
        I build software for a living and <b>teach the people who build it</b>. Senior full-stack
        engineer across JavaScript/TypeScript, Flutter and Python — shipping web &amp; mobile from
        first commit to production.
      </p>
      <div className="hero__grid">
        <div className="hero__cell">
          <div className="lbl">Role</div>
          <div className="val">Full-Stack Engineer</div>
        </div>
        <div className="hero__cell">
          <div className="lbl">Based</div>
          <div className="val">Bamenda, Cameroon</div>
        </div>
        <div className="hero__cell">
          <div className="lbl">Core</div>
          <div className="val">JS · TS · Dart · Py</div>
        </div>
        <div className="hero__cell">
          <div className="lbl">Availability</div>
          <div className="val on">● OPEN</div>
        </div>
      </div>
      <div className="hero__cta">
        <a href="#work" className="btn btn--p">
          → View the work
        </a>
        <a href="#contact" className="btn">
          → Get in touch
        </a>
        <a href="/assets/resume.pdf" target="_blank" className="btn">
          ↓ Résumé
        </a>
      </div>
      <div className="scrollhint">[ SCROLL / PRESS 1–5 ] ↓</div>
    </section>
  );
}
