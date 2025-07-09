
'use client';

import { useState } from 'react';

export default function ArmorGallery() {
  const [selectedArmor, setSelectedArmor] = useState(null);
  
  const armors = [
    {
      year: '2008',
      name: 'Mark I',
      highlight: '简陋钢壳 + 火焰喷射',
      quote: '在山洞里，用一堆废料！',
      image: 'https://readdy.ai/api/search-image?query=Iron%20Man%20Mark%201%20armor%20suit%2C%20crude%20metal%20construction%2C%20cave%20workshop%20background%2C%20raw%20steel%20plating%2C%20primitive%20arc%20reactor%2C%20battle-worn%20appearance%2C%20dim%20lighting%2C%20first%20Iron%20Man%20suit%20design%2C%20improvised%20technology&width=400&height=600&seq=mark1&orientation=portrait'
    },
    {
      year: '2010',
      name: 'Mark IV–VI',
      highlight: '可拆分模块 + 三角方舟',
      quote: '现在这才像话。',
      image: 'https://readdy.ai/api/search-image?query=Iron%20Man%20Mark%206%20armor%20suit%2C%20sleek%20red%20and%20gold%20design%2C%20triangular%20arc%20reactor%20glowing%20blue%2C%20modular%20construction%2C%20polished%20metallic%20surface%2C%20high-tech%20laboratory%20background%2C%20refined%20superhero%20armor&width=400&height=600&seq=mark6&orientation=portrait'
    },
    {
      year: '2013',
      name: 'Mark XLII',
      highlight: '遥控分体飞行',
      quote: '想要就来，不想要就走。',
      image: 'https://readdy.ai/api/search-image?query=Iron%20Man%20Mark%2042%20armor%20flying%20apart%20in%20pieces%2C%20red%20and%20gold%20armor%20components%20separating%2C%20remote%20control%20technology%2C%20dynamic%20action%20scene%2C%20advanced%20robotics%2C%20futuristic%20armor%20design&width=400&height=600&seq=mark42&orientation=portrait'
    },
    {
      year: '2015',
      name: 'Hulkbuster',
      highlight: '巨形反浩克系统',
      quote: '睡觉时间到了，大个子。',
      image: 'https://readdy.ai/api/search-image?query=Iron%20Man%20Hulkbuster%20armor%2C%20massive%20red%20and%20gold%20suit%2C%20oversized%20proportions%2C%20heavy%20armored%20plating%2C%20powerful%20stance%2C%20city%20battle%20background%2C%20anti-Hulk%20technology%2C%20giant%20mech%20suit%20design&width=400&height=600&seq=hulkbuster&orientation=portrait'
    },
    {
      year: '2018',
      name: 'Mark L',
      highlight: '纳米粒子瞬时成甲',
      quote: '纳米时代的开箱即用。',
      image: 'https://readdy.ai/api/search-image?query=Iron%20Man%20Mark%2050%20nanotech%20armor%2C%20sleek%20modern%20design%2C%20nanotechnology%20particles%20forming%20suit%2C%20advanced%20blue%20arc%20reactor%2C%20futuristic%20metallic%20surface%2C%20high-tech%20background%2C%20cutting-edge%20armor%20design&width=400&height=600&seq=mark50&orientation=portrait'
    },
    {
      year: '2023',
      name: 'Mark LXXXV',
      highlight: '无限宝石充能，最终一役',
      quote: '我，就是，钢铁侠。',
      image: 'https://readdy.ai/api/search-image?query=Iron%20Man%20Mark%2085%20armor%20with%20Infinity%20Stones%2C%20powerful%20energy%20glow%2C%20red%20and%20gold%20suit%20with%20cosmic%20power%2C%20final%20battle%20scene%2C%20heroic%20pose%2C%20dramatic%20lighting%2C%20ultimate%20Iron%20Man%20design&width=400&height=600&seq=mark85&orientation=portrait'
    }
  ];

  return (
    <section id="armor" className="py-20 px-6 bg-gradient-to-b from-gray-900/50 to-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent">
          装甲进化年表
        </h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-yellow-400 to-red-500" />
          
          {/* Armor Cards */}
          <div className="flex overflow-x-auto pb-8 space-x-8" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {armors.map((armor, index) => (
              <div key={index} className="flex-shrink-0 w-80">
                <div 
                  className="bg-gray-800/60 backdrop-blur-sm border border-red-500/30 rounded-lg p-6 hover:bg-gray-800/80 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-red-500/20 transform hover:scale-105"
                  onClick={() => setSelectedArmor(armor)}
                >
                  <div className="text-center mb-4">
                    <div className="w-4 h-4 bg-red-500 rounded-full mx-auto mb-4 animate-pulse" />
                    <h3 className="text-2xl font-bold text-red-400 mb-2">{armor.year}</h3>
                    <h4 className="text-xl font-semibold text-white mb-2">{armor.name}</h4>
                    <p className="text-gray-300 text-sm">{armor.highlight}</p>
                  </div>
                  
                  <img 
                    src={armor.image}
                    alt={armor.name}
                    className="w-full h-64 object-cover object-top rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Modal */}
      {selectedArmor && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-gray-900 border border-red-500/30 rounded-lg p-8 max-w-2xl w-full relative">
            <button 
              onClick={() => setSelectedArmor(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl cursor-pointer w-8 h-8 flex items-center justify-center"
            >
              <i className="ri-close-line w-6 h-6 flex items-center justify-center"></i>
            </button>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-red-400 mb-2">{selectedArmor.name}</h3>
                <p className="text-xl text-gray-300 mb-4">{selectedArmor.year}</p>
                <p className="text-gray-300 mb-6">{selectedArmor.highlight}</p>
                <blockquote className="text-lg text-yellow-400 italic border-l-4 border-yellow-400 pl-4">
                  "{selectedArmor.quote}"
                </blockquote>
              </div>
              
              <div className="relative">
                <img 
                  src={selectedArmor.image}
                  alt={selectedArmor.name}
                  className="w-full h-96 object-cover object-top rounded-lg animate-spin-slow"
                  style={{ animation: 'spin 10s linear infinite' }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
