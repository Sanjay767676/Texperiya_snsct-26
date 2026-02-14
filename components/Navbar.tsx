import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import brandingImg from '../images/1000 Startups - SNS Group - GenAI 1.png';
import logo2 from '../images/logo2.png';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isCSPage = location.pathname === '/cs';

  if (isCSPage) return null;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 h-24 flex items-center shadow-sm">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full h-full">
        <div className="flex justify-between items-center h-full relative">

          {/* Left Side: Navigation / Context */}
          <div className="flex-1 flex items-center gap-8">
            <div className="h-14 md:h-16 w-auto flex items-center">
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
                Home
              </button>
            )}
          </div>

          {/* Center: Clear Area */}
          <div className="hidden md:block flex-1"></div>

          {/* Right Side: SNS Institutions Branding Banner */}
          <div className="flex-2 flex justify-end items-center h-full gap-8">
            <div className="h-14 md:h-16 w-auto flex items-center justify-end">
              <img
                src={brandingImg}
                alt="1000 Startups GenAI"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="h-14 md:h-16 w-auto flex items-center justify-end">
              <img
                src="https://snsgroups.com/wp-content/uploads/2024/01/sns-logo-1.png"
                alt="SNS Institutions Branding"
                className="h-full w-auto object-contain"
                title="SNS Institutions: Building 1000 AI-Startups"
                loading="eager"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x120?text=SNS+INSTITUTIONS+BRANDS';
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
