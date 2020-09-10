import React from "react"
import Layout from "components/Layout"
import { graphql } from "gatsby"
import Projects from "components/Projects"
import GlobalStyles from 'themes/globalStyles'
import { ThemeProvider } from "styled-components"
import * as theme from "themes/theme"
import styled from "styled-components"

const AllProjectsSection = styled.section`
  background: ${props => props.theme.grey10};
  min-height: calc(100vh - 5rem - 9rem);
`
const ProjectsPage = ({
  data: {allStrapiProjects: {
    nodes: projects
  }}
}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <AllProjectsSection>
          <Projects projects={projects} title="all projects" />
        </AllProjectsSection>
      </Layout>
    </ThemeProvider>


  )
}

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        strapiId
        stack: stack_item {
          id
          title
        }
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

export default ProjectsPage
