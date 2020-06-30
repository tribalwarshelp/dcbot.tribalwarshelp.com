import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./Header";
import Footer from "./Footer";
import theme from "./theme";

const useStyles = makeStyles(theme => ({
  main: {
    display: "flex",
  },
  mainChild: {
    display: "flex",
    width: "100%",
    minHeight: "calc(100vh - 140px)",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(3),
  },
}));

const Layout = ({ children, className, lang, pathname }) => {
  const classes = useStyles();
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            twhelpUrl
            languages
          }
        }
      }
    `
  );

  return (
    <ThemeProvider theme={theme}>
      <Header
        twhelpUrl={site.siteMetadata.twhelpUrl}
        languages={site.siteMetadata.languages}
        lang={lang}
        pathname={pathname}
      />
      <main
        className={className ? classes.main + " " + className : classes.main}
      >
        <div className={classes.mainChild}>{children}</div>
      </main>
      <Footer title={site.siteMetadata.title} lang={lang} />
      <CssBaseline />
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  lang: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default Layout;
