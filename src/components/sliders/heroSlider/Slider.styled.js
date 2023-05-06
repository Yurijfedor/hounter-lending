import styled from "styled-components";

export const SliderContainer = styled.div`
  position: absolute;
  bottom: 5%;
  right: 0;
`;

export const SliderWrapp = styled.div`
  display: flex !important;
  gap: 16px;
  flex-direction: row;
  align-items: center;
  padding: 24px;
  background: #ffffff;
  box-shadow: 0px 11px 48px rgba(51, 51, 51, 0.06);
  border-radius: 32px;
`;

export const SlideTextWrapp = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SlideTitle = styled.h3`
  height: 104;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  color: #1b1c57;
`;

export const SlideDescription = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.67;
  color: #68799f;
`;

export const RatingWrapp = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`;

export const RatingText = styled.p`
  font-size: 12px;
  line-height: 1.67;
  color: #1b1c57;
`;
