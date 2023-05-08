import { useState } from "react";
import { SectionStyled } from "../section/Section.styled";
import { SectionTitle } from "../sectionTitle/SectionTitle";
import { StyledInputComponent } from "../search/StyledInput";
import { SubscribeWrapper } from "./Subscribe.styled";

export const Subscribe = () => {
  const [inputValue, setInputValue] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleClick = (e) => {
    e.preventDefault();
    if (emailRegex.test(inputValue)) {
      setInputValue("");
    } else {
      alert(`Your email "${inputValue}" is incorrect`);
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <SectionStyled>
      <SubscribeWrapper>
        <SectionTitle
          title="Subscribe For More Info and update from Hounter"
          style={{ textAlign: "center", width: "460px" }}
        />
        <StyledInputComponent
          iconName="icon-email-min"
          placeholder="Your email here"
          btnText="Subsribe Now"
          type="email"
          value={inputValue}
          onClick={handleClick}
          onChange={handleChange}
        />
      </SubscribeWrapper>
    </SectionStyled>
  );
};
