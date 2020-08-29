import React from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import GlobalStyles from "../globalStyles";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      {children}
    </>
  )
}

export default Layout
