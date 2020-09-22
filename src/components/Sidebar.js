import React from "react"
import SocialLinks from "../constants/socialLinks"
import PageLinks from "../constants/links"
import { FaTimes } from "react-icons/fa"
import styled from "styled-components"
import { device } from "themes/mediaQueries"

const SidebarAside = styled.aside`
  background: ${props => props.theme.grey10};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: grid;
  place-items: center;
  opacity: ${props => props.showsidebar ? '1' : '0'};
  transition: ${props => props.theme.transition};
  transform: ${props => props.showsidebar ? 'translateX(0)' : 'translateX(-100%)'};

  @media ${device.laptop} {
    transform: translateX(-100%);
  }
`

const CloseButton = styled.button`
  position: absolute;
  right: 4.75%;
  top: 2.75%;
  font-size: 2.5rem;
  background: transparent;
  border-color: transparent;
  color: ${props => props.theme.redDark};
  cursor: pointer;

`

const Sidebar = ({isOpen, toggleSidebar,}) => {
  return (
    <SidebarAside showsidebar={isOpen}>
      <CloseButton onClick={toggleSidebar}>
        <FaTimes />
      </CloseButton>
      <div>
        <PageLinks sidebar={isOpen} toggleSidebar={toggleSidebar}/>
        <SocialLinks sidebar={isOpen}/>
      </div>
    </SidebarAside>

  )
}

export default Sidebar
