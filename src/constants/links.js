import React from "react"
import { LinksWrapper, StyledLink, Li } from "styled/Links"

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

const tempLinks = data.map(link => {
  return(
    <Li key={link.id}>
      <StyledLink to={link.url}>{link.text}</StyledLink>
    </Li>
  )
})

export default () => {
  return (
    <LinksWrapper>
      {tempLinks}
    </LinksWrapper>
  )
}
