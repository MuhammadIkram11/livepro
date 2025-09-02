import React from 'react'
import { motion } from 'framer-motion'

const reasons = [
  'You laugh at my jokes (even the bad ones).',
  'You’re super smart and kind.',
  'You make every day brighter.',
  'We vibe so naturally together.',
  'Your smile is my favorite thing.',
]

export default function WhyILikeYou() {
  return (
    <section className="section">
      <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 10 }}>Why I like you</h2>
      <ul style={{ paddingLeft: 18, margin: 0 }}>
        {reasons.map((r, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            style={{ margin: '8px 0' }}
          >
            • {r}
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
