import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../assets/logo.png";

const useStyles = makeStyles((theme) => ({
  appbar: {
    boxShadow: "none",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    width: 250,
  },
  link: {
    textDecoration: "none",
  },
  button: {
    fontSize: 20,
    marginRight: 30,
  },
}));

function Header() {
  const [drawer, setDrawer] = useState(false);
  const classes = useStyles();

  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawer(true);
  };

  return (
    <AppBar position="static" color="transparent" className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Link to="/">
          <Button>
            {/* <img src={logo} alt="battle analysis" className={classes.logo} /> */}
            BA
          </Button>
        </Link>
        <div>
          <Hidden lgDown>
            <Link to="/design" className={classes.link}>
              <Button className={classes.button}>Design Concepts</Button>
            </Link>
            <Link to="/projects" className={classes.link}>
              <Button className={classes.button}>Projects</Button>
            </Link>
          </Hidden>
          <Hidden mdUp>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawer}
              onClose={() => setDrawer(false)}
            >
              <List>
                <Link to="/">
                  <ListItem button>
                    <ListItemText primary="Home" />
                  </ListItem>
                </Link>
                <Link to="/design">
                  <ListItem button>
                    <ListItemText primary="Design" />
                  </ListItem>
                </Link>
                <Link to="/projects">
                  <ListItem button>
                    <ListItemText primary="Projects" />
                  </ListItem>
                </Link>
                <ListItem button>
                  <ListItemText primary="Contact" />
                </ListItem>
              </List>
            </Drawer>
          </Hidden>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
