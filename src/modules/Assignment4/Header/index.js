import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Switch, FormGroup, FormControlLabel } from "@material-ui/core";
import FingerprintIcon from "@material-ui/icons/Fingerprint";

const useStyles = makeStyles((theme) => ({
  header_div: {
    position: "fixed",
    marginRight: "0px",
    width: "95%",
    marginLeft: "90px",
    // positionLeft: "0px",
    left: "0px",
    backgroundColor: "#ffffff",
  },
  button1: {
    backgroundColor: "darkgreen",
    margin: theme.spacing(1),
  },
  button2: {
    backgroundColor: "darkblue",
    margin: theme.spacing(1),
  },
  switch_btn: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.header_div}>
        <Toolbar>
          <FormGroup className={classes.switch_btn}>
            <FormControlLabel
              control={
                <Switch
                  size="small"
                  checked={true}
                  //   onChange={toggleChecked}
                />
              }
              label="Small"
            />
          </FormGroup>

          <div>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button1}
              startIcon={<AccountCircleIcon />}
            >
              SIGN UP FREE
            </Button>

            <Button
              variant="contained"
              color="secondary"
              className={classes.button2}
              startIcon={<FingerprintIcon />}
            >
              LOG IN
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
