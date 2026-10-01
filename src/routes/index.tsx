import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowDown, Check, ChevronDown, Instagram, Menu, Play, Sparkles, X, Zap } from "lucide-react";
import { SiteButton } from "../components/SiteButton";
import mentorAsset from "../assets/shirisha-karnati.jpg.asset.json";
import resultOne from "../assets/student-result-1.jpg.asset.json";
import resultTwo from "../assets/student-result-2.jpg.asset.json";
import resultThree from "../assets/student-result-3.jpg.asset.json";

const INSTAGRAM = "https://www.instagram.com/growwithshirisha_/";
const results = [resultOne.url, resultTwo.url, resultThree.url];

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Live 1-on-1 Digital Skills Mentorship | Shirisha Karnati" },
    { name: "description", content: "Learn clipping, AI videos and digital products through live 1-on-1 mentorship with Shirisha Karnati." },
    { property: "og:title", content: "Live 1-on-1 Mentorship | Shirisha Karnati" },
    { property: "og:description", content: "Practical digital skills, personal guidance and two clear mentorship paths." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: HomePage,
});

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedResult, setSelectedResult] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <div className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} />
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu}><span>SK</span> SHIRISHA KARNATI</a>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">
          {[["Programs", "programs"], ["How it works", "process"], ["Results", "results"], ["About", "about"], ["FAQ", "faq"]].map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>
          ))}
          <SiteButton href={INSTAGRAM} target="_blank" rel="noreferrer">DM us now</SiteButton>
        </nav>
        <button className="menu-button" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse-dot" /> LIVE 1-ON-1 MENTORSHIP</div>
          <h1>LEARN DIGITAL SKILLS.<br /><em>BUILD YOUR</em><br />ONLINE INCOME.</h1>
          <p>Learn practical digital skills you can start from your phone — with live 1-on-1 mentorship from Shirisha Karnati.</p>
          <div className="skill-line"><span>Clipping</span><i /> <span>AI Videos</span><i /> <span>Digital Products</span></div>
          <div className="hero-actions">
            <a className="site-button" href="#programs"><span>Choose your mentorship</span><ArrowDown size={18} /></a>
            <a className="text-link" href="#skills">See what you'll learn <ArrowDown size={17} /></a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="portrait-frame"><img src={mentorAsset.url} alt="Shirisha Karnati, online entrepreneur and mentor" /></div>
          <span className="float-badge badge-one">CLIPPING</span><span className="float-badge badge-two">AI VIDEOS</span>
          <span className="float-badge badge-three">1-ON-1</span><span className="float-badge badge-four">DIGITAL PRODUCTS</span>
        </div>
      </section>

      <div className="marquee" aria-label="Real students, real implementation, real support">
        <div>REAL STUDENTS <span>✦</span> REAL IMPLEMENTATION <span>✦</span> REAL SUPPORT <span>✦</span> REAL STUDENTS <span>✦</span> REAL IMPLEMENTATION <span>✦</span> REAL SUPPORT</div>
      </div>

      <section className="section opportunity">
        <div className="section-heading"><p className="eyebrow">START WHERE YOU ARE</p><h2>YOU DON'T NEED TO KNOW<br />EVERYTHING TO START.</h2><p>You don't need a complicated setup, expensive equipment or years of experience to start learning digital skills.</p></div>
        <div className="three-grid">
          {[
            ["01", "START FROM YOUR PHONE", "Learn skills that can be started using the tools you already have."],
            ["02", "BEGINNER FRIENDLY", "Follow a structured path instead of trying random things every day."],
            ["03", "LEARN WITH GUIDANCE", "Get direct 1-on-1 mentorship instead of watching hours of recorded content alone."],
          ].map(([n, title, copy]) => <article className="number-card" key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-heading split-heading"><div><p className="eyebrow">PRACTICAL. CURRENT. ACTIONABLE.</p><h2>THE SKILLS<br />YOU'LL BUILD</h2></div><p>Build practical skills for today's creator economy, with direct help at every step.</p></div>
        <div className="skills-grid">
          {[
            ["01", "CLIPPING", "Create short-form content from your phone.", <Play key="i" />],
            ["02", "AI VIDEOS", "Use AI tools to create engaging video content.", <Sparkles key="i" />],
            ["03", "DIGITAL PRODUCTS", "Understand how digital products can be created and sold online.", <Zap key="i" />],
            ["04", "ORGANIC SELLING", "Learn organic methods to promote and sell digital products.", <Instagram key="i" />],
          ].map(([n, title, copy, icon]) => <article className="skill-card" key={String(n)}><div className="skill-icon">{icon}</div><span>{n}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="section programs" id="programs">
        <div className="section-heading centered"><p className="eyebrow">TWO WAYS TO START</p><h2>CHOOSE YOUR PATH</h2><p>Start with the skills you need. Upgrade when you're ready.</p></div>
        <div className="pricing-grid">
          <Plan name="BASIC MENTORSHIP" price="₹7,000" badge="START HERE" description="Build your foundation with practical digital skills you can start from your phone." features={["Clipping from your phone", "AI video creation", "No investment required to get started", "Beginner-friendly guidance", "Practical implementation", "Live 1-on-1 mentorship"]} />
          <Plan name="PRO MENTORSHIP" price="₹15,000" badge="MOST COMPLETE" featured description="Learn multiple digital skills and build a stronger online income foundation with personal mentorship." features={["Everything in Basic", "Clipping from your phone", "AI video creation", "Digital products", "Organic digital-product selling", "How to start from your phone", "Practical implementation", "Live 1-on-1 mentorship", "Direct personal guidance"]} />
        </div>
        <p className="pricing-note">These are live 1-on-1 mentorship programs — not pre-recorded classes.</p>
      </section>

      <section className="section comparison">
        <div className="section-heading"><p className="eyebrow">AT A GLANCE</p><h2>COMPARE THE PATHS</h2></div>
        <div className="comparison-table">
          <div className="comparison-row comparison-head"><span>WHAT'S INCLUDED</span><strong>BASIC</strong><strong>PRO</strong></div>
          {[ ["Clipping", true, true], ["AI Videos", true, true], ["Digital Products", false, true], ["Organic Selling", false, true], ["1-on-1 Mentorship", true, true] ].map(([name, basic, pro]) => (
            <div className="comparison-row" key={String(name)}><span>{name}</span><b>{basic ? <Check /> : "—"}</b><b>{pro ? <Check /> : "—"}</b></div>
          ))}
          <div className="comparison-row comparison-price"><span>Investment</span><strong>₹7,000</strong><strong>₹15,000</strong></div>
        </div>
      </section>

      <section className="section process" id="process">
        <div className="section-heading"><p className="eyebrow">CLEAR. PERSONAL. PRACTICAL.</p><h2>HOW THE<br />MENTORSHIP WORKS</h2></div>
        <div className="timeline">
          {[["01", "CHOOSE YOUR PLAN", "Select the mentorship that fits your goals."], ["02", "GET STARTED", "Complete the onboarding process."], ["03", "LEARN LIVE", "Get practical guidance through live 1-on-1 mentorship."], ["04", "IMPLEMENT", "Apply what you learn and get guidance along the way."]].map(([n, title, copy]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="personal-section">
        <p className="eyebrow">WHY 1-ON-1?</p><h2>NOT ANOTHER<br />RECORDED COURSE.</h2><h3>YOU GET PERSONAL GUIDANCE.</h3>
        <p>Instead of watching hours of recorded videos and figuring everything out yourself, you'll get direct mentorship and practical guidance.</p>
        <div className="personal-grid">{[["PERSONAL ATTENTION", "Guidance based on your current level."], ["PRACTICAL LEARNING", "Focus on implementation, not just theory."], ["DIRECT GUIDANCE", "Ask questions and get help while building."]].map(([title, copy]) => <div key={title}><Check /><h4>{title}</h4><p>{copy}</p></div>)}</div>
      </section>

      <section className="section mentor" id="about">
        <div className="mentor-image"><img src={mentorAsset.url} alt="Shirisha Karnati" loading="lazy" /></div>
        <div className="mentor-copy"><p className="eyebrow">MEET YOUR MENTOR</p><h2>SHIRISHA<br />KARNATI</h2><h3>ONLINE ENTREPRENEUR &amp; MENTOR</h3><p>Shirisha Karnati is an online entrepreneur and creator focused on digital skills, AI, content and online business. Through her content and mentorship, she helps beginners understand practical ways to start building digital skills using the tools available to them.</p><SiteButton href={INSTAGRAM} target="_blank" rel="noreferrer"><Instagram size={18} /> Follow Shirisha</SiteButton></div>
      </section>

      <section className="section results" id="results">
        <div className="section-heading split-heading"><div><p className="eyebrow">REAL IMPLEMENTATION</p><h2>STUDENT<br />RESULTS</h2></div><p>See what students have achieved after taking action.</p></div>
        <div className="results-grid">
          {results.map((src, index) => <button type="button" className={`result-card result-${index + 1}`} key={src} onClick={() => setSelectedResult(src)} aria-label={`Open student result ${index + 1}`}><img src={src} alt={`Real student result screenshot ${index + 1}`} loading="lazy" /><span>VIEW RESULT <ArrowUpRight size={16} /></span></button>)}
        </div>
        <p className="disclaimer">Results shown are from individual students and are not a guarantee of future results. Outcomes vary based on individual effort, skills, consistency and other factors.</p>
      </section>

      <section className="section audience">
        <div className="section-heading"><p className="eyebrow">IS THIS FOR YOU?</p><h2>THIS IS FOR YOU IF...</h2></div>
        <div className="audience-list">{["I'M A COMPLETE BEGINNER", "I ONLY HAVE A PHONE", "I WANT TO LEARN CLIPPING", "I WANT TO LEARN AI VIDEO CREATION", "I WANT TO BUILD DIGITAL PRODUCTS", "I WANT PERSONAL GUIDANCE"].map((item, index) => <div key={item}><span>0{index + 1}</span>{item}<Check /></div>)}</div>
        <div className="honesty">AND IF YOU'RE LOOKING FOR A MAGIC BUTTON OR GUARANTEED INCOME, THIS ISN'T THAT.</div>
      </section>

      <section className="section faq" id="faq">
        <div className="section-heading"><p className="eyebrow">QUESTIONS, ANSWERED</p><h2>FAQ</h2></div>
        <div className="faq-list">
          {[
            ["Is this a recorded course?", "No. These are live 1-on-1 mentorship programs."],
            ["Can I start with just my phone?", "The programs are designed around digital skills that can be started from a phone. Specific tools may have different device requirements."],
            ["Do I need prior experience?", "No. The mentorship is designed to be beginner-friendly."],
            ["Do I need to invest money to start?", "You can begin learning without requiring a large upfront investment. Some tools or platforms may have optional or paid features."],
            ["What's included in Basic?", "Clipping from your phone, AI video creation, beginner guidance and live 1-on-1 mentorship."],
            ["What's included in Pro?", "Everything in Basic plus digital products and organic digital-product selling guidance."],
            ["How do I join?", "Choose your plan and send a direct message through the official Instagram account."],
            ["Is income guaranteed?", "No. Results depend on implementation, consistency, skill development, market conditions and other individual factors."],
          ].map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown /></summary><p>{answer}</p></details>)}
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">READY TO BUILD?</p><h2>YOUR PHONE CAN BE MORE<br />THAN JUST ENTERTAINMENT.</h2><p>Learn practical digital skills. Get personal guidance. Start building.</p>
        <div><SiteButton href={INSTAGRAM} target="_blank" rel="noreferrer">DM us now — Basic ₹7,000</SiteButton><SiteButton tone="secondary" href={INSTAGRAM} target="_blank" rel="noreferrer">DM us now — Pro ₹15,000</SiteButton></div>
      </section>

      <footer><a className="brand" href="#top"><span>SK</span> SHIRISHA KARNATI</a><div><a href="#programs">Programs</a><a href="#about">About</a><a href="#results">Results</a><a href="#faq">FAQ</a><a href={INSTAGRAM} target="_blank" rel="noreferrer">Instagram</a></div><div><Link to="/terms">Terms</Link><Link to="/privacy">Privacy</Link><Link to="/refund">Refund</Link></div><p>© 2026 Shirisha Karnati. All rights reserved.</p></footer>

      <SiteButton className="mobile-sticky" href={INSTAGRAM} target="_blank" rel="noreferrer">DM us now</SiteButton>
      {selectedResult && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Student result"><button type="button" aria-label="Close result" onClick={() => setSelectedResult(null)}><X /></button><img src={selectedResult} alt="Expanded student result screenshot" /></div>}
    </main>
  );
}

function Plan({ name, price, badge, description, features, featured = false }: { name: string; price: string; badge: string; description: string; features: string[]; featured?: boolean }) {
  return <article className={featured ? "plan-card plan-featured" : "plan-card"}><div className="plan-top"><span>{badge}</span>{featured && <Sparkles />}</div><h3>{name}</h3><strong>{price}</strong><p>{description}</p><ul>{features.map(feature => <li key={feature}><Check size={17} />{feature}</li>)}</ul><SiteButton href={INSTAGRAM} target="_blank" rel="noreferrer">DM us now — {name.split(" ")[0]}</SiteButton></article>;
}