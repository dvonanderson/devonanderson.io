import React, {
  useEffect,
  useState
} from 'react'
import logo from "assets/my-logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "constants/links"
import styled, {css} from 'styled-components'
import { device } from "themes/mediaQueries";

export const StyledNavbar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  z-index: 200;
  background: rgba(255,255, 255, 0.5) ;

  @media ${device.laptop} {
    background: transparent;

    ${props =>
    props.navbarSticky && css`
      background: ${props => props.theme.white};
      position: fixed;
      box-shadow: ${props => props.theme.lightShadow};
      animation: ${props => props.theme.moveDown} 0.5s ease-in-out;
    `
    }
  }
`
export const NavWrapper = styled.div`
  width: 90vw;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;

  @media ${device.tabletS} {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
  }
`

export const NavInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & img {
    margin-bottom: 0.375rem;
  }
`

export const NavButton = styled.button`
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: ${props => props.theme.primary5};
  cursor: pointer;
  transition: ${props => props.theme.transition};

  & :hover{
    color: ${props => props.theme.primary2};
  }

  @media ${device.tabletS} {
    display: none;
  }

`

const Navbar = ({ toggleSidebar }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {

    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled)
      }
    }

    document.addEventListener('scroll', handleScroll, {passive: true})

    return () => document.removeEventListener('scroll', handleScroll)

  }, [scrolled])

  return (
    <StyledNavbar navbarSticky={scrolled}>
      <NavWrapper>
        <NavInner>
          <img src={logo} alt="dsa logo" />
          <NavButton onClick={toggleSidebar}>
            <FaAlignRight />
          </NavButton>
        </NavInner>
        <PageLinks />
      </NavWrapper>
    </StyledNavbar>
  )
}

export default Navbar
