import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';

const featuredProjects = [
    {
        id: 1,
        image: '/arbipos.jpg',
        title: "ArbiPOS",
        caption: "Branding & promotional design"
    },
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
    }
];

export function Projects() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    const smoothScroll = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const cylinderWidth = 2000;
    const faceCount = featuredProjects.length;
    const faceWidth = 400; // Fixed width for Instagram card look
    const radius = cylinderWidth / (2 * Math.PI);

    const rotation = useTransform(smoothScroll, [0, 1], [0, -360]);

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="relative bg-[#0a0a0a] z-10"
            style={{ height: '300vh' }}
        >
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 md:px-6">

                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[150px]" />
                </div>

                <div className="max-w-7xl mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold font-space mb-4">
                            Social Media
                            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"> 3D Works</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto italic">
                            "Scroll to see the magic revolve around my designs."
                        </p>
                    </motion.div>

                    <div className="relative h-[600px] flex items-center justify-center" style={{ perspective: '2000px' }}>
                        <motion.div
                            style={{
                                rotateY: rotation,
                                transformStyle: 'preserve-3d',
                                width: faceWidth,
                            }}
                            className="relative"
                        >
                            {featuredProjects.map((project, i) => {
                                const angle = (360 / faceCount) * i;
                                return (
                                    <motion.div
                                        key={project.id}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                        style={{
                                            width: faceWidth,
                                            transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                                            backfaceVisibility: 'hidden'
                                        }}
                                    >
                                        {/* Instagram Mockup Card */}
                                        <div className="bg-white rounded-xl overflow-hidden shadow-2xl flex flex-col text-black font-sans">
                                            {/* Header */}
                                            <div className="px-4 py-3 flex items-center justify-between border-b border-gray-100">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[1.5px]">
                                                        <div className="w-full h-full rounded-full bg-white p-[1px]">
                                                            <div className="w-full h-full rounded-full bg-gray-200 overflow-hidden">
                                                                <img src="/hero-image.png" alt="Profile" className="w-full h-full object-cover" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span className="font-bold text-sm">resham.khatri</span>
                                                </div>
                                                <MoreHorizontal className="w-5 h-5 text-gray-500" />
                                            </div>

                                            {/* Image */}
                                            <div className="aspect-square bg-gray-50 overflow-hidden">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            {/* Footer */}
                                            <div className="p-4 pt-1">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-4">
                                                        <Heart className="w-6 h-6 hover:text-red-500 cursor-pointer transition-colors" />
                                                        <MessageCircle className="w-6 h-6 hover:text-gray-500 cursor-pointer transition-colors" />
                                                        <Send className="w-6 h-6 hover:text-gray-500 cursor-pointer transition-colors" />
                                                    </div>
                                                    <Bookmark className="w-6 h-6 hover:text-gray-500 cursor-pointer transition-colors" />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>

                    <div className="flex justify-center mt-10">
                        <Link
                            to="/projects"
                            className="group relative px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full overflow-hidden transition-all hover:border-orange-500/50 flex items-center gap-3"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 opacity-0 group-hover:opacity-10 transition-opacity" />
                            <span className="text-white text-sm font-semibold">View All Projects</span>
                            <ArrowRight className="w-4 h-4 text-orange-500 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
