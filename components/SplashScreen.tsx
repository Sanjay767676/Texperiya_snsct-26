import React, { useState } from 'react';
import logo from '../images/SNS Institutions Logo.png';

const SplashScreen: React.FC = () => {
    const [isVisible] = useState(true);

    return (
        <div className={`fixed inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes scale-pulse {
                    0% {
                        opacity: 0;
                        transform: scale(0.5);
                    }
                    20% {
                        opacity: 1;
                        transform: scale(0.8);
                    }
                    50% {
                        transform: scale(1.2);
                    }
                    80% {
                        transform: scale(0.9);
                    }
                    100% {
                        transform: scale(1.1);
                    }
                }
                .animate-scale-pulse {
                    animation: scale-pulse 3s ease-out forwards;
                }
                `
            }} />
            <div className="relative">
                <img
                    src={logo}
                    alt="SNS Institutions"
                    className="max-w-[180px] md:max-w-[250px] h-auto object-contain animate-scale-pulse"
                />
            </div>
        </div>
    );
};

export default SplashScreen;
