import { motion } from 'framer-motion'
import { ArrowLeft, Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react'
import { Link } from 'react-router-dom'

const allProjects = [
    { id: 1, image: '/arbipos.jpg', title: "ArbiPOS", caption: "ArbiPOS branding and promotional design 🚀" },
    { id: 2, image: '/dashainw.jpg', title: "Dashain Campaign", caption: "Dashain festive campaign graphics 🎉" },
    { id: 3, image: '/ekoh post.jpg', title: "Ekoh Post", caption: "Ekoh social media brand communication 📱" },
    { id: 4, image: '/furniturere.jpg', title: "Furniture Brand", caption: "Luxury furniture brand social media layout 🛋️" },
    { id: 5, image: '/studyinuk.png', title: "Study in UK", caption: "Educational consultancy promotional material 🎓" },
    { id: 6, image: '/bhai tika impuslse.png', title: "Bhai Tika", caption: "Bhai Tika festival greetings for Impulse 🌸" },
    { id: 7, image: '/BBM.png', title: "BBM Project", caption: "BBM course promotional design 📚" },
    { id: 8, image: '/CBM.png', title: "CBM Project", caption: "CBM educational graphics 🖊️" },
    { id: 9, image: '/abhishesk.jpg', title: "Commercial Work", caption: "Creative commercial banner design 🎨" },
    { id: 10, image: '/hiring delivery person.png', title: "Hiring Ad", caption: "Modern recruitment graphics 📦" },
    { id: 11, image: '/hring for europe.png', title: "International Brand", caption: "Overseas recruitment campaign layout 🌍" },
    { id: 12, image: '/niggatmi.jpg', title: "Art Concept", caption: "Expressive digital art and copy 🌟" },
    { id: 13, image: '/first post.png', title: "Social Graphic", caption: "Minimalist first impression post design ✨" },
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
                            <div className="bg-white rounded-xl overflow-hidden shadow-2xl flex flex-col text-black font-sans max-w-[400px] w-full">
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
                                <div className="p-4 pt-2">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <Heart className="w-5 h-5 hover:text-red-500 cursor-pointer transition-colors" />
                                            <MessageCircle className="w-5 h-5 hover:text-gray-500 cursor-pointer transition-colors" />
                                            <Send className="w-5 h-5 hover:text-gray-500 cursor-pointer transition-colors" />
                                        </div>
                                        <Bookmark className="w-5 h-5 hover:text-gray-500 cursor-pointer transition-colors" />
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
