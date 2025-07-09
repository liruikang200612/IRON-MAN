
'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [textVisible, setTextVisible] = useState(false);
  const [currentChar, setCurrentChar] = useState(0);
  const title = "I AM IRON MAN";

  useEffect(() => {
    setTextVisible(true);
    const timer = setInterval(() => {
      setCurrentChar(prev => {
        if (prev < title.length) {
          return prev + 1;
        }
        clearInterval(timer);
        return prev;
      });
    }, 150);
    return () => clearInterval(timer);
  }, []);

  const scrollToArmor = () => {
    document.getElementById('armor')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900/20 via-black to-yellow-900/20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Iron%20Man%20suit%20flying%20through%20space%20with%20arc%20reactor%20glowing%20bright%20blue%2C%20dramatic%20lighting%2C%20cinematic%20shot%2C%20dark%20space%20background%20with%20stars%2C%20high-tech%20armor%20details%2C%20red%20and%20gold%20metallic%20surfaces%20reflecting%20light%2C%20powerful%20pose%20with%20repulsors%20charging%2C%20epic%20superhero%20scene&width=1920&height=1080&seq=hero-bg&orientation=landscape')`
        }}
      />
      
      {/* Arc Reactor Pulse Effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 rounded-full bg-blue-400/10 animate-ping" />
        <div className="absolute w-64 h-64 rounded-full bg-blue-400/20 animate-pulse" />
        <div className="absolute w-32 h-32 rounded-full bg-blue-400/30 animate-ping" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-red-500 via-yellow-400 to-red-600 bg-clip-text text-transparent">
          {title.substring(0, currentChar)}
          <span className="animate-pulse">|</span>
        </h1>
        
        <div className={`transition-all duration-1000 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light">
            亿万富翁 · 天才发明家 · 拯救世界的钢铁英雄
          </p>
          
          <div className="flex justify-center">
            <button 
              onClick={scrollToArmor}
              className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-yellow-500 rounded-lg text-lg font-semibold hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap flex items-center justify-center"
            >
              <i className="ri-play-fill mr-2"></i>
              进入装甲库
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500 to-yellow-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
