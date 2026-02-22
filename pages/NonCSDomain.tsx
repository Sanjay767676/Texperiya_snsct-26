import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const NonCSDomain: React.FC = () => {
  const navigate = useNavigate();

  const eventData: Record<string, { type: 'technical' | 'non-technical', description: string }> = {
    // AERO
    "Water Rocketry": { type: 'technical', description: "Launch and compete with water-powered rockets for distance and accuracy." },
    "Glide Craft": { type: 'technical', description: "Design and fly unpowered gliders focused on aerodynamic efficiency." },
    "Poster Presentation": { type: 'technical', description: "Visual and technical presentation of aerospace innovations." },
    "Quiz Arena": { type: 'technical', description: "Combat in a series of intense rounds testing your aerospace knowledge." },
    "Mach Hunt": { type: 'non-technical', description: "A high-speed scavenger hunt through aeronautical challenges." },
    "SkySketch 3D": { type: 'technical', description: "3D CAD modeling competition for advanced aerospace components." },
    "AeroGenesis Expo": { type: 'technical', description: "Showcase your aeronautical projects to a panel of expert judges." },
    "Idea to Impact (Ideathon)": { type: 'technical', description: "Pitch solutions for current challenges in the aviation industry." },

    // AGRI
    "Plough Your Brain - Quiz Quest": { type: 'technical', description: "Test your skills in modern agricultural sciences and tech." },
    "Project Presentation": { type: 'technical', description: "Present innovative projects that revolutionize agricultural practices." },
    "Seed Detectives": { type: 'non-technical', description: "Identify and classify diverse seeds based on their characteristics." },
    "Farm Gear Flash": { type: 'technical', description: "Demonstrate and explain complex modern agricultural machinery." },

    // AUTO
    "Auto Quiz": { type: 'technical', description: "Deep dive into automotive history, mechanics, and future trends." },
    "Auto Show": { type: 'non-technical', description: "Exhibition of unique and modified automotive designs." },
    "Slow Bike Race": { type: 'non-technical', description: "Test your balance and control in the slowest race to the finish." },

    // BME
    "Bionexus (Poster)": { type: 'technical', description: "Visual storytelling of biomedical engineering concepts." },
    "BioGenesis (Ideathon)": { type: 'technical', description: "Engineer innovative solutions for modern medical challenges." },
    "Blind Fold": { type: 'non-technical', description: "Navigate challenges while testing your senses and trust." },
    "Medxplore (Paper)": { type: 'technical', description: "Academic presentation of biomedical research and breakthroughs." },
    "Biofluxtron": { type: 'technical', description: "Challenge focused on biological signals and electronics." },
    "Once upon a Mic": { type: 'non-technical', description: "Creative storytelling and vocal performance platform." },
    "Movie Scene Recreation": { type: 'non-technical', description: "Act out and recreate classic moments from your favorite films." },

    // CIVIL
    "Code Cracking": { type: 'technical', description: "Solve complex problems related to structural codes and design." },
    "CAD Modelling Quest": { type: 'technical', description: "Battle it out in 3D modeling for civil infrastructure projects." },
    "Aquahack": { type: 'technical', description: "Hackathon focused on water resource management and engineering." },
    "Map Charades": { type: 'non-technical', description: "Act out geographical locations and map-related concepts." },
    "Dumb Civil Charades": { type: 'non-technical', description: "Fun team game guessing civil engineering terms through acting." },
    "Colour Your Thoughts": { type: 'non-technical', description: "Artistic expression of technical and social themes." },
    "Construct your Dream": { type: 'technical', description: "Build scale models of innovative architectural designs." },
    "Tech Showcase": { type: 'technical', description: "Detailed exhibition of civil engineering projects and posters." },

    // ECE
    "Innovatrix (Hackathon)": { type: 'technical', description: "Intense hardware and software electronic system design challenge." },
    "Electroforge": { type: 'technical', description: "Circuit design and debugging challenge for electronics enthusiasts." },
    "Solo and Group dance": { type: 'non-technical', description: "Express your rhythm and energy on the professional stage." },
    "Prompt AI": { type: 'technical', description: "Creative engineering using AI prompts for electronics logic." },
    "App Pitching": { type: 'technical', description: "Pitch your revolutionary mobile or embedded application idea." },
    "SparkX (Paper Presentation)": { type: 'technical', description: "Presenting future-ready research in electronics and comms." },
    "IPL Team Builder Auction": { type: 'non-technical', description: "Strategic bidding and team management simulation." },
    "Electroverse": { type: 'technical', description: "Multi-round competition on the latest trends in electronics." },

    // EEE
    "E-Sports": { type: 'non-technical', description: "Competitive gaming tournament for digital sports fans." },
    "Short film": { type: 'non-technical', description: "Showcase your cinematic vision in our short film festival." },
    "Gaming": { type: 'non-technical', description: "Casual and competitive gaming for all skill levels." },
    "Protothon": { type: 'technical', description: "Build working electrical prototypes in a limited timeframe." },
    "Quad Killer Quest": { type: 'technical', description: "Drone navigating and obstacle course challenge." },
    "Reel Creation": { type: 'non-technical', description: "Create viral-worthy short video content for social media." },
    "Build it in 60": { type: 'technical', description: "Construct small-scale electrical systems in just 60 seconds." },

    // FT
    "Reverse Debate": { type: 'non-technical', description: "Argue for the opposite side in this unique food tech debate." },
    "Flameless Cooking": { type: 'non-technical', description: "Create healthy and delicious dishes without using heat." },
    "Treasure Hunt": { type: 'non-technical', description: "Find the hidden ingredients and clues to win the chef's prize." },
    "Be a Chef": { type: 'non-technical', description: "Professional-style cooking challenge for aspiring chefs." },
    "Dark Kitchen Detectives": { type: 'technical', description: "Audit and solve hygiene and logic puzzles in a mock kitchen." },
    "Fruit and Vegetable Carving": { type: 'non-technical', description: "Transform fresh produce into stunning artistic sculptures." },
    "Ideafest": { type: 'technical', description: "The ultimate brainstorming session for food industry solutions." },

    // MCT
    "Technical Quiz": { type: 'technical', description: "Battle of wits on robotics, automation and mechatronics." },
    "Line Follower": { type: 'technical', description: "Build robots that navigate complex paths with precision." },
    "Start Up Presentation": { type: 'technical', description: "Pitch your mechatronics-focused business to investors." },
    "IPL Auction": { type: 'non-technical', description: "Manage budgets and bid for players in the cricket auction." },
    "No Code Automation": { type: 'technical', description: "Implement automation logic using modern no-code platforms." },
    "Memerush": { type: 'non-technical', description: "Create the funniest and most relatable technical memes." },
    "Ad-Zap": { type: 'non-technical', description: "Fast-paced mock advertisement performance challenge." },

    // MECH
    "Lathe Master (Tool Finder)": { type: 'technical', description: "Precision identification and operation of machining tools." },
    "NexGen Tech Quiz": { type: 'technical', description: "Competitive quiz on advanced materials and manufacturing." },
    "Public Speaking": { type: 'non-technical', description: "Oratory contest on technical and social topics." },
    "Tool finder": { type: 'technical', description: "Identify specific mechanical parts and tools under pressure." },
    "Connections": { type: 'non-technical', description: "Connect visual icons to find the mechanical concept." },
    "TECH TALKS (Paper)": { type: 'technical', description: "Inspiring presentations on core mechanical engineering." },
    "Mechanical QUIZ": { type: 'technical', description: "Test your fundamental and applied mechanical concepts." },
    "Screensmith (CAD Modeling)": { type: 'technical', description: "2D and 3D drafting challenge using industry standard CAD." },
    "Mechamind": { type: 'technical', description: "Problem solving challenge for complex mechanical systems." },

    // MMCT
    "CAD Design Challenge": { type: 'technical', description: "Create intricate digital designs for additive manufacturing." },
    "AM Ideathon": { type: 'technical', description: "Design-centric solutions for 3D printing and smart materials." },
    "Innoventure": { type: 'technical', description: "A business-focused venture for manufacturing innovations." },
    "Esports": { type: 'non-technical', description: "Show off your gaming prowess in the MMCT esports arena." },
    "Paper Presentation": { type: 'technical', description: "Presentations and discussions on future-ready research and multi-disciplinary engineering trends." },
    "Best Manager": { type: 'non-technical', description: "Test your leadership, crisis management and team skills." },
    "Ted X": { type: 'non-technical', description: "Platform for ideas worth spreading beyond engineering." },
    "RC Car Race": { type: 'non-technical', description: "High-octane racing with remote-controlled vehicles." },
    "Junk wars": { type: 'non-technical', description: "Build something epic out of recycled scrap and junk." },

    // Shared Keys
    "Paper Presenation": { type: 'technical', description: "Research-driven presentation of future technology and engineering excellence." }
  };

  const sections = [
    {
      id: "aero",
      title: "AERO",
      events: [
        "Water Rocketry",
        "Glide Craft",
        "Poster Presentation",
        "Quiz Arena",
        "Mach Hunt",
        "SkySketch 3D",
        "AeroGenesis Expo",
        "Idea to Impact (Ideathon)"
      ],
      workshops: [
        "Workshop on 3D Printing"
      ],
      contact: "Student Coordinator: Abhinav A - 9025869335"
    },
    {
      id: "agri",
      title: "AGRI",
      events: [
        "Plough Your Brain - Quiz Quest",
        "Project Presentation",
        "Seed Detectives",
        "Farm Gear Flash"
      ],
      workshops: [
        "Plough to Processor: Robotics"
      ],
      contact: "Student Coordinator: Mr.Shamkaran K - 9025291364, Ms. Athishta p - 9952401248"
    },
    {
      id: "auto",
      title: "AUTO",
      events: [
        "Auto Quiz",
        "Paper Presentation",
        "Auto Show",
        "Slow Bike Race"
      ],
      workshops: [
        "e-Vehicle Workshop"
      ],
      contact: "Student Coordinator: - "
    },
    {
      id: "bme",
      title: "BME",
      events: [
        "Bionexus (Poster)",
        "BioGenesis (Ideathon)",
        "Blind Fold",
        "Medxplore (Paper)",
        "Biofluxtron",
        "Once upon a Mic",
        "Movie Scene Recreation"
      ],
      workshops: [
        "Hands on training in IoT"
      ],
      contact: "Student Coordinator: Mr. S. Siranjivi - 9360941313"
    },
    {
      id: "civil",
      title: "CIVIL",
      events: [
        "Code Cracking",
        "CAD Modelling Quest",
        "Aquahack",
        "Map Charades",
        "Dumb Civil Charades",
        "Colour Your Thoughts",
        "Construct your Dream",
        "Tech Showcase"
      ],
      workshops: [],
      contact: "Student Coordinator: M. Mukileswar - 6381261921, R. Devasudhan - 9790327187"
    },
    {
      id: "ece",
      title: "ECE",
      events: [
        "Innovatrix (Hackathon)",
        "Electroforge",
        "Solo and Group dance",
        "Prompt AI",
        "App Pitching",
        "SparkX (Paper Presentation)",
        "IPL Team Builder Auction",
        "Electroverse"
      ],
      workshops: [],
      contact: "Student Coordinator: Ms.S.Jeni Mirpha - 99420 50601, Ms.Ambreen - 9500897950"
    },
    {
      id: "eee",
      title: "EEE",
      events: [
        "E-Sports",
        "Short film",
        "Gaming",
        "Protothon",
        "Quad Killer Quest",
        "Reel Creation",
        "Paper Presentation",
        "Build it in 60"
      ],
      workshops: [],
      contact: "Student Coordinator: Mr.D.Jegadeeswaran - 9344598402, Ms. G.Divya - 8754511096"
    },
    {
      id: "ft",
      title: "FT",
      events: [
        "Reverse Debate",
        "Paper Presenation",
        "Flameless Cooking",
        "Treasure Hunt",
        "Be a Chef",
        "Dark Kitchen Detectives",
        "Short film",
        "Fruit and Vegetable Carving",
        "Ideafest"
      ],
      workshops: [
        "Technical Workshop"
      ],
      contact: "Student Coordinator: R.Chandru - 9994345980"
    },
    {
      id: "mct",
      title: "MCT",
      events: [
        "Technical Quiz",
        "Line Follower",
        "Start Up Presentation",
        "IPL Auction",
        "Paper presentation",
        "No Code Automation",
        "Memerush",
        "Ad-Zap"
      ],
      workshops: [
        "MCT Workshop"
      ],
      contact: "Student Coordinator: Mr. Sanjay Sarvesh - 8807543110"
    },
    {
      id: "mech",
      title: "MECH",
      events: [
        "Lathe Master (Tool Finder)",
        "NexGen Tech Quiz",
        "Public Speaking",
        "Tool finder",
        "Connections",
        "TECH TALKS (Paper)",
        "Mechanical QUIZ",
        "Screensmith (CAD Modeling)",
        "Mechamind"
      ],
      workshops: [
        "MECH Workshop"
      ],
      contact: "Student Coordinator: Navaneetha Krishnan - 88386 92752"
    },
    {
      id: "mmct",
      title: "MMCT",
      events: [
        "CAD Design Challenge",
        "AM Ideathon",
        "Innoventure",
        "Esports",
        "Paper presentation",
        "Best Manager",
        "Ted X",
        "RC Car Race",
        "Junk wars"
      ],
      workshops: [],
      contact: "Student Coordinator: R.R.Abhinand - 9027175873, N.Bhava Priyan - 8792870689"
    }
  ];

  // Helper to sort events: technical first, then non-technical
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
      const text = "NON-COMPUTER SCIENCE";
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
        duration: 25 + Math.random() * 20,
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
        @keyframes scanline {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(1000%); }
        }
        @keyframes float {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            33% { transform: translate(10px, -15px) rotate(5deg); }
            66% { transform: translate(-5px, 10px) rotate(-3deg); }
        }
        @keyframes pulse-dot {
            0%, 100% { opacity: 0.1; transform: scale(1); }
            50% { opacity: 0.3; transform: scale(1.5); }
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

      {/* GSAP Data Stream Overlays */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-5">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="data-stream-item absolute whitespace-nowrap font-mono text-[9px] text-black"
            style={{ top: `${i * 12 + 5}%`, left: '-50vw' }}
          >
            {Array(4).fill("MTX_SYS_LOG // NODE_REF_" + i + "_AUTH // CHANNEL_STABLE // STREAM_ACTIVE").join(" ")}
          </div>
        ))}
      </div>

      <header className="relative pt-48 pb-24 px-6 cyber-grid overflow-hidden z-10">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="flex justify-between items-center mb-12 opacity-30">
            <div className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase hidden md:block">Process: 0x8E11</div>
            <div className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase hidden md:block">Link: ENCRYPTED</div>
            <div className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase hidden md:block">Root: NON_CS_DOMAIN</div>
          </div>
          <div className="inline-block px-6 py-2 mb-8 bg-black text-[#FFC107] font-black text-[10px] md:text-xs uppercase tracking-[0.4em]">
            Domain Matrix
          </div>
          <h1 ref={headerRef} className="text-5xl md:text-9xl font-black mb-8 uppercase leading-tight text-black tracking-tighter">
            NON-COMPUTER <br />
            <span className="text-[#FFC107] italic">SCIENCE</span>
          </h1>
          <p className="max-w-3xl mx-auto text-slate-400 text-lg md:text-xl font-medium leading-relaxed italic">
            "Innovation beyond Boundaries"
          </p>
        </div>
      </header>

      <main className="max-w-[1750px] mx-auto px-6 py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 gap-10 items-stretch">
          {sections.map((dept, idx) => (
            <motion.div
              key={dept.id}
              id={dept.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="group flex flex-col gap-6"
            >
              <div className="bg-[#FFC107] border-[3px] border-black rounded-[1.5rem] py-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-1 transition-all">
                <h2 className="text-2xl font-black uppercase tracking-tighter text-center italic">{dept.title}</h2>
              </div>

              {/* Column Container - Plain White List - Hidden by default, reveals on hover */}
              <div className="bg-white border-[3px] border-black rounded-[3.5rem] flex flex-col overflow-hidden shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] h-full opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 origin-top pointer-events-none group-hover:pointer-events-auto relative">
                {/* Decorative Brackets */}
                <div className="corner-bracket bracket-tl"></div>
                <div className="corner-bracket bracket-tr"></div>
                <div className="corner-bracket bracket-bl"></div>
                <div className="corner-bracket bracket-br"></div>

                <div className="p-8 flex items-center justify-between">
                  <span className="text-[14px] font-black uppercase tracking-[0.4em] text-black italic">Events List</span>
                  <span className="text-[9px] font-mono font-bold text-black/20 uppercase tracking-widest hidden md:block">MTX-{dept.id.toUpperCase()}-00 {idx + 1}</span>
                </div>

                <div className="flex flex-col pb-8">
                  {getSortedEvents(dept.events).map((event, idx) => (
                    <div key={idx} className="group/item relative flex flex-col justify-center items-center min-h-[80px] px-8 border-b border-black/5 last:border-0 overflow-hidden cursor-default transition-all duration-300">
                      {/* Event Name - Visible by default, hidden on hover */}
                      <h3 className="font-space font-black text-[18px] uppercase leading-none tracking-tight text-black text-center transition-all duration-300 group-hover/item:opacity-0 group-hover/item:scale-90">
                        {event}
                      </h3>

                      {/* Description Overlay - Hidden by default, shown on hover */}
                      <div className="absolute inset-0 bg-[#FFC107] flex items-center justify-center p-4 text-center opacity-0 translate-y-4 transition-all duration-300 pointer-events-none group-hover/item:opacity-100 group-hover/item:translate-y-0 group-hover/item:pointer-events-auto z-20">
                        <p className="text-[12px] font-bold text-black leading-tight whitespace-pre-line tracking-tight">
                          {eventData[event]?.description || "Description coming soon..."}
                        </p>
                      </div>
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
                        <div key={idx} className="flex flex-col justify-center items-center py-4 px-8 transition-colors cursor-default">
                          <h3 className="font-space font-black text-[20px] uppercase leading-none tracking-tight text-black text-center">
                            {ws}
                          </h3>
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

              </div>
            </motion.div>
          ))}
        </div>

        {/* Pre-footer Registration Boxes */}
        <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto pb-20 px-6">
          {[
            { label: "Register for Events", link: "https://forms.gle/27XyRUbp5Zy2PNEe6" },
            { label: "Register for Workshop", link: "https://forms.gle/DV55ypa18nYERWFw7" },
            { label: "Register for Hackathons", link: "https://forms.gle/ZYJFPKjyTocoF3aSA" }
          ].map((btn, idx) => (
            <div
              key={idx}
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

export default NonCSDomain;
