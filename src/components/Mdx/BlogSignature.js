import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

const query = graphql`
  {
    signature: file(relativePath: { eq: "blog-signature.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const StyledImage = styled(Image)`
  max-width: 200px;
  max-height: 400px;
`

const BlogSignature = () => {
  const data = useStaticQuery(query)
  const {
    signature: {
      childImageSharp: { fluid },
    },
  } = data

  return <StyledImage fluid={fluid} />
}

export default BlogSignature
