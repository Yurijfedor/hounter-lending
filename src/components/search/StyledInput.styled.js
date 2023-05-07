import styled from "styled-components";

const getSubscribeStyles = (placeholder) => {
  if (placeholder === "Your email here") {
    return `
      box-shadow: 0px 9px 32px rgba(89, 92, 219, 0.05);
    `;
  } else {
    return `
      border: 1px solid #e0e3eb;
    `;
  }
};

export const SearchWrapp = styled.div`
  display: flex;
  margin-top: 32px;
  width: 496px;
  align-items: center;
  justify-content: flex-end;
  border-radius: 32px;
  padding: 4px 4px 4px 27px;
  background-color: #fff;
  ${({ placeholder }) => getSubscribeStyles(placeholder)}
`;
