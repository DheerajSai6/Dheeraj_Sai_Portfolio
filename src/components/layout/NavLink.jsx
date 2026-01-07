import { motion } from 'framer-motion';

const NavLink = ({ href, children, mobile, onClick, active }) => {
  const sectionId = href.replace('#', '');
  
  return (
    <motion.a
      href={href}
      onClick={(e) => onClick(e, sectionId)}
      className={`nav-link ${mobile ? 'mobile' : ''} ${active ? 'active' : ''}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
      <motion.div
        className="nav-link__underline"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: active ? 1 : 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.a>
  );
};

export default NavLink;
