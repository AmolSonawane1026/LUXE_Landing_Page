import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold tracking-tighter mb-4">LUXE<span className="text-indigo-500">.</span></h3>
            <p className="text-gray-400 text-sm">
              Premium essentials for the modern lifestyle.
              Quality, aesthetics, and sustainability in every detail.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Home Decor</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tech</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
            <div className="flex items-center bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800">
              <Mail className="w-4 h-4 ml-3 text-gray-500" />
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-transparent border-none focus:ring-0 text-sm text-white px-3 py-2 w-full placeholder-gray-600"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-900 mt-12 pt-8 text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} LuxeCommerce. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
