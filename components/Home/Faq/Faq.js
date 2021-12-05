// React
import { Fragment } from "react";

// Styled Components
import styled from "styled-components";

// Components
import FaqItem from "./FaqItem/FaqItem";

const Faq = () => {
  return (
    <Fragment>
      <div id="faq"></div>
      <Wrapper>
        <p className="header">Faq</p>
        <FaqItem
          title={"When is the launch?"}
          info={`White listed Pre sale: November 26, 12pm est
Public sale: November 28, 12 pm est`}
          pre={true}
        />
        <FaqItem
          title={"What is the total supply?"}
          info={`Pre-sale: 1000 mints total
Public sale: 8750 mints total
Giveaways, staff: 250  mints total
A total of 10,000 unique META BULLIES 
will be created.`}
          pre={true}
        />
        <FaqItem
          title={"What network will this be launched on?"}
          info={`Ethereum (Erc721)`}
        />
        <FaqItem
          title={"How much does it cost to mint an NFT?"}
          info={`.05 Eth + Gas
          `}
        />
        <FaqItem title={"Where can I mint?"} info={`metabullies.com`} />
        <FaqItem
          title={"How many can I mint during the sale?"}
          info={`10.
          `}
        />
        <FaqItem
          title={"Will this be on opensea?"}
          info={`Yes, immediately after launch.`}
        />
        <FaqItem
          title={"When will we be able to see rarity and where?"}
          info={`Post- launch, traits will be revealed. Once all are minted, percentages on OpenSea will be accurate.`}
        />
        <FaqItem
          title={"Can I use metamask for this?"}
          info={`Yes, we recommend only using metamask.
          `}
        />
        <FaqItem
          title={"META BULLLIES WHTIE PAPER?"}
          info={`https://linktr.ee/metabullies
          `}
        />
      </Wrapper>
    </Fragment>
  );
};

export default Faq;

const Wrapper = styled.div`
  width: 100%;
  height: max-content;

  padding: 0 25px;
  padding-top: 100px;

  color: #fff;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  .header {
    font-size: 2.25rem;
    padding-bottom: 30px;
  }
`;
