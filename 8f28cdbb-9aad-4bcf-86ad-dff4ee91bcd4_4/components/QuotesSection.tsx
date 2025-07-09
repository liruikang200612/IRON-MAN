
'use client';

import { useState, useEffect } from 'react';

export default function QuotesSection() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const quotes = [
    "有时候，我们需要用框架去界定我们是谁。",
    "如果我们无法保护地球，我们就一定要为它复仇。",
    "天才、亿万富翁、花花公子、慈善家 —— 这只是我的简历。",
    "I LOVE YOU 3000."
  ];

  useEffect(() => {
    const typeText = async () => {
      setIsTyping(true);
      setDisplayText('');
      const text = quotes[currentQuote];
      
      for (let i = 0; i <= text.length; i++) {
        setDisplayText(text.substring(0, i));
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      
      setIsTyping(false);
      
      // Wait 3 seconds then move to next quote
      setTimeout(() => {
        setCurrentQuote((prev) => (prev + 1) % quotes.length);
      }, 3000);
    };

    typeText();
  }, [currentQuote]);

  return (
    <section id="quotes" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
          经典名言
        </h2>
        
        <div className="relative min-h-[200px] flex items-center justify-center">
          <div className="bg-gray-800/30 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-12 relative">
            {/* Quote marks */}
            <div className="absolute top-4 left-6 text-6xl text-yellow-400/50 font-serif">"</div>
            <div className="absolute bottom-4 right-6 text-6xl text-yellow-400/50 font-serif">"</div>
            
            <blockquote className="text-2xl md:text-3xl font-light text-white leading-relaxed min-h-[120px] flex items-center justify-center">
              {displayText}
              {isTyping && <span className="animate-pulse text-yellow-400">|</span>}
            </blockquote>
            
            <div className="mt-8 text-gray-400">
              <p>— 托尼·斯塔克</p>
            </div>
          </div>
        </div>
        
        {/* Quote Navigation Dots */}
        <div className="flex justify-center space-x-3 mt-8">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuote(index)}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                currentQuote === index ? 'bg-yellow-400' : 'bg-gray-600 hover:bg-yellow-400/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
