import React, { useState } from "react";
import routes from "@config/routes";

import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Hidden,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { Link, IconButton } from "gatsby-theme-material-ui";

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

function Header({ title, twhelpUrl, lang }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  const open = Boolean(anchorEl);
  const twhelpText = twhelpUrl.replace("http://", "").replace("https://", "");

  const handleMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Container>
        <Toolbar disableGutters>
          <Typography variant="h4" className={classes.title}>
            <Link to={routes[lang].HOME} underline="none" color="inherit">
              {title}
            </Link>
          </Typography>
          <div>
            <Hidden implementation="css" xsDown>
              <Link title={twhelpText} color="inherit" href={twhelpUrl}>
                {twhelpText}
              </Link>
            </Hidden>
            <Hidden implementation="css" smUp>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleMenuClose}
                disableScrollLock
              >
                <MenuItem>
                  <Link
                    title={twhelpText}
                    color="inherit"
                    underline="none"
                    href={twhelpUrl}
                  >
                    {twhelpText}
                  </Link>
                </MenuItem>
              </Menu>
            </Hidden>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
