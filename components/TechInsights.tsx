
'use client';

import { useState } from 'react';

export default function TechInsights() {
  const [flippedCard, setFlippedCard] = useState(null);
  
  const techs = [
    {
      name: 'Arc Reactor',
      description: '清洁能量极限形态，为装甲与城市供电',
      details: '基于钯元素的小型聚变反应堆，能够产生3千兆焦耳/秒的清洁能源，足以为整个纽约市供电一年。反应堆直径仅8.5厘米，重量不到500克。',
      icon: 'ri-flashlight-line',
      color: 'from-blue-400 to-cyan-300'
    },
    {
      name: 'J.A.R.V.I.S. / F.R.I.D.A.Y.',
      description: 'AI 管家与战术助手，操控全球防御网络',
      details: '基于神经网络的人工智能系统，拥有1.2艾字节的数据处理能力。能够同时管理全球17个卫星网络，实时分析47种语言，预测成功率高达94.7%。',
      icon: 'ri-robot-line',
      color: 'from-green-400 to-emerald-300'
    },
    {
      name: 'Repulsor Beam',
      description: '双掌/胸口高能粒子束，精准打击零误差',
      details: '基于反重力粒子的高能武器系统，能量输出可达8千兆瓦。射程最远可达2公里，精准度误差小于0.01毫米，充能时间仅需0.3秒。',
      icon: 'ri-flashlight-fill',
      color: 'from-red-400 to-pink-300'
    },
    {
      name: '纳米铸甲',
      description: '声控意念触发，3 秒全身成型',
      details: '由48亿个纳米机器人组成的自适应装甲系统。响应速度0.00015秒，完整成型时间2.8秒。纳米粒子可重新配置为85种不同武器形态。',
      icon: 'ri-shirt-line',
      color: 'from-purple-400 to-indigo-300'
    },
    {
      name: 'E.D.I.T.H.',
      description: '卫星级 AR 眼镜，实时情报与武器调度',
      details: '连接3000颗军用卫星的增强现实系统。实时监控覆盖全球99.7%的区域，数据传输延迟小于12毫秒，同时控制874架无人机编队。',
      icon: 'ri-glasses-line',
      color: 'from-yellow-400 to-orange-300'
    }
  ];

  const handleCardClick = (index) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  return (
    <section id="tech" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
          核心科技
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techs.map((tech, index) => (
            <div 
              key={index}
              className="relative h-80 cursor-pointer perspective-1000"
              onClick={() => handleCardClick(index)}
            >
              <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${flippedCard === index ? 'rotate-y-180' : ''}`}>
                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden bg-gray-800/60 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6 hover:bg-gray-800/80 transition-all duration-300">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${tech.color} flex items-center justify-center mb-6 mx-auto`}>
                    <i className={`${tech.icon} text-2xl text-white w-8 h-8 flex items-center justify-center`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">{tech.name}</h3>
                  <p className="text-gray-300 text-sm text-center leading-relaxed">{tech.description}</p>
                  
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 border-2 border-cyan-400 rounded-full flex items-center justify-center animate-bounce">
                      <i className="ri-arrow-right-line text-cyan-400 w-4 h-4 flex items-center justify-center"></i>
                    </div>
                  </div>
                </div>
                
                {/* Back Side */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gray-900/80 backdrop-blur-sm border border-cyan-500/50 rounded-lg p-6">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${tech.color} flex items-center justify-center mb-4 mx-auto`}>
                    <i className={`${tech.icon} text-lg text-white w-6 h-6 flex items-center justify-center`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-cyan-400 mb-4 text-center">{tech.name}</h3>
                  <p className="text-gray-300 text-xs leading-relaxed text-center">{tech.details}</p>
                  
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white text-xs font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all whitespace-nowrap">
                      观看演示
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
