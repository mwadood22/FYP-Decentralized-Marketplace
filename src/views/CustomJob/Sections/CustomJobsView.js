import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components

import Button from "components/CustomButtons/Button.js";

import Card from "components/Card/Card.js";
// import CardBody from "components/Card/CardBody.js";
// import Divider from "@mui/material/Divider";
// import ListItemButton from "@mui/material/ListItemButton";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import styles from "assets/jss/material-kit-react/views/customJobs.js";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

//import IconButton from "@material-ui/core/IconButton";
//import Close from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import { ListItemSecondaryAction } from "@material-ui/core";
//import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { Link } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
//import ListItemIcon from "@mui/material/ListItemIcon";
//import Divider from "@mui/material/Divider";
//import InboxIcon from "@mui/icons-material/Inbox";
//import DraftsIcon from "@mui/icons-material/Drafts";

// import SearchBar from "";

// import image from "assets/img/bg7.jpg";
// import helper from "assets/img/services/helper.jpg";
import team1 from "assets/img/faces/test1.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/test3.jpg";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export default function FindJobs() {
  const classes = useStyles();
  const [classicModal, setClassicModal] = React.useState(false);

  return (
    <div>
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
                  <Typography className={classes.heading} color="text.primary">
                    Ali Connors
                  </Typography>
                  Ill be in your neighborhood doing errands this… Ill be in your
                  neighborhood doing errands this… Ill be in your neighborhood
                  doing errands this… Ill be in your neighborhood doing errands
                  this… Ill be in your neighborhood doing errands this… Ill be
                  in your neighborhood doing errands this… Ill be in your
                  neighborhood doing errands this… Ill be in your neighborhood
                  doing errands this… Ill be in your neighborhood doing errands
                  this… Ill be in your neighborhood doing errands this… Ill be
                  in your Ill be in your neighborhood doing errands this… Ill be
                  in your neighborhood doing errands this… Ill be in your
                  neighborhood doing errands this… Ill be in your.
                  <br /> <br />
                  <strong>Max bid: $45</strong>
                  <hr />
                  <Button
                    color="green"
                    size="md"
                    //rel="noopener noreferrer"
                    onClick={() => setClassicModal(true)}
                    className={classes.jobBtn}
                  >
                    <i className="fas fa-dollar-sign" />
                    View Bids
                  </Button>
                  <Dialog
                    classes={{
                      root: classes.center,
                      paper: classes.modal,
                    }}
                    open={classicModal}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={() => setClassicModal(false)}
                    aria-labelledby="classic-modal-slide-title"
                    aria-describedby="classic-modal-slide-description"
                  >
                    <DialogTitle
                    //id="classic-modal-slide-title"
                    //disableTypography
                    //className={classes.modalHeader}
                    >
                      {/*<IconButton
                        className={classes.modalCloseButton}
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        onClick={() => setClassicModal(false)}
                      >
                        <Close className={classes.modalClose} />
                      </IconButton>
                      <h4 className={classes.modalTitle}>Bids for the job</h4>*/}
                    </DialogTitle>
                    <DialogContent
                      id="classic-modal-slide-description"
                      className={classes.modalBody}
                    >
                      {/*<Box
                        sx={{
                          width: "100%",
                          maxWidth: 360,
                          bgcolor: "background.paper",
                        }}
                      >*/}

                      <List
                        sx={{
                          width: "100%",
                          maxWidth: 500,
                          bgcolor: "background.paper",
                          position: "relative",
                          overflow: "auto",
                          maxHeight: 400,
                          "& ul": { padding: 0 },
                        }}
                      >
                        <GridContainer>
                          <ListItem
                            button
                            component={Link}
                            to="/gig2"
                            disablePadding
                          >
                            <GridItem xs={12} sm={12} md={8}>
                              <ListItemButton>
                                <ListItemAvatar>
                                  <Avatar alt="Remy Sharp" src={team1} />
                                </ListItemAvatar>
                                <ListItemText
                                  //className={classes.bidlist}
                                  primary="Ali Ahmad"
                                />
                              </ListItemButton>
                            </GridItem>

                            <GridItem xs={12} sm={12} md={4}>
                              <ListItemText primary="Bid: 45$" />
                            </GridItem>
                          </ListItem>

                          <ListItem
                            button
                            component={Link}
                            to="/gig2"
                            disablePadding
                          >
                            <GridItem xs={12} sm={12} md={8}>
                              <ListItemButton>
                                <ListItemAvatar>
                                  <Avatar alt="Remy Sharp" src={team2} />
                                </ListItemAvatar>
                                <ListItemText
                                  //className={classes.bidlist}
                                  primary="Musa Bhatti"
                                />
                              </ListItemButton>
                            </GridItem>

                            <GridItem xs={12} sm={12} md={4}>
                              <ListItemText primary="Bid: 40$" />
                            </GridItem>
                          </ListItem>

                          <ListItem
                            button
                            component={Link}
                            to="/gig2"
                            disablePadding
                          >
                            <GridItem xs={12} sm={12} md={8}>
                              <ListItemButton>
                                <ListItemAvatar>
                                  <Avatar alt="Remy Sharp" src={team3} />
                                </ListItemAvatar>
                                <ListItemText
                                  //className={classes.bidlist}
                                  primary="Aamna Sikandar"
                                />
                              </ListItemButton>
                            </GridItem>

                            <GridItem xs={12} sm={12} md={4}>
                              <ListItemText primary="Bid: 40$" />
                            </GridItem>
                          </ListItem>

                          <ListItem
                            button
                            component={Link}
                            to="/gig2"
                            disablePadding
                          >
                            <GridItem xs={12} sm={12} md={8}>
                              <ListItemButton>
                                <ListItemAvatar>
                                  <Avatar alt="Remy Sharp" src={team1} />
                                </ListItemAvatar>
                                <ListItemText
                                  className={classes.bidlist}
                                  primary="Wadood ul Haq"
                                />
                              </ListItemButton>
                            </GridItem>

                            <GridItem xs={12} sm={12} md={4}>
                              <ListItemText primary="Bid: 30$" />
                            </GridItem>
                          </ListItem>

                          <ListItem
                            button
                            component={Link}
                            to="/gig2"
                            disablePadding
                          >
                            <GridItem xs={12} sm={12} md={8}>
                              <ListItemButton>
                                <ListItemAvatar>
                                  <Avatar alt="Remy Sharp" src={team2} />
                                </ListItemAvatar>
                                <ListItemText
                                  className={classes.bidlist}
                                  primary="AbdulRehman Huzaifa"
                                />
                              </ListItemButton>
                            </GridItem>

                            <GridItem xs={12} sm={12} md={4}>
                              <ListItemText primary="Bid: 50$" />
                            </GridItem>
                          </ListItem>

                          <ListItem
                            button
                            component={Link}
                            to="/gig2"
                            disablePadding
                          >
                            <GridItem xs={12} sm={12} md={8}>
                              <ListItemButton>
                                <ListItemAvatar>
                                  <Avatar alt="Remy Sharp" src={team3} />
                                </ListItemAvatar>
                                <ListItemText
                                  className={classes.bidlist}
                                  primary="Arooj Sikandar"
                                />
                              </ListItemButton>
                            </GridItem>

                            <GridItem xs={12} sm={12} md={4}>
                              <ListItemText primary="Bid: 55$" />
                            </GridItem>
                          </ListItem>

                          <ListItem
                            button
                            component={Link}
                            to="/gig2"
                            disablePadding
                          >
                            <GridItem xs={12} sm={12} md={8}>
                              <ListItemButton>
                                <ListItemAvatar>
                                  <Avatar alt="Remy Sharp" src={team3} />
                                </ListItemAvatar>
                                <ListItemText
                                  className={classes.bidlist}
                                  primary="Arooj Sikandar"
                                />
                              </ListItemButton>
                            </GridItem>

                            <GridItem xs={12} sm={12} md={4}>
                              <ListItemText primary="Bid: 55$" />
                            </GridItem>
                          </ListItem>

                          <ListItem
                            button
                            component={Link}
                            to="/gig2"
                            disablePadding
                          >
                            <GridItem xs={12} sm={12} md={8}>
                              <ListItemButton>
                                <ListItemAvatar>
                                  <Avatar alt="Remy Sharp" src={team3} />
                                </ListItemAvatar>
                                <ListItemText
                                  className={classes.bidlist}
                                  primary="Arooj Sikandar"
                                />
                              </ListItemButton>
                            </GridItem>

                            <GridItem xs={12} sm={12} md={4}>
                              <ListItemText primary="Bid: 55$" />
                            </GridItem>
                          </ListItem>
                        </GridContainer>
                      </List>

                      {/*</Box>*/}
                    </DialogContent>
                    <DialogActions className={classes.modalFooter}>
                      <Button
                        onClick={() => setClassicModal(false)}
                        color="black"
                        size="small"
                      >
                        Close
                      </Button>
                    </DialogActions>
                  </Dialog>
                </React.Fragment>
              }
            />
          </Card>
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
                  <Typography className={classes.heading} color="text.primary">
                    to Scott, Alex, Jennifer
                  </Typography>
                  Ill be in your neighborhood doing errands this… Ill be in your
                  neighborhood doing errands this… Ill be in your neighborhood
                  doing errands this… Ill be in your neighborhood doing errands
                  this… Ill be in your neighborhood doing errands this… Ill be
                  in your neighborhood doing errands this… Ill be in your
                  neighborhood doing errands this… Ill be in your neighborhood
                  doing errands this… Ill be in your neighborhood doing errands
                  this… Ill be in your neighborhood doing errands this… Ill be
                  in your Ill be in your neighborhood doing errands this… Ill be
                  in your neighborhood doing errands this… Ill be in your
                  neighborhood doing errands this… Ill be in your.
                  <br /> <br />
                  <strong>Max bid: $45</strong>
                  <hr />
                  <Button
                    color="green"
                    size="md"
                    //rel="noopener noreferrer"
                    onClick={() => setClassicModal(true)}
                    className={classes.jobBtn}
                  >
                    <i className="fas fa-dollar-sign" />
                    View Bids
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
                  <Typography className={classes.heading} color="text.primary">
                    Sandra Adams
                  </Typography>
                  Ill be in your neighborhood doing errands this… Ill be in your
                  neighborhood doing errands this… Ill be in your neighborhood
                  doing errands this… Ill be in your neighborhood doing errands
                  this… Ill be in your neighborhood doing errands this… Ill be
                  in your neighborhood doing errands this… Ill be in your
                  neighborhood doing errands this… Ill be in your neighborhood
                  doing errands this… Ill be in your neighborhood doing errands
                  this… Ill be in your neighborhood doing errands this… Ill be
                  in your Ill be in your neighborhood doing errands this… Ill be
                  in your neighborhood doing errands this… Ill be in your
                  neighborhood doing errands this… Ill be in your.
                  <br /> <br />
                  <strong>Max bid: $45</strong>
                  <hr />
                  <Button
                    color="green"
                    size="md"
                    //rel="noopener noreferrer"
                    onClick={() => setClassicModal(true)}
                    className={classes.jobBtn}
                  >
                    <i className="fas fa-dollar-sign" />
                    View Bids
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
                  <Typography className={classes.heading} color="text.primary">
                    Ali Connors
                  </Typography>
                  Ill be in your neighborhood doing errands this… Ill be in your
                  neighborhood doing errands this… Ill be in your neighborhood
                  doing errands this… Ill be in your neighborhood doing errands
                  this… Ill be in your neighborhood doing errands this… Ill be
                  in your neighborhood doing errands this… Ill be in your
                  neighborhood doing errands this… Ill be in your neighborhood
                  doing errands this… Ill be in your neighborhood doing errands
                  this… Ill be in your neighborhood doing errands this… Ill be
                  in your Ill be in your neighborhood doing errands this… Ill be
                  in your neighborhood doing errands this… Ill be in your
                  neighborhood doing errands this… Ill be in your.
                  <br /> <br />
                  <strong>Max bid: $45</strong>
                  <hr />
                  <Button
                    color="green"
                    size="md"
                    //rel="noopener noreferrer"
                    onClick={() => setClassicModal(true)}
                    className={classes.jobBtn}
                  >
                    <i className="fas fa-dollar-sign" />
                    View Bids
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
                  <Typography className={classes.heading} color="text.primary">
                    to Scott, Alex, Jennifer
                  </Typography>
                  Ill be in your neighborhood doing errands this… Ill be in your
                  neighborhood doing errands this… Ill be in your neighborhood
                  doing errands this… Ill be in your neighborhood doing errands
                  this… Ill be in your neighborhood doing errands this… Ill be
                  in your neighborhood doing errands this… Ill be in your
                  neighborhood doing errands this… Ill be in your neighborhood
                  doing errands this… Ill be in your neighborhood doing errands
                  this… Ill be in your neighborhood doing errands this… Ill be
                  in your Ill be in your neighborhood doing errands this… Ill be
                  in your neighborhood doing errands this… Ill be in your
                  neighborhood doing errands this… Ill be in your.
                  <br /> <br />
                  <strong>Max bid: $45</strong>
                  <hr />
                  <Button
                    color="green"
                    size="md"
                    //rel="noopener noreferrer"
                    onClick={() => setClassicModal(true)}
                    className={classes.jobBtn}
                  >
                    <i className="fas fa-dollar-sign" />
                    View Bids
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
                  <Typography className={classes.heading} color="text.primary">
                    Sandra Adams
                  </Typography>
                  Ill be in your neighborhood doing errands this… Ill be in your
                  neighborhood doing errands this… Ill be in your neighborhood
                  doing errands this… Ill be in your neighborhood doing errands
                  this… Ill be in your neighborhood doing errands this… Ill be
                  in your neighborhood doing errands this… Ill be in your
                  neighborhood doing errands this… Ill be in your neighborhood
                  doing errands this… Ill be in your neighborhood doing errands
                  this… Ill be in your neighborhood doing errands this… Ill be
                  in your Ill be in your neighborhood doing errands this… Ill be
                  in your neighborhood doing errands this… Ill be in your
                  neighborhood doing errands this… Ill be in your.
                  <br /> <br />
                  <strong>Max bid: $45</strong>
                  <hr />
                  <Button
                    color="green"
                    size="md"
                    //rel="noopener noreferrer"
                    onClick={() => setClassicModal(true)}
                    className={classes.jobBtn}
                  >
                    <i className="fas fa-dollar-sign" />
                    View Bids
                  </Button>
                </React.Fragment>
              }
            />
          </Card>
        </ListItem>
        {/* </div> */}
      </List>
    </div>
  );
}
