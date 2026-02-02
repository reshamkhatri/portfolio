import { motion } from 'framer-motion';

const services = [
    { num: '01', title: 'Brand Strategy' },
    { num: '02', title: 'Brand Identity Design' },
    { num: '03', title: 'Web Development' },
    { num: '04', title: 'Creative Direction' },
];

export function Hero() {
    return (
        <div className="relative min-h-screen gradient-hero overflow-hidden">
            {/* Hero Image in center - behind text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    className="relative"
                >
                    {/* Hero Image */}
                    <div className="w-[400px] h-[500px] md:w-[500px] md:h-[600px] rounded-full flex items-center justify-center relative z-10">
                        <img
                            src="/hero-image.png"
                            alt="Creative Developer"
                            className="w-full h-full object-cover rounded-full border-4 border-orange-500/20 shadow-2xl shadow-orange-500/20"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-8 min-h-screen flex flex-col">
                {/* Main Content Area */}
                <div className="flex-1 flex items-center">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Left - Main Headline */}
                        <div>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-lg md:text-xl text-white/80 mb-4"
                            >
                                Hey, I'm a
                            </motion.p>

                            <motion.h1
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight text-white"
                                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                            >
                                Creative<br />
                                Developer
                            </motion.h1>
                        </div>

                        {/* Right - Tagline */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="lg:text-right lg:self-center"
                        >
                            <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
                                Great design should<br />feel invisible.
                            </h2>
                            <p className="text-white/60 text-sm md:text-base max-w-xs lg:ml-auto">
                                From logo to language, I build brands that connect and convert.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Services Footer */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 py-6 border-t border-white/10 mt-auto">
                    {services.map((service, i) => (
                        <div key={i} className="group cursor-pointer">
                            <span className="text-orange-500 text-xs md:text-sm font-medium">#{service.num}</span>
                            <p className="text-white text-sm md:text-base font-medium mt-1 group-hover:text-orange-500 transition-colors">
                                {service.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
