
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ComputerScienceEvents from './pages/ComputerScienceEvents';
import NonCSDomain from './pages/NonCSDomain';

const App: React.FC = () => {
  return (
    <Router>
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
    </Router>
  );
};

export default App;
