import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  @media (max-width: 420px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const NavWrapp = styled.div`
  display: flex;
  gap: 56px;
  @media (max-width: 420px) {
    margin-top: 40px;
    flex-direction: column-reverse;
    align-items: center;
  }
`;
