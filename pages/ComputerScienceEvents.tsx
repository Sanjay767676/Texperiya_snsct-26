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
            ],
            contact: "Student Coordinator: +91 00000 00000"
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
            workshops: [],
            contact: "Student Coordinator: +91 00000 00000"
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
            ],
            contact: "Student Coordinator: +91 00000 00000"
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
            workshops: [],
            contact: "Student Coordinator: +91 00000 00000"
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
            ],
            contact: "Student Coordinator: +91 00000 00000"
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
                        <div key={dept.id} className="group flex flex-col gap-6" id={dept.id}>
                            {/* Department Header */}
                            <div className="bg-[#FFC107] border-[3px] border-black rounded-[1.5rem] py-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-1 transition-all">
                                <h2 className="text-2xl font-black uppercase tracking-tighter text-center italic">{dept.title}</h2>
                            </div>

                            {/* Column Container - Plain White List - Hidden by default, reveals on hover */}
                            <div className="bg-white border-[3px] border-black rounded-[3.5rem] flex flex-col overflow-hidden shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] h-full opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 origin-top pointer-events-none group-hover:pointer-events-auto">

                                <div className="p-8 flex items-center">
                                    <span className="text-[14px] font-black uppercase tracking-[0.4em] text-black italic">Events List</span>
                                </div>

                                <div className="flex flex-col pb-8">
                                    {dept.events.map((event, idx) => (
                                        <div key={idx} className="event-item">
                                            <h3 className="font-space font-black text-[20px] uppercase leading-none tracking-tight text-black text-center">
                                                {event}
                                            </h3>
                                        </div>
                                    ))}
                                </div>

                                {/* Workshops Section */}
                                {dept.workshops.length > 0 && (
                                    <>
                                        <div className="p-8 border-t-2 border-black/10 flex items-center">
                                            <span className="text-[14px] font-black uppercase tracking-[0.4em] text-black italic">Workshops</span>
                                        </div>
                                        <div className="flex flex-col pb-8">
                                            {dept.workshops.map((ws, idx) => (
                                                <div key={idx} className="workshop-item">
                                                    <div className="flex flex-col gap-2">
                                                        <h3 className="font-space font-black text-[20px] uppercase leading-none tracking-tight text-black text-center">
                                                            {ws}
                                                        </h3>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}

                                {/* Contact Section */}
                                <div className="mt-auto px-8 pt-4 pb-2 border-t-2 border-dashed border-black/10">
                                    <p className="text-[11px] font-black uppercase tracking-wider text-black/60 text-center italic">
                                        {dept.contact}
                                    </p>
                                </div>

                                {/* Per-department Registration Button (Only shown on Non-CS as per requirement, but keeping here for consistency if needed, wait user said Non-CS Only last turn) */}
                                {/* Restore global footer button for CS page was the revert. So I'll just leave this as is. */}

                            </div>
                        </div>
                    ))}

                </div>

                {/* Footer Registration Button */}
                <div className="mt-32 flex justify-center pb-20">
                    <a
                        href="https://forms.gle/A3Rzst5WsxsDeEfY9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative w-full sm:w-auto px-16 py-6 bg-white hover:bg-[#FFC107] border-[4px] border-black rounded-[22px_42px_18px_38px] flex items-center justify-center gap-8 transition-all hover:-translate-y-2 hover:shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-0 active:shadow-none shadow-xl"
                    >
                        <span className="text-3xl md:text-4xl font-black text-black tracking-tight italic uppercase">Register Now</span>
                        <span className="material-symbols-outlined text-5xl text-black group-hover:translate-x-3 transition-transform duration-300 font-bold">arrow_forward</span>
                    </a>
                </div>
            </main>
        </div>
    );
};

export default ComputerScienceEvents;
