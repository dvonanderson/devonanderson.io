import React from 'react'
import styled from 'styled-components'

const Gif = ({ sourceUrl, title, width, height, alignment }) => (
  <GifWrapper alignment={alignment}>
    <iframe
      src={sourceUrl}
      width={width}
      height={height}
      frameBorder="0"
      allowFullScreen
      title={title}
    />
  </GifWrapper>
)
const GifWrapper = styled.div`
  max-height: 400px;
  max-width: ${props => props.theme.maxWidth};
  display: flex;
  justify-content: ${({ alignment }) => `${alignment}`};
`

export default Gif
