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
    title: "Custom AI tools and automation.",
    body:
      "We build AI assistants, document processing and automated workflows around how your business already works, and connect them to the systems you use.",
    points: ["Custom AI assistants & chatbots", "Document & data extraction", "Workflow automation", "LLM integration into existing apps"],
  },
  {
    tag: "[ 02 / AI TRAINING ]",
    title: "AI training for your team.",
    body:
      "Practical training for companies, schools and developer teams. Each session is built around your team's real tasks, so people leave knowing which tools to use and how to use them safely.",
    points: ["AI for professionals & executives", "AI for developers", "Prompting & tool workflows", "On-site or remote sessions"],
  },
  {
    tag: "[ 03 / SOFTWARE ]",
    title: "Web and mobile apps.",
    body:
      "Websites, dashboards, e-commerce and real-time apps on the web, and Flutter apps for Android and iOS. We handle design, development and deployment.",
    points: ["Web apps & websites", "Mobile apps (Android / iOS)", "APIs & backends", "Maintenance & hosting"],
  },
  {
    tag: "[ 04 / CONSULTING ]",
    title: "AI consulting.",
    body:
      "We look at how your team works, find the tasks where AI can save time or money, and plan how to roll it out.",
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
            <div className="sec-meta">ls ./services<br />4 services</div>
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
            We build AI tools <b>and</b> train the people who will use them.
          </div>
        </section>

        <section id="capabilities" data-sec="02">
          <div className="sec-head pad">
            <div className="sec-num">§02</div>
            <div className="sec-title">capabilities</div>
            <div className="sec-meta">tools and languages<br />we work with</div>
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
            <div className="sec-meta">trainers who<br />teach at university</div>
          </div>
          <div className="teach">
            <div className="teach__l rv">
              <p>
                <b>Our trainers are university lecturers.</b> They teach web programming and
                software engineering at the University of Bamenda and the Experiential Higher
                Institute of Science and Technology.
              </p>
              <p style={{ marginTop: 18 }}>
                We use that teaching experience in our AI training: short, hands-on sessions
                built on your team&apos;s own work.
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
                <div className="b">Follow-up support after the training</div>
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
              Need an AI tool, an app, or AI training for your team? Email us a short
              description of what you need and we will reply within 24 hours.
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
            © 2026 <b>NDJOCKCODES</b> · AI SOLUTIONS · AI TRAINING · SOFTWARE
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
