import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
              BusinessTracker
            </h3>
            <p className="mb-6">
              Empowering businesses with smart solutions for better management and growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
              </li>
              <li>r
                <a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-purple-400 transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">Blog</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3" />
                <span>birzcrown@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3" />
                <span>+91 6206680658</span>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-3" />
                <span>400001 Business Ave, BAZARGATE<br />MAHARASHTRA, MUMBAI</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Updated</h4>
            <p className="mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 
                         hover:from-purple-700 hover:to-blue-600 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>© {new Date().getFullYear()} BusinessTracker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}