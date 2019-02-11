import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Icon from "@material-ui/core/Icon";

const styles = {
  card: {
    minWidth: 275
    // borderStyle: "solid",
    // borderColor: "grey",
    // boxShadow:
    //   "rgba(255, 0, 0, 0.117647) 0px 1px 6px, rgba(255, 0, 0, 0.117647) 0px 1px 4px"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  }
};

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <Paper className={styles.control}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            <a href={props.item.html_url}>{props.item.full_name}</a>
          </Typography>
          <div style={{ display: "flex" }}>
            <div>
              <Avatar
                alt={props.item.owner.login}
                src={props.item.owner.avatar_url}
                className={classes.avatar}
              />
            </div>
            <div
              style={{
                textAlign: "center",
                verticalAlign: "bottom",
                padding: 15
              }}
            >
              <Typography variant="title" component="h4">
                {props.item.name}
              </Typography>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <Icon>star</Icon>
            <Typography
              className={classes.pos}
              color="textSecondary"
              style={{ padding: 2 }}
            >
              {props.item.stargazers_count}
            </Typography>
            <Icon style={{ marginLeft: 10 }}>call_split</Icon>
            <Typography
              className={classes.pos}
              color="textSecondary"
              style={{ padding: 2 }}
            >
              {props.item.forks_count}
            </Typography>
            <Icon style={{ marginLeft: 10 }}>report_problem</Icon>
            <Typography
              className={classes.pos}
              color="textSecondary"
              style={{ padding: 2 }}
            >
              {props.item.open_issues_count}
            </Typography>
            <Icon style={{ marginLeft: 10 }}>visibility</Icon>
            <Typography
              className={classes.pos}
              color="textSecondary"
              style={{ padding: 2 }}
            >
              {props.item.watchers}
            </Typography>
          </div>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Paper>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
