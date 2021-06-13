import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core";
import MovieScreen from "../MovieScreen";

const useStyles = makeStyles((theme) => ({
  paperStyle: {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  },
  avatarStyle: {
    backgroundColor: "#1bbd7e",
  },
  btnstyle: { margin: theme.spacing(1) },
  text_field: {
    margin: theme.spacing(1),
  },
  signup_text: {
    margin: theme.spacing(1),
  },
}));

function LoginScreen(props) {
  const classes = useStyles();

  const [loginStatus, setLoginStatus] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChange = (e) => {
    e.target.name === "username"
      ? setUsername(e.target.value)
      : setPassword(e.target.value);
  };

  const handleLoginButton = (e) => {
    const documentData = JSON.parse(localStorage.getItem("document"));

    if (
      documentData.username === username &&
      documentData.password === password
    ) {
      console.log("successfull signup");
      setLoginStatus(true);
    } else {
      console.log("unsuccessfull !!");
    }
  };

  return (
    <>
      {!loginStatus ? (
        <Grid>
          <Paper elevation={10} className={classes.paperStyle}>
            <Grid align="center">
              <Avatar className={classes.avatarStyle}>
                <LockOutlinedIcon />
              </Avatar>
              <h2>Sign In</h2>
            </Grid>
            <TextField
              label="Username"
              placeholder="Enter username"
              fullWidth
              required
              className={classes.text_field}
              name={"username"}
              onChange={handleOnChange}
            />
            <TextField
              label="Password"
              placeholder="Enter password"
              type="password"
              fullWidth
              required
              className={classes.text_field}
              name={"password"}
              onChange={handleOnChange}
            />

            <Button
              type="submit"
              color="primary"
              variant="contained"
              className={classes.btnstyle}
              fullWidth
              onClick={handleLoginButton}
            >
              Sign in
            </Button>

            <Typography className={classes.signup_text}>
              {" "}
              Do you have an account ?
              <Link onClick={props.clickBtn} value={2}>
                Sign Up
              </Link>
            </Typography>
          </Paper>
        </Grid>
      ) : (
        <MovieScreen />
      )}
    </>
  );
}

export default LoginScreen;
