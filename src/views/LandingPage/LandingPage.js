import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
//import GridContainer from "components/Grid/GridContainer.js";
//import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// import Search from "@material-ui/icons/Search";
import CustomInput from "components/CustomInput/CustomInput.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
//import Parallax from "components/Parallax/Parallax.js";

//import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
//import Search from "@material-ui/icons/Search";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page

//import TeamSection from "./Sections/TeamSection.js";
//import WorkSection from "./Sections/WorkSection.js";
import ClientSection from "./Sections/ClientSection.js";
import ServicesSection from "./Sections/ServicesSection.js";
//import SectionCarousel from "./Sections/SectionCarousel.js";
import HeaderCarousel from "./Sections/HeaderCarousel.js";
import GuidesSection from "./Sections/GuidesSection.js";
import ProductSection1 from "./Sections/ProductSection1.js";
import ProductSection2 from "./Sections/ProductSection2.js";
import ProductSection3 from "./Sections/ProductSection3.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="MARKAZ"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      {/* <Parallax> */}
      <div className={classes.carouselOptions}>
        <h1 className={classes.title}>
          Your tasking Partner
          <h4>
            Making your daily live{"'"}s tasks easier by providing assistance
            all that you need.
          </h4>
        </h1>
        <br />
        <CustomInput
          black
          inputProps={{
            placeholder: "Search for services of your choice...",
            inputProps: {
              "aria-label": "Search",
              className: classes.searchInput,
              underline: "false",
            },
          }}
        />
        {/* <Button justIcon round color="white" className={classes.searchBtn}>
          <Search className={classes.searchIcon} />
        </Button> */}

        <Button
          color="green"
          size="md"
          href="/signup-page"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.searchBtn}
        >
          <i className="fas fa-check" />
          Search
        </Button>
      </div>
      <div className={classes.carouselBack}>
        <HeaderCarousel />
      </div>

      {/* </Parallax> */}
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <ServicesSection />
          <ProductSection1 />
          <ProductSection2 />

          <ClientSection />

          <GuidesSection />
          <ProductSection3 />

          {/* <TeamSection /> */}
          {/* <WorkSection /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
