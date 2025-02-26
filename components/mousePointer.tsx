"use client"

import { useEffect, useState } from "react"

export default function MousePointer() {
    const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 })
    const [isTouchEnabled, setIsTouchEnabled] = useState(false)

    useEffect(() => {
        const handleWindowMouseMove = (event: MouseEvent) => {
            setTimeout(() => {
                setMouseCoords({
                    x: event.clientX,
                    y: event.clientY,
                });
            }, 50)
        };
        window.addEventListener('mousemove', handleWindowMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleWindowMouseMove,
            );
        };
    }, []);

    useEffect(() => {
        setIsTouchEnabled(
            ('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0)
        )
    })
 
    return (
        <div
            style={{
                top: mouseCoords.y,
                left: mouseCoords.x
            }}
            className={`${isTouchEnabled ? "hidden" : ""} fixed pointer-events-none translate-x-[-50%] translate-y-[-50%] w-[500px] h-[500px] bg-hemerald rounded-full blur-3xl z-[-1] opacity-10`}
        >
        </div>
    )
}