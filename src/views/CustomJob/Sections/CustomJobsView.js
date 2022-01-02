import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components

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

import styles from "assets/jss/material-kit-react/views/customJobs.js";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
// import { ListItemSecondaryAction } from "@material-ui/core";

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
                      id="classic-modal-slide-title"
                      disableTypography
                      className={classes.modalHeader}
                    >
                      <IconButton
                        className={classes.modalCloseButton}
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        onClick={() => setClassicModal(false)}
                      >
                        <Close className={classes.modalClose} />
                      </IconButton>
                      <h4 className={classes.modalTitle}>Bids</h4>
                    </DialogTitle>
                    <DialogContent
                      id="classic-modal-slide-description"
                      className={classes.modalBody}
                    >
                      <p>
                        small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a \
                      </p>
                    </DialogContent>
                    <DialogActions className={classes.modalFooter}>
                      <Button color="transparent" simple>
                        Nice Button
                      </Button>
                      <Button
                        onClick={() => setClassicModal(false)}
                        color="danger"
                        simple
                      >
                        Close
                      </Button>
                    </DialogActions>
                  </Dialog>
                  <Button
                    color="green"
                    size="md"
                    href="/signup-page"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.jobBtn}
                  >
                    <i className="fas fa-eye" />
                    Start Job
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
                  <Typography className={classes.heading} color="text.primary">
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
                  <Typography className={classes.heading} color="text.primary">
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
                  <Typography className={classes.heading} color="text.primary">
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
                  <Typography className={classes.heading} color="text.primary">
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
                    onClick={() => setClassicModal(true)}
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
                      id="classic-modal-slide-title"
                      disableTypography
                      className={classes.modalHeader}
                    >
                      <IconButton
                        className={classes.modalCloseButton}
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        onClick={() => setClassicModal(false)}
                      >
                        <Close className={classes.modalClose} />
                      </IconButton>
                      <h4 className={classes.modalTitle}>Modal title</h4>
                    </DialogTitle>
                    <DialogContent
                      id="classic-modal-slide-description"
                      className={classes.modalBody}
                    >
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large language ocean. A
                        small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth. Even the all-powerful
                        Pointing has no control about the blind texts it is an
                        almost unorthographic life One day however a small line
                        of blind text by the name of Lorem Ipsum decided to
                        leave for the far World of Grammar.
                      </p>
                    </DialogContent>
                    <DialogActions className={classes.modalFooter}>
                      <Button color="transparent" simple>
                        Nice Button
                      </Button>
                      <Button
                        onClick={() => setClassicModal(false)}
                        color="danger"
                        simple
                      >
                        Close
                      </Button>
                    </DialogActions>
                  </Dialog>
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
                  <Typography className={classes.heading} color="text.primary">
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
  );
}
