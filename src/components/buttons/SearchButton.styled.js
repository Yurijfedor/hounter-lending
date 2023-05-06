import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  padding: 13px 16px;
  gap: 13px;
  background-color: #10b981;

  border-radius: 32px;

  font-size: 16px;
  font-weight: bold;
  color: #ffffff;

  letter-spacing: 1px;
  cursor: pointer;

  border: none;
  outline: none;

  transition: all 0.3s ease-in-out;
  &::first-letter {
    text-transform: uppercase;
  }
  &:hover,
  &:focus {
    background-color: #0e956d;
  }
`;

export const ButtonIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  fill: inherit;
`;
