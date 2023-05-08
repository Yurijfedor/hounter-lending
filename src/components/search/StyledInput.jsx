import { SearchWrapp } from "./StyledInput.styled";
import { Icon } from "../icon/Icon";
import { Input } from "../input/Input";
import { Button } from "../buttons/SubmitButton";

export const StyledInputComponent = ({
  iconName,
  placeholder,
  btnText,
  isIconButton,
  type,
  value,
  onFocus,
  onChange,
  onClick,
}) => {
  const icon = (
    <Icon
      name="icon-arrow-right-min"
      stroke="#fff"
      fill="#fff"
      width="7"
      height="14"
    />
  );

  return (
    <SearchWrapp placeholder={placeholder}>
      <Icon name={iconName} />
      <Input
        placeholder={placeholder}
        type={type}
        onFocus={onFocus}
        value={value}
        onChange={onChange}
      />
      <Button
        text={btnText}
        icon={isIconButton ? icon : null}
        onClick={onClick}
      />
    </SearchWrapp>
  );
};
