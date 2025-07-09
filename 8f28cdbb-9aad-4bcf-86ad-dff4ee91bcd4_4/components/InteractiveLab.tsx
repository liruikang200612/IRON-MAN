
'use client';

import { useState } from 'react';

export default function InteractiveLab() {
  const [repulsorCharging, setRepulsorCharging] = useState(false);
  const [jarvisInput, setJarvisInput] = useState('');
  const [jarvisResponse, setJarvisResponse] = useState('');
  const [arActive, setArActive] = useState(false);
  const [hitCount, setHitCount] = useState(0);

  const fireRepulsor = () => {
    setRepulsorCharging(true);
    setHitCount(prev => prev + 1);
    
    // Screen shake effect
    document.body.style.animation = 'shake 0.5s';
    
    setTimeout(() => {
      setRepulsorCharging(false);
      document.body.style.animation = '';
    }, 1000);
  };

  const callJarvis = () => {
    if (!jarvisInput.trim()) return;
    
    const responses = [
      `好的，先生。${jarvisInput}已经处理完毕。`,
      `收到指示，先生。正在执行${jarvisInput}。`,
      `明白了，斯塔克先生。${jarvisInput}操作已启动。`,
      `当然可以，先生。${jarvisInput}功能已激活。`,
      `遵命，老板。${jarvisInput}系统运行正常。`
    ];
    
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    setJarvisResponse(randomResponse);
    setJarvisInput('');
    
    // Clear response after 5 seconds
    setTimeout(() => setJarvisResponse(''), 5000);
  };

  const toggleAR = () => {
    setArActive(!arActive);
  };

  return (
    <section id="lab" className="py-20 px-6 bg-gradient-to-b from-gray-900/50 to-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          互动实验室
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Repulsor Module */}
          <div className="bg-gray-800/60 backdrop-blur-sm border border-purple-500/30 rounded-lg p-8 text-center hover:bg-gray-800/80 transition-all duration-300">
            <div className="mb-6">
              <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center transition-all duration-300 ${
                repulsorCharging 
                  ? 'bg-gradient-to-r from-red-500 to-yellow-400 shadow-lg shadow-red-500/50 animate-pulse' 
                  : 'bg-gradient-to-r from-red-600/50 to-yellow-500/50'
              }`}>
                <i className="ri-flashlight-fill text-3xl text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4">掌炮发射</h3>
            <p className="text-gray-300 text-sm mb-6">体验钢铁侠的标志性武器</p>
            
            <button
              onClick={fireRepulsor}
              disabled={repulsorCharging}
              className="w-full py-3 bg-gradient-to-r from-red-600 to-yellow-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 disabled:opacity-50 cursor-pointer whitespace-nowrap"
            >
              {repulsorCharging ? '充能中...' : '⚡ 充能并发射'}
            </button>
            
            {hitCount > 0 && (
              <div className="mt-4 p-3 bg-black/50 rounded-lg">
                <p className="text-green-400 text-sm">HUD 显示: 命中目标 {hitCount} 次</p>
                <p className="text-red-400 text-xs">能量消耗: {hitCount * 12}%</p>
              </div>
            )}
          </div>
          
          {/* JARVIS Module */}
          <div className="bg-gray-800/60 backdrop-blur-sm border border-purple-500/30 rounded-lg p-8 hover:bg-gray-800/80 transition-all duration-300">
            <div className="mb-6 text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-green-500/50 to-blue-500/50 flex items-center justify-center">
                <i className="ri-robot-line text-3xl text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4 text-center">AI 语音对话</h3>
            <p className="text-gray-300 text-sm mb-6 text-center">与 JARVIS 智能助手交流</p>
            
            <div className="space-y-4">
              <input
                type="text"
                value={jarvisInput}
                onChange={(e) => setJarvisInput(e.target.value)}
                placeholder="呼叫 JARVIS..."
                className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:outline-none text-sm"
                onKeyPress={(e) => e.key === 'Enter' && callJarvis()}
              />
              
              <button
                onClick={callJarvis}
                className="w-full py-3 bg-gradient-to-r from-green-600 to-blue-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                发送指令
              </button>
              
              {jarvisResponse && (
                <div className="p-4 bg-green-900/30 border border-green-500/30 rounded-lg">
                  <p className="text-green-400 text-sm">{jarvisResponse}</p>
                </div>
              )}
            </div>
          </div>
          
          {/* AR Module */}
          <div className="bg-gray-800/60 backdrop-blur-sm border border-purple-500/30 rounded-lg p-8 text-center hover:bg-gray-800/80 transition-all duration-300">
            <div className="mb-6">
              <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center transition-all duration-300 ${
                arActive 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-400 shadow-lg shadow-purple-500/50 animate-pulse' 
                  : 'bg-gradient-to-r from-purple-600/50 to-pink-500/50'
              }`}>
                <i className="ri-glasses-line text-3xl text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4">装甲试穿 AR</h3>
            <p className="text-gray-300 text-sm mb-6">虚拟体验 Mark L 纳米装甲</p>
            
            <button
              onClick={toggleAR}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              {arActive ? '退出 AR' : '🕶️ 开启摄像头试穿'}
            </button>
            
            {arActive && (
              <div className="mt-4 p-3 bg-purple-900/30 border border-purple-500/30 rounded-lg">
                <p className="text-purple-400 text-sm">AR 模式已激活</p>
                <p className="text-gray-400 text-xs mt-1">正在检测上半身轮廓...</p>
                <div className="mt-2 w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-400 h-2 rounded-full animate-pulse" style={{ width: '75%' }}></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
      `}</style>
    </section>
  );
}
