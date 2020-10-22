import React from 'react'
import styled, { css } from 'styled-components'

const StackSpan = styled.span`
  display: inline-block;
  background: ${props => props.theme.grey9};
  color: ${props => props.theme.grey5};
  margin-right: 0.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: ${props => props.theme.radius};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.75rem;
  margin-bottom: 0.25rem;

  ${props =>
    props.aboutStack &&
    css`
      margin-top: 0.5rem;
    `}
`

export default ({ aboutStack, children }) => {
  return <StackSpan aboutStack={aboutStack}>{children}</StackSpan>
}
