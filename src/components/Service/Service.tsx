import ServiceImg1 from '../../assets/images/service-img-1.png';
import ServiceImg2 from '../../assets/images/service-img-2.png';
import { serviceCardData } from '../../../db/serviceCardData';
import ServiceCard from '../ServiceCard/ServiceCard';
import './service.scss';
import Title from '../Title/Title';
import { motion } from 'framer-motion';

const Service = () => {
  return (
    <section className="service" id="service">
      <div className="container">
        <div className="service__inner">
          <div className="service__content">
            <Title text="Smarter Solutions for a Cleaner " greenText="World" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
              officia, corrupti quaerat similique molestiae qui. Quaerat
              similique molestiae qui.
            </p>
          </div>
          <div className="service__images">
            <motion.img
              initial={{ x: -200 }}
              whileInView={{
                x: 0,
                transition: { duration: 1 },
              }}
              src={ServiceImg1}
              alt="Smarter Solutions for a Cleaner World"
              width="49%"
              height="20%"
            />
            <motion.img
              initial={{ x: -800 }}
              whileInView={{
                x: 0,
                transition: { duration: 2, },
              }}
              src={ServiceImg2}
              alt="Smarter Solutions for a Cleaner World"
              width="48.4%"
              height="14%"
            />
          </div>
          <motion.div
            className="service__cards"
            initial={{ opacity: 0, y: -200 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          >
            {serviceCardData.map((item, index) => (
              <ServiceCard key={index} obj={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Service;
