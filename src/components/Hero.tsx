import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const words = ["Transform", "Your", "Business"];

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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center pt-32 md:pt-40 lg:pt-48">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              <div className="overflow-hidden">
                {words.map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-4 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent"
                    variants={textVariants}
                  >
                    {word.split('').map((letter, index) => (
                      <motion.span
                        key={index}
                        className="inline-block font-sans"
                        variants={letterVariants}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </motion.span>
                ))}
              </div>
              <motion.span 
                className="text-gray-900 dark:text-white mt-4 block font-bold"
                variants={textVariants}
              >
                With Smart Tracking
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto font-medium leading-relaxed"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Join over 10,000+ businesses that use BusinessTracker to streamline operations, 
              boost productivity, and increase revenue by up to 300%.
            </motion.p>

            <div className="relative w-full max-w-4xl mx-auto mb-8">
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <img 
                  src="https://i.etsystatic.com/40473668/r/il/63fbef/6413092334/il_1588xN.6413092334_e1kv.jpg"
                  alt="Business Analytics Dashboard"
                  className="w-full rounded-xl"
                />
              </motion.div>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <a 
                href="#pricing"
                className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all inline-flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2" />
              </a>
              <button className="text-gray-600 dark:text-gray-300 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
                View Pricing
              </button>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-500 dark:text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <p>
                <span className="font-semibold text-purple-600 dark:text-purple-400">{visitorCount}</span> people are viewing this page
              </p>
              <p>
                Special offer ends in: <span className="font-semibold text-purple-600 dark:text-purple-400">{formatTime(timeLeft)}</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
