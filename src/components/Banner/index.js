import React from 'react'
import styled from 'styled-components'
import About from './About'
import Instagram from './Instagram'
import BannerCategories from './BannerCategories'
import Recent from './Recent'
import { device } from '../../themes/mediaQueries'

const BannerWrapper = styled.aside`
  display: grid;
  grid-template-columns: 200px;
  justify-content: center;
  row-gap: 1rem;

  @media ${device.mobileM} {
    grid-template-columns: repeat(auto-fit, 200px);
    column-gap: 3rem;
  }
`

const Banner = () => {
  return (
    <BannerWrapper>
      <About />
      <Instagram />
      <Recent />
      <BannerCategories />
    </BannerWrapper>
  )
}

export default Banner
