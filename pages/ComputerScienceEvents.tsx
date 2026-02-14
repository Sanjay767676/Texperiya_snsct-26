import React from 'react';
import brandingImg from '../1000 Startups - SNS Group - GenAI 1.png';
import logo2 from '../logo2.png';

const ComputerScienceEvents: React.FC = () => {
    return (
        <div className="min-h-screen bg-background text-accent-black font-sans antialiased">
            <style dangerouslySetInnerHTML={{
                __html: `
        .cyber-grid {
            background-image: linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
            background-size: 60px 60px;
        }
        .title-bold {
            font-weight: 900;
            letter-spacing: -0.05em;
        }
        .department-underline {
            position: relative;
        }
        .department-underline::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 0;
            width: 80px;
            height: 6px;
            background-color: #FFC107;
        }
        .event-card-shadow {
            box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05);
        }
        .event-card-hover:hover {
            transform: translateY(-2px);
            border-color: #FFC107;
            box-shadow: 0 10px 25px -5px rgba(255, 193, 7, 0.2);
        }
      `}} />

            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-black/5">
                <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <div className="h-16 w-auto flex items-center">
                            <img src={logo2} alt="SNS College of Technology" className="h-full w-auto object-contain" />
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-accent-black flex items-center justify-center rounded-none rotate-3">
                                <span className="material-icons text-primary font-black -rotate-3">terminal</span>
                            </div>
                            <span className="text-2xl font-black tracking-tighter uppercase italic">TEXPERIA <span className="text-primary italic">2026</span></span>
                        </div>
                    </div>
                    <div className="hidden lg:flex items-center gap-10">
                        <a className="text-xs font-black tracking-widest uppercase text-accent-black hover:text-primary transition-colors" href="#cse">CSE</a>
                        <a className="text-xs font-black tracking-widest uppercase text-accent-black hover:text-primary transition-colors" href="#aiml">AIML</a>
                        <a className="text-xs font-black tracking-widest uppercase text-accent-black hover:text-primary transition-colors" href="#it">IT</a>
                        <a className="text-xs font-black tracking-widest uppercase text-accent-black hover:text-primary transition-colors" href="#aids">AI&DS</a>
                        <a className="text-xs font-black tracking-widest uppercase text-accent-black hover:text-primary transition-colors" href="#iot">CST/CSD/IoT</a>
                        <div className="flex items-center gap-6 h-14">
                            <img src={brandingImg} alt="Branding" className="h-full w-auto object-contain" />
                            <button className="bg-primary text-accent-black px-8 py-3 font-black text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all active:scale-95">Register Now</button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Header */}
            <header className="relative pt-48 pb-24 px-6 cyber-grid border-b border-black/5">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-block px-6 py-2 mb-8 bg-accent-black text-primary font-black text-xs uppercase tracking-[0.4em]">
                        Departmental Matrix
                    </div>
                    <h1 className="text-7xl md:text-9xl title-bold mb-8 uppercase leading-tight text-accent-black">
                        COMPUTER <br />
                        <span className="text-primary italic">SCIENCE</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
                        The epicenter of innovation at TEXPERIA 2026. Explore the cutting-edge competitions across five distinct engineering domains.
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 py-24 space-y-32">
                {/* CSE Section */}
                <section id="cse">
                    <div className="flex items-center gap-6 mb-16">
                        <h2 className="text-5xl md:text-7xl title-bold uppercase italic text-accent-black department-underline">CSE</h2>
                        <div className="h-[2px] flex-1 bg-black/5"></div>
                        <span className="text-sm font-black text-slate-400 uppercase tracking-[0.3em]">Main Branch</span>
                    </div>
                    <div className="bg-surface border border-black/5 p-8 md:p-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                            <div className="p-6 border border-black/10 bg-white event-card-shadow event-card-hover transition-all duration-300">
                                <h3 className="font-black text-lg uppercase mb-1">Idea Pitching</h3>
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">Strategic</p>
                            </div>
                            <div className="p-6 border border-black/10 bg-white event-card-shadow event-card-hover transition-all duration-300">
                                <h3 className="font-black text-lg uppercase mb-1">Capture the Flag</h3>
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">Security</p>
                            </div>
                            <div className="p-6 border border-black/10 bg-white event-card-shadow event-card-hover transition-all duration-300">
                                <h3 className="font-black text-lg uppercase mb-1">Appathon</h3>
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">Development</p>
                            </div>
                            <div className="p-6 border-2 border-primary bg-primary/5 event-card-shadow event-card-hover transition-all duration-300">
                                <h3 className="font-black text-lg uppercase mb-1 text-accent-black">Agentic AI</h3>
                                <p className="text-xs text-primary font-black uppercase tracking-tighter">Premium Workshop</p>
                            </div>
                            <div className="p-6 border border-black/10 bg-white event-card-shadow event-card-hover transition-all duration-300">
                                <h3 className="font-black text-lg uppercase mb-1">Mastermind</h3>
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">Quiz</p>
                            </div>
                            <div className="p-6 border border-black/10 bg-white event-card-shadow event-card-hover transition-all duration-300">
                                <h3 className="font-black text-lg uppercase mb-1">UI/UX</h3>
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">Design</p>
                            </div>
                            <div className="p-6 border border-black/10 bg-white event-card-shadow event-card-hover transition-all duration-300">
                                <h3 className="font-black text-lg uppercase mb-1">AI Prompt</h3>
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">Generative</p>
                            </div>
                            <div className="p-6 border border-black/10 bg-white event-card-shadow event-card-hover transition-all duration-300">
                                <h3 className="font-black text-lg uppercase mb-1">Workshop</h3>
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">Technical</p>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button className="bg-accent-black text-primary px-10 py-4 font-black text-sm uppercase tracking-widest hover:bg-primary hover:text-accent-black transition-colors">Register for CSE</button>
                        </div>
                    </div>
                </section>

                {/* AIML Section */}
                <section id="aiml">
                    <div className="flex items-center gap-6 mb-16">
                        <h2 className="text-5xl md:text-7xl title-bold uppercase italic text-accent-black department-underline">AIML</h2>
                        <div className="h-[2px] flex-1 bg-black/5"></div>
                        <span className="text-sm font-black text-slate-400 uppercase tracking-[0.3em]">Intelligence</span>
                    </div>
                    <div className="bg-surface border border-black/5 p-8 md:p-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            <div className="md:col-span-2 p-10 bg-accent-black border-2 border-primary flex items-center justify-between group">
                                <div>
                                    <h3 className="text-4xl font-black uppercase text-primary">8 Hours Software Hackathon</h3>
                                    <p className="text-sm font-bold uppercase text-white/60 tracking-widest mt-2">Premier AIML Event</p>
                                </div>
                                <span className="material-icons text-primary text-7xl group-hover:scale-110 transition-transform">psychology</span>
                            </div>
                            <div className="space-y-4">
                                <div className="p-6 border border-black/10 bg-white event-card-shadow"><h3 className="font-black uppercase text-accent-black">Solo Singing</h3></div>
                                <div className="p-6 border border-black/10 bg-white event-card-shadow"><h3 className="font-black uppercase text-accent-black">Group Singing</h3></div>
                            </div>
                            <div className="p-6 border border-black/10 bg-white event-card-shadow"><h3 className="font-black uppercase text-accent-black">Code Debugging</h3></div>
                            <div className="p-6 border border-black/10 bg-white event-card-shadow"><h3 className="font-black uppercase text-accent-black">Ad zap</h3></div>
                            <div className="p-6 border border-black/10 bg-white event-card-shadow"><h3 className="font-black uppercase text-accent-black">Workshop</h3></div>
                        </div>
                        <div className="flex justify-end">
                            <button className="bg-accent-black text-primary px-10 py-4 font-black text-sm uppercase tracking-widest hover:bg-primary hover:text-accent-black transition-colors">Register for AIML</button>
                        </div>
                    </div>
                </section>

                {/* IT Section */}
                <section id="it">
                    <div className="flex items-center gap-6 mb-16">
                        <h2 className="text-5xl md:text-7xl title-bold uppercase italic text-accent-black department-underline">IT</h2>
                        <div className="h-[2px] flex-1 bg-black/5"></div>
                        <span className="text-sm font-black text-slate-400 uppercase tracking-[0.3em]">Ecosystem</span>
                    </div>
                    <div className="bg-surface border border-black/5 p-8 md:p-12">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
                            <div className="col-span-2 p-8 border-2 border-accent-black bg-primary flex flex-col justify-end min-h-[180px] event-card-shadow">
                                <h3 className="text-3xl font-black uppercase text-accent-black">Memathon 3.0</h3>
                                <p className="text-xs font-black uppercase text-accent-black/60 tracking-tighter">Legendary Challenge</p>
                            </div>
                            <div className="p-6 border border-black/10 bg-white flex flex-col items-center justify-center text-center event-card-shadow event-card-hover transition-all">
                                <span className="material-icons text-primary mb-3 text-3xl">quiz</span>
                                <h3 className="font-black uppercase text-xs">Technical Quiz</h3>
                            </div>
                            <div className="p-6 border border-black/10 bg-white flex flex-col items-center justify-center text-center event-card-shadow event-card-hover transition-all">
                                <span className="material-icons text-primary mb-3 text-3xl">code</span>
                                <h3 className="font-black uppercase text-xs">Hunt the code</h3>
                            </div>
                            <div className="p-6 border border-black/10 bg-white flex flex-col items-center justify-center text-center event-card-shadow event-card-hover transition-all">
                                <span className="material-icons text-primary mb-3 text-3xl">mood</span>
                                <h3 className="font-black uppercase text-xs">Emoji Story</h3>
                            </div>
                            <div className="p-6 border border-black/10 bg-white flex flex-col items-center justify-center text-center event-card-shadow event-card-hover transition-all">
                                <span className="material-icons text-primary mb-3 text-3xl">terminal</span>
                                <h3 className="font-black uppercase text-xs">Webathon</h3>
                            </div>
                            <div className="p-6 border border-black/10 bg-white flex flex-col items-center justify-center text-center event-card-shadow event-card-hover transition-all">
                                <span className="material-icons text-primary mb-3 text-3xl">music_note</span>
                                <h3 className="font-black uppercase text-xs">Vibe Ops</h3>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button className="bg-accent-black text-primary px-10 py-4 font-black text-sm uppercase tracking-widest hover:bg-primary hover:text-accent-black transition-colors">Register for IT</button>
                        </div>
                    </div>
                </section>

                {/* AI&DS Section */}
                <section id="aids">
                    <div className="flex items-center gap-6 mb-16">
                        <h2 className="text-5xl md:text-7xl title-bold uppercase italic text-accent-black department-underline">AI&DS</h2>
                        <div className="h-[2px] flex-1 bg-black/5"></div>
                        <span className="text-sm font-black text-slate-400 uppercase tracking-[0.3em]">Data Science</span>
                    </div>
                    <div className="bg-surface border border-black/5 p-8 md:p-12">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
                            <div className="p-8 bg-white border border-black/10 border-l-8 border-l-primary event-card-shadow event-card-hover transition-all group">
                                <h3 className="text-xl font-black uppercase text-accent-black group-hover:text-primary transition-colors">3D Design contest</h3>
                            </div>
                            <div className="p-8 bg-white border border-black/10 border-l-8 border-l-primary event-card-shadow event-card-hover transition-all group">
                                <h3 className="text-xl font-black uppercase text-accent-black group-hover:text-primary transition-colors">AI Comic Strip</h3>
                            </div>
                            <div className="p-8 bg-white border border-black/10 border-l-8 border-l-primary event-card-shadow event-card-hover transition-all group">
                                <h3 className="text-xl font-black uppercase text-accent-black group-hover:text-primary transition-colors">Crack the Code</h3>
                            </div>
                            <div className="p-8 bg-white border border-black/10 border-l-8 border-l-primary event-card-shadow event-card-hover transition-all group">
                                <h3 className="text-xl font-black uppercase text-accent-black group-hover:text-primary transition-colors">AI-Artathon</h3>
                            </div>
                            <div className="p-8 bg-white border border-black/10 border-l-8 border-l-primary event-card-shadow event-card-hover transition-all group">
                                <h3 className="text-xl font-black uppercase text-accent-black group-hover:text-primary transition-colors">Code Rush</h3>
                            </div>
                            <div className="p-8 bg-white border border-black/10 border-l-8 border-l-primary event-card-shadow event-card-hover transition-all group">
                                <h3 className="text-xl font-black uppercase text-accent-black group-hover:text-primary transition-colors">Prompt Idol</h3>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button className="bg-accent-black text-primary px-10 py-4 font-black text-sm uppercase tracking-widest hover:bg-primary hover:text-accent-black transition-colors">Register for AI&DS</button>
                        </div>
                    </div>
                </section>

                {/* IOT Section */}
                <section id="iot">
                    <div className="flex items-center gap-6 mb-16">
                        <h2 className="text-5xl md:text-7xl title-bold uppercase italic text-accent-black department-underline">CST/CSD/IoT</h2>
                        <div className="h-[2px] flex-1 bg-black/5"></div>
                        <span className="text-sm font-black text-slate-400 uppercase tracking-[0.3em]">Hardware</span>
                    </div>
                    <div className="bg-surface border border-black/5 p-8 md:p-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-12">
                            <div className="p-5 border border-black/10 bg-white event-card-shadow hover:border-primary transition-colors"><h3 className="font-black text-xs uppercase tracking-widest">Stream Lit Workshop</h3></div>
                            <div className="p-5 border border-black/10 bg-white event-card-shadow hover:border-primary transition-colors"><h3 className="font-black text-xs uppercase tracking-widest">Cyber Security</h3></div>
                            <div className="p-5 border border-black/10 bg-white event-card-shadow hover:border-primary transition-colors"><h3 className="font-black text-xs uppercase tracking-widest">Game Design</h3></div>
                            <div className="p-5 border border-black/10 bg-white event-card-shadow hover:border-primary transition-colors"><h3 className="font-black text-xs uppercase tracking-widest">Paper Presentation</h3></div>
                            <div className="p-5 border border-black/10 bg-white event-card-shadow hover:border-primary transition-colors"><h3 className="font-black text-xs uppercase tracking-widest">e Sportz</h3></div>
                            <div className="p-5 border border-black/10 bg-white event-card-shadow hover:border-primary transition-colors"><h3 className="font-black text-xs uppercase tracking-widest">Photography</h3></div>
                            <div className="p-5 border border-black/10 bg-white event-card-shadow hover:border-primary transition-colors"><h3 className="font-black text-xs uppercase tracking-widest">Connection</h3></div>
                            <div className="p-5 border border-black/10 bg-white event-card-shadow hover:border-primary transition-colors"><h3 className="font-black text-xs uppercase tracking-widest">Short Film</h3></div>
                            <div className="p-5 col-span-2 md:col-span-1 border-2 border-accent-black bg-primary text-accent-black"><h3 className="font-black text-xs uppercase tracking-widest">BUG BOUNTY</h3></div>
                        </div>
                        <div className="flex justify-end">
                            <button className="bg-accent-black text-primary px-10 py-4 font-black text-sm uppercase tracking-widest hover:bg-primary hover:text-accent-black transition-colors">Register for CST/CSD/IoT</button>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-accent-black text-white py-24">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary flex items-center justify-center">
                                <span className="material-icons text-accent-black font-black">terminal</span>
                            </div>
                            <span className="text-2xl font-black uppercase italic">TEXPERIA <span className="text-primary italic">2026</span></span>
                        </div>
                        <p className="text-slate-400 font-medium leading-relaxed">
                            Empowering the next generation of engineers through rigorous competition and collaborative learning.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-2">Connect</h4>
                        <div className="flex gap-4">
                            <a className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-primary hover:text-accent-black transition-all" href="#">
                                <span className="material-icons">share</span>
                            </a>
                            <a className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-primary hover:text-accent-black transition-all" href="#">
                                <span className="material-icons">mail</span>
                            </a>
                            <a className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-primary hover:text-accent-black transition-all" href="#">
                                <span className="material-icons">language</span>
                            </a>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-primary font-black uppercase tracking-[0.3em] text-xs">Action Center</h4>
                        <button className="w-full bg-primary text-accent-black px-10 py-5 font-black uppercase tracking-widest hover:bg-white transition-all">
                            Main Registration Portal
                        </button>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-white/5 text-center text-slate-500 text-xs font-black uppercase tracking-widest">
                    © 2026 TEXPERIA • COMPUTER SCIENCE DOMAIN • ALL RIGHTS RESERVED
                </div>
            </footer>
        </div>
    );
};

export default ComputerScienceEvents;
