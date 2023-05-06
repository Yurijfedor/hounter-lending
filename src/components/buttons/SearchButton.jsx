import { StyledButton, ButtonIcon } from "./SearchButton.styled";

export const Button = ({ text, icon, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <span>{text}</span>
      <ButtonIcon>{icon}</ButtonIcon>
    </StyledButton>
  );
};
