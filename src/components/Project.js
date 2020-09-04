import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import styled from "styled-components"

const ProjectArticle = styled.article`
  display: grid;
  margin-bottom: 4rem;
  &:hover {
    opacity: 0;
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(12, 1fr);
    align-items: center;

     &:hover, :after ${StyledImage} {
      opacity: 0;
    }
    ${StyledImage}:nth-last-of-type(even) {
      grid-column: 5 / -1;
      grid-row: 1 / 1;
    }
    /* ${ProjectInfoContainer} {
      grid-column: 2 / span 7;
      grid-row: 1 / 1;
      text-align: left;
    } */
  }

`
const StyledImage = styled(Image)`
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
  height: 19rem;
  z-index: 1;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom right, var(--clr-primary-10), #222);
    opacity: 0.85;
    transition: var(--transition);
  }

  @media screen and (min-width: 576px) {
    height: 19rem;
  }
  @media screen and (min-width: 768px) {
    height: 22rem;
  }

  @media screen and (min-width: 992px) {
    grid-column: 1 / span 8;
    /* grid-column-end: 8; */
    grid-row: 1 / 1;
    height: 30rem;
    border-radius: var(--radius);
    box-shadow: var(--dark-shadow);

    ${ProjectArticle}
  }

`

const ProjectInfoContainer = styled.div`
  background: var(--clr-white);
  padding: 1rem 2rem;
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);

  &h3 {
    font-weight: 500;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }

  @media screen and (min-width: 992px) {
    border-radius: var(--radius);
    box-shadow: var(--dark-shadow);

    z-index: 1;
    grid-column: 5 /12;
    grid-row: 1 / 1;
  }
`
const Project = ({description, github, title, url, stack, image, index}) => {
  return (
    <ProjectArticle>
      <StyledImage fluid={image.childImageSharp.fluid} />
      <ProjectInfoContainer>
        {/* <span className="project-number">0{index + 1}.</span>
        <h3>{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {
            stack.map(item => <span key={item.id}>{item.title}</span>)
          }
        </div>
        <div className="project-links">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <FaShareSquare className="project-icon" />
          </a>
        </div> */}
      </ProjectInfoContainer>
    </ProjectArticle>
  )
}

Project.propTypes = {}

export default Project
