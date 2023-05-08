import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Icon } from "../../icon/Icon";
import {
  SliderContainer,
  SliderCardWrapper,
  SliderImageWrapper,
  Overlay,
  Title,
  Price,
  UserInfo,
  Avatar,
  UserName,
  Location,
  OverlaySpan,
} from "./Slider.styled";

export const SliderComponent = ({ slideData, sliderRef }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    // slidesToShow: slideData.length,
    slidesToShow: slideData.length >= 2 ? 2 : 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    variableWidth: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "25%",
  };

  return (
    <SliderContainer>
      <Slider ref={sliderRef} {...settings} className="featured">
        {slideData.map((slide) => (
          <SliderCardWrapper key={slide.id}>
            <SliderImageWrapper image={slide.photo}>
              <Overlay category={slide.category}>
                {slide.category === "Popular" ? (
                  <Icon name="icon-fire-min" width={12} height={12} />
                ) : slide.category === "New House" ? (
                  <Icon
                    name="icon-house-min"
                    fill="#1D4ED8"
                    width={12}
                    height={12}
                  />
                ) : (
                  <Icon name="icon-best-dials-min" width={12} height={12} />
                )}
                <OverlaySpan category={slide.category}>
                  {slide.category}
                </OverlaySpan>
              </Overlay>
            </SliderImageWrapper>

            <Title>{slide.name}</Title>
            <Price>{slide.price}</Price>
            <UserInfo>
              <Avatar src={slide.user.avatar} alt="avatar" />
              <div>
                <UserName>{slide.user.userName}</UserName>
                <Location>{slide.user.location}</Location>
              </div>
            </UserInfo>
          </SliderCardWrapper>
        ))}
      </Slider>
    </SliderContainer>
  );
};
