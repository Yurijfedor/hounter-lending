import { Header } from "./components/header/Header";
import { Container } from "./components/container/Container.styled";
import { Hero } from "./components/hero/Hero";
import { FeaturedHouses } from "./components/featuredHouses/FeaturedHouses";
import { ReadyToSell } from "./components/readyToSell/ReadyToSell";
import { Review } from "./components/review/Review";
import { More } from "./components/more/More";

const App = () => {
  return (
    <Container>
      <Header />
      <main>
        <Hero />
        <FeaturedHouses />
        <ReadyToSell />
        <Review />
        <More />
      </main>
    </Container>
  );
};

export default App;
