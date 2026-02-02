import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: 'Brand Identity',
        cat: 'Graphic Design',
        desc: 'Complete corporate identity design for a leading tech startup.',
        img: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=1600&h=900&fit=crop',
        tags: ['Photoshop', 'Illustrator', 'Branding']
    },
    {
        title: 'EcoHotel',
        cat: 'Graphic Design & Video',
        desc: 'Promotional video and social media suite for a luxury eco-resort.',
        img: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1600&h=900&fit=crop',
        tags: ['Premiere Pro', 'After Effects', 'Social Media']
    },
    {
        title: 'FinTrack Mobile',
        cat: 'App Development',
        desc: 'A comprehensive personal finance tracking application with real-time analytics.',
        img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&h=900&fit=crop',
        tags: ['React Native', 'Firebase', 'iOS/Android']
    },
    {
        title: 'Lumina Web',
        cat: 'Web Design',
        desc: 'Award-winning immersive experiential website for a digital art museum.',
        img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1600&h=900&fit=crop',
        tags: ['React', 'Three.js', 'WebGL']
    },
];

function ProjectCard({ project, index, range, targetScale }: { project: any, index: number, range: any, targetScale: number }) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(range, [0, 1], [1, targetScale]);

    return (
        <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{ scale, top: `calc(-5vh + ${index * 25}px)` }}
                className="relative flex flex-col md:flex-row w-full md:w-[1000px] h-[600px] rounded-[30px] bg-[#1a1a1a] border border-white/10 overflow-hidden origin-top"
            >
                <div className="flex flex-col md:flex-row h-full w-full">
                    {/* Content Side */}
                    <div className="w-full md:w-[40%] p-8 md:p-12 flex flex-col justify-between z-10 bg-[#1a1a1a]">
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full border border-orange-500/30 text-orange-500 text-xs font-semibold uppercase tracking-wider mb-6">
                                {project.cat}
                            </span>
                            <h3 className="text-3xl md:text-4xl font-bold mb-6 font-space">{project.title}</h3>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                {project.desc}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag: string, i: number) => (
                                    <span key={i} className="px-3 py-1 bg-white/5 rounded-md text-xs text-white/60">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-4 mt-8 md:mt-0">
                            <button className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">
                                View Case <ArrowUpRight size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="w-full md:w-[60%] h-full relative overflow-hidden">
                        <motion.div style={{ scale: imageScale }} className="w-full h-full">
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20" />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export function Projects() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <section ref={container} id="projects" className="relative mt-[20vh] mb-[20vh]">
            <div className="max-w-7xl mx-auto px-6 mb-24">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-6xl md:text-8xl font-bold font-space mb-8"
                >
                    Selected <span className="text-orange-500">Works</span>
                </motion.h2>
                <div className="w-full h-[1px] bg-white/10" />
            </div>

            {projects.map((project, i) => {
                const targetScale = 1 - ((projects.length - i) * 0.05);
                return <ProjectCard key={i} index={i} project={project} range={scrollYProgress} targetScale={targetScale} />;
            })}
        </section>
    );
}
