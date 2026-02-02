import { motion } from 'framer-motion';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-orange-500 font-medium mb-4 tracking-wider uppercase text-sm">
                            Creative Developer
                        </h2>
                        <h1
                            className="text-6xl sm:text-7xl md:text-8xl font-bold text-white leading-[0.9] mb-8"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                            Crafting<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
                                Digital
                            </span><br />
                            Events.
                        </h1>
                        <p className="text-white/60 text-lg md:text-xl max-w-md leading-relaxed mb-10">
                            I merge technical expertise with design sensibility to create immersive web experiences that leave a lasting impact.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-orange-500 text-black font-semibold rounded-full hover:bg-orange-400 transition-colors"
                            >
                                View Projects
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm"
                            >
                                Contact Me
                            </motion.button>
                        </div>
                    </motion.div>
                </div>

                {/* Right Content - Abstract visual or Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="hidden lg:flex justify-center"
                >
                    {/* The 3D background will provide the visual interest here, 
                        or we can place a floating card/image */}
                    <div className="relative w-[400px] h-[500px] bg-white/5 border border-white/10 rounded-full backdrop-blur-sm p-4 flex items-center justify-center">
                        <div className="w-full h-full rounded-full overflow-hidden relative">
                            <img
                                src="/hero-image.png"
                                alt="Portrait"
                                className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-[1px] h-20 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
            </motion.div>
        </section>
    );
}
