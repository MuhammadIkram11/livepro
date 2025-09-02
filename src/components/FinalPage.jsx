import React, { useEffect } from "react";
import { motion } from "framer-motion";
import MusicPlayer from "../widgets/MusicPlayer";
import { proposalConfig } from "../config";
import StickerAnimation from "./StickerAnimation";
import MovingHeartStickers from "./MovingHeartStickers";

export default function FinalPage() {
  const { personalMessages } = proposalConfig;

  // Ensure celebration music continues playing on this page
  useEffect(() => {
    // Check if celebration music is already playing from the proposal page
    if (window.celebrationAudio && window.celebrationAudio.playing !== false) {
      console.log(
        "🎉 Final page: Celebration music is already playing and will continue!"
      );

      // Ensure the music is still playing and looping
      if (window.celebrationAudio.paused) {
        console.log("🎉 Final page: Resuming celebration music");
        window.celebrationAudio
          .play()
          .catch((err) =>
            console.log("🎉 Could not resume celebration music:", err)
          );
      }

      // Make sure it's set to loop
      window.celebrationAudio.loop = true;
    } else {
      console.log(
        "🎉 Final page: No celebration music found, this page will be silent"
      );
    }
  }, []);

  return (
    <motion.div
      className="final-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="final-container">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          className="final-heart"
        >
          💖
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 120 }}
          className="final-title"
        >
          Our Love Story Continues... 💕
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="final-message"
        >
          Thank you for saying yes and making this the most beautiful moment of
          my life! 🌹✨
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="final-reflection"
        >
          <p>
            Every day with you is a new adventure, a new reason to smile, and a
            new chapter in our beautiful love story... 💫
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="music-section"
        >
          <h3>💖 This Moment is Special 💖</h3>
          <p>
            The colors of love, the heartbeat of happiness, and the whispers of
            my prayers… <br />
            this melody will always play in your name 🌹✨
          </p>
          {/* <MusicPlayer /> */}
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="final-quote"
        >
          <p>"{personalMessages.finalQuote}"</p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="final-signature"
        >
          <p>Forever yours, with all my love 💖</p>
          <p className="signature-name">{personalMessages.yourSignature}</p>
        </motion.div>

        <motion.div
          className="floating-final-elements"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          <span className="float-final" style={{ animationDelay: "0s" }}>
            💖
          </span>
          <span className="float-final" style={{ animationDelay: "1s" }}>
            💕
          </span>
          <span className="float-final" style={{ animationDelay: "2s" }}>
            💗
          </span>
          <span className="float-final" style={{ animationDelay: "3s" }}>
            💝
          </span>
          <span className="float-final" style={{ animationDelay: "4s" }}>
            ✨
          </span>
        </motion.div>

        {/* Sticker Animation */}
        <StickerAnimation />

        {/* Moving Heart Stickers */}
        <MovingHeartStickers />

        {/* Colorful Confetti Sprinkles */}
        <div className="confetti-container" style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 500
        }}>
          {[...Array(40)].map((_, i) => {
            const colors = [
              "#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FECA57", 
              "#FF9FF3", "#54A0FF", "#5F27CD", "#00D2D3", "#FF9F43",
              "#FF6348", "#2ED573", "#3742FA", "#F8B500", "#EE5A24",
              "#0ABDE3", "#FD79A8", "#6C5CE7", "#A29BFE", "#74B9FF",
              "#FF5722", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5",
              "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50",
              "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800"
            ];
            
            const shapes = ["▪", "▫", "●", "○", "♦", "◆", "▲", "△", "■", "□"];
            
            const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
            const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
            
            return (
              <motion.div
                key={`confetti-${i}`}
                initial={{
                  x: Math.random() * screenWidth,
                  y: -50,
                  scale: 0.5 + Math.random() * 0.8,
                  rotate: Math.random() * 360,
                  opacity: 1
                }}
                animate={{
                  y: screenHeight * 0.85, // Stop at 85% of screen height
                  x: [
                    Math.random() * screenWidth,
                    Math.random() * screenWidth + (Math.random() - 0.5) * 200,
                    Math.random() * screenWidth + (Math.random() - 0.5) * 150
                  ],
                  rotate: [
                    Math.random() * 360,
                    Math.random() * 360 + 180,
                    Math.random() * 360 + 360
                  ],
                  opacity: [1, 1, 0.8, 0.5, 0] // Fade out as it reaches 85%
                }}
                transition={{
                  duration: 3 + Math.random() * 4,
                  delay: Math.random() * 12,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear"
                }}
                style={{
                  position: "absolute",
                  fontSize: "8px",
                  color: colors[i % colors.length],
                  fontWeight: "bold"
                }}
              >
                {shapes[i % shapes.length]}
              </motion.div>
            );
          })}
        </div>

        <span style={{ animationDelay: "4s" }}>Made with love 💗 and lot of courage</span>
      </div>
    </motion.div>
  );
}
