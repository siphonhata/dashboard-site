'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-32"
        >
          <div className="text-center mb-12" data-aos="fade-down">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Contact Us
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Get in touch with us for your web development needs
            </p>
          </div>

          <div 
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div 
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="block w-full h-14 px-4 rounded-xl border-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base"
                  required
                />
              </div>

              <div 
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="block w-full h-14 px-4 rounded-xl border-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base"
                  required
                />
              </div>

              <div 
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="block w-full px-4 py-4 rounded-xl border-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base"
                  required
                />
              </div>

              <div 
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full h-14 border border-transparent rounded-xl shadow-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}