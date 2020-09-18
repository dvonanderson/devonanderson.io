import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "constants/socialLinks"
import styled from 'styled-components'
import { device } from "themes/mediaQueries"
import { SectionCenter } from 'styled/Section'
import Underline from "styled/Underline"
import Image from "gatsby-image"

const HeroHeader = styled.header`
  margin-top: -5rem;
  padding-top: 5rem;
  height: 100vh;
  /* background: var(--clr-primary-10); */
  position: relative;

  @media ${device.laptop} {
    & :before {
      content: "";
      position: absolute;
      top: 0;
      left: 65%;
      right: 0;
      bottom: 0;
      background: ${props => props.theme.white};
    }
  }
`

const HeroSection = styled(SectionCenter)`
  height: 70%;
  display: grid;
  align-items: center;

  @media ${device.laptop} {
     grid-template-columns: repeat(12, 1fr);
  }
`

const Article = styled.article`
  @media ${device.laptop} {
    grid-row: 1 / 1;
    grid-column: 1 / span 8;
  }

  //? may not need this
  /* @media ${device.laptop} {
    grid-column: 1 / span 8;
  } */

`

const H4 = styled.h4`
  color: ${props => props.theme.primary5};

  @media ${device.laptop} {
    font-size: 0.85rem;
  }

  @media ${device.desktop} {
    font-size: 1rem;
    line-height: 1;
  }
 `

 const StyledImage = styled(Image)`
  display: none;

  @media ${device.laptop} {
    display: block;
    grid-row: 1/1;
    grid-column: 7/-1;
  }
 `

const query = graphql`
  {
    file(relativePath: {eq: "dsa-headshot-hero.png"}) {
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
      <HeroSection>
        <Article>
          <div>
            <Underline heroUnderline="true"/>
            <h1>Hello, I'm Devon</h1>
            <H4>Fullstack Developer</H4>
            <SocialLinks />
          </div>
        </Article>
        <StyledImage fluid={fluid} alt="image of devon"/>
      </HeroSection>
    </HeroHeader>
  )
}

export default Hero
