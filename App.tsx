
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ComputerScienceEvents from './pages/ComputerScienceEvents';
import NonCSDomain from './pages/NonCSDomain';
import SplashScreen from './components/SplashScreen';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 3000);

    const removeTimer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      {showSplash ? (
        <SplashScreen isExiting={isExiting} />
      ) : (
        <div className="min-h-screen flex flex-col bg-background-light transition-colors duration-300">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cs" element={<ComputerScienceEvents />} />
              <Route path="/non-cs" element={<NonCSDomain />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </Router>
  );
};

export default App;
