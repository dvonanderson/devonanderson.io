import styled, { css } from 'styled-components'
import React from 'react'

import {FiInfo} from 'react-icons/fi'

export const CodeBlock = styled.code`
  background: ${props => props.theme.grey5};
  color: ${props => props.theme.white};
  padding: 1rem 1.5rem;
  border-radius: ${props => props.theme.radius};
  margin: 2rem 0;
  font-size: 1.2rem;
  overflow-x: scroll;
  position: relative;

  & {
    font-family: 'Courier New', 'Courier New', Courier, monospace;
  }

  & toke-line {
    line-height: 1.5;
  }
  `
