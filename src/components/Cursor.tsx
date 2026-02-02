import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            // Check if hovering over clickable element
            const target = e.target as HTMLElement;
            const isClickable = window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button');
            setIsHovering(!!isClickable);
        };

        const handleClickDown = () => setIsClicking(true);
        const handleClickUp = () => setIsClicking(false);

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mousedown', handleClickDown);
        window.addEventListener('mouseup', handleClickUp);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mousedown', handleClickDown);
            window.removeEventListener('mouseup', handleClickUp);
        };
    }, []);

    // Don't render on mobile/touch devices
    if (typeof navigator !== 'undefined' && /Mobi|Android/i.test(navigator.userAgent)) {
        return null;
    }

    return (
        <>
            {/* Main Dot */}
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 rounded-full bg-white mix-blend-difference pointer-events-none z-[9999]"
                animate={{
                    x: position.x - 8,
                    y: position.y - 8,
                    scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 1500,
                    damping: 40,
                    mass: 0.2
                }}
            />

            {/* Trailing Ring */}
            <motion.div
                className="fixed top-0 left-0 w-12 h-12 rounded-full border border-white/30 pointer-events-none z-[9999]"
                animate={{
                    x: position.x - 24,
                    y: position.y - 24,
                    scale: isClicking ? 0.5 : isHovering ? 1.2 : 1,
                    opacity: isHovering ? 0.5 : 1
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                    mass: 0.5,
                    delay: 0.05 // Slight lag for trail effect
                }}
            />
        </>
    );
}
