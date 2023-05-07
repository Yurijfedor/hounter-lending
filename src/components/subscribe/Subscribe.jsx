import { SectionStyled } from "../section/Section.styled";
import { SectionTitle } from "../sectionTitle/SectionTitle";
import { StyledInputComponent } from "../search/StyledInput";
import { SubscribeWrapper } from "./Subscribe.styled";

export const Subscribe = () => {
  return (
    <SectionStyled>
      <SubscribeWrapper>
        <SectionTitle
          title="Subscribe For More Info and update from Hounter"
          style={{ textAlign: "center", width: "460px" }}
        />
        <StyledInputComponent
          iconName="icon-email-min"
          placeholder="Your email here"
          btnText="Subsribe Now"
        />
      </SubscribeWrapper>
    </SectionStyled>
  );
};
