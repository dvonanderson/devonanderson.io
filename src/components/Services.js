import React from 'react'
import Title from './Title'
import services from '../constants/services'
import styled from 'styled-components'
import { Section } from 'styled/Section'
import { device } from '../themes/mediaQueries'
import Underline from 'styled/Underline'

const ServiceSection = styled(Section)`
  background: ${props => props.theme.grey10};

  .service-container {
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

  .underline {
    width: 3rem;
    height: 0.12rem;
  }

  & :hover {
    background: ${props => props.theme.primary5};
    color: ${props => props.theme.primary9};
  }

  & p {
    -webkit-transition: ${props => props.theme.transition};
    transition: ${props => props.theme.transition};

    & :hover {
      color: ${props => props.theme.primary9};
    }
  }
`

const Services = ({ title }) => {
  return (
    <ServiceSection>
      <Title title={title} />
      <div className="service-container">
        {services.map(service => {
          const { id, icon, title, text } = service

          return (
            <ServiceArticle key={id}>
              {icon}
              <h4>{title}</h4>
              <Underline />
              <p>{text}</p>
            </ServiceArticle>
          )
        })}
      </div>
    </ServiceSection>
  )
}

export default Services
