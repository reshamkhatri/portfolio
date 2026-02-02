import { motion } from 'framer-motion';

const tools = [
    {
        name: "Photoshop",
        color: "#31A8FF",
        icon: (
            <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className="w-full h-full rounded-xl">
                <rect width="256" height="256" rx="38.4" fill="#001E36" />
                <path d="M72.2 174.5c-3.1 0-5.5-.9-7.1-2.7-1.6-1.8-2.4-4.5-2.4-8.1V117.8h-21.3c-.6 0-.8-.3-.8-.9l-.1-9.4.1-.3c0 -1.9.7-3.4 2.1-4.7 10.4-8.9 16.3-15.6 17.4-16.6 2-1.7 4-2.4 6-2.4h16.4c.8 0 1.2.4 1.2 1.2v10.9l.1 68.6c0 2.9.6 5 1.8 6.4 1.2 1.4 3.3 2 6.1 2 .7 0 1.1.4 1.1 1.1l-.1 7.2c0 .7-.4 1.1-1.2 1.1H72.2zM164.7 175.7c-11.8 0-21.2-2.5-28.3-7.5l.1-33.5c9.4 4.8 17.9 7.2 25.6 7.2 5.9 0 8.8-1.9 8.8-5.6 0-1.5-.4-2.8-1.2-3.7-.8-1-2-1.8-3.4-2.5-1.4-1-4.9-2.3-10.5-3.8-11.6-3.3-19.4-6.9-23.6-10.8-4.2-3.9-6.3-9.4-6.3-16.5 0-10.4 4.1-18.7 12.1-24.9 8.1-6.2 18.5-9.3 31.1-9.3 9.7 0 18.4 1.8 26 5.3l.1 30.7c-5.7-3.8-12.5-5.6-20.5-5.6-5.7 0-8.6 2.1-8.6 6.4 0 1.4.5 2.7 1.4 3.7 1 1 2.3 1.9 4 2.8 1.7.9 5.1 2.2 10.1 4 8.3 2.6 14.4 5.5 18.4 8.7 4 3.1 7 6.9 8.9 11.2 2 4.3 2.9 9.3 2.9 15 0 10.6-3.7 19-11.2 25.3C193.3 172.5 183.4 175.7 164.7 175.7z" fill="#31A8FF" />
            </svg>
        )
    },
    {
        name: "Figma",
        color: "#F24E1E",
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
            <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M211.2 0H44.8C20 0 0 20 0 44.8v166.4C0 236 20 256 44.8 256h166.4c24.8 0 44.8-20 44.8-44.8V44.8C256 20 236 0 211.2 0z" fill="black" />
                <path d="M117.8 74.3c-2.3-4.2-6.5-7.1-11.4-7.8-4.9-.7-9.8 1.1-13.1 4.7L36.8 131c-3.7 4-5.5 9.3-5 14.6.5 5.3 3.3 10.1 7.6 13.1l60.1 42.4c4.1 2.9 9.3 3.7 14.1 2.1 4.8-1.6 8.5-5.5 9.9-10.4L150.3 84.4c1.1-3.9.2-8-.2-10.1zM58.3 139.7l37.2-40.4 14.5 52.8-51.7-12.4zm160.9-8.7L159.1 88.6c-4.1-2.9-9.3-3.7-14.1-2.1-4.8 1.6-8.5 5.5-9.9 10.4L108.3 205.6c-1.1 3.9-.2 8 .2 10.1 2.3 4.2 6.5 7.1 11.4 7.8 4.9.7 9.8-1.1 13.1-4.7l56.5-59.8c3.7-4 5.5-9.3 5-14.6-.5-5.2-3.3-10.1-7.6-13.4zm-56 52.8l-14.5-52.8 51.7 12.4-37.2 40.4z" fill="white" />
            </svg>
        )
    },
    {
        name: "Antigravity",
        color: "#FF4D4D",
        icon: (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" stroke="#FF4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                <path d="M12 22v-5" strokeDasharray="2 2" />
                <circle cx="12" cy="12" r="3" stroke="#FF4D4D" fill="#FF4D4D" fillOpacity="0.2">
                    <animate attributeName="r" values="3;4;3" dur="2s" repeatCount="indefinite" />
                </circle>
            </svg>
        )
    },
    {
        name: "Canva",
        color: "#00C4CC",
        icon: (
            <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="128" cy="128" r="128" fill="#00C4CC" />
                <path d="M165.4 100.2c-5.5-5.5-13.9-6.4-19.1-1.2l-46.1 46.1c-5.2 5.2-4.3 13.6 1.2 19.1 5.5 5.5 13.9 6.4 19.1 1.2l46.1-46.1c5.2-5.2 4.3-13.6-1.2-19.1z" fill="white" />
                <path d="M100.2 165.4c5.5 5.5 13.9 6.4 19.1 1.2l46.1-46.1c5.2-5.2 4.3-13.6-1.2-19.1-5.5-5.5-13.9-6.4-19.1-1.2l-46.1 46.1c-5.2 5.2-4.3 13.6 1.2 19.1z" fill="white" opacity="0.8" />
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
