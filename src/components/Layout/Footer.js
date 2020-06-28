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

function Footer({ title }) {
  const classes = useStyles();

  return (
    <AppBar component="footer" position="static" className={classes.appBar}>
      <Container>
        <Toolbar disableGutters variant="dense">
          <Typography align="center" className={classes.copyright}>
            I customized the wicked cool background at{" "}
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
