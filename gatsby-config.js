module.exports = {
  siteMetadata: {
    title: `TWHelp Discord Bot`,
    description: `Near real-time notifications about lost/conquered village by a tribe in the game tribalwars.com.`,
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
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://dcbot.tribalwarshelp.com",
        sitemap: "https://dcbot.tribalwarshelp.com/sitemap.xml",
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
      },
    },
  ],
};
