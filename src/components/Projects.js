import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
import { Section, SectionCenter } from "styled/Section";
import styled from "styled-components"
import Button from "styled/Button";
import PropTypes from "prop-types"

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
          <Button as={Link} to="/projects" centerBtn="true">
            projects
          </Button>
        )
        }
    </ProjectsSection>
  )
}

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  showLink: PropTypes.bool,
}

export default Projects
