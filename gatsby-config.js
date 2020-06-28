module.exports = {
  siteMetadata: {
    title: `TWHelp Discord Bot`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
        condimentum finibus finibus. In blandit at sapien sit amet pellentesque.
        Integer a massa et nulla posuere volutpat vitae et diam. Praesent eget
        libero quis sapien accumsan interdum. Ut in blandit dui.`,
    siteUrl: "https://dcbot.tribalwarshelp.com",
    twhelpUrl: "https://tribalwarshelp.com",
    botInviteUrl:
      "https://discord.com/oauth2/authorize?client_id=707859810900508703&scope=bot&permissions=8",
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
        name: `Tribal Wars Bot`,
        short_name: `twdcbot`,
        start_url: `/`,
        background_color: `#330033`,
        theme_color: `#330033`,
        display: `minimal-ui`,
        icon: `src/images/icon.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-theme-material-ui`,
    `gatsby-plugin-sitemap`,
  ],
};
