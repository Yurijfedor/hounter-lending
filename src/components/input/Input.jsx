import { InputStyled } from "./Input.styled";

export const Input = ({ placeholder, type, onFocus, value, onChange }) => {
  return (
    <InputStyled
      placeholder={placeholder}
      type={type}
      onFocus={onFocus}
      value={value}
      onChange={onChange}
    />
  );
};
