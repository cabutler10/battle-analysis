import React from "react";
import { makeStyles } from "@material-ui/styles";
import Hero from "./Hero";
import About from "./About";

const useStyles = makeStyles((theme) => ({}));

function Homepage() {
  const classes = useStyles();

  return (
    <div>
      <Hero />
      <About />
      <p className={classes.test}>homepage</p>
    </div>
  );
}

export default Homepage;
