import './index.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Testimonials } from './components/Testimonials'

function App() {
    return (
        <div className="min-h-screen bg-[#0a0a0a]">
            <Navbar />
            <main>
                <Hero />
                <Projects />
                <Testimonials />
            </main>
        </div>
    )
}

export default App
