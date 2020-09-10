import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
import styled from "styled-components"
import { device } from "../themes/mediaQueries"

const BlogWrapper = styled.div`
  display: block;
  margin-bottom: 2rem;
  background: ${props => props.theme.grey10};
  border-radius: ${props => props.theme.radius};
  box-shadow: ${props => props.theme.lightShadow};
  transition: ${props => props.theme.transition};

  & :hover {
    box-shadow: ${props => props.theme.darkShadow};
    transform: scale(1.02);
  }
`
const StyledImage = styled(Image)`
  border-top-left-radius: ${props => props.theme.radius};
  border-top-right-radius: ${props => props.theme.radius};
  height: 15rem;

  @media ${device.mobileM} {
    height: 17.5rem;
  }

  @media ${device.tabletL} {
    height: 13.75rem;
  }
`

const BlogCard = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 1.5rem 1rem;

  & h4 {
    color: ${props => props.theme.grey1};
  }
`

const BlogFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & p {
    margin-bottom: 0;
    font-weight: bold;
    color: ${props => props.theme.grey5};
  }

  & p:first-of-type {
    display: inline-block;
    background: ${props => props.theme.grey9};
    color: ${props => props.theme.grey5};
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-radius: ${props => props.theme.radius};
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.85rem;
  }
`

const Blog = ({id, title, image, date, category, slug, description}) => {
  return (
    <BlogWrapper
      as={Link}
      to={`/blogs/${slug}`}
      key={id}
    >
      <article>
        <StyledImage fluid={image.childImageSharp.fluid} />
      </article>
      <BlogCard>
        <h4>{title}</h4>
        <p>{description}</p>
        <BlogFooter>
          <p>{category}</p>
          <p>{date}</p>
        </BlogFooter>
      </BlogCard>
    </BlogWrapper>
  )
}

Blog.propTypes = {}

export default Blog
