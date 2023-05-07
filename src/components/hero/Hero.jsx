import { Partnership } from "../partnership/Partnership";
import { StyledInputComponent } from "../search/StyledInput";
import { slideData } from "../../data/heroSlides";
import { SliderComponent } from "../sliders/heroSlider/Slider";

import {
  HeroSection,
  HeroTitle,
  HeroTitleSpan,
  HeroTitleDetail,
  LeftContentWrapp,
  BackgroundImageWrapp,
} from "./Hero.styled";

export const Hero = () => {
  return (
    <HeroSection>
      <LeftContentWrapp>
        <HeroTitle>
          find the place to live <HeroTitleSpan>your dreams</HeroTitleSpan>{" "}
          easily here
        </HeroTitle>
        <HeroTitleDetail>
          Everything you need about finding your place to live will be here,
          where it will be easier for you
        </HeroTitleDetail>
        <StyledInputComponent
          iconName="icon-location-min"
          placeholder="Search for the location you want!"
          btnText="Search"
          isIconButton
        />
        <Partnership />
      </LeftContentWrapp>
      <BackgroundImageWrapp>
        <SliderComponent slideData={slideData} />
      </BackgroundImageWrapp>
    </HeroSection>
  );
};
