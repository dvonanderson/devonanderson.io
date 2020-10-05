import React from 'react'
import styled, { css } from 'styled-components'
import { device } from 'themes/mediaQueries'

const StyledMenuIcon = styled.button`
  margin-right: 1.5rem;
  justify-self: end;
  display: flex;

  :focus {
    outline: 0;
  }

  ${props =>
    props.reg &&
    css`
      @media ${device.tabletS} {
        display: none;
      }
    `}

  flex-direction: column;
  justify-content: space-around;
  width: 2.2rem;
  height: 2.2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 5;

  div {
    width: 2rem;
    height: 0.3rem;
    background: black;
    border-radius: 5px;
    transform-origin: 1px;
    position: relative;
    transition: ${props => props.theme.transition};

    :first-child {
      transform: ${props => (props.close ? 'rotate(45deg)' : 'rotate(0)')};
      transform-origin: ${props => (props.close ? '-2px' : '1px')};
    }

    :nth-child(2) {
      height: 0.5rem;
      background: ${props => props.theme.primary8};
      opacity: ${props => (props.close ? '0' : '1')};
    }

    :nth-child(3) {
      transform: ${props => (props.close ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`

const MenuIcon = ({ reg, toggleSidebar, close }) => {
  return (
    <StyledMenuIcon
      reg={reg}
      close={close}
      type="button"
      onClick={toggleSidebar}
    >
      <div></div>
      <div></div>
      <div></div>
    </StyledMenuIcon>
  )
}

export default MenuIcon
