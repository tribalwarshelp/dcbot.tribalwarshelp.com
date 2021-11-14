const DOMAIN = 'dcbot.tribalwarshelp.com';
const SITE_URL = 'https://' + DOMAIN;

module.exports = {
  siteMetadata: {
    title: `TWHelp Discord Bot`,
    description: `Discord bot for online game Tribalwars. | Real-time notifications about conquered/lost villages.`,
    siteUrl: SITE_URL,
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
        name: `TWHelp Discord Bot`,
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
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Montserrat`,
                variants: [`300`],
              },
            ],
          },
        },
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: SITE_URL,
        sitemap: SITE_URL + '/sitemap.xml',
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
    {
      resolve: `@kichiyaki/gatsby-plugin-plausible`,
      options: {
        domain: DOMAIN,
        customDomain: process.env.PLAUSIBLE_CUSTOM_DOMAIN,
      },
    },
  ],
};
