import styled from 'styled-components'
import { device } from "themes/mediaQueries"

export const Section = styled.section`
  padding: 5rem -0;
`

export const SectionCenter = styled.section`
  width: 90vw;
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};

  @media ${device.laptop} {
      width: 95vw;
    }
`
