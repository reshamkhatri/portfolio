import { motion } from 'framer-motion';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';

const projects = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
        likes: 124,
        caption: "Minimalist brand identity design for a tech startup. 🚀 #branding #design"
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=1000&auto=format&fit=crop',
        likes: 89,
        caption: "Social media campaign graphics that convert. 📈 #marketing #graphics"
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop',
        likes: 256,
        caption: "Modern UI/UX concept for a travel app. ✈️ #uiux #appdesign"
    }
];

export function Projects() {
    return (
        <section id="projects" className="py-32 px-4 md:px-6 relative bg-[#0a0a0a] z-10">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold font-space mb-6">
                        Social Media
                        <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"> Designs</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Curated collection of engaging social media assets and campaigns.
                    </p>
                </motion.div>

                {/* Instagram Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="w-full max-w-sm bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-orange-500/30 transition-all duration-300 group"
                        >
                            {/* Card Header */}
                            <div className="p-4 flex items-center justify-between border-b border-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 to-red-500 p-[2px]">
                                        <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-xs font-bold text-white">
                                            RK
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-white">resham_kc</p>
                                        <p className="text-xs text-gray-500">Suggested for you</p>
                                    </div>
                                </div>
                                <MoreHorizontal className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
                            </div>

                            {/* Card Image */}
                            <div className="aspect-square relative overflow-hidden bg-white/5">
                                <img
                                    src={project.image}
                                    alt="Project preview"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Card Footer */}
                            <div className="p-4 space-y-3">
                                {/* Actions */}
                                <div className="flex items-center justify-between text-white">
                                    <div className="flex items-center gap-4">
                                        <Heart className="w-6 h-6 hover:text-red-500 cursor-pointer transition-colors" />
                                        <MessageCircle className="w-6 h-6 hover:text-orange-400 cursor-pointer transition-colors" />
                                        <Send className="w-6 h-6 hover:text-orange-400 cursor-pointer transition-colors" />
                                    </div>
                                    <Bookmark className="w-6 h-6 hover:text-orange-400 cursor-pointer transition-colors" />
                                </div>

                                {/* Likes */}
                                <p className="text-sm font-semibold text-white">
                                    {project.likes} likes
                                </p>

                                {/* Caption */}
                                <div className="text-sm text-gray-300">
                                    <span className="font-semibold text-white mr-2">resham_kc</span>
                                    {project.caption}
                                </div>

                                {/* Time */}
                                <p className="text-[10px] text-gray-500 uppercase tracking-wide">
                                    2 days ago
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
