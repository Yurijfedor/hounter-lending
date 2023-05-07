import styled from "styled-components";

export const MainWrapper = styled.li`
  position: relative;
  display: flex;
  gap: 16.5vw;
  margin-top: 170px;
`;

export const HouseDetailTitle = styled.h4`
  margin-top: 16px;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.75;
  color: #1b1c57;
  opacity: 0.75;
`;

export const HouseDetailWrapper = styled.div`
  position: relative;
  margin-top: 22px;
  display: flex;
  gap: 53px;
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    left: 0;
    bottom: -32px;
    height: 1px;
    background-color: #f0f3fd;
  }
`;

export const HouseDetailColumn = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const HouseDetailValue = styled.p`
  width: 194px;
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 16px;
  line-height: 1.25;
  text-transform: capitalize;
  color: #3c4563;
`;

export const UserWrapper = styled.div`
  margin-top: 66px;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const UserAvatar = styled.div`
  margin-right: 24px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-image: ${({ url }) => `url(${url})`};
  background-repeat: no-repeat;
  background-position: center;
`;

export const UserNamePositionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const UserName = styled.p`
  font-size: 18px;
  line-height: 1.33;
  color: #0e1735;
`;

export const UserPosition = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #888b97;
`;

export const LinkButton = styled.a`
  display: flex;
  align-items: center;
  padding: 13px 16px;
  gap: 16px;
  margin-left: 57px;
  background-color: #10b981;

  border-radius: 32px;

  font-size: 14px;
  font-weight: 600;
  line-height: 1.57;
  color: #ffffff;
  text-decoration: none;

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
export const ImageWrapper = styled.div`
  position: relative;
  margin-bottom: 43px;
  top: -170px;
  width: 488px;
  height: 416px;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)
    ),
    ${({ url }) => `url(${url})`};
  background-size: cover;
  border-radius: 4px;
  z-index: 10;
`;

export const SmallImageWrapper = styled.div`
  position: absolute;
  bottom: -43px;
  right: 20px;
  display: flex;
  gap: 8px;
`;

export const AverageImage = styled.div`
  position: absolute;
  width: 296px;
  height: 168px;
  left: -40px;
  bottom: -43px;
  background-image: ${({ url }) => `url(${url})`};
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4px;
`;

export const SmallImage = styled.div`
  width: 96px;
  height: 80px;
  background-image: ${({ url }) => `url(${url})`};
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4px;
`;

export const PlayButtonCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(2.5px);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
  }
`;
