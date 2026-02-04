import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Check, ExternalLink, Globe, Layout, Monitor } from 'lucide-react';

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

export function WebProjects() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section
            ref={containerRef}
            id="web-projects"
            className="relative min-h-screen py-32 bg-[#0a0a0a] overflow-hidden"
        >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-[#0a0a0a]" />

            {/* Parallax Background Elements */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 pointer-events-none"
            >
                <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
            </motion.div>

            {/* Top Border with Animation */}
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent origin-center"
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header with Staggered Animation */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-20 text-center"
                >
                    <motion.h2
                        className="text-5xl md:text-7xl font-bold font-space mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Web <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Showcase</span>
                    </motion.h2>
                    <motion.p
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        High-end digital experiences designed and developed to elevate brands globally.
                    </motion.p>
                </motion.div>

                {/* Unique: Scroll-synced tabbed browser showcase */}
                <div className="mb-28">
                    <WebTabsShowcase projects={webProjects} />
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 gap-32">
                    {webProjects.map((project, index) => (
                        <WebProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function WebTabsShowcase({ projects }: { projects: WebProject[] }) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: wrapperRef,
        offset: ["start start", "end end"]
    });

    useEffect(() => {
        if (projects.length <= 1) return;
        return scrollYProgress.on("change", (value) => {
            const clamped = Math.max(0, Math.min(1, value));
            const next = Math.min(projects.length - 1, Math.floor(clamped * projects.length));
            setActiveIndex((prev) => (prev === next ? prev : next));
        });
    }, [projects.length, scrollYProgress]);

    const activeProject = useMemo(() => projects[activeIndex]!, [activeIndex, projects]);

    return (
        <div ref={wrapperRef} className="relative lg:h-[240vh]">
            <div className="lg:sticky lg:top-0 lg:h-screen flex items-center">
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
                    {/* Story/Stepper */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="space-y-2">
                            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-space">
                                Scroll to switch tabs
                            </p>
                            <h3 className="text-2xl md:text-3xl font-bold font-space">
                                Websites as a <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Story</span>
                            </h3>
                            <p className="text-gray-400 text-base leading-relaxed">
                                Instead of a flat grid, this section behaves like a product demo: tabs change as you scroll,
                                and each website gets a quick “why it works” snapshot.
                            </p>
                        </div>

                        <div className="space-y-3">
                            {projects.map((project, i) => {
                                const isActive = i === activeIndex;
                                return (
                                    <button
                                        key={project.title}
                                        type="button"
                                        onClick={() => setActiveIndex(i)}
                                        className={`w-full text-left rounded-2xl border px-5 py-4 transition-all ${isActive
                                            ? 'bg-white/10 border-orange-500/30 shadow-[0_0_0_1px_rgba(249,115,22,0.15)]'
                                            : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                                            }`}
                                        aria-current={isActive ? 'true' : undefined}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className={`mt-2 h-2.5 w-2.5 rounded-full ${isActive ? 'bg-orange-400' : 'bg-white/20'}`} />
                                            <div className="min-w-0">
                                                <div className="flex items-center justify-between gap-3">
                                                    <p className={`font-semibold ${isActive ? 'text-white' : 'text-gray-200'}`}>
                                                        {project.title}
                                                    </p>
                                                    <span className="text-[10px] text-gray-500 font-mono truncate max-w-[140px]">
                                                        {project.url.replace('https://', '').replace('www.', '')}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-500 mt-1">
                                                    {project.tags.join(' • ')}
                                                </p>
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        <motion.div
                            key={activeProject.title}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            className="rounded-2xl border border-white/10 bg-white/5 p-6"
                        >
                            <p className="text-gray-300 leading-relaxed">
                                {activeProject.description}
                            </p>
                            <ul className="mt-4 space-y-2">
                                {activeProject.highlights.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-sm text-gray-400">
                                        <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 border border-white/10">
                                            <Check className="h-3.5 w-3.5 text-orange-400" />
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Tabbed Browser */}
                    <div className="lg:col-span-7">
                        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent shadow-2xl overflow-hidden">
                            {/* Chrome */}
                            <div className="px-5 py-4 border-b border-white/10 bg-white/5 backdrop-blur-sm">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-2">
                                        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <div className="flex gap-2 overflow-x-auto">
                                            {projects.map((p, i) => {
                                                const isActive = i === activeIndex;
                                                return (
                                                    <button
                                                        key={p.title}
                                                        type="button"
                                                        onClick={() => setActiveIndex(i)}
                                                        className={`shrink-0 px-3 py-1.5 rounded-full text-xs border transition-all ${isActive
                                                            ? 'bg-white text-black border-white'
                                                            : 'bg-black/30 text-gray-300 border-white/10 hover:border-white/20 hover:bg-white/10'
                                                            }`}
                                                        aria-label={`Show ${p.title}`}
                                                    >
                                                        {p.title}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-3 h-7 rounded-lg border border-white/10 bg-black/40 flex items-center px-3">
                                    <span className="text-[11px] text-gray-400 font-mono truncate">
                                        {activeProject.url.replace('https://', '').replace('www.', '')}
                                    </span>
                                </div>
                            </div>

                            {/* Preview */}
                            <div className="p-5 md:p-7">
                                <div className="relative rounded-2xl border border-white/10 bg-black/30 overflow-hidden">
                                    <div className={`absolute inset-0 bg-gradient-to-tr ${activeProject.gradient} opacity-70 pointer-events-none`} />
                                    <div className="relative aspect-video">
                                        <AnimatePresence mode="wait">
                                            <motion.img
                                                key={activeProject.image}
                                                src={activeProject.image}
                                                alt={`${activeProject.title} website screenshot`}
                                                className="absolute inset-0 h-full w-full object-cover object-top"
                                                initial={{ opacity: 0, scale: 1.02 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.99 }}
                                                transition={{ duration: 0.35, ease: "easeOut" }}
                                                loading="lazy"
                                            />
                                        </AnimatePresence>
                                    </div>
                                </div>

                                <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                    <div className="flex flex-wrap gap-2">
                                        {activeProject.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 font-medium"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={activeProject.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-6 py-3 font-semibold hover:bg-orange-500 hover:text-white transition-colors"
                                    >
                                        Open Live Site <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function WebProjectCard({ project, index }: { project: WebProject, index: number }) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const isEven = index % 2 === 0;

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            style={{ scale }}
            className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
        >
            {/* Project Preview with Parallax */}
            <motion.div
                className="flex-1 w-full group"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
            >
                <motion.div
                    className="relative aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl"
                    whileHover={{ scale: 1.02, borderColor: "rgba(255, 255, 255, 0.2)" }}
                    transition={{ duration: 0.4 }}
                >
                    {/* Loading Skeleton */}
                    {!imageLoaded && (
                        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 animate-pulse" />
                    )}

                    {/* Browser Chrome */}
                    <motion.div
                        className="absolute top-0 left-0 right-0 h-8 bg-white/5 backdrop-blur-sm border-b border-white/10 flex items-center px-4 gap-1.5 z-20"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                        <div className="ml-4 flex-1 h-5 bg-black/40 rounded-md border border-white/5 flex items-center px-3">
                            <span className="text-[10px] text-gray-500 font-mono tracking-tight">
                                {project.url.replace('https://', '').replace('www.', '')}
                            </span>
                        </div>
                    </motion.div>

                    {/* Screenshot with Parallax Scroll */}
                    <motion.div
                        style={{ y: imageY }}
                        className="pt-8 h-full"
                    >
                        <motion.img
                            src={project.image}
                            alt={`${project.title} website screenshot`}
                            className="w-full h-auto object-cover object-top"
                            onLoad={() => setImageLoaded(true)}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: imageLoaded ? 1 : 0, scale: 1 }}
                            transition={{ duration: 0.6 }}
                        />
                    </motion.div>

                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                    {/* Hover Overlay with CTA */}
                    <motion.div
                        className="absolute inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-30"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-orange-500 hover:text-white transition-all shadow-2xl"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Visit Live Site <ExternalLink size={20} />
                        </motion.a>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Project Info with Staggered Animation */}
            <motion.div
                className="flex-1 space-y-8"
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <div className="space-y-4">
                    <motion.div
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} shadow-lg`}>
                            <Globe size={24} className="text-white" />
                        </div>
                        <h3 className="text-3xl md:text-5xl font-bold font-space text-white">
                            {project.title}
                        </h3>
                    </motion.div>

                    <motion.div
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        {project.tags.map((tag: string, i: number) => (
                            <motion.span
                                key={tag}
                                className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 font-medium hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + i * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>

                <motion.p
                    className="text-gray-400 text-xl leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                    {project.description}
                </motion.p>

                <motion.div
                    className="pt-6 grid grid-cols-2 gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                >
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
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
