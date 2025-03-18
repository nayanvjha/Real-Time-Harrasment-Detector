import React, { useState, useEffect } from 'react';
import { Moon, Sun, Home, Info, Layers, Play, Mail, Shield } from 'lucide-react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FeaturesPage from './pages/FeaturesPage';
import DemoPage from './pages/DemoPage';
import ContactPage from './pages/ContactPage';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';
import ThreeDBackground from './components/ThreeDBackground';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home size={18} /> },
    { id: 'about', label: 'About', icon: <Info size={18} /> },
    { id: 'features', label: 'Features', icon: <Layers size={18} /> },
    { id: 'demo', label: 'Demo', icon: <Play size={18} /> },
    { id: 'admin', label: 'Admin', icon: <Shield size={18} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={18} /> },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'features':
        return <FeaturesPage />;
      case 'demo':
        return <DemoPage />;
      case 'admin':
        return <AdminDashboard />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300 bg-cyber-primary">
      <ThreeDBackground darkMode={darkMode} />
      <Navbar 
        navItems={navItems} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        DarkModeIcon={darkMode ? Sun : Moon}
      />
      <main className="flex-grow relative">
        <div className="absolute inset-0 bg-cyber-grid bg-cyber opacity-10 pointer-events-none" />
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;