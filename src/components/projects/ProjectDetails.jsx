import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  autocomplete: {
    display: "flex",
    justifyContent: "center",
  },
}));

function Projects() {
  const classes = useStyles();

  return <div>project details</div>;
}

export default Projects;
