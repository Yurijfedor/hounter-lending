import styled from "styled-components";
export const SliderContainer = styled.div`
  margin-top: 40px;
`;

export const StyledImg = styled.div`
  position: relative;
  margin-bottom: 137px;
  width: 740px;
  height: 400px;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: bottom;
  border-radius: 8px;
`;

export const ReviewWrapp = styled.div`
  position: absolute;
  width: 612px;
  left: 50%;
  transform: translateX(-50%);
  bottom: -105px;
  padding: 32px;
  background: #ffffff;
  box-shadow: 0px 9px 32px rgba(89, 92, 219, 0.05);
  border-radius: 16px;
`;

export const ReviewTitle = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.25;
  text-transform: capitalize;
  color: #1b1c57;
`;

export const ReviewContent = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.71;
  color: #626687;
  opacity: 0.75;
`;

export const AuthorBlockWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;
export const AuthorInfoWrapp = styled.div`
  display: flex;
  align-items: center;
`;

export const UserAvatar = styled.div`
  margin-right: 24px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-image: ${({ avatar }) => `url(${avatar})`};
  background-repeat: no-repeat;
  background-position: center;
`;

export const UserName = styled.p`
  font-size: 14px;
  line-height: 1.57;
  color: #0e1735;
`;

export const UserPosition = styled.p`
  font-size: 14px;
  line-height: 1.57;
  color: #888b97;
`;

export const UserNamePositionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const RaitingWrapp = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const Raiting = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.4;
  color: #3c4563;
`;
