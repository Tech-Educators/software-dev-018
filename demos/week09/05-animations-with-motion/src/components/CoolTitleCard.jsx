'use client'

import { motion } from "motion/react"

export default function CoolTitleCard({children}) {
    return (
        <motion.div className="w-60 bg-rose-500"animate={{scale: 1, rotate: 360}} transition={{duration: 2}}>
           {children}
        </motion.div>
    )
}