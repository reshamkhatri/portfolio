import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function Cursor() {
    // using motion values instead of state for better performance
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 }; // Tighter, faster spring
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        window.addEventListener('mousemove', moveCursor);
        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, [cursorX, cursorY]);

    // Don't render on mobile/touch devices
    if (typeof navigator !== 'undefined' && /Mobi|Android/i.test(navigator.userAgent)) {
        return null;
    }

    return (
        <>
            {/* Main Dot - Instant follow (visualized by stiff spring or direct) */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 rounded-full bg-white mix-blend-difference pointer-events-none z-[9999]"
                style={{
                    translateX: cursorX, // Direct binding for instant feel, or use very stiff spring
                    translateY: cursorY,
                    x: -6, // Centre offset
                    y: -6
                }}
            />

            {/* Trailing Ring - Smooth follow */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/50 pointer-events-none z-[9999]"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    x: -16, // Centre offset
                    y: -16
                }}
            />
        </>
    );
}
