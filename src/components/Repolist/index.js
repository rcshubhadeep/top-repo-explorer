import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import TextField from "@material-ui/core/TextField";
import "whatwg-fetch";
import Demo from "./Cards";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

class CenteredGrid extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      language: "Python",
      rps: []
    };

    fetch(
      "https://api.github.com/search/repositories?q=language:" +
        this.state.language +
        "&sort=stars&order=desc"
    )
      .then(response => response.json())
      .then(json => this.setState({ rps: json["items"] }));
  }

  handleChange = name => event => {
    if (event.keyCode == 13) {
      event.preventDefault();
      event.target.focus = false; // Does not work
      fetch(
        "https://api.github.com/search/repositories?q=language:" +
          event.target.value +
          "&sort=stars&order=desc"
      )
        .then(response => response.json())
        .then(json => this.setState({ rps: json["items"] }));
    } else {
      this.setState({
        [name]: event.target.value
      });
    }
  };

  render() {
    let nums = Array.from(Array(40).keys());
    return (
      <div className={styles.root}>
        <GridList cols={3} styles={{ marginBottom: 10, paddingTop: "20" }}>
          {this.state.rps.map(todos => {
            return (
              <GridListTile key={todos.html_url}>
                <Demo key={todos.html_url} item={todos} />
              </GridListTile>
            );
          })}
        </GridList>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={styles.control}>
              <Grid container>
                <Grid item>
                  <TextField
                    id="outlined-bare"
                    className={styles.textField}
                    value={this.state.language}
                    margin="normal"
                    variant="outlined"
                    onKeyDown={this.handleChange("language")}
                    onChange={this.handleChange("language")}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default CenteredGrid;
