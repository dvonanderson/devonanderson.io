import React from "react"
import { graphql, Link } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import styled from "styled-components"
import { SectionCenter } from "styled/Section"
import AboutStack from "styled/StackSpan"
import { device } from "../themes/mediaQueries"
import SEO from "../components/SEO"
import { Button } from "styled/Button"


const AboutSection = styled.section`
  ${props => props.theme.pagesStyling};
  padding: 1rem 0;

  @media ${device.laptop} {
    padding: 7rem 0;
  }

`

const AboutContainer = styled(SectionCenter)`
  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    column-gap: 4rem;
  }
`

const AboutImage = styled(Image)`
  margin: 0 auto;
  margin-bottom: 2rem;
  width: 15rem;
  height: 20rem;


  @media ${device.laptop} {
    grid-column: 1 / span 4;
    margin-bottom: 0;
    width: 100%;
    height: 25rem;
  }
`

const AboutArticle = styled.article`
  & p {
    line-height: 2;
  }

  @media ${device.laptop} {
    grid-column: 6 / -1;
  }
`

const About = ({ data: { about: {nodes}}}) => {
  const { info, stack, title, image } = nodes[0];

  return (
    <>
      <SEO title="About" description="about devon anderson"/>
      <AboutSection>
        <AboutContainer>
          <AboutImage fluid={image.childImageSharp.fluid} alt="devon headshot" />
          <AboutArticle>
            <Title aboutTitle="true" title={title} aboutUnderline="true"/>
            <p>{info}</p>
            <div>
              {
                stack.map(item => <AboutStack aboutStack="true" key={item.id}>{item.title}</AboutStack>)
              }
            </div>
          </AboutArticle>
        </AboutContainer>
        <Button as={Link} to="/contact" center="true" about="true">
            contact me
          </Button>
      </AboutSection>
    </>

  )
}

export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        title
        stack {
          id
          title
        }
        info
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default About
