import React from "react"
import { graphql } from "gatsby"
import Layout from "components/Layout"
import Hero from "components/Hero"
import Services from "components/Services"
import Jobs from "components/Jobs"
import Projects from "components/Projects"
import Blogs from "components/Blogs"
import GlobalStyles from 'themes/globalStyles'
import { ThemeProvider } from "styled-components"
import * as theme from "themes/theme"

export default ({data}) => {
  const { allStrapiProjects: {nodes:projects}} = data
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Hero />
        <Services />
        <Jobs />
        {/* <Projects projects={projects} title="featured projects" showLink/> */}
      </Layout>
    </ThemeProvider>
  )
}

export const query = graphql `
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        title
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
  }
`

