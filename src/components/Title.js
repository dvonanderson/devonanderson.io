import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import Underline from "styled/Underline"
import { device } from "themes/mediaQueries"

const SectionTitle = styled.div`
  margin-bottom: 4rem;
  text-align: center;

  ${props =>
    props.aboutTitle && css`
      margin-bottom: 2rem;
      text-align: left;
    `
  }
`

const Title = ({ title, aboutTitle, aboutUnderline, serviceUnderline, heroUnderline }) => {
  return (
    <SectionTitle aboutTitle={aboutTitle}>
      <h2>{ title || "default title"}</h2>
      <Underline
        aboutUnderline={aboutUnderline}
        serviceUnderline={serviceUnderline}
        heroUnderline={heroUnderline}
      />
    </SectionTitle>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Title
