import React from "react"
import PropTypes from "prop-types"
import styled, {css} from "styled-components"
import { device } from "themes/mediaQueries";
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

const ProjectArticle = styled.article`
  display: grid;
  margin-bottom: 4rem;

  &:hover ${StyledImage}:after {
    opacity: 0;
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(12, 1fr);
    align-items: center;

    /* NEED TO COME BACK TO THIS */
    /* &:nth-of-type(even) {
      background: green;
      ${StyledImage} {
        grid-column: 5 / 1;
        grid-row: 1 / 1;
      }
      & ${ProjectInfoContainer} {
        grid-column: 2 / span 7;
        grid-row: 1 / 1;
        text-align: left;
      }

    } */

  }
`
export const StyledImage = styled(Image)`
  border-top-left-radius: ${props => props.theme.radius};
  border-top-right-radius: ${props => props.theme.radius};
  height: 19rem;
  z-index: 1;

  &:after {
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
  }
`
export const ProjectInfoContainer = styled.div`
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
  }
`

export const Span = styled.span`
  display: inline-block;
  font-size: 1.25rem;
  color: ${props => props.theme.primary5};
  margin-bottom: 0.75rem;
`

export const ProjectDescription = styled.p`
  word-spacing: 15px;
  color: ${props => props.theme.primary3};
`

export const ProjectStack = styled.div`
  margin-bottom: 1rem;
`
export const StackSpan = styled.span`
  display: inline-block;
  background: ${props => props.theme.grey9};
  color: ${props => props.theme.grey5};
  margin-right: 0.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: ${props => props.theme.radius};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.85rem;
`
const projectIcon = css`
  color: ${props => props.theme.primary5};
  font-size: 1.25rem;
  margin-right: 0.5rem;
  transition: ${props => props.theme.transition};

  &:hover {
    color: ${props => props.theme.primary1}
  }
`

export const GithubSquare = styled(FaGithubSquare)`
  ${projectIcon}
`

export const ShareSquare = styled(FaShareSquare)`
  ${projectIcon}
`

const Project = ({description, github, title, url, stack, image, index}) => {
  return (
    <ProjectArticle>
      <StyledImage fluid={image.childImageSharp.fluid} />
      <ProjectInfoContainer>
        <Span>0{index + 1}.</Span>
        <h3>{title}</h3>
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectStack>
          {
            stack.map(item =>
              <StackSpan key={item.id}>{item.title}</StackSpan>)
          }
        </ProjectStack>
        <div>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <ShareSquare />
          </a>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <GithubSquare />
          </a>
        </div>
      </ProjectInfoContainer>
    </ProjectArticle>
  )
}

Project.propTypes = {}

export default Project
