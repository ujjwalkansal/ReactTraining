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
import Drawer from "@material-ui/core/Drawer";
import { List, ListItem } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles((theme) => ({
  paper: {
    background: "darkblue",
  },
  listItem1: {
    background: "black",
    height: "57px",
  },
  listItemSize: {
    height: "57px",
  },
  white_bg: {
    color: "white",
  },
}));

function SideNavBar() {
  const classes = useStyles();

  return (
    <div>
      <Drawer
        classes={{ paper: classes.paper }}
        variant="permanent"
        anchor="left"
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem button className={classes.listItem1}>
            <ListItemIcon>
              <InboxIcon
                fontSize={"large"}
                // color={"primary"}
                className={classes.white_bg}
              />
            </ListItemIcon>
          </ListItem>
          {["", "", "", "", "", "", "", "", ""].map((text, index) => (
            <ListItem button className={classes.listItemSize}>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <InboxIcon
                    fontSize={"large"}
                    // color={"primary"}
                    className={classes.white_bg}
                  />
                ) : (
                  <MailIcon
                    fontSize={"large"}
                    // color={"primary"}
                    className={classes.white_bg}
                  />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

export default SideNavBar;
