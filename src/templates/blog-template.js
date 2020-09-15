import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import {SectionCenter} from "styled/Section"
import BlogButton from "styled/Button"
import styled from "styled-components"

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
  const  { content } = data.blog
  return (
    <Layout>
      <BlogTemplateSection>
        <SectionCenter >
          <article className="blog-content">
            <ReactMarkdown source={content} />
          </article>
          <BlogButton as={Link} to="/blog" centerBtn="true">blog</BlogButton>
        </SectionCenter>
      </BlogTemplateSection>
    </Layout>
  )
}
export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
    }
  }
`

export default BlogTemplate
