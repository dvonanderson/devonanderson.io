import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { StaticQuery, graphql } from 'gatsby'

import styled from 'styled-components'
import { device } from '../themes/mediaQueries'

const Hero = ({ className }) => (
  <StaticQuery
    query={graphql`
      {
        hero: file(relativePath: { eq: "before-the-peak.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.hero.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={'#f2f2f2'}
        >
          <div className="overlay">
            <div className="content">
              <h1>before the peak</h1>
              <hr />
              <h3>the mind of a disturbed polyglot</h3>
            </div>
          </div>
        </BackgroundImage>
      )
    }}
  />
)

const BlogHero = styled(Hero)`
  width: 100%;
  height: 30vh;
  margin-bottom: 2rem;
  background-position: center 40%;
  background-repeat: no-repeat;
  background-size: cover;

  .overlay {
    display: -webkit-flex; /* Safari */
    display: flex;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    align-items: center;

    .content {
      width: 90%;
      margin: 0 auto;
      text-align: center;
      color: #fff;

      & hr {
        border: 0;
        height: 1px;
        background-image: linear-gradient(
          to right,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0.75),
          rgba(255, 255, 255, 0)
        );
      }

      & h1 {
        font-size: 2rem;
        font-family: Permanent Marker;
      }
      & h3 {
        font-size: 1rem;
      }
    }
  }

  @media ${device.tabletS} {
    height: 60vh;
    margin-bottom: 6rem;

    .overlay {
      .content {
        max-width: 800px;

        & h1 {
          font-size: 5rem;
        }
      }
    }
  }
`

export default BlogHero
