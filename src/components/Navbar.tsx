import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'
                }`}
        >
            <div className={`max-w-7xl mx-auto px-6 ${scrolled
                ? 'bg-black/30 backdrop-blur-xl border border-white/10 shadow-lg rounded-2xl mx-4 md:mx-auto'
                : 'bg-transparent'
                } transition-all duration-300`}>
                <div className="flex items-center justify-between py-2">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-2xl font-bold tracking-tight text-white"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        Folioblox
                    </motion.div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {['Home', 'About', 'Projects'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-white/90 hover:text-white transition-colors text-base font-medium"
                            >
                                {item}
                            </a>
                        ))}
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-4 pl-6 pr-2 py-2 bg-white text-black rounded-full hover:bg-white/90 transition-all duration-300 shadow-xl group"
                        >
                            <span className="text-sm font-bold uppercase tracking-wider">Get in touch</span>
                            <div className="bg-[#FF5500] p-2.5 rounded-full text-white group-hover:rotate-45 transition-transform duration-300">
                                <ArrowRight size={20} />
                            </div>
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white p-2"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-full left-4 right-4 mt-2 bg-black/90 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl"
                >
                    <div className="flex flex-col gap-4">
                        {['Home', 'Work', 'About', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setIsOpen(false)}
                                className="text-white/80 hover:text-white py-2 text-lg font-medium"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
