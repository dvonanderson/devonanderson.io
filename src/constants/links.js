import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { device } from 'themes/mediaQueries'

const LinksWrapper = styled.div`
  .nav-links {
    display: none;

    @media ${device.tabletS} {
      display: flex;
      justify-content: flex-end;

      & li {
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

export default ({ closeSidebar }) => {
  return (
    <LinksWrapper>
      <ul className="nav-links">
        {data.map(link => {
          return (
            <li key={link.id}>
              <Link to={link.url} onClick={closeSidebar}>
                {link.text}
              </Link>
            </li>
          )
        })}
      </ul>
    </LinksWrapper>
  )
}
