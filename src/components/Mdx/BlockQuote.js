import React from 'react'
import { FiInfo } from 'react-icons/fi'
import { TiWarningOutline } from 'react-icons/ti'
import { GoQuote } from 'react-icons/go'
import styled from 'styled-components'
import { device } from '../../themes/mediaQueries'

const BlockQuoteWrapper = styled.blockquote`
  .container {
    padding: 2rem 1.5rem;
    background: ${props => props.theme.grey10};
    border-radius: ${props => props.theme.radius};
    color: ${props => props.theme.grey1};
    border-left: 3px solid ${props => props.theme.grey5};
    position: relative;
    margin: 2rem 0;

    @media ${device.laptop} {
      margin-left: -2rem;
      margin-right: -2rem;
    }
  }

  .icon {
    position: absolute;
    top: 0;
    left: -3px;
    background: ${props => props.theme.white};
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 6px solid ${props => props.theme.white};
  }

  .info {
    background: ${props => props.theme.primary10};
    color: ${props => props.theme.primary1};
    border-color: ${props => props.theme.primary5};

    .icon {
      color: ${props => props.theme.primary5};
    }
  }

  .warning {
    background: #fffaeb;
    color: #513c06;
    border-color: #f7d070;

    .icon {
      color: #f7d070;
    }
  }
  .quote {
    font-style: italic;
    color: ${props => props.theme.grey5};
    line-height: 1.8;
    word-spacing: 3px;
    font-size: 1.2rem;
    margin: 2rem 0;

    @media ${device.mobileM} {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }

    .quote-icon {
      font-size: 6rem;
      color: ${props => props.theme.primary5};
    }
  }
`

const MdxBlockQuote = ({ children, display }) => {
  if (display === 'warning')
    return (
      <BlockQuoteWrapper>
        <div className="container warning">
          <TiWarningOutline className="icon" />
          {children}
        </div>
      </BlockQuoteWrapper>
    )
  if (display === 'info')
    return (
      <BlockQuoteWrapper>
        <div className="container info">
          <FiInfo className="icon" />
          {children}
        </div>
      </BlockQuoteWrapper>
    )
  if (display === 'default') {
    return (
      <BlockQuoteWrapper>
        <div className="container default">{children}</div>
      </BlockQuoteWrapper>
    )
  } else {
    return (
      <BlockQuoteWrapper>
        <div className="quote">
          <GoQuote className="quote-icon" />
          {children}
        </div>
      </BlockQuoteWrapper>
    )
  }
}

export default MdxBlockQuote
