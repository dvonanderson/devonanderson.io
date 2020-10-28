import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import Banner from '../components/Banner'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { device } from '../themes/mediaQueries'
import BlogHero from '../components/BlogHero'
import SEO from '../components/SEO'
import { Underline } from '../components/Styled-Components'

const PostTemplateWrapper = styled.section`
  width: 85vw;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  margin-bottom: 4rem;

  @media ${device.laptop} {
    width: 92vw;
  }
  @media ${device.desktop} {
    display: grid;
    grid-template-columns: 1fr 200px;
    column-gap: 4rem;
  }
`

const PostTemplateInfo = styled.div`
  margin: 2rem 0 4rem 0;
  text-align: center;

  .underline {
    width: 5rem;
    height: 1px;
    background: ${props => props.theme.grey9};
    margin: 0 auto;
    margin-bottom: 1rem;
  }

  & span {
    background: ${props => props.theme.primary5};
    color: ${props => props.theme.white};
    border-radius: ${props => props.theme.radius};
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    letter-spacing: ${props => props.theme.radius};
  }

  & h2 {
    margin: 1.25rem 0;
    font-weight: 400;
  }

  & p {
    color: ${props => props.theme.grey5};
  }
`

export const query = graphql`
  query GetSinglePost($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        category
        date(formatString: "MMM, Do, YYYY")
        slug
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        readingTime {
          text
        }
      }
      body
    }
  }
`
const PostTemplate = ({ data }) => {
  const {
    mdx: {
      frontmatter: { image, title, category, date },
      body,
    },
  } = data

  return (
    <>
      <SEO
        title={title}
        description={`Before the Peak is the blog source for Devon Anderson's portfolio. It focuses on many design and development categories with a twist of crazy.`}
        article={true}
      />
      <BlogHero />
      <PostTemplateWrapper>
        <article>
          <Image fluid={image.childImageSharp.fluid} />
          <PostTemplateInfo>
            <span>{category}</span>
            <h2>{title}</h2>
            <p>{date}</p>
            <Underline />
          </PostTemplateInfo>
          <MDXRenderer>{body}</MDXRenderer>
        </article>
        <article>
          <Banner />
        </article>
      </PostTemplateWrapper>
    </>
  )
}

export default PostTemplate
