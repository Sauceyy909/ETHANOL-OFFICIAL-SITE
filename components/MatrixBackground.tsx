
import React, { useEffect, useRef } from 'react';

export const MatrixBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Characters for the matrix rain
    const characters = 'ETHANOL0101C2H5OHAI';
    const fontSize = 18;
    const columns = Math.ceil(width / fontSize);
    const drops: number[] = new Array(columns).fill(0).map(() => Math.random() * -100);

    let hue = 200; // Initial blue-ish hue

    const draw = () => {
      // Create a fading effect to leave trails
      // Using a very low alpha to make the trails longer and the color transitions smoother
      ctx.fillStyle = 'rgba(2, 6, 23, 0.15)';
      ctx.fillRect(0, 0, width, height);

      // Cycle the hue for the color-changing effect
      hue = (hue + 0.3) % 360;
      
      // Set the font style
      ctx.font = `bold ${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        
        // Vary the brightness slightly for more depth
        const brightness = Math.random() > 0.9 ? 80 : 50;
        ctx.fillStyle = `hsla(${hue}, 80%, ${brightness}%, 0.8)`;
        
        // Draw the character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to top when it hits the bottom
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        // Move the drop down
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 45);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      const newColumns = Math.ceil(width / fontSize);
      
      // Re-initialize drops to avoid artifacts on resize
      const newDrops = new Array(newColumns).fill(0).map(() => Math.random() * -50);
      drops.length = 0;
      drops.push(...newDrops);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none opacity-60"
      style={{ filter: 'blur(0.5px)' }} // Slight blur for a more glowy "digital" look
    />
  );
};
