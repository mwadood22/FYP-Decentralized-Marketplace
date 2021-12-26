import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
//import Chat from "@material-ui/icons/Chat";
//import VerifiedUser from "@material-ui/icons/VerifiedUser";
//import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
//import InfoArea from "components/InfoArea/InfoArea.js";
//import p2 from "assets/img/p2.jpg";
import List from "components/List/List.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle2.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.section2}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={5}>
            <h2 className={classes.title}>
              Making it easy for you to find what you need
            </h2>
            <div className={classes.description + " " + classes.sectionDisc}>
              <List />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
