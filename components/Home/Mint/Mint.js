// Styled Components
import styled from "styled-components";

// Redux
import { Provider } from "react-redux";
import store from "../../../store/index";

// Components
import MintHeader from "./MintHeader/MintHeader";
import MintInfo from "./MintInfo/MintInfo";
import MintAmount from "./MintAmount/MintAmount";
import MintTotal from "./MintTotal/MintTotal";
import MintButton from "./MintButton/MintButton";

const Mint = () => {
  return (
    <Provider store={store}>
      <Wrapper>
        <img
          src="https://cdn.discordapp.com/attachments/902597979960123412/907009495203446784/Light_Red_White_Black_Active_Dynamic_YouTube_Channel_Art.png"
          alt=""
          className="background"
        />

        <div className="mint">
          <MintHeader />
          <MintInfo />
          <MintAmount />
          <MintTotal />
          <MintButton />
        </div>
      </Wrapper>
    </Provider>
  );
};

export default Mint;

const Wrapper = styled.div`
  padding: 40px 0;
  height: min-content;
  z-index: 1000;

  margin-top: 50px;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  .mint {
    display: flex;
    flex-direction: column;
    gap: 40px;

    width: 550px;
    @media only screen and (max-width: 575px) {
      width: 95%;
    }

    border: 5px solid #e62e09;
    border-radius: 10px;

    background: linear-gradient(111.34deg, #050405, #1d1412);

    padding: 50px 0;

    position: relative;
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;
