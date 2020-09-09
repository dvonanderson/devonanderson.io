import styled from "styled-components"
import { Section } from "styled/Section"
import { device } from "../themes/mediaQueries"
import { Underline } from "styled/Underline"

export const ServiceSection = styled(Section)`
  background: ${props => props.theme.grey10};
`

export const ServiceContainer = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};

  @media ${device.mobileL} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    -webkit-column-gap: 2rem;
    -moz-column-gap: 2rem;
    column-gap: 2rem;
  }

  @media ${device.laptop} {
    width: 95vw;
    grid-template-columns: 1fr 1fr 1fr;
  }
`
export const ServiceArticle = styled.article`
  background: ${props => props.theme.white};
  padding: 3rem 1.5rem;
  margin-bottom: 2rem;
  border-radius: ${props => props.theme.radius};
  text-align: center;
  -webkit-transition: ${props => props.theme.transition};
  transition: ${props => props.theme.transition};

  &:hover {
    background: ${props => props.theme.primary5};
    color: ${props => props.theme.primary9};
   }
  & p {
    -webkit-transition: ${props => props.theme.transition};
    transition: ${props => props.theme.transition};
    &:hover {
      color: ${props => props.theme.primary9};
    }
  }
`
export const ServiceUnderline = styled(Underline)`
  width: 3rem;
  height: 0.12rem;
  -webkit-transition: ${props => props.theme.transition};
  transition: ${props => props.theme.transition};
  &:hover {
    background: ${props => props.theme.primary9};
  }
`
