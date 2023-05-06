import styled from "styled-components";

export const StyledButtonsWrapp = styled.div`
  display: flex;
  gap: 16px;
`;

export const SliderButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 22px;
  border-radius: 32px;
  border: none;
  background-color: #e0e3eb;
  transition: all 0.3s ease-in-out;
  svg {
    fill: #3c4563;
  }
  &:hover {
    background-color: #10b981;
    svg {
      fill: #fff;
    }
  }
`;
