import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './ContactSection.css';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: faPhone,
      label: 'Phone',
      value: '+91 6304981392',
      link: 'tel:+916304981392'
    },
    {
      icon: faEnvelope,
      label: 'Email',
      value: 'dheerajsai628@gmail.com',
      link: 'mailto:dheerajsai628@gmail.com'
    },
    {
      icon: faGithub,
      label: 'GitHub',
      value: 'DheerajSai24',
      link: 'https://github.com/DheerajSai24'
    },
    {
      icon: faLinkedinIn,
      label: 'LinkedIn',
      value: 'Dheeraj Sai Goutham',
      link: 'https://www.linkedin.com/in/dheeraj-sai-goutham'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="contact__header"
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
            Get In Touch
          </motion.h2>
          <motion.div 
            className="contact__header-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.4, duration: 0.8 }}
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Feel free to reach out for collaborations or just a friendly hello 👋
          </motion.p>
        </motion.div>

        <motion.div 
          className="contact__content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <motion.div className="contact__cards">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.6 + index * 0.2,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 10 }
                }}
              >
                <motion.div 
                  className="contact-card__icon"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: 0.8 + index * 0.2,
                    type: "spring",
                    stiffness: 300,
                    damping: 10
                  }}
                >
                  <FontAwesomeIcon icon={info.icon} size="lg" />
                </motion.div>
                <motion.div 
                  className="contact-card__content"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 + index * 0.2, duration: 0.5 }}
                >
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                  >
                    {info.label}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.1 + index * 0.2, duration: 0.5 }}
                  >
                    {info.value}
                  </motion.p>
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
