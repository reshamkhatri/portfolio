import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee"

const testimonials = [
    {
        author: {
            name: "Emma Thompson",
            handle: "@emmaai",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
        },
        text: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
        href: "https://twitter.com/emmaai"
    },
    {
        author: {
            name: "David Park",
            handle: "@davidtech",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        },
        text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
        href: "https://twitter.com/davidtech"
    },
    {
        author: {
            name: "Sofia Rodriguez",
            handle: "@sofiaml",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
        },
        text: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive."
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
                title="Trusted by developers worldwide"
                description="Join thousands of developers who are already building the future with our AI platform"
                testimonials={testimonials}
                className="bg-transparent" // Override default bg to transparent to blend with dark theme
            />
        </section>
    )
}
