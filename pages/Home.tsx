
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import CountdownTimer from '../components/CountdownTimer';
import image1 from '../images/image1.png';

const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [started, end, duration]);

  return { count, elementRef };
};

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden">
      <section className="relative pt-16 pb-8 lg:pt-24">
        <div className="absolute top-0 right-0 -z-10 opacity-20">
          <h1 className="text-[20rem] font-display font-black leading-none select-none">TEX</h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="inline-block bg-primary px-4 py-1 mb-6 rounded shadow-sm">
              <span className="text-black font-bold tracking-widest uppercase text-[10px]">National Level Symposium</span>
            </div>
            <div className="w-full max-w-[350px] sm:max-w-lg md:max-w-3xl lg:max-w-4xl mx-auto mb-10 px-4 transform hover:scale-[1.02] transition-transform duration-500">
              <img
                src={image1}
                alt="Texperia 2026 - Beyond Books"
                className="w-full h-auto object-contain mx-auto drop-shadow-2xl"
              />
            </div>

            <CountdownTimer />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 w-full max-w-2xl mb-16">
              <InfoCard icon="calendar_month" title="Event Date" detail="12 & 13 MARCH 2026" />
              <InfoCard icon="location_on" title="Location" detail="SNSCT, COIMBATORE" />
            </div>

            <div className="relative w-full max-w-4xl group">
              <div className="bg-black text-white p-6 md:p-12 rounded-[2rem] flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 shadow-2xl relative z-10 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                <div className="text-center md:text-left">
                  <h2 className="text-3xl md:text-5xl font-display font-black leading-none uppercase">PRIZE <br className="hidden md:block" /> POOL</h2>
                </div>
                <div className="h-1 w-20 md:h-20 md:w-1 bg-primary"></div>
                <div className="flex items-baseline gap-2">
                  <span className="text-primary font-display text-6xl sm:text-8xl md:text-[8rem] font-black leading-none">10</span>
                  <span className="text-white font-display text-2xl sm:text-4xl md:text-6xl font-bold uppercase italic">Lakhs</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-primary translate-x-3 translate-y-3 rounded-[2rem] -z-10 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem value={80} label="Technical Events" />
            <StatItem value={20} label="Non-Technical" />
            <StatItem value={10} label="Workshops" />
            <StatItem value={5} label="Cultural Events" />
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-4xl font-display font-medium text-center mb-16 text-slate-800 tracking-tight">Choose Your Path</h2>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-16">
          {/* Computer Science Button */}
          <button
            onClick={() => navigate('/cs')}
            className="group relative w-full sm:w-auto px-10 py-5 bg-white hover:bg-primary border-[3px] border-black rounded-[18px_32px_15px_28px] flex items-center justify-between sm:justify-center gap-6 transition-all hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-0 active:shadow-none"
          >
            <span className="text-2xl md:text-3xl font-display font-bold text-black tracking-tight italic">Computer Science</span>
            <span className="material-symbols-outlined text-4xl text-black group-hover:translate-x-2 transition-transform duration-300">arrow_forward</span>
          </button>

          {/* Non-Computer Science Button */}
          <button
            onClick={() => navigate('/non-cs')}
            className="group relative w-full sm:w-auto px-10 py-5 bg-white hover:bg-primary border-[3px] border-black rounded-[28px_15px_32px_18px] flex items-center justify-between sm:justify-center gap-6 transition-all hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-0 active:shadow-none"
          >
            <span className="text-2xl md:text-3xl font-display font-bold text-black tracking-tight italic transition-colors">Non Computer Science</span>
            <span className="material-symbols-outlined text-4xl text-black group-hover:translate-x-2 transition-all duration-300">arrow_forward</span>
          </button>
        </div>
      </section>
    </div>
  );
};

const InfoCard = ({ icon, title, detail }: { icon: string; title: string; detail: string }) => (
  <div className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
    <span className="material-symbols-outlined text-4xl text-primary">{icon}</span>
    <div className="text-left">
      <p className="text-[10px] uppercase opacity-60 font-bold">{title}</p>
      <p className="text-lg font-display font-bold text-slate-900">{detail}</p>
    </div>
  </div>
);

const StatItem = ({ value, label }: { value: number; label: string }) => {
  const { count, elementRef } = useCountUp(value);
  return (
    <div className="text-center" ref={elementRef}>
      <p className="text-4xl md:text-5xl font-display font-black text-black">
        {count.toString().padStart(2, '0')}+
      </p>
      <p className="text-black font-bold uppercase text-[10px] tracking-wider">{label}</p>
    </div>
  );
};


export default Home;
