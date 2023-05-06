import styled from "styled-components";

export const LogoContainer = styled.a`
  display: flex;
  gap: 8px;
  align-items: center;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

export const LogoText = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  text-transform: capitalize;
  color: #1b1c57;
`;
