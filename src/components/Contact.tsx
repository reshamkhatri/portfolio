import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-[#0a0a0a]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left side - CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2
                            className="text-4xl md:text-5xl font-bold mb-6 text-white"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                            Let's work<br />together
                        </h2>
                        <p className="text-white/60 mb-8 max-w-md text-base">
                            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.
                        </p>

                        <motion.a
                            href="mailto:hello@example.com"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-3 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors text-sm"
                        >
                            <Mail size={18} />
                            Get In Touch
                        </motion.a>

                        {/* Social Links */}
                        <div className="flex gap-3 mt-8">
                            {[
                                { icon: Github, href: '#' },
                                { icon: Linkedin, href: '#' },
                                { icon: Twitter, href: '#' },
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-3 bg-white/5 border border-white/10 rounded-full text-white/60 hover:text-white hover:border-white/30 transition-colors"
                                >
                                    <social.icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right side - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl"
                    >
                        <form className="space-y-5">
                            <div>
                                <label className="block text-sm text-white/50 mb-2">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-orange-500/50 transition-colors text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-white/50 mb-2">Email</label>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-orange-500/50 transition-colors text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-white/50 mb-2">Message</label>
                                <textarea
                                    placeholder="Tell me about your project..."
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-orange-500/50 transition-colors resize-none text-sm"
                                />
                            </div>
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-3.5 bg-orange-500 text-black font-semibold rounded-xl hover:bg-orange-400 transition-colors text-sm"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                {/* Footer */}
                <div className="mt-20 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
                    <p>© 2024 Portfolio. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
}
