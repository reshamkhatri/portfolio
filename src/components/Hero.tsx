import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const roles = ["Creator", "Designer", "Artist", "Strategist"];

export function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="sticky top-0 z-0 min-h-[100vh] bg-black overflow-hidden px-4 md:px-0">
            {/* Static Background Glow Effects - Minimal footprint */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_30%,#ea580c_0%,transparent_70%)]" />
                <div className="absolute top-0 left-0 w-1/2 h-full bg-[radial-gradient(circle_at_10%_20%,#f97316_0%,transparent_60%)]" />
            </div>

            {/* Floating Glass Elements - Reduced count and simplified animation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
                {[...Array(2)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: ["-10%", "10%"],
                            rotate: [0, 10, 0],
                        }}
                        transition={{
                            duration: 15 + i * 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute w-64 h-64 rounded-full bg-white/[0.02] border border-white/5"
                        style={{
                            left: `${i * 60 + 10}%`,
                            top: `${i * 30 + 20}%`,
                        }}
                    />
                ))}
            </div>

            {/* Central Hero Image */}
            <div className="absolute inset-x-0 bottom-0 h-full flex items-end justify-center pointer-events-none z-10 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
                    className="relative w-full h-full flex items-end justify-center"
                >
                    <img
                        src="/hero-image.png"
                        alt="Hero Portrait"
                        className="h-[65%] md:h-[105%] w-auto object-contain object-bottom select-none opacity-60 md:opacity-100"
                    />
                </motion.div>
            </div>

            {/* Main Content Layer */}
            <div className="relative z-20 max-w-7xl mx-auto min-h-screen flex flex-col justify-center pb-12 md:pb-20 px-4 md:px-6">
                {/* Headline Section */}
                <div className="relative flex flex-col md:flex-row items-end justify-between w-full">
                    <div className="relative z-30 w-full md:w-auto">
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg md:text-2xl text-white/80 font-medium mb-2"
                        >
                            Hey, I'm <span className="text-orange-400 font-bold">Resham KC</span>
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="font-space text-[13vw] md:text-[7vw] lg:text-[8vw] font-bold leading-[0.9] tracking-tighter text-white m-0"
                        >
                            <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                                Creative
                            </span>
                            <br />
                            <div className="h-[1.1em] w-full overflow-visible relative">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={roles[roleIndex]}
                                        initial={{ y: 30, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -30, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: "circOut" }}
                                        className="absolute left-0 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent block whitespace-nowrap pb-1 pr-10"
                                    >
                                        {roles[roleIndex]}
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                        </motion.h1>
                    </div>

                    {/* Tagline Box */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-8 md:mt-0 md:mb-12 md:max-w-[20rem] text-left md:text-right flex flex-col md:items-end w-full md:w-auto"
                    >
                        <h2 className="text-lg md:text-3xl font-bold text-white mb-3 md:mb-4 leading-tight">
                            Great design should feel invisible.
                        </h2>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-[90%] md:max-w-[18rem]">
                            From logo to language, I build brands that connect and convert.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Dark vignette bottom */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20" />
        </section>
    );
}
