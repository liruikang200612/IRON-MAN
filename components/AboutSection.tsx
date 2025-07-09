
'use client';

export default function AboutSection() {
  const infoCards = [
    { label: '出生', value: '1970 年，美国' },
    { label: '能力', value: '动力装甲 · 人工智能 · 纳米科技' },
    { label: '代表团队', value: '复仇者联盟 · S.H.I.E.L.D.' },
    { label: '信条', value: '"英雄就是在别人做不到时挺身而出"' }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          钢铁侠是谁？
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              托尼·斯塔克（Anthony Edward Stark），亦称"钢铁侠"。
              他曾是花花公子，也是天才发明家。在被自己武器的碎片刺入心脏边缘的那一刻，他决定把天堂导向地球——用科技守护生命。
              自 2008 年 Mark I 初次腾空，斯塔克便开启了英雄新纪元。
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="https://static.readdy.ai/image/ed2df9a328fefa47e67b664756997f6a/109a626e280dea101b8d176978131669.jfif"
              alt="Tony Stark"
              className="w-full h-96 object-cover object-top rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoCards.map((card, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6 hover:bg-gray-800/70 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <h3 className="text-blue-400 font-semibold mb-2">{card.label}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{card.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
