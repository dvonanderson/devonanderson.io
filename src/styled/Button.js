import styled from "styled-components"
import { device } from "../themes/mediaQueries"
import {Link } from "gatsby"

export const Button = styled.button`
  text-transform: uppercase;
  background: ${props => props.theme.primary5};
  color: ${props => props.theme.primary9};
  padding: 0.375rem 0.75rem;
  letter-spacing: ${props => props.theme.spacing};

  /* center buttton styles --start */
  display: ${props => props.centerbtn ? "block" : "inline-block"};
  width: ${props => props.centerbtn ? "12rem" : "0"};
  text-align: ${props => props.centerbtn ? "center" : "none"};
  margin: ${props => props.centerbtn ? `0 auto` : "0"};
  margin-top: ${props => props.centerbtn ? "3rem" : "0"};
/* center buttton styles --end */

  font-weight: 700;
  -webkit-transition: ${props => props.theme.transition};
  transition: ${props => props.theme.transition};
  font-size: 0.875rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: ${props => props.theme.radius};

  &:hover {
    color: ${props => props.theme.primary1};
    background: ${props => props.theme.primary8};
  }
`

export const JobButton = styled.button`
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



