import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Underline from 'styled/Underline'

const TitleWrapper = styled.div`
  .title {
    margin-bottom: 4rem;
    text-align: center;
  }
`

const Title = ({ title }) => {
  return (
    <TitleWrapper>
      <div className="title">
        <h2>{title || 'default title'}</h2>
        <Underline />
      </div>
    </TitleWrapper>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Title
