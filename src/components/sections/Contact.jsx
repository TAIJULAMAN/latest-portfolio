import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiSend } from 'react-icons/fi';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus({
        success: true,
        message: 'Thank you for your message! I will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ success: false, message: '' });
      }, 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        success: false,
        message: 'There was an error sending your message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Have a project in mind or want to chat? I'm just a message away!
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div 
            variants={item}
            className="space-y-8"
          >
            <div className="backdrop-blur-sm bg-white/30 dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg border border-white/20 dark:border-gray-700/30">
              <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Contact Information
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I'm open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/20 dark:hover:bg-gray-700/30 transition-colors"
                >
                  <div className="p-3 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 text-primary dark:text-secondary">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white">Email</h4>
                    <a 
                      href="mailto:your.email@example.com" 
                      className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      your.email@example.com
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/20 dark:hover:bg-gray-700/30 transition-colors"
                >
                  <div className="p-3 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 text-primary dark:text-secondary">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white">Phone</h4>
                    <a 
                      href="tel:+1234567890" 
                      className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/20 dark:hover:bg-gray-700/30 transition-colors"
                >
                  <div className="p-3 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 text-primary dark:text-secondary">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">San Francisco, CA</p>
                  </div>
                </motion.div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                <h4 className="font-medium text-gray-800 dark:text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: <FiGithub className="w-5 h-5" />, href: "https://github.com/yourusername", label: "GitHub", color: "hover:bg-gray-900" },
                    { icon: <FiLinkedin className="w-5 h-5" />, href: "https://linkedin.com/in/yourusername", label: "LinkedIn", color: "hover:bg-blue-600" },
                    { icon: <FiTwitter className="w-5 h-5" />, href: "https://twitter.com/yourusername", label: "Twitter", color: "hover:bg-blue-400" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 rounded-xl bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 ${social.color} hover:text-white transition-all backdrop-blur-sm border border-white/20 dark:border-gray-700/30`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={item}
            className="backdrop-blur-sm bg-white/30 dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg border border-white/20 dark:border-gray-700/30"
          >
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Send Me a Message
            </h3>
            
            {submitStatus.message && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-6 p-4 rounded-lg ${submitStatus.success ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'}`}
              >
                {submitStatus.message}
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 focus:ring-2 focus:ring-primary/30 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                      placeholder="John Doe"
                      required
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
                
                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 focus:ring-2 focus:ring-primary/30 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                      placeholder="your.email@example.com"
                      required
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 focus:ring-2 focus:ring-primary/30 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                    placeholder="What's this about?"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
              
              <div className="relative">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 focus:ring-2 focus:ring-primary/30 focus:border-transparent backdrop-blur-sm transition-all duration-300 resize-none"
                    placeholder="Hi there, I'd like to talk about..."
                    required
                  ></textarea>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
              
              <div className="pt-2">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 px-6 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
