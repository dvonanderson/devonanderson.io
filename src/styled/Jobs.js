import styled from "styled-components"
import { device } from "themes/mediaQueries"
import { Section } from "styled/Section"
import {
  FaAngleDoubleRight
} from "react-icons/fa"

export const StyledSection = styled(Section)``

export const JobsContainer = styled.div`
  width: 80vw;
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};

  @media ${device.laptop} {
    width: 90vw;
    display: grid;
    grid-template-columns: 200px 1fr;
    column-gap: 4rem;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 4rem;
  @media ${device.laptop} {
    flex-direction: column;
    justify-content: flex-start;
  }
`

export const JobArticle = styled.article`
  & h3{
    font-weight: 400;
  }

  & h4 {
    text-transform: uppercase;
    color: ${props => props.theme.grey5};
    background: ${props => props.theme.grey9};
    display: inline-block;
    padding: 0.375rem 0.75rem;
    border-radius: ${props => props.theme.radius};
  }
`

export const JobDate = styled.p`
  letter-spacing: ${props => props.theme.spacing};
`

export const JobDescription = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 2rem;
  align-items: center;
  margin-bottom: 1.25rem;
  & p {
    margin-bottom: 0;
    color: ${props => props.theme.primary3};
  }
`
export const JobIcon = styled(FaAngleDoubleRight) `
  color: ${props => props.theme.primary5};
`
