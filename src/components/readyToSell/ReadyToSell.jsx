import { SectionStyled } from "../section/Section.styled";
import { SectionTitle } from "../sectionTitle/SectionTitle";
import { SliderComponent } from "../sliders/readyToSellSlider/Slider";

export const ReadyToSell = () => {
  return (
    <SectionStyled
      style={{
        paddingLeft: "40px",
        position: "relative",
        height: "460px",
        overflow: "hidden",
      }}
    >
      <SectionTitle
        title="Let’s tour and see our house!"
        subTitle="Ready to Sell!"
        addInfo="Houses recommended by our partners that have been curated to become the home of your dreams!"
        style={{ marginTop: "28px" }}
      />
      <SliderComponent />
    </SectionStyled>
  );
};
