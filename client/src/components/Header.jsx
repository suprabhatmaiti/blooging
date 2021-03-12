import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

export default function Header() {
  const useStyle = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
      fontSize: 20,
      textDecoration: "none",
      color: "white",
    },
  }));
  const classes = useStyle();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          className={classes.title}
          component={Link}
          to="/"
        >
          News
        </Typography>
        <Button color="inherit" component={Link} to="/login">
          Login
        </Button>
        <Button color="inherit" component={Link} to="/signup">
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
}
