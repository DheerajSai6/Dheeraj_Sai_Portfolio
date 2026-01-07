import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './SkillsSection.css';

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillCategories = [
    {
      category: "Data Science & AI",
      icon: "🤖",
      skills: [
        {
          name: "Machine Learning",
          description: "Basic algorithms and model training",
          level: "Intermediate"
        },
        {
          name: "Data Analytics",
          description: "Data visualization and statistical analysis",
          level: "Intermediate"
        },
        {
          name: "Pandas & NumPy",
          description: "Data manipulation and numerical computing",
          level: "Intermediate"
        }
      ]
    },
    {
      category: "Programming",
      icon: "💻",
      skills: [
        {
          name: "Python",
          description: "Data analysis, scripting, and backend development",
          level: "Advanced"
        },
        {
          name: "Java",
          description: "Object-oriented programming and application development",
          level: "Intermediate"
        },
        {
          name: "JavaScript",
          description: "Modern ES6+, async programming, and DOM manipulation",
          level: "Advanced"
        }
      ]
    },
    {
      category: "Web Development",
      icon: "🌐",
      skills: [
        {
          name: "React.js",
          description: "Building modern, responsive web applications",
          level: "Advanced"
        },
        {
          name: "Node.js",
          description: "Server-side JavaScript and API development",
          level: "Advanced"
        },
        {
          name: "Express.js",
          description: "RESTful API design and middleware implementation",
          level: "Intermediate"
        },
        {
          name: "MongoDB",
          description: "NoSQL database design and integration",
          level: "Intermediate"
        }
      ]
    },
    {
      category: "Frontend Tools",
      icon: "🎨",
      skills: [
        {
          name: "HTML",
          description: "Semantic markup and accessibility",
          level: "Advanced"
        },
        {
          name: "CSS",
          description: "Modern layouts, animations, and responsive design",
          level: "Advanced"
        },
        {
          name: "Tailwind",
          description: "Utility-first CSS framework for rapid development",
          level: "Intermediate"
        }
      ]
    },
    {
      category: "Database",
      icon: "🗄️",
      skills: [
        {
          name: "MySQL",
          description: "Relational database design and queries",
          level: "Intermediate"
        },
        {
          name: "Firebase",
          description: "Real-time database and authentication",
          level: "Intermediate"
        },
        {
          name: "MongoDB",
          description: "Document database modeling and operations",
          level: "Intermediate"
        }
      ]
    },
    {
      category: "Other Tools",
      icon: "🛠️",
      skills: [
        {
          name: "Git & GitHub",
          description: "Version control and collaboration",
          level: "Advanced"
        },
        {
          name: "REST APIs",
          description: "API design and integration",
          level: "Advanced"
        },
        {
          name: "DevOps",
          description: "CI/CD pipelines and deployment",
          level: "Learning"
        }
      ]
    }
  ];

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="container">
        <div className="skills__content">
          <motion.div
            className="skills__header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2>Technical Expertise</h2>
            <div className="skills__header-decoration">
              <motion.div 
                className="skills__header-line"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              ></motion.div>
              <motion.div 
                className="skills__header-circle"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              ></motion.div>
            </div>
            <p>Crafting digital experiences with modern technologies</p>
          </motion.div>

          <motion.div
            className="skills__categories"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                className="skill-category"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <div className="skill-category__content">
                  <div className="skill-category__header">
                    <motion.span 
                      className="skill-category__icon"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 + categoryIndex * 0.1 }}
                    >
                      {category.icon}
                    </motion.span>
                    <h3>{category.category}</h3>
                  </div>
                  <div className="skill-category__grid">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="skill-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        whileHover={{ 
                          y: -5,
                          scale: 1.02,
                          transition: { type: "spring", stiffness: 400, damping: 10 }
                        }}
                        transition={{ 
                          duration: 0.4,
                          delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05
                        }}
                      >
                        <div className="skill-card__content">
                          <h4 className="skill-card__title">{skill.name}</h4>
                          <p className="skill-card__description">{skill.description}</p>
                          <div className="skill-card__level-container">
                            <div 
                              className={`skill-card__level skill-card__level--${skill.level.toLowerCase()}`}
                            >
                              <span className="skill-card__level-dot"></span>
                              {skill.level}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
