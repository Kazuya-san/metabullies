// Styled Components
import styled from "styled-components";

const RoadmapItem = (props) => {
  return (
    <Wrapper align={props.align}>
      <div className="img">
        <img src={props.img} alt="" />
        <div className="line"></div>
      </div>

      <div className="content">
        <p className="title">{props.title}</p>
        <p className="info">{props.info}</p>
      </div>
    </Wrapper>
  );
};

export default RoadmapItem;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 150px;
  @media only screen and (max-width: 580px) {
    width: 100%;
    justify-content: space-between;
    gap: 0;
  }
  text-align: left;
  //
  transform: ${(props) => (props.align === "left" ? "" : " scaleX(-1);")};
  @media only screen and (max-width: 810px) {
    transform: ${(props) => (props.align === "left" ? "" : " scaleX(1);")};
    transform: translateX(-62.5px);
  }
  @media only screen and (max-width: 580px) {
    transform: translateX(0);
  }
  //
  .content {
    color: #fff;
    width: 350px;
    //
    @media only screen and (max-width: 810px) {
      width: 400px;
    }
    @media only screen and (max-width: 580px) {
      width: 350px;
    }
    @media only screen and (max-width: 540px) {
      padding-left: 0px;
      width: 325px;
    }
    @media only screen and (max-width: 510px) {
      padding-left: 0px;
      width: 300px;
    }
    @media only screen and (max-width: 480px) {
      padding-left: 20px;
      width: 100%;
    }
    //
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    position: relative;
    //
    transform: ${(props) => (props.align === "left" ? "" : " scaleX(-1);")};
    @media only screen and (max-width: 810px) {
      transform: ${(props) => (props.align === "left" ? "" : "scaleX(1);")};
    }
    //
    .title {
      font-size: 1.5rem;
      text-align: left;
      width: 100%;
      font-weight: 500;
    }
    .info {
      font-size: 1.1rem;
      font-weight: 200;
    }
  }
  .img {
    display: flex;
    align-items: center;
    //
    transform: ${(props) =>
      props.align === "left" ? "translateX(125px)" : "translateX(125px)"};
    @media only screen and (max-width: 580px) {
      transform: ${(props) =>
        props.align === "left" ? "translateX(0px)" : "translateX(0px)"};
    }
    //
    img {
      border-radius: 50%;
      height: 100%;
      //
      width: 150px;
      @media only screen and (max-width: 810px) {
        width: 75px;
      }
      //
    }
    .line {
      //
      width: 100px;
      @media only screen and (max-width: 810px) {
        width: 30px;
      }
      //
      height: 5px;
      border-radius: 20px;
      background: #242922;
      position: relative;
      &::after {
        content: "";
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 4px solid #fff;
        background-color: #e62e09;
        position: absolute;
        right: 0;
        transform: translateX(50%) translateY(-40%);
      }
    }
  }
`;
