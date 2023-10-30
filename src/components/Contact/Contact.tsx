import GreenBtn from '../GreenBtn/GreenBtn';
import './contact.scss';
import { motion } from 'framer-motion';

const Contact = () => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delay: 2 },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__inner">
          <motion.h2
            variants={container}
            initial="hidden"
            whileInView="visible"
          >
            <motion.span variants={child}> Ready </motion.span>
            <motion.span variants={child}> to </motion.span>
            <motion.span variants={child}> Make</motion.span>
            <motion.span variants={child}> Sacrifices</motion.span>
            <motion.span variants={child}> For</motion.span>
            <motion.span variants={child}> a Clean</motion.span>
            <motion.span variants={child}> and</motion.span>
            <motion.span variants={child}> Green</motion.span>
            <motion.span variants={child}> Environment</motion.span>
          </motion.h2>
          <GreenBtn text="Get Join Now" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
