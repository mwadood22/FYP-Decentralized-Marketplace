import React from "react";
// nodejs library that concatenates classes
//import classNames from "classnames";
//import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slider from "react-slick";
//import Parallax from "components/Parallax/Parallax.js";

// @material-ui/icons

// core components
//import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

//import team1 from "assets/img/faces/avatar.jpg";
//import team2 from "assets/img/faces/christian.jpg";
//import team3 from "assets/img/faces/kendall.jpg";
//import { cardTitle } from "assets/jss/material-kit-react";

const useStyles = makeStyles(styles);

export default function ServicesSection() {
  const classes = useStyles();
  const settings = {
    dots: true,
    color: "black",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
  };
  //const imageClasses = classNames(classes.imgCardTop);
  //const cardClasses = classNames(classes.cardTitle, classes.cardMargin);
  return (
    <div className={classes.section}>
      {/* </Slider> */}
      <h2 className={classes.title}>Choose from services of your choice</h2>
      <Slider {...settings}>
        <div className={classes.marginClass}>
          <GridItem xs={12} sm={12} className={classes.marginAuto}>
            <Card carousel>
              <h4 className={classes.infoCardHeader}>
                AR Huzaifa
                <br />
                <small className={classes.smallTitle}>Model</small>
              </h4>
              <CardBody>
                <div className={classes.container}>
                  <p className={classes.description}>
                    You can write here details about one of your team members.
                    You can give more details about what they do. Feel free to
                    add some <a href="#pablo">links</a> for people to be able to
                    follow them outside the site.
                  </p>
                </div>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  color="info"
                  size="sm"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-search" />
                  View Service
                </Button>
                <Button
                  color="success"
                  size="sm"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-gavel" />
                  Make Bid
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </div>
        <div>
          <GridItem xs={12} sm={12}>
            <Card carousel>
              <h4 className={classes.infoCardHeader}>
                M.Wadood
                <br />
                <small className={classes.smallTitle}>Designer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  color="info"
                  size="sm"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-search" />
                  View Service
                </Button>
                <Button
                  color="success"
                  size="sm"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-gavel" />
                  Make Bid
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </div>
        <div>
          <GridItem xs={12} sm={12}>
            <Card carousel>
              <h4 className={classes.infoCardHeader}>
                Arooj Sikandar
                <br />
                <small className={classes.smallTitle}>Model</small>
              </h4>
              <CardBody className={classes.cardBackground}>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  color="info"
                  size="sm"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-search" />
                  View Service
                </Button>
                <Button
                  color="success"
                  size="sm"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-gavel" />
                  Make Bid
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </div>
        <div>
          <GridItem xs={12} sm={12}>
            <Card carousel>
              <h4 className={classes.infoCardHeader}>
                M.Wadood
                <br />
                <small className={classes.smallTitle}>Designer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  color="info"
                  size="sm"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-search" />
                  View Service
                </Button>
                <Button
                  color="success"
                  size="sm"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-gavel" />
                  Make Bid
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </div>
      </Slider>
      {/* <GridItem xs={12} sm={12} md={4}>
          <Card carousel>
            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
              <img src={team2} alt="..." className={imageClasses} />
            </GridItem>
            <h4 className={classes.cardTitle}>
              M.Wadood
              <br />
              <small className={classes.smallTitle}>Designer</small>
            </h4>
            <CardBody>
              <p className={classes.description}>
                You can write here details about one of your team members. You
                can give more details about what they do. Feel free to add some{" "}
                <a href="#pablo">links</a> for people to be able to follow them
                outside the site.
              </p>
            </CardBody>
            <CardFooter className={classes.justifyCenter}>
              <Button
                color="info"
                size="sm"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-search" />
                View Service
              </Button>
              <Button
                color="success"
                size="sm"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-gavel" />
                Make Bid
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card carousel>
            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
              <img src={team3} alt="..." className={imageClasses} />
            </GridItem>
            <h4 className={classes.cardTitle}>
              Arooj Sikandar
              <br />
              <small className={classes.smallTitle}>Model</small>
            </h4>
            <CardBody>
              <p className={classes.description}>
                You can write here details about one of your team members. You
                can give more details about what they do. Feel free to add some{" "}
                <a href="#pablo">links</a> for people to be able to follow them
                outside the site.
              </p>
            </CardBody>
            <CardFooter className={classes.justifyCenter}>
              <Button
                color="info"
                size="sm"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-search" />
                View Service
              </Button>
              <Button
                color="success"
                size="sm"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-gavel" />
                Make Bid
              </Button>
            </CardFooter>
          </Card>
        </GridItem> */}
      {/* </Slider> */}
    </div>
  );
}
