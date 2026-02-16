import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import brandingImg from '../images/1000 Startups - SNS Group - GenAI 1.png';
import logo2 from '../images/logo2.png';
import snsInstitutionsLogo from '../images/SNS Institutions Logo.png';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 h-20 md:h-24 flex items-center shadow-sm">
      <div className="max-w-[1600px] mx-auto px-2 sm:px-6 lg:px-8 w-full h-full">
        <div className="flex justify-between items-center h-full relative">

          {/* Left Side: Navigation / Context */}
          <div className="flex-none flex items-center gap-2 md:gap-8">
            <div className="h-10 md:h-16 w-auto flex items-center">
              <img
                src={logo2}
                alt="SNS College of Technology"
                className="h-full w-auto object-contain"
              />
            </div>
            {!isHome && (
              <button
                className="flex items-center text-[10px] md:text-sm font-black hover:text-primary transition-all uppercase tracking-[0.2em] text-slate-800 group"
                onClick={() => navigate('/')}
              >
                <span className="material-icons text-xl md:text-2xl mr-1 md:mr-2 group-hover:-translate-x-1 transition-transform">arrow_back</span>
                <span className="hidden xs:inline">Home</span>
              </button>
            )}
          </div>

          {/* Right Side: SNS Institutions Branding Banner */}
          <div className="flex items-center justify-end h-full gap-1 sm:gap-4 md:gap-8 overflow-hidden">
            <div className="h-8 sm:h-12 md:h-16 w-auto flex items-center justify-end">
              <img
                src={brandingImg}
                alt="1000 Startups GenAI"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="h-10 sm:h-14 md:h-16 w-auto flex items-center justify-end">
              <img
                src={snsInstitutionsLogo}
                alt="SNS Institutions"
                className="h-full w-auto object-contain max-w-[80px] sm:max-w-[140px] md:max-w-none"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
