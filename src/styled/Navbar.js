import styled from 'styled-components'
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
  background: ${props => props.theme.white};

  @media ${device.laptop} {
    background: transparent;
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

  &img {
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

  &:hover{
    color: ${props => props.theme.primary2};
  }

  @media ${device.tabletS} {
    display: none;
  }

`

