/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Demo Gatsby Blog`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `Testing Blog with Gatsby front-end, no backend`,
    image: `https://media.licdn.com/dms/image/sync/C4E22AQE3zABK-RNkbg/feedshare-shrink_800/0/1674585293922?e=1679529600&v=beta&t=7VPxsnRkiPLJgsjgaH7b5Qw9D_nij0FYQrTiObiEG2M`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-mdx',
    // This set of plugins is to enable creating MDX blog posts from the src/posts/folder
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/posts/`,
      },
    },
    // {
      // resolve: 'gatsby-plugin-mdx',
      // options: {
      //   defaultLayouts: { //insert layout into mdx files
      //     posts: require.resolve('./src/components/post-layout.js'),
      //   },
      // },
      //end of MDX config
    // },
  ],
}
