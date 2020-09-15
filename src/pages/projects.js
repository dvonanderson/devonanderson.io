import React from "react"
import { graphql } from "gatsby"
import Projects from "components/Projects"
import styled from "styled-components"

const AllProjectsSection = styled.section`
  ${props => props.theme.pagesStyling}
`
const ProjectsPage = ({
  data: {allStrapiProjects: {
    nodes: projects
  }}
}) => {
  return (
    <AllProjectsSection>
      <Projects projects={projects} title="all projects" />
    </AllProjectsSection>
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
