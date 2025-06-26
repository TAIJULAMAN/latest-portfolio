import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUser, FiCode, FiBriefcase, FiAward, FiDownload } from 'react-icons/fi';

const TabButton = ({ active, onClick, children, icon: Icon }) => (
  <button
    onClick={onClick}
    className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${
      active
        ? 'bg-primary text-white shadow-lg shadow-primary/20'
        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
    }`}
  >
    <Icon className="mr-2" />
    {children}
  </button>
);

const TabContent = ({ children, isActive }) => (
  <AnimatePresence mode="wait">
    {isActive && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="mt-8"
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

const SkillBar = ({ name, level, color = 'primary' }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
      <span className="text-sm text-gray-500">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <motion.div
        className={`h-full rounded-full bg-${color} ${color === 'primary' ? 'bg-primary' : ''}`}
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      />
    </div>
  </div>
);

const ExperienceItem = ({ role, company, duration, description }) => (
  <motion.div 
    className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700 last:border-l-0 last:pb-0 group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="absolute w-4 h-4 rounded-full bg-primary -left-2 top-1 group-hover:scale-125 transition-transform duration-300" />
    <div className="absolute w-4 h-1 bg-gradient-to-r from-primary to-transparent -left-2 top-1" />
    <div className="flex flex-col sm:flex-row sm:justify-between">
      <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{role}</h4>
      <span className="text-sm text-primary font-medium">{duration}</span>
    </div>
    <p className="text-gray-600 dark:text-gray-300 font-medium mb-2">{company}</p>
    <p className="text-gray-500 dark:text-gray-400">{description}</p>
  </motion.div>
);

export const About = () => {
  const [activeTab, setActiveTab] = useState('about');

  const skills = [
    { name: 'JavaScript', level: 90, color: 'primary' },
    { name: 'React', level: 88, color: 'primary' },
    { name: 'Node.js', level: 85, color: 'emerald-500' },
    { name: 'TypeScript', level: 80, color: 'blue-500' },
    { name: 'MongoDB', level: 75, color: 'green-500' },
    { name: 'AWS', level: 70, color: 'yellow-500' },
  ];

  const experiences = [
    {
      role: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      duration: '2021 - Present',
      description: 'Leading frontend development for enterprise applications using React and TypeScript.'
    },
    {
      role: 'Full Stack Developer',
      company: 'WebSolutions LLC',
      duration: '2019 - 2021',
      description: 'Developed and maintained web applications using MERN stack.'
    },
    {
      role: 'Frontend Developer',
      company: 'Digital Agency',
      duration: '2017 - 2019',
      description: 'Built responsive and interactive user interfaces for various clients.'
    },
  ];

  const education = [
    {
      degree: 'Master in Computer Science',
      institution: 'Tech University',
      duration: '2015 - 2017',
      description: 'Specialized in Web Technologies and Software Engineering.'
    },
    {
      degree: 'Bachelor of Science in CSE',
      institution: 'State University',
      duration: '2011 - 2015',
      description: 'Major in Computer Science and Engineering.'
    },
  ];

  const tabs = [
    { id: 'about', icon: FiUser, label: 'About Me' },
    { id: 'skills', icon: FiCode, label: 'Skills' },
    { id: 'experience', icon: FiBriefcase, label: 'Experience' },
    { id: 'education', icon: FiAward, label: 'Education' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know more about my professional journey and expertise
          </p>
        </motion.div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-1 bg-gray-100 dark:bg-gray-700 rounded-t-2xl">
            <div className="flex flex-wrap gap-2 p-2">
              {tabs.map((tab) => (
                <TabButton
                  key={tab.id}
                  active={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  icon={tab.icon}
                >
                  {tab.label}
                </TabButton>
              ))}
            </div>
          </div>

          <div className="p-8">
            <TabContent isActive={activeTab === 'about'}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    I'm a Passionate Developer
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    With over 5 years of experience in web development, I specialize in building modern web applications
                    using cutting-edge technologies. My expertise lies in creating responsive, accessible, and
                    performant user interfaces that deliver exceptional user experiences.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-8">
                    I'm passionate about clean code, thoughtful design, and continuous learning. When I'm not coding,
                    you can find me exploring new technologies, contributing to open source, or sharing my knowledge
                    with the developer community.
                  </p>
                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <FiDownload className="mr-2" />
                    Download CV
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                    <h4 className="text-4xl font-bold text-primary mb-2">5+</h4>
                    <p className="text-gray-600 dark:text-gray-300">Years Experience</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                    <h4 className="text-4xl font-bold text-primary mb-2">50+</h4>
                    <p className="text-gray-600 dark:text-gray-300">Projects Completed</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                    <h4 className="text-4xl font-bold text-primary mb-2">30+</h4>
                    <p className="text-gray-600 dark:text-gray-300">Happy Clients</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                    <h4 className="text-4xl font-bold text-primary mb-2">98%</h4>
                    <p className="text-gray-600 dark:text-gray-300">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </TabContent>

            <TabContent isActive={activeTab === 'skills'}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                    Technical Skills
                  </h3>
                  {skills.map((skill, index) => (
                    <SkillBar key={index} {...skill} />
                  ))}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                    Professional Skills
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: 'Problem Solving', level: 95 },
                      { name: 'Teamwork', level: 90 },
                      { name: 'Communication', level: 88 },
                      { name: 'Project Management', level: 85 },
                      { name: 'Creativity', level: 92 },
                      { name: 'Leadership', level: 87 },
                    ].map((skill, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center"
                      >
                        <div className="w-16 h-16 rounded-full border-4 border-primary flex items-center justify-center mx-auto mb-2">
                          <span className="text-lg font-bold text-gray-800 dark:text-white">
                            {skill.level}%
                          </span>
                        </div>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabContent>

            <TabContent isActive={activeTab === 'experience'}>
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
                  Work Experience
                </h3>
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <ExperienceItem key={index} {...exp} />
                  ))}
                </div>
              </div>
            </TabContent>

            <TabContent isActive={activeTab === 'education'}>
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
                  Education
                </h3>
                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <ExperienceItem key={index} {...edu} />
                  ))}
                </div>
              </div>
            </TabContent>
          </div>
        </div>
      </div>
    </section>
  );
};
