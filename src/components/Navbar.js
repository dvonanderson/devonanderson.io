import React from "react"
import logo from "../assets/my-logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import styled from "styled-components"

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  z-index: 200;
  background: var(--clr-white);

  @media screen and (min-width: 992px) {
    background: transparent;
  }
`

const Inner = styled.div`
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
  }
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &img {
    margin-bottom: 0.375rem;
  }
`
const Button = styled.button`
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: var(--clr-primary-5);
  cursor: pointer;
  transition: var(--transition);

  &:hover{
    color: var(--clr-primary-2);
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`

const Navbar = () => {
  return (
    <Container>
      <Inner>
        <Header>
          <img src={logo} alt="logo"/>
          <Button type="button">
            <FaAlignRight />
          </Button>
        </Header>
        <PageLinks complex/>
      </Inner>
    </Container>
  )
}

export default Navbar
