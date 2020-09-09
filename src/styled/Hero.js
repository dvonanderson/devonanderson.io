import styled from 'styled-components'
import { device } from "themes/mediaQueries"
import { SectionCenter } from './Section'
import { Underline } from "./Underline"
import Image from "gatsby-image"

export const HeroHeader = styled.header`
  margin-top: -5rem;
  padding-top: 5rem;
  height: 100vh;
  /* background: var(--clr-primary-10); */
  position: relative;

  @media ${device.laptop} {
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 65%;
      right: 0;
      bottom: 0;
      background: ${props => props.theme.white};
    }
  }
`

export const HeroContainer = styled(SectionCenter)`
  height: 70%;
  display: grid;
  align-items: center;

  @media ${device.laptop} {
     grid-template-columns: repeat(12, 1fr);
  }
`

export const Article = styled.article`
  @media ${device.laptop} {
    grid-row: 1/1;
    grid-column: 1 / span 8;
  }

  //? may not need this
  /* @media ${device.laptop} {
    grid-column: 1 / span 8;
  } */

`

export const HeroUnderline = styled(Underline)`
  margin-bottom: 0.5rem;
  margin-left: 0px;
`

export const H4 = styled.h4`
  color: ${props => props.theme.primary5};

  @media ${device.laptop} {
    font-size: 0.85rem;
  }

  @media ${device.desktop} {
    font-size: 1rem;
    line-height: 1;
  }
 `

 export const StyledImage = styled(Image)`
  display: none;

  @media ${device.laptop} {
    display: block;
    grid-row: 1/1;
    grid-column: 7/-1;
  }
 `
