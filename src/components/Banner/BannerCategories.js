import React from 'react'
import Categories from '../Categories'
import Title from './Title'
import styled from 'styled-components'

const BannerCategoryWrapper = styled.div`
  .category {
    font-size: 1rem;
    color: ${props => props.theme.grey5};
    text-transform: capitalize;
    display: block;
    padding: 0.5rem 0 0.5rem 1rem;
    letter-spacing: ${props => props.theme.spacing};
    transition: ${props => props.theme.transition};
    border-radius: ${props => props.theme.radius};

    & :hover {
      background: ${props => props.theme.grey10};
    }
  }
`

const BannerCategories = () => {
  return (
    <BannerCategoryWrapper>
      <Title title="categories" />
      <Categories />
    </BannerCategoryWrapper>
  )
}

export default BannerCategories
