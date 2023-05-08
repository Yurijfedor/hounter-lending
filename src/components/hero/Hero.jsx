import { Partnership } from "../partnership/Partnership";
import { StyledInputComponent } from "../search/StyledInput";
import { slideData } from "../../data/heroSlides";
import { SliderComponent } from "../sliders/heroSlider/Slider";
import { useState } from "react";

import {
  HeroSection,
  HeroTitle,
  HeroTitleSpan,
  HeroTitleDetail,
  LeftContentWrapp,
  BackgroundImageWrapp,
} from "./Hero.styled";

export const Hero = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const countries = [
    "USA",
    "Canada",
    "England",
    "Ukraine",
    "France",
    "Germany",
  ];

  const handleInputFocus = () => {
    setShowOptions(true); // показуємо список при фокусуванні на інпуті
  };

  const handleOptionClick = (event) => {
    setInputValue(event.target.value);
    setShowOptions(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClearInput = () => {
    setInputValue("");
  };

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
        <div style={{ position: "relative" }}>
          <StyledInputComponent
            iconName="icon-location-min"
            placeholder="Search for the location you want!"
            btnText="Search"
            isIconButton
            value={inputValue}
            onFocus={handleInputFocus}
            onChange={handleInputChange}
            onClick={handleClearInput}
          />
          {showOptions && (
            <select
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                width: "100%",
                padding: "5px",
                border: "1px solid #ccc",
              }}
              value={inputValue} // додано
              onChange={handleOptionClick}
            >
              {countries.map((country, index) => (
                <option key={index} onClick={() => handleOptionClick(country)}>
                  {country}
                </option>
              ))}
            </select>
          )}
        </div>
        <Partnership />
      </LeftContentWrapp>
      <BackgroundImageWrapp>
        <SliderComponent slideData={slideData} />
      </BackgroundImageWrapp>
    </HeroSection>
  );
};
