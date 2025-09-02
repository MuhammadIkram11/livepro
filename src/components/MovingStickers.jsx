import React from "react";
import { motion } from "framer-motion";

export default function MovingStickers() {
  const stickers = [
    { src: "/teddy-bear-1.png", alt: "Teddy Bear 1", delay: 0, color: "#FFB6C1" },
    { src: "/teddy-bear-2.png", alt: "Teddy Bear 2", delay: 1, color: "#98FB98" },
    { src: "/teddy-3.png", alt: "Teddy 3", delay: 2, color: "#87CEEB" },
    { src: "/love.png", alt: "Love", delay: 3, color: "#DDA0DD" },
    { src: "/teddy.png", alt: "Teddy", delay: 4, color: "#F0E68C" },
    { src: "/sticker_8.avif", alt: "Sticker 8", delay: 5, color: "#FFA07A" },
    { src: "/teddy3.png", alt: "Teddy3", delay: 6, color: "#20B2AA" },
  ];

  return (
    <div className="moving-stickers-container" style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100%",
      overflow: "hidden",
      pointerEvents: "none"
    }}>
      {/* Floating sparkles background */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="sparkle"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            scale: 0
          }}
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 5,
            repeat: Infinity,
            repeatType: "loop"
          }}
          style={{
            position: "absolute",
            width: "4px",
            height: "4px",
            background: `hsl(${Math.random() * 360}, 70%, 60%)`,
            borderRadius: "50%",
            boxShadow: "0 0 6px currentColor"
          }}
        />
      ))}
      
      {/* Independent glowing rings moving across entire page */}
      {stickers.map((sticker, index) => {
        const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
        const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
        
        return (
          <motion.div
            key={`ring-${index}`}
            className="glow-ring"
            initial={{
              x: Math.random() * screenWidth,
              y: Math.random() * screenHeight,
              scale: 0.5,
              opacity: 0
            }}
            animate={{
              x: [
                Math.random() * screenWidth,
                Math.random() * screenWidth,
                Math.random() * screenWidth,
                Math.random() * screenWidth,
                Math.random() * screenWidth,
                Math.random() * screenWidth,
                Math.random() * screenWidth
              ],
              y: [
                Math.random() * screenHeight,
                Math.random() * screenHeight,
                Math.random() * screenHeight,
                Math.random() * screenHeight,
                Math.random() * screenHeight,
                Math.random() * screenHeight,
                Math.random() * screenHeight
              ],
              scale: [0.5, 2.0, 0.6, 1.8, 0.8, 1.5, 1.0],
              opacity: [0, 0.9, 0.2, 0.8, 0.3, 0.7, 0.4],
              rotate: [0, 360, 720, 1080, 1440, 1800, 2160]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              delay: sticker.delay * 0.8,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              position: "absolute",
              transform: "translate(-50%, -50%)",
              width: "60px",
              height: "60px",
              border: `2px solid ${sticker.color}`,
              borderRadius: "50%",
              zIndex: 5,
              boxShadow: `0 0 15px ${sticker.color}40`
            }}
          />
        );
      })}

      {/* Moving stickers across entire page */}
      {stickers.map((sticker, index) => {
        const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
        const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
        
        // Different entry points: balanced distribution from left, right, and bottom
        const entryPoints = [
          { x: -200, y: screenHeight * 0.2 }, // Left side - upper
          { x: -200, y: screenHeight * 0.5 }, // Left side - middle
          { x: -200, y: screenHeight * 0.8 }, // Left side - lower
          { x: screenWidth + 200, y: screenHeight * 0.3 }, // Right side - upper
          { x: screenWidth + 200, y: screenHeight * 0.7 }, // Right side - lower
          { x: screenWidth * 0.3, y: screenHeight + 200 }, // Bottom left
          { x: screenWidth * 0.7, y: screenHeight + 200 } // Bottom right
        ];
        
        const entry = entryPoints[index];
        
        return (
          <motion.div
            key={`sticker-${index}`}
            className="sticker-wrapper"
            initial={{ 
              x: entry.x,
              y: entry.y,
              opacity: 0,
              scale: 0.3,
              rotate: 0
            }}
            animate={{
              x: [
                entry.x,
                Math.random() * screenWidth,
                Math.random() * screenWidth,
                Math.random() * screenWidth,
                Math.random() * screenWidth,
                Math.random() * screenWidth,
                Math.random() * screenWidth,
                Math.random() * screenWidth,
                Math.random() * screenWidth
              ],
              y: [
                entry.y,
                Math.random() * screenHeight,
                Math.random() * screenHeight,
                Math.random() * screenHeight,
                Math.random() * screenHeight,
                Math.random() * screenHeight,
                Math.random() * screenHeight,
                Math.random() * screenHeight,
                Math.random() * screenHeight
              ],
              opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1],
              scale: [0.3, 1.5, 0.5, 1.4, 0.6, 1.3, 0.7, 1.2, 1.0],
              rotate: [0, 180, -90, 270, -180, 360, -270, 450, 0]
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              delay: sticker.delay * 1.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              position: "absolute",
              zIndex: 15 + index
            }}
          >
            <motion.img
              src={sticker.src}
              alt={sticker.alt}
              className="moving-sticker-item"
              whileHover={{ 
                scale: 1.6, 
                rotate: 720,
                transition: { duration: 0.8 }
              }}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "contain",
                filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.3))",
                borderRadius: "50%",
                background: `radial-gradient(circle, ${sticker.color}25, transparent 70%)`,
                padding: "12px",
                cursor: "pointer",
                pointerEvents: "auto"
              }}
            />
          </motion.div>
        );
      })}
      
      {/* Floating hearts across entire page */}
      {[...Array(12)].map((_, i) => {
        const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
        const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
        
        return (
          <motion.div
            key={`heart-${i}`}
            initial={{
              x: Math.random() * screenWidth,
              y: screenHeight + 50,
              scale: 0
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
                screenHeight + 50,
                Math.random() * screenHeight,
                Math.random() * screenHeight,
                Math.random() * screenHeight,
                -100
              ],
              scale: [0, 1.2, 0.6, 1.5, 0.8, 1.0, 0],
              rotate: [0, 180, 360, 540, 720],
              opacity: [0, 1, 0.7, 1, 0.8, 0.6, 0]
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              delay: Math.random() * 15,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
            style={{
              position: "absolute",
              fontSize: "24px",
              zIndex: 5
            }}
          >
            💖
          </motion.div>
        );
      })}
    </div>
  );
}
