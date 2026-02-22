import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import CountdownTimer from '../components/CountdownTimer';
import image1 from '../images/image1.png';

gsap.registerPlugin(TextPlugin);

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
  const headerRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      // Simple scramble-like effect using GSAP
      const text = "TEXPERIA 2026";
      gsap.to(headerRef.current, {
        duration: 2,
        text: {
          value: text,
          delimiter: ""
        },
        ease: "none",
        delay: 0.5
      });
    }

    // GSAP Background Data Stream Animation
    const streamElements = document.querySelectorAll('.data-stream-item');
    streamElements.forEach((el, i) => {
      gsap.to(el, {
        x: '100vw',
        duration: 15 + Math.random() * 20,
        repeat: -1,
        ease: 'none',
        delay: -Math.random() * 20
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-white font-space relative overflow-x-hidden">
      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800;900&display=swap');
        
        .cyber-grid {
            background-image: linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
            background-size: 60px 60px;
        }
        .font-space {
            font-family: 'Space Grotesk', sans-serif;
        }
        @keyframes scanline {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(1000%); }
        }
        @keyframes float {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            33% { transform: translate(10px, -15px) rotate(5deg); }
            66% { transform: translate(-5px, 10px) rotate(-3deg); }
        }
        .scan-line {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100px;
            background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.03), transparent);
            pointer-events: none;
            z-index: 1;
            animation: scanline 12s linear infinite;
        }
        .data-fragment {
            position: fixed;
            color: rgba(0, 0, 0, 0.05);
            font-family: monospace;
            font-size: 10px;
            pointer-events: none;
            z-index: 0;
            animation: float 20s ease-in-out infinite;
        }
        .corner-bracket {
            position: absolute;
            width: 10px;
            height: 10px;
            border-color: black;
            pointer-events: none;
        }
        .bracket-tl { top: 12px; left: 12px; border-top: 2px solid; border-left: 2px solid; }
        .bracket-tr { top: 12px; right: 12px; border-top: 2px solid; border-right: 2px solid; }
        .bracket-bl { bottom: 12px; left: 12px; border-bottom: 2px solid; border-left: 2px solid; }
        .bracket-br { bottom: 12px; right: 12px; border-bottom: 2px solid; border-right: 2px solid; }
      `}} />

      {/* Animated Background Layers */}
      <div className="scan-line"></div>
      <div className="data-fragment" style={{ top: '15%', left: '5%' }}>[ SYSTEM_ONLINE ]</div>
      <div className="data-fragment" style={{ top: '45%', right: '8%', animationDelay: '-5s' }}>[ TEX_2026_CORE ]</div>
      <div className="data-fragment" style={{ bottom: '20%', left: '12%', animationDelay: '-12s' }}>0110 1111 0101</div>
      <div className="data-fragment" style={{ top: '80%', right: '25%', animationDelay: '-8s' }}>MTX-GLOBAL-SCAN</div>
      {/* GSAP Data Stream Overlays */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-10">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="data-stream-item absolute whitespace-nowrap font-mono text-[10px] text-black"
            style={{ top: `${i * 10}%`, left: '-50vw' }}
          >
            {Array(5).fill("01011001 11001010 MTX-SECURE-NODE-DATA-PACKET-V3.2 [PROCESS_ACTIVE]").join(" ")}
          </div>
        ))}
      </div>

      {/* Animated Background Layers */}
      <div className="scan-line"></div>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative pt-16 pb-8 lg:pt-24 cyber-grid"
      >
        <div className="absolute top-0 right-0 -z-10 opacity-20">
          <motion.h1
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 0.2 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[20rem] font-space font-black leading-none select-none"
          >
            TEX
          </motion.h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-block bg-primary px-4 py-1 mb-6 rounded shadow-sm relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="text-black font-dirtyline tracking-[0.2em] uppercase text-xs relative z-10">National Level Symposium</span>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 15, delay: 0.6 }}
              className="w-full max-w-[400px] sm:max-w-lg md:max-w-5xl lg:max-w-6xl mx-auto mb-10 px-4 transform hover:scale-[1.02] transition-transform duration-500"
            >
              <img
                src={image1}
                alt="Texperia 2026 - Beyond Books"
                className="w-full h-auto object-contain mx-auto drop-shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <CountdownTimer />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 w-full max-w-2xl mb-16">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <InfoCard icon="calendar_month" title="Event Date" detail="12 & 13 MARCH 2026" id="DATE-V1" />
              </motion.div>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <InfoCard icon="location_on" title="Location" detail="SNSCT, COIMBATORE" id="LOC-V1" />
              </motion.div>
            </div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative w-full max-w-4xl group"
            >
              <div className="bg-black text-white p-6 md:p-12 rounded-[2rem] flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 shadow-2xl relative z-10 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                <div className="corner-bracket bracket-tl border-white"></div>
                <div className="corner-bracket bracket-tr border-white"></div>
                <div className="corner-bracket bracket-bl border-white"></div>
                <div className="corner-bracket bracket-br border-white"></div>
                <div className="text-center md:text-left">
                  <h2 className="text-3xl md:text-5xl font-space font-black leading-none uppercase">PRIZE <br className="hidden md:block" /> POOL</h2>
                </div>
                <div className="h-1 w-20 md:h-20 md:w-1 bg-primary"></div>
                <div className="flex items-baseline gap-2">
                  <span className="text-primary font-space text-6xl sm:text-8xl md:text-[8rem] font-black leading-none">10</span>
                  <span className="text-white font-space text-2xl sm:text-4xl md:text-6xl font-bold uppercase italic">Lakhs</span>
                </div>
                <div className="absolute top-4 right-6 text-[8px] font-mono text-white/20 uppercase tracking-widest hidden md:block">MTX-AWARD-PRCL.v3</div>
              </div>
              <div className="absolute inset-0 bg-primary translate-x-3 translate-y-3 rounded-[2rem] -z-10 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="bg-primary py-12 mt-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-[8px] tracking-[0.4em] uppercase hidden md:block">Analytics: Matrix_v3</div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem value={80} label="Technical Events" delay={0.2} />
            <StatItem value={20} label="Non-Technical" delay={0.4} />
            <StatItem value={10} label="Workshops" delay={0.6} />
            <StatItem value={5} label="Cultural Events" delay={0.8} />
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-4xl font-space font-medium text-center mb-16 text-slate-800 tracking-tight"
        >
          Choose Your Path
        </motion.h2>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-16">
          {/* Computer Science Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            onClick={() => navigate('/cs')}
            className="group relative w-full sm:w-auto px-10 py-5 bg-white hover:bg-primary border-[3px] border-black rounded-[18px_32px_15px_28px] flex items-center justify-between sm:justify-center gap-6 transition-all hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] active:shadow-none"
          >
            <div className="corner-bracket bracket-tl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="corner-bracket bracket-br opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="text-2xl md:text-3xl font-space font-black text-black tracking-tight italic uppercase">Computer Science</span>
            <span className="material-symbols-outlined text-4xl text-black group-hover:translate-x-2 transition-transform duration-300">arrow_forward</span>
          </motion.button>

          {/* Non-Computer Science Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            onClick={() => navigate('/non-cs')}
            className="group relative w-full sm:w-auto px-10 py-5 bg-white hover:bg-primary border-[3px] border-black rounded-[28px_15px_32px_18px] flex items-center justify-between sm:justify-center gap-6 transition-all hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] active:shadow-none"
          >
            <div className="corner-bracket bracket-tr opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="corner-bracket bracket-bl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="text-2xl md:text-3xl font-space font-black text-black tracking-tight italic transition-colors uppercase">Non Computer Science</span>
            <span className="material-symbols-outlined text-4xl text-black group-hover:translate-x-2 transition-all duration-300">arrow_forward</span>
          </motion.button>
        </div>
      </section>
    </div>
  );
};

const InfoCard = ({ icon, title, detail, id }: { icon: string; title: string; detail: string; id: string }) => (
  <div className="flex items-center gap-4 bg-white p-6 rounded-2xl border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group">
    <div className="corner-bracket bracket-tl"></div>
    <div className="corner-bracket bracket-tr"></div>
    <span className="material-symbols-outlined text-4xl text-primary relative z-10">{icon}</span>
    <div className="text-left relative z-10">
      <p className="text-[10px] uppercase opacity-60 font-black tracking-widest">{title}</p>
      <p className="text-lg font-space font-black text-slate-900 tracking-tight">{detail}</p>
    </div>
    <div className="absolute bottom-2 right-4 text-[7px] font-mono font-bold text-black/20 uppercase tracking-tighter">{id}</div>
  </div>
);

const StatItem = ({ value, label, delay }: { value: number; label: string; delay: number }) => {
  const { count, elementRef } = useCountUp(value);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
      ref={elementRef}
    >
      <p className="text-4xl md:text-5xl font-space font-black text-black">
        {count.toString().padStart(2, '0')}+
      </p>
      <p className="text-black font-bold uppercase text-[10px] tracking-wider">{label}</p>
    </motion.div>
  );
};


export default Home;
