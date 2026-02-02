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
            <div className="absolute inset-0 cinematic-gradient opacity-90" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-25 brightness-100 contrast-150 mix-blend-overlay" />

            {/* 2. Main Content Container */}
            <div className="relative z-10 w-full h-full max-w-[1400px] mx-auto px-6 md:px-12 pt-24 pb-12 flex flex-col">

                {/* Upper Section */}
                <div className="flex-1 relative flex items-center justify-center">

                    {/* Left Text: Hey I'm a Creative */}
                    {/* Left Text: Hey I'm a Creative */}
                    <div className="absolute left-0 top-[22%] z-20 pointer-events-none">
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-white text-xl md:text-3xl font-medium mb-4 pl-4"
                        >
                            Hey, I'm a
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="text-[12vw] font-bold text-white tracking-tighter leading-none"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                            Creative
                        </motion.h1>
                    </div>

                    {/* Right Text: Director */}
                    <div className="absolute right-0 top-[48%] z-20 text-right pointer-events-none">
                        <motion.h1
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="text-[12vw] font-bold text-white tracking-tighter leading-none mb-4"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                            Director
                        </motion.h1>

                        <div className="flex flex-col items-end max-w-xl ml-auto pr-4 pointer-events-none">
                            <motion.h3
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2 }}
                                className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight"
                            >
                                Great design should feel invisible.
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.4 }}
                                className="text-white/80 text-sm md:text-lg lg:text-xl font-medium max-w-sm"
                            >
                                From logo to language, I build brands that connect and convert.
                            </motion.p>
                        </div>
                    </div>

                    {/* Center Image */}
                    {/* Center Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[80vh] md:h-[85vh] lg:h-[90vh] z-10 w-full max-w-5xl flex items-end justify-center pointer-events-none"
                    >
                        <img
                            src="/hero-image.png"
                            alt="Creative Director"
                            className="h-full w-auto object-contain drop-shadow-2xl"
                        />
                    </motion.div>
                </div>

                {/* Footer Services */}
                <div className="relative z-30 w-full mt-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {services.map((service, i) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.5 + (i * 0.1) }}
                                className="flex flex-col group cursor-pointer"
                            >
                                <span className="text-orange-500 font-bold text-sm mb-1 group-hover:text-white transition-colors">#{service.id}</span>
                                <span className="text-white/90 text-sm md:text-base font-medium group-hover:text-orange-500 transition-colors">{service.title}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
