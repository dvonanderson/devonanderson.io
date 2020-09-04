import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
import styled from "styled-components"

const ProjectsSection = styled.section.attrs(props => ({
  className: "section"
}))`
  background: var(--clr-grey-10);
`
const Projects = ({projects, title, showLink}) => {
  return (
    <ProjectsSection>
      <Title title={title} />
      <div className="section-center projects-center">
        {
          projects.map((project, index) => {
            return (
              <Project key={project.id} index={index} {...project}/>
            )
          })
        }
      </div>
      {
        showLink && (
          <Link to='/projects' className="btn center-btn">
            projects
          </Link>
        )
        }
    </ProjectsSection>
  )
}

export default Projects
