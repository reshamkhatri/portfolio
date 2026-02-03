import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Trophy, Zap, Target } from 'lucide-react';

interface Project {
    id: number;
    title: string;
    caption: string;
    image: string;
    challenge?: string;
    solution?: string;
    impact?: string;
}

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
    if (!project) return null;

    return (
        <AnimatePresence>
            {project && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 cursor-pointer"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="fixed inset-4 md:inset-auto md:top-[10%] md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-4xl md:h-[80vh] bg-[#0f0f0f] border border-white/10 rounded-[2rem] z-50 overflow-hidden flex flex-col md:flex-row shadow-2xl"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-white/20 text-white rounded-full transition-colors border border-white/10"
                        >
                            <X size={20} />
                        </button>

                        {/* Image Section */}
                        <div className="md:w-1/2 h-64 md:h-full relative overflow-hidden bg-black/50">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent md:bg-gradient-to-r" />
                        </div>

                        {/* Content Section */}
                        <div className="md:w-1/2 p-6 md:p-10 overflow-y-auto custom-scrollbar">
                            <div className="mb-8">
                                <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-orange-400 bg-orange-500/10 rounded-full border border-orange-500/20">
                                    {project.caption}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold font-space text-white mb-2">
                                    {project.title}
                                </h2>
                            </div>

                            <div className="space-y-8">
                                {/* Challenge */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-red-400">
                                        <Target size={20} />
                                        <h3 className="font-bold text-lg uppercase tracking-wider">The Challenge</h3>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed">
                                        {project.challenge || "Every project starts with a unique problem. Our goal was to identify the core constraints and turn them into creative opportunities."}
                                    </p>
                                </div>

                                {/* Solution */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-orange-400">
                                        <Zap size={20} />
                                        <h3 className="font-bold text-lg uppercase tracking-wider">The Solution</h3>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed">
                                        {project.solution || "We implemented a strategic design approach, focusing on visual storytelling and user-centric interactions to create a lasting impression."}
                                    </p>
                                </div>

                                {/* Impact - Only show if impact data exists */}
                                {project.impact && (
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 text-green-400">
                                            <Trophy size={20} />
                                            <h3 className="font-bold text-lg uppercase tracking-wider">The Impact</h3>
                                        </div>
                                        <p className="text-gray-400 leading-relaxed">
                                            {project.impact}
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* CTA */}
                            <div className="mt-12 pt-8 border-t border-white/10">
                                <button className="w-full py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors group">
                                    Discuss Similar Project
                                    <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
