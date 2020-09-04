import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"

const ProjectsPage = ({
  data: {allStrapiProjects: {
    nodes: projects
  }}
}) => {
  return (
    <section className="projects-page">
      <Projects projects={projects} title="all projects" />
    </section>
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
