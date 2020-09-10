import React from "react"
import Layout from "components/Layout"
import { graphql } from "gatsby"
import Blogs from "components/Blogs"
import GlobalStyles from 'themes/globalStyles'
import { ThemeProvider } from "styled-components"
import * as theme from "themes/theme"
import styled from "styled-components"


const AllBlogsSection = styled.section`
  background: ${props => props.theme.grey10};
  min-height: calc(100vh - 5rem - 9rem);
`
const Blog = ({
  data: {
    allStrapiBlogs: {nodes: blogs},
  }
}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
      <AllBlogsSection>
        <Blogs blogs={blogs} title="blog"/>
      </AllBlogsSection>
    </Layout>
    </ThemeProvider>

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
