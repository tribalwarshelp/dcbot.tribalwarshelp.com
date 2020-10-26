import React from "react";
import PropTypes from "prop-types";
import plFlag from "@images/flags/pl.svg";
import usaFlag from "@images/flags/usa.svg";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "gatsby-theme-material-ui";

const flags = {
  pl: plFlag,
  en: usaFlag,
};

const useStyles = makeStyles(theme => ({
  languageSelector: {
    flexGrow: 1,
    display: "flex",
    "& > *:not(:last-child)": {
      marginRight: theme.spacing(1),
    },
  },
  flagWrapper: {
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  flag: {
    width: "auto",
    height: "25px",
    transition: "all .2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
}));

function LanguageSelector({ lang, languages, pathname }) {
  const classes = useStyles();

  const buildURL = l => {
    if (pathname.includes(lang)) {
      return pathname.replace(lang, l);
    }
    return `/${l}` + pathname;
  };

  return (
    <div className={classes.languageSelector}>
      {languages.map(l => (
        <Link
          key={l}
          to={buildURL(l).replace(`/${languages[0]}/`, "/")}
          className={classes.flagWrapper}
        >
          <img className={classes.flag} src={flags[l]} alt={l} />
        </Link>
      ))}
    </div>
  );
}

LanguageSelector.propTypes = {
  lang: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(PropTypes.string),
};

export default LanguageSelector;
