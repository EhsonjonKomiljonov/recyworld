import BlogCard from '../BlogCard/BlogCard';
import { blogCardData } from '../../../db/blogCardData';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import './blog-slider.scss';

const BlogSlider = () => {
  return (
    <>
      <Swiper
        freeMode={true}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {blogCardData.map((item) => (
          <SwiperSlide>
            <BlogCard obj={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BlogSlider;
