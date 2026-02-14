
import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const targetDate = new Date('2026-03-12T09:00:00').getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const TimerUnit = ({ value, label, showBorder = false }: { value: number; label: string; showBorder?: boolean }) => (
    <div className={`flex flex-col items-center ${showBorder ? 'md:border-l border-white/10' : ''} p-4 w-full`}>
      <div className="text-5xl md:text-8xl font-digital font-bold text-primary timer-glow leading-none">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-[10px] md:text-xs font-bold text-white/60 tracking-[0.3em] uppercase mt-4">
        {label}
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-4xl mb-12 bg-black p-4 md:p-12 rounded-3xl border-4 border-primary shadow-[0_0_50px_rgba(255,193,7,0.2)]">
      <p className="text-primary font-display font-bold tracking-[0.4em] text-sm md:text-base uppercase mb-8 text-center">Battle Begins In</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-0">
        <TimerUnit value={timeLeft.days} label="Days" />
        <TimerUnit value={timeLeft.hours} label="Hours" showBorder />
        <TimerUnit value={timeLeft.minutes} label="Minutes" showBorder />
        <TimerUnit value={timeLeft.seconds} label="Seconds" showBorder />
      </div>
    </div>
  );
};

export default CountdownTimer;
