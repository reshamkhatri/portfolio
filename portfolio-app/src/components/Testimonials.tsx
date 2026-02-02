import { motion } from 'framer-motion';

export function Testimonials() {
    return (
        <section className="py-32 px-6 bg-[#0a0a0a]">
            {/* Background Decor */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[20%] w-[400px] h-[400px] bg-red-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-bold mb-6 font-space"
                    >
                        What people say
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        Discover what our satisfied customers have to say about their experiences with our creative solutions.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Sarah Johnson",
                            role: "Small Business Owner",
                            quote: "Since integrating this solution into our workflow, we've experienced a significant improvement in efficiency and collaboration."
                        },
                        {
                            name: "David Patel",
                            role: "Project Manager",
                            quote: "I've tested numerous options in this category, but one stands out for its intuitive design and comprehensive functionality."
                        },
                        {
                            name: "Emily Carter",
                            role: "Operations Manager",
                            quote: "The tool we've adopted has surpassed our expectations, providing invaluable insights and support as our business continues to grow."
                        }
                    ].map((testimonial, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300"
                        >
                            <div className="flex flex-col h-full">
                                {/* Avatar & Info */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-xl font-bold">
                                        {testimonial.name[0]}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                                            {testimonial.name}
                                        </h3>
                                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                                    </div>
                                </div>

                                <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-transparent mb-6 opacity-50 group-hover:opacity-100 transition-opacity" />

                                <p className="text-gray-300 leading-relaxed text-lg">
                                    "{testimonial.quote}"
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
