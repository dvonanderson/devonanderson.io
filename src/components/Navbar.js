import React from "react"
import logo from "assets/my-logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "constants/links"
import { StyledNavbar, NavWrapper, NavInner, NavButton } from "styled/Navbar"

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavWrapper>
        <NavInner>
          <img src={logo} alt="dsa logo" />
          <NavButton>
            <FaAlignRight />
          </NavButton>
        </NavInner>
        <PageLinks />
      </NavWrapper>
    </StyledNavbar>
  )
}

export default Navbar
