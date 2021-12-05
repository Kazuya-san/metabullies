// React
import { Fragment } from "react";
import ReactDOM from "react-dom";

// Styled Components
import styled from "styled-components";

// Framer Motion
import { motion } from "framer-motion";

// Framer Motion Variables
const wrapperVariants = {
  hidden: { x: "100%" },
  visible: { x: "0%" },
};

const NavLinksMobile = (props) => {
  const mobileMenuHandler = () => {
    props.mobileMenuHandler();
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Fragment>
          <Wrapper
            variants={wrapperVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.125 }}
          >
            <ul>
              <li>
                <a href="#home" onClick={mobileMenuHandler}>
                  HOME
                </a>
              </li>
              <li>
                <a href="#mint" onClick={mobileMenuHandler}>
                  MINT
                </a>
              </li>
              <li>
                <a href="#roadmap" onClick={mobileMenuHandler}>
                  ROADMAP
                </a>
              </li>
              <li>
                <a href="#faq" onClick={mobileMenuHandler}>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#tokenomics" onClick={mobileMenuHandler}>
                  TOKENOMICS
                </a>
              </li>
            </ul>
          </Wrapper>
        </Fragment>,
        document.getElementById("overlay")
      )}
    </Fragment>
  );
};

export default NavLinksMobile;

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100%;
  background: linear-gradient(111.34deg, #050405, #1d1412);
  text-align: center;
  z-index: 1000;

  position: fixed;
  left: 0;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    height: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
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
`;
