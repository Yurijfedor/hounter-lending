import { Logo } from "../logo/Logo";
import { Icon } from "../icon/Icon";
import {
  FooterLeftWrapp,
  SocialWrapp,
  StyledText,
  FooterStyled,
  FooterRightWrapp,
  PropertyTitle,
  PropertyWrapp,
  PropertyItem,
} from "./Footer.styled";

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
  const arrOfTitles = ["property", "article", "contact"];

  return (
    <FooterStyled>
      <FooterLeftWrapp>
        <Logo style={{ marginBottom: "24px" }} />
        <StyledText style={{ width: "323px" }}>
          We provide information about properties such as houses, villas and
          apartments to help people find their dream home
        </StyledText>
        <SocialWrapp>
          <Icon name="icon-facebook-min" />
          <Icon name="icon-twitter-min" />
          <Icon name="icon-instagram-min" />
        </SocialWrapp>
      </FooterLeftWrapp>
      <FooterRightWrapp>
        {arrOfTitles.map((title) => (
          <li key={title}>
            <PropertyWrapp>
              <PropertyTitle>{title}</PropertyTitle>
              {title === "property"
                ? property.map((text) => (
                    <PropertyItem key={text}>
                      <StyledText>{text}</StyledText>
                    </PropertyItem>
                  ))
                : title === "article"
                ? article.map((text) => (
                    <PropertyItem key={text}>
                      <StyledText>{text}</StyledText>
                    </PropertyItem>
                  ))
                : title === "contact"
                ? contact.map((text) => (
                    <PropertyItem key={text}>
                      <StyledText>{text}</StyledText>
                    </PropertyItem>
                  ))
                : null}
            </PropertyWrapp>
          </li>
        ))}
      </FooterRightWrapp>
    </FooterStyled>
  );
};
