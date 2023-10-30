import GreenBtn from '../GreenBtn/GreenBtn';
import './hero.scss';
import { motion } from 'framer-motion';

const Hero = () => {
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
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      className="hero"
    >
      <div className="container">
        <div className="hero__inner">
          <div className="hero__content">
            <h1 className="hero__title">
              Smarter Solutions for a Cleaner{' '}
              <motion.span
                initial={{ x: 500, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { duration: 1.5 } }}
              >
                World
              </motion.span>
            </h1>
            <motion.p
              initial="hidden"
              whileInView="visible"
              variants={container}
              className="hero__desc"
            >
              <motion.span variants={child}>Li Europan </motion.span>
              <motion.span variants={child}>lingues es</motion.span>
              <motion.span variants={child}> membres del</motion.span>
              <motion.span variants={child}> sam familie.</motion.span>
              <motion.span variants={child}> Lor separat</motion.span>
              <motion.span variants={child}>existentic es un</motion.span>
              <motion.span variants={child}> myth. Por</motion.span>
              <motion.span variants={child}> scientie, musica,</motion.span>
              <motion.span variants={child}> sport etc.</motion.span>
              <motion.span variants={child}> Litot</motion.span>
              <motion.span variants={child}>Europa use</motion.span>
              <motion.span variants={child}> li sam vacabular.</motion.span>
              <motion.span variants={child}> Li lingues differe</motion.span>
              <motion.span variants={child}> solmen in li</motion.span>
              <motion.span variants={child}>grammatica.</motion.span>
              <motion.span variants={child}> Li pronunciation e</motion.span>
            </motion.p>
            <motion.div
              initial={{ y: 200 }}
              animate={{ y: 0, transition: {duration: 1} }}
              className="hero__content__btns"
            >
              <GreenBtn text="Learn More" />
              <button>Watch Our Video</button>
            </motion.div>
            <p className="hero__text">Save Earth</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
