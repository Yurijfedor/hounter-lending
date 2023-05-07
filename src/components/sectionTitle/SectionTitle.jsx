import { Title, SubTitle, AddInfoStyled } from "./SectionTitle.styled";

export const SectionTitle = ({ title, subTitle, addInfo, style }) => {
  return (
    <div style={{ ...style }}>
      {subTitle && <SubTitle subTitle={subTitle}>{subTitle}</SubTitle>}
      <Title>{title}</Title>
      <AddInfoStyled>{addInfo}</AddInfoStyled>
    </div>
  );
};
