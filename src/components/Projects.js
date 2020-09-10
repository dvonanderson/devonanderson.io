import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
import { Section, SectionCenter } from "styled/Section";
import styled from "styled-components"
import { Button } from "styled/Button";

const ProjectsSection = styled(Section)`
  background: ${props => props.theme.grey10};
`
const Projects = ({projects, title, showLink}) => {
  return (
    <ProjectsSection>
      <Title title={title} />
      <SectionCenter>
        {
          projects.map((project, index) => {
            return (
              <Project key={project.strapiId} index={index} {...project}/>
            )
          })
        }
      </SectionCenter>
      {
        showLink && (
          <Button
            as={Link}
            to="/projects"
            centerbtn="true"
          >
            projects
          </Button>
        )
        }
    </ProjectsSection>
  )
}

export default Projects
