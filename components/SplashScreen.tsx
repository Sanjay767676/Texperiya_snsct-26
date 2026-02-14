import React, { useState, useEffect } from 'react';
import logo from '../images/SNS Institutions Logo.png';

const SplashScreen: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div className={`fixed inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes glitch-in {
                    0% { opacity: 0; transform: scale(1.1) skew(10deg); filter: hue-rotate(90deg) blur(10px); }
                    10% { opacity: 0.5; transform: scale(1) skew(0deg); filter: hue-rotate(0deg) blur(0px); }
                    12% { opacity: 0.1; transform: translateX(-5px); }
                    14% { opacity: 0.7; transform: translateX(5px); }
                    16% { opacity: 0.2; transform: skewX(20deg); }
                    18% { opacity: 1; transform: skewX(0deg); }
                    20% { opacity: 0.8; clip-path: inset(10% 0 50% 0); }
                    22% { opacity: 1; clip-path: inset(0 0 0 0); }
                    80% { filter: brightness(1); }
                    90% { filter: brightness(2) blur(2px); }
                    100% { filter: brightness(1); opacity: 1; transform: scale(1.05); }
                }
                
                @keyframes scanline {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(100%); }
                }

                .animate-glitch {
                    animation: glitch-in 1.5s ease-out forwards;
                }

                .scanline {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background: rgba(255, 193, 7, 0.5);
                    box-shadow: 0 0 10px #FFC107;
                    animation: scanline 2s linear infinite;
                    pointer-events: none;
                }

                .logo-shadow {
                    filter: drop-shadow(0 0 15px rgba(255, 193, 7, 0.3));
                }
                `
            }} />

            <div className="relative flex items-center justify-center overflow-hidden p-10">
                <div className="scanline" style={{ animationDuration: '1.5s', opacity: 0.3 }}></div>
                <img
                    src={logo}
                    alt="SNS Institutions"
                    className="max-w-[150px] sm:max-w-[200px] md:max-w-[250px] h-auto object-contain animate-glitch logo-shadow"
                />
            </div>
        </div>
    );
};

export default SplashScreen;
