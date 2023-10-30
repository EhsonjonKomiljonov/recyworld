import AboutCard from '../AboutCard/AboutCard';
import aboutCardData from '../../../db/aboutCardData.js';
import './about.scss';
import Title from '../Title/Title';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__inner">
          <div className="about__cards">
            {aboutCardData.map((item, index) => (
              <AboutCard obj={item} key={index} />
            ))}
          </div>
          <div className="about__content">
            <Title text="Recycling for a Better " greenText="World" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
              deserunt tempora porro. Eveniet fugit earum rerum molestiae.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
