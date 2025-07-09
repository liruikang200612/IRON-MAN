
'use client';

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 animate-pulse" />
            <span className="text-blue-400 font-bold text-lg">Arc Reactor</span>
          </div>
          
          <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
            © 2025 Marvel | 本页面仅为粉丝致敬作品，所有角色与素材归漫威及其权益方所有。
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="text-gray-500 text-sm mb-4 sm:mb-0">
            设计 & 开发：Readdy.ai
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
              <i className="ri-twitter-line w-5 h-5 flex items-center justify-center"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
              <i className="ri-instagram-line w-5 h-5 flex items-center justify-center"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
              <i className="ri-youtube-line w-5 h-5 flex items-center justify-center"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
              <i className="ri-github-line w-5 h-5 flex items-center justify-center"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
