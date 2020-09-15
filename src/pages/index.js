import React from "react"
import { graphql } from "gatsby"
import Hero from "components/Hero"
import Services from "components/Services"
import Jobs from "components/Jobs"
import Projects from "components/Projects"
import Blogs from "components/Blogs"
import SEO from "../components/SEO"

export default ({data}) => {
  const {
    allStrapiProjects: {nodes:projects},
    allStrapiBlogs: {nodes:blogs}
  } = data

  return (
    <>
      <SEO title="Home" description="devon anderson home page"/>
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="featured projects" showLink/>
      <Blogs blogs={blogs} title="latest articles" showLink/>
    </>
  )
}

export const query = graphql `
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        title
        strapiId
        stack:stack_item {
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

    allStrapiBlogs(sort: {
      fields: date,
      order: DESC
    }, limit: 3) {
      nodes {
        slug
        description
        date(formatString: "MMMM Do, YYYY")
        id
        title
        category
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

