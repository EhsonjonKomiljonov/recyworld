import './title.scss';
import { motion } from 'framer-motion';

type TitleProp = {
  text: string;
  greenText: string;
};

const Title = ({ text, greenText }: TitleProp) => {
  return (
    <h2 className="main-title">
      {text}
      <motion.span
        initial={{ scale: 1, rotateX: 0 }}
        whileInView={{
          scale: [1, 1.2, 1],
          rotateX: [0, 180, 0],
          transition: { duration: 1, delay: 1.5 },
        }}
      >
        {greenText}
      </motion.span>
    </h2>
  );
};

export default Title;
