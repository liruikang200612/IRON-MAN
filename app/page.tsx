
'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ArmorGallery from '../components/ArmorGallery';
import TechInsights from '../components/TechInsights';
import BattleGallery from '../components/BattleGallery';
import QuotesSection from '../components/QuotesSection';
import InteractiveLab from '../components/InteractiveLab';
import JoinStark from '../components/JoinStark';
import Footer from '../components/Footer';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* HUD Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-30 opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 162, 255, 0.3) 0%, transparent 30%)`,
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
        }}
      />
      
      <Header />
      <HeroSection />
      <AboutSection />
      <ArmorGallery />
      <TechInsights />
      <BattleGallery />
      <QuotesSection />
      <InteractiveLab />
      <JoinStark />
      <Footer />
    </div>
  );
}
