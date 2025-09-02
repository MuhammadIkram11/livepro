import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { proposalConfig } from '../config'
import MovingStickers from './MovingStickers'

export default function UrduPoetryPage({ onNext, onPrevious }) {
  const { urduPoetry } = proposalConfig
  const [displayedPoetry, setDisplayedPoetry] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  // Select 2 random Urdu poetry couplets for this page
  useEffect(() => {
    const shuffled = [...urduPoetry].sort(() => 0.5 - Math.random())
    setDisplayedPoetry(shuffled.slice(0, 2))
  }, [urduPoetry])

  const nextPoetry = () => {
    setCurrentIndex((prev) => (prev + 1) % displayedPoetry.length)
  }

  return (
    <motion.div 
      className="urdu-poetry-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="poetry-container">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
          className="poetry-title"
        >
          Poetry 🌹
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="poetry-intro"
        >
          Words that express what my heart feels for you... 💕
        </motion.p>

        {displayedPoetry.length > 0 && (
          <div className="poetry-showcase">
            {displayedPoetry.map((poetry, index) => (
              <motion.div
                key={index}
                className={`poetry-card ${index === currentIndex ? 'active' : ''}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: index === currentIndex ? 1 : 0.8, 
                  opacity: index === currentIndex ? 1 : 0.6 
                }}
                transition={{ delay: 0.6 + (index * 0.2), type: 'spring', stiffness: 100 }}
                onClick={nextPoetry}
              >
                <div className="poetry-urdu-main">{poetry.urdu}</div>
                <div className="poetry-transliteration-main">{poetry.transliteration}</div>
                <div className="poetry-english-main">{poetry.english}</div>
                
                <motion.div 
                  className="poetry-indicator"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {index === currentIndex ? '✨' : '💫'}
                </motion.div>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="poetry-instruction"
        >
          <p>💡 Click on any couplet to see it more clearly</p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="poetry-reflection"
        >
          <p>These beautiful words capture just a fraction of how much you mean to me... 💖</p>
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
          className="floating-poetry-elements"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="float-poetry" style={{ animationDelay: '0s' }}>🌹</span>
          <span className="float-poetry" style={{ animationDelay: '1s' }}>💫</span>
          <span className="float-poetry" style={{ animationDelay: '2s' }}>💕</span>
          <span className="float-poetry" style={{ animationDelay: '3s' }}>✨</span>
        </motion.div>

        {/* Moving Stickers */}
        <MovingStickers />
      </div>
    </motion.div>
  )
}
