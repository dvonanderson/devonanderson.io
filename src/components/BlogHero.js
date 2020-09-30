import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        mountain: file(relativePath: { eq: "valley-peak.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.mountain.childImageSharp.fluid

      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <Overlay />
        </BackgroundImage>
      )
    }}
  />
)
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(17, 17, 17);
  background: radial-gradient(
    circle,
    rgba(17, 17, 17, 0.1558998599439776) 0%,
    rgba(17, 17, 17, 1) 100%
  );
`
const StyledBackgroundSection = styled(BackgroundSection)`
  position: relative;
  margin-bottom: 6rem;
  width: 100%;
  height: 40rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export default StyledBackgroundSection
