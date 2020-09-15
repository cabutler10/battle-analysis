import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import image from "../../assets/background.png";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "90vh",
  },
  container: {
    position: "absolute",
    top: "70%",
    left: "60%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      top: "40%",
      left: "60%",
      transform: "translate(-50%, -50%)",
      width: "fit-content",
    },
    [theme.breakpoints.up("lg")]: {
      top: "40%",
      left: "65%",
      transform: "translate(-50%, -50%)",
      padding: 30,
      width: "fit-content",
      textAlign: "center",
    },
  },
  img: {
    height: "90vh",
  },
  title: {
    color: "black",
    fontFamily: "'Allerta Stencil', sans-serif",
    textTransform: "capitalize",
    fontSize: 32,
    marginBottom: 0,
    [theme.breakpoints.up("sm")]: {
      textAlign: "left",
      fontSize: 32,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 100,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 100,
    },
  },
  subtitle: {
    color: "black",
    fontFamily: "'Allerta Stencil', sans-serif",
    textTransform: "capitalize",
    fontSize: 24,
    marginBottom: 0,
    [theme.breakpoints.up("sm")]: {
      textAlign: "left",
      fontSize: 24,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 50,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 50,
    },
  },
}));

function Hero() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={image} alt="honeycomb background" className={classes.img} />
      <div className={classes.container}>
        <Typography variant="h1" gutterBottom className={classes.title}>
          Battle Analysis
        </Typography>
        <Typography variant="h2" gutterBottom className={classes.subtitle}>
          online wargame calculator
        </Typography>
      </div>
    </div>
  );
}

export default Hero;
