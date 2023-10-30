import './nav.scss';
import { motion } from 'framer-motion';

const Nav = () => {
  return (
    <nav className="nav">
      <motion.ul
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.1, 1], transition: { duration: 1.5, delay: 1 } }}
      >
        <motion.li
          initial={{ y: -100 }}
          animate={{ y: 0, transition: { duration: 0.6 } }}
        >
          <a href="#">Home</a>
        </motion.li>
        <motion.li
          initial={{ y: -100 }}
          animate={{ y: 0, transition: { duration: 0.8 } }}
        >
          <a href="#about">About Us</a>
        </motion.li>
        <motion.li
          initial={{ y: -100 }}
          animate={{ y: 0, transition: { duration: 1 } }}
        >
          <a href="#service">Service</a>
        </motion.li>
        <motion.li
          initial={{ y: -100 }}
          animate={{ y: 0, transition: { duration: 1.2 } }}
        >
          <a href="#blog">Blog</a>
        </motion.li>
        <motion.li
          initial={{ y: -100 }}
          animate={{ y: 0, transition: { duration: 1.4 } }}
        >
          <a href="#contact">Contact Us</a>
        </motion.li>
      </motion.ul>
    </nav>
  );
};

export default Nav;
