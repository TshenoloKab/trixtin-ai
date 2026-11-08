import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.1 }
    )
    el.querySelectorAll('.reveal').forEach(n => io.observe(n))
    return () => io.disconnect()
  }, [])

  return (
    <section id="home" className="hero" ref={ref}>
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="hero-grid" />
      </div>
      <div className="container hero-inner">
        <div className="hero-copy reveal">
          <span className="hero-badge">
            <span className="hero-badge-dot" />
            Emerging AI Startup
          </span>
          <h1 className="hero-title">
            Building a Smarter Future with AI.
          </h1>
          <p className="hero-lead">
            We turn artificial intelligence into practical solutions that help businesses automate, innovate and grow.
          </p>
          <div className="hero-actions">
            <a href="#solutions" className="btn btn-primary">
              Explore Our Solutions
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
            <a href="#contact" className="btn btn-secondary">Let's Talk</a>
          </div>
          <div className="hero-stats">
            <div><strong>4</strong><span>Core solution areas</span></div>
            <div><strong>AI</strong><span>Practical by design</span></div>
            <div><strong>Global</strong><span>Ambition & scale</span></div>
          </div>
        </div>
        <div className="hero-visual reveal" aria-hidden="true">
          <div className="neural">
            <svg viewBox="0 0 420 420" className="neural-svg" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#7657E8" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#36C8E8" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#7657E8" />
                  <stop offset="100%" stopColor="#36C8E8" />
                </linearGradient>
              </defs>
              {/* connection lines */}
              <g stroke="url(#lineGrad)" strokeWidth="1" opacity="0.45">
                <line x1="210" y1="210" x2="90" y2="90" />
                <line x1="210" y1="210" x2="330" y2="90" />
                <line x1="210" y1="210" x2="90" y2="330" />
                <line x1="210" y1="210" x2="330" y2="330" />
                <line x1="90" y1="90" x2="330" y2="90" />
                <line x1="90" y1="330" x2="330" y2="330" />
                <line x1="90" y1="90" x2="90" y2="330" />
                <line x1="330" y1="90" x2="330" y2="330" />
                <line x1="210" y1="210" x2="210" y2="60" />
                <line x1="210" y1="210" x2="210" y2="360" />
                <line x1="210" y1="210" x2="60" y2="210" />
                <line x1="210" y1="210" x2="360" y2="210" />
              </g>
              {/* outer orbit nodes */}
              {[
                [210,60],[360,210],[210,360],[60,210],
                [90,90],[330,90],[90,330],[330,330],
              ].map(([x,y],i) => (
                <g key={i}>
                  <circle cx={x} cy={y} r="16" fill="url(#nodeGlow)" />
                  <circle cx={x} cy={y} r="6" fill="#FFFFFF" stroke="#7657E8" strokeWidth="2" />
                </g>
              ))}
              {/* center core */}
              <circle cx="210" cy="210" r="46" fill="url(#nodeGlow)" />
              <circle cx="210" cy="210" r="22" fill="#10152B" stroke="#36C8E8" strokeWidth="2" />
              <circle cx="210" cy="210" r="8" fill="#36C8E8" />
              {/* flowing particles */}
              <circle className="particle p1" cx="210" cy="210" r="3" fill="#7657E8" />
              <circle className="particle p2" cx="210" cy="210" r="3" fill="#36C8E8" />
              <circle className="particle p3" cx="210" cy="210" r="3" fill="#EAE7FA" />
            </svg>
            <div className="neural-ring" />
          </div>
        </div>
      </div>
    </section>
  )
}
