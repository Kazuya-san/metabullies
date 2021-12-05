// Styled Components
import styled from "styled-components";

// Material UI
import Button from "@mui/material/Button";

// Components
import WelcomeBackground from "./WelcomeBackground/WelcomeBackground";

const Welcome = () => {
  return (
    <div className="welcome">
      <WelcomeBackground />
      <h1 className="header">WELCOME TO THE META BULLIES</h1>
      <p className="info">
        The META BULLIES are an NFT collection of 10000 uniquely generated
        ERC-721 bitmap BULLIES. The GENESIS - Minting Old Bully Bloodlines onto
        the Blockchain.
      </p>
      <Button className="button" variant="contained">
        <a href="" target="_blank" rel="noreferrer">
          VIEW ON OPENSEA
        </a>
      </Button>
      <div className="player">
        <iframe
          height="300"
          src="https://www.youtube.com/embed/VWPfzvYzJog"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Welcome;

// const Wrapper = styled.div``;
