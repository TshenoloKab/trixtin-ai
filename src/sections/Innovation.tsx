import { useEffect, useRef } from 'react'
import SectionHeading from '../components/SectionHeading'
import Icons from '../components/Icons'
import './Innovation.css'

const items = [
  { title: 'Emerging Technologies', text: 'We continuously explore new AI capabilities, models and tooling to keep our solutions ahead of the curve.', icon: 'spark' },
  { title: 'Human-Centred AI', text: 'Technology that amplifies people — designed for clarity, trust and real-world usability.', icon: 'agent' },
  { title: 'Scalable Architecture', text: 'Systems built to grow with your organisation, from first pilot to enterprise scale.', icon: 'integration' },
  { title: 'Continuous Innovation', text: 'Iterative delivery, measurable outcomes and a roadmap that evolves with your business.', icon: 'digital' },
]

export default function Innovation() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const io = new IntersectionObserver(e => e.forEach(x => x.isIntersecting && x.target.classList.add('in')), { threshold: 0.1 })
    el.querySelectorAll('.reveal').forEach(n => io.observe(n))
    return () => io.disconnect()
  }, [])
  return (
    <section id="innovation" className="section innovation-section" ref={ref}>
      <div className="container">
        <div className="grid-2">
          <div className="reveal">
            <SectionHeading
              eyebrow="Innovation"
              title="A future-focused approach to building with AI."
              lead="We stay curious, experiment responsibly and turn emerging capability into dependable products."
            />
            <div className="innovation-list">
              {items.map(it => (
                <div className="innovation-item" key={it.title}>
                  <div className="innovation-icon"><Icons name={it.icon} /></div>
                  <div>
                    <h4>{it.title}</h4>
                    <p>{it.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="innovation-visual reveal" aria-hidden="true">
            <div className="orb-stack">
              <div className="orb orb-1" />
              <div className="orb orb-2" />
              <div className="orb orb-3" />
              <div className="orb-card">
                <div className="orb-card-row"><span />AI Agents</div>
                <div className="orb-card-row"><span />Automation</div>
                <div className="orb-card-row"><span />Integrations</div>
                <div className="orb-card-row"><span />Insights</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
