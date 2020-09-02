import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import styled from "styled-components";

const query = graphql`
  {
    file(relativePath: {eq: "dsa_headshot_logo.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Header = styled.header`
  margin-top: -5rem;
  padding-top: 5rem;
  height: 100vh;
  /* background: var(--clr-primary-10); */
  position: relative;

  @media screen and (min-width: 992px) {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 65%;
      right: 0;
      bottom: 0;
      background: var(--clr-white)
    }
  }

`

const CenterContainer = styled.div.attrs(props => ({
  className: "section-center"
}))`
  height: 70%;
  display: grid;
  align-items: center;

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(12, 1fr);
  }
`
const Article = styled.article`
  /* background: var(--clr-primary-10); */
  @media screen and (min-width: 992px) {
    grid-row: 1/1;
    grid-column: 1 / span 8;
  }
  @media screen and(min-width: 1170 px) {
    grid-column: 1 / span 8;
  }
`
const HeroUnderline = styled.div.attrs(props => ({
  className: "underline"
}))`
  margin-bottom: 0.5rem;
  margin-left: 0px;
`
const H4 = styled.h4`
  color: var(--clr-grey-5);

  @media screen and (min-width: 992px) {
    font-size: 0.85rem;
  }

  @media screen and (min-width: 1170px) {
    font-size: 1rem;
    line-height: 1;
  }
`
const StyledImage = styled(Image)`
  display: none;

  @media screen and (min-width: 992px) {
      display: block;
      grid-row: 1/1;
      grid-column: 6/-1;
    }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    }
  } = useStaticQuery(query)

  return (
    <Header>
      <CenterContainer>
        <Article>
          <div>
            <HeroUnderline />
            <h1>Hi, I'm Devon</h1>
            <H4>Fullstack Developer</H4>
            <SocialLinks />
          </div>
        </Article>
        <StyledImage fluid={fluid} alt="image of devon"/>
      </CenterContainer>
    </Header>
  )
}

export default Hero
