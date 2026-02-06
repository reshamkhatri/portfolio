import { motion } from 'framer-motion';

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

export function FaqSection() {
    return (
        <section id="faq" className="relative py-24 bg-[#070707] overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[760px] h-[760px] bg-orange-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-6xl font-bold font-space mb-4">
                        Frequently Asked <span className="text-orange-400">Questions</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Answers about services, experience, and creative work by Resham KC.
                    </p>
                </motion.div>

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
