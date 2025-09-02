import React from 'react'
import { motion } from 'framer-motion'
import MovingStickers from './MovingStickers'

export default function HowWeAreNowPage({ onNext, onPrevious }) {
  return (
    <motion.div 
      className="how-we-are-now-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="now-container">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
          className="now-title"
        >
          How We Are Now 💕
        </motion.h1>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="now-message"
        >
          <p>Look at us now… from strangers to something so much more 🥰</p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="now-hearts"
        >
          <motion.div 
            className="beating-heart left-heart"
            animate={{ 
              scale: [1, 1.3, 1],
            }}
            transition={{ 
              duration: 1.2,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          >
            ❤️
          </motion.div>
          
          <motion.div 
            className="beating-heart right-heart"
            animate={{ 
              scale: [1, 1.3, 1],
            }}
            transition={{ 
              duration: 1.2,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: 0.6
            }}
          >
            ❤️
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="now-reflection"
        >
          <p>Every little conversation, every laugh, every moment with you means the world 💕</p>
          <p>We've grown so much together, and I'm grateful for every step of this journey 🌟</p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="now-feelings"
        >
          <div className="feeling-item">
            <span className="feeling-emoji">🥰</span>
            <span>You make every day brighter</span>
          </div>
          <div className="feeling-item">
            <span className="feeling-emoji">💫</span>
            <span>Your presence fills my heart with joy</span>
          </div>
          <div className="feeling-item">
            <span className="feeling-emoji">✨</span>
            <span>I can't imagine my life without you</span>
          </div>
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
            Continue Our Journey →
          </motion.button>
        </div>

        <motion.div 
          className="floating-now-elements"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="float-now" style={{ animationDelay: '0s' }}>💕</span>
          <span className="float-now" style={{ animationDelay: '1s' }}>🥰</span>
          <span className="float-now" style={{ animationDelay: '2s' }}>💫</span>
          <span className="float-now" style={{ animationDelay: '3s' }}>✨</span>
        </motion.div>

        {/* Moving Stickers */}
        <MovingStickers />
      </div>
    </motion.div>
  )
}
