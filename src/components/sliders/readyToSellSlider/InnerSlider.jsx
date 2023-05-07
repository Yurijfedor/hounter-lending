import Slider from "react-slick";
import { SliderContainer } from "./InnerSlider.styled";
import sellSlidesData from "../../../data/sellSlides";

export const InnerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
  };

  return (
    <SliderContainer>
      <Slider {...settings} className="inner">
        {sellSlidesData[0].photos.map((photo, idx) => (
          <div key={idx}>
            <img src={photo} alt={`design ${idx}`} />
          </div>
        ))}
      </Slider>
    </SliderContainer>
  );
};
