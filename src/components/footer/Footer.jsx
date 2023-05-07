import { Logo } from "../logo/Logo";
import { Icon } from "../icon/Icon";
import { SectionStyled } from "../section/Section.styled";
import { Wrapperr, SocialWrapp, StyledText } from "./Footer.styled";

export const Footer = () => {
  const property = ["House", "Apartment", "Villa"];
  const article = [
    "New Article",
    "Popular Article",
    "Most Read",
    "Tips & Tricks",
  ];
  const contact = [
    "2464 Royal Ln. Mesa, New Jersey 45463",
    "(671) 555-0110",
    "info@hounter.com",
  ];

  return (
    <SectionStyled>
      <Wrapperr>
        <Logo />
        <StyledText>
          We provide information about properties such as houses, villas and
          apartments to help people find their dream home
        </StyledText>
        <SocialWrapp>
          <Icon name="icon-facebook-min" />
          <Icon name="icon-twitter-min" />
          <Icon name="icon-instagram-min" />
        </SocialWrapp>
      </Wrapperr>
    </SectionStyled>
  );
};
