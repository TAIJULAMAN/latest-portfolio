import { motion, useScroll, useTransform } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import { useRef } from 'react';

export const Projects = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform with user authentication, product catalog, shopping cart, and payment integration.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com/yourusername/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.com'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, task assignments, and progress tracking.',
      tags: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      githubUrl: 'https://github.com/yourusername/task-manager',
      liveUrl: 'https://taskmanager-demo.com'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A personal portfolio website built with modern web technologies to showcase projects and skills.',
      tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: 'https://github.com/yourusername/portfolio',
      liveUrl: 'https://yourportfolio.com'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A weather application that displays current weather and forecast using a weather API with location services.',
      tags: ['React', 'OpenWeather API', 'Geolocation', 'Chart.js'],
      githubUrl: 'https://github.com/yourusername/weather-app',
      liveUrl: 'https://weatherapp-demo.com'
    },
    {
      id: 5,
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform with user authentication, product catalog, shopping cart, and payment integration.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com/yourusername/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.com'
    },
    {
      id: 6,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, task assignments, and progress tracking.',
      tags: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      githubUrl: 'https://github.com/yourusername/task-manager',
      liveUrl: 'https://taskmanager-demo.com'
    },
    {
      id: 7,
      title: 'Portfolio Website',
      description: 'A personal portfolio website built with modern web technologies to showcase projects and skills.',
      tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: 'https://github.com/yourusername/portfolio',
      liveUrl: 'https://yourportfolio.com'
    },
    {
      id: 8,
      title: 'Weather Dashboard',
      description: 'A weather application that displays current weather and forecast using a weather API with location services.',
      tags: ['React', 'OpenWeather API', 'Geolocation', 'Chart.js'],
      githubUrl: 'https://github.com/yourusername/weather-app',
      liveUrl: 'https://weatherapp-demo.com'
    },
  ];

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-to-l from-primary/10 to-transparent rounded-full filter blur-3xl opacity-20"
          style={{ y }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-secondary/10 to-transparent rounded-full filter blur-3xl opacity-20"
          style={{ y: y }}
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary dark:text-primary-400 text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <FiCode className="inline mr-2" /> My Work
          </motion.span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 relative">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0.5 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative h-full bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-medium">View Project</span>
                  </div>
                  <div className="text-6xl font-bold text-gray-200 dark:text-gray-700">
                    {project.title.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-primary dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        initial={{ opacity: 0, y: 5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-20px" }}
                        transition={{ delay: 0.5 + (tagIndex * 0.05) }}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700/50 text-sm rounded-full text-gray-700 dark:text-gray-300"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-400 transition-colors group-hover:translate-x-1 duration-300"
                      aria-label="View on GitHub"
                    >
                      <FiGithub className="mr-2" /> Code
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-400 transition-colors group-hover:translate-x-1 duration-300"
                        aria-label="View live demo"
                      >
                        <FiExternalLink className="mr-2" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
