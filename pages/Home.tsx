
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import CountdownTimer from '../components/CountdownTimer';

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
            <h1 className="font-display font-black text-4xl sm:text-6xl md:text-9xl tracking-tighter mb-4 flex flex-wrap justify-center items-center gap-x-4 text-slate-900 leading-tight">
              <span className="text-primary italic">TEX</span>
              <span>PERIA</span>
              <span className="text-primary">2026</span>
            </h1>
            <div className="bg-black text-white px-6 py-2 rounded-full mb-8 shadow-xl transform -rotate-2 inline-flex items-center gap-2">
              <span className="font-display text-lg sm:text-xl md:text-2xl tracking-widest">
                "BEYOND <span className="text-primary">BOOKS</span>"
              </span>
              <span className="material-symbols-outlined text-primary">auto_stories</span>
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
        <h2 className="text-4xl md:text-5xl font-display font-black text-center mb-16 italic text-black uppercase tracking-tighter">Choose Your Path</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <DomainCard
            id="cs"
            title="COMPUTER SCIENCE DOMAIN"
            description="Explore hackathons, coding challenges, and tech workshops tailored for the digital future."
            bgLabel="CODE"
            accentColor="text-primary"
            icon="terminal"
            onClick={() => navigate('/cs')}
          />
          <DomainCard
            id="noncs"
            title="NON-COMPUTER DOMAIN"
            description="Mechanical, Electrical, Civil, and Management challenges designed for well-rounded innovation."
            bgLabel="CORE"
            accentColor="text-white"
            icon="settings_suggest"
            onClick={() => navigate('/non-cs')}
          />
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

const DomainCard = ({ title, description, bgLabel, accentColor, icon, onClick }: any) => (
  <div
    onClick={onClick}
    className="group relative cursor-pointer overflow-hidden rounded-[2.5rem] bg-zinc-950 aspect-square flex flex-col justify-end p-8 md:p-10 transition-all hover:-translate-y-2 border border-zinc-800 shadow-2xl"
  >
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <span className={`font-display font-black text-[12rem] md:text-[18rem] ${accentColor} opacity-10 group-hover:opacity-30 transition-opacity duration-500 tracking-tighter italic`}>
        {bgLabel}
      </span>
    </div>
    <div className="relative z-10">
      <div className={`w-14 h-14 md:w-16 md:h-16 ${accentColor.includes('primary') ? 'bg-primary/10' : 'bg-white/10'} rounded-2xl flex items-center justify-center mb-6`}>
        <span className={`material-symbols-outlined text-4xl md:text-5xl ${accentColor.includes('primary') ? 'text-primary' : 'text-white'}`}>{icon}</span>
      </div>
      <h3 className="text-4xl md:text-5xl font-display font-black mb-4 text-white leading-tight">{title}</h3>
      <p className="text-sm md:text-base text-zinc-400 max-w-md mb-8">{description}</p>
      <button className={`${accentColor.includes('primary') ? 'bg-primary' : 'bg-white'} text-black px-6 md:px-8 py-3 md:py-4 rounded-2xl font-black text-base md:text-lg flex items-center gap-3 group-hover:gap-6 transition-all uppercase`}>
        Explore Events <span className="material-symbols-outlined font-black">arrow_forward</span>
      </button>
    </div>
  </div>
);

export default Home;
