import {
  PartnershipTitle,
  PartnerLogo,
  PartnerList,
} from "./Partnership.styled";
import traveloka from "../../assets/images/traveloka_logo.png";
import trip from "../../assets/images/trip_logo.png";
import ticket from "../../assets/images/ticket_logo.png";
import airBnb from "../../assets/images/airbnb_logo.png";

export const Partnership = () => {
  const partnerLogoSArr = [traveloka, ticket, airBnb, trip];
  return (
    <>
      <PartnershipTitle>Our Partnership</PartnershipTitle>
      <PartnerList>
        {partnerLogoSArr.map((partnerLogo, index) => (
          <li>
            <PartnerLogo key={index} src={partnerLogo} alt="Partner Logo" />
          </li>
        ))}
      </PartnerList>
    </>
  );
};
