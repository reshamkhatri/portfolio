import { motion } from 'framer-motion';

const testimonials = [
    {
        name: 'Sarah Johnson',
        role: 'Small Business Owner',
        image: 'https://i.pravatar.cc/100?img=1',
        text: "Since integrating this solution into our workflow, we've experienced a significant improvement in efficiency and collaboration.",
    },
    {
        name: 'David Patel',
        role: 'Project Manager',
        image: 'https://i.pravatar.cc/100?img=3',
        text: "I've tested numerous options in this category, but one stands out for its intuitive design and comprehensive functionality.",
        featured: true,
    },
    {
        name: 'Emily Carter',
        role: 'Operations Manager',
        image: 'https://i.pravatar.cc/100?img=5',
        text: "The tool we've adopted has surpassed our expectations, providing invaluable insights and support as our business continues to grow.",
    },
];

export function Testimonials() {
    return (
        <section className="py-24 bg-gradient-to-b from-[#0a0a0a] via-[#0f0a19] to-[#1e1b4b] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-4 text-white"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        What people say
                    </h2>
                    <p className="text-white/60 max-w-lg mx-auto">
                        Discover what our satisfied customers have to say about their experiences with our products/services.
                    </p>
                </motion.div>

                {/* Testimonial Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className={`relative p-6 rounded-2xl ${testimonial.featured
                                    ? 'bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-blue-900/30 border border-purple-500/30'
                                    : 'bg-white/5 border border-white/10'
                                } backdrop-blur-sm`}
                        >
                            {/* Avatar and info */}
                            <div className="flex items-center gap-4 mb-5">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                                />
                                <div>
                                    <h3 className="font-semibold text-white text-base">{testimonial.name}</h3>
                                    <p className="text-sm text-white/50">{testimonial.role}</p>
                                </div>
                            </div>

                            {/* Testimonial text */}
                            <p className="text-white/70 text-sm leading-relaxed">
                                {testimonial.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
