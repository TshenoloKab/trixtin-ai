import { useEffect, useRef } from 'react'
import SectionHeading from '../components/SectionHeading'
import Icons from '../components/Icons'
import { solutions } from '../data/solutions'
import './Solutions.css'

export default function Solutions() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const io = new IntersectionObserver(e => e.forEach(x => x.isIntersecting && x.target.classList.add('in')), { threshold: 0.1 })
    el.querySelectorAll('.reveal').forEach(n => io.observe(n))
    return () => io.disconnect()
  }, [])
  return (
    <section id="solutions" className="section solutions-section" ref={ref}>
      <div className="container">
        <SectionHeading
          eyebrow="Solutions"
          title="AI capabilities built for real business outcomes."
          lead="Four focused service areas that turn intelligent technology into measurable value for your organisation."
        />
        <div className="solutions-grid">
          {solutions.map((s, i) => (
            <article className="solution-card reveal" key={s.title} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="solution-icon"><Icons name={s.icon} /></div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <a href="#contact" className="solution-link">
                Learn more
                <Icons name="arrow" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
