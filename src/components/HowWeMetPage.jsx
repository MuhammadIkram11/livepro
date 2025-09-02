import React from 'react'
import { motion } from 'framer-motion'
import { proposalConfig } from '../config'
import MovingStickers from './MovingStickers'

export default function HowWeMetPage({ onNext, onPrevious }) {
  const { personalMessages } = proposalConfig
  const storyItems = personalMessages.howWeMet.map((text, index) => ({
    emoji: ['✨', '😍', '☕', '🎶', '🌹'][index] || '💫',
    text,
    delay: 0.2 + (index * 0.2)
  }))

  return (
    <motion.div 
      className="how-we-met-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="story-container">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
          className="story-title"
        >
          How We Met 💫
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="story-intro"
        >
          Every love story has a beginning, and ours started with a moment that changed everything... 💕
        </motion.p>

        <div className="story-timeline">
          {storyItems.map((item, index) => (
            <motion.div
              key={index}
              className="story-item"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: item.delay, type: 'spring', stiffness: 100 }}
            >
              <div className="story-emoji">{item.emoji}</div>
              <div className="story-text">{item.text}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="story-reflection"
        >
          <p>Looking back now, I realize that moment was the beginning of something beautiful... 🌟</p>
        </motion.div>

        <div className="navigation-buttons">
          <motion.button
            onClick={onPrevious}
            className="nav-button prev-button"
            whileHover={{ scale: 1.05, x: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Back
          </motion.button>
          
          <motion.button
            onClick={onNext}
            className="nav-button next-button"
            whileHover={{ scale: 1.05, x: 3 }}
            whileTap={{ scale: 0.95 }}
          >
            Continue Our Story →
          </motion.button>
        </div>

        <motion.div 
          className="floating-story-elements"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="float-story" style={{ animationDelay: '0s' }}>💫</span>
          <span className="float-story" style={{ animationDelay: '1s' }}>✨</span>
          <span className="float-story" style={{ animationDelay: '2s' }}>💕</span>
          <span className="float-story" style={{ animationDelay: '3s' }}>🌟</span>
        </motion.div>

        {/* Moving Stickers */}
        <MovingStickers />
      </div>
    </motion.div>
  )
}
