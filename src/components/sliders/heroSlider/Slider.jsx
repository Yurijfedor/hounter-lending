import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import { Icon } from "../../icon/Icon";
import {
  SliderContainer,
  SliderWrapp,
  SlideTextWrapp,
  SlideTitle,
  SlideDescription,
  RatingWrapp,
  RatingText,
} from "./Slider.styled";

export const SliderComponent = ({ slideData }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    variableWidth: true,
    autoplaySpeed: 3000,
  };

  return (
    <SliderContainer style={{ width: "657px" }}>
      <Slider {...settings} className="hero">
        {slideData.map((slide) => (
          <SliderWrapp key={slide.title}>
            <img src={slide.photo} alt={slide.title} />
            <SlideTextWrapp>
              <SlideTitle>{slide.title}</SlideTitle>
              <SlideDescription>{slide.description}</SlideDescription>
              <RatingWrapp>
                <Icon name="icon-star-min" width={13} height={12} />
                <RatingText>{slide.rating}</RatingText>
              </RatingWrapp>
            </SlideTextWrapp>
          </SliderWrapp>
        ))}
      </Slider>
    </SliderContainer>
  );
};
