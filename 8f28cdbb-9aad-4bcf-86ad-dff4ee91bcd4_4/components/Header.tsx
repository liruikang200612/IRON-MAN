
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 1000);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-blue-900/30">
      <nav className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className={`relative w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 ${pulse ? 'animate-pulse shadow-lg shadow-blue-400/50' : ''}`}>
            <div className="absolute inset-1 rounded-full bg-white/20" />
            <div className="absolute inset-2 rounded-full bg-white/40" />
          </div>
          <span className="font-bold text-xl text-blue-400">Arc Reactor</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer whitespace-nowrap">简介</button>
          <button onClick={() => scrollToSection('armor')} className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer whitespace-nowrap">装甲库</button>
          <button onClick={() => scrollToSection('tech')} className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer whitespace-nowrap">技术洞察</button>
          <button onClick={() => scrollToSection('battles')} className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer whitespace-nowrap">经典战役</button>
          <button onClick={() => scrollToSection('quotes')} className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer whitespace-nowrap">名言集</button>
          <button onClick={() => scrollToSection('lab')} className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer whitespace-nowrap">互动实验室</button>
          <button onClick={() => scrollToSection('join')} className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer whitespace-nowrap">加入斯塔克工业</button>
        </div>
      </nav>
    </header>
  );
}
