
'use client';

export default function JoinStark() {
  return (
    <section id="join" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 rounded-lg"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Stark%20Industries%20headquarters%20building%2C%20modern%20glass%20architecture%2C%20high-tech%20corporate%20environment%2C%20futuristic%20design%2C%20blue%20lighting%2C%20professional%20workspace%2C%20clean%20minimalist%20background%2C%20corporate%20recruitment%20scene&width=800&height=400&seq=stark-hq&orientation=landscape')`
            }}
          />
          
          <div className="relative z-10 py-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              招募未来工程师
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12">
              成为下一个拯救世界的发明家
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg text-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap">
                <i className="ri-briefcase-line mr-2 w-5 h-5 flex items-center justify-center"></i>
                🛠️ 申请实习生
              </button>
              
              <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg text-lg font-semibold text-white hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap">
                <i className="ri-chat-3-line mr-2 w-5 h-5 flex items-center justify-center"></i>
                💬 与托尼对话
              </button>
            </div>
            
            <blockquote className="text-lg text-yellow-400 italic font-light max-w-2xl mx-auto">
              "别担心预算，斯塔克工业从不吝啬咖啡与创意。"
            </blockquote>
          </div>
        </div>
        
        {/* Company Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          <div className="bg-gray-800/40 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
            <p className="text-gray-300 text-sm">项研发项目</p>
          </div>
          <div className="bg-gray-800/40 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-400 mb-2">12</div>
            <p className="text-gray-300 text-sm">个国家分部</p>
          </div>
          <div className="bg-gray-800/40 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-400 mb-2">∞</div>
            <p className="text-gray-300 text-sm">种可能性</p>
          </div>
          <div className="bg-gray-800/40 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-400 mb-2">1</div>
            <p className="text-gray-300 text-sm">个拯救世界的机会</p>
          </div>
        </div>
      </div>
    </section>
  );
}
