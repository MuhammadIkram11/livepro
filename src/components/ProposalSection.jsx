import React, { useRef, useState } from 'react'
import confetti from 'canvas-confetti'
import { motion, useMotionValue, useTransform } from 'framer-motion'

export default function ProposalSection() {
  const [accepted, setAccepted] = useState(false)
  const noBtnRef = useRef(null)

  const x = useMotionValue(0)
  const rotate = useTransform(x, [-100, 100], [-5, 5])

  const throwConfetti = () => {
    const end = Date.now() + 1000
    const frame = () => {
      confetti({ particleCount: 4, spread: 80, origin: { y: 0.6 } })
      if (Date.now() < end) requestAnimationFrame(frame)
    }
    frame()
  }

  const onYes = () => {
    setAccepted(true)
    throwConfetti()
  }

  const dodgeNo = () => {
    const btn = noBtnRef.current
    if (!btn) return
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    const nx = Math.random() * (vw - 100)
    const ny = Math.random() * (vh - 100)
    btn.style.position = 'fixed'
    btn.style.left = nx + 'px'
    btn.style.top = ny + 'px'
  }

  return (
    <section className="section" style={{ textAlign: 'center' }}>
      <motion.h2 style={{ fontSize: 36, fontWeight: 800 }} initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}>
        Will you be mine? 💖
      </motion.h2>

      {!accepted ? (
        <div className="btn-row" style={{ justifyContent: 'center', marginTop: 16 }}>
          <motion.button
            className="button button-primary"
            onClick={onYes}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            drag="x"
            style={{ x, rotate }}
          >
            ✅ Yes
          </motion.button>

          <button
            ref={noBtnRef}
            className="button button-ghost"
            onMouseEnter={dodgeNo}
            onMouseDown={dodgeNo}
            onTouchStart={dodgeNo}
          >
            ❌ No
          </button>
        </div>
      ) : (
        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: 24, marginTop: 10 }}>
          Yaaay! ❤️ You made me the happiest!
        </motion.p>
      )}
    </section>
  )
}
