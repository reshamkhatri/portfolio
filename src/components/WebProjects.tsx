import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

type WebProject = {
    title: string;
    url: string;
    image: string;
    tags: string[];
    description: string;
    highlights: string[];
    color: string;
    gradient: string;
};

const webProjects: WebProject[] = [
    {
        title: "Himalayan Willow",
        url: "https://www.himalayanwillow.com.np/",
        image: "/projects/himalayan_willow.png",
        tags: ["E-commerce", "Sports", "Cricket"],
        description: "A vibrant sports e-commerce store specializing in premium willow cricket equipment.",
        highlights: ["Product-first UI", "Conversion-focused layout", "Mobile-optimized experience"],
        color: "from-emerald-600 to-teal-800",
        gradient: "from-emerald-500/20 via-teal-500/20 to-transparent"
    },
    {
        title: "Iconic Law Firm",
        url: "https://www.iconiclawfirm.com.np/",
        image: "/projects/iconic_law.png",
        tags: ["Legal", "Corporate Law", "Authority"],
        description: "A sophisticated professional platform for a leading law firm, emphasizing trust and experience.",
        highlights: ["Trust-led design language", "Clear practice-area hierarchy", "Fast, accessible pages"],
        color: "from-amber-600 to-yellow-800",
        gradient: "from-amber-500/20 via-yellow-500/20 to-transparent"
    },
    {
        title: "DG Lytix",
        url: "https://dglytix.com/",
        image: "/projects/dglytix.png",
        tags: ["Web Agency", "Creative Design", "Global Services"],
        description: "A high-performance digital agency platform focusing on global creativity and digital future.",
        highlights: ["Bold hero storytelling", "Smooth interactions", "Agency-style layout system"],
        color: "from-blue-600 to-purple-600",
        gradient: "from-blue-500/20 via-purple-500/20 to-transparent"
    }
];

function WebProjectCard({ project, index }: { project: WebProject; index: number }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: index * 0.06, ease: 'easeOut' }}
            className="group relative rounded-3xl border border-white/10 bg-white/5 overflow-hidden"
        >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className={`absolute -top-28 -left-28 w-72 h-72 bg-gradient-to-br ${project.color} opacity-15 rounded-full blur-3xl`} />
                <div className={`absolute -bottom-28 -right-28 w-72 h-72 bg-gradient-to-br ${project.color} opacity-10 rounded-full blur-3xl`} />
            </div>

            <div className="relative p-6 md:p-7">
                <div className="relative rounded-2xl border border-white/10 bg-black/30 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-70 pointer-events-none`} />
                    <div className="relative aspect-video">
                        <img
                            src={project.image}
                            alt={`${project.title} website screenshot`}
                            className="absolute inset-0 h-full w-full object-cover object-top"
                            loading="lazy"
                        />
                    </div>
                </div>

                <div className="mt-6 flex items-start justify-between gap-4">
                    <div className="min-w-0">
                        <h3 className="text-xl md:text-2xl font-bold font-space text-white truncate">
                            {project.title}
                        </h3>
                        <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 inline-flex items-center justify-center gap-2 h-10 px-4 rounded-full bg-white text-black font-semibold hover:bg-orange-500 hover:text-white transition-colors"
                        aria-label={`Open ${project.title} live site`}
                    >
                        Live <ExternalLink size={16} />
                    </a>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1.5 rounded-full text-xs bg-black/30 border border-white/10 text-gray-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <ul className="mt-5 space-y-2 text-sm text-gray-400">
                    {project.highlights.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-400" />
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.article>
    );
}

export function WebProjects() {
    return (
        <section id="web-projects" className="relative py-28 bg-[#0a0a0a] overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-orange-500/5 rounded-full blur-[140px]" />
                <div className="absolute -bottom-40 right-[-120px] w-[700px] h-[700px] bg-red-500/5 rounded-full blur-[140px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-bold font-space mb-6">
                        Web{' '}
                        <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                            Showcase
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A simple grid of selected websites—clean builds, strong visuals, and conversion-focused layouts.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {webProjects.map((project, index) => (
                        <WebProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
