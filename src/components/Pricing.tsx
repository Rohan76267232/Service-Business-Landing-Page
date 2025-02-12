import React from 'react';
import { motion } from 'framer-motion';
import { Check, Crown, Zap } from 'lucide-react';

interface Plan {
  name: string;
  price: number;
  description: string;
  features: string[];
  icon: any; // Using 'any' for simplicity with Lucide icons
  popular?: boolean;
  purchaseUrl: string; // Add purchase URL for each plan
}

const plans: Plan[] = [
  {
    name: 'Starter',
    price: 299,
    description: 'Perfect for freelancers and solo entrepreneurs',
    features: [
      'Client Management',
      'Income & Expense Tracking',
      'Basic Invoice Generation',
      'Monthly Financial Overview',
      'Task & Project Tracking'
    ],
    icon: Zap,
    purchaseUrl: 'https://superprofile.bio/vp/67ab7c80eaa9b90012c98dd6'
  },
  {
    name: 'Professional',
    price: 499,
    description: 'Ideal for growing businesses and small teams',
    features: [
      'All Starter Plan features +',
      'Automated Financial Reports',
      'Custom Invoice Templates',
      '12-Month Performance Tracking',
      'Tax Calculation & Reconciliation',
      'Advanced Filtering & Sorting'
      
    ],
    popular: true,
    icon: Crown,
    purchaseUrl: 'https://superprofile.bio/vp/67ac2abd81438f001275cc29'
  },
  {
    name: 'Enterprise',
    price: 999,
    description: 'For large organizations with complex needs',
    features: [
      'All Pro Plan features +',
      'Unlimited Clients & Invoice Management',
      'Cashflow & Profit/Loss Insights',
      'Custom Dashboard with KPI Metrics',
      'Multiple User Access & Collaboration',
      'Priority Support & Future Updates'
      
    ],
    icon: Check,
    purchaseUrl: 'https://superprofile.bio/vp/67ac30b5eaa9b90012d1a128'
  }
];

interface PricingCardProps {
  plan: Plan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  const { name, price, description, features, popular, icon: Icon, purchaseUrl } = plan;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative p-8 rounded-2xl ${
        popular
          ? 'bg-gradient-to-br from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 border-2 border-purple-500/20 dark:border-purple-500/30'
          : 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl'
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white text-sm font-semibold">
          Most Popular
        </div>
      )}
      
      <Icon className={`w-12 h-12 mb-6 ${popular ? 'text-purple-600 dark:text-purple-400' : 'text-gray-600 dark:text-gray-400'}`} />
      
      <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{name}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6">{description}</p>
      
      <div className="mb-8">
        <span className="text-4xl font-bold text-gray-900 dark:text-white">₹{price}</span>
        <span className="text-gray-600 dark:text-gray-400">/lifetime</span>
      </div>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
            <Check className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      
      <a
        href={purchaseUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`block w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
          popular
            ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:-translate-y-0.5'
            : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
        }`}
      >
        Get Started
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
            Choose the perfect plan for your business needs. No hidden fees.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;