import React from "react"
import animationData from "../photos/animated-background.json"
import Lottie from "lottie-react"

export default function animatedBackground() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
    speed: 0.5, 
  };
  return (
    
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
      <Lottie options={defaultOptions} animationData={animationData} />
    </div>
    
  )
}