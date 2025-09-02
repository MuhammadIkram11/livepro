import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function StickerAnimation() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    // Set animation complete after 4 seconds
    const timer = setTimeout(() => {
      setIsAnimationComplete(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const cornerStickers = [
    { id: 1, src: "/final-stickers/img1.png", position: "top-left" },
    { id: 2, src: "/final-stickers/img2.png", position: "top-right" },
    { id: 4, src: "/final-stickers/img4.png", position: "bottom-left" },
    { id: 5, src: "/final-stickers/img5.png", position: "bottom-right" },
  ];

  const getCornerPosition = (position) => {
    switch (position) {
      case "top-left":
        return { top: "20px", left: "20px" };
      case "top-right":
        return { top: "20px", right: "20px" };
      case "bottom-left":
        return { bottom: "20px", left: "20px" };
      case "bottom-right":
        return { bottom: "20px", right: "20px" };
      default:
        return {};
    }
  };

  return (
    <div className="sticker-animation-container">
      {/* Corner stickers that settle in positions */}
      {cornerStickers.map((sticker) => (
        <motion.img
          key={sticker.id}
          src={sticker.src}
          alt={`Sticker ${sticker.id}`}
          className="corner-sticker"
          style={getCornerPosition(sticker.position)}
          initial={{ 
            y: "100vh", 
            opacity: 0,
            scale: 0.5 
          }}
          animate={isAnimationComplete ? {
            y: 0,
            opacity: 1,
            scale: (sticker.position === "bottom-left" || sticker.position === "bottom-right") ? 1.5 : 1,
            ...getCornerPosition(sticker.position)
          } : {
            y: ["100vh", "-20vh", "0vh"],
            opacity: [0, 1, 1],
            scale: (sticker.position === "bottom-left" || sticker.position === "bottom-right") ? [0.5, 1.8, 1.5] : [0.5, 1.2, 1],
            x: ["0px", `${Math.random() * 200 - 100}px`, "0px"]
          }}
          transition={{
            duration: 3,
            delay: sticker.id * 0.3,
            ease: "easeOut"
          }}
        />
      ))}

      {/* img3 that orbits around the main heading */}
      <motion.img
        src="/final-stickers/img3.png"
        alt="Moving Sticker 3"
        className="moving-sticker"
        initial={{ 
          y: "120vh", // Start from bottom off-screen
          opacity: 0,
          scale: 0.5,
          x: "50vw"
        }}
        animate={{
          y: isAnimationComplete ? [
            "32vh", // Above heading - top
            "35vh", // Around heading - top right
            "40vh", // Around heading - right
            "45vh", // Around heading - bottom right
            "48vh", // Below heading - bottom
            "45vh", // Around heading - bottom left
            "40vh", // Around heading - left
            "35vh"  // Around heading - top left
          ] : ["120vh", "40vh"], // Enter from bottom to heading area
          opacity: [0, 1, 1, 1, 1, 1, 1, 1],
          scale: isAnimationComplete ? [
            1, 1.1, 0.9, 1.05, 0.95, 1.08, 1.02, 1
          ] : [0.5, 1],
          x: isAnimationComplete ? [
            "50vw", // Heading center
            "65vw", // Around heading - top right
            "70vw", // Around heading - right
            "65vw", // Around heading - bottom right
            "50vw", // Around heading - bottom
            "35vw", // Around heading - bottom left
            "30vw", // Around heading - left
            "35vw"  // Around heading - top left
          ] : ["50vw", "50vw"], // Stay centered during entrance
          rotate: isAnimationComplete ? [0, 45, 90, 135, 180, 225, 270, 315, 360] : [0, 0]
        }}
        transition={{
          duration: isAnimationComplete ? 12 : 3,
          delay: isAnimationComplete ? 0 : 1.2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: isAnimationComplete ? "loop" : "none"
        }}
        style={{
          position: "absolute",
          width: "80px",
          height: "80px",
          zIndex: 20
        }}
      />
    </div>
  );
}
