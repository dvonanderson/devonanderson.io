import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import { Button } from "../styled/Button"
import SEO from "../components/SEO"
import styled from "styled-components"


const ErrorMain = styled.main`
  ${props => props.theme.pagesStyling};

  display: grid;
  place-items: center;
  background: ${props => props.primary10};
  text-align: center;


  & h1 {
    text-transform: uppercase;
    color: ${props => props.theme.primary1};
    margin-bottom: 2rem;
  }
`
const Error = () => {
  return (
    <Layout>
      <ErrorMain>
        <div className="error-container">
          <h1>oops page doesn't exist</h1>
          <Button as={Link} to="/">back to home</Button>
        </div>
      </ErrorMain>
    </Layout>
  )
}

export default Error
