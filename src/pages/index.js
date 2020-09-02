import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import GlobalStyles from '../globalStyles'

export default ({data}) => {
  const { allStrapiProjects: {nodes:projects}} = data

  return (
    <Layout>
      <GlobalStyles />
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="featured projects" showlink/>
    </Layout>
  )
}

export const query = graphql `
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        title
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

