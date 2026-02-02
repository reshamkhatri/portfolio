import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Globe, Layout, Monitor } from 'lucide-react';

const webProjects = [
    {
        title: "DG Lytix",
        url: "https://dglytix.com/",
        image: "/projects/dglytix.png",
        tags: ["Web Agency", "Creative Design", "Global Services"],
        description: "A high-performance digital agency platform focusing on global creativity and digital future.",
        color: "from-blue-600 to-purple-600"
    },
    {
        title: "Iconic Law Firm",
        url: "https://www.iconiclawfirm.com.np/",
        image: "/projects/iconic_law.png",
        tags: ["Legal", "Corporate Law", "Authority"],
        description: "A sophisticated professional platform for a leading law firm, emphasizing trust and experience.",
        color: "from-amber-600 to-yellow-800"
    },
    {
        title: "Himalayan Willow",
        url: "https://www.himalayanwillow.com.np/",
        image: "/projects/himalayan_willow.png",
        tags: ["E-commerce", "Sports", "Cricket"],
        description: "A vibrant sports e-commerce store specializing in premium willow cricket equipment.",
        color: "from-emerald-600 to-teal-800"
    }
];

export function WebProjects() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    return (
        <section ref={containerRef} id="web-projects" className="relative py-32 bg-[#050505] overflow-hidden">
            {/* Background Glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-5xl md:text-7xl font-bold font-space mb-6">
                        Web <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Showcase</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        High-end digital experiences designed and developed to elevate brands globally.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-32">
                    {webProjects.map((project, index) => (
                        <WebProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function WebProjectCard({ project, index }: { project: any, index: number }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
        >
            {/* Project Preview */}
            <div className="flex-1 w-full group">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl transition-all duration-700 group-hover:scale-[1.02] group-hover:border-white/20">
                    {/* Browser Controls */}
                    <div className="absolute top-0 left-0 right-0 h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-1.5 z-20">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                        <div className="ml-4 flex-1 h-5 bg-black/40 rounded-md border border-white/5 flex items-center px-3 justify-center">
                            <span className="text-[10px] text-gray-500 font-mono tracking-tight">{project.url.replace('https://', '')}</span>
                        </div>
                    </div>

                    {/* Image with Parallax-ish Effect */}
                    <motion.div
                        whileHover={{ y: -50 }}
                        transition={{ duration: 4, ease: "linear" }}
                        className="pt-8"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-auto object-cover"
                        />
                    </motion.div>

                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm z-30">
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-orange-500 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500"
                        >
                            Open Live Site <ExternalLink size={18} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Project Info */}
            <div className="flex-1 space-y-8">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${project.color} bg-opacity-20`}>
                            <Globe size={24} className="text-white" />
                        </div>
                        <h3 className="text-3xl md:text-5xl font-bold font-space text-white">{project.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag: string) => (
                            <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 font-medium">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <p className="text-gray-400 text-xl leading-relaxed">
                    {project.description}
                </p>

                <div className="pt-6 grid grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-white font-semibold">
                            <Layout size={18} className="text-orange-500" />
                            <span>UI/UX Design</span>
                        </div>
                        <p className="text-sm text-gray-500 text-left">Bespoke design tailored to brand identity.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-white font-semibold">
                            <Monitor size={18} className="text-orange-500" />
                            <span>Performance</span>
                        </div>
                        <p className="text-sm text-gray-500 text-left">Optimized for speed and SEO excellence.</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
