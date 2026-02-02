import { motion } from 'framer-motion'
import { ArrowLeft, Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react'
import { Link } from 'react-router-dom'

const allProjects = [
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {allProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex justify-center"
                        >
                            {/* Instagram Mockup Card */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-xl flex flex-col text-black w-full max-w-[400px]">
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
                                <div className="aspect-square bg-gray-100 overflow-hidden">
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
                    ))}
                </div>
            </div>
        </div>
    );
}
