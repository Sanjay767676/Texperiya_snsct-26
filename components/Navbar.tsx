import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import brandingImg from '../images/1000 Startups - SNS Group - GenAI 1.png';
import logo2 from '../images/logo2.png';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 min-h-[80px] md:min-h-[140px] 2xl:min-h-[180px] flex items-center shadow-sm py-2 md:py-4">
      <div className="max-w-[1920px] mx-auto px-2 sm:px-6 lg:px-8 w-full">
        {/* Desktop Grid Layout: 3 equal-width columns for absolute centering */}
        <div className="hidden md:grid grid-cols-3 items-center w-full relative">

          {/* Left Side: Logo and Navigation */}
          <div className="flex items-center gap-8 2xl:gap-12">
            <div className="h-20 md:h-28 2xl:h-36 w-auto flex items-center">
              <img
                src={logo2}
                alt="SNS College of Technology"
                className="h-full w-auto object-contain"
              />
            </div>
            {!isHome && (
              <button
                className="flex items-center text-sm 2xl:text-lg font-black hover:text-primary transition-all uppercase tracking-[0.2em] text-slate-800 group"
                onClick={() => navigate('/')}
              >
                <span className="material-icons text-2xl 2xl:text-4xl mr-2 group-hover:-translate-x-1 transition-transform">arrow_back</span>
                <span className="hidden xs:inline">Home</span>
              </button>
            )}
          </div>

          {/* Center: Institutional Details */}
          <div className="flex flex-col items-center text-center px-4">
            <h1
              className="text-xl lg:text-3xl 2xl:text-5xl font-bold text-slate-900 leading-tight uppercase tracking-wide whitespace-nowrap"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              SNS COLLEGE OF TECHNOLOGY
            </h1>
            <p className="text-sm 2xl:text-xl font-semibold text-slate-700 mt-1">
              (An Autonomous Institution)
            </p>
          </div>

          {/* Right Side: SNS Institutions Branding Banner */}
          <div className="flex items-center justify-end h-full">
            <div className="h-20 md:h-24 2xl:h-32 w-auto flex items-center justify-end">
              <img
                src={brandingImg}
                alt="1000 Startups GenAI"
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Mobile Flex Layout: Logo | Text | Logo Row */}
        <div className="flex md:hidden flex-col items-center gap-1 w-full px-2">
          {/* Main Row: Logo - Text - Logo */}
          <div className="grid grid-cols-[70px_1fr_70px] xs:grid-cols-[90px_1fr_90px] items-center w-full gap-2">
            {/* Left Logo */}
            <div className="h-16 xs:h-20 w-full flex items-center justify-start">
              <img src={logo2} alt="Logo 1" className="h-full w-auto object-contain" />
            </div>

            {/* Center Text */}
            <div className="text-center overflow-hidden">
              <h1
                className="text-[12px] xs:text-[14px] font-bold text-slate-900 leading-tight uppercase tracking-tight whitespace-nowrap"
                style={{ fontFamily: '"Times New Roman", Times, serif' }}
              >
                SNS COLLEGE OF TECHNOLOGY
              </h1>
              <p className="text-[8px] xs:text-[10px] font-semibold text-slate-700 mt-0.5 leading-none">
                (An Autonomous Institution)
              </p>
            </div>

            {/* Right Logo */}
            <div className="h-16 xs:h-20 w-full flex items-center justify-end">
              <img src={brandingImg} alt="Logo 2" className="h-full w-auto object-contain" />
            </div>
          </div>

          {/* Back Button for Mobile */}
          {!isHome && (
            <button
              className="mt-1 flex items-center text-[10px] font-black text-slate-800 uppercase tracking-widest hover:text-primary transition-colors"
              onClick={() => navigate('/')}
            >
              <span className="material-icons text-base mr-1">arrow_back</span>
              Home
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
