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
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/30 mix-blend-difference pointer-events-none z-[9999] flex items-center justify-center"
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
                x: -16,
                y: -16
            }}
        >
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
        </motion.div>
    );
}
