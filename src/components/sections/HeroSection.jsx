import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import './HeroSection.css';
import profileImage from '../../assets/Dheeraj.jpeg';

const HeroSection = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero__container">
        <div className="hero__content">
          {/* Left Content */}
          <motion.div 
            className="hero__text"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut"
            }}
          >
            <motion.div 
              className="hero__greeting"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span>Hello There!</span>
            </motion.div>
            <motion.h1 
              className="hero__title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <TypeAnimation
                sequence={[
                  'Turning Data into Insights',
                  2000,
                  'Building Scalable Web Solutions',
                  2000,
                  'Creating Innovative ML Models',
                  2000,
                  'Developing Full-Stack Applications',
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                style={{ display: 'inline-block' }}
              />
            </motion.h1>
            <motion.p 
              className="hero__description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              I'm a Computer Science Engineering student (B.Tech, graduating 2027), an aspiring{' '}
              <strong>Data Scientist</strong>, and a passionate <strong>MERN Stack Developer</strong>. 
              I love solving real-world problems using data-driven approaches and building efficient, 
              user-friendly web applications.
            </motion.p>
            <motion.div 
              className="hero__buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                View My Portfolio
              </motion.button>
              <motion.a
                href="/resume.pdf"
                download="Dheeraj_Sai_Resume.pdf"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Download Resume 📄
              </motion.a>
              <motion.button
                className="btn btn-outline"
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Hire Me
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div 
            className="hero__image-container"
            initial={{ opacity: 0, x: 100, rotate: -5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2
            }}
          >
            <div className="hero__image-wrapper">
              <div className="hero__image-blob"></div>
              <img 
                src={profileImage}
                alt="Dheeraj Sai"
                className="hero__image"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
