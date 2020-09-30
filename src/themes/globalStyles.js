import { createGlobalStyle } from 'styled-components'
import { device } from 'themes/mediaQueries'
import reset from 'styled-reset'

export const GlobalStyles = createGlobalStyle`
 ${reset}

  body {
    font-family: ${props => props.theme.secondary}, sans-serif;
    background: ${props => props.theme.white};
    color: ${props => props.theme.grey1};
    line-height: 1.5;
    font-size: 0.875rem;
    margin-top: 5rem;

    @media ${device.tabletM} {
      font-size: 1rem;
    }
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  h1, h2, h3, h4 {
    ${props => props.theme.headingStyling};

    @media ${device.tabletM} {
      line-height: 1;
    }
  }

  h1 {
    font-size: 3rem;
    @media ${device.tabletM} {
      font-size: 4rem;
    }
  }

  h2 {
    font-size: 2rem;
    @media ${device.tabletM} {
    font-size: 2.5rem;
    }
  }

  h3 {
    font-size: 1.25rem;
    @media ${device.tabletM} {
      font-size: 1.75rem;
    }
  }

  h4 {
    font-size: 0.875rem;
    @media ${device.tabletM} {
      font-size: 1rem;
    }
  }

  p {
    margin-bottom: 1.25rem;
    color: ${props => props.theme.grey3};
  }
`
