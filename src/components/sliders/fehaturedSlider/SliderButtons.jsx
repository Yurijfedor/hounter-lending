import { Icon } from "../../icon/Icon";
import { StyledButtonsWrapp, SliderButton } from "./SliderButtons.styled";

export const SliderButtons = ({ handlePrevClick, handleNextClick }) => {
  return (
    <StyledButtonsWrapp>
      <SliderButton onClick={handlePrevClick}>
        <Icon name="icon-arrow-left-min" />
      </SliderButton>
      <SliderButton onClick={handleNextClick}>
        <Icon name="icon-arrow-right-min" />
      </SliderButton>
    </StyledButtonsWrapp>
  );
};
