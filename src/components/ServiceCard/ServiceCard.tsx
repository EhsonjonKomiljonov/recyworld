import './service-card.scss';

type ServiceCardProp = {
  obj: {
    title?: string;
    statistica?: string;
    imgLink?: string;
  };
};

const ServiceCard = ({
  obj: { title, statistica, imgLink },
}: ServiceCardProp) => {
  return (
    <div className="service__card">
      <h3>{title}</h3>
      <p>{statistica}</p>
      <img src={imgLink} alt={title} />
    </div>
  );
};

export default ServiceCard;
