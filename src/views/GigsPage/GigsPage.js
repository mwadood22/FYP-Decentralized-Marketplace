import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Search from "@material-ui/icons/Search";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
//import GridContainer from "components/Grid/GridContainer.js";
//import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
//import Parallax from "components/Parallax/Parallax.js";
import CustomInput from "components/CustomInput/CustomInput.js";
//import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
//import Search from "@material-ui/icons/Search";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
//import ProductSection from "./Sections/ProductSection.js";
//import TeamSection from "./Sections/TeamSection.js";
//import WorkSection from "./Sections/WorkSection.js";
//import ClientSection from "./Sections/ClientSection.js";
import GigView from "views/GigsPage/Sections/GigView.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="black"
        routes={dashboardRoutes}
        brand="MARKAZ"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "black",
        }}
        {...rest}
      />
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
        <Button justIcon round color="white" className={classes.searchBtn}>
          <Search className={classes.searchIcon} />
        </Button>
      </div>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GigView />
          {/* <ProductSection /> */}

          {/* <ClientSection /> */}
          {/* <TeamSection /> */}
          {/* <WorkSection /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
