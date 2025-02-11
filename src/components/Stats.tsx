import React from 'react';
import { Users, BarChart2, Award, Globe } from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-8 h-8" />,
    value: '10,000+',
    label: 'Active Users',
    description: 'Trusted by businesses worldwide'
  },
  {
    icon: <BarChart2 className="w-8 h-8" />,
    value: '300%',
    label: 'ROI Increase',
    description: 'Average customer growth'
  },
  {
    icon: <Award className="w-8 h-8" />,
    value: '99.9%',
    label: 'Uptime',
    description: 'Enterprise-grade reliability'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    value: '50+',
    label: 'Countries',
    description: 'Global presence'
  }
];

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join thousands of businesses achieving remarkable results with our platform
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-white/30 dark:bg-gray-800/30 p-8 rounded-2xl 
                       shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)]
                       transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                  {stat.label}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}