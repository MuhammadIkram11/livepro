import React from 'react'
import { motion } from 'framer-motion'

const moments = [
  { emoji: '🏫', text: 'We first met near the library and you smiled.' },
  { emoji: '☕', text: 'Our first coffee chat — I didn’t want it to end.' },
  { emoji: '😂', text: 'Inside jokes that always make us laugh.' },
  { emoji: '🎶', text: 'Sharing songs and late-night playlists.' },
]

export default function StorySection() {
  return (
    <section className="section">
      <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 10 }}>Our Story</h2>
      <div className="timeline">
        {moments.map((m, i) => (
          <motion.div
            className="timeline-item"
            key={i}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ delay: i * 0.05 }}
          >
            <strong className="timeline-emoji">{m.emoji}</strong>
            {m.text}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
