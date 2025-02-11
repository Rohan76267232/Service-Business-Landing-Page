import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What is this business tracker, and who is it for?',
    answer: 'This is an all-in-one business management spreadsheet designed for freelancers, entrepreneurs, and service-based businesses. It helps track clients, invoices, finances, tasks, and communication in one place, making business operations effortless.'
  },
  {
    question: 'Do I need any special software to use this?',
    answer: 'No, you only need Google Sheets or Microsoft Excel to access and use the tracker. No additional software or subscriptions are required.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We use bank-level encryption and follow industry best practices for data security. Your data is backed up regularly and stored securely.'
  },
  {
    question: 'Can I customize the tracker to fit my business needs?',
    answer: 'Yes! The tracker comes with a Setup Page where you can customize settings, categories, and preferences to align with your specific business operations.'
  },
  {
    question: 'Is this tracker beginner-friendly?',
    answer: 'Absolutely! It includes an Instructions Page with a simple step-by-step guide. No technical skills are needed, and everything is designed to be easy to use.'
  },
  {
    question: 'Can I track income, expenses, and generate invoices?',
    answer: 'Yes, the tracker includes income & expense tracking, automatic tax calculations, and professional invoice generation with a print/download feature.'
  },
  {
    question: 'Do I need special software?',
    answer: 'No, just Google Sheets or Excel—no extra tools required.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={false}
              className="rounded-lg bg-gray-50 dark:bg-gray-800 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                <span className="ml-4 flex-shrink-0 text-gray-600 dark:text-gray-400">
                  {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                </span>
              </button>
              
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-4 pt-0 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 