// Styled Components
import styled from "styled-components";
import Image from "next/image";

// Material UI
import Button from "@mui/material/Button";

//CSS

const Tokenomics = () => {
  return (
    <div id="tokenomics">
      <h1
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "50px",
          fontSize: "2.5rem",
        }}
      >
        TOKENOMICS
      </h1>
      <div className="section1">
        <div className="section1-content-img">
          <Image src="/img1.png" width={2000} height={2000} />
        </div>
        <div className="section1-content-text">
          <p className="info">
            Bullieum recently discovered in 2020, Bullieum has the highest
            atomic number and atomic mass of all known elements.
            <br />
            <br />
            This pure energy is neither liquid or gas. First discovered by the
            Meta Bullies, it is harvest in the metaverse from the formation of
            fractional blocks and calculated chains. It is Use to breath life,
            feed on, or give energy to most characters. A sacred element, it
            exhibits luminescence and is neon blue in flames when mixed within
            the chain. Metabullies have learned how to stabilized it.
            <br />
            <br />
            Bullieum is used by the Metabullies to trade with other
            allies/creatures/tribes in the Metaverse. Other characters esp Apes
            in the Metaverse have commercialized this elements to expand their
            Meta assets. Could be utilize as barter in the Human World also.
            Radioactive to others, but spiritual to the Meta Bullies.
            <br />
            <br />
            Symbol : XMB
            <br />
            <br />
            Atomic Weight: 300
            <br />
            <br />
            Atomic Number: 120
            <br />
            <br />
            States: Liquid, Gas and Energy
          </p>
        </div>
      </div>

      <div className="section2">
        <div className="section2-content-img">
          <Image src="/img2.png" width={520} height={520} />
        </div>
        <div className="section2-content-text">
          <p className="info">
            <strong>
              {" "}
              XMB - BINANCE SMART CHAIN
              <br />
              <br />
              3% Taxed - To be Taxed
              <br />
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;1 % LIQUIDITY
              <br />
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;2% PASSIVE REWARDS
              <br />
              <br />
              10,000,000,000,000 TOTAL
              <br />
              <br />
              10 Trillion Token Split:
              <br />
              <br />
              10% to team
              <br />
              <br />
              5% marketing
              <br />
              <br />
              10% to Charity/Fund
              <br />
              <br />
            </strong>
            10% to Liquidity Pool
            <br />
            <br />
            15% hold for burn rate
            <br />
            <br />
            50% for public sale
            <br />
            <br />
          </p>
        </div>
      </div>
      <div className="player">
        <iframe
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

export default Tokenomics;
