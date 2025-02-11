import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const caseStudies = [
  {
    company: "TechCorp Inc.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    result: "200% Revenue Growth",
    description: "How TechCorp streamlined operations and doubled their revenue in 6 months."
  },
  {
    company: "Global Logistics",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    result: "50% Cost Reduction",
    description: "Global Logistics reduced operational costs by implementing our automation tools."
  },
  {
    company: "StartupX",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    result: "3x Team Efficiency",
    description: "How StartupX tripled their team's productivity with our collaboration features."
  }
];

export default function CaseStudies() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See how leading companies achieved remarkable results with BusinessTracker
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl hover-card"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                <img
                  src={study.image}
                  alt={study.company}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {study.company}
                  </h3>
                  <p className="text-purple-300 font-semibold">
                    {study.result}
                  </p>
                </div>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {study.description}
                </p>
                <button className="flex items-center text-purple-600 dark:text-purple-400 font-semibold group-hover:text-purple-700">
                  Read Case Study
                  <ArrowUpRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}