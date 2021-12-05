// React
import { useState } from "react";

// Styled Components
import styled from "styled-components";

// Material UI
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// Framer Motion
import { AnimatePresence } from "framer-motion";

// Components
import NavLinks from "./NavLinks/NavLinks";
import NavLinksMobile from "./NavLinksMobile/NavLinksMobile";

const Nav = () => {
  const [mobileLinks, setMobileLinks] = useState("");

  const mobileMenuHandler = () => {
    setMobileLinks((prev) => !prev);

    document.body.classList.toggle("disable-scrolling");
  };

  return (
    <Wrapper>
      <img
        src="https://cdn.discordapp.com/attachments/902597979960123412/907121759831097354/PNG.png"
        alt=""
        className="logo"
      />
      {!mobileLinks && (
        <MenuIcon className="mobile-menu" onClick={mobileMenuHandler} />
      )}

      {mobileLinks && (
        <CloseIcon className="mobile-menu" onClick={mobileMenuHandler} />
      )}

      <AnimatePresence exitBeforeEnter>
        {mobileLinks && (
          <NavLinksMobile mobileMenuHandler={mobileMenuHandler} />
        )}
      </AnimatePresence>

      <NavLinks />
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.nav`
  width: 100%;
  height: 77.5px;
  background-color: red;
  padding: 0 25px;
  background: linear-gradient(111.34deg, #050405, #1d1412);

  //
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media only screen and (max-width: 1000px) {
    justify-content: space-between;
  }
  //

  .mobile-menu {
    display: none;
    color: rgba(255, 255, 255, 0.55);
    z-index: 1001;
    cursor: pointer;
    width: 50px;
    height: 40px;

    @media only screen and (max-width: 1000px) {
      display: block;
    }
  }

  .logo {
    width: 125px;
  }
`;
