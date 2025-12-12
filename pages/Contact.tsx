import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, HelpCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate form submission
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Have a question about your order, a product, or just want to say hello? 
                Our team is here to help you.
            </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row mb-20">
            
            {/* Contact Info Sidebar */}
            <div className="bg-zinc-900 text-white p-12 lg:w-2/5 flex flex-col justify-between relative overflow-hidden">
                {/* Decoration */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-indigo-600 opacity-20 blur-3xl" />
                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-indigo-600 opacity-20 blur-3xl" />

                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                    <p className="text-gray-400 mb-12 leading-relaxed">
                        Fill out the form and our team will get back to you within 24 hours.
                    </p>
                    
                    <div className="space-y-8">
                        <div className="flex items-start space-x-4 group">
                            <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                                <Mail className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm text-gray-300 uppercase tracking-wide">Email</h4>
                                <p className="text-white text-lg">support@luxecommerce.com</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4 group">
                            <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                                <Phone className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm text-gray-300 uppercase tracking-wide">Phone</h4>
                                <p className="text-white text-lg">+1 (555) 000-0000</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4 group">
                            <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                                <MapPin className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm text-gray-300 uppercase tracking-wide">Headquarters</h4>
                                <p className="text-white">
                                    123 Design District<br/>
                                    New York, NY 10012
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 mt-12 flex space-x-4">
                    {/* Socials could go here */}
                </div>
            </div>

            {/* Form */}
            <div className="p-12 lg:w-3/5 bg-white">
                {submitted ? (
                    <div className="h-full flex flex-col items-center justify-center text-center py-12">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
                            <Send className="w-10 h-10 text-green-600" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                        <p className="text-gray-500 mb-8 max-w-sm">Thank you for reaching out. We have received your message and will respond shortly.</p>
                        <button 
                            onClick={() => setSubmitted(false)} 
                            className="text-indigo-600 font-bold hover:text-indigo-800 underline"
                        >
                            Send another message
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                <input required type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" placeholder="Jane" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                <input required type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" placeholder="Doe" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <input required type="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" placeholder="jane@example.com" />
                        </div>
                         <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                            <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all">
                                <option>General Inquiry</option>
                                <option>Order Status</option>
                                <option>Returns & Exchanges</option>
                                <option>Wholesale</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                            <textarea required rows={5} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none" placeholder="How can we help you today?" />
                        </div>
                        <button type="submit" className="w-full bg-zinc-900 text-white py-4 rounded-xl font-bold hover:bg-zinc-800 transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform active:scale-95">
                            <Send className="w-4 h-4" />
                            <span>Send Message</span>
                        </button>
                    </form>
                )}
            </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h3>
            <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center"><HelpCircle className="w-5 h-5 mr-2 text-indigo-600" /> What is your return policy?</h4>
                    <p className="text-gray-600 text-sm pl-7">We offer a 30-day hassle-free return policy. If you're not completely satisfied with your purchase, you can return it for a full refund or exchange.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center"><HelpCircle className="w-5 h-5 mr-2 text-indigo-600" /> How long does shipping take?</h4>
                    <p className="text-gray-600 text-sm pl-7">Standard shipping usually takes 3-5 business days. Express shipping options are available at checkout for 1-2 business day delivery.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center"><HelpCircle className="w-5 h-5 mr-2 text-indigo-600" /> Do you ship internationally?</h4>
                    <p className="text-gray-600 text-sm pl-7">Yes, we ship to over 35 countries worldwide. International shipping times and rates vary by location.</p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
