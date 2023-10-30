import AboutCard from '../AboutCard/AboutCard';
import aboutCardData from '../../../db/aboutCardData.js';
import Title from '../Title/Title';
import { motion } from 'framer-motion';
import './about.scss';

const About = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const parent = {
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
    <section className="about" id="about">
      <div className="container">
        <div className="about__inner">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            className="about__cards"
            // viewport={{ once: true }}
          >
            {aboutCardData.map((item, index) => (
              <AboutCard obj={item} key={index} />
            ))}
          </motion.div>
          <motion.div
            className="about__content"
            initial={{ x: -150, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 0.5 },
            }}
          >
            <Title text="Recycling for a Better " greenText="World" />
            <motion.p variants={parent} initial="hidden" whileInView="visible">
              <motion.span variants={child}>Lorem, ipsum</motion.span>
              <motion.span variants={child}>dolor sit</motion.span>
              <motion.span variants={child}>amet consectetur</motion.span>
              <motion.span variants={child}>adipisicing elit.</motion.span>
              <motion.span variants={child}>Quasi</motion.span>
              <motion.span variants={child}>deserunt tempora</motion.span>
              <motion.span variants={child}>porro. Eveniet</motion.span>
              <motion.span variants={child}>fugit earum</motion.span>
              <motion.span variants={child}>rerum molestiae.</motion.span>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
