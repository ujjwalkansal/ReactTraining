import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
// import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    // color: theme.palette.text.secondary,
  },
  container_upper: {
    padding: theme.spacing(5),
  },
  button: {
    width: "50%",
    lineHeight: "1",
    fontWeight: "500",
    margin: "8px 8px 8px 20px",
    height: "50px",
  },
  button_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text_field: {
    width: "50%",
  },
  formControl: {
    margin: theme.spacing(1),
    // minWidth: 120,
    width: "300px",
  },
}));

function InnerContainer() {
  const classes = useStyles();

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className={classes.container_upper}>
      <div>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <div className={classes.button_container}>
                <Button
                  startIcon={<ArrowUpwardIcon />}
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Buy
                </Button>

                <Button
                  startIcon={<ArrowDownwardIcon />}
                  variant="outlined"
                  color="grey"
                  className={classes.button}
                >
                  Sell
                </Button>
              </div>

              <div className={classes.button_container}>
                <div className={classes.text_field}>
                  <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                      id="outlined-basic"
                      label="Outlined"
                      variant="outlined"
                    />
                  </form>
                </div>

                <div className={classes.formControl}>
                  <FormControl variant="outlined">
                    <InputLabel id="demo-simple-select-outlined-label">
                      Age
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={age}
                      onChange={handleChange}
                      label="Age"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=12</Paper>
          </Grid>
        </Grid>

        {/* </Grid> */}
      </div>
    </div>
  );
}

export default InnerContainer;
