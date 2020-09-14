import React from "react"
import Layout from "components/Layout"
import { graphql } from "gatsby"
import Blogs from "components/Blogs"
import styled from "styled-components"


const AllBlogsSection = styled.section`
  ${props => props.theme.pagesStyling};
`
const Blog = ({
  data: {
    allStrapiBlogs: {nodes: blogs},
  }
}) => {
  return (
    <Layout>
      <AllBlogsSection>
        <Blogs blogs={blogs} title="blog"/>
      </AllBlogsSection>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        slug
        description
        date(formatString: "MMMM Do, YYYY")
        id
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default Blog
