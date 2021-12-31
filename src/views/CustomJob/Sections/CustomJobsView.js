import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
//import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

//import Slider from "react-slick";
//import Parallax from "components/Parallax/Parallax.js";

// @material-ui/icons

// core components
//import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
//import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
//import CardFooter from "components/Card/CardFooter.js";
//import Paginations from "components/Pagination/Pagination.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import GridContainer from "components/Grid/GridContainer";

//import team1 from "assets/img/faces/avatar.jpg";
import team1 from "assets/img/faces/christian.jpg";
import team2 from "assets/img/faces/face1.jpg";
import team3 from "assets/img/faces/face2.jpg";
import team4 from "assets/img/faces/face3.jpg";
import team5 from "assets/img/faces/face5.jpg";
import team6 from "assets/img/faces/face6.jpg";
//import { Divider } from "@mui/material";

import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";

//import CustomInput from "components/CustomInput/CustomInput.js";

// @material-ui/icons

import Close from "@material-ui/icons/Close";

//import team3 from "assets/img/faces/kendall.jpg";
//import { cardTitle } from "assets/jss/material-kit-react";

const useStyles = makeStyles(styles);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

const currencies = [
  {
    value: "Lahore",
  },
  {
    value: "Sukkur",
  },
  {
    value: "Multan",
  },
];

export default function CustomJobsView() {
  const [currency, setCurrency] = React.useState("None");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const classes = useStyles();
  const [classicModal, setClassicModal] = React.useState(false);
  //   const settings = {
  //     dots: true,
  //     color: "black",
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     autoplay: false,
  //   };
  const imageClasses = classNames(classes.imgCard);
  //const cardClasses = classNames(classes.cardTitle, classes.cardMargin);
  return (
    <div className={classes.section}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
          <Card carousel>
            <img src={team1} alt="..." className={imageClasses} />
            <CardBody>
              <h4 className={classes.cardTitle}>M.Wadood</h4>
              <p className={classes.description}>I can do plumbing well!</p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card carousel>
            <img src={team2} alt="..." className={imageClasses} />
            <CardBody>
              <h4 className={classes.cardTitle}>M.Wadood</h4>
              <p className={classes.description}>I can do plumbing well!</p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card carousel>
            <img src={team3} alt="..." className={imageClasses} />
            <CardBody>
              <h4 className={classes.cardTitle}>M.Wadood</h4>
              <p className={classes.description}>I can do plumbing well!</p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card carousel>
            <img src={team4} alt="..." className={imageClasses} />
            <CardBody>
              <h4 className={classes.cardTitle}>M.Wadood</h4>
              <p className={classes.description}>I can do plumbing well!</p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card carousel>
            <img src={team6} alt="..." className={imageClasses} />
            <CardBody>
              <h4 className={classes.cardTitle}>M.Wadood</h4>
              <p className={classes.description}>I can do plumbing well!</p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card carousel>
            <img src={team5} alt="..." className={imageClasses} />
            <CardBody>
              <h4 className={classes.cardTitle}>M.Wadood</h4>
              <p className={classes.description}>I can do plumbing well!</p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6} lg={2}>
          <Button
            justify="center"
            color="black"
            block
            onClick={() => setClassicModal(true)}
            className={classes.button}
          >
            Post a new job
          </Button>{" "}
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
              <h4 className={classes.modalTitle}>Custom Job Post</h4>
            </DialogTitle>
            <DialogContent
              id="classic-modal-slide-description"
              className={classes.modalBody}
            >
              <form className={classes.form}>
                <GridContainer>
                  <GridItem>
                    <TextField
                      margin="normal"
                      fullWidth
                      multiline
                      rows={5}
                      textarea
                      id="desc"
                      label="Job Description"
                    />
                  </GridItem>

                  <GridItem xs={6} sm={6} md={7}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="address"
                      label="Address"
                      variant="standard"
                    />
                  </GridItem>
                  <GridItem xs={6} sm={6} md={5}>
                    <TextField
                      fullWidth
                      variant="standard"
                      id="outlined-select-currency"
                      select
                      margin="normal"
                      label=" "
                      value={currency}
                      onChange={handleChange}
                      helperText="Choose a city"
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.value}
                        </MenuItem>
                      ))}
                    </TextField>
                  </GridItem>
                  <GridItem>
                    <TextField
                      required
                      fullWidth
                      variant="standard"
                      id="outlined-select-currency"
                      select
                      margin="normal"
                      label="Select"
                      value={currency}
                      onChange={handleChange}
                      helperText="Choose a category"
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.value}
                        </MenuItem>
                      ))}
                    </TextField>
                  </GridItem>
                </GridContainer>
              </form>
            </DialogContent>
            <DialogActions className={classes.modalFooter}>
              <Button
                size="sm"
                onClick={() => setClassicModal(false)}
                color="green"
              >
                Submit
              </Button>

              <Button
                color="black"
                size="sm"
                onClick={() => setClassicModal(false)}
              >
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </GridItem>
      </GridContainer>

      {/* </Slider> */}
    </div>
  );
}
