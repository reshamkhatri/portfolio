import './index.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'

function App() {
    return (
        <div className="min-h-screen bg-[#0a0a0a]">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Projects />
                <Testimonials />
                <Contact />
            </main>
        </div>
    )
}

export default App
