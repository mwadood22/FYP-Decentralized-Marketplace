import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
//import Face from "@material-ui/icons/Face";
//import Chat from "@material-ui/icons/Chat";
//import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";
//import GuideView2 from "views/GuidePage/Sections/GuideView2.js";

const useStyles = makeStyles(styles);

export default function GuideView() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div id="nav-tabs">
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <CustomTabs
              plainTabs
              headerColor="danger"
              tabs={[
                {
                  tabName: "Updates",
                  tabContent: (
                    <p>
                      I think thats a responsibility that I have, to push
                      possibilities, to show people, this is the level that
                      things could be at. I will be the leader of a company that
                      ends up being worth billions of dollars, because I got the
                      answers. I understand culture. I am the nucleus. I think
                      thats a responsibility that I have, to push possibilities,
                      to show people, this is the level that things could be at.
                    </p>
                  ),
                },
                {
                  tabName: "Updates",
                  tabContent: (
                    <p className={classes.textCenter}>
                      I think thats a responsibility that I have, to push
                      possibilities, to show people, this is the level that
                      things could be at. I will be the leader of a company that
                      ends up being worth billions of dollars, because I got the
                      answers. I understand culture. I am the nucleus. I think
                      thats a responsibility that I have, to push possibilities,
                      to show people, this is the level that things could be at.
                    </p>
                  ),
                },
                {
                  tabName: "History",
                  tabContent: (
                    <p className={classes.textCenter}>
                      think thats a responsibility that I have, to push
                      possibilities, to show people, this is the level that
                      things could be at. So when you get something that has the
                      name Kanye West on it, its supposed to be pushing the
                      furthest possibilities. I will be the leader of a company
                      that ends up being worth billions of dollars, because I
                      got the answers. I understand culture. I am the nucleus.
                    </p>
                  ),
                },
              ]}
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
