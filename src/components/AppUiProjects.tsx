import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const apps = [
    {
        id: 'stoppy',
        name: "Stoppy",
        tagline: "The Ultimate Digital Wellness Platform",
        description: "A comprehensive gamified solution for screen time management and productivity. Stoppy transforms focus into a 'Forge' where users build habits, conquer daily quests, and protect their digital well-being through advanced 'Guardian' systems.",
        themeColor: "#3B82F6", // Blue
        glowColor: "rgba(59, 130, 246, 0.15)",
        gradient: "from-blue-600/20 via-indigo-600/10 to-transparent",
        accent: "text-blue-400",
        screens: [
            { src: "/ui/WhatsApp Image 2026-02-23 at 11.27.44 AM.jpeg", label: "Onboarding Flow" },
            { src: "/ui/WhatsApp Image 2026-02-23 at 11.27.43 AM (2).jpeg", label: "Dashboard" },
            { src: "/ui/WhatsApp Image 2026-02-23 at 11.27.41 AM (1).jpeg", label: "Daily Quests" },
            { src: "/ui/WhatsApp Image 2026-02-23 at 11.27.43 AM.jpeg", label: "The Forge" },
            { src: "/ui/WhatsApp Image 2026-02-23 at 11.27.42 AM (1).jpeg", label: "Guardian Controls" },
            { src: "/ui/WhatsApp Image 2026-02-23 at 11.27.41 AM (2).jpeg", label: "Daily Progress" },
            { src: "/ui/WhatsApp Image 2026-02-23 at 11.27.42 AM.jpeg", label: "Weekly Progress" },
            { src: "/ui/WhatsApp Image 2026-02-23 at 11.27.43 AM (1).jpeg", label: "Managed Apps" }
        ]
    }
];

function PhoneMockup({ src, delay = 0 }: { src: string; delay?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: delay, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative flex-shrink-0 group"
        >
            <div className="relative w-[280px] md:w-[320px] aspect-[9/19.5] rounded-[3rem] border-[8px] border-white/10 bg-black overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:-translate-y-4">
                {/* Screen Content */}
                <div className="absolute inset-0">
                    <img
                        src={src}
                        alt="Mobile UI Screen"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        loading="lazy"
                    />
                </div>
                {/* Glassy Overlay for realism */}
                <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-tr from-white/5 to-transparent opacity-30" />
                <div className="absolute inset-0 z-10 pointer-events-none ring-1 ring-inset ring-white/10" />
            </div>
            {/* Subtle Reflection */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-10 bg-white/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
    );
}

function AppSection({ app, index }: { app: typeof apps[0]; index: number }) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <div ref={containerRef} className="relative py-20 mb-40 last:mb-0">
            {/* Immersive Background */}
            <div className={`absolute inset-0 bg-gradient-to-b ${app.gradient} pointer-events-none rounded-[4rem]`} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 items-center">
                    {/* Content Column */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className={`inline-block mb-4 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase border border-current opacity-60 ${app.accent}`}>
                                Project 0{index + 1}
                            </span>
                            <h3 className="text-5xl md:text-7xl font-bold font-space text-white mb-6 uppercase">
                                {app.name}
                            </h3>
                            <h4 className={`text-xl md:text-2xl font-semibold mb-8 ${app.accent}`}>
                                {app.tagline}
                            </h4>
                            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
                                {app.description}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-white/80 text-sm font-medium">
                                    UI/UX Design
                                </div>
                                <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-white/80 text-sm font-medium">
                                    Mobile App
                                </div>
                                <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-white/80 text-sm font-medium">
                                    Product Strategy
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Visual Column */}
                    <div className="lg:col-span-7 relative h-[600px] flex items-center justify-center">
                        <motion.div style={{ y }} className="relative flex gap-8 overflow-x-auto no-scrollbar snap-x px-10 py-10 w-full mask-linear-fade">
                            {app.screens.map((screen, i) => (
                                <div key={i} className="snap-center">
                                    <PhoneMockup src={screen.src} delay={i * 0.1} />
                                    <p className="mt-6 text-center text-xs text-gray-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                        {screen.label}
                                    </p>
                                </div>
                            ))}
                        </motion.div>

                        {/* Scroll hint for images */}
                        <div className="absolute bottom-4 right-10 flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-[0.2em] pointer-events-none">
                            <span>Scroll to explore</span>
                            <div className="w-8 h-[1px] bg-white/20" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function AppUiProjects() {
    return (
        <section id="app-ui" className="relative py-40 bg-[#0a0a0a] overflow-hidden">
            {/* Global Background Glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500/[0.03] rounded-full blur-[160px]" />
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-500/[0.03] rounded-full blur-[160px]" />
            </div>

            <div className="px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-40"
                >
                    <h2 className="text-6xl md:text-9xl font-bold font-space mb-8 tracking-tight">
                        APP{' '}
                        <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                            LAB
                        </span>
                    </h2>
                    <p className="text-gray-500 text-xl max-w-3xl mx-auto font-light leading-relaxed">
                        A curated collection of mobile experiences where aesthetics meet functionality. Designed with precision, built for impact.
                    </p>
                </motion.div>

                {apps.map((app, i) => (
                    <AppSection key={app.id} app={app} index={i} />
                ))}
            </div>

            <style>{`
                .mask-linear-fade {
                    mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
                    -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
                }
            `}</style>
        </section>
    );
}
