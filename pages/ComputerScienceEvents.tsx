import React from 'react';
import { useNavigate } from 'react-router-dom';

const ComputerScienceEvents: React.FC = () => {
    const navigate = useNavigate();

    const sections = [
        {
            id: "cse",
            title: "CSE",
            events: [
                "Idea Pitching",
                "Capture the Flag",
                "Appathon",
                "Mastermind Quiz",
                "UI/UX Design",
                "AI Prompt",
                "Leet Code Challenge",
                "Multimedia Presentation",
                "Treasure Hunt"
            ],
            workshops: [
                "Technical Workshop",
                "Agentic AI Workshop"
            ]
        },
        {
            id: "aids",
            title: "AI&DS",
            events: [
                "3D Design Contest",
                "AI Comic Strip",
                "Crack the Code",
                "AI-Artathon",
                "Code Rush",
                "Prompt Idol"
            ],
            workshops: []
        },
        {
            id: "aiml",
            title: "AIML",
            events: [
                "8 Hours Hackathon",
                "Solo Singing",
                "Group Singing",
                "Code Debugging",
                "Ad Zap"
            ],
            workshops: [
                "AI Workshop"
            ]
        },
        {
            id: "it",
            title: "IT",
            events: [
                "Memathon 3.0",
                "Technical Quiz",
                "Hunt the Code",
                "Emoji Story",
                "Webathon",
                "Vibe Ops"
            ],
            workshops: []
        },
        {
            id: "iot",
            title: "CST/CSD/IoT Domain",
            events: [
                "Cyber Security",
                "Game Design",
                "Paper Presentation",
                "E Sportz",
                "Photography",
                "Connection",
                "Short Film",
                "Bug Bounty"
            ],
            workshops: [
                "Stream Lit Workshop"
            ]
        }
    ];

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
        .event-item {
            @apply flex flex-col justify-center transition-colors cursor-default;
            padding: 10px 45px;
        }
        .workshop-item {
            @apply flex flex-col justify-center transition-colors cursor-default;
            padding: 5px 45px;
        }
        .bg-text {
            position: fixed;
            font-size: 25vw;
            font-weight: 900;
            color: rgba(0, 0, 0, 0.02);
            white-space: nowrap;
            letter-spacing: -0.05em;
            pointer-events: none;
            z-index: 0;
            user-select: none;
        }
      `}} />

            {/* Background Decorative Elements */}
            <div className="bg-text top-1/4 -left-20">NETWORK</div>
            <div className="bg-text top-3/4 -right-40">DOMAIN</div>

            {/* Header Content */}
            <header className="relative pt-48 pb-24 px-6 cyber-grid overflow-hidden z-10">
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <div className="inline-block px-6 py-2 mb-8 bg-black text-[#FFC107] font-black text-[10px] md:text-xs uppercase tracking-[0.4em]">
                        Domain Matrix
                    </div>
                    <h1 className="text-5xl md:text-9xl font-black mb-8 uppercase leading-tight text-black tracking-tighter">
                        COMPUTER <br />
                        <span className="text-[#FFC107] italic">SCIENCE</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-slate-400 text-lg md:text-xl font-medium leading-relaxed italic">
                        "Envisioning the future of Tech"
                    </p>
                </div>
            </header>

            {/* Main Content Matrix Grid */}
            <main className="max-w-[1750px] mx-auto px-6 py-24 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 items-stretch">

                    {sections.map((dept) => (
                        <div key={dept.id} className="flex flex-col gap-6" id={dept.id}>
                            {/* Department Header */}
                            <div className="bg-[#FFC107] border-[3px] border-black rounded-[1.5rem] py-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                                <h2 className="text-2xl font-black uppercase tracking-tighter text-center italic">{dept.title}</h2>
                            </div>

                            {/* Column Container - Plain White List */}
                            <div className="bg-white border-[3px] border-black rounded-[3.5rem] flex flex-col overflow-hidden shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] h-full">

                                <div className="p-8 flex items-center">
                                    <span className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">Events List</span>
                                </div>

                                <div className="flex flex-col pb-8">
                                    {dept.events.map((event, idx) => (
                                        <div key={idx} className="event-item">
                                            <h3 className="font-space font-black text-[16px] uppercase leading-none tracking-tight text-black">
                                                {event}
                                            </h3>
                                        </div>
                                    ))}
                                </div>

                                {/* Workshops Section */}
                                {dept.workshops.length > 0 && (
                                    <>
                                        <div className="p-8 border-t-2 border-black/10 flex items-center">
                                            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-black">Workshops</span>
                                        </div>
                                        <div className="flex flex-col pb-8">
                                            {dept.workshops.map((ws, idx) => (
                                                <div key={idx} className="workshop-item">
                                                    <div className="flex flex-col gap-2">
                                                        <h3 className="font-space font-black text-[16px] uppercase leading-none tracking-tight text-black">
                                                            {ws}
                                                        </h3>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}

                                {/* Register Action Button */}
                                <div className="p-10 mt-auto border-t-2 border-black/5 bg-slate-50/10">
                                    <button className="w-full bg-black text-[#FFC107] py-4 rounded-2xl font-black text-xs uppercase tracking-[0.3em] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:bg-[#FFC107] hover:text-black transition-all active:translate-y-1 active:shadow-none flex items-center justify-center gap-2">
                                        <span>Register {dept.title}</span>
                                        <span className="material-icons text-sm">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </main>
        </div>
    );
};

export default ComputerScienceEvents;
