import { useEffect, useRef } from 'react'
import SectionHeading from '../components/SectionHeading'
import Icons from '../components/Icons'
import './About.css'

const pillars = [
  { title: 'Our Vision', text: 'To make intelligent technology a practical, everyday advantage for businesses and people everywhere.' },
  { title: 'Our Mission', text: 'To turn artificial intelligence into accessible, valuable solutions that solve real problems and drive measurable outcomes.' },
  { title: 'Our Approach', text: 'We combine strategy, engineering and human-centred design to build AI that fits naturally into how organisations work.' },
]

export default function About() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const io = new IntersectionObserver(e => e.forEach(x => x.isIntersecting && x.target.classList.add('in')), { threshold: 0.1 })
    el.querySelectorAll('.reveal').forEach(n => io.observe(n))
    return () => io.disconnect()
  }, [])
  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <div className="grid-2">
          <div className="reveal">
            <SectionHeading
              eyebrow="About Trixtin AI"
              title="Making intelligent technology useful, accessible and impactful."
              lead="Trixtin AI is an emerging technology startup committed to bridging the gap between cutting-edge artificial intelligence and everyday business value. We build with purpose, ship with clarity and scale with ambition."
            />
            <p className="about-body">
              We explore intelligent automation, AI-powered business solutions, AI agents, workflow optimisation, intelligent data solutions and custom AI integrations — always with a focus on outcomes over hype.
            </p>
          </div>
          <div className="about-cards reveal">
            {pillars.map((p, i) => (
              <div className="pillar" key={p.title}>
                <div className="pillar-icon"><Icons name={['spark','agent','integration'][i]} /></div>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
