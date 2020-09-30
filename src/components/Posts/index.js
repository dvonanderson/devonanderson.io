import React from 'react'
import Post from './Post'
import Title from '../../components/Title'
import Banner from '../Banner'
import styled from 'styled-components'
import { device } from '../../themes/mediaQueries'
import { Section } from '../../styled/Section'

const PostsSection = styled(Section)`
  width: 85vw;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  margin-bottom: 4rem;

  .blogPage {
    display: grid;
    grid-template-columns: 1fr 250px;
    column-gap: 1rem;
  }

  @media ${device.laptop} {
    width: 92vw;
  }
`

const Posts = ({ posts, title, isBlogPage }) => {
  return (
    <PostsSection>
      <Title title={title} />
      <div className={isBlogPage && 'blogPage'}>
        <article>
          {posts.map(post => {
            return <Post key={post.id} {...post} />
          })}
        </article>
        <article>{isBlogPage && <Banner />}</article>
      </div>
    </PostsSection>
  )
}

export default Posts
