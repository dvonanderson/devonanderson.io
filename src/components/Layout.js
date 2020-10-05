import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'themes/globalStyles'
import * as theme from 'themes/theme'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'

const Layout = ({ children }) => {
  const [nav, showNav] = React.useState(false)

  const toggleSidebar = () => {
    showNav(!nav)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar nav={nav} toggleSidebar={toggleSidebar} />
      <Sidebar nav={nav} toggleSidebar={toggleSidebar} />
      {children}
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
