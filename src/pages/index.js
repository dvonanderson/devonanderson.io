import React from 'react'
import { graphql } from 'gatsby'
import Hero from 'components/Hero'
import Services from 'components/Services'
import Jobs from 'components/Jobs'
import Projects from 'components/Projects'
import SEO from 'components/SEO'
import Posts from 'components/Posts'

export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    allMdx: { nodes: posts },
  } = data

  return (
    <>
      <SEO title="Home" description="devon anderson home page" />
      <Hero />
      <Services title="services" />
      <Jobs />
      <Projects projects={projects} title="featured projects" showLink />
      <Posts posts={posts} title="recent articles" />
    </>
  )
}

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 3) {
      nodes {
        excerpt
        frontmatter {
          author
          category
          date(formatString: "MMM Do, YYYY")
          slug
          title
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

    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        title
        strapiId
        stack: stack_item {
          id
          title
        }
        github
        featured
        description
        url
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
