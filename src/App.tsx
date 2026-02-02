import './index.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      {/* Hero Section - Full Screen */}
      <Hero />

      {/* Projects Section */}
      <section className="relative z-10 bg-[#0a0a0a]">
        <Projects />
      </section>

      {/* Testimonials Section */}
      <section className="relative z-20 bg-[#0a0a0a]">
        <Testimonials />
      </section>

      {/* Contact Section */}
      <section className="relative z-30 bg-[#0a0a0a]">
        <Contact />
      </section>
    </div>
  )
}

export default App
