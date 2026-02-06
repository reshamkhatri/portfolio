import { motion } from 'framer-motion';
import { Code, Palette, Rocket, Sparkles } from 'lucide-react';

const skills = [
    { icon: Palette, label: 'Brand Design', description: 'Creating memorable visual identities' },
    { icon: Code, label: 'Web Development', description: 'Building modern, responsive websites' },
    { icon: Rocket, label: 'Digital Strategy', description: 'Driving growth through innovation' },
    { icon: Sparkles, label: 'Creative Direction', description: 'Bringing visions to life' },
];

export function About() {
    return (
        <section id="about" className="relative z-10 py-32 px-6 bg-[#0a0a0a] overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-0 w-full md:w-[600px] h-full md:h-[600px] bg-orange-500/5 rounded-full blur-[80px] -translate-y-1/2" />
                <div className="absolute top-0 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-red-500/5 rounded-full blur-[60px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <motion.span
                        className="inline-block px-4 py-2 mb-6 text-sm font-medium text-orange-400 bg-orange-500/10 rounded-full border border-orange-500/20"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        About Me
                    </motion.span>
                    <h2 className="text-4xl md:text-6xl font-bold font-space mb-6">
                        Crafting Digital
                        <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"> Experiences</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        I'm Resham KC, a creative professional passionate about transforming ideas into
                        impactful digital solutions that resonate with audiences.
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Left - Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div className="space-y-4">
                            <p className="text-gray-300 text-lg leading-relaxed">
                                With a keen eye for design and a passion for innovation, I specialize in creating
                                brands and digital experiences that stand out. My approach combines strategic
                                thinking with creative execution to deliver results that exceed expectations.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                Every project I undertake is an opportunity to push boundaries and explore new
                                possibilities. I believe great design is not just about aesthetics - it is about
                                solving problems and creating meaningful connections.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                            {[
                                { value: '2+', label: 'Years Experience' },
                                { value: '50+', label: 'Projects Completed' },
                                { value: '30+', label: 'Happy Clients' },
                            ].map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Skills Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {skills.map((skill, i) => (
                            <motion.div
                                key={skill.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300"
                            >
                                <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center group-hover:from-orange-500/30 group-hover:to-red-500/30 transition-colors">
                                    <skill.icon className="w-6 h-6 text-orange-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                                    {skill.label}
                                </h3>
                                <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                                    {skill.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-shadow"
                    >
                        Let's Work Together
                        <Rocket className="w-5 h-5" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
