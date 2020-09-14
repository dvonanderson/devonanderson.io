import styled from "styled-components"
import {device} from "themes/mediaQueries"

export const JobButton = styled.button `
  background: transparent;
  border-color: transparent;
  text-transform: capitalize;
  font-size: 1.25rem;
  letter-spacing: ${props => props.theme.spacing};
  margin: 0 0.5rem;
  transition: ${props => props.theme.transition};
  cursor: pointer;
  padding: 0.25rem 0;
  line-height: 1;

  /* active button styling --start*/
  color: ${props => props.activeBtn ? props.primary5 :  ""};
  box-shadow: ${props => props.activeBtn ? props.primary5 : ""};
  /* active button styling --end*/

  &:hover {
    color: ${props => props.theme.primary5};
    box-shadow: 0 2px ${props => props.theme.primary5};
  }

  @media ${device.laptop} {
    margin-bottom: 1rem;
    &:hover {
      box-shadow: -2px 0 ${props => props.theme.primary5};
    }
  }
`
