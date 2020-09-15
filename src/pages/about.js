import React from "react"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import styled from "styled-components"
import { SectionCenter } from "styled/Section"
import AboutStack from "styled/StackSpan"
import { device } from "../themes/mediaQueries"

const AboutSection = styled.section`
  ${props => props.theme.pagesStyling};
  padding: 7rem 0;
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
  margin-bottom: 2rem;
  height: 25rem;

  @media ${device.laptop} {
    grid-column: 1 / span 5;
    margin-bottom: 0;
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
    </AboutSection>
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
