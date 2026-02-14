
import React from 'react';
import { CS_EVENTS } from '../constants';

const CSDomain: React.FC = () => {
  return (
    <div className="bg-background-light min-h-screen">
      <header className="relative py-16 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="font-handwriting text-primary text-4xl md:text-5xl mb-4">Significant</h2>
          <h1 className="font-display text-5xl md:text-8xl font-black text-slate-900 uppercase tracking-tighter mb-6 leading-none">
            COMPUTER SCIENCE <br/> <span className="text-primary">DOMAIN</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-600 font-medium text-lg">
            Push your boundaries "Beyond Books" with our core technical challenges designed for the next generation of software engineers.
          </p>
        </div>
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <StatBox value="05+" label="Core Events" />
          <StatBox value="₹50K+" label="CS Prize Pool" isBorded />
          <StatBox value="10+" label="Mentors" isBorded />
          <StatBox value="24H" label="Hackathon" isBorded />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CS_EVENTS.map(event => (
            <div key={event.id} className="event-card-hover group bg-white rounded-3xl overflow-hidden border-2 border-transparent hover:border-primary transition-all shadow-lg hover:shadow-primary/5">
              <div className="p-8">
                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-icons text-primary text-3xl">{event.icon}</span>
                </div>
                <h3 className="font-display text-2xl font-black text-slate-900 uppercase mb-4 leading-tight">{event.title}</h3>
                <p className="text-slate-600 mb-8 line-clamp-3">
                  {event.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Prize Pool</span>
                    <span className="font-bold text-primary text-xl">{event.prizePool}</span>
                  </div>
                  <button className="bg-primary hover:bg-yellow-500 text-black px-6 py-2 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-lg shadow-primary/20">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 poster-gradient rounded-[3rem] p-10 md:p-16 text-center text-slate-900 relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-5xl font-black uppercase mb-6 leading-tight">Want to participate in everything?</h2>
            <p className="mb-10 font-medium max-w-2xl mx-auto text-lg opacity-90">
              Grab the All-Access Pass for CS Domain at a discounted price and get entry to all events listed above plus exclusive networking lunches.
            </p>
            <button className="bg-black text-white px-12 py-5 rounded-full font-bold uppercase tracking-wider hover:bg-slate-800 transition-all hover:scale-105 shadow-2xl">
              Get All-Access Pass
            </button>
          </div>
          <span className="absolute -bottom-12 -right-12 font-display text-[15rem] font-black text-black opacity-5 pointer-events-none select-none italic">CS</span>
        </div>
      </main>
    </div>
  );
};

const StatBox = ({ value, label, isBorded = false }: any) => (
  <div className={`text-center ${isBorded ? 'md:border-l' : ''} border-gray-100 p-2`}>
    <span className="block text-4xl font-black font-display text-primary leading-none mb-2">{value}</span>
    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{label}</span>
  </div>
);

export default CSDomain;
