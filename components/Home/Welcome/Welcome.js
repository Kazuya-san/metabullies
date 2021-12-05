// Styled Components
import styled from "styled-components";

// Material UI
import Button from "@mui/material/Button";

// Components
import WelcomeBackground from "./WelcomeBackground/WelcomeBackground";

const Welcome = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Welcome;

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 0 25px;
  position: relative;
  height: 700px;
  margin-top: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;

  .header {
    color: #fff;

    @media only screen and (max-width: 655px) {
      width: 350px;
    }
  }

  .info {
    color: #6c757d;
    font-size: 1.25rem;
    line-height: 25px;
  }

  .player {
    margin-bottom: 50px;
  }

  .button {
    background-color: #e62e09;
    width: 300px;
    height: 40px;
    font-size: 1.25rem;
    border-radius: 10px;
    margin-bottom: 50px;

    a {
      color: #fff;
      text-decoration: none;
    }

    &:hover {
      background-color: #e62e09;
    }
  }
`;
