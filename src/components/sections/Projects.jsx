import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform with user authentication, product catalog, shopping cart, and payment integration.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/project1.jpg',
      githubUrl: 'https://github.com/yourusername/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.com'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, task assignments, and progress tracking.',
      tags: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      image: '/project2.jpg',
      githubUrl: 'https://github.com/yourusername/task-manager',
      liveUrl: 'https://taskmanager-demo.com'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A personal portfolio website built with modern web technologies to showcase projects and skills.',
      tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
      image: '/project3.jpg',
      githubUrl: 'https://github.com/yourusername/portfolio',
      liveUrl: 'https://yourportfolio.com'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A weather application that displays current weather and forecast using a weather API with location services.',
      tags: ['React', 'OpenWeather API', 'Geolocation', 'Chart.js'],
      image: '/project4.jpg',
      githubUrl: 'https://github.com/yourusername/weather-app',
      liveUrl: 'https://weatherapp-demo.com'
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="section-title">My Projects</h2>
          <p className="text-lg mb-8">
            Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-4xl text-gray-400">
                    {project.title.split(' ').map(word => word[0]).join('')}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full text-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 mt-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                    aria-label="View on GitHub"
                  >
                    <FiGithub className="mr-2" /> Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                      aria-label="View live demo"
                    >
                      <FiExternalLink className="mr-2" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
