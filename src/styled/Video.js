import React from 'react'
import styled from 'styled-components'

const RegVideoWrapper = styled.div`
  width: 90vw;
  max-width: 700px;
  height: 30vh;
  position: relative;
  margin-bottom: 2rem;

  & video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const RegVideo = ({ video, type }) => {
  return (
    <RegVideoWrapper>
      <video controls autoPlay muted loop>
        <source src={video} type={type} />
      </video>
    </RegVideoWrapper>
  )
}

const IframeVideoWrapper = styled.div`
  width: 90vw;
  max-width: 700px;

  video {
    overflow: hidden;
    /* // Calculated from the aspect ration of the content (in case of 16:9 it is 9/16= 0.5625) */
    padding-top: 56.25%;
    position: relative;
    border-radius: ${props => props.theme.radius};
  }

  .video iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`
export const IVideo = ({ src, title, ...props }) => {
  return (
    <IframeVideoWrapper>
      <div className="video">
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        />
      </div>
    </IframeVideoWrapper>
  )
}

IVideo.defaultProps = {
  src: 'https://www.youtube.com/embed/2v3xBWCQNgk',
  title: 'cool music',
}
