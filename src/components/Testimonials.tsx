import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee"

const testimonials = [
    {
        author: {
            name: "Ajay KC",
            handle: "House of Jobs",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        },
        text: "The graphic design posts Resham created for House of Jobs brought in real customers. His work directly contributed to our growth!"
    },
    {
        author: {
            name: "Ranjit Hamal",
            handle: "CBM College",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
        },
        text: "The social media designs for CBM College were outstanding. Professional, eye-catching, and perfectly aligned with our brand."
    },
    {
        author: {
            name: "Achal Acharya",
            handle: "Impulse Investment & Management",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        },
        text: "Resham's design work for Impulse Investment was exceptional. Creative, timely, and exactly what we needed to stand out."
    }
]

export function Testimonials() {
    return (
        <section className="relative z-10 py-32 px-6 bg-[#0a0a0a]">
            {/* Background Decor */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[20%] w-[400px] h-[400px] bg-red-500/10 rounded-full blur-[100px]" />
            </div>

            <TestimonialsSection
                title="What clients say"
                description="Hear from the people I've had the pleasure of working with"
                testimonials={testimonials}
                className="bg-transparent" // Override default bg to transparent to blend with dark theme
            />
        </section>
    )
}
