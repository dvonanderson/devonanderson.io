import React from 'react'
import styled from 'styled-components'
import { Underline } from '../Styled-Components'

const FirstHeadingTwo = styled.div`
  margin: 2rem 0;
  text-align: center;

  .underline {
    width: 5rem;
    height: 5px;
    background: ${props => props.theme.primary5};
  }
`

const SecondHeadingTwo = styled.div`
  margin: 2rem 0;
  color: ${props => props.theme.primary5};
`
const myH2 = ({ children, title }) => {
  if (title) {
    return (
      <FirstHeadingTwo>
        <h2>{children}</h2>
        <Underline />
      </FirstHeadingTwo>
    )
  }

  return (
    <SecondHeadingTwo>
      <h2>{children}</h2>
    </SecondHeadingTwo>
  )
}

const HeadingFour = styled.div`
  margin: 2rem 0;
  color: ${props => props.theme.primary5};
`
const myH4 = props => {
  return (
    <HeadingFour>
      <h4>{props.children}</h4>
    </HeadingFour>
  )
}

export { myH2, myH4 }
