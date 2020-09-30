import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { device } from 'themes/mediaQueries'

const StyledLinks = styled.ul`
  display: none;

  /* sidebar styles --start */
  ${props =>
    props.sidebar &&
    css`
      display: block;

      & li {
        opacity: 0;
        animation: ${props => props.theme.slideRight} 0.5s ease-in-out 0.3s
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

        & a {
          display: block;
          text-align: center;
          text-transform: capitalize;
          color: ${props => props.theme.grey5};
          letter-spacing: ${props => props.theme.spacing};
          margin-bottom: 0.5rem;
          font-size: 2rem;
          transition: ${props => props.theme.transition};
          border-radius: ${props => props.theme.radius};

          & :hover {
            background: ${props => props.theme.primary9};
            color: ${props => props.theme.primary5};
          }
        }
      }
    `}
  /* sidebar styles --end */

  @media ${device.tabletS} {
    display: flex;
    justify-content: flex-end;

    & li{
      margin-right: 2rem;

      & a {
        text-transform: capitalize;
        color: ${props => props.theme.grey1};
        font-weight: bold;
        letter-spacing: ${props => props.theme.spacing};
        transition: ${props => props.theme.transition};
        padding: 0.5rem 0;

        & :hover {
          color: ${props => props.theme.primary5};
          box-shadow: 0px 2px ${props => props.theme.primary5};
        }
      }
    }
  }
`
const data = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about/',
  },
  {
    id: 3,
    text: 'projects',
    url: '/projects/',
  },
  {
    id: 4,
    text: 'blog',
    url: '/blog/',
  },
  {
    id: 5,
    text: 'contact',
    url: '/contact/',
  },
]

//todo: add children section for sidebar
export default ({ sidebar, toggleSidebar }) => {
  return (
    <StyledLinks sidebar={sidebar}>
      {data.map(link => {
        return (
          <li key={link.id}>
            <Link
              to={link.url}
              onClick={toggleSidebar}
              onKeyDown={toggleSidebar}
            >
              {link.text}
            </Link>
          </li>
        )
      })}
    </StyledLinks>
  )
}
