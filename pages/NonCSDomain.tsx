
import React from 'react';
import { NON_CS_EVENTS } from '../constants';

const NonCSDomain: React.FC = () => {
  return (
    <div className="bg-background-light min-h-screen">
      <header className="relative pt-16 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <p className="font-script text-5xl text-primary mb-2">Non-CS Domain</p>
          <h1 className="font-accent text-7xl md:text-9xl tracking-tight leading-none mb-6 text-slate-900">
            INNOVATE <span className="text-primary">&amp;</span> BEYOND
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg md:text-xl font-medium">
            Exploring the realms of engineering, design, and culture. Where tradition meets future-tech innovation.
          </p>
        </div>
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 font-accent text-[20vw] opacity-5 whitespace-nowrap pointer-events-none select-none">
          ENGINEERING
        </div>
      </header>

      <section className="relative bg-primary text-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="font-accent text-6xl md:text-7xl mb-2">FEATURED EVENTS</h2>
              <p className="font-semibold uppercase tracking-widest text-secondary/70">Multidisciplinary Excellence</p>
            </div>
            <div className="flex gap-4">
              <Badge value="10+" label="Workshops Scheduled" dark />
              <Badge value="20+" label="Technical Challenges" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NON_CS_EVENTS.map(event => (
              <div key={event.id} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full border border-black/5">
                <div className="aspect-video relative overflow-hidden bg-zinc-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="material-icons text-7xl text-primary opacity-30 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500">
                      {event.icon}
                    </span>
                  </div>
                  {event.category && (
                    <div className="absolute top-6 left-6 bg-primary text-secondary font-black px-4 py-1.5 rounded-full text-[10px] uppercase tracking-wider">
                      {event.category}
                    </div>
                  )}
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="font-accent text-4xl mb-4 text-slate-900 leading-none">{event.title}</h3>
                  <p className="text-gray-600 text-base mb-8 flex-grow">
                    {event.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                    <span className="font-accent text-2xl text-slate-900">
                      {event.prizePool} <span className="text-xs font-montserrat font-bold text-gray-500 uppercase ml-1">Prizes</span>
                    </span>
                    <button className="bg-secondary text-primary hover:bg-zinc-800 px-8 py-2.5 rounded-xl font-black transition-all hover:scale-105 uppercase text-sm tracking-wider shadow-lg">
                      REGISTER
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 flex flex-col md:flex-row items-center justify-between gap-10 p-12 bg-secondary text-white rounded-[4rem] shadow-2xl relative overflow-hidden group">
            <div className="flex items-center gap-10 relative z-10">
              <div className="bg-white p-5 rounded-3xl rotate-3 group-hover:rotate-0 transition-transform shadow-xl">
                <img 
                  alt="Registration QR Code" 
                  className="w-24 h-24" 
                  src="https://picsum.photos/200/200?random=qr" 
                />
              </div>
              <div>
                <h4 className="font-accent text-4xl text-primary mb-2">SCAN TO REGISTER</h4>
                <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
                  Quick registration for all events. Early bird discounts available for team entries.
                </p>
              </div>
            </div>
            <div className="text-center md:text-right relative z-10">
              <p className="font-accent text-5xl leading-none opacity-50">PRIZE POOL UP TO</p>
              <p className="font-accent text-8xl text-primary leading-none tracking-tighter">10 LAKHS</p>
            </div>
            <div className="absolute right-0 bottom-0 text-[20rem] font-accent text-white opacity-5 select-none pointer-events-none -mb-20 -mr-10">
              WIN
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-accent text-7xl mb-12 text-slate-900 leading-none">GET IN <br/><span className="text-primary">TOUCH</span></h2>
              <div className="space-y-10">
                <ContactItem icon="call" label="Hotline" value="75503 16701 / 08" />
                <ContactItem icon="location_on" label="Venue" value="SNSCT, Coimbatore, TN" />
                <ContactItem icon="public" label="Website" value="www.snsgroups.com" isLink />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <InfoSquare icon="groups" value="5000+" label="Expected Footfall" />
              <InfoSquare icon="emoji_events" value="100+" label="Awards to win" primary />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Badge = ({ value, label, dark = false }: any) => (
  <div className={`${dark ? 'bg-secondary text-white' : 'bg-white/30 backdrop-blur-md border border-secondary/10'} px-8 py-5 rounded-2xl flex items-center gap-5 shadow-xl`}>
    <div className="text-5xl font-black font-display leading-none">{value}</div>
    <div className="text-[10px] uppercase font-bold leading-tight tracking-widest">{label.split(' ')[0]}<br/>{label.split(' ')[1]}</div>
  </div>
);

const ContactItem = ({ icon, label, value, isLink = false }: any) => (
  <div className="flex items-center gap-6 group">
    <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
      <span className="material-icons text-primary text-3xl group-hover:text-black transition-colors">{icon}</span>
    </div>
    <div>
      <p className="text-[10px] uppercase font-black text-gray-400 tracking-[0.3em] mb-1">{label}</p>
      {isLink ? (
        <a href="#" className="font-display font-bold text-2xl text-slate-800 hover:text-primary transition-colors underline decoration-primary decoration-2 underline-offset-4">{value}</a>
      ) : (
        <p className="font-display font-bold text-2xl text-slate-800">{value}</p>
      )}
    </div>
  </div>
);

const InfoSquare = ({ icon, value, label, primary = false }: any) => (
  <div className={`aspect-square ${primary ? 'bg-primary text-secondary' : 'bg-white text-secondary'} rounded-[3rem] border border-gray-100 p-10 flex flex-col justify-between shadow-2xl transition-transform hover:scale-105 duration-500`}>
    <span className={`material-icons text-5xl ${primary ? 'text-secondary' : 'text-primary'}`}>{icon}</span>
    <div>
      <p className="text-5xl font-black mb-1 leading-none tracking-tighter">{value}</p>
      <p className="text-[10px] uppercase font-bold opacity-60 tracking-[0.2em]">{label}</p>
    </div>
  </div>
);

export default NonCSDomain;
