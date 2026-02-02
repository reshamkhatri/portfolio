import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function Contact() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end end']
    });

    const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);

    return (
        <section
            id="contact"
            ref={container}
            className="min-h-screen relative z-0 flex items-center justify-center bg-zinc-900 border-t border-white/10"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#ea580c_0%,transparent_50%)] opacity-20 blur-[100px]" />

            <div className="max-w-7xl mx-auto w-full px-6 relative z-10 py-32">
                <div className="grid md:grid-cols-2 gap-20">
                    <div>
                        <motion.h2
                            style={{ y }}
                            className="text-[12vw] leading-[0.9] font-bold font-space text-white mb-12"
                        >
                            Let's<br />Talk
                        </motion.h2>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-gray-400 uppercase tracking-widest text-sm mb-2">Socials</h3>
                                <div className="flex flex-col gap-2 text-xl font-medium">
                                    <a href="#" className="hover:text-orange-500 transition-colors">Instagram</a>
                                    <a href="#" className="hover:text-orange-500 transition-colors">Twitter</a>
                                    <a href="#" className="hover:text-orange-500 transition-colors">LinkedIn</a>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-gray-400 uppercase tracking-widest text-sm mb-2">Email</h3>
                                <a href="mailto:hello@folio.com" className="text-xl font-medium hover:text-orange-500 transition-colors">
                                    hello@folio.com
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-end">
                        <form className="space-y-12">
                            <div className="group relative">
                                <input
                                    type="text"
                                    placeholder="What's your name?"
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-2xl outline-none text-white placeholder:text-gray-600 focus:border-orange-500 transition-colors"
                                />
                            </div>
                            <div className="group relative">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-2xl outline-none text-white placeholder:text-gray-600 focus:border-orange-500 transition-colors"
                                />
                            </div>
                            <div className="group relative">
                                <textarea
                                    rows={4}
                                    placeholder="Tell me about your project..."
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-2xl outline-none text-white placeholder:text-gray-600 focus:border-orange-500 transition-colors resize-none"
                                />
                            </div>

                            <button className="w-full py-6 bg-white text-black text-xl font-bold rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-32 flex justify-between items-end border-t border-white/10 pt-8">
                    <p className="text-white/40">© 2026 Portfolio. All rights reserved.</p>
                    <p className="text-white/40 text-[10vw] font-bold leading-none opacity-10">FOLIO</p>
                </div>
            </div>
        </section>
    );
}
