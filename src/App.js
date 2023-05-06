import { Header } from "./components/header/Header";
import { Container } from "./components/container/Container.styled";
import { Hero } from "./components/hero/Hero";
import { FeaturedHouses } from "./components/featuredHouses/FeaturedHouses";
import { ReadyToSell } from "./components/readyToSell/ReadyToSell";

const App = () => {
  return (
    <Container>
      <Header />
      <main>
        <Hero />
        <FeaturedHouses />
        <ReadyToSell />
      </main>
    </Container>
  );
};

export default App;
