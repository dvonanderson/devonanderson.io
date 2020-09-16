import React from "react"
import { graphql, Link } from "gatsby"
import ReactMarkdown from "react-markdown"
import {SectionCenter} from "styled/Section"
import {Button} from "styled/Button"
import styled from "styled-components"
import SEO from "../components/SEO"

const BlogTemplateSection = styled.section`
  padding: 5rem 0;

  & h1, h2 {
    text-align: center;
  }

  & ul {
    margin-top: 2rem;
    display: inline-block;

    & li {
      background: ${props => props.theme.grey9};
      color: ${props => props.theme.grey5};
      padding: 0.5rem 1rem;
      margin: 1rem 0;
      text-transform: uppercase;
    }
  }

  & blockquote {
    background: ${props => props.theme.grey9};
    border-radius: ${props => props.theme.radius};
    padding: 1rem;
    line-height: 2;
    color: ${props => props.theme.grey5};
    margin: 2rem 0;
  }

  & pre {
    background: #222;
    color: yellow;
    overflow-x: scroll;
    padding: 1rem 1.5rem;
    border-radius: ${props => props.theme.radius};
  }

  & img {
    width: 15rem;
    height: 15rem;
    margin: 3rem 0;
  }
`

const BlogTemplate = ({data}) => {
  const  { content, title, description } = data.blog
  return (
    <>
      <SEO title={title} description={description}/>
      <BlogTemplateSection>
        <SectionCenter>
          <article>
            <ReactMarkdown source={content} />
          </article>
          <Button as={Link} to="/blog" center="true">blog</Button>
        </SectionCenter>
      </BlogTemplateSection>
    </>

  )
}
export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      description
    }
  }
`

export default BlogTemplate
