import React from 'react'
import styled from 'styled-components'

const StyledCode = styled.code`
  background: ${props => props.theme.grey10};
  color: ${props => props.theme.grey5};
  padding: 1rem;
  border-radius: ${props => props.theme.raidus};
`

const Code = ({ children }) => {
  return <StyledCode>{children}</StyledCode>
}

export default Code
