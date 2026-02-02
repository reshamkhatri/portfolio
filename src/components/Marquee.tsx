const servicesList = [
    "BRANDING", "WEB DESIGN", "UI/UX", "DEVELOPMENT", "STRATEGY",
    "BRANDING", "WEB DESIGN", "UI/UX", "DEVELOPMENT", "STRATEGY"
];

export function Marquee() {
    return (
        <div className="relative z-10 py-10 bg-black overflow-hidden border-y border-white/5">
            <div className="flex select-none overflow-hidden">
                <div
                    className="flex flex-shrink-0 animate-marquee whitespace-nowrap gap-16 pr-16"
                    style={{ '--duration': '30s' } as React.CSSProperties}
                >
                    {[...servicesList, ...servicesList, ...servicesList, ...servicesList].map((service, i) => (
                        <div key={i} className="flex items-center gap-16">
                            <span className="text-4xl md:text-6xl font-bold font-space text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5">
                                {service}
                            </span>
                            <div className="w-3 h-3 rounded-full bg-orange-500/20" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
