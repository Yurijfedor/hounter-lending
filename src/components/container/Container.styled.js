import styled from "styled-components";
import gradientLeftBlueBottom from "../../assets/images/gradient-left-blue-bottom-min.svg";
import gradientLeftBlueTop from "../../assets/images/gradient-left-blue-top-min.svg";
import gradientRightBlueTop from "../../assets/images/gradient-right-blue-top-min.svg";
import gradientRightBlueBottom from "../../assets/images/gradient-right-blue-bottom-min.svg";
import gradientRightPinkTop from "../../assets/images/gradient-right-pink-top-min.svg";
import gradientRightPinkBottom from "../../assets/images/gradient-right-pink-bottom-min.svg";
import hero from "../../assets/images/hero.jpg";

export const Section = styled.section`
  background-image: url(${hero});
  background-repeat: no-repeat;
  background-position: right center;
`;

export const Container = styled.div`
  position: relative;
  max-width: 1440px;
  height: 4590px;
  margin: 0 auto;
  padding: 40px 20px;
  /* background-color: #4be4c9; */
  background-image: url(${hero});
  background-repeat: no-repeat;
  background-position: right center;
  &::before {
    content: "";
    position: absolute;
    top: -162px;
    left: -74px;
    width: 35%;
    height: 450px;
    background: linear-gradient(to left, #fff, #4be4c9);
    filter: blur(200px);
    z-index: -1;
  }
  &::after {
    content: "";
    position: absolute;
    top: -77px;
    left: -273px;
    width: 35%;
    height: 438px;
    background: linear-gradient(to top, #fff, #4be4c9);
    filter: blur(200px);
    z-index: -1;
  }
  background-image: url(${gradientLeftBlueBottom}), url(${gradientLeftBlueTop}),
    url(${gradientRightBlueTop}), url(${gradientRightBlueBottom}),
    url(${gradientRightPinkTop}), url(${gradientRightPinkBottom});
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, no-repeat,
    no-repeat;
  background-position: top 3187px left -20px, top 2930px left -20px,
    bottom -51px right -20px, bottom -116px right 46px, top 1574px right -153px,
    top 1452px right -94px;
  @media (min-width: 1200px) {
    padding: 40px 120px;
  }

  @media (min-width: 1920px) {
    padding: 40px 120px;
  }
`;
