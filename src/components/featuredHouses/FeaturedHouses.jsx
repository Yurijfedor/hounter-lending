import { useState, useRef } from "react";
import { Filter } from "../filter/Filter";
import { SectionTitle } from "../sectionTitle/SectionTitle";
import { SliderComponent } from "../sliders/fehaturedSlider/Slider";
import { SliderButtons } from "../sliders/fehaturedSlider/SliderButtons";
import { featuredSlidesData } from "../../data/featuredSlides";
import { FeaturedSectionWrapp } from "./FeaturedHouses.styled";
import { SectionStyled } from "../section/Section.styled";

export const FeaturedHouses = () => {
  const sliderRef = useRef(null);
  const [sliderIndex, setSliderIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState(null);

  const handleFilterClick = (event) => {
    setActiveFilter((prev) =>
      prev !== event.currentTarget.textContent
        ? event.currentTarget.textContent
        : null
    );
  };

  const handlePrevClick = function () {
    console.log("i am a click");
    sliderRef.current.slickPrev();
    setSliderIndex(sliderIndex - 1);
  };

  const handleNextClick = function () {
    sliderRef.current.slickNext();
    setSliderIndex(sliderIndex + 1);
  };
  return (
    <SectionStyled style={{ paddingLeft: "40px" }}>
      <FeaturedSectionWrapp>
        <SectionTitle title="Featured House" subTitle="Our Recommendation" />
        <Filter handleFilterClick={handleFilterClick} />
        <SliderButtons
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
        />
      </FeaturedSectionWrapp>
      <SliderComponent
        slideData={
          activeFilter
            ? featuredSlidesData.filter((slide) => slide.type === activeFilter)
            : featuredSlidesData
        }
        sliderRef={sliderRef}
      />
    </SectionStyled>
  );
};
