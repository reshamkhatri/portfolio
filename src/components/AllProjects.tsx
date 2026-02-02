import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const allProjects = [
    { id: 1, image: '/arbipos.jpg', title: "ArbiPOS" },
    { id: 2, image: '/dashainw.jpg', title: "Dashain Campaign" },
    { id: 3, image: '/ekoh post.jpg', title: "Ekoh Post" },
    { id: 4, image: '/furniturere.jpg', title: "Furniture Brand" },
    { id: 5, image: '/studyinuk.png', title: "Study in UK" },
    { id: 6, image: '/bhai tika impuslse.png', title: "Bhai Tika" },
    { id: 7, image: '/BBM.png', title: "BBM Project" },
    { id: 8, image: '/CBM.png', title: "CBM Project" },
    { id: 9, image: '/abhishesk.jpg', title: "Commercial Work" },
    { id: 10, image: '/hiring delivery person.png', title: "Hiring Ad" },
    { id: 11, image: '/hring for europe.png', title: "International Brand" },
    { id: 12, image: '/niggatmi.jpg', title: "Art Concept" },
    { id: 13, image: '/first post.png', title: "Social Graphic" },
];

export function AllProjects() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white py-20 px-4 md:px-10">
            <div className="max-w-7xl mx-auto">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors mb-12 group"
                >
                    <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                    Back to Portfolio
                </Link>

                <h1 className="text-4xl md:text-6xl font-bold font-space mb-16">
                    All <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Designs</span>
                </h1>

                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {allProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="break-inside-avoid"
                        >
                            <div className="p-[1px] rounded-2xl bg-gradient-to-tr from-orange-500 to-red-500 group transition-all duration-500 hover:scale-[1.02]">
                                <div className="relative overflow-hidden rounded-2xl bg-[#0a0a0a] backdrop-blur-sm">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <p className="text-lg font-bold">{project.title}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
