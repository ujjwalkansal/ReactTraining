import React, { useState } from "react";
// import Home from "./modules/home";
// import MainContainer from "./modules/Assignment1/MainContainer";
// import MainContainer from "./modules/Assignment2/MainContainer";
// import MainContainer from "./modules/DogecoinPage/MainContainer";
// import MainContainer from "./modules/Assignment3/MainContainer";
// import { BrowserRouter } from "react-router-dom";
import LoginScreen from "./modules/Assignment5/LoginScreen";
import SignUpScreen from "./modules/Assignment5/SignUpScreen";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

function App() {
  const [loginState, setLoginState] = useState(false);
  const [signUpState, setSignUpState] = useState(false);

  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
    main_div: {
      // spacing: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center",
    },
  }));

  function MainContainer() {
    const classes = useStyles();
    return (
      <div className={classes.main_div}>
        <h1>{"ReactJS State and Props Example"}</h1>
        <div>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => {
              setLoginState(true);
            }}
          >
            Sign-In
          </Button>

          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => {
              setSignUpState(true);
            }}
          >
            Sign-Up
          </Button>
        </div>
      </div>
    );
  }

  console.log(loginState, signUpState);
  return (
    <div>
      {!loginState && !signUpState} ?
      <MainContainer />:
      {loginState ? <LoginScreen /> : signUpState ? <SignUpScreen /> : null}
    </div>
  );
}

export default App;
