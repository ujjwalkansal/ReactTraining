import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core";
import LoginScreen from "../LoginScreen";

const useStyles = makeStyles((theme) => ({
  paperStyle: {
    padding: 20,
    height: "70vh",
    width: 320,
    margin: "20px auto",
  },
  btnstyle: { margin: theme.spacing(1) },
  text_field: {
    margin: theme.spacing(1),
  },
  signin_text: {
    margin: theme.spacing(1),
  },
}));

function SignUpScreen() {
  const [signUpStatus, setSignUpStatus] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyles();

  const handleOnChange = (e) => {
    e.target.name === "username"
      ? setUsername(e.target.value)
      : setPassword(e.target.value);
  };

  useEffect(() => {
    const documentData = JSON.parse(localStorage.getItem("document"));

    if (localStorage.getItem("document")) {
      setUsername(documentData.username);
      setPassword(documentData.password);
    } else {
      setUsername("");
      setPassword("");
    }
  }, []);

  return (
    <>
      {!signUpStatus ? (
        <Grid>
          <Paper elevation={10} className={classes.paperStyle}>
            <Grid align="center">
              {/* <Avatar className={classes.avatarStyle}>
            <LockOutlinedIcon />
          </Avatar> */}
              <h2>Sign Up</h2>
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
              label="Email"
              placeholder="Enter email"
              type="email"
              fullWidth
              required
              className={classes.text_field}
              name={"email"}
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
              onClick={(e) => {
                setSignUpStatus(true);
                e.preventDefault();
                localStorage.setItem(
                  "document",
                  JSON.stringify({ username, password })
                );
              }}
            >
              Sign Up
            </Button>

            <Typography className={classes.signin_text}>
              {" "}
              Do you already have an account ?<Link href="#">Sign In</Link>
            </Typography>
          </Paper>
        </Grid>
      ) : (
        <LoginScreen />
      )}
    </>
  );
}

export default SignUpScreen;
