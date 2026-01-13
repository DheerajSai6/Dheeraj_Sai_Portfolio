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
      category: "Full-Stack Web Development (MERN)",
      icon: "🚀",
      skills: [
        {
          name: "React.js & Next.js",
          description: "✔ Built responsive dashboards and eCommerce UIs\n✔ Implemented SSR, client-side routing, and state management",
          level: "Production-ready"
        },
        {
          name: "Node.js & Express.js",
          description: "✔ Developed REST APIs with JWT authentication\n✔ Built middleware for role-based access control",
          level: "Production-ready"
        },
        {
          name: "MongoDB",
          description: "✔ Schema design for MERN applications\n✔ CRUD operations and aggregation pipelines",
          level: "Production-ready"
        },
        {
          name: "JavaScript (ES6+)",
          description: "✔ Async/await, Promises, array methods\n✔ DOM manipulation and event handling",
          level: "Production-ready"
        }
      ]
    },
    {
      category: "Data Science & Analytics",
      icon: "📊",
      skills: [
        {
          name: "Pandas & NumPy",
          description: "✔ Data cleaning, transformation, and analysis\n✔ Statistical computations and preprocessing",
          level: "Project-level"
        },
        {
          name: "Data Visualization",
          description: "✔ Created interactive charts and dashboards\n✔ Statistical analysis and insights generation",
          level: "Project-level"
        },
        {
          name: "SQL",
          description: "✔ Writing complex queries and data extraction\n✔ Database analysis and reporting",
          level: "Project-level"
        },
        {
          name: "Excel",
          description: "✔ Advanced formulas, pivot tables, and data analysis\n✔ Creating reports and visualizations",
          level: "Production-ready"
        }
      ]
    },
    {
      category: "AI & Machine Learning",
      icon: "🤖",
      skills: [
        {
          name: "Machine Learning & Scikit-learn",
          description: "✔ Built classification and regression models\n✔ Feature engineering and hyperparameter tuning",
          level: "Project-level"
        },
        {
          name: "LLMs (Large Language Models)",
          description: "✔ Integrated OpenAI/Gemini APIs for AI features\n✔ Prompt engineering and model integration",
          level: "Project-level"
        },
        {
          name: "RAG (Retrieval-Augmented Generation)",
          description: "✔ Building RAG systems with vector databases\n✔ Context-aware AI applications",
          level: "Project-level"
        }
      ]
    },
    {
      category: "Core Programming & DSA",
      icon: "💻",
      skills: [
        {
          name: "Data Structures & Algorithms (Java)",
          description: "✔ Arrays, Strings, LinkedLists, Trees, Stack, Queues, Graphs, DP\n✔ Problem-solving on LeetCode and HackerRank",
          level: "Project-level"
        },
        {
          name: "Python",
          description: "✔ Data preprocessing with Pandas & NumPy\n✔ Scripting and automation",
          level: "Production-ready"
        },
        {
          name: "Java",
          description: "✔ Object-oriented programming and design patterns\n✔ Backend development and application logic",
          level: "Project-level"
        }
      ]
    },
    {
      category: "Databases",
      icon: "🗄️",
      skills: [
        {
          name: "MySQL",
          description: "✔ Relational database design and normalization\n✔ Complex queries and joins",
          level: "Project-level"
        },
        {
          name: "Firebase",
          description: "✔ Real-time database for live data sync\n✔ Authentication and storage integration",
          level: "Project-level"
        }
      ]
    },
    {
      category: "Developer Tools",
      icon: "🛠️",
      skills: [
        {
          name: "Git & GitHub",
          description: "✔ Version control and team collaboration\n✔ Branch management and PR workflows",
          level: "Production-ready"
        },
        {
          name: "HTML & CSS",
          description: "✔ Semantic markup and accessibility\n✔ Flexbox, Grid, animations, and responsive design",
          level: "Production-ready"
        },
        {
          name: "REST APIs",
          description: "✔ API design, testing, and integration\n✔ Authentication and error handling",
          level: "Project-level"
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
                            <div className="skill-card__level">
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

          {/* Proof of Skills Section */}
          <motion.div
            className="skills__proof"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{
              marginTop: '3rem',
              textAlign: 'center',
              padding: '1.5rem',
              borderRadius: '12px',
              background: 'rgba(74, 222, 128, 0.05)',
              border: '1px solid rgba(74, 222, 128, 0.2)'
            }}
          >
            <p style={{ 
              color: 'var(--color-text-muted)', 
              fontSize: '0.95rem',
              marginBottom: '0.5rem'
            }}>
              🧩 <strong style={{ color: 'var(--color-primary)' }}>Applied in real projects:</strong>
            </p>
            <p style={{ 
              color: 'var(--color-text)', 
              fontSize: '1rem'
            }}>
              MERN eCommerce Platform · AI Resume Builder · Online Food Delivery App
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
