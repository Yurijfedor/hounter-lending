import { SectionStyled } from "../section/Section.styled";
import { SectionTitle } from "../sectionTitle/SectionTitle";
import { ReviewSlider } from "../sliders/reviewSlider/Slider";

export const Review = () => {
  return (
    <SectionStyled>
      <SectionTitle
        title="What Our User Say About Us"
        subTitle="See Our Review"
        style={{ marginBottom: "40px", textAlign: "center" }}
      />
      <ReviewSlider />
    </SectionStyled>
  );
};
