import { motion } from 'framer-motion';
import { ArrowUpRight, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
    return (
        <section id="contact" className="relative z-10 py-32 px-6 bg-[#050505] overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left Column: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-6xl md:text-8xl font-bold font-space text-white mb-8 leading-[0.9]">
                            Let's<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">connect</span>
                        </h2>

                        <p className="text-gray-400 text-lg mb-12 max-w-md">
                            Now it's time to tell the whole world about your business. Let's create something extraordinary together.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                                    <Mail className="text-white w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Email us</p>
                                    <p className="text-white font-medium">contact@reshamkhatri.com</p>
                                </div>
                            </div>

                            <a href="https://wa.me/9779764352843" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                                    <Phone className="text-white w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">WhatsApp</p>
                                    <p className="text-white font-medium">+977 9764352843</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                                    <MapPin className="text-white w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Our Office</p>
                                    <p className="text-white font-medium">Kathmandu, Nepal</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links Footer */}
                        <div className="mt-20 pt-8 border-t border-white/10 flex items-center gap-6">
                            <a href="https://www.instagram.com/reshamrkc/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram size={24} />
                            </a>
                            {/* Add more social icons as needed */}
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-10"
                    >
                        <form className="space-y-8">
                            <div>
                                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6">Contact Info*</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <input
                                            type="text"
                                            placeholder="YOUR NAME*"
                                            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <input
                                            type="email"
                                            placeholder="YOUR E-MAIL*"
                                            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6">You are interested in*</h3>
                                <div className="flex flex-wrap gap-3">
                                    {['Web Design', 'Web Development', 'Branding', 'Marketing', 'Other'].map((interest) => (
                                        <button
                                            key={interest}
                                            type="button"
                                            className="px-6 py-2 rounded-full border border-white/10 text-gray-400 text-sm hover:bg-white hover:text-black transition-all duration-300"
                                        >
                                            {interest}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6">Your budget in USD*</h3>
                                <div className="flex flex-wrap gap-3">
                                    {['<5K', '5-10K', '10-20K', '>20K', "I don't know yet"].map((budget) => (
                                        <button
                                            key={budget}
                                            type="button"
                                            className="px-6 py-2 rounded-full border border-white/10 text-gray-400 text-sm hover:bg-white hover:text-black transition-all duration-300"
                                        >
                                            {budget}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button className="w-full py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors group">
                                START A JOURNEY
                                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>

                <div className="mt-20 border-t border-white/5 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>© 2026 Resham Khatri. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Conditions</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
