import { motion } from 'framer-motion';

const services = [
    "BRANDING", "WEB DESIGN", "UI/UX", "DEVELOPMENT", "STRATEGY",
    "BRANDING", "WEB DESIGN", "UI/UX", "DEVELOPMENT", "STRATEGY"
];

export function Marquee() {
    return (
        <div className="relative z-10 py-10 bg-black overflow-hidden border-y border-white/5">
            <div className="flex select-none">
                <motion.div
                    className="flex flex-shrink-0 gap-16 pr-16"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {[...services, ...services, ...services].map((service, i) => (
                        <div key={i} className="flex items-center gap-16">
                            <span className="text-4xl md:text-6xl font-bold font-space text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5">
                                {service}
                            </span>
                            <div className="w-3 h-3 rounded-full bg-orange-500/20" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
