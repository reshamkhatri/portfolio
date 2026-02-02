import { motion } from 'framer-motion';

const services = [
    { num: '01', title: 'Brand Strategy' },
    { num: '02', title: 'Brand Identity Design' },
    { num: '03', title: 'Web Development' },
    { num: '04', title: 'Creative Direction' },
];

export function Hero() {
    return (
        <section className="relative min-h-screen gradient-hero overflow-hidden">
            {/* Background Glow Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-orange-500/20 rounded-full blur-[120px]"
                />
            </div>

            {/* Hero Image Placeholder - Position it in the center */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="relative w-[500px] h-[600px] flex items-center justify-center"
                >
                    {/* Placeholder for user's image */}
                    <div className="w-full h-full bg-gradient-to-b from-orange-500/10 to-transparent rounded-full flex items-center justify-center text-gray-600 text-center">
                        <span className="text-sm">Your Image Here</span>
                    </div>
                </motion.div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 min-h-screen flex flex-col justify-between">
                {/* Main Headline */}
                <div className="flex-1 flex flex-col justify-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-300 mb-4"
                    >
                        Hey, I'm a
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight"
                    >
                        Creative<br />
                        Developer
                    </motion.h1>

                    {/* Right side tagline */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="md:absolute md:right-6 md:top-1/2 md:-translate-y-1/2 mt-8 md:mt-0 max-w-xs"
                    >
                        <h2 className="text-2xl font-semibold mb-2">
                            Great design should<br />feel invisible.
                        </h2>
                        <p className="text-gray-400 text-sm">
                            From logo to language, I build brands that connect and convert.
                        </p>
                    </motion.div>
                </div>

                {/* Services Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/10"
                >
                    {services.map((service, i) => (
                        <div key={i} className="group">
                            <span className="text-orange-500 text-sm font-medium">#{service.num}</span>
                            <p className="text-white font-medium mt-1 group-hover:text-orange-500 transition-colors">
                                {service.title}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
