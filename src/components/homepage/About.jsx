import React from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.secondary.main,
    height: 500,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    width: "100%",
    padding: 30,
  },
}));

function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h2" gutterBottom className={classes.title}>
        Create wargame calculators to assist in battle analysis of hexagon based
        wargames.
      </Typography>
    </div>
  );
}

export default About;
