import React from 'react'
import { motion } from 'framer-motion'
import { proposalConfig } from '../config'
import MovingStickers from './MovingStickers'

export default function WelcomePage({ onNext }) {
  const { herName } = proposalConfig

  return (
    <motion.div 
      className="welcome-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="welcome-container">
        <motion.div 
          className="big-heart"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        >
          💖
        </motion.div>
        
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 120 }}
          className="welcome-title"
        >
          Hey {herName}... 💕
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="welcome-message"
        >
          I have something really special to share with you ✨
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="welcome-subtitle"
        >
          <span className="sparkle">✨</span>
          <span>Something that's been in my heart for a while</span>
          <span className="sparkle">✨</span>
        </motion.div>

        <motion.button
          onClick={onNext}
          className="next-button"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Continue Our Journey 💫
        </motion.button>

        <motion.div 
          className="floating-elements"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="float-element" style={{ animationDelay: '0s' }}>🌹</span>
          <span className="float-element" style={{ animationDelay: '1s' }}>💫</span>
          <span className="float-element" style={{ animationDelay: '2s' }}>🥰</span>
          <span className="float-element" style={{ animationDelay: '3s' }}>💝</span>
        </motion.div>

        {/* Moving Stickers */}
        <MovingStickers />
      </div>
    </motion.div>
  )
}
