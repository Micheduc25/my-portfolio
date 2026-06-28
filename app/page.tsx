import StatusLine from "@/components/StatusLine";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Effects from "@/components/Effects";

const TICKER = [
  "JAVASCRIPT", "TYPESCRIPT", "REACT", "NEXT.JS", "VUE", "FLUTTER", "DART",
  "PYTHON", "DJANGO", "NODE", "FIREBASE", "TEACHING",
];

const STACK: { k: string; v: string[] }[] = [
  { k: "Languages", v: ["JavaScript", "TypeScript", "Dart", "Python"] },
  { k: "Web / Frontend", v: ["React", "Next.js", "Vue 3", "Tailwind", "Three.js"] },
  { k: "Mobile", v: ["Flutter", "Dart"] },
  { k: "Backend / Data", v: ["Node / Express", "Django", "Firebase", "SQLite", "REST APIs"] },
  { k: "Tools / Craft", v: ["Git", "Figma", "WordPress", "Vercel", "Teaching & mentoring"] },
];

export default function Home() {
  return (
    <>
      <StatusLine />

      <nav className="nav">
        <div className="nav__in">
          <a href="#top" className="brand">
            NMJ<span className="sq">_</span>
          </a>
          <div className="menu">
            <a href="#whoami"><span className="k">01</span><span className="lbl">WHOAMI</span></a>
            <a href="#stack"><span className="k">02</span><span className="lbl">STACK</span></a>
            <a href="#work"><span className="k">03</span><span className="lbl">WORK</span></a>
            <a href="#teaching"><span className="k">04</span><span className="lbl">TEACH</span></a>
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

        <section id="whoami" data-sec="01">
          <div className="sec-head pad">
            <div className="sec-num">§01</div>
            <div className="sec-title">whoami</div>
            <div className="sec-meta">cat /etc/identity<br />2 roles · 1 instinct</div>
          </div>
          <div className="dual">
            <div className="dual__col rv">
              <span className="dual__tag">[ ENGINEER ]</span>
              <h3>Ships products, not demos.</h3>
              <p>
                Six-plus years turning vague ideas into working web and mobile software. Landing
                pages, dashboards, e-commerce, real-time apps — front to back, design to deploy.
              </p>
              <p>
                Comfortable owning the whole stack: React/Next and Vue on the web, Flutter on
                mobile, Node and Django on the server.
              </p>
            </div>
            <div className="dual__col rv">
              <span className="dual__tag">[ EDUCATOR ]</span>
              <h3>Teaches the next ones.</h3>
              <p>
                Lectures web programming and software engineering at the University of Bamenda and
                the Experiential Higher Institute of Science and Technology.
              </p>
              <p>
                Mentoring sharpens the craft — explaining a thing forces you to actually understand
                it. That clarity ships back into the code.
              </p>
            </div>
          </div>
          <div className="creed rv">
            I write code for a living and teach it for love — <b>the same instinct, two outputs</b>.
            One makes the product; the other makes the people who&apos;ll outbuild me.
          </div>
        </section>

        <section id="stack" data-sec="02">
          <div className="sec-head pad">
            <div className="sec-num">§02</div>
            <div className="sec-title">stack</div>
            <div className="sec-meta">no skill-bars.<br />just what I ship with</div>
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

        <section id="teaching" data-sec="04">
          <div className="sec-head pad">
            <div className="sec-num">§04</div>
            <div className="sec-title">teaching</div>
            <div className="sec-meta">the differentiator<br />most devs don&apos;t have</div>
          </div>
          <div className="teach">
            <div className="teach__l rv">
              <p>
                <b>I don&apos;t just write code — I make other developers.</b> Across two
                institutions I teach web programming and software engineering, translating
                production reality into something a room of students can actually use.
              </p>
              <p style={{ marginTop: 18 }}>
                That feedback loop is my edge: a senior who can lead, document, onboard and lift a
                team, not only push commits. The clearest engineers are the ones who&apos;ve had to
                teach.
              </p>
            </div>
            <div className="teach__r rv">
              <div className="tline">
                <div className="n">01 / INSTITUTION</div>
                <div className="b">University of Bamenda</div>
                <div className="s">Web programming · software engineering</div>
              </div>
              <div className="tline">
                <div className="n">02 / INSTITUTION</div>
                <div className="b">Exp. Higher Institute of Science and Technology</div>
                <div className="s">Software engineering · mentoring</div>
              </div>
              <div className="tline">
                <div className="n">03 / FOCUS</div>
                <div className="b">Mentoring young developers</div>
                <div className="s">From first function to first job</div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" data-sec="05">
          <div className="sec-head pad">
            <div className="sec-num">§05</div>
            <div className="sec-title">contact</div>
            <div className="sec-meta">./reach_out.sh<br />response &lt; 24h</div>
          </div>
          <div className="contact pad">
            <h2>
              LET&apos;S<br />
              <em>BUILD</em> IT.
            </h2>
            <p className="contact__sub">
              Hiring for a senior or remote role, need a product shipped, or want a guest lecturer /
              mentor? The fastest path is email — I reply quickly.
            </p>
            <div className="contact__grid">
              <div className="cline">
                <div className="lbl">Email</div>
                <a href="mailto:contact@ndjockcodes.com">contact@ndjockcodes.com</a>
              </div>
              <div className="cline">
                <div className="lbl">Status</div>
                <span className="v" style={{ color: "var(--accent)" }}>
                  ● Open to senior / remote roles
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
            © 2026 <b>NDJOCK MICHEL JUNIOR</b> — HANDCODED, NO TEMPLATES
          </div>
          <div>
            BAMENDA · CM &nbsp;//&nbsp; <a href="#top">↑ BACK TO TOP</a>
          </div>
        </div>
      </div>

      <Effects />
    </>
  );
}
