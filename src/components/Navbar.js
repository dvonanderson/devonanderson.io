import React, { useEffect, useState } from 'react'
import logo from 'assets/my-logo.svg'
import PageLinks from 'constants/links'
import styled, { css } from 'styled-components'
import { device } from 'themes/mediaQueries'

const StyledNavbar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  z-index: 10;
  background: rgba(255, 255, 255, 0.5);

  @media ${device.laptop} {
    background: transparent;

    ${props =>
      props.navbarSticky &&
      css`
        background: ${props => props.theme.white};
        position: fixed;
        box-shadow: ${props => props.theme.lightShadow};
        animation: ${props => props.theme.moveDown} 0.5s ease-in-out;
      `}
  }
`

const NavbarWrapper = styled.div`
  width: 90vw;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;

  @media ${device.tabletS} {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
  }
`

const NavbarInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & img {
    margin-bottom: 0.375rem;
  }
`

const NavbarLinksWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    background-color: ${props => props.theme.white};
    transition: ${props => props.theme.transition};
    left: ${props => (props.open ? '-100%' : '0')};
    padding-top: 10rem;

    .nav-links {
      display: block;

      & li {
        opacity: 0;
        animation: ${props => props.theme.slideLeft} 0.5s ease-in-out 0.3s
          forwards;
        & :nth-of-type(1) {
          animation-delay: 0.75s;
        }
        & :nth-of-type(2) {
          animation-delay: 1s;
        }
        & :nth-of-type(3) {
          animation-delay: 1.25s;
        }
        & :nth-of-type(4) {
          animation-delay: 1.5s;
        }
        & :nth-of-type(5) {
          animation-delay: 1.75s;
        }

        & a {
          display: block;
          text-align: center;
          text-transform: capitalize;
          color: ${props => props.theme.grey5};
          letter-spacing: ${props => props.theme.spacing};
          margin-bottom: 0.5rem;
          font-size: 2rem;
          transition: ${props => props.theme.transition};
          border-radius: ${props => props.theme.radius};

          & :hover {
            background: ${props => props.theme.primary9};
            color: ${props => props.theme.primary5};
          }
        }
      }
    }
  }
`

const Toggle = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    height: 100%;
    padding: 0 10vw;
  }
`

const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? 'rotate(-45deg)' : 'inherit')};
  :hover {
    cursor: pointer;
    background: ${props => props.theme.primary5};
  }

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: '';
    position: absolute;
    transition: ${props => props.theme.transition};
  }

  ::before {
    transform: ${props =>
      props.open ? 'rotate(-90deg) translate(-10px, 0px)' : 'rotate(0deg)'};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? '0' : '1')};
    transform: ${props => (props.open ? 'rotate(90deg) ' : 'rotate(0deg)')};
    top: 10px;
  }
`

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [navbarOpen, setNavbarOpen] = useState(false)

  const closeSideBar = () => {
    setNavbarOpen(!navbarOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled)
      }
    }

    document.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  return (
    <StyledNavbar navbarSticky={scrolled}>
      <NavbarWrapper>
        <NavbarInner>
          <img src={logo} alt="dsa logo" />
          <Toggle navbarOpen={navbarOpen} onClick={closeSideBar}>
            {navbarOpen ? <Hamburger open /> : <Hamburger />}
          </Toggle>
        </NavbarInner>
        {navbarOpen ? (
          <NavbarLinksWrapper>
            <PageLinks
              showSocialLinks
              className={navbarOpen ? 'nav-links' : ''}
              closeSideBar={closeSideBar}
            />
          </NavbarLinksWrapper>
        ) : (
          <NavbarLinksWrapper open>
            <PageLinks />
          </NavbarLinksWrapper>
        )}
      </NavbarWrapper>
    </StyledNavbar>
  )
}

export default Navbar
