import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { proposalConfig } from '../config'
import MovingStickers from './MovingStickers'

export default function PasswordPage({ onPasswordCorrect }) {
  const [password, setPassword] = useState('')
  const [isShaking, setIsShaking] = useState(false)
  const [attempts, setAttempts] = useState(0)
  const [currentPoetry, setCurrentPoetry] = useState(null)
  const { password: correctPassword, music, urduPoetry } = proposalConfig

  // Select random Urdu poetry for this page
  useEffect(() => {
    const randomPoetry = urduPoetry[Math.floor(Math.random() * urduPoetry.length)]
    setCurrentPoetry(randomPoetry)
  }, [urduPoetry])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password === correctPassword) {
      console.log('🔓 Password correct! Starting background music...')
      
      // Play background music when password is correct
      try {
        const audio = new Audio(music.backgroundSong)
        audio.volume = 0.4 // Set volume to 40% for soft background
        audio.loop = true // Loop the background music
        
        // Store the audio element in a global way so it can be accessed later
        window.backgroundAudio = audio
        
        // Also add it to the document for easy access
        audio.id = 'background-audio'
        document.body.appendChild(audio)
        
        console.log('🎵 Background music loaded and ready to play')
        
        audio.addEventListener('canplaythrough', () => {
          console.log('🎵 Background music can play through')
        })
        
        audio.addEventListener('play', () => {
          console.log('🎵 Background music is now playing!')
        })
        
        audio.addEventListener('error', (error) => {
          console.error('🎵 Error playing background music:', error)
        })
        
        audio.play().catch(err => console.log('🎵 Background music autoplay blocked:', err))
      } catch (error) {
        console.error('🎵 Could not play background music:', error)
      }
      
      onPasswordCorrect()
    } else {
      setIsShaking(true)
      setAttempts(prev => prev + 1)
      setTimeout(() => setIsShaking(false), 500)
      setPassword('')
    }
  }

  return (
    <motion.div 
      className="password-page"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, type: 'spring' }}
    >
      <div className="lock-container">
        <motion.div 
          className="lock-icon"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        >
          🔒
        </motion.div>
        
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="lock-title"
        >
          This secret is just for you 💕
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="lock-subtitle"
        >
          Enter the magic word to unlock something special ✨
        </motion.p>

        <motion.form 
          onSubmit={handleSubmit}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="password-form"
        >
          <motion.input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password..."
            className={`password-input ${isShaking ? 'shake' : ''}`}
            animate={isShaking ? { x: [-10, 10, -10, 10, 0] } : {}}
            transition={{ duration: 0.5 }}
          />
          
          <motion.button
            type="submit"
            className="unlock-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🔓 Unlock My Heart
          </motion.button>
        </motion.form>

        {attempts > 0 && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="error-message"
          >
            Oops! Try again cutie 😘
          </motion.p>
        )}

        {/* Urdu Poetry Display */}
        {currentPoetry && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="urdu-poetry-display"
          >
            <div className="poetry-urdu">{currentPoetry.urdu}</div>
            <div className="poetry-transliteration">{currentPoetry.transliteration}</div>
            <div className="poetry-english">{currentPoetry.english}</div>
          </motion.div>
        )}

        <motion.div 
          className="floating-hearts"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="heart-float" style={{ animationDelay: '0s' }}>💖</span>
          <span className="float-heart" style={{ animationDelay: '1s' }}>💕</span>
          <span className="float-heart" style={{ animationDelay: '2s' }}>💗</span>
          <span className="float-heart" style={{ animationDelay: '3s' }}>💝</span>
        </motion.div>

        {/* Moving Stickers */}
        <MovingStickers />
      </div>
    </motion.div>
  )
}
