import { motion } from 'framer-motion';

const tools = [
    {
        name: "Photoshop",
        color: "#31A8FF",
        icon: (
            <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M256 211.2c0 24.747-20.053 44.8-44.8 44.8H44.8C20.053 256 0 235.947 0 211.2V44.8C0 20.053 20.053 0 44.8 0h166.4C235.947 0 256 20.053 256 44.8v166.4z" fill="#001E36" />
                <path d="M84.773 172.933c-3.413 0-5.973-1.013-7.68-3.04-1.707-2.027-2.56-5.227-2.56-9.6V113.6h-23.44c-.613 0-.96-.4-.96-1.12l-.027-10.426.027-.374c0-2.08.826-3.813 2.4-5.2C64.64 85.333 71.147 77.867 72.373 76.8c2.24-1.92 4.48-2.667 6.72-2.667h18.134c.853 0 1.28.427 1.28 1.28v12l.027 75.84c0 3.2.666 5.547 2.026 7.04 1.36 1.493 3.6 2.24 6.72 2.24.8 0 1.2.4 1.2 1.2l-.08 8c0 .8-.427 1.2-1.28 1.2l-22.347-.027-.1-.027c-.827 0-1.44-.027-2-.027zM187.013 174.4c-13.013 0-23.467-2.773-31.36-8.32l.027-37.12c10.453 5.333 19.893 8 28.32 8 6.507 0 9.76-2.08 9.76-6.24 0-1.707-.453-3.093-1.36-4.16-.906-1.067-2.16-2-3.76-2.8-1.6-1.12-5.466-2.533-11.6-4.267-12.8-3.626-21.467-7.626-26.133-12-4.667-4.373-7-10.453-7-18.24 0-11.52 4.48-20.72 13.44-27.6 8.96-6.88 20.427-10.32 34.4-10.32 10.773 0 20.373 1.947 28.8 5.84l.027 34c-6.293-4.16-13.84-6.24-22.64-6.24-6.347 0-9.52 2.373-9.52 7.12 0 1.6.533 2.96 1.6 4.08 1.067 1.12 2.533 2.16 4.4 3.12 1.867.96 5.6 2.453 11.2 4.48 9.173 2.933 15.973 6.133 20.4 9.6 4.427 3.467 7.733 7.6 9.893 12.4 2.16 4.8 3.254 10.347 3.254 16.64 0 11.733-4.134 21.067-12.4 28-8.267 6.933-19.147 10.4-32.64 10.4z" fill="#31A8FF" />
            </svg>
        )
    },
    {
        name: "Figma",
        color: "#A259FF",
        icon: (
            <svg viewBox="0 0 38 57" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M19 28.5c0-5.247 4.253-9.5 9.5-9.5S38 23.253 38 28.5s-4.253 9.5-9.5 9.5S19 33.747 19 28.5z" fill="#1ABCFE" />
                <path d="M0 47.5C0 42.253 4.253 38 9.5 38H19v9.5c0 5.247-4.253 9.5-9.5 9.5S0 52.753 0 47.5z" fill="#0ACF83" />
                <path d="M19 0v19h9.5c5.247 0 9.5-4.253 9.5-9.5S33.747 0 28.5 0H19z" fill="#FF7262" />
                <path d="M0 9.5C0 14.747 4.253 19 9.5 19H19V0H9.5C4.253 0 0 4.253 0 9.5z" fill="#F24E1E" />
                <path d="M0 28.5C0 33.747 4.253 38 9.5 38H19V19H9.5C4.253 19 0 23.253 0 28.5z" fill="#A259FF" />
            </svg>
        )
    },
    {
        name: "CapCut",
        color: "#ffffff",
        icon: (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="white">
                <path d="M14.5 4c-1.6 0-3.1.7-4.2 1.9L4 12.6v5.5l6.7-6.7c.6-.6 1.4-.9 2.2-.9.8 0 1.6.3 2.2.9L22.1 18.4V12.9l-3-7C18 4.7 16.5 4 14.5 4zM4 14.1l3 3c.6.6 1.4.9 2.2.9.8 0 1.6-.3 2.2-.9l3.7-3.7-6.4-6.4-4.7 7.1z" />
            </svg>
        )
    },
    {
        name: "Antigravity",
        color: "#FF4D4D",
        icon: (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-orange-500">
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                <circle cx="12" cy="12" r="4" />
                <path d="M12 8v8M8 12h8" />
            </svg>
        )
    },
    {
        name: "Canva",
        color: "#00C4CC",
        icon: (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M12.016 0C5.38 0 0 5.38 0 12.016S5.38 24.032 12.016 24.032 24.032 18.652 24.032 12.016s-5.38-12.016-12.016-12.016zm4.82 17.962s-.422.316-1.15.316c-.95 0-1.503-.612-1.503-1.604 0-1.043.682-1.604 1.583-1.604.606 0 .976.224 1.05.277l.02.013.882-1.594-.034-.022c-.37-.245-1.056-.574-2.22-.574-2.13 0-3.64 1.34-3.64 3.518 0 2.26 1.576 3.498 3.535 3.498 1.15 0 2.01-.39 2.508-.73l.03-.02-.892-1.5z" fill="#00C4CC" />
            </svg>
        )
    }
];

export function Tools() {
    return (
        <section id="tools" className="relative z-10 py-32 px-6 bg-[#050505] overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold font-space mb-4">
                        Tools I
                        <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"> Use</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto italic">
                        "The secret behind every masterpiece is the right set of tools."
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {tools.map((tool, i) => (
                        <motion.div
                            key={tool.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{
                                y: -10,
                                scale: 1.05,
                            }}
                            className="group relative p-8 rounded-[2rem] bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                        >
                            {/* Glow Effect */}
                            <div
                                className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                                style={{ backgroundColor: tool.color, filter: 'blur(30px)' }}
                            />

                            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center relative z-10">
                                {tool.icon}
                            </div>

                            <span className="text-white font-semibold text-lg relative z-10 transition-colors group-hover:text-orange-400">
                                {tool.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
