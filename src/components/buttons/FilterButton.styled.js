import styled from "styled-components";

export const FilterButtonStyled = styled.button`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  gap: 8px;
  border: 1px solid #e0e3eb;
  border-radius: 32px;
  font-size: 18px;
  background-color: #fff;
  color: #888b97;
  transition: all 0.3s ease-in-out;
  svg {
    fill: #888b97;
  }

  &:hover,
  &:focus {
    background-color: #d1fae5;
    color: #10b981;
    svg {
      fill: #10b981;
    }
  }
`;

export const ButtonIcon = styled.span``;

export const TextStyled = styled.span`
  font-size: 18px;
  color: #888b97;
`;
