import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp, FiPhone } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FiGithub className="w-5 h-5" />,
      url: 'https://github.com/yourusername',
      color: 'hover:bg-gray-900',
      aria: 'Visit my GitHub profile'
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin className="w-5 h-5" />,
      url: 'https://linkedin.com/in/yourusername',
      color: 'hover:bg-blue-600',
      aria: 'Connect with me on LinkedIn'
    },
    {
      name: 'Twitter',
      icon: <FiTwitter className="w-5 h-5" />,
      url: 'https://twitter.com/yourusername',
      color: 'hover:bg-blue-400',
      aria: 'Follow me on Twitter'
    },
    {
      name: 'Email',
      icon: <FiMail className="w-5 h-5" />,
      url: 'mailto:your.email@example.com',
      color: 'hover:bg-red-500',
      aria: 'Send me an email'
    },
  ];

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

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
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-5 pb-10 relative">
      <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
            {currentYear} Hossain Ali. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Built with <span className="text-primary">React</span>, <span className="text-primary">Vite</span>, and <span className="text-primary">Tailwind CSS</span>
          </p>
        </div>
      </div>
 
    </div>
  );
};

export default Footer;
