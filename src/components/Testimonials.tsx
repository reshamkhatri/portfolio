import { motion } from 'framer-motion';

export function Testimonials() {
    return (
        <section className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Client Stories
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors"
                        >
                            <div className="flex gap-1 mb-4 text-orange-500">
                                {['★', '★', '★', '★', '★'].map(s => <span key={s}>{s}</span>)}
                            </div>
                            <p className="text-white/80 leading-relaxed mb-6">
                                "The attention to detail and animations are simply next level. Delivered beyond our expectations."
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-purple-500" />
                                <div>
                                    <p className="font-semibold text-sm">Alex Morgan</p>
                                    <p className="text-white/40 text-xs">CEO, TechStart</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
