import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about/",
  },
  {
    id: 3,
    text: "projects",
    url: "/projects/",
  },
  {
    id: 4,
    text: "blog",
    url: "/blog/",
  },
  {
    id: 5,
    text: "contact",
    url: "/contact/",
  },
]

const StyledLinks = styled.ul`
  display: ${props => props.styleClass.navLinks.display};

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-end;

    li {
      margin-right: 2rem;
    }
    a {
      text-transform: capitalize;
      color: ${props => props.primary ? 'hotpink' : 'yellow'};
      font-weight: bold;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      padding: 0.5rem 0;

      &:hover {
        color: var(--clr-primary-5);
        box-shadow: 0px 2px var(--clr-primary-5);
      }
    }
  }
`

const PageLinks = ({styleClass}) => {
  const tempLinks = data.map(link => {
    return (
      <li key={link.id}>
        <Link to={link.url}>{link.text}</Link>
      </li>
    )
  })

  return (
    <PageLinks>
      {tempLinks}
    </PageLinks>
  )
}

export default PageLinks
