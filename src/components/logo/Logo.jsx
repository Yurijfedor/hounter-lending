import { LogoContainer, LogoText } from "./Logo.styled";
import { Icon } from "../icon/Icon";
export const Logo = ({ style }) => {
  return (
    <LogoContainer href="/home" style={{ ...style }}>
      <Icon name="icon-logo-min" width="36px" height="36px" />
      <LogoText>Hounter</LogoText>
    </LogoContainer>
  );
};
