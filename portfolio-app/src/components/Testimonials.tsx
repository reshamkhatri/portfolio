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
        <section className="py-24 gradient-testimonial relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">What people say</h2>
                    <p className="text-gray-400 max-w-md mx-auto">
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
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className={`relative p-6 rounded-2xl glass ${testimonial.featured
                                    ? 'border-purple-500/30 shadow-xl shadow-purple-500/10'
                                    : 'border-white/5'
                                }`}
                        >
                            {/* Gradient border effect for featured */}
                            {testimonial.featured && (
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20 pointer-events-none" />
                            )}

                            <div className="relative z-10">
                                {/* Avatar and info */}
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover border-2 border-white/10"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-white">{testimonial.name}</h3>
                                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                                    </div>
                                </div>

                                {/* Testimonial text */}
                                <p className="text-gray-300 leading-relaxed">
                                    {testimonial.text}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
