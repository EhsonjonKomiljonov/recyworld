import './about-card.scss'

type AboutCardType = {
  obj: {
    imgLink?: string;
    title?: string;
    desc?: string;
  };
};

const AboutCard = ({ obj: { imgLink, title, desc } }: AboutCardType) => {
  return (
    <div className="about__card">
      <img src={imgLink} alt={title} width={275} height={90} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default AboutCard;
