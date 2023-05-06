import { Title, SubTitle, AddInfoStyled } from "./SectionTitle.styled";

export const SectionTitle = ({ title, subTitle, addInfo, style }) => {
  return (
    // <div style={{ ...style, display: "flex", flexDirection: "column" }}>
    <div style={{ ...style, width: "50%" }}>
      <SubTitle>{subTitle}</SubTitle>
      <Title>{title}</Title>
      <AddInfoStyled>{addInfo}</AddInfoStyled>
    </div>
  );
};
