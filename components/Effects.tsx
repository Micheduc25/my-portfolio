"use client";

import { useEffect } from "react";

const MAP: Record<string, string> = {
  "0": "#top",
  "1": "#services",
  "2": "#capabilities",
  "3": "#work",
  "4": "#training",
  "5": "#contact",
};

export default function Effects() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".rv").forEach((el) => io.observe(el));

    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      const sel = MAP[e.key];
      if (sel) document.querySelector(sel)?.scrollIntoView({ behavior: "smooth" });
    };
    window.addEventListener("keydown", onKey);

    return () => {
      io.disconnect();
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return null;
}
