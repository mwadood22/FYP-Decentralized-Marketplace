import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
//import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

//import Slider from "react-slick";
//import Parallax from "components/Parallax/Parallax.js";

// @material-ui/icons

// core components
//import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
//import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
//import Button from "components/CustomButtons/Button.js";
//import CardFooter from "components/Card/CardFooter.js";
//import Paginations from "components/Pagination/Pagination.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/gigViewStyle.js";
import GridContainer from "components/Grid/GridContainer";

//import team1 from "assets/img/faces/avatar.jpg";
import gig1 from "assets/img/gigs/gig1.jpg";
// import gig2 from "assets/img/gigs/gig2.jpg";
import gig3 from "assets/img/gigs/gig3.jpg";
// import gig4 from "assets/img/gigs/gig4.jpg";
// import gig5 from "assets/img/gigs/gig5.jpg";
import gig6 from "assets/img/gigs/gig6.jpg";

//import { Divider } from "@mui/material";

//import IconButton from "@material-ui/core/IconButton";
//import Dialog from "@material-ui/core/Dialog";
//import DialogTitle from "@material-ui/core/DialogTitle";
//import DialogContent from "@material-ui/core/DialogContent";
//import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";

//import CustomInput from "components/CustomInput/CustomInput.js";

// @material-ui/icons

//import TextField from "@mui/material/TextField";
//import MenuItem from "@mui/material/MenuItem";
//import Close from "@material-ui/icons/Close";
{
  /*const currencies = [
  {
    value: "Lahore",
  },
  {
    value: "Sukkur",
  },
  {
    value: "Multan",
  },
];*/
}

//import team3 from "assets/img/faces/kendall.jpg";
//import { cardTitle } from "assets/jss/material-kit-react";

const useStyles = makeStyles(styles);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export default function GigView() {
  //const [currency, setCurrency] = React.useState("None");

  //const handleChange = (event) => {
  //setCurrency(event.target.value);
  //};
  const classes = useStyles();
  //const [classicModal, setClassicModal] = React.useState(false);
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
      {/* </Slider> */}

      <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
          <Card className={classes.card}>
            <Link to="gig">
              <img src={gig1} alt="..." className={imageClasses} />
              <CardBody>
                <h4 className={classes.cardTitle}>M.Wadood</h4>
                <p className={classes.description}>
                  I am your ultimate handyman when it comes to home repairs.
                </p>
              </CardBody>
            </Link>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card className={classes.card} carousel>
            <Link to="gig">
              <img src={gig6} alt="..." className={imageClasses} />
              <CardBody>
                <h4 className={classes.cardTitle}>AbdulRehman Huzaifa</h4>
                <p className={classes.description}>
                  I can do brakes, oil change, tune up love what I do.I can do
                  oil change.
                </p>
              </CardBody>
            </Link>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card className={classes.card} carousel>
            <Link to="gig">
              <img src={gig3} alt="..." className={imageClasses} />
              <CardBody>
                <h4 className={classes.cardTitle}>M.Musa</h4>
                <p className={classes.description}>
                  {" "}
                  I paint, can help a full renovation, and installing devices is
                  a breeze.
                </p>
              </CardBody>
            </Link>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card className={classes.card} carousel>
            <Link to="gig">
              <img src={gig1} alt="..." className={imageClasses} />
              <CardBody>
                <h4 className={classes.cardTitle}>AbdulRehman Huzaifa</h4>
                <p className={classes.description}>
                  I can do brakes, oil change, tune up love what I do.I can do
                  oil change.
                </p>
              </CardBody>
            </Link>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card className={classes.card} carousel>
            <Link to="gig">
              <img src={gig3} alt="..." className={imageClasses} />
              <CardBody>
                <h4 className={classes.cardTitle}>M.Wadood</h4>
                <p className={classes.description}>
                  I am your ultimate handyman when it comes to home repairs.
                </p>
              </CardBody>
            </Link>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card className={classes.card} carousel>
            <Link to="gig">
              <img src={gig6} alt="..." className={imageClasses} />
              <CardBody>
                <h4 className={classes.cardTitle}>M.Wadood</h4>
                <p className={classes.description}>
                  I paint, can help a full renovation, and installing devices is
                  a breeze.
                </p>
              </CardBody>
            </Link>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card className={classes.card} carousel>
            <Link to="gig">
              <img src={gig1} alt="..." className={imageClasses} />
              <CardBody>
                <h4 className={classes.cardTitle}>M.Musa</h4>
                <p className={classes.description}>
                  {" "}
                  I paint, can help a full renovation, and installing devices is
                  a breeze.
                </p>
              </CardBody>
            </Link>
          </Card>
        </GridItem>
      </GridContainer>

      {/* </Slider> */}
    </div>
  );
}
