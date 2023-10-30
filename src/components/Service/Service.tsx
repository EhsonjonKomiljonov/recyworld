import ServiceImg1 from '../../assets/images/service-img-1.png';
import ServiceImg2 from '../../assets/images/service-img-2.png';
import { serviceCardData } from '../../../db/serviceCardData';
import ServiceCard from '../ServiceCard/ServiceCard';
import './service.scss';
import Title from '../Title/Title';

const Service = () => {
  return (
    <section className="service" id='service'>
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
            <img
              src={ServiceImg1}
              alt="Smarter Solutions for a Cleaner World"
              width="49%"
              height="20%"
            />
            <img
              src={ServiceImg2}
              alt="Smarter Solutions for a Cleaner World"
              width="49%"
              height="20%"
            />
          </div>
          <div className="service__cards">
            {serviceCardData.map((item) => (
              <ServiceCard obj={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
