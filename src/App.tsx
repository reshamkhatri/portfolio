import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <main className="flex flex-col w-full relative bg-[#0a0a0a]">
        <div className="relative z-10 w-full">
          <Hero />
        </div>
        <div className="relative z-20 w-full bg-[#0a0a0a]">
          <Projects />
        </div>
        <div className="relative z-30 w-full bg-[#0a0a0a]">
          <Testimonials />
        </div>
        <div className="relative z-40 w-full bg-[#0a0a0a]">
          <Contact />
        </div>
      </main>
    </div>
  )
}

export default App
