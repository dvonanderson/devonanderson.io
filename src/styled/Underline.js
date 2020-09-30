import React from 'react'
import styled from 'styled-components'

const UnderlineWrapper = styled.div`
  .underline {
    width: 5rem;
    height: 0.25rem;
    margin-bottom: 1.25rem;
    background: ${props => props.theme.primary5};
    margin-left: auto;
    margin-right: auto;
  }
`

export default () => {
  return (
    <UnderlineWrapper>
      <div className="underline"></div>
    </UnderlineWrapper>
  )
}
