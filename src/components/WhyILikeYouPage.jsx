import React from 'react'
import { motion } from 'framer-motion'
import { proposalConfig } from '../config'
import MovingStickers from './MovingStickers'

export default function WhyILikeYouPage({ onNext, onPrevious }) {
  const { personalMessages } = proposalConfig
  const reasons = personalMessages.whyILoveHer

  return (
    <motion.div 
      className="why-i-like-you-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="reasons-container">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
          className="reasons-title"
        >
          Why I Like You 💖
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="reasons-intro"
        >
          There are so many reasons why you're absolutely amazing... let me count just a few! 🌟
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="reasons-list"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="reason-item"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 + (index * 0.1), type: 'spring', stiffness: 100 }}
              whileHover={{ 
                scale: 1.05, 
                x: 10,
                rotate: [0, 2, -2, 0]
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="reason-bullet">💕</span>
              <span className="reason-text">{reason}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="reasons-conclusion"
        >
          <p>And honestly... I could go on forever about all the things I love about you! 💕</p>
          <p>But there's something even more important I want to ask you... 🌹</p>
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
            Continue to the Big Question →
          </motion.button>
        </div>

        <motion.div 
          className="floating-reasons-elements"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0 }}
        >
          <span className="float-reason" style={{ animationDelay: '0s' }}>💖</span>
          <span className="float-reason" style={{ animationDelay: '1s' }}>💕</span>
          <span className="float-reason" style={{ animationDelay: '2s' }}>🥰</span>
          <span className="float-reason" style={{ animationDelay: '3s' }}>✨</span>
        </motion.div>

        {/* Moving Stickers */}
        <MovingStickers />
      </div>
    </motion.div>
  )
}
