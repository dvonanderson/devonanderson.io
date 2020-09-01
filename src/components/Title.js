import React from "react"
import styled from "styled-components"

const SectionTitle = styled.div`
  margin-bottom: 4rem;
  text-align: center;
`

const Title = ({ title }) => {
  return (
    <SectionTitle>
      <h2>{ title || "default title"}</h2>
      <div className="underline"></div>
    </SectionTitle>
  )
}

export default Title
