import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import './index.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Cursor } from './components/Cursor'
import { AllProjects } from './components/AllProjects'
import { WebProjects } from './components/WebProjects'
import { Projects } from './components/Projects'
import { ScrollProgress } from './components/ui/ScrollProgress'
import { ScrollToTop } from './components/ui/ScrollToTop'
import { NotFound } from './pages/NotFound'

// Lazy load non-critical sections
const About = lazy(() => import('./components/About').then(m => ({ default: m.About })))
const Tools = lazy(() => import('./components/Tools').then(m => ({ default: m.Tools })))
const Testimonials = lazy(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })))
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })))
const Marquee = lazy(() => import('./components/Marquee').then(m => ({ default: m.Marquee })))

// Loading fallback component
const SectionLoader = () => (
    <div className="h-[40vh] w-full flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-orange-500/20 border-t-orange-500 rounded-full animate-spin" />
    </div>
)

function HomePage() {
    return (
        <main>
            <Hero />
            <Suspense fallback={<SectionLoader />}>
                <Marquee />
                <About />
                <Projects />
                <WebProjects />
                <Tools />
                <Testimonials />
                <Contact />
            </Suspense>
        </main>
    )
}

function App() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] cursor-none">
            <ScrollProgress />
            <ScrollToTop />
            <div className="bg-grain" />
            <Cursor />
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<AllProjects />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default App
