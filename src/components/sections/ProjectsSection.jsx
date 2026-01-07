import { motion } from 'framer-motion';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'MERN + AI Assistant with smart product recommendations & chatbot assistant.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'AI'],
      icon: '🛍️'
    },
    {
      title: 'Blood Donation System',
      description: 'Real-time donor management & hospital dashboard built with Firebase.',
      tech: ['React', 'Firebase', 'Real-time DB'],
      icon: '🩸'
    },
    {
      title: 'Online Food Delivery',
      description: 'MERN stack website with live tracking, restaurant discounts, and reviews.',
      tech: ['MERN', 'Socket.io', 'Redux'],
      icon: '🍔'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="projects__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut"
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            className="projects__header-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.4, duration: 0.8 }}
          ></motion.div>
        </motion.div>

        <motion.div 
          className="projects__grid"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: 0.4 + index * 0.2,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 10 }
              }}
            >
              <motion.div 
                className="project-card__icon-container"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: 0.6 + index * 0.2,
                  type: "spring",
                  stiffness: 300,
                  damping: 10
                }}
              >
                <span className="project-card__icon">{project.icon}</span>
              </motion.div>
              <motion.div 
                className="project-card__content"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.2, duration: 0.5 }}
              >
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 + index * 0.2, duration: 0.5 }}
                >
                  {project.description}
                </motion.p>
                <motion.div 
                  className="project-card__tech"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                >
                  {project.tech.map((tech, i) => (
                    <motion.span 
                      key={i} 
                      className="tech-tag"
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "var(--color-primary)",
                        color: "var(--color-bg)"
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
