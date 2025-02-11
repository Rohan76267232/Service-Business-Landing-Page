import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ruchi Sahu',
    role: 'Small Business Owner',
    image: 'https://i.pinimg.com/236x/df/3f/08/df3f0830c7e1e203c74917deea197b3d.jpg',
    content: "BusinessTracker has transformed how we manage our operations. The analytics and automation features have saved us countless hours."
  },
  {
    name: 'Harsh Raj',
    role: 'Operations Director',
    image: 'https://i.pinimg.com/236x/2c/1e/51/2c1e51fbb2ce4e5ec1d1e8ea93bb4788.jpg',
    content: "The all-in-one solution I've been searching for. Incredibly intuitive and powerful!"
  },
  {
    name: 'Nikita Sharma',
    role: 'Agency Director',
    image: 'https://img.freepik.com/premium-photo/silhouette-woman-posing-before-colorful-beach-sunset_1358627-12177.jpg',
    content: "Since implementing BusinessTracker, we've seen a 200% increase in productivity. The ROI has been incredible."
  },
  {
    name: 'Rohan Mishra',
    role: 'Financial Advisor',
    image: 'https://cdn.pixabay.com/photo/2023/02/19/08/39/man-7799486_640.jpg',
    content: "BusinessTracker has transformed how we manage our operations. The analytics and automation features have saved us countless hours."
  },
  {
    name: 'Radika Gupta',
    role: 'Marketing Consultant',
    image: 'https://i.pinimg.com/736x/a7/62/98/a7629832801fc735f40340672ac430df.jpg',
    content: "The best business management software we've ever used. The interface is intuitive and the features are exactly what we needed."
  },
  {
    name: 'Rajiv Kumar',
    role: 'IT Services Provider',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpjsZGZKPgSTZHRlLd2SXpJUBr7wAbZc9gKg&s',
    content: "Fantastic tool for tracking multiple projects and client communications simultaneously."
  },
  {
    name: 'Muskan Garg',
    role: 'Interior Designer',
    image: 'https://i.pinimg.com/736x/41/9c/8d/419c8d2af72e6b82beb4551a9af1c7c9.jpg',
    content: "The invoice generation and tracking features save me hours every week!"
  },
  {
    name: 'Vikash Sharma',
    role: 'Business Coach',
    image: 'https://cdn.pixabay.com/photo/2021/12/28/04/38/cute-6898591_960_720.jpg',
    content: "The best business management software we've ever used. The interface is intuitive and the features are exactly what we needed."
  },
  {
    name: 'Mahi Singh',
    role: 'Event Planner',
    image: 'https://i.pinimg.com/originals/f5/6d/2f/f56d2f3bddfaddcb68523e3592257d44.jpg',
    content: "The calendar and task management features are game-changers for event coordination."
  }
  
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            See what our customers have to say about BusinessTracker
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
                         dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] backdrop-blur-sm
                         border border-purple-100 dark:border-purple-900"
            >
              <div className="absolute -top-4 -left-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-600 dark:text-gray-300 italic relative">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="flex items-center">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-purple-200 dark:border-purple-700"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}