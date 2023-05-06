import { FilterButtonStyled, ButtonIcon } from "./FilterButton.styled";

export const FilterButton = ({ text, icon, onClick }) => {
  return (
    <FilterButtonStyled onClick={onClick}>
      <ButtonIcon>{icon}</ButtonIcon>
      {text}
    </FilterButtonStyled>
  );
};
