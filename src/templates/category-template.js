import React from 'react'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'
import StyledBackgroundSection from '../components/BlogHero'

export const query = graphql`
  query GetCategories($category: String) {
    categories: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      nodes {
        excerpt
        frontmatter {
          title
          author
          category
          date(formatString: "MMMM, Do, YYYY")
          slug
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields {
          readingTime {
            text
          }
        }
      }
    }
  }
`
const CategoryTemplate = props => {
  const {
    data: {
      categories: { nodes: posts },
    },
  } = props
  const {
    pageContext: { category },
  } = props
  return (
    <>
      <StyledBackgroundSection />
      <Posts posts={posts} title={`category / ${category}`} />
    </>
  )
}

export default CategoryTemplate
