
import React, { useEffect, useRef, useState } from 'react';

export const AnimatedCursiveText: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAnimating(true);
        } else {
          // Reset when scrolling away to allow re-triggering for UX
          setIsAnimating(false);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className="inline-block relative transform -translate-y-1 md:-translate-y-2 w-full max-w-[330px] md:max-w-[660px]" 
    >
      <svg 
        viewBox="0 0 660 120" 
        className="w-full h-auto pointer-events-none drop-shadow-[0_0_15px_rgba(192,132,252,0.3)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="apple-hello-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="50%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#f472b6" />
          </linearGradient>
          
          <filter id="hollow-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* The Animated Stroke (The "Drawing" part) - This is the "Hollow" look */}
        <text
          x="330"
          y="90"
          textAnchor="middle"
          fill="none"
          stroke="url(#apple-hello-gradient)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#hollow-glow)"
          style={{
            strokeDasharray: 2500,
            strokeDashoffset: isAnimating ? 0 : 2500,
            transition: isAnimating 
              ? 'stroke-dashoffset 3.8s cubic-bezier(0.45, 0.05, 0.55, 0.95)' 
              : 'none',
          }}
          className="font-cursive text-[60px] md:text-[80px]"
        >
          Ethanol AI Mining
        </text>

        {/* Subtle persistent outline that fades in after the draw, ensuring the text remains clear but hollow */}
        <text
          x="330"
          y="90"
          textAnchor="middle"
          fill="transparent"
          stroke="url(#apple-hello-gradient)"
          strokeWidth="0.5"
          className={`font-cursive text-[60px] md:text-[80px] transition-opacity duration-1000 delay-[3000ms] ${isAnimating ? 'opacity-40' : 'opacity-0'}`}
        >
          Ethanol AI Mining
        </text>
      </svg>
      
      {/* Decorative reflection line beneath the cursive */}
      <div 
        className={`absolute -bottom-1 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent transition-all duration-1500 delay-[3200ms] origin-center ${isAnimating ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}
      />
    </div>
  );
};
