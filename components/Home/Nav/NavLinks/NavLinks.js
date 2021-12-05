// Styled Components
import styled from "styled-components";

const NavLinks = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <a href="#home">HOME</a>
        </li>
        <li>
          <a href="#mint">MINT</a>
        </li>
        <li>
          <a href="#roadmap">ROADMAP</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
        <li>
          <a href="#tokenomics">TOKENOMICS</a>
        </li>
      </ul>
    </Wrapper>
  );
};

export default NavLinks;

const Wrapper = styled.div`
  height: 100%;
  ul {
    height: 100%;

    display: flex;
    align-items: center;
    gap: 35px;
    li {
      list-style-type: none;

      a {
        color: rgba(255, 255, 255, 0.55);
        text-decoration: none;
        font-weight: 700;
        letter-spacing: 1.25px;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
          border-color 0.15s ease-in-out;

        font-size: 1.25rem;

        &:hover {
          color: rgba(255, 255, 255, 0.75);
        }
      }
    }
  }

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;
