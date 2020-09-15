import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"
import BlogButton from "styled/Button"
import styled from "styled-components"
import { Section, SectionCenter  } from "styled/Section";
import { device } from "../themes/mediaQueries"
import PropTypes from "prop-types"

const BlogsWrapper = styled(SectionCenter)`
  @media ${device.mobileM} {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
    column-gap: 2rem;
  }
`
export const Blogs = ({blogs, title, showLink}) => {
  return (
    <Section>
      <Title title={title} />
      <BlogsWrapper>
        {
          blogs.map(blog => {
            return (
              <Blog key={blog.id} {...blog}/>
            )
          })
        }
      </BlogsWrapper>
      {
        showLink &&
        <BlogButton as={Link} to="/blog" centerBtn="true">
          blog
        </BlogButton>
      }
    </Section>
  )
}

Blogs.propTypes = {
  blogs: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  showLink: PropTypes.bool,
}
export default Blogs
