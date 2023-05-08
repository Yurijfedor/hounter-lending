import styled from "styled-components";
import url1 from "../../assets/images/subscribe-bigger-left-min.png";
import url2 from "../../assets/images/subscribe-bigger-right-min.png";
import url3 from "../../assets/images/subscribe-average-left-min.png";
import url4 from "../../assets/images/subscribe-average-right-min.png";
import url5 from "../../assets/images/subscribe-people-min.png";
import url6 from "../../assets/images/featured-poeople-2-min.png";
import url7 from "../../assets/images/featured-poeople-3-min.png";
import url8 from "../../assets/images/featured-poeople-4-min.png";

export const SubscribeWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 312px;
  padding-top: 65px;
  border-radius: 32px;

  background: url(${url1}), url(${url3}), url(${url2}), url(${url4}),
    url(${url5}), url(${url6}), url(${url7}), url(${url8}),
    linear-gradient(
      156deg,
      rgba(179, 174, 249, 0.7820378151260504) 0%,
      rgba(255, 255, 255, 0.7008053221288515) 48%,
      rgba(187, 187, 251, 0.7232142857142857) 100%
    ),
    rgb(179, 174, 249);

  background-position: 3.7% 12.2%, 16.25% 57.05%, 77.5% 14.1%, 91% 63.14%,
    17% 22.76%, 5.58% 55.45%, 90.17% 34.29%, 80.33% 45.83%, 0 0, 0 0;
  background-repeat: no-repeat;
`;
