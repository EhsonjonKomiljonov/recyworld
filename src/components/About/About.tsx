import AboutCard from '../AboutCard/AboutCard';
import aboutCardData from '../../../db/aboutCardData.js';
import './about.scss';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__inner">
          <div className="about__cards">
            {aboutCardData.map((item) => (
              <AboutCard obj={item} />
            ))}
          </div>
          <div className="about__content">
            <h2>
              Recycling for a Better <span>World</span>
            </h2>
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
