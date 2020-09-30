import React from 'react'
import Layout from './src/components/Layout'
import { GlobalStyles } from './src/themes/globalStyles'
import * as theme from 'themes/theme'
import { ThemeProvider } from 'styled-components'
import Cookie from './src/components/Cookies'
import { MDXProvider } from '@mdx-js/react'
import { Headings, Code, MdxBlockQuote, Prism } from './src/components/Mdx'

const components = {
  h2: Headings.myH2,
  h4: Headings.myH4,
  inlineCode: Code,
  blockquote: MdxBlockQuote,
  pre: Prism,
}
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Cookie />
    <MDXProvider components={components}>
      <Layout>{element}</Layout>
    </MDXProvider>
  </ThemeProvider>
)
