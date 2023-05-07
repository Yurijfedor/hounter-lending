import { StyledButton, ButtonIcon } from "./SubmitButton.styled";

export const Button = ({ text, icon, onClick }) => {
  return (
    <StyledButton type="submit" onClick={onClick}>
      <span>{text}</span>
      {icon && <ButtonIcon>{icon}</ButtonIcon>}
    </StyledButton>
  );
};
