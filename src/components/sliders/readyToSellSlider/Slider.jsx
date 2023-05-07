import { useState } from "react";
import Slider from "react-slick";
import { Modal } from "../../modal/modal";
import { Icon } from "../../icon/Icon";
import { InnerSlider } from "./InnerSlider";
import slideData from "../../../data/sellSlides";
import {
  MainWrapper,
  HouseDetailWrapper,
  HouseDetailColumn,
  HouseDetailValue,
  UserWrapper,
  UserAvatar,
  UserNamePositionWrapper,
  UserName,
  UserPosition,
  LinkButton,
  ImageWrapper,
  AverageImage,
  SmallImageWrapper,
  SmallImage,
  PlayButtonCircle,
  HouseDetailTitle,
} from "./Slider.styled";

export const SliderComponent = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handlePhotoClick = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    variableWidth: true,
    autoplaySpeed: 5000,
    pauseOnHover: isHovered,
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: "absolute", top: "114px", overflowX: "hidden" }}
    >
      <Slider {...settings} className="sell">
        {slideData.map((slide, index) => (
          <>
            <MainWrapper key={slide.id}>
              <div>
                <HouseDetailTitle>House Detail</HouseDetailTitle>
                <HouseDetailWrapper>
                  <HouseDetailColumn>
                    <li>
                      <HouseDetailValue>
                        <span>
                          <Icon name="icon-bedrooms-min" />
                        </span>
                        {`${slide.houseDetail.bedrooms} Bedrooms`}
                      </HouseDetailValue>
                    </li>
                    <li>
                      <HouseDetailValue>
                        <span>
                          <Icon name="icon-carport-min" />
                        </span>
                        {`${slide.houseDetail.carPort} Carport`}
                      </HouseDetailValue>
                    </li>
                  </HouseDetailColumn>
                  <HouseDetailColumn>
                    <li>
                      <HouseDetailValue>
                        <span>
                          <Icon name="icon-bathrooms-min" />
                        </span>
                        {`${slide.houseDetail.bathrooms} Bathrooms`}
                      </HouseDetailValue>
                    </li>
                    <li>
                      <HouseDetailValue>
                        <span>
                          <Icon name="icon-floors-min" />
                        </span>
                        {`${slide.houseDetail.floors} Floors`}
                      </HouseDetailValue>
                    </li>
                  </HouseDetailColumn>
                </HouseDetailWrapper>
                <UserWrapper>
                  <UserAvatar url={slide.user.avatar} />
                  <UserNamePositionWrapper>
                    <UserName>{slide.user.userName}</UserName>
                    <UserPosition>{slide.user.location}</UserPosition>
                  </UserNamePositionWrapper>
                  <LinkButton href={slide.user.tel}>
                    <Icon name="icon-phone-min" />
                    Contact Now
                  </LinkButton>
                </UserWrapper>
              </div>
              <ImageWrapper
                url={slide.url1}
                onClick={() => handlePhotoClick(index)}
              >
                <AverageImage url={slide.url2} />
                <SmallImageWrapper>
                  <SmallImage url={slide.url3} />
                  <SmallImage url={slide.url4} />
                </SmallImageWrapper>
                <PlayButtonCircle>
                  <Icon name="icon-play-min" width={15} height={21} />
                </PlayButtonCircle>
              </ImageWrapper>
            </MainWrapper>
          </>
        ))}
      </Slider>
      {modalOpen && (
        <Modal onClose={handleModalClose}>
          <InnerSlider currentSlide={slideData[currentIndex]} />
        </Modal>
      )}
    </div>
  );
};
