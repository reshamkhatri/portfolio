import { Routes, Route } from 'react-router-dom'
import './index.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { Cursor } from './components/Cursor'
import { Marquee } from './components/Marquee'
import { AllProjects } from './components/AllProjects'
import { Tools } from './components/Tools'

function HomePage() {
    return (
        <main>
            <Hero />
            <Marquee />
            <About />
            <Projects />
            <Tools />
            <Testimonials />
            <Contact />
        </main>
    )
}

function App() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] cursor-none">
            <div className="bg-grain" />
            <Cursor />
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<AllProjects />} />
            </Routes>
        </div>
    )
}

export default App
