import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Image from 'gatsby-image'
import Title from './Title.js'

const RecentWrapper = styled.div`
  .post {
    display: grid;
    grid-template-columns: 75px 1fr;
    column-gap: 1rem;
    margin-bottom: 1rem;

    & :hover {
      h5 {
        color: ${props => props.theme.primary5};
      }
    }
  }

  .img {
    border-radius: ${props => props.theme.radus};
  }

  & h5 {
    font-size: 0.7rem;
    margin-bottom: 0.25rem;
    letter-spacing: 1.2;
    color: ${props => props.theme.grey1};
  }

  & p {
    font-size: 0.6rem;
    margin-bottom: 0;
    color: ${props => props.theme.grey5};
  }
`

const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 5) {
      nodes {
        excerpt
        fields {
          readingTime {
            text
          }
        }
        frontmatter {
          title
          author
          category
          date(formatString: "MMM Do, YYYY")
          slug
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
  }
`

const Recent = () => {
  const data = useStaticQuery(query)
  const {
    allMdx: { nodes: posts },
  } = data

  return (
    <RecentWrapper>
      <Title title="recent" />
      {posts.map(post => {
        const {
          title,
          slug,
          date,
          image: {
            childImageSharp: { fluid },
          },
        } = post.frontmatter

        return (
          <Link to={`/posts/${slug}`} key={post.id} className="post">
            <Image fluid={fluid} className="img" />
            <div>
              <h5>{title}</h5>
              <p>{date}</p>
            </div>
          </Link>
        )
      })}
    </RecentWrapper>
  )
}

export default Recent
