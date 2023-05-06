import { Partnership } from "../partnership/Partnership";
import { LocationInput } from "../search/Search";
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
        <LocationInput />
        <Partnership />
      </LeftContentWrapp>
      <BackgroundImageWrapp>
        <SliderComponent slideData={slideData} />
      </BackgroundImageWrapp>
    </HeroSection>
  );
};
