import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const ComputerScienceEvents: React.FC = () => {
    const navigate = useNavigate();

    const eventData: Record<string, { type: 'technical' | 'non-technical', description: string }> = {
        // CSE
        "Idea Pitching": { type: 'technical', description: "Pitch your revolutionary startup or product idea to industry experts." },
        "Capture the Flag": { type: 'technical', description: "Cybersecurity challenge to find and exploit hidden vulnerabilities." },
        "Appathon": { type: 'technical', description: "Develop and showcase innovative mobile or web applications." },
        "Mastermind -Quiz": { type: 'technical', description: "Test your technical foundation and general tech awareness." },
        "AIXperience Design Challenge": { type: 'technical', description: "Craft intuitive and visually stunning user interfaces for AI-driven apps." },
        "AI Prompt": { type: 'technical', description: "The art of generating precise and creative AI outputs with prompts." },
        "Battle of Minds": { type: 'technical', description: "Intense technical debate and problem-solving competition." },
        "Leet Code Challenge": { type: 'technical', description: "Competitive programming to solve complex algorithmic problems." },
        "Multimedia Presentation (Neuroscope:Visual Exposure to AI)": { type: 'technical', description: "Visual storytelling combining advanced graphics and AI insights." },
        "Treasure Hunt": { type: 'non-technical', description: "Follow technical clues and markers to win the final grand prize." },

        // AIML
        "8 Hours Software Hackathon": { type: 'technical', description: "Build a working prototype in an intense 8-hour coding marathon." },
        "Solo Singing": { type: 'non-technical', description: "Showcase your vocal talents live on the big stage." },
        "Group Singing": { type: 'non-technical', description: "Harmonize with your team for a musical performance." },
        "Code Debugging": { type: 'technical', description: "Find and fix bugs in complex code snippets quickly and accurately." },
        "Ad zap": { type: 'non-technical', description: "Quick-thinking performance for mock advertisement challenges." },
        "Reels Context": { type: 'non-technical', description: "Create engaging short-form content for social media." },
        "IPL Auction": { type: 'non-technical', description: "Strategy-based cricket player auction simulation." },
        "Replica": { type: 'non-technical', description: "Try to recreate a technical or artistic masterpiece perfectly." },

        // IT
        "Memathon 3.0": { type: 'non-technical', description: "Create the funniest technical or geeky memes for the community." },
        "Technical Quiz \"Small questions.Big brains\"": { type: 'technical', description: "Challenge your depth of knowledge in latest IT trends and tech." },
        "Hunt the code “Find it. Fix it. Finish it.”": { type: 'technical', description: "Trace and find logic errors in a technical scavenger hunt." },
        "Emoji Story Challenge": { type: 'non-technical', description: "Narrate a technical concept creatively using only emojis." },
        "Webathon": { type: 'technical', description: "Intense web development challenge for modern and responsive sites." },
        "Vibe Ops": { type: 'non-technical', description: "Chill activities focused on team spirit and fun interactions." },
        "Logic2visual": { type: 'technical', description: "Convert complex logic into efficient visual representations." },
        "Rapid Chess “Blink and you blunder”": { type: 'non-technical', description: "Fast-paced chess tournament to test your tactical speed." },
        "Title to Tale": { type: 'non-technical', description: "Weave a compelling story starting from a technical title." },

        // AI&DS
        "3D design contest": { type: 'technical', description: "Create complex 3D models and artistic digital renders." },
        "AI Comic Strip": { type: 'non-technical', description: "Design funny or informative comics using creative AI tools." },
        "Crack the Code": { type: 'technical', description: "Solve complex puzzles and encryption/decryption challenges." },
        "AI-Artathon": { type: 'non-technical', description: "Generate creative artwork using latest AI generative models." },
        "Code Rush": { type: 'technical', description: "Fast-paced coding to solve maximum problems in limited time." },
        "Prompt Engineer Idol": { type: 'technical', description: "Perform live prompt engineering based on creative briefs." },
        "AI Blitz": { type: 'technical', description: "Quick-fire technical round on artificial intelligence concepts." },
        "Ideathon": { type: 'technical', description: "Brainstorm and pitch innovative technological solutions." },

        // CST/CSD/IoT
        "Paper Presentation (Hardware & Software)": { type: 'technical', description: "Innovate and present your research or technical ideas." },
        "e Sportz": { type: 'non-technical', description: "Competitive gaming tournament for esports enthusiasts." },
        "Adversarial AI Security Engg": { type: 'technical', description: "Deep dive into network defense, ethical hacking and AI security." },
        "Strongest Crowd Puller": { type: 'non-technical', description: "Demonstrate your leadership and engagement skills." },
        "Connection - (Tech Quiz)": { type: 'technical', description: "Relate visual clues to find the common technical term or idea." },
        "Short Film": { type: 'non-technical', description: "Direct and produce a compelling story in the short film contest." },
        "Prompt designing": { type: 'technical', description: "The art of generating precise and creative AI outputs with prompts." },
        "PaintX": { type: 'non-technical', description: "Artistic expression with a futuristic or technical twist." },
        "BUG BOUNTY: The Human Compiler": { type: 'technical', description: "Identify core flaws and bugs in a live target application." }
    };

    const sections = [
        {
            id: "cse",
            title: "CSE",
            events: [
                "Idea Pitching",
                "Capture the Flag",
                "Appathon",
                "Mastermind -Quiz",
                "AIXperience Design Challenge",
                "AI Prompt",
                "Battle of Minds",
                "Leet Code Challenge",
                "Multimedia Presentation (Neuroscope:Visual Exposure to AI)",
                "Treasure Hunt"
            ],
            workshops: [
                "Agentic AI Workshop"
            ],
            contact: "Student Coordinators: Boopathiraj (8248672614), Sanjay K (7358981203)"
        },
        {
            id: "aiml",
            title: "AI&ML",
            events: [
                "8 Hours Software Hackathon",
                "Solo Singing",
                "Group Singing",
                "Code Debugging",
                "Ad zap",
                "Reels Context",
                "IPL Auction",
                "Replica"
            ],
            workshops: [
                "AI Workshop"
            ],
            contact: "Student Coordinators: Aswin KJ (9072239871), R Dhev Prashath (80155 43346)"
        },
        {
            id: "it",
            title: "IT",
            events: [
                "Memathon 3.0",
                "Technical Quiz \"Small questions.Big brains\"",
                "Hunt the code “Find it. Fix it. Finish it.”",
                "Emoji Story Challenge",
                "Webathon",
                "Vibe Ops",
                "Logic2visual",
                "Rapid Chess “Blink and you blunder”",
                "Title to Tale"
            ],
            workshops: [],
            contact: "Student Coordinators: Sanjay S (88707 41800), Giri Prasanna M (86105 39344)"
        },
        {
            id: "aids",
            title: "AI&DS",
            events: [
                "3D design contest",
                "AI Comic Strip",
                "Crack the Code",
                "AI-Artathon",
                "Code Rush",
                "Prompt Engineer Idol",
                "AI Blitz",
                "Ideathon"
            ],
            workshops: [],
            contact: "Student Coordinator: Harishraj.K (9566357657)"
        },
        {
            id: "iot",
            title: "CST/CSD/IoT Domain",
            events: [
                "Paper Presentation (Hardware & Software)",
                "e Sportz",
                "Adversarial AI Security Engg",
                "Strongest Crowd Puller",
                "Connection - (Tech Quiz)",
                "Short Film",
                "Prompt designing",
                "PaintX",
                "BUG BOUNTY: The Human Compiler"
            ],
            workshops: [
                "Workshop on Stream Lit",
                "ThreatX(Workshop-Cyber Security)",
                "Gamestrom(Workshop on Game Design)"
            ],
            contact: "Student Coordinators: Monika (7305792365), Koshika . T (6380237897)"
        }
    ];

    const getSortedEvents = (eventNames: string[]) => {
        return [...eventNames].sort((a, b) => {
            const dataA = eventData[a];
            const dataB = eventData[b];
            if (dataA?.type === 'technical' && dataB?.type !== 'technical') return -1;
            if (dataA?.type !== 'technical' && dataB?.type === 'technical') return 1;
            return 0;
        });
    };

    const headerRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (headerRef.current) {
            const text = "COMPUTER SCIENCE";
            gsap.to(headerRef.current, {
                duration: 1.5,
                text: { value: text },
                ease: "power2.inOut"
            });
        }

        const streamElements = document.querySelectorAll('.data-stream-item');
        streamElements.forEach((el) => {
            gsap.to(el, {
                x: '100vw',
                duration: 20 + Math.random() * 20,
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

            <div className="scan-line"></div>

            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-5">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="data-stream-item absolute whitespace-nowrap font-mono text-[9px] text-black"
                        style={{ top: `${i * 12 + 5}%`, left: '-50vw' }}
                    >
                        {Array(4).fill("MTX_SOURCE_INIT // BUFFER_OVERFLOW_GUARD // SECTOR_" + i + "_READY").join(" ")}
                    </div>
                ))}
            </div>

            <header className="relative pt-48 pb-24 px-6 cyber-grid overflow-hidden z-10">
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <div className="flex justify-between items-center mb-12 opacity-30">
                        <div className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase hidden md:block">Process: 0x4F2A</div>
                        <div className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase hidden md:block">Link: STABLE</div>
                        <div className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase hidden md:block">Root: CS_DOMAIN</div>
                    </div>
                    <div className="inline-block px-6 py-2 mb-8 bg-black text-[#FFC107] font-black text-[10px] md:text-xs uppercase tracking-[0.4em]">
                        Domain Matrix
                    </div>
                    <h1 ref={headerRef} className="text-5xl md:text-9xl font-black mb-8 uppercase leading-tight text-black tracking-tighter">
                        COMPUTER <br />
                        <span className="text-[#FFC107] italic">SCIENCE</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-slate-400 text-lg md:text-xl font-medium leading-relaxed italic">
                        "The Code to the Future"
                    </p>
                </div>
            </header>

            <main className="max-w-[1750px] mx-auto px-6 py-24 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-stretch">
                    {sections.map((dept, idx) => (
                        <motion.div
                            key={dept.id}
                            id={dept.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="group flex flex-col gap-6"
                        >
                            <div className="bg-[#FFC107] border-[3px] border-black rounded-[1.5rem] py-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-1 transition-all">
                                <h2 className="text-2xl font-black uppercase tracking-tighter text-center italic">{dept.title}</h2>
                            </div>

                            <div className="bg-white border-[3px] border-black rounded-[3.5rem] flex flex-col overflow-hidden shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] h-full opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 origin-top pointer-events-none group-hover:pointer-events-auto relative">
                                <div className="corner-bracket bracket-tl"></div>
                                <div className="corner-bracket bracket-tr"></div>
                                <div className="corner-bracket bracket-bl"></div>
                                <div className="corner-bracket bracket-br"></div>

                                <div className="p-8 flex items-center justify-between">
                                    <span className="text-[14px] font-black uppercase tracking-[0.4em] text-black italic">Events List</span>
                                    <span className="text-[9px] font-mono font-bold text-black/20 uppercase tracking-widest hidden md:block">MTX-{dept.id.toUpperCase()}-00 {idx + 1}</span>
                                </div>

                                <div className="flex flex-col pb-8">
                                    {getSortedEvents(dept.events).map((event, eIdx) => (
                                        <div key={eIdx} className="group/item relative flex flex-col justify-center items-center min-h-[80px] px-8 border-b border-black/5 last:border-0 overflow-hidden cursor-default transition-all duration-300">
                                            <h3 className="font-space font-black text-[18px] uppercase leading-none tracking-tight text-black text-center transition-all duration-300 group-hover/item:opacity-0 group-hover/item:scale-90">
                                                {event}
                                            </h3>
                                            <div className="absolute inset-0 bg-[#FFC107] flex items-center justify-center p-4 text-center opacity-0 translate-y-4 transition-all duration-300 pointer-events-none group-hover/item:opacity-100 group-hover/item:translate-y-0 group-hover/item:pointer-events-auto z-20">
                                                <p className="text-[12px] font-bold text-black leading-tight whitespace-pre-line tracking-tight">
                                                    {eventData[event]?.description || "Description coming soon..."}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {dept.workshops.length > 0 && (
                                    <>
                                        <div className="p-8 border-t-2 border-black/10 flex items-center">
                                            <span className="text-[14px] font-black uppercase tracking-[0.4em] text-black italic">Workshops</span>
                                        </div>
                                        <div className="flex flex-col pb-8">
                                            {dept.workshops.map((ws, wIdx) => (
                                                <div key={wIdx} className="flex flex-col justify-center items-center py-4 px-8 transition-colors cursor-default border-b border-black/5 last:border-0">
                                                    <h3 className="font-space font-black text-[18px] uppercase leading-none tracking-tight text-black text-center">
                                                        {ws}
                                                    </h3>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}

                                <div className="mt-auto px-8 pt-4 pb-2 border-t-2 border-dashed border-black/10">
                                    <p className="text-[11px] font-black uppercase tracking-wider text-black/60 text-center italic">
                                        {dept.contact}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto pb-20 px-6">
                    {[
                        { label: "Register for Events", link: "https://forms.gle/dLoKsVHmPvPeSckU6" },
                        { label: "Register for Workshop", link: "https://forms.gle/CfoHUe1jLaRovQky6" },
                        { label: "Register for Hackathons", link: "https://forms.gle/imeqqbSaS43GNVaf7" }
                    ].map((btn, rIdx) => (
                        <div
                            key={rIdx}
                            onClick={() => window.open(btn.link, '_blank')}
                            className="group relative px-6 py-8 bg-white hover:bg-[#FFC107] border-[3px] border-black rounded-[20px_35px_15px_30px] flex flex-col items-center justify-center gap-4 transition-all hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-0 active:shadow-none shadow-lg text-center cursor-pointer"
                        >
                            <span className="text-xl font-black text-black tracking-tight italic uppercase leading-tight">{btn.label}</span>
                            <span className="material-symbols-outlined text-3xl text-black group-hover:translate-x-2 transition-transform duration-300 font-bold">arrow_forward</span>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default ComputerScienceEvents;
