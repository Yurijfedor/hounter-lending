import styled from "styled-components";

export const Title = styled.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: 1.25;
  text-transform: capitalize;
  color: #1b1c57;
`;

const getBeforeStyles = (subTitle) => {
  if (
    subTitle === "See Our Review" ||
    subTitle === "See tips and trick from our partnership"
  ) {
    return `
      left: 49%;
      top: -12px;
    `;
  } else {
    return `
      left: -40px;
      top: 8px;
    `;
  }
};

export const SubTitle = styled.p`
  position: relative;
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 1.3;
  text-transform: capitalize;
  color: #f59e0b;
  &::before {
    position: absolute;
    display: block;
    content: "";
    width: 32px;
    height: 1px;
    ${({ subTitle }) => getBeforeStyles(subTitle)}
    background: #f59e0b;
  }
`;

export const AddInfoStyled = styled.p`
  width: 420px;
  margin-top: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.75;
  color: #626687;
  opacity: 0.75;
`;
