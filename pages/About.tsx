import React from 'react';
import { Leaf, Award, Globe, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative py-24 md:py-32 bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">Our Story</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                Crafting premium experiences for the modern world. <br/>
                We believe that true luxury lies in simplicity, sustainability, and superior quality.
            </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Intro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div>
                 <span className="text-indigo-600 font-bold tracking-widest text-sm uppercase mb-2 block">Who We Are</span>
                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Redefining Modern Commerce</h2>
                 <div className="prose prose-lg text-gray-600">
                    <p className="mb-4">
                        LuxeCommerce was born in 2024 from a simple yet powerful idea: that high-quality design shouldn't be exclusive. We started as a small team of designers and engineers in New York City, united by a passion for minimalism and functionality.
                    </p>
                    <p>
                        In a world saturated with fast fashion and disposable trends, we stand for longevity. Every product in our store is meticulously curated, tested, and chosen because we believe it brings lasting value to your life.
                    </p>
                 </div>
            </div>
            <div className="relative">
                <div className="absolute -inset-4 bg-indigo-50 rounded-xl transform rotate-3" />
                <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
                    alt="Office space" 
                    className="relative rounded-lg shadow-xl w-full"
                />
            </div>
        </div>

        {/* Values */}
        <div className="mb-24">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-indigo-50 transition-colors duration-300">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mx-auto mb-6">
                        <Leaf className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Sustainability</h3>
                    <p className="text-gray-600 text-sm">Eco-friendly packaging and carbon-neutral shipping on every order.</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-indigo-50 transition-colors duration-300">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mx-auto mb-6">
                        <Award className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Quality First</h3>
                    <p className="text-gray-600 text-sm">We partner directly with master craftsmen to ensure superior durability.</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-indigo-50 transition-colors duration-300">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mx-auto mb-6">
                        <Globe className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Global Reach</h3>
                    <p className="text-gray-600 text-sm">Connecting cultures through design. Shipping to over 50 countries.</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-indigo-50 transition-colors duration-300">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mx-auto mb-6">
                        <Users className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Focus</h3>
                    <p className="text-gray-600 text-sm">Our community is everything. 24/7 support for peace of mind.</p>
                </div>
            </div>
        </div>

        {/* Stats */}
        <div className="bg-zinc-900 rounded-3xl p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-12">Growing stronger every day</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <div className="text-4xl md:text-5xl font-bold text-indigo-500 mb-2">50k+</div>
                    <div className="text-gray-400">Happy Customers</div>
                </div>
                <div>
                    <div className="text-4xl md:text-5xl font-bold text-indigo-500 mb-2">120+</div>
                    <div className="text-gray-400">Products</div>
                </div>
                <div>
                    <div className="text-4xl md:text-5xl font-bold text-indigo-500 mb-2">35</div>
                    <div className="text-gray-400">Countries</div>
                </div>
                <div>
                    <div className="text-4xl md:text-5xl font-bold text-indigo-500 mb-2">4.9</div>
                    <div className="text-gray-400">Average Rating</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
