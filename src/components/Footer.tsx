import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand">
              <span className="brand-mark">T</span>
              <span className="brand-text">TRIXTIN<span className="brand-ai"> AI</span></span>
            </div>
            <p className="footer-tag">Intelligence That Moves Business Forward.</p>
            <p className="footer-desc">
              We turn artificial intelligence into practical solutions that help businesses automate, innovate and grow.
            </p>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#solutions">Solutions</a></li>
              <li><a href="#innovation">Innovation</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Solutions</h4>
            <ul>
              <li><a href="#solutions">Business Automation</a></li>
              <li><a href="#solutions">AI Agents</a></li>
              <li><a href="#solutions">Custom Integrations</a></li>
              <li><a href="#solutions">Digital Solutions</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:hello@trixtin.ai">hello@trixtin.ai</a></li>
              <li><a href="#contact">Enquiry Form</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 TRIXTIN AI. All rights reserved.</span>
          <span>Designed &amp; Developed by <a href="https://traxenadigital.com" target="_blank" rel="noopener noreferrer">Traxena Digital</a>.</span>
        </div>
      </div>
    </footer>
  )
}
