import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

// import Button from "components/CustomButtons/Button.js";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import styles from "assets/jss/material-kit-react/views/findJobsPage.js";

// import image from "assets/img/bg7.jpg";
// import helper from "assets/img/services/helper.jpg";

const useStyles = makeStyles(styles);

export default function FindJobs(props) {
  //   const [currency, setCurrency] = React.useState("None");

  //   const handleChange = (event) => {
  //     setCurrency(event.target.value);
  //   };

  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        absolute
        color="black"
        brand="MARKAZ"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div className={classes.pageHeader}>
        <div className={classes.container}>
          <List>
            <div className={classes.newClass}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  secondary={
                    <React.Fragment>
                      <Typography color="text.primary">Ali Connors</Typography>
                      Ill be in your neighborhood doing errands this… Ill be in
                      your neighborhood doing errands this… Ill be in your
                      neighborhood doing errands this… Ill be in your
                      neighborhood doing errands this… Ill be in your
                      neighborhood doing errands this… Ill be in your
                      neighborhood doing errands this… Ill be in your
                      neighborhood doing errands this… Ill be in your
                      neighborhood doing errands this… Ill be in your
                      neighborhood doing errands this… Ill be in your
                      neighborhood doing errands this… Ill be in your
                    </React.Fragment>
                  }
                />
                <ListItemButton>
                  Bid
                  {/* <Button
                    color="black"
                    size="md"
                    href="/signup-page"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.searchBtn}
                  >
                    <i className="fas fa-check" />
                    Bid
                  </Button> */}
                </ListItemButton>
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                </ListItemAvatar>
                <ListItemText
                  secondary={
                    <React.Fragment>
                      <Typography color="text.primary">
                        to Scott, Alex, Jennifer
                      </Typography>
                      {" — Wish I could come, but I'm out of town this…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </ListItemAvatar>
                <ListItemText
                  secondary={
                    <React.Fragment>
                      <Typography color="text.primary">Sandra Adams</Typography>
                      {" — Do you have Paris recommendations? Have you ever…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />

              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  secondary={
                    <React.Fragment>
                      <Typography color="text.primary">Ali Connors</Typography>
                      {"I'll be in your neighborhood doing errands this…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                </ListItemAvatar>
                <ListItemText
                  secondary={
                    <React.Fragment>
                      <Typography color="text.primary">
                        to Scott, Alex, Jennifer
                      </Typography>
                      {" — Wish I could come, but I'm out of town this…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </ListItemAvatar>
                <ListItemText
                  secondary={
                    <React.Fragment>
                      <Typography color="text.primary">Sandra Adams</Typography>
                      {" — Do you have Paris recommendations? Have you ever…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
            </div>
          </List>
        </div>
      </div>
    </div>
  );
}
