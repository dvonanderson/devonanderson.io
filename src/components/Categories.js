import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const CategoriesWrapper = styled.ul`
  flex-direction: column;
  margin: 1rem 0;

  .category {
    color: ${props => props.theme.grey5};
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: capitalize;
    padding-left: 1rem;
    display: block;
    cursor: pointer;
  }
`

const query = graphql`
  {
    allMdx {
      distinct(field: frontmatter___category)
    }
  }
`
const Categories = () => {
  const {
    allMdx: { distinct },
  } = useStaticQuery(query)

  return (
    <CategoriesWrapper>
      {distinct.map((category, index) => {
        return (
          <li key={index}>
            <Link to={`/${category}`} className="category">
              {category}
            </Link>
          </li>
        )
      })}
    </CategoriesWrapper>
  )
}

export default Categories
