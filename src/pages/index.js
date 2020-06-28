import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { COMMANDS_PAGE } from "@config/routes";

import { makeStyles } from "@material-ui/core/styles";
import Image from "gatsby-image";
import {
  Container,
  Typography,
  Button,
  Divider,
  ButtonGroup,
  Grid,
} from "@material-ui/core";
import { Link } from "gatsby-theme-material-ui";
import Layout from "@components/Layout/Layout";
import SEO from "@components/SEO";

const useStyles = makeStyles(theme => ({
  divider: {
    margin: theme.spacing(2, 0),
    backgroundColor: "#fff",
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
  image: {
    margin: "auto",
    borderRadius: "6px",
    maxWidth: "593px",
  },
}));

const IndexPage = ({ location }) => {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          botInviteUrl
        }
      }
      ss: file(relativePath: { eq: "ss.png" }) {
        childImageSharp {
          fluid(maxWidth: 593, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout className={classes.layout}>
      <SEO title="Home" location="/" />
      <Container className={classes.container}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography variant="h2" component="h1" gutterBottom>
              Observe your tribe ennoblements!
            </Typography>
            <Typography gutterBottom>
              This bot notifies you about conquered/lost village by tribe near
              real-time.
            </Typography>
            <Divider variant="fullWidth" className={classes.divider} />
            <ButtonGroup variant="contained" color="secondary">
              <Button>
                <Link
                  href={data.site.siteMetadata.botInviteUrl}
                  color="inherit"
                  underline="none"
                  title={`Invite ${data.site.siteMetadata.title}`}
                >
                  Invite {data.site.siteMetadata.title}
                </Link>
              </Button>
              <Button>
                <Link to={COMMANDS_PAGE} color="inherit" underline="none">
                  Commands
                </Link>
              </Button>
            </ButtonGroup>
          </Grid>
          <Grid item xs={12} md={5}>
            <Image
              className={classes.image}
              fluid={data.ss.childImageSharp.fluid}
              alt={data.site.siteMetadata.title}
            />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default IndexPage;
