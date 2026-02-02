import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4"
        >
            <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-xl font-bold tracking-tight text-white"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                    Portfolio
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
                        Home
                    </a>
                    <a href="#about" className="text-white/70 hover:text-white transition-colors text-sm">
                        About
                    </a>
                    <a href="#projects" className="text-white/70 hover:text-white transition-colors text-sm">
                        Projects
                    </a>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-5 py-2.5 bg-orange-500 text-black font-medium rounded-full hover:bg-orange-400 transition-colors text-sm"
                    >
                        Get in touch
                        <ArrowRight size={16} />
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

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-full left-4 right-4 glass p-6 mt-2 rounded-2xl"
                >
                    <div className="flex flex-col gap-4">
                        <a href="#" className="text-white/70 hover:text-white py-2">Home</a>
                        <a href="#about" className="text-white/70 hover:text-white py-2">About</a>
                        <a href="#projects" className="text-white/70 hover:text-white py-2">Projects</a>
                        <a href="#contact" className="flex items-center gap-2 px-5 py-2.5 bg-orange-500 text-black font-medium rounded-full justify-center">
                            Get in touch
                            <ArrowRight size={16} />
                        </a>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
