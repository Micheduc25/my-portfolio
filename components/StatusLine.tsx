"use client";

import { useEffect, useState } from "react";

function watTime(): string {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const w = new Date(utc + 3600000);
  const p = (n: number) => String(n).padStart(2, "0");
  return `${p(w.getHours())}:${p(w.getMinutes())}:${p(w.getSeconds())}`;
}

export default function StatusLine() {
  const [clock, setClock] = useState("--:--:--");
  const [sec, setSec] = useState("00");

  useEffect(() => {
    setClock(watTime());
    const id = setInterval(() => setClock(watTime()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-sec]"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setSec((e.target as HTMLElement).dataset.sec || "00");
        });
      },
      { threshold: 0.5 }
    );
    els.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <div className="status">
      <div className="status__l">
        <span className="dot">●</span> <span>NDJOCKCODES</span> — AI SOLUTIONS / AI TRAINING
      </div>
      <div className="status__r">
        <span className="status__seg">YAOUNDÉ · CM · 3.85°N</span>
        <span className="status__seg">
          SECTION <b>{sec}</b>
        </span>
        <span>
          <b>{clock}</b> WAT
        </span>
      </div>
    </div>
  );
}
