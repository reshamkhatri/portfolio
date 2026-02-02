import { motion } from 'framer-motion';

const tools = [
    {
        name: "Photoshop",
        color: "#31A8FF",
        icon: (
            <svg viewBox="0 0 240 234" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <rect width="240" height="234" rx="42.5" fill="#001e36" />
                <path fill="#31a8ff" d="M54.04167,164.09521V61.21631c0-.74976.32226-1.127.96631-1.127,1.71533,0,3.28157-.02515,5.64388-.08057q3.53979-.07911,7.64746-.16089,4.106-.07947,8.69433-.16113,4.5879-.07911,9.09619-.08057,12.23366,0,20.60791,3.05908a35.755,35.755,0,0,1,13.44385,8.21094,31.496,31.496,0,0,1,7.3252,11.35059,37.64894,37.64894,0,0,1,2.25439,12.96045q0,12.88256-5.957,21.252a33.65844,33.65844,0,0,1-16.1001,12.15552c-6.7622,2.52319-14.27636,3.3789-22.54,3.3789q-3.54345,0-4.99121-.08056-1.44873-.07947-4.34668-.08057v32.12183a1.28093,1.28093,0,0,1-1.44922,1.449H55.16862C54.41667,165.3833,54.04167,164.95557,54.04167,164.09521Zm21.74446-84.686v33.55493q2.09034.16224,3.86377.16089h5.313a37.7594,37.7594,0,0,0,11.51172-1.83765,17.35824,17.35824,0,0,0,8.21094-5.313q3.13915-3.70167,3.13965-10.304a16.28281,16.28281,0,0,0-2.335-8.85522,15.01394,15.01394,0,0,0-7.00341-5.71534A29.83951,29.83951,0,0,0,86.73389,79.0874q-3.86427,0-6.84229.08032Q76.91065,79.25085,75.78613,79.40918Z" />
                <path fill="#31a8ff" d="M191.97114,106.863a37.6431,37.6431,0,0,0-9.57959-3.3811,50.875,50.875,0,0,0-11.18946-1.28809,20.82175,20.82175,0,0,0-6.03759.72461,5.42475,5.42475,0,0,0-3.13965,2.01245,5.0699,5.0699,0,0,0-.80469,2.73706,4.27537,4.27537,0,0,0,.96582,2.57593,10.95825,10.95825,0,0,0,3.38086,2.65649,67.449,67.449,0,0,0,7.084,3.30054,70.20083,70.20083,0,0,1,15.37549,7.32544,23.38242,23.38242,0,0,1,7.88916,8.2915A22.10738,22.10738,0,0,1,198.25,142.122a23.143,23.143,0,0,1-3.86377,13.28247,25.41573,25.41573,0,0,1-11.18995,8.93531q-7.32788,3.219-18.1123,3.22021a65.50368,65.50368,0,0,1-13.60449-1.28808,43.40843,43.40843,0,0,1-10.22363-3.22,2.08508,2.08508,0,0,1-1.127-1.93213V143.73187a.94571.94571,0,0,1,.40283-.8855.781.781,0,0,1,.88526.08057,43.01131,43.01131,0,0,0,12.397,4.9104,51.12181,51.12181,0,0,0,11.75293,1.52954q5.63379,0,8.2915-1.449a4.5512,4.5512,0,0,0,2.65674-4.186q0-2.09034-2.415-4.02491-2.41479-1.93212-9.82129-4.66918a59.18392,59.18392,0,0,1-14.24853-7.24488,24.5718,24.5718,0,0,1-7.5669-8.45263,22.20192,22.20192,0,0,1-2.33447-10.22339,23.08045,23.08045,0,0,1,3.38086-12.075,24.57046,24.57046,0,0,1,10.46533-9.177q7.08252-3.53943,17.71-3.542a78.40115,78.40115,0,0,1,12.397.8855,32.49681,32.49681,0,0,1,8.63066,2.33447,1.46829,1.46829,0,0,1,.96582.8855,4.44869,4.44869,0,0,1,.16113,1.20752v16.261a1.08221,1.08221,0,0,1-.48291.96606A1.556,1.556,0,0,1,191.97114,106.863Z" />
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
