import React, { useState } from 'react';
import { Mail, MessageSquare, Shield, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    type: 'investor'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-thin mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
              Connect & Collaborate
            </span>
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
            Exclusive access for investors, partners, and visionaries ready to build the future
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-3xl border border-gray-800/50">
              <div className="flex items-center mb-6">
                <Shield className="w-6 h-6 text-yellow-400 mr-3" />
                <h3 className="text-2xl font-semibold text-white">Encrypted Communication</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Type */}
                <div>
                  <label className="block text-gray-400 mb-3 font-medium">I am a:</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['investor', 'partner', 'media', 'other'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({...formData, type})}
                        className={`p-3 rounded-xl border transition-all duration-300 ${
                          formData.type === type 
                            ? 'border-yellow-400/50 bg-yellow-400/10 text-yellow-400' 
                            : 'border-gray-700 bg-gray-800/50 text-gray-400 hover:border-gray-600'
                        }`}
                      >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-gray-400 mb-2 font-medium">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-yellow-400/50 focus:outline-none transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-400 mb-2 font-medium">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-yellow-400/50 focus:outline-none transition-all duration-300"
                    placeholder="your.email@company.com"
                    required
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-gray-400 mb-2 font-medium">Company/Organization</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-yellow-400/50 focus:outline-none transition-all duration-300"
                    placeholder="Your company"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-400 mb-2 font-medium">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-yellow-400/50 focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Tell me about your opportunity or inquiry..."
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-blue-400 rounded-xl text-black font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/25"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Send Encrypted Message
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-blue-500 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                </button>
              </form>
            </div>
          </div>

          {/* Concierge Widget */}
          <div className="space-y-8">
            <div className="p-8 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-3xl border border-blue-800/30">
              <div className="flex items-center mb-6">
                <MessageSquare className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-2xl font-semibold text-white">Concierge Access</h3>
              </div>
              
              <p className="text-gray-400 mb-8 leading-relaxed">
                For high-priority opportunities, exclusive partnerships, or time-sensitive investment discussions, request direct access to Ryan's executive team.
              </p>

              <button className="w-full group relative px-8 py-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 border border-blue-400/30 rounded-xl text-white font-medium transition-all duration-300 hover:from-blue-400/40 hover:to-purple-400/40 hover:border-blue-400/50 hover:scale-105">
                <span className="relative z-10">Request Executive Conversation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              </button>
            </div>

            {/* Contact Info */}
            <div className="p-8 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-3xl border border-gray-800/50">
              <h4 className="text-xl font-semibold text-white mb-6">Direct Channels</h4>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-yellow-400 mr-3" />
                  <span className="text-gray-300">Investor Relations: invest@ryankindle.com</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-gray-300">Media Inquiries: press@ryankindle.com</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-yellow-400/10 rounded-xl border border-yellow-400/20">
                <p className="text-sm text-yellow-400 font-medium">
                  ⚡ Response time: 24-48 hours for qualified inquiries
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;