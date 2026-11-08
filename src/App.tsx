import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Solutions from './sections/Solutions'
import Innovation from './sections/Innovation'
import Contact from './sections/Contact'
import './App.css'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Solutions />
        <Innovation />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
