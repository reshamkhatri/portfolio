import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
    { title: 'Project Alpha', cat: 'Development', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop' },
    { title: 'Neon Brand', cat: 'Design', img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop' },
    { title: 'Flow App', cat: 'Mobile', img: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&h=600&fit=crop' },
    { title: 'Zenith UI', cat: 'System', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop' },
];

export function Projects() {
    return (
        <section className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-end mb-16"
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Selected Work
                        </h2>
                        <p className="text-white/60">Recent web and mobile projects</p>
                    </div>
                    <button className="hidden md:flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                        View Archive <ArrowUpRight size={16} />
                    </button>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative"
                        >
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-white/10 bg-white/5 backdrop-blur-sm">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <button className="p-4 bg-white text-black rounded-full hover:scale-110 transition-transform"><ExternalLink size={20} /></button>
                                    <button className="p-4 bg-white/20 text-white rounded-full backdrop-blur-md hover:scale-110 transition-transform"><Github size={20} /></button>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                            <p className="text-white/50 text-sm uppercase tracking-wider">{item.cat}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
