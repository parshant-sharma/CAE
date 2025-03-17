module.exports = {
  siteMetadata: {
    title: `CAE`, // Title of your site
    description: `A description of your CAE project`, // Description of your site
    author: `Your Name`, // Author name
    siteUrl: `https://cae.onrender.com`, // Replace this with your Render site's URL
  },
  plugins: [
    // Gatsby plugins you may need, for example:
    `gatsby-plugin-react-helmet`, // For managing <head>
    `gatsby-plugin-image`, // For optimized images
    `gatsby-plugin-sharp`, // For image processing
    `gatsby-transformer-sharp`, // To process images into different formats
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`, // Path to your source files
      },
    },
    {
      resolve: `gatsby-plugin-manifest`, // Optional, for PWA configuration
      options: {
        name: `CAE Project`,
        short_name: `CAE`,
        start_url: `/`,
        background_color: `#ffffff`, // Background color for your PWA
        theme_color: `#000000`, // Theme color
        display: `minimal-ui`, // Display type
        icon: `src/images/icon.png`, // Path to the favicon
      },
    },
    // You can add more plugins as needed
  ],
};
