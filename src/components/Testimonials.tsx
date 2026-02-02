import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee"

const testimonials = [
    {
        author: {
            name: "Sarah Jenkins",
            handle: "@sarah_design",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
        },
        text: "The website redesign completely transformed our brand image. The attention to detail in the UI is unmatched!",
        href: "https://twitter.com/sarah_design"
    },
    {
        author: {
            name: "Michael Chen",
            handle: "@tech_mike",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        },
        text: "Incredible development skills. The site is blazing fast and the animations are buttery smooth. Highly recommended!",
        href: "https://twitter.com/tech_mike"
    },
    {
        author: {
            name: "Jessica Lee",
            handle: "@jess_creative",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
        },
        text: "Worked with many designers, but this level of creativity and professionalism is rare. A true partner in our success."
    },
    {
        author: {
            name: "David Ross",
            handle: "@dave_founder",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
        },
        text: "From concept to deployment, the process was seamless. The final product exceeded all our expectations."
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
