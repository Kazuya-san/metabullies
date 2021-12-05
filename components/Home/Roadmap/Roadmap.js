// React
import { Fragment } from "react";

// Styled Components
import styled from "styled-components";

// Components
import RoadmapItem from "./RoadmapItem/RoadmapItem";

const Roadmap = () => {
  return (
    <Fragment>
      <div id="roadmap"></div>
      <Wrapper id="roadmap">
        <p className="header">Road Map</p>

        <div className="line-wrapper">
          <div className="roadmap-line"></div>
        </div>

        <div className="items">
          <RoadmapItem
            align={"left"}
            img={
              "https://cdn.discordapp.com/attachments/902597979960123412/907010531695677440/165.png"
            }
            title={"10%"}
            info={`Build community on Discord, Instagram and Twitter.`}
          />
          <RoadmapItem
            align={"right"}
            img={
              "https://cdn.discordapp.com/attachments/902597979960123412/907010559340339231/166.png"
            }
            title={"20%"}
            info={`Before the public sale, we have already built a training and breeding game demo already, we will leak out a link soon so users can
            see how the gaming system works.`}
          />
          <RoadmapItem
            align={"left"}
            img={
              "https://cdn.discordapp.com/attachments/902597979960123412/907010564373499996/167.png"
            }
            title={"30%"}
            info={`Presale and public sale (Metamask sign in).`}
          />
          <RoadmapItem
            align={"right"}
            img={
              "https://cdn.discordapp.com/attachments/902597979960123412/907010566466457661/164.png"
            }
            title={"40%"}
            info={` Starting January 2022, We will snapshot addresses of Meta Bullies Holders on every 15th and airdrop 1 million utility tokens on the 25th of every month for 36 months.. 
For example if you have 4 metabullies you would recieve 4,000,000 MB erc-20 token credit per month..
            `}
          />
          <RoadmapItem
            align={"left"}
            img={
              "https://cdn.discordapp.com/attachments/902597979960123412/907010587987423302/168.png"
            }
            title={"50%"}
            info={`Set up funds/grants for sponsorship of Bullies shows across the world. 
            Set up MBKC Meta Bullies Kennel Club. `}
          />
          <RoadmapItem
            align={"right"}
            img={
              "https://cdn.discordapp.com/attachments/902597979960123412/907010600322891936/163.png"
            }
            title={"60%"}
            info={`We will integrate a breeding system, where holders of 2+ MB will be able to create offspring using their own bullies. Each party would assigned there Meta Bullies onto a contract 
            and stake it for 3 months to produce in pairs of 2, 4, or 6 bullies`}
          />
          <RoadmapItem
            align={"left"}
            img={
              "https://cdn.discordapp.com/attachments/902597979960123412/907377887043264582/78.png"
            }
            title={"70%"}
            info={`Augmented Reality tech to develop human and metaverse game. To combat poverty and lift obesity. We want to produce a game to keep humans active with their Metabullies. `}
          />
          <RoadmapItem
            align={"right"}
            img={
              "https://cdn.discordapp.com/attachments/902597979960123412/907377963652243537/80.png"
            }
            title={"80%"}
            info={`Holders of 3 Meta Bullies and will receive a customed Kennel name along with some META ASSETS :) .`}
          />
          <RoadmapItem
            align={"left"}
            img={
              "https://cdn.discordapp.com/attachments/902597979960123412/907378040806453328/83.png"
            }
            title={"90%"}
            info={`The Meta Bullies brand will produce Gen 2 of Frenchies and Exotics.`}
          />
          <RoadmapItem
            align={"right"}
            img={
              "https://cdn.discordapp.com/attachments/902597979960123412/907378061991874591/86.png"
            }
            title={"100%"}
            info={`Continue onto the metaverse as the main focuse is to produce an eco system inwhich humans can interact with the metaverse and build an autonomous economy of galactic wealth.`}
          />
        </div>
      </Wrapper>
    </Fragment>
  );
};

export default Roadmap;

const Wrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  color: #fff;
  padding: 0 25px;
  position: relative;
  .header {
    text-align: center;
    font-size: 2.25rem;
    padding-bottom: 50px;
  }
  .line-wrapper {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    z-index: -1;
    //
    @media only screen and (max-width: 810px) {
      width: 500px;
      margin: 0 auto;
    }
    @media only screen and (max-width: 580px) {
      width: 100%;
    }
    //
  }
  .roadmap-line {
    width: 5px;
    border-radius: 20px;
    background-color: #242922;
    //
    height: 2450px;
    @media only screen and (max-width: 810px) {
      height: 2000px;
    }
    @media only screen and (max-width: 580px) {
      height: 2000px;
    }
    @media only screen and (max-width: 510px) {
      height: 2000px;
    }
    @media only screen and (max-width: 450px) {
      height: 2200px;
    }
    @media only screen and (max-width: 380px) {
      height: 2300px;
    }
    //
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    //
    @media only screen and (max-width: 810px) {
      left: 91px;
    }
    @media only screen and (max-width: 580px) {
      left: 130px;
    }
    //
  }
  .items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 100px;
  }
`;
