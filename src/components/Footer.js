import React from 'react'
import SocialLinks from '../constants/socialLinks'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  height: 9rem;
  background: #222;
  text-align: center;
  display: grid;
  place-items: center;

  & h4 {
    margin-top: 0.5rem;
    color: ${props => props.theme.white};
    font-weight: normal;
    text-transform: uppercase;

    & span {
      color: ${props => props.theme.primary5};
    }
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <SocialLinks footer />
      <h4>
        &copy;{new Date().getFullYear()} <span>dsa</span> all rights reserved.
      </h4>
    </StyledFooter>
  )
}

export default Footer
