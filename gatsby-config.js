const path = require('path');

module.exports = {
  siteMetadata: {
    title: `emilcichowski`,
    description: `emilcichowski.pl website`,
    author: `@krylowicz @morswin22`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'fik3aiu',
        },
      },
    },
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        assets: path.join(__dirname, 'src/assets'),
        utils: path.join(__dirname, 'src/utils'),
        components: path.join(__dirname, 'src/components'),
        templates: path.join(__dirname, 'src/templates'),
        pages: path.join(__dirname, 'src/pages'),
        theme: path.join(__dirname, 'src/theme'),
        src: path.join(__dirname, 'src'),
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        text: /\.js$/,
        exclude: /(node_modules|cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-stylelint`,
      options: {
        files: ['**/*.js'],
      },
    },
    `gatsby-plugin-react-helmet`,
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
      },
    },
  ],
};
