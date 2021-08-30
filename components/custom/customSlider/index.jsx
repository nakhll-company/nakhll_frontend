import { Fragment } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// install Swiper's Controller component
SwiperCore.use([Navigation]);

const CustomSlider = ({ data = [], slides576, slides992, slides1200, ...otherSwiperProps }) => {
  return (
    <Fragment>
      <div className="product_row">
        <section className="product_row_item" >
          <div className="container">
            <div className="explore_components_header">
              <div className="explore_components_header__content">
                <h2 className="explore_components_header__title">لوازم پزشکی</h2>
                <span className="explore_components_header__description">منتخب سردبیر</span>
              </div>
              <div>
                <a className="explore_components_header__morelink">
                  مشاهده همه
                  <i className="fas fa-arrow-left" style={{ fontSize: "1rem", display: "inline-block", verticalAlign: "middle", marginRight: 10 }}></i>
                </a>
              </div>
            </div>
          </div>
        </section>
        <Swiper
          breakpoints={{
            576: {
              slidesPerView: slides576 || 2,
            },
            992: {
              slidesPerView: slides992 || 3,
            },
            1200: {
              slidesPerView: slides1200 || 4,
            },
          }}
          index={0}
          navigation
          allowSlideNext={true}
          {...otherSwiperProps}
        >
          {data?.map((slide, index) => (
            <SwiperSlide className="slider_item" key={`slide-${index}`}>{slide}</SwiperSlide>
          ))}
        </Swiper>

      </div>

    </Fragment>
  );
};

export default CustomSlider;
