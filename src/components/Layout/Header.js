import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";
import { Link } from "gatsby-theme-material-ui";

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "transparent",
    color: "#fff",
    boxShadow: "none",
  },
}));

function Header({ title, twhelpUrl }) {
  const classes = useStyles();
  const twhelpText = twhelpUrl.replace("http://", "").replace("https://", "");
  return (
    <AppBar position="static" className={classes.appBar}>
      <Container>
        <Toolbar disableGutters>
          <Typography variant="h4" className={classes.title}>
            <Link to="/" underline="none" color="inherit">
              {title}
            </Link>
          </Typography>
          <div>
            <Link title={twhelpText} color="inherit" href={twhelpUrl}>
              {twhelpText}
            </Link>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
