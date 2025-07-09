
'use client';

import { useState } from 'react';

export default function BattleGallery() {
  const [currentBattle, setCurrentBattle] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  
  const battles = [
    {
      title: '纽约之战',
      year: '2012',
      subtitle: '第一次，地球明白了外星威胁',
      description: '齐塔瑞大军入侵纽约，复仇者联盟首次集结。托尼·斯塔克驾驶核弹穿越虫洞，拯救了整个城市。',
      stats: { enemies: '10,000+', duration: '4小时', damage: '轻微' },
      image: 'https://readdy.ai/api/search-image?query=Iron%20Man%20flying%20through%20New%20York%20city%20during%20alien%20invasion%2C%20Chitauri%20army%20in%20background%2C%20epic%20battle%20scene%2C%20skyscrapers%2C%20explosions%2C%20heroic%20pose%2C%20cinematic%20action%20shot%2C%20Avengers%20assembly&width=800&height=450&seq=battle1&orientation=landscape'
    },
    {
      title: '索科维亚危机',
      year: '2015',
      subtitle: '奥创与内心的怪物',
      description: '人工智能奥创试图毁灭人类，托尼·斯塔克面对自己创造的威胁，与复仇者联盟并肩作战。',
      stats: { enemies: '1,000+', duration: '6小时', damage: '重度' },
      image: 'https://readdy.ai/api/search-image?query=Iron%20Man%20fighting%20Ultron%20robots%20in%20destroyed%20Sokovia%20city%2C%20floating%20city%20in%20sky%2C%20intense%20battle%2C%20red%20and%20gold%20armor%2C%20mechanical%20enemies%2C%20apocalyptic%20scene%2C%20dramatic%20lighting&width=800&height=450&seq=battle2&orientation=landscape'
    },
    {
      title: '无限战争',
      year: '2018',
      subtitle: '孤身登泰坦',
      description: '在泰坦星上与灭霸正面交锋，尽管失败，但展现了凡人面对神明的勇气。',
      stats: { enemies: '1', duration: '30分钟', damage: '极重' },
      image: 'https://readdy.ai/api/search-image?query=Iron%20Man%20fighting%20Thanos%20on%20planet%20Titan%2C%20space%20battle%2C%20destroyed%20planet%20surface%2C%20infinity%20gauntlet%2C%20cosmic%20battle%2C%20dramatic%20confrontation%2C%20superhero%20vs%20villain%2C%20epic%20space%20scene&width=800&height=450&seq=battle3&orientation=landscape'
    },
    {
      title: '终局之战',
      year: '2023',
      subtitle: '响指之后，传奇不朽',
      description: '最终战役中，托尼·斯塔克夺取无限宝石，用自己的生命换取全宇宙的和平。',
      stats: { enemies: '100,000+', duration: '2小时', damage: '终极' },
      image: 'https://readdy.ai/api/search-image?query=Iron%20Man%20with%20Infinity%20Stones%20glowing%20on%20armor%2C%20final%20battle%20scene%2C%20heroic%20sacrifice%20moment%2C%20epic%20lighting%2C%20cosmic%20power%2C%20emotional%20scene%2C%20ultimate%20Iron%20Man%20moment%2C%20Avengers%20Endgame&width=800&height=450&seq=battle4&orientation=landscape'
    }
  ];

  const nextBattle = () => {
    setCurrentBattle((prev) => (prev + 1) % battles.length);
  };

  const prevBattle = () => {
    setCurrentBattle((prev) => (prev - 1 + battles.length) % battles.length);
  };

  return (
    <section id="battles" className="py-20 px-6 bg-gradient-to-b from-gray-900/50 to-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
          经典战役回顾
        </h2>
        
        <div className="relative">
          {/* Main Battle Display */}
          <div className="relative bg-gray-800/40 backdrop-blur-sm border border-red-500/30 rounded-lg overflow-hidden">
            <img 
              src={battles[currentBattle].image}
              alt={battles[currentBattle].title}
              className="w-full h-96 object-cover cursor-pointer"
              onClick={() => setFullscreen(true)}
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-3xl font-bold text-white mb-2">
                {battles[currentBattle].title} ({battles[currentBattle].year})
              </h3>
              <p className="text-xl text-red-400 mb-3">{battles[currentBattle].subtitle}</p>
              <p className="text-gray-300 mb-4 leading-relaxed">{battles[currentBattle].description}</p>
              
              {/* Battle Stats */}
              <div className="flex flex-wrap gap-4">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                  <span className="text-red-400 text-sm">敌军数量: </span>
                  <span className="text-white font-semibold">{battles[currentBattle].stats.enemies}</span>
                </div>
                <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                  <span className="text-red-400 text-sm">战斗时长: </span>
                  <span className="text-white font-semibold">{battles[currentBattle].stats.duration}</span>
                </div>
                <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                  <span className="text-red-400 text-sm">伤亡程度: </span>
                  <span className="text-white font-semibold">{battles[currentBattle].stats.damage}</span>
                </div>
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevBattle}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all cursor-pointer"
            >
              <i className="ri-arrow-left-line w-6 h-6 flex items-center justify-center"></i>
            </button>
            
            <button 
              onClick={nextBattle}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all cursor-pointer"
            >
              <i className="ri-arrow-right-line w-6 h-6 flex items-center justify-center"></i>
            </button>
          </div>
          
          {/* Battle Thumbnails */}
          <div className="flex justify-center space-x-4 mt-8">
            {battles.map((battle, index) => (
              <button
                key={index}
                onClick={() => setCurrentBattle(index)}
                className={`w-20 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                  currentBattle === index ? 'border-red-500' : 'border-gray-600 hover:border-red-400'
                }`}
              >
                <img 
                  src={battle.image}
                  alt={battle.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Fullscreen Modal */}
      {fullscreen && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <button 
            onClick={() => setFullscreen(false)}
            className="absolute top-6 right-6 text-white text-3xl hover:text-red-400 transition-colors cursor-pointer w-12 h-12 flex items-center justify-center"
          >
            <i className="ri-close-line w-8 h-8 flex items-center justify-center"></i>
          </button>
          
          <img 
            src={battles[currentBattle].image}
            alt={battles[currentBattle].title}
            className="max-w-full max-h-full object-contain"
          />
          
          <div className="absolute bottom-6 left-6 right-6 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">
              {battles[currentBattle].title} ({battles[currentBattle].year})
            </h3>
            <p className="text-red-400 text-lg">{battles[currentBattle].subtitle}</p>
          </div>
        </div>
      )}
    </section>
  );
}
