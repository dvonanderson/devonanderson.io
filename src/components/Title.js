import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Underline } from "styled/Underline"

const SectionTitle = styled.div`
  margin-bottom: 4rem;
  text-align: center;
`

const Title = ({ title }) => {
  return (
    <SectionTitle>
      <h2>{ title || "default title"}</h2>
      <Underline />
    </SectionTitle>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
}
export default Title
