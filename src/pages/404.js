import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';
import Layout from '@common/Layout/Layout';
import Seo from '@common/Seo';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },
  layout: {
    minHeight: '100vh',
  },
}));

const NotFoundPage = ({ location, pageContext }) => {
  const classes = useStyles();

  return (
    <Layout
      showHeader={false}
      showFooter={false}
      className={classes.layout}
      lang={pageContext.langKey}
      pathname={location.pathname}
    >
      <Seo
        title="Page Not found"
        description="Page not found"
        location={location.pathname}
      />
      <Container className={classes.container}>
        <Typography gutterBottom variant="h1">
          Page Not Found
        </Typography>
        <Typography gutterBottom variant="h4">
          Looks like you've followed a broken link or entered a URL that doesn't
          exist on this site.
        </Typography>
        <Typography variant="h4">
          <Link to="/">Back to our site</Link>
        </Typography>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
