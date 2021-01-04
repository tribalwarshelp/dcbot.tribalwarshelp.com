const siteUrl = 'https://dcbot.tribalwarshelp.com';

module.exports = {
  siteMetadata: {
    title: `TWHelp Discord Bot`,
    description: `Discord bot for online game Tribalwars. | Real-time notifications about lost/conquered village.`,
    siteUrl,
    twhelpUrl: 'https://tribalwarshelp.com',
    botInviteUrl:
      'https://discord.com/oauth2/authorize?client_id=707859810900508703&scope=bot&permissions=8',
    languages: ['en', 'pl'],
    author: 'Dawid Wysokiński',
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
        background_color: `#303032`,
        theme_color: `#303032`,
        display: `minimal-ui`,
        icon: `src/images/icon.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: null,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: siteUrl + '/sitemap.xml',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        langKeyForNull: 'en',
        useLangKeyLayout: false,
        prefixDefault: false,
      },
    },
  ],
};
