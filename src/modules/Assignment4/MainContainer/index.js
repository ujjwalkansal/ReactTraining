// import classes from "*.module.css";
import React from "react";
import Header from "../Header";
import SideNavBar from "../SideNavBar";
import InnerContainer from "../InnerContainer";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main_div: {
    backgroundColor: "#eff0f8;",
    // backgroundColor: "#424242;",
    width: "100%",
    height: "800px",
    zIndex: "0",
  },
  inner_container: {
    padding: "78px 10px 0px 100px",
    boxSizing: "border-box",
  },
}));

function MainContainer() {
  const classes = useStyles();

  return (
    <div className={classes.main_div}>
      <Header />
      <SideNavBar />
      <div className={classes.inner_container}>
        <InnerContainer />
      </div>
    </div>
  );
}

export default MainContainer;
