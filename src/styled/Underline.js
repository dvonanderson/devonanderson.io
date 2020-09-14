import React from 'react'
import styled, { css } from 'styled-components'

const Underline = styled.div`
  width: 5rem;
  height: 0.25rem;
  margin-bottom: 1.25rem;
  background: ${props => props.theme.primary5};
  margin-left: auto;
  margin-right: auto;

  ${props =>
    props.aboutUnderline && css`
      margin-left: 0;
      margin-right: 0;
    `
  }

  ${props =>
    props.heroUnderline && css`
      margin-bottom: 0.5rem;
      margin-left: 0px;
    `
  }

  ${props =>
    props.serviceUnderline && css`
      width: 3rem;
      height: 0.12rem;
      -webkit-transition: ${props => props.theme.transition};
      transition: ${props => props.theme.transition};

      & :hover {
        background: ${props => props.theme.primary9};
      }
    `
  }
`
export default ({ aboutUnderline, heroUnderline, serviceUnderline}) => {
  return  (
    <Underline
      aboutUnderline={aboutUnderline}
      heroUnderline={heroUnderline}
      serviceUnderline={serviceUnderline}
    />
  )
}
