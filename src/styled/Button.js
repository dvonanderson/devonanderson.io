import React from 'react'
import styled, { css } from "styled-components"

export const Button = styled.button`
  text-transform: uppercase;
  background: ${props => props.theme.primary5};
  color: ${props => props.theme.primary9};
  padding: 0.375rem 0.75rem;
  letter-spacing: ${props => props.theme.spacing};
  font-weight: 700;
  -webkit-transition: ${props => props.theme.transition};
  transition: ${props => props.theme.transition};
  font-size: 0.875rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: ${props => props.theme.radius};

  & :hover {
    color: ${props => props.theme.primary1};
    background: ${props => props.theme.primary8};
  }

  ${props =>
    props.center && css `
      display: block;
      width: 12rem;
      text-align: center;
      margin: 0 auto;
      margin-top: 3rem;
    `
  }
`
