"use client";

import { useState } from "react";
import { PROJECTS, type Category } from "@/lib/projects";

type Filter = "all" | Category;
const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "[ ALL ]" },
  { key: "web", label: "WEB" },
  { key: "mobile", label: "MOBILE" },
];

export default function Work() {
  const [filter, setFilter] = useState<Filter>("all");
  const items = PROJECTS.filter((p) => filter === "all" || p.cat === filter);

  return (
    <section id="work" data-sec="03">
      <div className="sec-head pad">
        <div className="sec-num">§03</div>
        <div className="sec-title">selected work</div>
        <div className="sec-meta">
          ls -la ~/projects
          <br />
          {items.length} records
        </div>
      </div>

      <div className="filter">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            className={filter === f.key ? "on" : ""}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div>
        {items.map((p, i) => {
          const num = String(i + 1).padStart(2, "0");
          return (
            <div className="work__item" data-cat={p.cat} key={p.title}>
              <div className="work__idx">W/{num}</div>
              <div className="work__body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="tags">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="work__links">
                  <a href={p.live} target="_blank" rel="noopener noreferrer">
                    <span className="ar">→</span>
                    {p.liveLabel}
                  </a>
                  {p.src && (
                    <a href={p.src} target="_blank" rel="noopener noreferrer">
                      <span className="ar">→</span>
                      SOURCE
                    </a>
                  )}
                </div>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <div className="work__thumb" data-cat={p.cat}>
                <img src={p.img} alt={`${p.title} screenshot`} loading="lazy" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
