import styled from "styled-components";

export const SliderContainer = styled.div`
  margin-top: 40px;
  margin-right: -120px;
`;

export const SliderCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 340px;
  background-color: #ffffff;

  /* box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); */
  overflow: hidden;
`;

export const SliderImageWrapper = styled.div`
  position: relative;
  height: 382px;
  border-radius: 24px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
`;

export const Overlay = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 10px;
  bottom: 16px;
  left: 16px;
  padding: 8px 16px;
  border-radius: 32px;
  background-color: ${({ category }) =>
    category === "Popular"
      ? "#FEE2E2"
      : category === "New House"
      ? "#DBEAFE"
      : "#D1FAE5"};
`;

export const OverlaySpan = styled.span`
  font-size: 14px;
  line-height: 18px;
  color: ${({ category }) =>
    category === "Popular"
      ? "#EF4444"
      : category === "New House"
      ? "#1D4ED8"
      : "#047857"};
`;

export const Title = styled.h3`
  margin-top: 24px;
  font-size: 24px;
  line-height: 1.33;
  color: #0e1735;
`;

export const Price = styled.p`
  margin-top: 8px;
  font-size: 20px;
  line-height: 1.6;
  color: #3c4563;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 24px;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const UserName = styled.p`
  font-size: 18px;
  line-height: 1.33;
  color: #0e1735;
`;

export const Location = styled.p`
  font-size: 14px;
  line-height: 1.57;
  color: #888b97;
  margin-top: 4px;
`;
