import React, { useState } from 'react';
import PropTypes from 'prop-types';
import routes from '@config/routes';

import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Container,
  Hidden,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { Link, IconButton } from 'gatsby-theme-material-ui';
import LanguageSelector from './LanguageSelector';

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: 'transparent',
    color: '#fff',
    boxShadow: 'none',
  },
  hidden: {
    '& > *:not(:last-child)': {
      marginRight: theme.spacing(1),
    },
  },
  link: {
    width: '100%',
  },
}));

function Header({ twhelpUrl, lang, languages, pathname }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  const open = Boolean(anchorEl);
  const twhelpText = twhelpUrl.replace('http://', '').replace('https://', '');

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
          <LanguageSelector
            lang={lang}
            languages={languages}
            pathname={pathname}
          />
          <nav>
            <Hidden implementation="css" xsDown className={classes.hidden}>
              <Link title="Home" color="inherit" to={routes[lang].HOME}>
                Home
              </Link>
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
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleMenuClose}
                disableScrollLock
              >
                <MenuItem>
                  <Link
                    title="Home"
                    color="inherit"
                    underline="none"
                    className={classes.link}
                    to={routes[lang].HOME}
                  >
                    Home
                  </Link>
                </MenuItem>
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
          </nav>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

Header.propTypes = {
  lang: PropTypes.string.isRequired,
  twhelpUrl: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(PropTypes.string),
};

export default Header;
