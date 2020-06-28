import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
}));

const NotFoundPage = ({ location }) => {
  const classes = useStyles();

  return (
    <Layout>
      <SEO title="404: Not found" location={location.pathname} />
      <Container className={classes.container}>
        <Typography variant="h1">404</Typography>
        <Typography variant="h3">
          You just hit a route that doesn&#39;t exist.
        </Typography>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
