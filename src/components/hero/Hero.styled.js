import styled from "styled-components";
import hero from "../../assets/images/hero.jpg";

export const HeroSection = styled.section`
  display: flex;
  padding-top: 96px;
`;

export const LeftContentWrapp = styled.div`
  width: 500;
`;

export const HeroTitle = styled.h1`
  width: 420px;
  font-weight: 600;
  font-size: 40px;
  line-height: 1.25;
  text-transform: capitalize;
  -webkit-text-stroke: 1px #1b1c57;
  color: #1b1c57;
`;

export const HeroTitleSpan = styled.span`
  font-family: sans-serif;
  color: transparent;
`;

export const HeroTitleDetail = styled.p`
  width: 500px;
  margin-top: 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.75;
  color: #626687;
  opacity: 0.75;
`;

export const BackgroundImageWrapp = styled.div`
  position: relative;
  width: 100%;
  height: 720px;
  margin-right: -120px;
  margin-top: -183px;
  background-image: url(${hero});
  background-repeat: no-repeat;
  background-position: right center;
`;
