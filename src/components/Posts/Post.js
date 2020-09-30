import React from 'react'
import Image from 'gatsby-image'
import { FaRegClock } from 'react-icons/fa'
import { IoMdArrowRoundForward } from 'react-icons/io'
import styled from 'styled-components'
import Underline from 'styled/Underline'
import { Link } from 'gatsby'
import { device } from '../../themes/mediaQueries'

const PostWrapper = styled.article`
  padding: 0.5rem;
  margin-bottom: 3rem;
  border-radius: ${props => props.theme.radius};
  box-shadow: ${props => props.theme.lightShadow};

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 30rem 1fr;
    column-gap: 1.5rem;
  }
`

const StyledImage = styled(Image)`
  border-radius: ${props => props.theme.radius};
  height: 17rem;

  //todo add other mediaqueries

  @media ${device.laptop} {
    height: 100%;
    max-height: 20rem;
  }
`
const PostInfo = styled.div`
  text-align: center;

  .underline {
    width: 5rem;
    height: 1px;
    margin: 0 auto;
    margin-bottom: 1rem;

    @media ${device.laptop} {
      margin-left: 0;
      margin-right: 0;
    }
  }

  & h3 {
    font-weight: 400;
    margin-bottom: 1rem;
    text-transform: initial;
  }

  & p {
    color: ${props => props.theme.grey8};
    line-height: 1.8;
  }

  @media ${device.laptop} {
    text-align: left;
  }
`

const PostCategory = styled.span`
  display: inline-block;
  margin-bottom: 1rem;
  background: ${props => props.theme.grey10};
  padding: 0.25rem 0.5rem;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: ${props => props.theme.radius};
  letter-spacing: ${props => props.theme.spacing};
  color: ${props => props.theme.grey5};
`

const PostFooter = styled.div`
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid ${props => props.theme.grey9};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.grey5};

  & .date {
    display: flex;
    align-items: center;

    & .icon {
      color: ${props => props.theme.primary5};
      margin-right: 0.5rem;
    }
  }
`

const StyledLink = styled(Link)`
  text-transform: uppercase;
  letter-spacing: ${props => props.theme.spacing};
  font-weight: 700;
  color: ${props => props.theme.primary5};
  padding-bottom: 0.1rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  & :hover {
    font-weight: 800;
    border-color: ${props => props.theme.primary9};
    color: ${props => props.theme.primary7};
  }

  & svg {
    margin-left: 0.25rem;
    font-size: 1.2rem;
  }
`

const Post = ({ frontmatter, excerpt, fields }) => {
  const { title, image, slug, date, category } = frontmatter
  const { text: readTime } = fields.readingTime

  return (
    <PostWrapper>
      <StyledImage fluid={image.childImageSharp.fluid} />
      <PostInfo>
        <PostCategory>{category}</PostCategory>
        <h3>{title}</h3>
        <Underline />
        <p>{excerpt}</p>
        <StyledLink to={`/posts/${slug}`}>
          Continue Reading <IoMdArrowRoundForward />
        </StyledLink>
        <PostFooter>
          <span className="date">
            <FaRegClock className="icon" />
            {date}
          </span>
          <span>{readTime}</span>
        </PostFooter>
      </PostInfo>
    </PostWrapper>
  )
}

export default Post
