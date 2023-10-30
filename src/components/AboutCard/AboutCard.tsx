import './about-card.scss';
import { motion } from 'framer-motion';

type AboutCardType = {
  obj: {
    imgLink?: string;
    title?: string;
    desc?: string;
  };
};

const AboutCard = ({ obj: { imgLink, title, desc } }: AboutCardType) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={item}
      className="about__card"
    >
      <img src={imgLink} alt={title} width={275} height={90} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </motion.div>
  );
};

export default AboutCard;
