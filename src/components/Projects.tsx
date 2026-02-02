import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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

    // Scroll progress over the entire section (300vh)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    const smoothScroll = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const cylinderWidth = 1800;
    const faceCount = featuredProjects.length;
    const faceWidth = cylinderWidth / faceCount;
    const radius = cylinderWidth / (2 * Math.PI);

    // Rotate 360 degrees as the user scrolls through the 300vh height
    const rotation = useTransform(smoothScroll, [0, 1], [0, -360]);

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="relative bg-[#0a0a0a] z-10"
            style={{ height: '300vh' }} // Create space for 3D rotation scroll
        >
            {/* Sticky Container */}
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 md:px-6">

                {/* Background Glow */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[150px]" />
                </div>

                <div className="max-w-7xl mx-auto w-full">
                    {/* Section Header */}
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

                    {/* 3D Carousel Container */}
                    <div className="relative h-[500px] flex items-center justify-center" style={{ perspective: '1500px' }}>
                        <motion.div
                            style={{
                                rotateY: rotation,
                                transformStyle: 'preserve-3d',
                                width: faceWidth,
                                height: 350
                            }}
                            className="relative"
                        >
                            {featuredProjects.map((project, i) => {
                                const angle = (360 / faceCount) * i;
                                return (
                                    <motion.div
                                        key={project.id}
                                        className="absolute w-full h-full"
                                        style={{
                                            transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                                            backfaceVisibility: 'hidden'
                                        }}
                                    >
                                        <div className="w-full h-full p-[1px] rounded-2xl bg-gradient-to-tr from-orange-500 to-red-500 group transition-all duration-500 hover:scale-[1.02]">
                                            <div className="w-full h-full bg-black/80 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl">
                                                {/* Image */}
                                                <div className="h-[75%] relative overflow-hidden">
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60" />
                                                </div>

                                                {/* Info */}
                                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                                    <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
                                                    <p className="text-orange-500/80 text-[10px] font-semibold uppercase tracking-wider">{project.caption}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>

                    {/* View All Button */}
                    <div className="flex justify-center mt-10">
                        <Link
                            to="/projects"
                            className="group relative px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full overflow-hidden transition-all hover:border-orange-500/50 flex items-center gap-3"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-10 transition-opacity" />
                            <span className="text-white text-sm font-semibold">View All Projects</span>
                            <ArrowRight className="w-4 h-4 text-orange-500 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
