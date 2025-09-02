import React from 'react'
import { motion } from 'framer-motion'

export default function WelcomeSection({ name = 'Beautiful' }) {
  return (
    <section className="section">
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120 }}
        style={{ fontSize: 42, fontWeight: 800 }}
      >
        Hey {name}, I have something to tell you…
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .2 }}
        style={{ fontSize: 18, marginTop: 8 }}
      >
        <span role="img" aria-label="bouncing heart" style={{ display: 'inline-block' }}>
          💞
        </span>{' '}
        I made this little site just for you.
      </motion.p>
    </section>
  )
}
