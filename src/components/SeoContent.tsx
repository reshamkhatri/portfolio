import { motion } from 'framer-motion';

const services = [
    {
        title: 'Graphic Designer in Nepal',
        description:
            'Brand identity, campaign visuals, social creatives, and performance-focused design systems for businesses in Nepal.',
    },
    {
        title: 'Social Media Manager in Nepal',
        description:
            'Content planning, creative direction, and platform-specific execution designed to improve reach, engagement, and leads.',
    },
    {
        title: 'Brand and Web Creative Direction',
        description:
            'Positioning, visual language, and conversion-focused website design that align marketing goals with clean execution.',
    },
];

const faqs = [
    {
        question: 'Who is Resham KC?',
        answer:
            'Resham KC is a creative professional based in Kathmandu, Nepal, focused on graphic design, branding, and social media management.',
    },
    {
        question: 'Is Resham KC a graphic designer in Nepal?',
        answer:
            'Yes. This portfolio highlights graphic design projects completed for Nepal-based and international brands.',
    },
    {
        question: 'Does Resham KC provide social media management in Nepal?',
        answer:
            'Yes. Services include content strategy, campaign creatives, monthly planning, and performance-oriented social media design.',
    },
    {
        question: 'Why do people search for best graphic designer in Nepal?',
        answer:
            'Clients usually compare portfolio quality, consistency, business outcomes, and proof from real projects before choosing a designer.',
    },
];

export function SeoContent() {
    return (
        <section id="services" className="relative py-28 bg-[#090909] overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-[-120px] w-[520px] h-[520px] bg-orange-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-[-120px] w-[520px] h-[520px] bg-red-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="text-center mb-14"
                >
                    <h2 className="text-4xl md:text-6xl font-bold font-space mb-5">
                        Graphic Designer and Social Media Manager in{' '}
                        <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                            Nepal
                        </span>
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                        Resham KC helps brands grow with clear design systems, content strategy, and conversion-ready
                        visuals. If people search for terms like best graphic designer in Nepal or top graphic
                        designer of Nepal, this portfolio shows the real project work behind those searches.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
                    {services.map((service, index) => (
                        <motion.article
                            key={service.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                            className="rounded-2xl border border-white/10 bg-white/5 p-6"
                        >
                            <h3 className="text-xl font-bold text-white font-space mb-3">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{service.description}</p>
                        </motion.article>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {faqs.map((faq, index) => (
                        <motion.article
                            key={faq.question}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.45, delay: index * 0.05, ease: 'easeOut' }}
                            className="rounded-2xl border border-white/10 bg-black/30 p-6"
                        >
                            <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                            <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
