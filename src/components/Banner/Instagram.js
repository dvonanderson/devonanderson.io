import React from 'react'
import Image from 'gatsby-image'
import Title from './Title'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`
const query = graphql`
  {
    allInstaNode(limit: 6) {
      nodes {
        localFile {
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

const Instagram = () => {
  const data = useStaticQuery(query)
  const {
    allInstaNode: { nodes },
  } = data

  return (
    <article>
      <Title title="instagram" />
      <ImageWrapper>
        {nodes.map((item, index) => {
          const {
            localFile: {
              childImageSharp: { fluid },
            },
          } = item

          return <Image fluid={fluid} key={index} />
        })}
      </ImageWrapper>
    </article>
  )
}

export default Instagram
