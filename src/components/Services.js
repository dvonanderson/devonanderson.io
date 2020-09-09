import React from "react"
import Title from "./Title"
import services from "../constants/services"
import {
  ServiceSection,
  ServiceContainer,
  ServiceArticle,
  ServiceUnderline } from "../styled/Services"

const Services = () => {
    return (
      <ServiceSection>
        <Title title="services"/>
        <ServiceContainer>
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
        </ServiceContainer>
      </ServiceSection>
    )
}

export default Services
