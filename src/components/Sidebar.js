import React from 'react'
import SocialLinks from '../constants/socialLinks'
import PageLinks from '../constants/links'
import MenuIcon from 'components/MenuIcon'
import styled from 'styled-components'
import { device } from '../themes/mediaQueries'

const StyledSidebar = styled.aside`
  background: ${props => props.theme.grey10};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: grid;
  place-items: center;
  transition: ${props => props.theme.transition};
  opacity: ${({ nav }) => (nav ? '1' : '0')};
  transform: ${({ nav }) => (nav ? 'translateX(0)' : 'translateX(-100%)')};

  @media ${device.tabletS} {
    transform: translateX(-100%);
  }

  .nav-links {
    display: block;

    & li {
      opacity: 0;
      animation: ${props => props.theme.slideRight} 0.5s ease-in-out 0.3s
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
`

const Sidebar = ({ toggleSidebar, nav }) => {
  console.log(nav)
  return (
    <StyledSidebar nav={nav}>
      <MenuIcon toggleSidebar={toggleSidebar} close={nav} />
      <PageLinks closeSidebar={toggleSidebar} />
      <SocialLinks sidebar={nav} />
    </StyledSidebar>
  )
}

export default Sidebar
