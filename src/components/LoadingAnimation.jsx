import React from "react"
import Lottie from 'lottie-react';
import loadingAnimation from "../photos/loading-animation.json"

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500) 

    return () => clearTimeout(timer);
  }, [])

  return isLoading ? (
    <div className="loading-animation-page">
      <Lottie animationData={loadingAnimation} />
    </div>
  ) : null
}