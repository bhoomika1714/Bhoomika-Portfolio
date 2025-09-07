import { useEffect } from "react";

export default function CosmicBackground() {
  useEffect(() => {
    // Create animated stars background
    const starsContainer = document.getElementById('stars');
    if (!starsContainer) return;

    const numStars = 100;
    
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.width = Math.random() * 3 + 1 + 'px';
      star.style.height = star.style.width;
      star.style.animationDelay = Math.random() * 3 + 's';
      starsContainer.appendChild(star);
    }

    return () => {
      // Cleanup stars
      const stars = starsContainer.querySelectorAll('.star');
      stars.forEach(star => star.remove());
    };
  }, []);

  return (
    <>
      <div className="cosmic-bg" />
      <div className="nebula" />
      <div className="nebula2" />
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]" id="stars" />
    </>
  );
}
