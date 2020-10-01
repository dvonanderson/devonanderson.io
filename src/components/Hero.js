import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import SocialLinks from 'constants/socialLinks'
import styled from 'styled-components'
import { device } from 'themes/mediaQueries'
import { SectionCenter } from 'styled/Section'
import Underline from 'styled/Underline'
import Image from 'gatsby-image'

const HeroHeader = styled.header`
  margin-top: -5rem;
  padding-top: 5rem;
  height: 100vh;
  /* background: var(--clr-primary-10); */
  position: relative;

  @media ${device.laptop} {
    & :before {
      content: '';
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

  .hero-article {
    text-align: center;

    @media ${device.tabletM} {
      text-align: left;
    }

    @media ${device.laptop} {
      grid-row: 1 / 1;
      grid-column: 1 / span 8;
    }
  }
`
const HeroInfoWrapper = styled.div`
  .underline {
    @media ${device.laptop} {
      margin: 0;
      margin-bottom: 1.25rem;
    }
  }

  & h1 {
    font-size: 2.5rem;
    font-family: Permanent Marker;

    @media ${device.tabletS} {
      font-size: 3rem;
    }

    @media ${device.laptop} {
      font-size: 3.75rem;
    }
  }

  & h4 {
    color: ${props => props.theme.primary5};

    @media ${device.tabletS} {
      font-size: 1rem;
    }

    @media ${device.laptop} {
      font-size: 0.85rem;
    }

    @media ${device.desktop} {
      font-size: 1.75rem;
      line-height: 1;
    }
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
    file(relativePath: { eq: "dsa-headshot-hero.png" }) {
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
    },
  } = useStaticQuery(query)

  return (
    <HeroHeader>
      <HeroSection>
        <article className="hero-article">
          <HeroInfoWrapper>
            <Underline />
            <h1>Hello, I'm Devon</h1>
            <h4>Fullstack Developer</h4>
            <SocialLinks />
          </HeroInfoWrapper>
        </article>
        <StyledImage fluid={fluid} alt="image of devon" />
      </HeroSection>
    </HeroHeader>
  )
}

export default Hero
