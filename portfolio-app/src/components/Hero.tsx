import { motion } from 'framer-motion';

export function Hero() {
    return (
        <section className="sticky top-0 z-0 min-h-[100vh] bg-black overflow-hidden px-4 md:px-0">
            {/* Background Glow Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,#ea580c_0%,transparent_50%)] opacity-90 blur-[100px]" />
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,#f97316_0%,transparent_40%)] opacity-80 blur-[100px]" />
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
            <div className="relative z-20 max-w-7xl mx-auto min-h-screen flex flex-col justify-center pb-20">
                {/* Headline Section */}
                <div className="relative flex flex-col md:flex-row items-end justify-between w-full">
                    <div className="relative z-30">
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl md:text-2xl text-white/80 font-medium mb-2"
                        >
                            Hey, I'm <span className="text-orange-400 font-bold">Resham KC</span>
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="font-space text-[10vw] md:text-[7vw] lg:text-[8vw] font-bold leading-none tracking-tighter text-white m-0"
                        >
                            Creative<br />
                            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Creator</span>
                        </motion.h1>
                    </div>

                    {/* Tagline Box */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-8 md:mt-0 md:mb-12 md:max-w-[20rem] text-right md:text-left"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                            Great design should feel invisible.
                        </h2>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
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
