require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Creative Portfolio`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
  ],
}
