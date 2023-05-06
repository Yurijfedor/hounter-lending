import { Logo } from "../logo/Logo";
import { Navigation } from "../nav/Nav";
import { HeaderStyled, NavWrapp } from "./Header.styled";
import { AuthNav } from "../authNav/AuthNav";

export const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <NavWrapp>
        <Navigation />
        <AuthNav text="Sign Up!" />
      </NavWrapp>
    </HeaderStyled>
  );
};
