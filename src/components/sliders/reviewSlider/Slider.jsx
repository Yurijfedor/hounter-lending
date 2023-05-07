import Slider from "react-slick";
import slideData from "../../../data/sellSlides";
import { Icon } from "../../icon/Icon";
import {
  SliderContainer,
  StyledImg,
  ReviewWrapp,
  ReviewTitle,
  ReviewContent,
  AuthorBlockWrapp,
  AuthorInfoWrapp,
  UserAvatar,
  UserName,
  UserPosition,
  UserNamePositionWrapper,
  RaitingWrapp,
  Raiting,
} from "./Slider.styled";

export const ReviewSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    centerPadding: "1%",
  };

  return (
    <SliderContainer>
      <Slider {...settings} className="review">
        {slideData.map((slide) => (
          <li key={slide.id}>
            <StyledImg image={slide.url1}>
              <ReviewWrapp>
                <ReviewTitle>{slide.review.title}</ReviewTitle>
                <ReviewContent>{slide.review.content}</ReviewContent>
                <AuthorBlockWrapp>
                  <AuthorInfoWrapp>
                    <UserAvatar avatar={slide.user.avatar} />
                    <UserNamePositionWrapper>
                      <UserName>{slide.user.userName}</UserName>
                      <UserPosition>{slide.user.location}</UserPosition>
                    </UserNamePositionWrapper>
                  </AuthorInfoWrapp>
                  <RaitingWrapp>
                    <Icon name="icon-star-min" />
                    <Raiting>{slide.raiting}</Raiting>
                  </RaitingWrapp>
                </AuthorBlockWrapp>
              </ReviewWrapp>
            </StyledImg>
          </li>
        ))}
      </Slider>
    </SliderContainer>
  );
};
