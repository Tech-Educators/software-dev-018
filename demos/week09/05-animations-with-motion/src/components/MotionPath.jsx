'use client'

import * as motion from "motion/react-client"

const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" }

export default function MotionPath() {
    return (
        <div style={{ position: "relative"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="451" height="437">
                <motion.path
                    d="M150 5 L75 200 L225 200"
                    fill="transparent"
                    strokeWidth="12"
                    stroke="tomato"
                    strokeLinecap="round"
                    initial={{ pathLength: 0.001 }}
                    animate={{ pathLength: 1 }}
                    transition={transition}
                />
            </svg>
            <motion.div
                style={box}
                initial={{ offsetDistance: "0%", scale: 2.5 }}
                animate={{ offsetDistance: "100%", scale: 1 }}
                transition={transition}
            >Welcome to my site!</motion.div>
        </div>
    )
}

/**
 * ==============   Styles   ================
 */

const box = {
    width: 50,
    height: 50,
    backgroundColor: "#4ff0b7",
    borderRadius: 10,
    position: "absolute",
    top: 0,
    left: 0,
    offsetPath: `path("M150 5 L75 200 L225 200")`,
}
