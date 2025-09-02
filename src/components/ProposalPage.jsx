import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { proposalConfig, musicUtils } from '../config'
import MovingStickers from './MovingStickers'

export default function ProposalPage({ onPrevious, onProposalAccepted }) {
  const { personalMessages, music } = proposalConfig
  const [showQuestion, setShowQuestion] = useState(false)
  const [showButtons, setShowButtons] = useState(false)
  const [answer, setAnswer] = useState(null)
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })
  const [celebrationAudio, setCelebrationAudio] = useState(null)

  const handleNext = () => {
    setShowQuestion(true)
    setTimeout(() => setShowButtons(true), 2000)
  }

  const handleYes = () => {
    setAnswer('yes')
    if (onProposalAccepted) {
      onProposalAccepted()
    }
    
    // Use the utility function to stop all background music completely
    musicUtils.stopAllBackgroundMusic()
    
    // Play celebration music using the utility function (will loop automatically)
    const newCelebrationAudio = musicUtils.playCelebrationMusic(music.celebrationSong)
    if (newCelebrationAudio) {
      setCelebrationAudio(newCelebrationAudio)
      
      // Store the celebration audio globally so it continues on the final page
      window.celebrationAudio = newCelebrationAudio
    }
    
    // Final check to ensure background music is completely stopped
    setTimeout(() => {
      musicUtils.stopAllBackgroundMusic()
    }, 100)
    
    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
    
    // More confetti bursts
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      })
    }, 200)
    
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      })
    }, 400)
  }

  const handleNoHover = () => {
    const newX = Math.random() * (window.innerWidth - 200)
    const newY = Math.random() * (window.innerHeight - 100)
    setNoButtonPosition({ x: newX, y: newY })
  }

  // Cleanup audio when component unmounts (but don't stop celebration music if going to final page)
  useEffect(() => {
    return () => {
      // Only cleanup if we're not going to the final page
      if (celebrationAudio && !answer) {
        celebrationAudio.pause()
        celebrationAudio.currentTime = 0
      }
    }
  }, [celebrationAudio, answer])

  return (
    <motion.div 
      className="proposal-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="proposal-container">
        {!showQuestion ? (
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
            className="proposal-intro"
          >
            <h1>So... Here's what I really wanted to ask you 💖</h1>
            <motion.button
              onClick={handleNext}
              className="reveal-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reveal the Question 💫
            </motion.button>
          </motion.div>
        ) : (
          <AnimatePresence>
            <motion.div
              key="question"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="big-question"
            >
              <motion.h1
                className="proposal-question"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              >
                {personalMessages.proposalQuestion}
              </motion.h1>
            </motion.div>
          </AnimatePresence>
        )}

        {showButtons && !answer && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            className="proposal-buttons"
          >
            <motion.button
              onClick={handleYes}
              className="yes-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ✅ Yes! 💖
            </motion.button>
            
            <motion.button
              className="no-button"
              style={{
                position: 'absolute',
                left: noButtonPosition.x,
                top: noButtonPosition.y,
                zIndex: 1000
              }}
              onMouseEnter={handleNoHover}
              whileHover={{ scale: 1.1 }}
            >
              ❌ No
            </motion.button>
          </motion.div>
        )}

        {answer === 'yes' && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="celebration"
          >
            <motion.h2
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 1,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
              className="celebration-text"
            >
              {personalMessages.celebrationMessage}
            </motion.h2>
            
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
              className="celebration-hearts"
            >
              💖💕💗💝💖💕💗💝
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="celebration-message"
            >
              I promise to love you more and more each day! 🌹✨
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="celebration-music-note"
              style={{ 
                fontSize: '14px', 
                opacity: 0.8, 
                marginTop: '20px',
                fontStyle: 'italic'
              }}
            >
              🎵 Your celebration music is now playing and will continue on the next page! 🎵
            </motion.p>
          </motion.div>
        )}

        {!answer && (
          <div className="navigation-buttons">
            <motion.button
              onClick={onPrevious}
              className="nav-button prev-button"
              whileHover={{ scale: 1.05, x: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              ← Back
            </motion.button>
          </div>
        )}

        <motion.div 
          className="floating-proposal-elements"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="float-proposal" style={{ animationDelay: '0s' }}>💖</span>
          <span className="float-proposal" style={{ animationDelay: '1s' }}>💕</span>
          <span className="float-proposal" style={{ animationDelay: '2s' }}>💗</span>
          <span className="float-proposal" style={{ animationDelay: '3s' }}>💝</span>
        </motion.div>

        {/* Moving Stickers */}
        <MovingStickers />
      </div>
    </motion.div>
  )
}
