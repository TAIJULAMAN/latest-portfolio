import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi';

const AnimatedLogo = ({ isDarkMode }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const controls = useAnimation();
  const pathRef = useRef(null);
  const circleRefs = useRef([]);

  // Animation variants
  const containerVariants = {
    initial: { rotate: 0 },
    hover: { rotate: 360 },
    tap: { scale: 0.95 }
  };

  const pathVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
        staggerChildren: 0.2
      }
    },
    hover: {
      strokeWidth: 10,
      transition: { duration: 0.3 }
    }
  };

  const circleVariants = (index) => ({
    initial: {
      opacity: 0,
      scale: 0,
      x: Math.sin(index * 0.5) * 20,
      y: Math.cos(index * 0.5) * 20
    },
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        delay: 0.5 + (index * 0.1)
      }
    },
    hover: {
      x: Math.sin(index * 0.5) * 15,
      y: Math.cos(index * 0.5) * 15,
      scale: 1.2,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 10
      }
    }
  });

  useEffect(() => {
    const startAnimation = async () => {
      await controls.start('animate');
      setIsAnimating(false);
    };
    startAnimation();
  }, [controls]);

  const handleHoverStart = () => {
    setIsHovered(true);
    controls.start('hover');
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    controls.start('animate');
  };

  const handleClick = () => {
    setIsAnimating(true);
    controls.start({
      rotate: [0, 360],
      scale: [1, 1.1, 1],
      transition: { duration: 1, ease: 'easeInOut' }
    });
  };

  return (
    <motion.div
      className="relative w-12 h-12"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      onClick={handleClick}
      animate={controls}
      variants={containerVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circle */}
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          fill={isDarkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(59, 130, 246, 0.05)'}
          stroke={isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(59, 130, 246, 0.1)'}
          strokeWidth="1"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Animated path */}
        <motion.path
          ref={pathRef}
          d="M30 30V70M70 30V70M30 50H70"
          stroke={isDarkMode ? '#ffffff' : '#3b82f6'}
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={pathVariants}
          initial="initial"
          animate={controls}
        />

        {/* Animated circles */}
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.circle
            key={i}
            ref={el => circleRefs.current[i] = el}
            cx={30 + (i * 10)}
            cy="50"
            r="3"
            fill={isDarkMode ? '#ffffff' : '#3b82f6'}
            variants={circleVariants(i)}
            initial="initial"
            animate={controls}
          />
        ))}

        {/* Glow effect */}
        {isHovered && (
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            fill={isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(59, 130, 246, 0.1)'}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 1 }}
            exit={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </svg>

      {/* Floating particles */}
      <AnimatePresence>
        {isHovered && (
          <>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-1 h-1 rounded-full ${isDarkMode ? 'bg-white' : 'bg-blue-500'
                  }`}
                initial={{
                  x: 0,
                  y: 0,
                  opacity: 0,
                  scale: 0
                }}
                animate={{
                  x: Math.sin(i * 45 * (Math.PI / 180)) * 30,
                  y: Math.cos(i * 45 * (Math.PI / 180)) * 30,
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0]
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.1,
                  repeatDelay: 0.5
                }}
                style={{
                  left: '50%',
                  top: '50%',
                  marginLeft: -2,
                  marginTop: -2
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Check for dark mode preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }

    // Handle scroll effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className={`fixed w-full backdrop-blur-md z-50 transition-all duration-300  ${scrolled
        ? 'bg-white/90 dark:bg-gray-900/90 shadow-md py-2'
        : 'bg-white/80 dark:bg-gray-900/80 py-4'
      }`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <a
          href="#home"
          className="relative z-10"
          aria-label="Home"
        >
          <AnimatedLogo isDarkMode={isDarkMode} />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors relative group"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary dark:bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors mr-2"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white dark:bg-gray-900 z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="container mx-auto px-4 py-24 flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-2xl font-medium text-gray-800 dark:text-white hover:text-primary dark:hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};
