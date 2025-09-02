import React from "react";
import { motion } from "framer-motion";

export default function MovingHeartStickers() {
  const heartType = "💖"; // Same heart as MovingStickers component

  return (
    <div className="moving-heart-stickers-container" style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      pointerEvents: "none",
      zIndex: 1000
    }}>
      {/* Hearts from Left Side */}
      {[...Array(3)].map((_, i) => {
        const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
        const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
        
        return (
          <motion.div
            key={`heart-left-${i}`}
            initial={{
              x: -100,
              y: Math.random() * screenHeight,
              scale: 0,
              rotate: 0
            }}
            animate={{
              x: [
                -100,
                screenWidth * 0.2,
                screenWidth * 0.5,
                screenWidth * 0.8,
                screenWidth + 100
              ],
              y: [
                Math.random() * screenHeight,
                Math.random() * screenHeight,
                Math.random() * screenHeight,
                Math.random() * screenHeight,
                Math.random() * screenHeight
              ],
              scale: [0, 1.5, 1.0, 1.3, 0.8, 0],
              rotate: [0, 180, 360, 540, 720],
              opacity: [0, 1, 0.8, 1, 0.6, 0]
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              delay: i * 2 + Math.random() * 5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
            style={{
              position: "absolute",
              fontSize: "20px",
              zIndex: 10
            }}
          >
            {heartType}
          </motion.div>
        );
      })}

      {/* Hearts from Right Side */}
      {[...Array(3)].map((_, i) => {
        const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
        const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
        
        return (
          <motion.div
            key={`heart-right-${i}`}
            initial={{
              x: screenWidth + 100,
              y: Math.random() * screenHeight,
              scale: 0,
              rotate: 0
            }}
            animate={{
              x: [
                screenWidth + 100,
                screenWidth * 0.8,
                screenWidth * 0.5,
                screenWidth * 0.2,
                -100
              ],
              y: [
                Math.random() * screenHeight,
                Math.random() * screenHeight,
                Math.random() * screenHeight,
                Math.random() * screenHeight,
                Math.random() * screenHeight
              ],
              scale: [0, 1.4, 1.1, 1.2, 0.9, 0],
              rotate: [0, -180, -360, -540, -720],
              opacity: [0, 1, 0.9, 1, 0.7, 0]
            }}
            transition={{
              duration: 10 + Math.random() * 6,
              delay: i * 2.5 + Math.random() * 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
            style={{
              position: "absolute",
              fontSize: "20px",
              zIndex: 10
            }}
          >
            {heartType}
          </motion.div>
        );
      })}

      {/* Hearts from Top Side */}
      {[...Array(2)].map((_, i) => {
        const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
        const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
        
        return (
          <motion.div
            key={`heart-top-${i}`}
            initial={{
              x: Math.random() * screenWidth,
              y: -100,
              scale: 0,
              rotate: 0
            }}
            animate={{
              x: [
                Math.random() * screenWidth,
                Math.random() * screenWidth,
                Math.random() * screenWidth,
                Math.random() * screenWidth,
                Math.random() * screenWidth
              ],
              y: [
                -100,
                screenHeight * 0.3,
                screenHeight * 0.6,
                screenHeight * 0.9,
                screenHeight + 100
              ],
              scale: [0, 1.3, 1.0, 1.4, 0.7, 0],
              rotate: [0, 90, 180, 270, 360],
              opacity: [0, 1, 0.8, 1, 0.5, 0]
            }}
            transition={{
              duration: 14 + Math.random() * 6,
              delay: i * 3 + Math.random() * 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
            style={{
              position: "absolute",
              fontSize: "20px",
              zIndex: 10
            }}
          >
            {heartType}
          </motion.div>
        );
      })}

      {/* Hearts from Bottom Side */}
      {[...Array(2)].map((_, i) => {
        const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
        const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
        
        return (
          <motion.div
            key={`heart-bottom-${i}`}
            initial={{
              x: Math.random() * screenWidth,
              y: screenHeight + 100,
              scale: 0,
              rotate: 0
            }}
            animate={{
              x: [
                Math.random() * screenWidth,
                Math.random() * screenWidth,
                Math.random() * screenWidth,
                Math.random() * screenWidth,
                Math.random() * screenWidth
              ],
              y: [
                screenHeight + 100,
                screenHeight * 0.7,
                screenHeight * 0.4,
                screenHeight * 0.1,
                -100
              ],
              scale: [0, 1.2, 1.1, 1.5, 0.6, 0],
              rotate: [0, -90, -180, -270, -360],
              opacity: [0, 1, 0.9, 1, 0.4, 0]
            }}
            transition={{
              duration: 11 + Math.random() * 7,
              delay: i * 2.8 + Math.random() * 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
            style={{
              position: "absolute",
              fontSize: "20px",
              zIndex: 10
            }}
          >
            {heartType}
          </motion.div>
        );
      })}

      {/* Special Corner Hearts */}
      {[...Array(2)].map((_, i) => {
        const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
        const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
        
        const corners = [
          { x: -150, y: -150 }, // Top-left
          { x: screenWidth + 150, y: -150 }, // Top-right
          { x: -150, y: screenHeight + 150 }, // Bottom-left
          { x: screenWidth + 150, y: screenHeight + 150 } // Bottom-right
        ];
        
        const corner = corners[i];
        
        return (
          <motion.div
            key={`heart-corner-${i}`}
            initial={{
              x: corner.x,
              y: corner.y,
              scale: 0,
              rotate: 0
            }}
            animate={{
              x: [
                corner.x,
                screenWidth * 0.3,
                screenWidth * 0.7,
                screenWidth * 0.5,
                screenWidth * 0.2,
                screenWidth * 0.8
              ],
              y: [
                corner.y,
                screenHeight * 0.2,
                screenHeight * 0.8,
                screenHeight * 0.5,
                screenHeight * 0.7,
                screenHeight * 0.3
              ],
              scale: [0, 2.0, 1.0, 1.8, 0.5, 0],
              rotate: [0, 360, 720, 1080, 1440],
              opacity: [0, 1, 0.7, 1, 0.3, 0]
            }}
            transition={{
              duration: 18 + Math.random() * 12,
              delay: i * 4 + Math.random() * 6,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
            style={{
              position: "absolute",
              fontSize: "24px",
              zIndex: 15
            }}
          >
            {heartType}
          </motion.div>
        );
      })}
    </div>
  );
}
