import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
//import Camera from "@material-ui/icons/Camera";
//import Palette from "@material-ui/icons/Palette";
//import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
//import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Table from "components/Table/Table.js";
//import Table2 from "components/Table2/Table2.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/christian.jpg";

import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
//import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";

// import studio1 from "assets/img/examples/studio-1.jpg";
// import studio2 from "assets/img/examples/studio-2.jpg";
// import studio3 from "assets/img/examples/studio-3.jpg";
// import studio4 from "assets/img/examples/studio-4.jpg";
// import studio5 from "assets/img/examples/studio-5.jpg";
// import work1 from "assets/img/examples/olu-eletu.jpg";
// import work2 from "assets/img/examples/clem-onojeghuo.jpg";
// import work3 from "assets/img/examples/cynthia-del-rio.jpg";
// import work4 from "assets/img/examples/mariya-georgieva.jpg";
// import work5 from "assets/img/examples/clem-onojegaw.jpg";
//import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import Edit from "@material-ui/icons/Edit";
import Person from "@material-ui/icons/Person";
// import Payment from "@material-ui/icons/Payment";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  //const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  //setTimeout(function () {
  //  setCardAnimation("");
  //}, 700);
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  //const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  return (
    <div>
      <Header
        color="transparent"
        brand="MARKAZ"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/abc.jpg").default} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>M.Wadood ul Haq</h3>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              <GridItem
                xs={12}
                sm={12}
                md={12}
                // className={classes.contentContainer}
              >
                <NavPills
                  color="primary"
                  horizontal={{
                    tabsGrid: { xs: 12, sm: 2, md: 2 },
                    contentGrid: { xs: 12, sm: 10, md: 10 },
                  }}
                  tabs={[
                    {
                      tabButton: "Profile",
                      tabIcon: Person,
                      tabContent: <p></p>,
                    },
                    {
                      tabButton: "Edit",
                      tabIcon: Edit,
                      tabContent: (
                        <Card className={classes.contentContainer}>
                          <form className={classes.form}>
                            <p className={classes.divider}></p>
                            <CardBody>
                              <CustomInput
                                labelText="Edit Name"
                                id="first"
                                formControlProps={{
                                  fullWidth: true,
                                }}
                                inputProps={{
                                  type: "text",
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <People
                                        className={classes.inputIconsColor}
                                      />
                                    </InputAdornment>
                                  ),
                                }}
                              />
                              <CustomInput
                                labelText="Edit Email"
                                id="email"
                                formControlProps={{
                                  fullWidth: true,
                                }}
                                inputProps={{
                                  type: "email",
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <Email
                                        className={classes.inputIconsColor}
                                      />
                                    </InputAdornment>
                                  ),
                                }}
                              />
                              <CustomInput
                                labelText="Old Password"
                                id="password"
                                formControlProps={{
                                  fullWidth: true,
                                }}
                                inputProps={{
                                  type: "password",
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <Icon className={classes.inputIconsColor}>
                                        lock_outline
                                      </Icon>
                                    </InputAdornment>
                                  ),
                                  autoComplete: "off",
                                }}
                              />
                              <CustomInput
                                labelText="New Password"
                                id="password"
                                formControlProps={{
                                  fullWidth: true,
                                }}
                                inputProps={{
                                  type: "password",
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <Icon className={classes.inputIconsColor}>
                                        lock_outline
                                      </Icon>
                                    </InputAdornment>
                                  ),
                                  autoComplete: "on",
                                }}
                              />
                            </CardBody>
                            <CardFooter className={classes.cardFooter}>
                              <Button color="primary" href="/profile-page">
                                Submit
                              </Button>
                            </CardFooter>
                          </form>
                        </Card>
                      ),
                    },
                    {
                      tabButton: "Projects History",
                      tabIcon: Schedule,
                      tabContent: <Table />,
                    },

                    // {
                    //   tabButton: "Payments",
                    //   tabIcon: Payment,
                    //   tabContent: (
                    //     <span>
                    //       <p>
                    //         Efficiently unleash cross-media information without
                    //         cross-media value. Quickly maximize timely
                    //         deliverables for real-time schemas.
                    //       </p>
                    //       <br />
                    //       <p>
                    //         Dramatically maintain clicks-and-mortar solutions
                    //         without functional solutions. Dramatically visualize
                    //         customer directed convergence without revolutionary
                    //         ROI. Collaboratively administrate empowered markets
                    //         via plug-and-play networks. Dynamically
                    //         procrastinate B2C users after installed base
                    //         benefits.
                    //       </p>
                    //     </span>
                    //   ),
                    // },
                  ]}
                />
              </GridItem>
            </GridContainer>
            {/* <div className={classes.description}>
              <p>
                An artist of considerable range, Chet Faker — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure.{" "}
              </p>
            </div> */}
            {/* <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Studio",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio2}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio5}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio4}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Work",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work5}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Favorite",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer> */}
          </div>
        </div>
      </div>
      <Footer className={classes.profileFooter} />
    </div>
  );
}
