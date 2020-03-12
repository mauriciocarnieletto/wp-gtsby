const gatsbySourceWordpress = require('./config/gatsby-source-wordpress')
const gatsbySassModules = require('./config/gatsby-sass-modules');
module.exports = {
  siteMetadata: {
    title: `WP + Gtsby === gg?`,
    description: `Testando o Gatsby.js com o Backend em WP pra ver no que da`,
    author: `m@uricio.me`,
  },
  plugins: [
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    gatsbySourceWordpress,
    gatsbySassModules,
  ],
}
