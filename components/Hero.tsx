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
        // NDJOCKCODES · AI & SOFTWARE STUDIO ·{" "}
        <span className="live">STATUS: ACCEPTING NEW PROJECTS</span>
      </div>
      <h1>
        <span className="ln1">{name}</span>
        <span className="ln2">
          CODES<span className="caret" />
        </span>
      </h1>
      <p className="hero__sub">
        We build <b>AI tools and software</b> for businesses, and we train teams to use AI in
        their daily work. Based in Yaoundé, working on-site or remotely.
      </p>
      <div className="hero__grid">
        <div className="hero__cell">
          <div className="lbl">Focus</div>
          <div className="val">AI · Software</div>
        </div>
        <div className="hero__cell">
          <div className="lbl">Based</div>
          <div className="val">Yaoundé, Cameroon</div>
        </div>
        <div className="hero__cell">
          <div className="lbl">Delivery</div>
          <div className="val">Remote · On-site</div>
        </div>
        <div className="hero__cell">
          <div className="lbl">Status</div>
          <div className="val on">● OPEN</div>
        </div>
      </div>
      <div className="hero__cta">
        <a href="#services" className="btn btn--p">
          → Our services
        </a>
        <a href="#contact" className="btn">
          → Start a project
        </a>
      </div>
      <div className="scrollhint">[ SCROLL / PRESS 1-5 ] ↓</div>
    </section>
  );
}
