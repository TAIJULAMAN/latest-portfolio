import { motion } from 'framer-motion';

export const About = () => {
  const skills = [
    // Frontend
    { name: 'React', level: 90, category: 'frontend' },
    { name: 'JavaScript', level: 90, category: 'frontend' },
    { name: 'HTML5', level: 95, category: 'frontend' },
    { name: 'CSS3/Tailwind', level: 90, category: 'frontend' },
    { name: 'Next.js', level: 80, category: 'frontend' },
    
    // Backend
    { name: 'Node.js', level: 85, category: 'backend' },
    { name: 'Express', level: 80, category: 'backend' },
    { name: 'MongoDB', level: 75, category: 'backend' },
    { name: 'PostgreSQL', level: 70, category: 'backend' },
    { name: 'RESTful APIs', level: 85, category: 'backend' },
    
    // Tools
    { name: 'Git', level: 85, category: 'tools' },
    { name: 'Docker', level: 70, category: 'tools' },
    { name: 'AWS', level: 65, category: 'tools' },
    { name: 'Figma', level: 75, category: 'tools' },
  ];

  const categories = [
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'tools', name: 'Tools & Platforms' },
  ];

  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-900/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="text-lg mb-8">
            Here's a little about myself and what I do professionally.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
              <p className="mb-6">
                I'm a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies. 
                I love turning ideas into reality through clean, efficient, and scalable code.
              </p>
              <p className="mb-6">
                With experience in building web applications and solving complex problems, 
                I'm always eager to learn new technologies and methodologies to improve my craft.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or enjoying outdoor activities.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="space-y-8">
              {categories.map((category) => (
                <div key={category.id}>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                    {category.name}
                  </h3>
                  <div className="space-y-3">
                    {skills
                      .filter((skill) => skill.category === category.id)
                      .map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              {skill.name}
                            </span>
                            <span className="text-sm text-gray-500">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div
                              className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
