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

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Hiway',
        short_name: 'Hiway',
        start_url: '/',
        background_color: 'rgb(248,210,101)',
        theme_color: 'rgb(248,210,101)',
        display: 'minimal-ui',
        icons: [
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
  ],
}
