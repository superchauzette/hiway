const rootDir = '.'

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

    {
      resolve: `gatsby-plugin-offline`,
      options: {
        staticFileGlobs: [`*.{js,woff2}`, `index.html`, `manifest.json`],
        stripPrefix: rootDir,
        navigateFallback: `/offline-plugin-app-shell-fallback/index.html`,
        // Only match URLs without extensions.
        // So example.com/about/ will pass but
        // example.com/cheeseburger.jpg will not.
        // We only want the service worker to handle our "clean"
        // URLs and not any files hosted on the site.
        navigateFallbackWhitelist: [/^.*(?!\.\w?$)/],
        cacheId: `gatsby-plugin-offline`,
        // Do cache bust JS URLs until can figure out how to make Webpack's
        // URLs truely content-addressed.
        dontCacheBustUrlsMatching: /(.\w{8}.woff2)/, //|-\w{20}.js)/,
        runtimeCaching: [
          {
            // Add runtime caching of images.
            urlPattern: /\.(?:png|jpg|jpeg|webp|svg|gif|tiff)$/,
            handler: `fastest`,
          },
        ],
        skipWaiting: false,
      },
    },
  ],
}
