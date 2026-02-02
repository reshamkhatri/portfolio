import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
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
    },
    {
        id: 6,
        image: '/bhai tika impuslse.png',
        title: "Bhai Tika",
        caption: "Festival campaign"
    }
];

export function Projects() {
    const [activeIndex, setActiveIndex] = useState(0);
    const dragX = useMotionValue(0);

    const cylinderWidth = 1800;
    const faceCount = projects.length;
    const faceWidth = cylinderWidth / faceCount;
    const radius = cylinderWidth / (2 * Math.PI);

    const rotation = useTransform(dragX, [0, cylinderWidth], [0, -360]);

    const handleDrag = (_: unknown, info: { offset: { x: number } }) => {
        const newRotation = (info.offset.x / cylinderWidth) * 360;
        const newIndex = Math.round(-newRotation / (360 / faceCount)) % faceCount;
        setActiveIndex(newIndex < 0 ? faceCount + newIndex : newIndex);
    };

    const goToSlide = (direction: 'prev' | 'next') => {
        const currentRotation = dragX.get();
        const targetRotation = direction === 'next'
            ? currentRotation - (faceWidth)
            : currentRotation + (faceWidth);

        animate(dragX, targetRotation, {
            type: "spring",
            stiffness: 100,
            damping: 20
        });

        setActiveIndex(prev => {
            if (direction === 'next') {
                return (prev + 1) % faceCount;
            } else {
                return prev === 0 ? faceCount - 1 : prev - 1;
            }
        });
    };

    // Auto-rotate
    useEffect(() => {
        const interval = setInterval(() => {
            goToSlide('next');
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="projects" className="py-32 px-4 md:px-6 relative bg-[#0a0a0a] z-10 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold font-space mb-6">
                        Social Media
                        <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"> Designs</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Drag to explore my curated collection of engaging social media campaigns.
                    </p>
                </motion.div>

                {/* 3D Carousel Container */}
                <div className="relative h-[500px] flex items-center justify-center" style={{ perspective: '1200px' }}>
                    <motion.div
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.1}
                        onDrag={handleDrag}
                        style={{
                            rotateY: rotation,
                            transformStyle: 'preserve-3d',
                            width: faceWidth,
                            height: 400
                        }}
                        className="relative cursor-grab active:cursor-grabbing"
                    >
                        {projects.map((project, i) => {
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
                                    <div className="w-full h-full bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden group hover:border-orange-500/50 transition-all duration-300">
                                        {/* Image */}
                                        <div className="h-[75%] relative overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                        </div>

                                        {/* Info */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                                            <p className="text-gray-400 text-sm">{project.caption}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={() => goToSlide('prev')}
                        className="absolute left-4 md:left-20 z-10 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
                    >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                    <button
                        onClick={() => goToSlide('next')}
                        className="absolute right-4 md:right-20 z-10 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
                    >
                        <ChevronRight className="w-6 h-6 text-white" />
                    </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-8">
                    {projects.map((_, i) => (
                        <div
                            key={i}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeIndex
                                ? 'w-8 bg-gradient-to-r from-orange-400 to-red-500'
                                : 'bg-white/30'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
