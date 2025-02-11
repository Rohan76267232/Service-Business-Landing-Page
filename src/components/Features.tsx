import React from 'react';
import { 
  BarChart, Clock, Globe, Shield, 
  Zap, MessageSquare, PieChart, Users,
  FileCheck, Wallet, Briefcase, Database,
  Settings, Bell, LineChart, Target
} from 'lucide-react';

const features = [
  {
    icon: <BarChart className="w-6 h-6" />,
    title: 'Instructions Page',
    description: 'Get started with an easy-to-follow guide'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Setup Page',
    description: 'Customize setting for your unique needs.'
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Dashboard',
    description: 'Stay informed with summaries and insights.'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Balance',
    description: 'Monitor your real-time financial balance.'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Task-Project Tracker',
    description: 'Organize tasks and projects efficiently.'
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: 'Team Chat',
    description: 'Built-in communication tools to keep your team connected and productive.'
  },
  {
    icon: <PieChart className="w-6 h-6" />,
    title: ' Communication Log',
    description: 'Log and track all client communications.'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Client Management',
    description: 'Manage teams, roles, and permissions with ease And Keep detailed client records.'
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: 'Calender',
    description: 'Manage appointments and schedules effortlessly.'
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    title: 'Income Entry',
    description: 'Accurately record business earnings.'
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: 'Expense Entry',
    description: 'Track and categorize business expenses.'
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'Monthly View',
    description: 'Get a detailed monthly financial overview.'
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: 'Custom Period View',
    description: 'Analyze finances over any date range.'
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: 'Alert System',
    description: 'Get instant notifications for important updates, deadlines, and milestones.'
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: 'Invoices (Advanced)',
    description: 'Full-featured invoice management system.'
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Print Invoice',
    description: ' Quickly print professional invoices.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Powerful Features for Your Business
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Everything you need to manage and grow your business efficiently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-xl transition-all duration-300
                        transform hover:-translate-y-1 cursor-pointer
                        border border-gray-100 dark:border-gray-700"
            >
              <div className="flex md:block justify-center">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 
                              flex items-center justify-center mb-4">
                  <div className="text-purple-600 dark:text-purple-300">
                    {feature.icon}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center md:text-left">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center md:text-left">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}