import React from 'react'
import styled from 'styled-components'
import { device } from 'themes/mediaQueries'

const HeroHeader = styled.header`
  background: ${props => props.theme.primary10};
  height: 12rem;
  position: relative;
  z-index: -1;
  margin-bottom: 6rem;

  & :after {
    content: 'I am here';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 6rem;
    width: 100%;
    background: url('../assets/vector1.svg');
    background-size: cover;

    @media ${device.tabletM} {
      height: 20rem;
    }
  }
`

const BlogHero = () => {
  return <HeroHeader></HeroHeader>
}

export default BlogHero
