import { motion } from 'framer-motion';

export function Contact() {
    return (
        <section id="contact" className="py-32 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-bold mb-8"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                    Let's create something <span className="text-orange-500 block md:inline">extraordinary.</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl max-w-2xl mx-auto mt-12"
                >
                    <form className="space-y-4 text-left">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs uppercase tracking-wider text-white/50 mb-2">Name</label>
                                <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:border-orange-500 outline-none transition-colors" />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-wider text-white/50 mb-2">Email</label>
                                <input type="email" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:border-orange-500 outline-none transition-colors" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs uppercase tracking-wider text-white/50 mb-2">Message</label>
                            <textarea rows={4} className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:border-orange-500 outline-none transition-colors resize-none" />
                        </div>
                        <button className="w-full py-4 bg-orange-500 text-black font-bold rounded-lg hover:bg-orange-400 transition-colors mt-4">
                            Send Message
                        </button>
                    </form>

                    <div className="mt-12 pt-8 border-t border-white/10 flex justify-center gap-8 text-white/40">
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-white transition-colors">GitHub</a>
                    </div>

                    <p className="mt-8 text-white/20 text-sm">© 2026 Portfolio v3.0</p>
                </motion.div>
            </div>
        </section>
    );
}
