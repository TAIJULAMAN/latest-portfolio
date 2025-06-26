import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FiUser, FiCode, FiBriefcase, FiAward, FiDownload, FiArrowRight } from 'react-icons/fi';
import { SiC, SiCplusplus, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiBootstrap, SiTailwindcss, SiMui, SiAntdesign, SiReact, SiRedux, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiMongoose, SiPrisma, SiPostgresql, SiGraphql, SiSocketdotio } from 'react-icons/si';

const TabButton = ({ active, onClick, children, icon: Icon }) => (
  <motion.button
    onClick={onClick}
    className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${active
        ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20'
        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50'
      }`}
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.98 }}
  >
    <Icon className="mr-2" />
    {children}
  </motion.button>
);

const TabContent = ({ children, isActive }) => (
  <AnimatePresence mode="wait">
    {isActive && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mt-8"
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

const SkillBar = ({ name, level, color = 'primary' }) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-sm text-gray-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r from-${color} to-${color === 'primary' ? 'secondary' : color} ${color === 'primary' ? 'bg-primary' : ''}`}
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${level}%` : 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const skillIcons = {
  // Languages
  'C': { icon: <SiC className="w-6 h-6" />, color: 'text-blue-600' },
  'C++': { icon: <SiCplusplus className="w-6 h-6" />, color: 'text-blue-700' },
  'JavaScript': { icon: <SiJavascript className="w-6 h-6 text-yellow-400" />, color: 'text-yellow-400' },
  'TypeScript': { icon: <SiTypescript className="w-6 h-6 text-blue-600" />, color: 'text-blue-600' },
  // Frontend
  'HTML5': { icon: <SiHtml5 className="w-6 h-6 text-orange-500" />, color: 'text-orange-500' },
  'CSS3': { icon: <SiCss3 className="w-6 h-6 text-blue-500" />, color: 'text-blue-500' },
  'Bootstrap': { icon: <SiBootstrap className="w-6 h-6 text-purple-600" />, color: 'text-purple-600' },
  'Tailwind': { icon: <SiTailwindcss className="w-6 h-6 text-cyan-400" />, color: 'text-cyan-400' },
  'MUI': { icon: <SiMui className="w-6 h-6 text-blue-500" />, color: 'text-blue-500' },
  'Ant Design': { icon: <SiAntdesign className="w-6 h-6 text-red-500" />, color: 'text-red-500' },
  'React': { icon: <SiReact className="w-6 h-6 text-cyan-500" />, color: 'text-cyan-500' },
  'Redux': { icon: <SiRedux className="w-6 h-6 text-purple-500" />, color: 'text-purple-500' },
  'NextJS': { icon: <SiNextdotjs className="w-6 h-6" />, color: 'text-black dark:text-white' },
  // Backend
  'NodeJS': { icon: <SiNodedotjs className="w-6 h-6 text-green-600" />, color: 'text-green-600' },
  'ExpressJS': { icon: <SiExpress className="w-6 h-6" />, color: 'text-gray-800 dark:text-white' },
  'MongoDB': { icon: <SiMongodb className="w-6 h-6 text-green-600" />, color: 'text-green-600' },
  'Mongoose': { icon: <SiMongoose className="w-6 h-6 text-red-500" />, color: 'text-red-500' },
  'Prisma': { icon: <SiPrisma className="w-6 h-6 text-blue-900 dark:text-white" />, color: 'text-blue-900 dark:text-white' },
  'PostgreSQL': { icon: <SiPostgresql className="w-6 h-6 text-blue-700" />, color: 'text-blue-700' },
  'GraphQL': { icon: <SiGraphql className="w-6 h-6 text-pink-600" />, color: 'text-pink-600' },
  'Socket.IO': { icon: <SiSocketdotio className="w-6 h-6" />, color: 'text-black dark:text-white' },
};

const SkillCategory = ({ title, skills }) => (
  <div className="mb-8">
    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
      {title}:
    </h4>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => {
        const skillData = skillIcons[skill] || {
          icon: skill,
          color: 'text-gray-800 dark:text-gray-200'
        };

        return (
          <motion.div
            key={index}
            className="relative group"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className={`p-3 bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-all duration-300 ${skillData.color}`}>
              {skillData.icon}
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray-900 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
              {skill}
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
);

const ExperienceItem = ({ role, company, duration, description, isLast }) => (
  <motion.div
    className="relative pl-8 pb-8 group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary group-hover:scale-125 transition-transform duration-300 z-10" />
    {!isLast && (
      <div className="absolute left-[7px] top-5 w-0.5 h-full bg-gradient-to-b from-primary/20 to-transparent" />
    )}
    <div className="flex flex-col sm:flex-row sm:justify-between">
      <h4 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-primary dark:group-hover:text-primary-400 transition-colors">
        {role}
      </h4>
      <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        {duration}
      </span>
    </div>
    <p className="text-gray-600 dark:text-gray-300 font-medium mb-2">{company}</p>
    <p className="text-gray-500 dark:text-gray-400">{description}</p>
  </motion.div>
);

const StatCard = ({ value, label, icon: Icon }) => (
  <motion.div
    className="bg-white dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary dark:text-primary-400 flex items-center justify-center text-xl mb-4">
      <Icon className="w-6 h-6" />
    </div>
    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{value}</div>
    <div className="text-sm text-gray-500 dark:text-gray-400">{label}</div>
  </motion.div>
);

export const About = () => {
  const [activeTab, setActiveTab] = useState('about');
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  const technicalSkills = [
    {
      title: "Languages",
      skills: ["C", "C++", "JavaScript", "TypeScript"]
    },
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "Bootstrap", "Tailwind", "MUI", "Ant Design", "React", "Redux", "NextJS"]
    },
    {
      title: "Backend",
      skills: ["NodeJS", "ExpressJS", "Mongoose", "MongoDB", "Prisma", "PostgreSQL", "GraphQL", "Socket.IO"]
    }
 
  ];

  const experiences = [
    {
      role: 'Frontend Developer',
      company: 'TechCorp Inc.',
      duration: '2023 - Present',
      description: 'Building modern web applications with React and Next.js, focusing on performance and user experience.'
    },
    {
      role: 'Junior Developer',
      company: 'WebSolutions LLC',
      duration: '2022 - 2023',
      description: 'Developed and maintained web applications using the MERN stack.'
    },
    {
      role: 'Web Development Intern',
      company: 'Digital Agency',
      duration: '2021 - 2022',
      description: 'Assisted in building responsive websites and implementing UI/UX designs.'
    },
  ];

  const education = [
    {
      role: 'B.Sc. in Computer Science',
      company: 'State University',
      duration: '2018 - 2022',
      description: 'Specialized in Web Technologies and Software Engineering.'
    },
    {
      role: 'Web Development Bootcamp',
      company: 'Coding Academy',
      duration: '2021',
      description: 'Intensive full-stack web development program.'
    },
  ];

  const stats = [
    { value: '1+', label: 'Years Experience', icon: FiBriefcase },
    { value: '50+', label: 'Projects Completed', icon: FiCode },
    { value: '100%', label: 'Client Satisfaction', icon: FiAward },
  ];

  const tabs = [
    { id: 'about', icon: FiUser, label: 'About Me' },
    { id: 'skills', icon: FiCode, label: 'Skills' },
    { id: 'experience', icon: FiBriefcase, label: 'Experience' },
    { id: 'education', icon: FiAward, label: 'Education' },
  ];

  return (
    <section
      id="about"
      ref={targetRef}
      className="relative py-24 bg-gray-50 dark:bg-gray-900/50 overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y }}
      >
        <div className="absolute inset-0 opacity-30 dark:opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0VjIwYTQgNCAwIDAwLTQtNEgyOGE0IDQgMCAwMC00IDR2MTRhNCA0IDAgMDA0IDHoNGE0IDQgMCAwMDQtNHpNMTYgMjRhNCA0IDAgMDE0LTRoNGE0IDQgMCAwMTQgNHYyYTQgNCAwIDAxLTQgNEgyMGE0IDQgMCAwMS00LTR2LTJ6TTAgMTh2MWE0IDQgMCAwMDQgNGg0YTQgNCAwIDAwNC00di0xYTQgNCAwIDAwLTRtMCAxNHYxYTQgNCAwIDAwNCA0aDRhNCA0IDAgMDA0LTR2LTFhNCA0IDAgMDAtNHpNMCAzNHYxYTQgNCAwIDAwNCA0aDRhNCA0IDAgMDA0LTR2LTFhNCA0IDAgMDAtNHpNMCA0djFhNCA0IDAgMDEtNCA0SDFhNCA0IDAgMDEtNC00VjRhNCA0IDAgMDE0LTRoMWE0IDQgMCAwMTQgNHoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        </div>
        <motion.div
          className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-gradient-to-l from-primary/20 to-transparent rounded-full filter blur-3xl opacity-30"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary dark:text-primary-400 text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            My Journey
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know more about my professional journey and expertise
          </p>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <div className="p-1 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-t-2xl">
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
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    I'm a Passionate <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Developer</span>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    With a strong foundation in web development, I specialize in building modern web applications
                    using cutting-edge technologies. My expertise lies in creating responsive, accessible, and
                    performant user interfaces that deliver exceptional user experiences.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    I'm passionate about clean code, thoughtful design, and continuous learning. When I'm not coding,
                    you can find me exploring new technologies, contributing to open source, or sharing my knowledge
                    with the developer community.
                  </p>
                  <motion.div
                    className="flex flex-wrap gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <a
                      href="#contact"
                      className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-medium hover:opacity-90 transition-all duration-300 flex items-center gap-2 group shadow-lg shadow-primary/20 hover:shadow-primary/30"
                    >
                      Contact Me
                      <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                    <a
                      href="/resume.pdf"
                      download
                      className="px-6 py-3 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 flex items-center gap-2 group"
                    >
                      Download CV
                      <FiDownload className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
                    </a>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="grid grid-cols-2 gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {stats.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                  ))}
                </motion.div>
              </div>
            </TabContent>

            <TabContent isActive={activeTab === 'skills'}>
              <div className="grid md:grid-cols-1 gap-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
                    Technical <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Skills</span>
                  </h3>
                  <div className="space-y-6">
                    {technicalSkills.map((category, index) => (
                      <SkillCategory
                        key={index}
                        title={category.title}
                        skills={category.skills}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </TabContent>

            <TabContent isActive={activeTab === 'experience'}>
              <div className="max-w-3xl mx-auto">
                <motion.h3
                  className="text-2xl font-bold text-gray-800 dark:text-white mb-12 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                >
                  Work <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Experience</span>
                </motion.h3>
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <ExperienceItem
                      key={index}
                      {...exp}
                      isLast={index === experiences.length - 1}
                    />
                  ))}
                </div>
              </div>
            </TabContent>

            <TabContent isActive={activeTab === 'education'}>
              <div className="max-w-3xl mx-auto">
                <motion.h3
                  className="text-2xl font-bold text-gray-800 dark:text-white mb-12 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                >
                  My <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Education</span>
                </motion.h3>
                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <ExperienceItem
                      key={index}
                      {...edu}
                      isLast={index === education.length - 1}
                    />
                  ))}
                </div>
              </div>
            </TabContent>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
