import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import routes from "@config/routes";
import translations from "./translations";

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
      ss: file(relativePath: { eq: "ss.png" }) {
        childImageSharp {
          fluid(maxWidth: 593, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const t = translations[pageContext.langKey];

  return (
    <Layout className={classes.layout} lang={pageContext.langKey}>
      <SEO
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
            <ButtonGroup variant="contained" color="secondary">
              <Button>
                <Link
                  href={data.site.siteMetadata.botInviteUrl}
                  color="inherit"
                  underline="none"
                  title={t.header.inviteBot}
                >
                  {t.header.inviteBot}
                </Link>
              </Button>
              <Button>
                <Link
                  to={routes[pageContext.langKey].COMMANDS_PAGE}
                  color="inherit"
                  underline="none"
                >
                  {t.header.commands}
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
