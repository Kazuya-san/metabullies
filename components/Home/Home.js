// Styled Components
import styled from "styled-components";

// Components
import Nav from "./Nav/Nav";
import Welcome from "./Welcome/Welcome";
import Mint from "./Mint/Mint";
import Roadmap from "./Roadmap/Roadmap";
import Faq from "./Faq/Faq";
import Footer from "./Footer/Footer";
import Tokenomics from "./Tokenomics/Tokenomics";

const Home = () => {
  return (
    <Wrapper>
      <Nav />
      <Welcome />
      <Mint />
      <Roadmap />
      <Faq />
      <Tokenomics />
      <Footer />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div``;
