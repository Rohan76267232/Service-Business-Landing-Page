import React from 'react';
import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';

interface Plan {
  name: string;
  price: number;
  description: string;
  features: string[];
  icon: any;
  popular?: boolean;
  purchaseUrl: string;
}

const plans: Plan[] = [
  {
    name: 'Premium Package',
    price: 499,
    description: 'One-time payment, lifetime access',
    features: [
      'All 16+ Premium Features',
      'Unlimited Client Management',
      'Advanced Financial Tracking',
      'Premium Dashboard Access',
      'Task & Project Tracking',
      'Detailed Analytics & Reports',
      'Invoice Generation & Management',
      'Task & Project Management',
      'Calendar & Scheduling Tools',
      'Communication Log System',
      'Free Lifetime Updates',
      'Priority Customer Support',
      'Secure Data Backup'
    ],
    popular: true,
    icon: Crown,
    purchaseUrl: 'https://superprofile.bio/vp/67ac2abd81438f001275cc29'
  }
];

interface PricingCardProps {
  plan: Plan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  const { name, price, description, features, popular, icon: Icon, purchaseUrl } = plan;
  
  const handleGetStartedClick = () => {
    // Track the event with Facebook Pixel
    if ((window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout', {
        content_name: name,
        content_category: 'Premium Package',
        value: price,
        currency: 'INR'
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 border-2 border-purple-500/20 dark:border-purple-500/30 max-w-xl mx-auto w-full"
    >
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white text-sm font-semibold">
        Best Value
      </div>
      
      <Icon className="w-12 h-12 mb-6 text-purple-600 dark:text-purple-400 mx-auto" />
      
      <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white text-center">{name}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">{description}</p>
      
      <div className="mb-8 text-center">
        <span className="text-4xl font-bold text-gray-900 dark:text-white">₹{price}</span>
        <span className="text-gray-600 dark:text-gray-400">/lifetime</span>
      </div>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
            <svg className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      
      <a
        href={purchaseUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleGetStartedClick}
        className="block w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:-translate-y-0.5"
      >
        Get Started Now
      </a>
    </motion.div>
  );
};

const Pricing: React.FC = () => {
  return (
    <section id="pricing-section" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Get started with our professional plan and transform your business today.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;