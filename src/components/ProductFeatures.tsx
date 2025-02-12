import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, Shield, LineChart, Users, Bell, Calendar, 
  Search, Settings, FileText, Layout, MessageSquare,
  DollarSign, PieChart, Printer, BarChart2, Clock
} from 'lucide-react';

const features = [
  {
    title: 'Smart Dashboard',
    description: 'Get instant insights with live dashboards and customizable reports. Track KPIs, team performance, and business metrics in real-time.',
    icon: Layout,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Client Management',
    description: 'Keep detailed client records, manage relationships, and access client information instantly. Everything you need in one place.',
    icon: Users,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Task Tracking',
    description: 'Organize tasks and projects efficiently with our intuitive task management system. Never miss a deadline again.',
    icon: Clock,
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Invoice Management',
    description: 'Create, send, and track professional invoices effortlessly. Get paid faster with automated payment reminders.',
    icon: DollarSign,
    color: 'from-red-500 to-orange-500'
  },
  {
    title: 'Financial Overview',
    description: 'Track income, expenses, and profits with detailed financial reports and insights. Make informed business decisions.',
    icon: BarChart2,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    title: 'Communication Log',
    description: 'Keep track of all client communications in one place. Never lose important conversation details again.',
    icon: MessageSquare,
    color: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Custom Reports',
    description: 'Generate custom reports for any date range. Analyze your business performance with detailed insights.',
    icon: PieChart,
    color: 'from-pink-500 to-rose-500'
  },
  {
    title: 'Smart Calendar',
    description: 'Manage appointments and schedules effortlessly. Stay organized with our intuitive calendar system.',
    icon: Calendar,
    color: 'from-teal-500 to-green-500'
  },
  {
    title: 'Print Invoices',
    description: 'Print professional invoices with just one click. Maintain a professional image with beautifully designed invoice templates.',
    icon: Printer,
    color: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'Income Tracking',
    description: 'Record and monitor all income sources accurately. Keep your financial records organized and up-to-date.',
    icon: LineChart,
    color: 'from-violet-500 to-purple-500'
  },
  {
    title: 'Expense Management',
    description: 'Log and categorize expenses efficiently. Track where your money is going with detailed expense reports.',
    icon: FileText,
    color: 'from-amber-500 to-yellow-500'
  },
  {
    title: 'Balance Overview',
    description: 'Monitor your financial balance in real-time. Get instant insights into your business financial health.',
    icon: DollarSign,
    color: 'from-emerald-500 to-green-500'
  },
  {
    title: 'Setup Wizard',
    description: 'Get started quickly with our easy-to-follow setup guide. Customize settings for your unique business needs.',
    icon: Settings,
    color: 'from-rose-500 to-pink-500'
  },
  {
    title: 'Smart Notifications',
    description: 'Stay informed with intelligent alerts for tasks, deadlines, and important updates. Never miss critical business activities.',
    icon: Bell,
    color: 'from-blue-600 to-indigo-600'
  },
  {
    title: 'Advanced Security',
    description: 'Protect your business data with enterprise-grade security features. Keep your sensitive information safe.',
    icon: Shield,
    color: 'from-purple-600 to-indigo-600'
  },
  {
    title: 'Powerful Search',
    description: 'Find anything instantly with our advanced search capabilities. Quick access to all your business information.',
    icon: Search,
    color: 'from-green-600 to-teal-600'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function ProductFeatures() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r 
                        from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 
                        text-purple-600 dark:text-purple-400 mb-4">
            16 Essential Features
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Everything You Need to
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Supercharge Your Business
            </span>
          </h2>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive suite of features designed to transform how you work and manage your business
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              className="group relative bg-white dark:bg-gray-800 p-6 rounded-2xl 
                         shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)]
                         hover:shadow-[0_20px_50px_rgb(0,0,0,0.15)] dark:hover:shadow-[0_20px_50px_rgb(0,0,0,0.4)]
                         border border-gray-100 dark:border-gray-700
                         transition-all duration-300
                         backdrop-blur-sm bg-white/50 dark:bg-gray-800/50"
            >
              <div className="flex md:block justify-center">
                <div className={`mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl
                              bg-gradient-to-br ${feature.color} 
                              group-hover:scale-110 transition-transform duration-300
                              shadow-lg`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 
                           group-hover:text-transparent group-hover:bg-clip-text
                           group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600
                           transition-all duration-300
                           text-center md:text-left">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center md:text-left">
                {feature.description}
              </p>
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 
                           transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${feature.color} 
                                flex items-center justify-center shadow-lg`}>
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <motion.a
            href="#pricing"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold
                     bg-gradient-to-r from-purple-600 to-blue-600 text-white
                     hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
          >
            Explore Pricing Plans
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
} 