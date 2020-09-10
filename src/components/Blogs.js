import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"
import { Button } from "styled/Button"
import styled from "styled-components"
import { Section, SectionCenter  } from "styled/Section";
import { device } from "../themes/mediaQueries"

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
        <Button
          as={Link}
          to="/blog"
          centerbtn="true"
        >
          blog
        </Button>
      }
    </Section>
  )
}
export default Blogs
