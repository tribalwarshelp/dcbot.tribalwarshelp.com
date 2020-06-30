import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";
import { Link } from "gatsby-theme-material-ui";

const useStyles = makeStyles(() => ({
  appBar: {
    backgroundColor: "transparent",
    color: "#fff",
    boxShadow: "none",
  },
  copyright: {
    width: "100%",
  },
}));

const locales = {
  en: {
    backgroundCredits: "I customized the wicked cool background at",
  },
  pl: {
    backgroundCredits: "Tło pochodzi z",
  },
};

function Footer({ title, lang }) {
  const classes = useStyles();
  const translations = locales[lang] || locales["en"];

  return (
    <AppBar component="footer" position="static" className={classes.appBar}>
      <Container>
        <Toolbar disableGutters>
          <Typography align="center" className={classes.copyright}>
            {translations.backgroundCredits}{" "}
            <Link color="secondary" href="https://svgbackgrounds.com">
              svgbackgrounds.com
            </Link>
            . <br /> &copy; {new Date().getFullYear()} {title}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Footer;
