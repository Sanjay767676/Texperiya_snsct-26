import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ScrollingBanner: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!textRef.current || !containerRef.current) return;

      const textWidth = textRef.current.offsetWidth;
      const containerWidth = containerRef.current.offsetWidth;
      
      // Ensure the animation starts from the left edge and scrolls to the right edge
      // To create a continuous feel, we use a large enough duplicated group of text
      gsap.fromTo(
        textRef.current,
        { x: -textWidth / 2 }, // Start with the first half visible or ready to enter
        {
          x: 0,
          duration: 20,
          repeat: -1,
          ease: 'none',
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const message = (
    <>
      <span className="mx-8">No on-spot registration</span>
      <span className="text-white/30 tracking-normal">•</span>
      <span className="mx-8">Participant must bring ID Card</span>
      <span className="text-white/30 tracking-normal">•</span>
    </>
  );

  return (
    <div
      ref={containerRef}
      className="w-full bg-slate-900 py-3 overflow-hidden relative border-b border-primary/20 z-40"
    >
      <div
        ref={textRef}
        className="whitespace-nowrap inline-block font-display text-primary text-base md:text-xl font-bold uppercase tracking-[0.2em]"
      >
        {message}
        {message}
        {message}
        {message}
      </div>
      
      {/* Decorative gradients for edges */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-900 via-slate-900/50 to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-900 via-slate-900/50 to-transparent z-10"></div>
    </div>
  );
};

export default ScrollingBanner;
