require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://www.devonanderson.net',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env

const isNetlifyProduction = NETLIFY_ENV === 'production'
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
  siteMetadata: {
    title: `Devon Anderson Portfolio`,
    description: `This is Devon Anderson Portfolio Site`,
    titleTemplate: `%s | Devon Anderson`,
    author: `Devon Anderson`,
    twitterUsername: `@dsawebdev`,
    image: `/dsa_twitter_screenshot.png`,
    siteUrl,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        anonymize: true,
        pageTransitionDelay: 0,
      },
    },
    // {
    //   resolve: `gatsby-plugin-gdpr-cookies`,
    //   options: {
    //     googleAnalytics: {
    //       trackingId: process.env.GA_TRACKING_ID, // leave empty if you want to disable the tracker
    //       cookieName: 'gatsby-gdpr-google-analytics', // default
    //       anonymize: true, // default
    //     },
    //     facebookPixel: {
    //       pixelId: process.env.FB_PIXEL_ID, // leave empty if you want to disable the tracker
    //       cookieName: 'gatsby-gdpr-facebook-pixel', // default
    //     },
    //     // defines the environments where the tracking should be available  - default is ["production"]
    //     environments: ['production', 'development'],
    //   },
    // },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: 8385666633,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-remark-images`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [],
      },
    },
    `gatsby-remark-reading-time`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.GATSBY_API_URL || 'http://localhost:1337',
        queryLimit: 1000, // Default to 100
        contentTypes: [`jobs`, `projects`],
        singleTypes: [`about`],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `700`],
          },
          {
            family: `Open Sans`,
          },
          {
            family: 'Permanent Marker',
          },
        ],
      },
    },
  ],
}
