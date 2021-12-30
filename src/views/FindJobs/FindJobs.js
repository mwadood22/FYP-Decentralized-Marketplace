import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import Button from "components/CustomButtons/Button.js";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import Card from "components/Card/Card.js";
// import CardBody from "components/Card/CardBody.js";
// import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
// import ListItemButton from "@mui/material/ListItemButton";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import styles from "assets/jss/material-kit-react/views/findJobsPage.js";
// import { ListItemSecondaryAction } from "@material-ui/core";
import CustomInput from "components/CustomInput/CustomInput.js";
// import SearchBar from "";

// import image from "assets/img/bg7.jpg";
// import helper from "assets/img/services/helper.jpg";
import team1 from "assets/img/faces/test1.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/test3.jpg";

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
          <h2 className={classes.title}>Find Jobs of your interest!</h2>
          <h3 className={classes.desc}>
            Choose from a number of jobs posted from different areas, place your
            bids to get selected.
          </h3>
          <div className={classes.new}>
            <CustomInput
              black
              inputProps={{
                placeholder: "Search",
                inputProps: {
                  "aria-label": "Search",
                  className: classes.searchInput,
                  // underline: false,
                  error: true,
                },
              }}
            />

            <Button color="green" className={classes.searchBtn}>
              <i className="fas fa-search" />
              Search
            </Button>
          </div>
          {/* <SearchBar
            onChange={() => console.log("onChange")}
            onRequestSearch={() => console.log("onRequestSearch")}
            style={{
              margin: "0 auto",
              maxWidth: 800,
            }}
          /> */}
          <List>
            {/* <div className={classes.newClass}> */}
            {/* <div className={classes.jobItem}> */}
            <ListItem alignItems="flex-start">
              <Card className={classes.jobCard}>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={team1} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography className={classes.heading}>
                      <strong>Title: Plumbing</strong>
                    </Typography>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        className={classes.heading}
                        color="text.primary"
                      >
                        Ali Connors
                      </Typography>
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
                      <br /> <br />
                      <strong>Max bid: $45</strong>
                      <hr />
                      <Button
                        color="green"
                        size="md"
                        href="/signup-page"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.jobBtn}
                      >
                        <i className="fas fa-dollar-sign" />
                        Bid
                      </Button>
                      <Button
                        color="green"
                        size="md"
                        href="/signup-page"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.jobBtn}
                      >
                        <i className="fas fa-eye" />
                        View Job
                      </Button>
                    </React.Fragment>
                  }
                />
              </Card>
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
            </ListItem>

            {/* </div> */}
            {/* <div className={classes.newClass}> */}
            {/* <Divider variant="inset" component="li" /> */}
            <ListItem alignItems="flex-start">
              <Card className={classes.jobCard}>
                <ListItemAvatar>
                  <Avatar alt="Travis Howard" src={team2} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography className={classes.heading}>
                      <strong>Title: Plumbing</strong>
                    </Typography>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        className={classes.heading}
                        color="text.primary"
                      >
                        to Scott, Alex, Jennifer
                      </Typography>
                      {" — Wish I could come, but I'm out of town this…"}
                      <br /> <br />
                      <strong>Max bid: $45</strong>
                      <hr />
                      <Button
                        color="green"
                        size="md"
                        href="/signup-page"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.jobBtn}
                      >
                        <i className="fas fa-dollar-sign" />
                        Bid
                      </Button>
                      <Button
                        color="green"
                        size="md"
                        href="/signup-page"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.jobBtn}
                      >
                        <i className="fas fa-eye" />
                        View Job
                      </Button>
                    </React.Fragment>
                  }
                />
              </Card>
            </ListItem>
            {/* <Divider variant="inset" component="li" /> */}
            {/* </div> */}
            {/* <div className={classes.newClass}> */}
            <ListItem alignItems="flex-start">
              <Card className={classes.jobCard}>
                <ListItemAvatar>
                  <Avatar alt="Cindy Baker" src={team3} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography className={classes.heading}>
                      <strong>Title: Plumbing</strong>
                    </Typography>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        className={classes.heading}
                        color="text.primary"
                      >
                        Sandra Adams
                      </Typography>
                      {" — Do you have Paris recommendations? Have you ever…"}
                      <br /> <br />
                      <strong>Max bid: $45</strong>
                      <hr />
                      <Button
                        color="green"
                        size="md"
                        href="/signup-page"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.jobBtn}
                      >
                        <i className="fas fa-dollar-sign" />
                        Bid
                      </Button>
                      <Button
                        color="green"
                        size="md"
                        href="/signup-page"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.jobBtn}
                      >
                        <i className="fas fa-eye" />
                        View Job
                      </Button>
                    </React.Fragment>
                  }
                />
              </Card>
            </ListItem>
            {/* <Divider variant="inset" component="li" /> */}
            {/* </div> */}
            {/* <div className={classes.newClass}> */}
            <ListItem alignItems="flex-start">
              <Card className={classes.jobCard}>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={team1} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography className={classes.heading}>
                      <strong>Title: Plumbing</strong>
                    </Typography>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        className={classes.heading}
                        color="text.primary"
                      >
                        Ali Connors
                      </Typography>
                      {"I'll be in your neighborhood doing errands this…"}
                      <br /> <br />
                      <strong>Max bid: $45</strong>
                      <hr />
                      <Button
                        color="green"
                        size="md"
                        href="/signup-page"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.jobBtn}
                      >
                        <i className="fas fa-dollar-sign" />
                        Bid
                      </Button>
                      <Button
                        color="green"
                        size="md"
                        href="/signup-page"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.jobBtn}
                      >
                        <i className="fas fa-eye" />
                        View Job
                      </Button>
                    </React.Fragment>
                  }
                />
              </Card>
            </ListItem>
            {/* <Divider variant="inset" component="li" /> */}
            {/* </div> */}
            {/* <div className={classes.newClass}> */}
            <ListItem alignItems="flex-start">
              <Card className={classes.jobCard}>
                <ListItemAvatar>
                  <Avatar alt="Travis Howard" src={team2} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography className={classes.heading}>
                      <strong>Title: Plumbing</strong>
                    </Typography>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        className={classes.heading}
                        color="text.primary"
                      >
                        to Scott, Alex, Jennifer
                      </Typography>
                      {" — Wish I could come, but I'm out of town this…"}
                      <br /> <br />
                      <strong>Max bid: $45</strong>
                      <hr />
                      <Button
                        color="green"
                        size="md"
                        href="/signup-page"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.jobBtn}
                      >
                        <i className="fas fa-dollar-sign" />
                        Bid
                      </Button>
                      <Button
                        color="green"
                        size="md"
                        href="/signup-page"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.jobBtn}
                      >
                        <i className="fas fa-eye" />
                        View Job
                      </Button>
                    </React.Fragment>
                  }
                />
              </Card>
            </ListItem>
            {/* <Divider variant="inset" component="li" /> */}
            {/* </div> */}
            {/* <div className={classes.newClass}> */}
            <ListItem alignItems="flex-start">
              <Card className={classes.jobCard}>
                <ListItemAvatar>
                  <Avatar alt="Cindy Baker" src={team3} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography className={classes.heading}>
                      <strong>Title: Plumbing</strong>
                    </Typography>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        className={classes.heading}
                        color="text.primary"
                      >
                        Sandra Adams
                      </Typography>
                      {" — Do you have Paris recommendations? Have you ever…"}
                      <br /> <br />
                      <strong>Max bid: $45</strong>
                      <hr />
                      <Button
                        color="green"
                        size="md"
                        href="/signup-page"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.jobBtn}
                      >
                        <i className="fas fa-dollar-sign" />
                        Bid
                      </Button>
                      <Button
                        color="green"
                        size="md"
                        href="/signup-page"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.jobBtn}
                      >
                        <i className="fas fa-eye" />
                        View Job
                      </Button>
                    </React.Fragment>
                  }
                />
              </Card>
            </ListItem>
            {/* </div> */}
          </List>
        </div>
      </div>
    </div>
  );
}
