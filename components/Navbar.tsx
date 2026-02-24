import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import brandingImg from '../images/1000 Startups - SNS Group - GenAI 1.png';
import logo2 from '../images/logo2.png';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 min-h-[140px] md:min-h-[180px] flex items-center shadow-sm py-4">
      <div className="max-w-[1600px] mx-auto px-2 sm:px-6 lg:px-8 w-full">
        {/* Desktop Grid Layout: 3 equal-width columns for absolute centering */}
        <div className="hidden md:grid grid-cols-3 items-center w-full relative">

          {/* Left Side: Logo and Navigation */}
          <div className="flex items-center gap-8">
            <div className="h-20 md:h-28 w-auto flex items-center">
              <img
                src={logo2}
                alt="SNS College of Technology"
                className="h-full w-auto object-contain"
              />
            </div>
            {!isHome && (
              <button
                className="flex items-center text-sm font-black hover:text-primary transition-all uppercase tracking-[0.2em] text-slate-800 group"
                onClick={() => navigate('/')}
              >
                <span className="material-icons text-2xl mr-2 group-hover:-translate-x-1 transition-transform">arrow_back</span>
                <span className="hidden xs:inline">Home</span>
              </button>
            )}
          </div>

          {/* Center: Institutional Details */}
          <div className="flex flex-col items-center text-center px-4">
            <h1
              className="text-lg sm:text-lg md:text-xl lg:text-3xl font-bold text-slate-900 leading-tight uppercase tracking-wide whitespace-nowrap"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              SNS COLLEGE OF TECHNOLOGY
            </h1>
            <p className="text-sm font-semibold text-slate-700">
              (An Autonomous Institution)
            </p>
            <div className="mt-2 space-y-0.5">
              <p className="text-[10px] lg:text-[11px] text-slate-600 font-medium">
                Approved by AICTE recognized by UGC & Affiliated to Anna University, Chennai
              </p>
              <p className="text-[10px] lg:text-[11px] text-slate-600 font-medium">
                Accredited by NBA-AICTE, NAAC-UGC With A++ Grade
              </p>
              <p className="text-[10px] lg:text-[11px] text-slate-600 font-medium">
                Sathy Main Road, Saravanampatti (PO), Coimbatore-641 035
              </p>
            </div>
          </div>

          {/* Right Side: SNS Institutions Branding Banner */}
          <div className="flex items-center justify-end h-full">
            <div className="h-20 md:h-24 w-auto flex items-center justify-end">
              <img
                src={brandingImg}
                alt="1000 Startups GenAI"
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Mobile Flex Layout: Stacked and Centered */}
        <div className="flex md:hidden flex-col items-center gap-4 w-full">
          {/* Top: College Details */}
          <div className="text-center px-2">
            <h1
              className="text-[14px] xs:text-base font-bold text-slate-900 leading-tight uppercase tracking-wide whitespace-nowrap"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              SNS COLLEGE OF TECHNOLOGY
            </h1>
            <p className="text-[10px] font-semibold text-slate-700">(An Autonomous Institution)</p>
          </div>

          {/* Middle: Logos Row */}
          <div className="flex justify-between items-center w-full px-4 gap-2">
            <div className="h-14 w-auto flex items-center">
              <img src={logo2} alt="Logo 1" className="h-full w-auto object-contain" />
            </div>

            <div className="h-10 w-auto flex items-center">
              <img src={brandingImg} alt="Logo 2" className="h-full w-auto object-contain" />
            </div>
          </div>

          {/* Bottom: Address Details */}
          <div className="text-center space-y-0.5 px-2">
            <p className="text-[8px] text-slate-600 font-medium italic">
              Approved by AICTE recognized by UGC & Affiliated to Anna University, Chennai
            </p>
            <p className="text-[8px] text-slate-600 font-medium">
              Accredited by NBA-AICTE, NAAC-UGC With A++ Grade
            </p>
            <p className="text-[8px] text-slate-600 font-medium">
              Sathy Main Road, Saravanampatti (PO), Coimbatore-641 035
            </p>
          </div>

          {/* Back Button for Mobile */}
          {!isHome && (
            <button
              className="flex items-center text-[10px] font-black text-slate-800 uppercase tracking-widest"
              onClick={() => navigate('/')}
            >
              <span className="material-icons text-lg mr-1">arrow_back</span>
              Home
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
