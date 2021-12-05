// React
import React, { useState, useEffect } from "react";

// Styled Components
import styled from "styled-components";

// Ethers
import { ethers } from "ethers";

// Contract
import SmartContract from "../../../../ABI/contract.json";

const SmartContractAddress = "0x6b47A8f507A526C1D106731b7C09940472dCdfEb";

const MintInfo = () => {
  const [remaining, setRemaining] = useState("");

  const getRemaining = async () => {
    const provider = new ethers.providers.JsonRpcProvider(
      "https://mainnet.infura.io/v3/514fcd8f04fd4e4393317d056e2a8da2"
    );

    const contract = new ethers.Contract(
      SmartContractAddress,
      SmartContract.abi,
      provider
    );

    const total = await contract.totalSupply();

    setRemaining(total.toString());
  };

  useEffect(() => {
    getRemaining();
  }, []);

  return (
    <Wrapper>
      <div className="content">
        <p className="heading">Price per MetaBullies</p>
        <p className="price">
          <span>0.05</span> ETH Each
        </p>
        <p className="remaining">{remaining} / 10000 minted</p>
      </div>
    </Wrapper>
  );
};

export default MintInfo;

const Wrapper = styled.div`
  width: 100%;
  height: max-content;
  text-align: center;
  padding: 0 25px;
  color: #fff;

  .content {
    background-color: #e62e09;
    border-radius: 10px;
    padding: 12px;
    .heading {
      font-size: 1.5rem;
    }

    .price {
      font-size: 2.25rem;

      span {
        font-weight: 700;
      }
    }

    .remaining {
      font-size: 1.5rem;
    }
  }
`;
