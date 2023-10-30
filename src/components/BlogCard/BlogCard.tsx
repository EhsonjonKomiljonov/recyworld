import './blog-card.scss';

type BlogCardProp = {
  obj: {
    imgLink?: string;
    title?: string;
    desc?: string;
  };
};

const BlogCard = ({ obj: { imgLink, title, desc } }: BlogCardProp) => {
  return (
    <div className="blog__card">
      <img src={imgLink} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
      <a href="#">Read Mode {'>>'} </a>
    </div>
  );
};

export default BlogCard;
