import React from 'react'
import Layout from './src/components/Layout'
import { GlobalStyles } from './src/themes/globalStyles'
import * as theme from "themes/theme"
import  CookieConsent,{ Cookies } from "react-cookie-consent"
import "./root-wrapper.css"
import { ThemeProvider } from 'styled-components'

export const wrapRootElement = ({element}) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <CookieConsent
      disableStyles={true}
      containerClasses="containerClass"
      contentClasses="contentClass"
      buttonWrapperClasses="buttonWrapperClass"
      buttonClasses="buttonClass" 
      onAccept={() => {
        Cookies.set("gatsby-gdpr-google-analytics", "gatsby-gdpr-facebook-pixel")
      }}
      debug={true}
      location="bottom"
      buttonText="Got it"
    >
      <h4>Cookie Consent</h4>
      This website uses cookies that help the website function and to help us understand how to interact with it.  We use These cookies to provide you with improved and customized user-experience.  To find out more about the cookies we use, see our Privacy Policy.
    </CookieConsent>
    <Layout>{element}</Layout>
  </ThemeProvider>
)

