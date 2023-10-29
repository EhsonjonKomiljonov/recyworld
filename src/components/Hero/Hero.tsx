import './hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__content">
            <h1 className="hero__title">
              Smarter Solutions for a Cleaner <span>World</span>
            </h1>
            <p className='hero__desc'>
              Li Europan lingues es membres del sam familie. Lor separat
              existentic es un myth. Por scientie, musica, sport etc. Litot Europa use li sam vacabular. Li lingues differe solmen in li grammatica. Li pronunciation e
            </p>
            <div className='hero__content__btns'>
              <button>Learn More</button>
              <button>Watch Our Video</button>
            </div>
            <p className='hero__text'>Save Earth</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
