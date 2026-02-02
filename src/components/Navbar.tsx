import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ArrowUpRight } from 'lucide-react';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className={`fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 px-6 py-3 rounded-2xl transition-all duration-500 ${scrolled
                ? 'backdrop-blur-lg bg-black/50 border border-white/10 shadow-2xl shadow-black/50'
                : 'backdrop-blur-md bg-white/5 border border-white/5 shadow-xl'
                }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <motion.a
                    href="#home"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group"
                >
                    <span className="text-2xl font-bold tracking-tight text-white font-space">
                        Resham
                    </span>
                    <motion.div
                        className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500"
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-2">
                    {navLinks.map((link) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            onClick={() => setActiveLink(link.name)}
                            className="relative px-4 py-2 group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className={`relative z-10 transition-colors duration-300 ${activeLink === link.name
                                ? 'text-white font-medium'
                                : 'text-gray-400 group-hover:text-white'
                                }`}>
                                {link.name}
                            </span>

                            {/* Animated underline */}
                            <motion.div
                                className="absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                                initial={{ width: 0, x: '-50%' }}
                                animate={{
                                    width: activeLink === link.name ? '60%' : 0,
                                    x: '-50%'
                                }}
                                whileHover={{ width: '60%' }}
                                transition={{ duration: 0.3 }}
                            />

                            {/* Hover glow effect */}
                            <motion.div
                                className="absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            />
                        </motion.a>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.a
                    href="https://wa.me/9779764352843"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="hidden md:flex items-center gap-3 pl-6 pr-2 py-2 bg-white text-black font-semibold rounded-full group overflow-hidden relative"
                >
                    <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-1">
                        Get in touch
                    </span>
                    <motion.div
                        className="relative z-10 bg-orange-500 p-2 rounded-full flex items-center justify-center text-white"
                        whileHover={{ rotate: 45 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ArrowUpRight size={18} strokeWidth={3} />
                    </motion.div>

                    {/* Hover gradient overlay */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-orange-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                </motion.a>

                {/* Mobile Menu Button */}
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="md:hidden relative p-2 text-white"
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X size={24} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Menu size={24} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, y: -20 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                        className="md:hidden absolute top-full left-0 right-0 overflow-hidden"
                    >
                        <div className="mx-4 mt-2 p-6 rounded-2xl backdrop-blur-xl bg-black/80 border border-white/10">
                            <div className="flex flex-col gap-2">
                                {navLinks.map((link, i) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        onClick={() => {
                                            setActiveLink(link.name);
                                            setIsOpen(false);
                                        }}
                                        className={`py-3 px-4 rounded-xl transition-all duration-300 ${activeLink === link.name
                                            ? 'bg-white/10 text-white font-medium'
                                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}

                                <motion.a
                                    href="https://wa.me/9779764352843"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                    onClick={() => setIsOpen(false)}
                                    className="mt-2 flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl"
                                >
                                    Get in touch
                                    <ArrowRight size={18} />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
