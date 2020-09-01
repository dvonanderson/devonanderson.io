import React from "react"
import Title from "./Title"
import services from "../constants/services"
import styled from "styled-components"

const ServiceSection = styled.section`
   padding: 5rem 0;
   background: var(--clr-grey-10);

  @media screen and (min-width: 676px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    -webkit-column-gap: 2rem;
    -moz-column-gap: 2rem;
    column-gap: 2rem;
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
const ServiceArticle = styled.article`
  background: var(--clr-white);
  padding: 3rem 1.5rem;
  margin-bottom: 2rem;
  border-radius: var(--radius);
  text-align: center;
  -webkit-transition: var(--transition);
  transition: var(--transition);
  :hover {
    background: var(--clr-primary-5);
    color: var(--clr-primary-9);
   }
  & p {
    -webkit-transition: var(--transition);
    transition: var(--transition);
    :hover {
      color: var(--clr-primary-9);
    }
  }
`

const ServiceUnderline = styled.div.attrs(props => ({
  className: "underline"
}))`
  width: 3rem;
  height: 0.12rem;
  -webkit-transition: var(--transition);
  transition: var(--transition);
  :hover {
    background: var(--clr-primary-9);
  }
`
const Services = () => {
    return (
      <ServiceSection>
        <Title title="services"/>
        <div className="section-center services-center">
          {
            services.map(service => {
              const { id, icon, title, text } = service

              return (
                <ServiceArticle key={id}>
                  {icon}
                  <h4>{title}</h4>
                  <ServiceUnderline />
                  <p>{text}</p>
                </ServiceArticle>
              )
            })
          }
        </div>
      </ServiceSection>
    )
}

export default Services
