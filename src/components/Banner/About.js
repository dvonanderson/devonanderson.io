import React from 'react'
import BannerSocalLinks from '../../constants/socialLinks'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import Title from './Title'
import styled from 'styled-components'

const AboutWrapper = styled.div`
  text-align: center;

  & p {
    color: ${props => props.theme.grey5};
  }

  & img {
    border-radius: 50%;
  }
`

const query = graphql`
  {
    person: file(relativePath: { eq: "dsa_headshot_about.png" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const About = () => {
  const data = useStaticQuery(query)

  return (
    <AboutWrapper>
      <Title title="about me" />
      <Image fixed={data.person.childImageSharp.fixed} />
      <p>I am devon</p>
      <BannerSocalLinks banner />
    </AboutWrapper>
  )
}

export default About
