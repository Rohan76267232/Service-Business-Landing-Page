import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [visitorCount, setVisitorCount] = useState(85);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

  useEffect(() => {
    setIsVisible(true);
    
    // Timer for countdown
    const countdownTimer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    // Timer for visitor count
    const visitorTimer = setInterval(() => {
      // Random change between -2 and +3
      const change = Math.floor(Math.random() * 6) - 2;
      setVisitorCount(prev => {
        const newCount = prev + change;
        // Keep count between 80 and 95
        return Math.min(195, Math.max(80, newCount));
      });
    }, 2000);

    return () => {
      clearInterval(countdownTimer);
      clearInterval(visitorTimer);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800" />
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Transform Your Business
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">
                With Smart Tracking
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Join over 10,000+ businesses that use BusinessTracker to streamline operations, 
              boost productivity, and increase revenue by up to 300%.
            </p>

            <div className="relative w-full max-w-4xl mx-auto mb-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)]">
                <img 
                  src="https://figmaui4free.com/wp-content/uploads/2022/06/Saas-B2B-Dashboard-Design-1.png"
                  alt="Business Analytics Dashboard"
                  className="w-full rounded-xl"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a 
                href="https://superprofile.bio/vp/66fd6d642a7c60001380464c"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all inline-flex items-center"
              >
                Start Free Trial
                <ArrowRight className="ml-2" />
              </a>
              <button className="text-gray-600 dark:text-gray-300 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
                Watch Demo
              </button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 dark:text-gray-400">
              <p>
                <span className="font-semibold text-purple-600 dark:text-purple-400">{visitorCount}</span> people are viewing this page
              </p>
              <p>
                Special offer ends in: <span className="font-semibold text-purple-600 dark:text-purple-400">{formatTime(timeLeft)}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}