import BlogSlider from '../BlogSlider/BlogSlider';
import Title from '../Title/Title';
import './blog.scss';

const Blog = () => {
  return (
    <section className="blog" id="blog">
      <div className="container">
        <div className="blog__inner">
          <div className="blog__content">
            <Title text="Latest Article " greenText="World" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ea excepturi nam. Temporibus, iste unde?
            </p>
          </div>
          <div className="blog__slider">
            <BlogSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
