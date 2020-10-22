import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { device } from 'themes/mediaQueries'
import Image from 'gatsby-image'
import ProjectStackSpan from 'styled/StackSpan'
import { FaGithubSquare, FaShareSquare } from 'react-icons/fa'

const ProjectArticle = styled.article.attrs({
  id: 'project-article',
})`
  display: grid;
  margin-bottom: 4rem;

  @media ${device.laptop} {
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
  }
`
const ProjectImage = styled(Image)`
  border-top-left-radius: ${props => props.theme.radius};
  border-top-right-radius: ${props => props.theme.radius};
  height: 19rem;
  z-index: 1;

  @media ${device.mobileM} {
    height: 19rem;
  }

  @media ${device.tabletS} {
    height: 22rem;
  }

  @media ${device.laptop} {
    grid-column: 1 / span 11;
    grid-row: 1 / 1;
    height: 35rem;
  }
`

const ProjectInfoContainer = styled.div`
  background: ${props => props.theme.white};
  padding: 1rem 2rem;
  border-bottom-left-radius: ${props => props.theme.radius};
  border-bottom-right-radius: ${props => props.theme.radius};
  //todo: work on transitioning element when screen comes into view

  & h3 {
    font-weight: 500;
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
  }

  .infoSpan {
    display: inline-block;
    font-size: 1.25rem;
    color: ${props => props.theme.primary5};
    margin-bottom: 0.75rem;
  }

  .infoDescription {
    word-spacing: 15px;
    color: ${props => props.theme.primary3};
    font-size: 0.85rem;
  }

  .stack {
    margin-bottom: 1rem;
  }

  @media ${device.laptop} {
    border-radius: ${props => props.theme.radius};
    box-shadow: ${props => props.theme.darkShadow};
    z-index: 1;
    grid-column: 1 / 5;
    grid-row: 1 / 1;
  }
`

const ProjectIconWrapper = styled.div`
  .icon {
    color: ${props => props.theme.primary5};
    font-size: 1.25rem;
    margin-right: 0.5rem;
    transition: ${props => props.theme.transition};

    & :hover {
      color: ${props => props.theme.primary1};
    }
  }
`

const Project = ({ description, github, title, url, stack, image, index }) => {
  return (
    <ProjectArticle>
      {image && <ProjectImage fluid={image.childImageSharp.fluid} />}
      <ProjectInfoContainer>
        <span className="infoSpan">0{index + 1}.</span>
        <h3>{title}</h3>
        <p className="infoDescription">
          {description || 'default description'}
        </p>
        <div className="stack">
          {stack.map(item => (
            <ProjectStackSpan key={item.id}>{item.title}</ProjectStackSpan>
          ))}
        </div>
        <ProjectIconWrapper>
          <a
            href={url}
            className="icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaShareSquare />
          </a>
          <a
            href={github}
            className="icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare />
          </a>
        </ProjectIconWrapper>
      </ProjectInfoContainer>
    </ProjectArticle>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default Project
