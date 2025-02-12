import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const benefits = [
  "Instant Access – No waiting, start using immediately.",
  "One-Time Purchase – No subscriptions, lifetime access.",
  "Fully Customizable – Tailor it to your business needs.",
  "Step-by-Step Guide – Easy setup, no tech skills needed.",
  "24/7 Support – Get help whenever you need it.",
  "Use Anywhere – Works on Google Sheets & Excel."
];

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join thousands of successful businesses that trust Business Tracker Spreadsheet for seamless operations.
            </p>
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <Check className="w-6 h-6 text-purple-300 mr-3" />
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
            <a
              href="#pricing"
              className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold 
                       hover:bg-purple-50 transform hover:-translate-y-1 transition-all duration-300
                       inline-flex items-center"
            >
              View Pricing Plans
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-2xl blur-2xl" />
            <div className="relative glass-effect rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Join 10,000+ Companies</h3>
                <p className="text-purple-100">
                  Experience why industry leaders choose BusinessTracker
                </p>
              </div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 
                           placeholder-purple-200 focus:outline-none focus:border-white"
                />
                <input
                  type="email"
                  placeholder="Work Email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 
                           placeholder-purple-200 focus:outline-none focus:border-white"
                />
                <a
                  href="#pricing"
                  className="block w-full bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold
                           hover:bg-purple-50 transition-colors text-center"
                >
                  See Pricing Options
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}