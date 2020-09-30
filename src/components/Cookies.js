import React from 'react'
import CookieConsent, { Cookies } from 'react-cookie-consent'
import styled from 'styled-components'

const CookieWrapper = styled.div`
  .containerClass {
    background: #222;
    color: white;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    left: 0;
    position: fixed;
    height: 9rem;
    width: 100%;
    z-index: 999;
  }

  .contentClass {
    margin: 15px;
    grid-column: 2 / span 3;
    grid-row: first-line / 2;
  }

  .buttonWrapperClass {
    grid-column: 5 / span 1;
    grid-row: first-line / 2;
    margin: 15px;
    justify-self: center;
  }

  .buttonClass {
    width: 12rem;
    height: 3rem;
    text-transform: uppercase;
    background: #0889e2;
    font-weight: 700;
    letter-spacing: 0.15rem;
    color: hsl(185, 94%, 87%);
    padding: 0.375rem 0.75rem;
    border: 2px solid transparent;
    cursor: pointer;
    font-size: 0.875rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: 0.25rem;
    transition: all 0.3s linear;
    -webkit-transition: all 0.3s linear;

    & :hover {
      color: hsl(184, 91%, 17%);
      background: #0299f6;
      filter: brightness(125%);
    }
  }
`

const Cookie = () => {
  return (
    <CookieWrapper>
      <CookieConsent
        disableStyles={true}
        containerClasses="containerClass"
        contentClasses="contentClass"
        buttonWrapperClasses="buttonWrapperClass"
        buttonClasses="buttonClass"
        onAccept={() => {
          Cookies.set(
            'gatsby-gdpr-google-analytics',
            'gatsby-gdpr-facebook-pixel'
          )
        }}
        debug={true}
        location="bottom"
        buttonText="Got it"
      >
        <h4>Cookie Consent</h4>
        This website uses cookies that help the website function and to help us
        understand how to interact with it. We use These cookies to provide you
        with improved and customized user-experience. To find out more about the
        cookies we use, see our Privacy Policy.
      </CookieConsent>
    </CookieWrapper>
  )
}

export default Cookie
