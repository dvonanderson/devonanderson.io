export const size = {
  mobileM: `576px`,
  mobileL: `676px`,
  tabletS: `768px`,
  tabletM: `800px`,
  tabletL: `850px`,
  laptop: `992px`,
  desktop: `1170px`,
}

export const device = {
  mobileM: `screen and (min-width: ${size.mobileM})`,
  mobileL: `screen and (min-width: ${size.mobileL})`,
  tabletS: `screen and (min-width: ${size.tabletS})`,
  tabletM: `screen and (min-width: ${size.tabletM})`,
  tabletL: `screen and (min-width: ${size.tabletL})`,
  laptop: `screen and (min-width: ${size.laptop})`,
  desktop: `screen and (min-width: ${size.desktop})`
}
