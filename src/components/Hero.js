
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "constants/socialLinks"
import {
  HeroHeader,
  HeroContainer,
  Article,
  HeroUnderline,
  H4,
  StyledImage } from "styled/Hero"

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

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    }
  } = useStaticQuery(query)

  return (
    <HeroHeader>
      <HeroContainer>
        <Article>
          <div>
            <HeroUnderline />
            <h1>Hi, I'm Devon</h1>
            <H4>Fullstack Developer</H4>
            <SocialLinks />
          </div>
        </Article>
        <StyledImage fluid={fluid} alt="image of devon"/>
      </HeroContainer>
    </HeroHeader>
  )
}

export default Hero
