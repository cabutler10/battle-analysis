import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  bottomContainer: {
    background: theme.palette.primary.main,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: `15px 0`,
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },
  text: {
    color: "white",
    margin: 0,
    fontSize: 12,
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer>
      <div className={classes.bottomContainer}>
        <p className={classes.text}>&#169; Battle Analysis</p>
      </div>
    </footer>
  );
}

export default Footer;
