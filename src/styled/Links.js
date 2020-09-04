import styled from 'styled-components'
import { Link } from "gatsby"
import { device } from "themes/mediaQueries"

export const LinksWrapper = styled.ul`
  display: none;

  @media ${device.tabletS} {
    display: flex;
    justify-content: flex-end;
  }
`

export const Li = styled.li`
  @media ${device.tabletS} {
    margin-right: 2rem;
  }
`
export const StyledLink = styled(Link)`
  @media ${device.tabletS} {
    text-transform: capitalize;
    color: ${props => props.theme.grey1};
    font-weight: bold;
    letter-spacing: ${props => props.theme.spacing};
    transition: ${props => props.theme.transition};
    padding: 0.5rem 0;

    :hover {
      color: ${props => props.theme.primary5};
      box-shadow: 0px 2px ${props => props.theme.primary5};
    }
  }
`
