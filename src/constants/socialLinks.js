import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaDribbbleSquare,
  FaBehanceSquare,
  FaTwitterSquare,
} from "react-icons/fa"
import styled, {css} from "styled-components"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare></FaFacebookSquare>,
    url: "https://www.facebook.com/dsawebdev/",
  },
  {
    id: 2,
    icon: <FaLinkedin></FaLinkedin>,
    url: "https://www.linkedin.com/in/devon-s-anderson/",
  },
  {
    id: 3,
    icon: <FaDribbbleSquare></FaDribbbleSquare>,
    url: "https://dribbble.com/Blacstar/about",
  },
  {
    id: 4,
    icon: <FaBehanceSquare></FaBehanceSquare>,
    url: "https://www.behance.net/dsawebdev",
  },
  {
    id: 5,
    icon: <FaTwitterSquare></FaTwitterSquare>,
    url: "https://twitter.com/dsawebdev",
  },
]

const SocialLinks = styled.ul`
  margin-top: 2rem;
  width: 15rem;
  display: flex;
  justify-content: space-between;
  justify-items: flex-start;

  /* alternate footer styles --start */
  ${props =>
    props.footer && css`
      margin-top: 0;
      margin: 0 auto 1rem auto;
    `
    }
  /* alternate footer styles --end */

  /* sidebar styles --start */
  & li {
    ${props =>
      props.sidebar && css`
        opacity: 0;
        animation: ${props => props.theme.slideUp} 0.5s ease-in-out 0.3s forwards;

        & :nth-of-type(1){
          animation-delay: 0.25s;
        }
        & :nth-of-type(2){
          animation-delay: 0.5s;
        }
        & :nth-of-type(3){
          animation-delay: 0.75s;
        }
        & :nth-of-type(4){
          animation-delay: 1s;
        }
        & :nth-of-type(5){
          animation-delay: 1.25s;
        }
      `
    }
  }
  /* sidebar styles --start */


  & a{
    font-size: 1.75rem;
    color: ${props => props.theme.grey5};
    transition: ${props => props.theme.transition};

    & :hover {
      color: ${props =>  props.theme.primary5};
    }

    /* alternate footer styles --start */
    ${props =>
      props.footer && css`
        color: ${props => props.theme.white};
      `
      }
    /* alternate footer styles --end */
  }
`

export default ({footer, sidebar}) => {
  return (
    <SocialLinks footer={footer} sidebar={sidebar}>
      {
        data.map(link => {
          return (
            <li key={link.id}>
              <a href={link.url} target="_blank">
                {link.icon}
              </a>
            </li>
          )
        })
      }
    </SocialLinks>
  )
}
