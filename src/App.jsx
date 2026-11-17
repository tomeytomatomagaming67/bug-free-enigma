const ArrowUpRight = () => (
  <svg aria-hidden="true" viewBox="0 0 16 16" className="arrow-icon" fill="none">
    <path d="M4 12 12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const workItems = [
  {
    number: '01',
    type: 'Digital experiences',
    title: 'Thoughtful by design.',
    description: 'Clear, inviting interfaces that make the useful feel effortless.',
    className: 'work-card--peach',
    art: <div className="art-window"><div className="art-window__top"><i /><i /><i /></div><div className="art-window__body"><span className="art-kicker">A little more human</span><strong>Good things<br />start here.</strong><span className="art-pill">Explore the idea <b>↗</b></span></div></div>,
  },
  {
    number: '02',
    type: 'Web & development',
    title: 'Made to feel right.',
    description: 'Careful details and responsive builds, from first click to last.',
    className: 'work-card--blue',
    art: <div className="art-orbit"><div className="orbit orbit--one" /><div className="orbit orbit--two" /><div className="orbit orbit--three" /><span className="orbit-center">RK</span><span className="orbit-label">IDEAS IN MOTION</span></div>,
  },
];

function App() {
  return (
    <main>
      <header className="site-header shell">
        <a className="wordmark" href="#home" aria-label="Rakeesh Kumar home"><span className="wordmark-mark">rk.</span><span>Rakeesh Kumar</span></a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">What I do</a>
          <a className="nav-contact" href="#contact">Say hello <ArrowUpRight /></a>
        </nav>
      </header>

      <section className="hero shell" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> A LITTLE INTRODUCTION</p>
          <h1>Hi, I’m Rakeesh.<br /><span className="hero-serif">I make the web</span><br />feel a little more <span className="highlight-word">human.</span></h1>
          <p className="hero-description">I’m Rakeesh Kumar �� a curious creator who loves turning good ideas into thoughtful digital experiences.</p>
          <div className="hero-actions"><a className="button button--dark" href="#work">Explore what I do <ArrowUpRight /></a><a className="text-link" href="#about">A bit about me <span>↓</span></a></div>
        </div>
        <div className="hero-art" aria-label="Abstract illustration with colorful shapes" role="img">
          <div className="art-label art-label--top">CREATIVE MIND<br />OPEN TABS: 12</div>
          <div className="sun-shape" /><div className="blob-shape" /><div className="ring-shape" /><div className="star-shape">✳</div>
          <div className="art-note"><span>MAKE IT</span><strong>matter.</strong><span className="note-scribble">↗</span></div>
          <div className="art-label art-label--bottom">THOUGHTFULLY MADE<br />ON PLANET EARTH</div>
          <span className="floating-plus floating-plus--one">+</span><span className="floating-plus floating-plus--two">✳</span>
        </div>
        <a className="scroll-cue" href="#about"><span className="scroll-line" /> SCROLL TO EXPLORE</a>
      </section>

      <section className="intro-section" id="about">
        <div className="shell intro-grid">
          <p className="eyebrow intro-eyebrow">01 / A LITTLE ABOUT ME</p>
          <div className="intro-content"><h2>Good work starts with <span>a little curiosity.</span></h2><p>I’m drawn to the space where thoughtful design meets useful technology. I like asking better questions, sweating the small details, and making digital things that feel simple, clear, and genuinely enjoyable to use.</p><a className="underlined-link" href="https://github.com/tomeytomatomagaming67" target="_blank" rel="noreferrer">Find me on GitHub <ArrowUpRight /></a></div>
          <div className="intro-aside"><span className="aside-star">✳</span><span>CURIOUS<br />BY NATURE</span><span className="aside-rule" /><span>MADE WITH<br />INTENTION</span></div>
        </div>
      </section>

      <section className="work-section shell" id="work">
        <div className="section-heading"><div><p className="eyebrow">02 / THINGS I CARE ABOUT</p><h2>Ideas, meet <span>intention.</span></h2></div><p className="section-aside">A few of the ways I like to<br />make a difference.</p></div>
        <div className="work-grid">{workItems.map((item) => <article className={`work-card ${item.className}`} key={item.number}><div className="work-card-art">{item.art}<span className="work-number">{item.number} / 02</span></div><div className="work-card-copy"><p className="eyebrow">{item.type}</p><h3>{item.title}</h3><p>{item.description}</p><a href="#contact" aria-label={`Discuss ${item.type}`} className="round-link"><ArrowUpRight /></a></div></article>)}</div>
        <p className="work-note"><span>✳</span> These are the kinds of things I love making. Have something in mind? Let’s make it real.</p>
      </section>

      <section className="contact-section" id="contact"><div className="shell contact-inner"><p className="eyebrow">03 / YOUR TURN</p><h2>Have a good one<br />in mind? <span>Let’s talk.</span></h2><p>I’m always up for a thoughtful conversation and a fresh challenge.</p><a className="button button--light" href="https://github.com/tomeytomatomagaming67" target="_blank" rel="noreferrer">Connect on GitHub <ArrowUpRight /></a><span className="contact-doodle" aria-hidden="true">✳</span></div></section>

      <footer className="site-footer shell"><a className="wordmark" href="#home"><span className="wordmark-mark">rk.</span><span>Rakeesh Kumar</span></a><span>Made with curiosity <span className="footer-heart">♥</span> © {new Date().getFullYear()}</span><a className="back-top" href="#home">BACK TO TOP ↑</a></footer>
    </main>
  );
}

export default App;
