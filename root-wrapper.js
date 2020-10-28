import React from 'react'
import Layout from './src/components/Layout'
import { MDXProvider } from '@mdx-js/react'
// import Cookie from './src/components/Cookies'

import {
  Headings,
  Code,
  MdxBlockQuote,
  Prism,
  Text,
} from './src/components/Mdx'

const components = {
  h2: Headings.myH2,
  h4: Headings.myH4,
  inlineCode: Code,
  strong: Text.Strong,
  blockquote: MdxBlockQuote,
  pre: Prism,
  em: Text.Em,
}
export const wrapRootElement = ({ element }) => (
  <Layout>
    <MDXProvider components={components}>{element}</MDXProvider>
  </Layout>
)
