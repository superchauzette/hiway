module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        icon: true,
        viewBox: true,
        // see https://github.com/smooth-code/svgr for a list of all options
      },
    },
  ],
}
