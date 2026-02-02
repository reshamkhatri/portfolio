import { motion } from 'framer-motion';

const services = [
    { id: '01', title: 'Brand Strategy' },
    { id: '02', title: 'Brand Identity Design' },
    { id: '03', title: 'Packaging Design' },
    { id: '04', title: 'Creative Direction' },
];

export function Hero() {
    return (
        <section className="relative h-screen w-full bg-[#0a0a0a] overflow-hidden flex flex-col justify-between">
            {/* 1. Cinematic Background */}
            <div className="absolute inset-0 cinematic-gradient opacity-80" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />

            {/* 2. Central Image (Masked) */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[85vh] z-10 w-full max-w-2xl flex items-end justify-center pointer-events-none"
            >
                {/* Placeholder for user image - replaced with actual user image when available */}
                <img
                    src="/hero-image.png"
                    alt="Creative Director"
                    className="h-full w-auto object-contain image-mask-bottom drop-shadow-2xl"
                />
            </motion.div>

            {/* 3. Typography Layer */}
            <div className="relative z-20 h-full max-w-[1400px] mx-auto w-full px-6 md:px-12 flex flex-col justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full items-center h-full pt-20">

                    {/* Left Text */}
                    <div className="flex flex-col justify-center items-start">
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-white/80 text-xl md:text-2xl font-medium mb-2 pl-2"
                        >
                            Hey, I'm a
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="text-8xl md:text-[10rem] font-bold text-white tracking-tighter leading-[0.85] text-glow mix-blend-overlay md:mix-blend-normal"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                            Creative
                        </motion.h1>
                    </div>

                    {/* Right Text */}
                    <div className="flex flex-col justify-center items-end md:items-start text-right md:text-left mt-20 md:mt-0">
                        <div className="hidden md:block h-32" /> {/* Spacer to offset vertical alignment */}
                        <motion.h1
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="text-8xl md:text-[10rem] font-bold text-white tracking-tighter leading-[0.85] text-glow relative z-30"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                            Director
                        </motion.h1>

                        <div className="mt-8 md:ml-4 max-w-sm">
                            <motion.h3
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2 }}
                                className="text-2xl font-semibold text-white mb-2"
                            >
                                Great design should feel invisible.
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.4 }}
                                className="text-white/60 text-sm"
                            >
                                From logo to language, I build brands that connect and convert.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. Footer Services Strips */}
            <div className="relative z-30 w-full border-t border-white/10 bg-black/20 backdrop-blur-md">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 py-6 gap-4">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5 + (i * 0.1) }}
                            className="flex flex-col group cursor-pointer"
                        >
                            <span className="text-orange-500 font-bold text-sm mb-1 group-hover:text-white transition-colors">#{service.id}</span>
                            <span className="text-white/80 text-sm font-medium group-hover:text-orange-500 transition-colors">{service.title}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
