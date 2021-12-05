// React
import React, { useState } from "react";

// Redux
import { useSelector } from "react-redux";

// Styled Components
import styled from "styled-components";

// Material UI
import Button from "@mui/material/Button";

// Ethers
import { ethers } from "ethers";

// Web3Modal
import Web3Modal from "web3modal";

// Contract
import SmartContract from "../../../../ABI/contract.json";

const SmartContractAddress = "0x6b47A8f507A526C1D106731b7C09940472dCdfEb";

const MintButton = () => {
  const [mintStatusText, setMintStatusText] = useState();

  const amount = useSelector((state) => state.mint.amount);

  const getMintCost = async () => {
    try {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(
        SmartContractAddress,
        SmartContract.abi,
        signer
      );

      const mintCost = await contract.cost();

      return mintCost.toString();
    } catch (error) {}
  };

  const mint = async () => {
    try {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(
        SmartContractAddress,
        SmartContract.abi,
        signer
      );

      const mintCost = await getMintCost();

      await contract.mint(amount, {
        value: (mintCost * amount).toString(),
      });
    } catch (error) {
      if (error.toString().includes("funds")) {
        setMintStatusText("Insufficient funds");
      }

      if (error.toString().includes("whitelist")) {
        setMintStatusText("Not whitelisted");
      }
    }
  };
  return (
    <Wrapper>
      <Button variant="contained" className="button" onClick={mint}>
        MINT
      </Button>

      <p className="mint-status">{mintStatusText}</p>
    </Wrapper>
  );
};

export default MintButton;

const Wrapper = styled.div`
  width: 100%;
  padding: 0 25px;
  .button {
    width: 100%;
    height: 100px;
    font-size: 1.5rem;
    background-color: #e62e09;
    border-radius: 10px;
    height: 60px;
    &:hover {
      background-color: #e62e09;
    }
  }

  .mint-status {
    position: absolute;
    bottom: 10px;
    left: 0px;
    color: #fff;
    text-align: center;
    width: 100%;
    font-size: 1.5rem;
  }
`;
