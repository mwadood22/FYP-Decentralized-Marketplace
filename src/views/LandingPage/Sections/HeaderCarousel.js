import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";

import Button from "components/CustomButtons/Button.js";
import Search from "@material-ui/icons/Search";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={10} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    <div className={classes.container}>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                          <h1 className={classes.title}>
                            Your tasking Partner
                          </h1>
                          <h4>
                            Making your daily live{"'"}s tasks easier by
                            providing assistance all that you need. This change
                            is committed.
                          </h4>

                          <div>
                            <CustomInput
                              white
                              inputProps={{
                                placeholder: "Search",
                                inputProps: {
                                  "aria-label": "Search",
                                  className: classes.searchInput,
                                },
                              }}
                            />
                            <Button
                              justIcon
                              round
                              color="white"
                              className={classes.searchBtn}
                            >
                              <Search className={classes.searchIcon} />
                            </Button>
                          </div>
                          <div className={classes.getStarted}>
                            <Button
                              color="danger"
                              size="lg"
                              href="/signup-page"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fas fa-check" />
                              Get Started
                            </Button>
                          </div>
                        </GridItem>
                      </GridContainer>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src={image2}
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Somewhere Beyond, United States
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image3} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Yellowstone National Park, United States
                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
