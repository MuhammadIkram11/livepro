import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { proposalConfig } from '../config'
import MovingStickers from './MovingStickers'

export default function OurJourneyPage({ onNext, onPrevious }) {
  const { personalMessages, urduPoetry } = proposalConfig
  const [currentPoetry, setCurrentPoetry] = useState(null)
  
  // Select random Urdu poetry for this page
  useEffect(() => {
    const randomPoetry = urduPoetry[Math.floor(Math.random() * urduPoetry.length)]
    setCurrentPoetry(randomPoetry)
  }, [urduPoetry])

  const journeyItems = personalMessages.ourJourney.map((memory, index) => ({
    emoji: ['😊', '💫', '🥰', '✨', '💕'][index] || '💖',
    text: memory,
    delay: 0.2 + (index * 0.2)
  }))

  return (
    <motion.div 
      className="our-journey-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="journey-container">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
          className="journey-title"
        >
          Our Journey Together 💕
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="journey-intro"
        >
          Every step of our journey together has been filled with love, laughter, and beautiful memories... 🌟
        </motion.p>

        <div className="journey-memories">
          {journeyItems.map((item, index) => (
            <motion.div
              key={index}
              className="memory-item"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: item.delay, type: 'spring', stiffness: 100 }}
            >
              <div className="memory-emoji">{item.emoji}</div>
              <div className="memory-text">{item.text}</div>
            </motion.div>
          ))}
        </div>

        {/* Urdu Poetry Display */}
        {currentPoetry && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="urdu-poetry-section"
          >
            <h3 className="poetry-title">🌹 A Beautiful Thought for You 🌹</h3>
            <div className="poetry-display">
              <div className="poetry-urdu">{currentPoetry.urdu}</div>
              <div className="poetry-transliteration">{currentPoetry.transliteration}</div>
              <div className="poetry-english">{currentPoetry.english}</div>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="journey-reflection"
        >
          <p>Looking back at our journey, I realize how blessed I am to have you by my side... 💫</p>
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
          className="floating-journey-elements"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="float-journey" style={{ animationDelay: '0s' }}>🌹</span>
          <span className="float-journey" style={{ animationDelay: '1s' }}>💫</span>
          <span className="float-journey" style={{ animationDelay: '2s' }}>💕</span>
          <span className="float-journey" style={{ animationDelay: '3s' }}>✨</span>
        </motion.div>

        {/* Moving Stickers */}
        <MovingStickers />
      </div>
    </motion.div>
  )
}
