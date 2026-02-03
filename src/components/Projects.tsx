import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useState, useEffect, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';

const featuredProjects = [
    {
        id: 2,
        image: '/dashainw.jpg',
        title: "Dashain Campaign",
        caption: "Festive graphics design"
    },
    {
        id: 3,
        image: '/ekoh post.jpg',
        title: "Ekoh",
        caption: "Social media post design"
    },
    {
        id: 4,
        image: '/furniturere.jpg',
        title: "Furniture Brand",
        caption: "Campaign graphics"
    },
    {
        id: 5,
        image: '/studyinuk.png',
        title: "Study in UK",
        caption: "Promotional design"
    },
    {
        id: 6,
        image: '/bhai tika impuslse.png',
        title: "Bhai Tika",
        caption: "Festival campaign"
    }
];

export function Projects() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const faceCount = featuredProjects.length;

    const { faceWidth, radius, height } = useMemo(() => {
        const isMobile = windowWidth < 768;
        const cw = isMobile ? 1200 : 2000;
        const fw = isMobile ? 280 : 380;
        const h = isMobile ? 380 : 480;
        return {
            faceWidth: fw,
            radius: cw / (2 * Math.PI),
            height: h
        };
    }, [windowWidth]);

    const smoothScroll = useSpring(scrollYProgress, {
        stiffness: 150,
        damping: 20,
        mass: 0.5,
        restDelta: 0.001
    });

    const rotation = useTransform(smoothScroll, [0, 1], [0, -360]);

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="relative bg-[#0a0a0a] z-10"
            style={{ height: typeof window !== 'undefined' && window.innerWidth < 768 ? '150vh' : '300vh' }}
        >
            {/* Sticky Container */}
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-visible px-4 md:px-6">

                {/* Background Glow */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[150px]" />
                </div>

                <div className="max-w-7xl mx-auto w-full relative z-20 flex flex-col items-center">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold font-space mb-4">
                            Social Media
                            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"> 3D Works</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto italic">
                            "Scroll to see the magic revolve around my designs."
                        </p>
                    </motion.div>

                    {/* 3D Carousel Container - Height increased to prevent overlap */}
                    <div className="relative h-[550px] w-full flex items-center justify-center mb-16" style={{ perspective: '2000px' }}>
                        <motion.div
                            style={{
                                rotateY: rotation,
                                transformStyle: 'preserve-3d',
                                width: faceWidth,
                                height: height,
                            }}
                            className="relative gpu-accelerated"
                        >
                            {featuredProjects.map((project, i) => {
                                const angle = (360 / faceCount) * i;
                                return (
                                    <motion.div
                                        key={project.id}
                                        className="absolute top-0 left-0 w-full h-full gpu-accelerated"
                                        style={{
                                            transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                                            backfaceVisibility: 'hidden',
                                            willChange: 'transform'
                                        }}
                                    >
                                        {/* Instagram Mockup Card */}
                                        <div className="bg-white rounded-lg overflow-hidden shadow-xl flex flex-col text-black h-full">
                                            {/* Header */}
                                            <div className="px-3 py-2 flex items-center justify-between border-b border-gray-50">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden">
                                                        <img src="/hero-image.png" alt="Profile" className="w-full h-full object-cover" />
                                                    </div>
                                                    <span className="font-bold text-xs">resham.khatri</span>
                                                </div>
                                                <MoreHorizontal className="w-4 h-4 text-gray-400" />
                                            </div>

                                            {/* Image */}
                                            <div className="flex-1 bg-gray-100 overflow-hidden">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    loading="lazy"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            {/* Footer */}
                                            <div className="px-3 py-2 flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <Heart className="w-5 h-5" />
                                                    <MessageCircle className="w-5 h-5" />
                                                    <Send className="w-5 h-5" />
                                                </div>
                                                <Bookmark className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>

                    {/* View All Button */}
                    <div className="flex justify-center relative z-30">
                        <Link
                            to="/projects"
                            className="group relative px-6 py-3 bg-white/10 border border-white/20 rounded-full overflow-hidden transition-all hover:border-orange-500/50 flex items-center gap-3 shadow-xl hover:shadow-orange-500/20"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity" />
                            <span className="text-white text-sm font-semibold relative z-10">View All Projects</span>
                            <ArrowRight className="w-4 h-4 text-orange-400 transition-transform group-hover:translate-x-1 relative z-10" />
                        </Link>
                    </div>

                    {/* Scroll Hint for Web Showcase */}
                    <motion.div
                        style={{ opacity: useTransform(scrollYProgress, [0.8, 0.9], [0, 1]) }}
                        className="mt-8 flex flex-col items-center gap-2"
                    >
                        <span className="text-gray-500 text-xs uppercase tracking-widest font-space">Next: Web Showcase</span>
                        <div className="w-[1px] h-8 bg-gradient-to-b from-orange-500 to-transparent" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
