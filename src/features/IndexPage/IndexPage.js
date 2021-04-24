import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import routes from '@config/routes';
import translations from './translations';

import { makeStyles } from '@material-ui/core/styles';
import Image from 'gatsby-image';
import {
  Container,
  Typography,
  Button,
  Divider,
  ButtonGroup,
  Grid,
} from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';
import Layout from '@components/Layout/Layout';
import Seo from '@components/Seo';

const useStyles = makeStyles(theme => ({
  divider: {
    margin: theme.spacing(2, 0),
    backgroundColor: '#fff',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    margin: 'auto',
    borderRadius: '6px',
    maxWidth: '593px',
  },
}));

const IndexPage = ({ location, pageContext }) => {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          botInviteUrl
        }
      }
      screenshots: allFile(
        filter: { absolutePath: { regex: "/screenshots/" } }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              id
              fluid(maxWidth: 593, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  const t = translations[pageContext.langKey];
  const ss = data.screenshots.edges.find(edge => {
    if (edge.node.relativePath.includes(pageContext.langKey)) return edge;
    return null;
  });

  return (
    <Layout lang={pageContext.langKey} pathname={location.pathname}>
      <Seo
        title={t.title}
        description={t.description}
        location={location.pathname}
        lang={pageContext.langKey}
      />
      <Container className={classes.container}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography variant="h2" component="h1" gutterBottom>
              {t.header.title}
            </Typography>
            <Typography gutterBottom>{t.header.description}</Typography>
            <Divider variant="fullWidth" className={classes.divider} />
            <ButtonGroup variant="contained" color="primary">
              <Button>
                <Link
                  href={data.site.siteMetadata.botInviteUrl}
                  color="inherit"
                  title={t.header.inviteBot}
                >
                  {t.header.inviteBot}
                </Link>
              </Button>
              <Button>
                <Link
                  to={routes[pageContext.langKey].COMMANDS_PAGE}
                  color="inherit"
                  title={t.header.commands}
                >
                  {t.header.commands}
                </Link>
              </Button>
            </ButtonGroup>
          </Grid>
          <Grid item xs={12} md={5}>
            <Image
              className={classes.image}
              fluid={ss.node.childImageSharp.fluid}
              alt={data.site.siteMetadata.title}
            />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default IndexPage;
