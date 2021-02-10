module.exports = {
  siteMetadata: {
    title: `Drake's Portfolio`,
    description: `A portfolio of my coding projects.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Drake's Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        // This path is relative to the root of the site.
      },
    },
  ],
}
