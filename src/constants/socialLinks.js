import React from 'react'
import {
  FaFacebookSquare,
  FaLinkedin,
  FaDribbbleSquare,
  FaBehanceSquare,
  FaTwitterSquare,
} from 'react-icons/fa'
import styled, { css } from 'styled-components'
import { device } from '../themes/mediaQueries'

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare></FaFacebookSquare>,
    url: 'https://www.facebook.com/dsawebdev/',
  },
  {
    id: 2,
    icon: <FaLinkedin></FaLinkedin>,
    url: 'https://www.linkedin.com/in/devon-s-anderson/',
  },
  {
    id: 3,
    icon: <FaDribbbleSquare></FaDribbbleSquare>,
    url: 'https://dribbble.com/Blacstar/about',
  },
  {
    id: 4,
    icon: <FaBehanceSquare></FaBehanceSquare>,
    url: 'https://www.behance.net/dsawebdev',
  },
  {
    id: 5,
    icon: <FaTwitterSquare></FaTwitterSquare>,
    url: 'https://twitter.com/dsawebdev',
  },
]

const SocialLinks = styled.ul`
  margin: 0 auto;
  margin-top: 2rem;
  width: 15rem;
  display: flex;
  justify-content: space-between;

  /* alternate banner styles --start */
  ${props =>
    props.banner &&
    css`
      display: flex;
      justify-content: center;
      width: 100%;
    `}
  /* alternate banner styles --end */

   @media ${device.tabletL} {
    margin: 0;
    margin-top: 2rem;
  }

  /* alternate footer styles --start */
  ${props =>
    props.footer &&
    css`
      margin-top: 0;
      margin: 0 auto 1rem auto;
    `}
  /* alternate footer styles --end */


  & li {
    /* sidebar styles --start */
    ${props =>
      props.sidebar &&
      css`
        opacity: 0;
        animation: ${props => props.theme.slideUp} 0.5s ease-in-out 0.3s
          forwards;

        & :nth-of-type(1) {
          animation-delay: 0.25s;
        }
        & :nth-of-type(2) {
          animation-delay: 0.5s;
        }
        & :nth-of-type(3) {
          animation-delay: 0.75s;
        }
        & :nth-of-type(4) {
          animation-delay: 1s;
        }
        & :nth-of-type(5) {
          animation-delay: 1.25s;
        }
      `}
      /* sidebar styles --start */

      /* alternate banner styles --start */
      ${props =>
        props.banner &&
        css`
          transition: ${props => props.theme.transition};
        `}
      /* alternate banner styles --end */
  }


  & a{
    font-size: 2.15rem;
    color: ${props => props.theme.grey5};
    transition: ${props => props.theme.transition};

    & :hover {
      color: ${props => props.theme.primary5};

      ${props =>
        props.banner &&
        css`
          transform: translateY(-10%);
        `}
    }

    /* alternate footer styles --start */
    ${props =>
      props.footer &&
      css`
        color: ${props => props.theme.white};
      `}
    /* alternate footer styles --end */

    /* alternate banner styles --start */
      ${props =>
        props.banner &&
        css`
          font-size: 1.5rem;
          margin: 0 0.25rem;
        `}
      /* alternate banner styles --end */
  }
`

export default ({ footer, sidebar, banner }) => {
  return (
    <SocialLinks footer={footer} sidebar={sidebar} banner={banner}>
      {data.map(link => {
        return (
          <li key={link.id}>
            <a href={link.url} target="_blank" rel="noreferrer noopener">
              {link.icon}
            </a>
          </li>
        )
      })}
    </SocialLinks>
  )
}
