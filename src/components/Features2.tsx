import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, Clock, BarChart, Sparkles, 
  Users, MessageSquare, ClipboardList, 
  Database, PhoneCall, Star
} from 'lucide-react';

const features = [
  {
    headline: "★ Organized Client Information",
    text: "Effortless Client Management – Keep all client data organized & track interactions seamlessly. Boost relationships for better business growth! Communication Log – Easily record key client interactions with an interactive board to manage entries.",
    image: "https://d1yei2z3i6k35z.cloudfront.net/4435474/667307e8efc6f_DigitalDealTeammc32.png",
    icon: Database,
    imageLeft: true
  },
  {
    headline: "★ TABS & INVOICES",
    text: "Efficiency at your fingertips. Invoices & Print – Enter, edit, and cancel invoices with ease. Issue offers or drafts for client review. Generate professional invoices automatically. Select up to 6 services, and a printable/downloadable template is ready in seconds. Automatic repayment status.",
    image: "https://d1yei2z3i6k35z.cloudfront.net/4435474/667307f86ffc1_DigitalDealTeammc33.png",
    icon: MessageSquare,
    imageLeft: false
  },
  {
    headline: "★ EFFICIENT - BOOKKEEPING TOOLS",
    text: "Income, expenses, and financial insights. Income & Expense Entry Features – Default tax percentage setting, individual tax percentage for each transaction, reconciliation feature with one-click ease, highlighter tool for finding specific transactions, filter options for sorting and organizing data, hyperlink to specific invoices based on invoice number, and automatic calculation of net and tax amounts. Monthly - 12 Month Custom View Features – Select and view each month separately, choose between total, net, and tax amounts, informative graphs and summary bars, monthly category breakdown with tools, cash flow summary and overall goal progress, record collected and paid taxes, detailed financial data for custom periods, assign direct or operating costs on each expense, and revenue, profit & loss, and gross profit summaries.",
    image: "https://d1yei2z3i6k35z.cloudfront.net/4435474/6673080cc6fec_DigitalDealTeammc34.png",
    icon: ClipboardList,
    imageLeft: true
  },
  {
    headline: "★ MASTER YOUR FINANCES",
    text: "Gain complete control over your income, expenses, and financial insights. Easily set default and individual tax percentages, reconcile transactions with one click, and use advanced filtering and highlighting tools for seamless organization. Track invoices with direct hyperlinks and automate net and tax calculations effortlessly. Get a 12-month custom view with detailed financial breakdowns, interactive graphs, and cash flow summaries.",
    image: "https://d1yei2z3i6k35z.cloudfront.net/4435474/6673081ee64d7_il_1140xN.5658156064_9wbz.webp",
    icon: Star,
    imageLeft: false
  },
  {
    headline: "★ DASHBOARD INSIGHTS",
    text: "Get a clear snapshot of your business with real-time tracking of up to 6 critical events, including invoice payments, tasks, and communications. Stay ahead with 'Today's and Tomorrow's Summary' bars for instant updates. Monitor key financial and operational metrics month by month, including income, expenses, taxes, client activity, task progress, invoicing, and reconciliation status with the comprehensive 12-month overview.",
    image: "https://d1yei2z3i6k35z.cloudfront.net/4435474/667307c374871_DigitalDealTeammc3.png",
    icon: PhoneCall,
    imageLeft: true
  },
  {
    headline: "A TO Z SERVICE BUSINESS MANAGER",
    text: "The ultimate all-in-one solution to streamline operations, manage clients, track finances, and optimize business growth effortlessly.",
    image: "https://d1yei2z3i6k35z.cloudfront.net/4435474/667308362db3b_il_1140xN.6003686902_c6pt.webp",
    icon: Clock,
    imageLeft: false
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Features2() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Headline Section */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="flex items-center justify-center mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className="inline-flex items-center justify-center p-2 rounded-xl
                         bg-gradient-to-r from-purple-500/10 to-blue-500/10 
                         dark:from-purple-500/20 dark:to-blue-500/20">
              <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Transform Your Business Operations
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Streamline workflows, boost productivity, and achieve better results with our 
            comprehensive task management solution
          </p>
        </motion.div>

        {/* Existing Features Section */}
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`flex flex-col ${index !== features.length - 1 ? 'mb-32' : ''} 
                       lg:flex-row lg:items-center lg:gap-16 
                       ${!feature.imageLeft ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Image Section */}
            <motion.div 
              className="flex-1 relative mb-12 lg:mb-0"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 
                            dark:from-purple-600/10 dark:to-blue-600/10 rounded-2xl transform -rotate-2" />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 
                            dark:from-purple-600/10 dark:to-blue-600/10 rounded-2xl transform rotate-2" />
              <div className="relative">
                <div className="w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)]
                              dark:shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)]">
                  <img
                    src={feature.image}
                    alt={feature.headline}
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
            </motion.div>

            {/* Text Section */}
            <div className="flex-1">
              <div className="mb-6">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl
                               bg-gradient-to-br from-purple-600/10 to-blue-600/10 
                               dark:from-purple-600/20 dark:to-blue-600/20">
                  <feature.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 
                           bg-clip-text text-transparent">
                {feature.headline}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.text}
              </p>
              <motion.div 
                className="mt-8"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <a href="#pricing" className="inline-flex items-center text-purple-600 dark:text-purple-400 
                                     font-semibold hover:text-purple-700 dark:hover:text-purple-300">
                  View Pricing
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
} 