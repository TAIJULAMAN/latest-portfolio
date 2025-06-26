import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiDownload, FiArrowRight, FiCode, FiLayers, FiSmartphone } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const socialLinks = [
    { icon: <FaGithub className="w-5 h-5" />, url: 'https://github.com/yourusername' },
    { icon: <FaLinkedin className="w-5 h-5" />, url: 'https://linkedin.com/in/yourusername' },
    { icon: <FaTwitter className="w-5 h-5" />, url: 'https://twitter.com/yourusername' },
    { icon: <FaYoutube className="w-5 h-5" />, url: 'https://youtube.com/yourchannel' },
  ];

  const stats = [
    { value: '1+', label: 'Years Experience', icon: <FiCode /> },
    { value: '50+', label: 'Projects Completed', icon: <FiLayers /> },
    { value: '100%', label: 'Client Satisfaction', icon: <FiSmartphone /> },
  ];

  return (
    <div ref={targetRef} className="relative overflow-hidden max-w-7xl mx-auto flex items-center">
      {/* Animated background with gradient mesh */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 dark:from-gray-900 via-transparent to-transparent"></div>
        <div className="absolute inset-0 opacity-30 dark:opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0VjIwYTQgNCAwIDAwLTQtNEgyOGE0IDQgMCAwMC00IDR2MTRhNCA0IDAgMDA0IDHoNGE0IDQgMCAwMDQtNHpNMTYgMjRhNCA0IDAgMDE0LTRoNGE0IDQgMCAwMTQgNHYyYTQgNCAwIDAxLTQgNEgyMGE0IDQgMCAwMS00LTR2LTJ6TTAgMTh2MWE0IDQgMCAwMDQgNGg0YTQgNCAwIDAwNC00di0xYTQgNCAwIDAwLTRINFptMCAxNHYxYTQgNCAwIDAwNCA0aDRhNCA0IDAgMDA0LTR2LTFhNCA0IDAgMDAtNC00SDR6TTAgMzR2MWE0IDQgMCAwMDQgNGg0YTQgNCAwIDAwNC00di0xYTQgNCAwIDAwLTQtNEg0ek0wIDR2MWE0IDQgMCAwMTQtNGgxYTQgNCAwIDAxNCA0djFhNCA0IDAgMDEtNCA0SDRhNCA0IDAgMDEtNC00eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
        </div>
        {/* Animated gradient blobs */}
        <motion.div
          className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-gradient-to-r from-primary/20 to-transparent rounded-full filter blur-3xl opacity-30"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-to-l from-secondary/20 to-transparent rounded-full filter blur-3xl opacity-30"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            rotate: [360, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="col-span-7 flex flex-col justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary dark:text-primary-400 text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Welcome to my portfolio
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Hossain Ali</span>
              <br />
              <TypeAnimation
                sequence={[
                  'Frontend Developer',
                  1500,
                  'Response Designer',
                  1500,
                  'Problem Solver',
                  1500,
                  'Tech Enthusiast',
                  1500,
                ]}
                wrapper="div"
                speed={50}
                className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
                repeat={Infinity}
              />
            </motion.h1>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              I craft exceptional digital experiences with clean, efficient code and beautiful designs.
              Let's build something amazing together!
            </motion.p>

            <motion.div
              className="flex gap-2 md:gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a
                href="#contact"
                className="px-4 py-2.5 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-medium hover:opacity-90 transition-all duration-300 flex items-center gap-2 group shadow-lg shadow-primary/20 hover:shadow-primary/30"
              >
                Get In Touch
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-4 py-2.5 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 flex items-center gap-2 group"
              >
                Download CV
                <FiDownload className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
              </a>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-8 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-400 flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="col-span-6 md:col-span-5 mt-12 lg:mt-0 relative  flex justify-center items-center w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-2xl -z-10"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary/10 rounded-2xl -z-10"
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />

              {/* Profile image container */}
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl animate-pulse"></div>
                <div className="absolute inset-2 bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                  {/* Replace with your image */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                    <img src="./photo.jpg" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Floating tech stack */}
              <motion.div
                className="absolute -bottom-6 left-0 bg-white dark:bg-gray-800 shadow-lg rounded-xl px-4 py-2 flex items-center gap-2"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="font-medium text-sm">Available for work</span>
              </motion.div>
            </div>

            {/* Social links floating */}
            <motion.div
              className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-3 flex flex-col gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                  aria-label={`${link.url.split('/')[2]}`}
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
