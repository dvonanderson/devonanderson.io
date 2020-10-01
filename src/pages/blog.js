import React from 'react'
import { graphql } from 'gatsby'
import Posts from 'components/Posts'
import BlogHero from '../components/BlogHero'

const BlogPage = ({ data, location }) => {
  const isBlogPage = location.pathname === '/blog/'

  const {
    allMdx: { nodes: posts },
  } = data

  return (
    <>
      <BlogHero />
      <Posts posts={posts} title="before the peak" isBlogPage={isBlogPage} />
    </>
  )
}

export const query = graphql`
  {
    allMdx {
      nodes {
        excerpt
        frontmatter {
          author
          category
          date(formatString: "MMM Do, YYYY")
          slug
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
        fields {
          readingTime {
            text
          }
        }
      }
    }
  }
`

export default BlogPage
