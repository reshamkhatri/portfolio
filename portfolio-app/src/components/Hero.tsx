import { motion } from 'framer-motion';

const services = [
    { num: '01', title: 'Brand Strategy' },
    { num: '02', title: 'Brand Identity Design' },
    { num: '03', title: 'Packaging Design' },
    { num: '04', title: 'Creative Direction' },
];

export function Hero() {
    return (
        <section className="relative min-h-[110vh] bg-black overflow-hidden px-4 md:px-0">
            {/* Background Glow Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,#ea580c_0%,transparent_50%)] opacity-40 blur-3xl" />
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,#f97316_0%,transparent_40%)] opacity-30 blur-3xl" />
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
                        className="h-[105%] w-auto object-contain object-bottom select-none"
                    />
                </motion.div>
            </div>

            {/* Main Content Layer */}
            <div className="relative z-20 max-w-7xl mx-auto min-h-screen flex flex-col justify-between pt-40 pb-20">
                {/* Headline Section */}
                <div className="relative flex flex-col md:flex-row items-end justify-between">
                    <div className="w-full md:w-2/3">
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl md:text-2xl text-white font-medium mb-6"
                        >
                            Hey, I'm a
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="text-[12vw] md:text-[8vw] lg:text-[10vw] font-bold leading-[0.85] tracking-tight text-white m-0"
                        >
                            Creative<br />
                            <span className="text-white">Director</span>
                        </motion.h1>
                    </div>

                    {/* Tagline Box */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-12 md:mt-0 md:max-w-[18rem] text-right md:text-left bg-black/5 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-4 md:p-0 rounded-xl"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                            Great design should feel invisible.
                        </h2>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                            From logo to language, I build brands that connect and convert.
                        </p>
                    </motion.div>
                </div>

                {/* Footer Services Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 pt-12 border-t border-white/5"
                >
                    {services.map((service, i) => (
                        <div key={i} className="group flex flex-col gap-2">
                            <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">
                                #{service.num}
                            </span>
                            <p className="text-white text-lg md:text-xl font-bold leading-tight group-hover:text-orange-500 transition-colors">
                                {service.title}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Dark vignette bottom */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20" />
        </section>
    );
}
