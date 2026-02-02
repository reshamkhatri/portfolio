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
                    {[...servicesList, ...servicesList].map((service, i) => (
                        <div key={i} className="flex items-center gap-8 md:gap-16">
                            <span className="text-2xl md:text-6xl font-bold font-space text-white/10 uppercase tracking-widest">
                                {service}
                            </span>
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-orange-500/20" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
