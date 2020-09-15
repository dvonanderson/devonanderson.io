import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { device } from "themes/mediaQueries";
import Image from "gatsby-image"
import ProjectStackSpan from "styled/StackSpan"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

const ProjectArticle = styled.article`
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

  ${ProjectArticle}:hover & :after  {
     opacity: 0;
  }

  & :after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom right, ${props => props.theme.primary5}, #222);
    opacity: 0.85;
    transition: ${props => props.theme.transition};
  }

  @media ${device.mobileM} {
    height: 19rem;
  }

  @media ${device.tabletS} {
    height: 22rem;
  }

  @media ${device.laptop} {
    grid-column: 1 / span 8;
    grid-row: 1 / 1;
    height: 30rem;
    border-radius: ${props => props.theme.radius};
    box-shadow: ${props => props.theme.darkShadow};

    ${ProjectArticle}:nth-of-type(even) & {
      grid-column: 5 / -1;
      grid-row: 1 / 1;
    }
  }
`

const ProjectInfoContainer = styled.div`
  background: ${props => props.theme.white};
  padding: 1rem 2rem;
  border-bottom-left-radius: ${props => props.theme.radius};
  border-bottom-right-radius: ${props => props.theme.radius};

  &h3 {
    font-weight: 500;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }

  @media screen and (min-width: 992px) {
    border-radius: ${props => props.theme.radius};
    box-shadow: ${props => props.theme.darkShadow};
    z-index: 1;
    grid-column: 5 /12;
    grid-row: 1 / 1;

    ${ProjectArticle} :nth-of-type(even) & {
      grid-column: 2 / span 7;
      grid-row: 1 / 1;
      text-align: left;
    }
  }
`

const Span = styled.span`
  display: inline-block;
  font-size: 1.25rem;
  color: ${props => props.theme.primary5};
  margin-bottom: 0.75rem;
`

const ProjectDescription = styled.p`
  word-spacing: 15px;
  color: ${props => props.theme.primary3};
`

const ProjectStack = styled.div`
  margin-bottom: 1rem;
`

const StyledGithubSquare = styled(FaGithubSquare)`
  ${props => props.theme.projectIcon}
`

const StyledShareSquare = styled(FaShareSquare)`
  ${props => props.theme.projectIcon}
`

const Project = ({description, github, title, url, stack, image, index}) => {
  return (
    <ProjectArticle>
      {image && (<ProjectImage fluid={image.childImageSharp.fluid} />)}
      <ProjectInfoContainer>
        <Span>0{index + 1}.</Span>
        <h3>{title}</h3>
        <ProjectDescription>{description || "default description"}</ProjectDescription>
        <ProjectStack>
          {
            stack.map(item => <ProjectStackSpan key={item.id}>{item.title}</ProjectStackSpan>)
          }
        </ProjectStack>
        <div>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <StyledShareSquare />
          </a>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <StyledGithubSquare />
          </a>
        </div>
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
  stack: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default Project
