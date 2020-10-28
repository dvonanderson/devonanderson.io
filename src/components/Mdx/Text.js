import React from 'react'
import styled from 'styled-components'

const StrongText = styled.span`
  font-weight: bold;
  color: ${props => props.theme.primary5};
`

const EmText = styled.span`
  font-style: oblique;
  color: ${props => props.theme.primary6};
`

const StyledLink = styled.a`
  & :hover {
    color: ${props => props.theme.primary5};
    box-shadow: 0px 2px ${props => props.theme.primary5};
  }
`

const Strong = ({ children }) => <StrongText>{children}</StrongText>
const Em = ({ children }) => <EmText>{children}</EmText>
const MdxLink = ({ children }) => <StyledLink>{children}</StyledLink>

export { Strong, Em, MdxLink }
