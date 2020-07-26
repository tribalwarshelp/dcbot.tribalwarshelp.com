import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./Header";
import Footer from "./Footer";

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

const Layout = ({
  children,
  className,
  lang,
  pathname,
  showHeader,
  showFooter,
}) => {
  const classes = useStyles();
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            twhelpUrl
            languages
            author
          }
        }
      }
    `
  );

  return (
    <Fragment>
      {showHeader && (
        <Header
          twhelpUrl={site.siteMetadata.twhelpUrl}
          languages={site.siteMetadata.languages}
          lang={lang}
          pathname={pathname}
        />
      )}
      <main
        className={className ? classes.main + " " + className : classes.main}
      >
        <div className={classes.mainChild}>{children}</div>
      </main>
      {showFooter && <Footer author={site.siteMetadata.author} lang={lang} />}
      <CssBaseline />
    </Fragment>
  );
};

Layout.defaultProps = {
  showHeader: true,
  showFooter: true,
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  lang: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  showHeader: PropTypes.bool.isRequired,
  showFooter: PropTypes.bool.isRequired,
};

export default Layout;
