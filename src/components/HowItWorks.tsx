import React from 'react';
import { ArrowRight, Laptop, BarChart, Users } from 'lucide-react';

const steps = [
  {
    icon: <Laptop className="w-12 h-12" />,
    title: "Quick & Easy Setup",
    description: "Get started in minutes with a user-friendly interface. No technical skills needed.",
    color: "from-purple-500 to-blue-500"
  },
  {
    icon: <BarChart className="w-12 h-12" />,
    title: "Real-Time Tracking",
    description: "Monitor key business metrics, finances, and client interactions with intuitive dashboards.",
    color: "from-blue-500 to-green-500"
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Seamless Growth",
    description: "Automate processes, optimize workflows, and scale your business with smart tools.",
    color: "from-green-500 to-yellow-500"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Three simple steps to transform your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/4 right-0 transform translate-x-1/2">
                  <ArrowRight className="w-8 h-8 text-gray-400 dark:text-gray-600" />
                </div>
              )}
              <div className="p-8 rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover-card">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white mb-6 mx-auto`}>
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}