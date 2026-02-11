"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const HEADLINES = [
  <div key={0}>
    Transform Your Revenue Cycle.{" "}
    <span className="text-brand-orange">Stop Leaving 30% of Your Revenue to Payer Friction.</span>
  </div>,
  <div key={1}>
    <span className="text-brand-orange">AI-Driven RCM</span>: Eliminate Denials. Guarantee Revenue Flow.
  </div>,
  <div key={2}>
    The <span className="text-brand-orange">Intelligence Layer</span> for Institutional Revenue Sovereignty.
  </div>,
  <div key={3}>
    Where <span className="text-brand-orange">Algorithmic Precision</span> Meets Human Advocacy.
  </div>,
]

export function SequentialHeroAnimation() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % HEADLINES.length)
    }, 4500) // 4.5 seconds per headline

    return () => clearTimeout(timer)
  }, [index])

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -12,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  }

  return (
    <div className="min-h-[160px] md:min-h-[200px] flex items-center">
      <AnimatePresence mode="wait">
        <motion.h1
          key={index}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-slate-900 leading-[1.1] text-balance"
        >
          {HEADLINES[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  )
}
