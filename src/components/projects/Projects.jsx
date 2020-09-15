/* eslint-disable no-use-before-define */
import React from "react";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import projectData from "./projectData";
import Container from "../Container";
import ProjectDetails from "./ProjectDetails";
import img from "../../assets/placeholder.png";

const useStyles = makeStyles((theme) => ({
  autocomplete: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginBottom: 30,
  },
  content: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  flexItem: {
    flexBasis: "100%",
    [theme.breakpoints.up("md")]: {
      flexBasis: "50%",
    },
  },
  img: {
    width: "100%",
  },
}));

function Projects() {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.autocomplete}>
        <Autocomplete
          id="combo-box-demo"
          options={projectData}
          getOptionLabel={(option) => option.title}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select a Project"
              variant="outlined"
            />
          )}
        />
      </div>
      <div className={classes.content}>
        <div className={classes.flexItem}>
          <img src={img} alt="project" className={classes.img} />
        </div>
        <div className={classes.flexItem}>
          <ProjectDetails />
        </div>
      </div>
    </Container>
  );
}

export default Projects;
