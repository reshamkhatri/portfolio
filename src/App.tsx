import { useEffect } from 'react'
import Lenis from 'lenis'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import './index.css'

function App() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      // Cleanup if necessary, though in App root it persists
    }
  }, [])

  return (
    <>
      {/* Static Premium Background */}
      <div className="fixed inset-0 -z-10 bg-[#050505] bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0d0d0d]" />

      {/* Scrollable Content */}
      <div className="relative z-10 text-white selection:bg-orange-500/30">
        <Navbar />
        <main className="flex flex-col w-full">
          <Hero />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
      </div>
    </>
  )
}

export default App
