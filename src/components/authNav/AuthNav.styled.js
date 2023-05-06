import styled from "styled-components";

export const AuthNavStyled = styled.a`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  gap: 10px;

  background: #d1fae5;
  border-radius: 32px;

  font-weight: 600;
  font-size: 14px;
  line-height: 1.6;
  text-transform: capitalize;
  text-decoration: none;

  color: #047857;

  z-index: 2;

  &:hover {
    background-color: #10b981;
    color: green;
    font-weight: 700;
    cursor: pointer;
  }
`;
