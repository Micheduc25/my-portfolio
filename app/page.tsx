import StatusLine from "@/components/StatusLine";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Effects from "@/components/Effects";

const TICKER = [
  "AI SOLUTIONS", "AI TRAINING", "AUTOMATION", "LLM INTEGRATION", "WEB", "MOBILE",
  "NEXT.JS", "FLUTTER", "PYTHON", "CONSULTING",
];

const SERVICES: { tag: string; title: string; body: string; points: string[] }[] = [
  {
    tag: "[ 01 / AI SOLUTIONS ]",
    title: "AI-driven products and automation.",
    body:
      "We design and build software with AI at its core: assistants that know your business, document and data processing, and workflows that run themselves.",
    points: ["Custom AI assistants & chatbots", "Document & data extraction", "Workflow automation", "LLM integration into existing apps"],
  },
  {
    tag: "[ 02 / AI TRAINING ]",
    title: "Teams that know how to use AI.",
    body:
      "Hands-on training for companies, institutions and developer teams. People leave able to use AI tools safely and productively in their daily work, not just talk about them.",
    points: ["AI for professionals & executives", "AI for developers", "Prompting & tool workflows", "On-site or remote sessions"],
  },
  {
    tag: "[ 03 / SOFTWARE ]",
    title: "Web and mobile, design to deploy.",
    body:
      "Full-stack product development: landing pages, dashboards, e-commerce and real-time apps on the web, Flutter apps on mobile.",
    points: ["Web apps & websites", "Mobile apps (Android / iOS)", "APIs & backends", "Maintenance & hosting"],
  },
  {
    tag: "[ 04 / CONSULTING ]",
    title: "Know where AI pays off.",
    body:
      "Before you build, we help you find the processes where AI saves real time or money, and plan a rollout your team can actually adopt.",
    points: ["AI readiness assessment", "Use-case discovery", "Tool & vendor selection", "Rollout roadmap"],
  },
];

const STACK: { k: string; v: string[] }[] = [
  { k: "AI / LLMs", v: ["Claude", "OpenAI", "RAG pipelines", "AI agents", "Prompt engineering"] },
  { k: "Languages", v: ["JavaScript", "TypeScript", "Dart", "Python"] },
  { k: "Web / Frontend", v: ["React", "Next.js", "Vue 3", "Tailwind", "Three.js"] },
  { k: "Mobile", v: ["Flutter", "Dart"] },
  { k: "Backend / Data", v: ["Node / Express", "Django", "Firebase", "SQLite", "REST APIs"] },
  { k: "Tools / Delivery", v: ["Git", "Figma", "WordPress", "Vercel"] },
];

export default function Home() {
  return (
    <>
      <StatusLine />

      <nav className="nav">
        <div className="nav__in">
          <a href="#top" className="brand">
            NDJOCKCODES<span className="sq">_</span>
          </a>
          <div className="menu">
            <a href="#services"><span className="k">01</span><span className="lbl">SERVICES</span></a>
            <a href="#capabilities"><span className="k">02</span><span className="lbl">CAPABILITIES</span></a>
            <a href="#work"><span className="k">03</span><span className="lbl">WORK</span></a>
            <a href="#training"><span className="k">04</span><span className="lbl">TRAINING</span></a>
            <a href="#contact" className="menu__cta"><span className="k">05</span><span className="lbl">CONTACT</span></a>
          </div>
        </div>
      </nav>

      <div className="wrap" id="top">
        <Hero />

        <div className="ticker">
          <div className="ticker__t">
            {[...TICKER, ...TICKER].map((t, i) => (
              <span key={i}>
                {t}
                <span className="s"> / </span>
              </span>
            ))}
          </div>
        </div>

        <section id="services" data-sec="01">
          <div className="sec-head pad">
            <div className="sec-num">§01</div>
            <div className="sec-title">services</div>
            <div className="sec-meta">ls ./services<br />4 ways we help</div>
          </div>
          <div className="svc">
            {SERVICES.map((s) => (
              <div className="svc__card rv" key={s.tag}>
                <span className="dual__tag">{s.tag}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <ul>
                  {s.points.map((pt) => (
                    <li key={pt}>
                      <span className="x">›</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="creed rv">
            We build AI into software and teach people to work with it.{" "}
            <b>The technology only pays off when your team can use it.</b>
          </div>
        </section>

        <section id="capabilities" data-sec="02">
          <div className="sec-head pad">
            <div className="sec-num">§02</div>
            <div className="sec-title">capabilities</div>
            <div className="sec-meta">no buzzword bingo.<br />just what we ship with</div>
          </div>
          {STACK.map((row) => (
            <div className="stack__row rv" key={row.k}>
              <div className="stack__k">{row.k}</div>
              <div className="stack__v">
                {row.v.map((c) => (
                  <span className="chip" key={c}>
                    <span className="x">›</span>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        <Work />

        <section id="training" data-sec="04">
          <div className="sec-head pad">
            <div className="sec-num">§04</div>
            <div className="sec-title">training</div>
            <div className="sec-meta">taught by people<br />who teach for a living</div>
          </div>
          <div className="teach">
            <div className="teach__l rv">
              <p>
                <b>Our trainers are university lecturers, not slide readers.</b> We teach web
                programming and software engineering at the University of Bamenda and the
                Experiential Higher Institute of Science and Technology.
              </p>
              <p style={{ marginTop: 18 }}>
                We bring that classroom experience to AI training: practical sessions built around
                your team&apos;s real tasks, so people walk out using AI tools the same week.
              </p>
            </div>
            <div className="teach__r rv">
              <div className="tline">
                <div className="n">01 / ASSESS</div>
                <div className="b">We map your team&apos;s level and goals</div>
                <div className="s">Short call · skills survey</div>
              </div>
              <div className="tline">
                <div className="n">02 / TRAIN</div>
                <div className="b">Hands-on sessions on real work</div>
                <div className="s">On-site in Cameroon or remote</div>
              </div>
              <div className="tline">
                <div className="n">03 / FOLLOW UP</div>
                <div className="b">Support while the habits stick</div>
                <div className="s">Q&amp;A · materials · refreshers</div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" data-sec="05">
          <div className="sec-head pad">
            <div className="sec-num">§05</div>
            <div className="sec-title">contact</div>
            <div className="sec-meta">./start_project.sh<br />response &lt; 24h</div>
          </div>
          <div className="contact pad">
            <h2>
              LET&apos;S<br />
              <em>BUILD</em> IT.
            </h2>
            <p className="contact__sub">
              Got a project to build, a process to automate, or a team to train in AI? Tell us
              what you need. The fastest path is email, and we reply quickly.
            </p>
            <div className="contact__grid">
              <div className="cline">
                <div className="lbl">Email</div>
                <a href="mailto:contact@ndjockcodes.com">contact@ndjockcodes.com</a>
              </div>
              <div className="cline">
                <div className="lbl">Status</div>
                <span className="v" style={{ color: "var(--accent)" }}>
                  ● Accepting new projects
                </span>
              </div>
              <div className="cline">
                <div className="lbl">Phone / 01</div>
                <a href="tel:+237681757514">+237 681 757 514</a>
              </div>
              <div className="cline">
                <div className="lbl">Phone / 02</div>
                <a href="tel:+237697898711">+237 697 898 711</a>
              </div>
            </div>
            <div className="socs">
              <a href="https://github.com/Micheduc25" target="_blank" rel="noopener noreferrer">→ GitHub</a>
              <a href="https://www.linkedin.com/in/ndjock-michel-junior-889ab3187" target="_blank" rel="noopener noreferrer">→ LinkedIn</a>
              <a href="https://twitter.com/micheduc25" target="_blank" rel="noopener noreferrer">→ Twitter / X</a>
              <a href="https://codepen.io/Micheduc25" target="_blank" rel="noopener noreferrer">→ CodePen</a>
            </div>
          </div>
        </section>

        <div className="foot">
          <div>
            © 2026 <b>NDJOCKCODES</b> — AI SOLUTIONS · AI TRAINING · SOFTWARE
          </div>
          <div>
            YAOUNDÉ · CM &nbsp;//&nbsp; <a href="#top">↑ BACK TO TOP</a>
          </div>
        </div>
      </div>

      <Effects />
    </>
  );
}
