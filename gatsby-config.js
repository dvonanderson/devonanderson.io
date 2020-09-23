require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

console.log(process.env.OPT_CONTAINER_ID)

module.exports = {
  siteMetadata: {
    title: "Devon Anderson Portfolio",
    description: "This is Devon Anderson Portfolio Site",
    author: "Devon Anderson",
    twitterUsername: "@dsawebdev",
    image: "/dsa_twitter_screenshot.png",
    siteUrl: "https://www.devonanderson.net",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        anonymize: true,
        pageTransitionDelay: 0,
      }
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: process.env.GA_TRACKING_ID, // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-google-analytics", // default
          anonymize: true, // default
        },
        facebookPixel: {
          pixelId: process.env.FB_PIXEL_ID, // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-facebook-pixel", // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production", "development"],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.GATSBY_API_URL || "http://localhost:1337",
        queryLimit: 1000, // Default to 100
        contentTypes: [`jobs`, `projects`, `blogs`],
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
        ],
      },
    },
  ],
}
