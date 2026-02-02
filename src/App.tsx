import { useEffect } from 'react'
import Lenis from 'lenis'
import Background3D from './components/Background3D'
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
      <Background3D />

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
