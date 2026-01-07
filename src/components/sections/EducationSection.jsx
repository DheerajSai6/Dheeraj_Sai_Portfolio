import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './EducationSection.css';

const EducationSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Vaagdevi College of Engineering",
      duration: "2023 – 2027",
      score: "Currently Pursuing",
      icon: "🎓"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Alphores Junior College",
      duration: "2021 – 2023",
      score: "92.2%",
      icon: "📚"
    },
    {
      degree: "SSC (10th)",
      institution: "Siddartha High School",
      duration: "2020 – 2021",
      score: "10 GPA",
      icon: "🎯"
    }
  ];

  return (
    <section id="education" className="education" ref={sectionRef}>
      <div className="container">
        <div className="education__content">
          <motion.div
            className="education__header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2>Education</h2>
            <div className="education__header-decoration">
              <motion.div 
                className="education__header-line"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              ></motion.div>
              <motion.div 
                className="education__header-circle"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              ></motion.div>
            </div>
            <p>My Academic Journey</p>
          </motion.div>

          <div className="education__timeline">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                className="education-card"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="education-card__content">
                  <div className="education-card__icon">
                    <span>{edu.icon}</span>
                  </div>
                  <div className="education-card__details">
                    <h3 className="education-card__degree">{edu.degree}</h3>
                    <p className="education-card__institution">{edu.institution}</p>
                    <div className="education-card__meta">
                      <span className="education-card__duration">{edu.duration}</span>
                      <span className="education-card__score">{edu.score}</span>
                    </div>
                  </div>
                </div>
                <div className="education-card__line">
                  <motion.div 
                    className="education-card__line-inner"
                    initial={{ height: 0 }}
                    animate={isInView ? { height: "100%" } : { height: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
