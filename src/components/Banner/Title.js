import React from 'react'
import styled from 'styled-components'

const TitleWrapper = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 1.25rem;

  & h4 {
    color: ${props =>props.theme.grey3};
    text-transform: uppercase;
    font-weight: 500;
    background: ${props =>props.theme.white};
    display: inline-block;
    margin-bottom: 0;
    padding: 0 0.6rem;
  }
`
const TitleLine = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 1.5px;
  transform: translateY(-50%);
  background: ${props =>props.theme.primary5};;
  z-index: -1;
`

export default ({title}) => {
  return (
    <TitleWrapper>
      <h4>{title}</h4>
      <TitleLine />
    </TitleWrapper>
  )
}
