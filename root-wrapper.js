import React from 'react'
import Layout from './src/components/Layout'
import { GlobalStyles } from './src/themes/globalStyles'
import * as theme from "themes/theme"
import { ThemeProvider } from 'styled-components'

export const wrapRootElement = ({element}) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Layout>{element}</Layout>
  </ThemeProvider>
)

