import { useEffect } from 'react'
import Lenis from 'lenis'
import './index.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay">
        <svg className="w-full h-full filter brightness-125 saturate-0 contrast-200">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      <Navbar />

      {/* Main Content with Reveal Logic */}
      <div className="relative z-10 bg-[#0a0a0a] mb-[100vh] shadow-2xl">
        <Hero />
        <Projects />
        <Testimonials />
      </div>

      {/* Reveal Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-0 h-screen">
        <Contact />
      </div>
    </div>
  )
}

export default App
