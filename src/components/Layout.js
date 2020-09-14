import React from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import GlobalStyles from 'themes/globalStyles'
import { ThemeProvider } from "styled-components"
import * as theme from "themes/theme"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar  isOpen={isOpen} toggleSidebar={toggleSidebar}/>
      {children}
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
