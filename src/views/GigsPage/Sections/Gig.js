import React from "react";
// nodejs library that concatenates classes

import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import Icon from "@material-ui/core/Icon";
// @material-ui/icons
// import Email from "@material-ui/icons/Email";
// import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Avatar from "@mui/material/Avatar";
// import Image from "@mui/material/Image";
import team2 from "assets/img/faces/christian.jpg";

// import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import Slider from "react-slick";

//import CardBody from "components/Card/CardBody.js";
// import CardHeader from "components/Card/CardHeader.js";
//import CardFooter from "components/Card/CardFooter.js";
//import CustomInput from "components/CustomInput/CustomInput.js";
// import InputAdornment from "@material-ui/core/InputAdornment";
//import Chip from "@mui/material/Chip";
//import Autocomplete from "@mui/material/Autocomplete";
//import Stack from "@mui/material/Stack";
//import Icon from "@material-ui/core/Icon";
//import Email from "@material-ui/icons/Email";
// import People from "@material-ui/icons/People";
// import LocationCity from "@material-ui/icons/LocationCity";
// import Language from "@material-ui/icons/Language";
// import Edit from "@material-ui/icons/Edit";
// import Photo from "@material-ui/icons/Photo";

// import TextField from "@mui/material/TextField";
// import MenuItem from "@mui/material/MenuItem";
// import Paper from "@mui/material/Paper";

import styles from "assets/jss/material-kit-react/views/gig.js";

// import image from "assets/img/bg7.jpg";
// import helper from "assets/img/services/helper.jpg";

const useStyles = makeStyles(styles);

// const currencies = [
//   {
//     value: "Lahore",
//   },
//   {
//     value: "Sukkur",
//   },
//   {
//     value: "Multan",
//   },
// ];

export default function Gig(props) {
  //   const [currency, setCurrency] = React.useState("None");

  //   const handleChange = (event) => {
  //     setCurrency(event.target.value);
  //   };
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid,
    classes.workerImg
  );
  const settings = {
    dots: false,
    color: "black",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // arrows: "black",
  };

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
          {/* <Paper elevation={3} style={styles.paperContainer}> */}
          <GridContainer xs={12} sm={12} md={8}>
            <GridItem xs={12} sm={12} md={12}>
              <Card className={(classes[cardAnimaton], classes.card)}>
                <form className={classes.form}>
                  {/* <CardHeader color="green" className={classes.cardHeader}>
                    <h4> One step away from becoming a worker !</h4>
                  </CardHeader> */}
                  {/* <p className={classes.divider}></p> */}
                  <GridContainer>
                    <GridItem>
                      <h2>
                        <strong>Title:</strong> Plumbing
                      </h2>
                    </GridItem>

                    <GridItem md={6}>
                      {/* <div className={classes.content}> */}
                      <img
                        alt="Travis Howard"
                        src={team2}
                        className={imageClasses}
                      />
                      {/* <h1 className={classes.name}>Wadood </h1>
                        <i className="fas fa-map-marker" />
                        <p>Lahore</p> */}
                      {/* </h1> */}
                      {/* </div> */}
                    </GridItem>
                    <GridItem md={6}>
                      <h1>Wadood </h1>
                      <h4>
                        <i className="fas fa-map-marker">
                          <span className={classes.data}>Lahore</span>
                        </i>
                      </h4>
                      <h4>
                        <i className="fas fa-mobile-alt">
                          <span className={classes.data}>0333-6655509</span>
                        </i>
                      </h4>
                      <h4>
                        <i className="fas fa-envelope">
                          <span className={classes.data}>
                            muhammadwadoodulhaq@gmail.com
                          </span>
                        </i>
                      </h4>
                    </GridItem>

                    <GridItem xs={6} sm={6} md={12}>
                      <h2>Gig Description</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec suscipit porta ante. Phasellus porttitor, massa
                        volutpat ullamcorper finibus, magna est aliquam erat,
                        quis commodo eros odio in mi. Cras malesuada mollis
                        interdum. Donec eget est neque. Nullam mattis laoreet
                        tincidunt. Etiam non arcu et quam imperdiet rutrum. In
                        dignissim efficitur ante et viverra. Fusce ac nisl id
                        massa fringilla porta. Aenean fermentum tortor a
                        vehicula pretium. Integer bibendum enim sed diam
                        facilisis suscipit. Maecenas finibus augue at lorem
                        pellentesque fermentum. Maecenas at varius diam. Duis
                        rhoncus lorem quis tincidunt vulputate. Sed eu elementum
                        arcu, ac consectetur metus. Nulla blandit eros in
                        aliquet laoreet.
                      </p>
                      <h2>About Worker</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec suscipit porta ante. Phasellus porttitor, massa
                        volutpat ullamcorper finibus, magna est aliquam erat,
                        quis commodo eros odio in mi. Cras malesuada mollis
                        interdum. Donec eget est neque. Nullam mattis laoreet
                        tincidunt. Etiam non arcu et quam imperdiet rutrum. In
                        dignissim efficitur ante et viverra. Fusce ac nisl id
                        massa fringilla porta. Aenean fermentum tortor a
                        vehicula pretium. Integer bibendum enim sed diam
                        facilisis suscipit. Maecenas finibus augue at lorem
                        pellentesque fermentum. Maecenas at varius diam. Duis
                        rhoncus lorem quis tincidunt vulputate. Sed eu elementum
                        arcu, ac consectetur metus. Nulla blandit eros in
                        aliquet laoreet.
                      </p>
                      <h3>Worker reviews</h3>
                      <Slider className={classes.reviews} {...settings}>
                        <div className={classes.sliderContent}>
                          <div className={classes.sliderImg}>
                            <img
                              alt="Travis Howard"
                              src={team2}
                              className={classes.imgFluid}
                            />
                          </div>
                          <div className={classes.sliderText}>
                            <p className={classes.p}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Donec suscipit porta ante. Phasellus
                              porttitor, massa volutpat ullamcorper finibus,
                              magna est aliquam erat, quis commodo eros odio in.
                            </p>
                            <p className={classes.p1}>M.Wadood</p>
                          </div>
                        </div>
                        <div className={classes.sliderContent}>
                          <div className={classes.sliderImg}>
                            <img
                              alt="Travis Howard"
                              src={team2}
                              className={classes.imgFluid}
                            />
                          </div>
                          <div className={classes.sliderText}>
                            <p className={classes.p}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Donec suscipit porta ante. Phasellus
                              porttitor, massa volutpat ullamcorper finibus,
                              magna est aliquam erat, quis commodo eros odio in.
                            </p>
                            <p className={classes.p1}>M.Wadood</p>
                          </div>
                        </div>
                      </Slider>
                    </GridItem>
                  </GridContainer>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
          {/* </Paper> */}
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
