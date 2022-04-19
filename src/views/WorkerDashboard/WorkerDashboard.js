import React, { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";

// nodejs library that concatenates classes
import classNames from "classnames";
//import { useMoralis } from "react-moralis";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import team1 from "assets/img/faces/test1.jpg";
//import team2 from "assets/img/faces/christian.jpg";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
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
import WorkerHeaderLinks from "components/Header/WorkerHeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Table from "components/Table/Table.js";
import Table2 from "components/Table/Table2.js";
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
import HomeOutlined from "@material-ui/icons/Home";
import City from "@material-ui/icons/LocationCity";
import Skills from "@material-ui/icons/PanToolSharp";

// import BuildIcon from "@mui/icons-material/Build";
// import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
// import Payment from "@material-ui/icons/Payment";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ProfilePage(props) {
  //const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  //setTimeout(function () {
  //  setCardAnimation("");
  //}, 700);

  const { isAuthenticated, user } = useMoralis();
  var idd;
  var workername;
  if (isAuthenticated) {
    idd = user.id;
    workername = user.attributes.username;
  }

  // const handleClick = () => {

  //   setOpen(true);
  // };
  const [open, setOpen] = React.useState(false);

  // const [disable, setDisable] = React.useState(false);
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  //const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  // const [projects, getCurrentProjects] = useState({
  //   workerId: "",
  //   clientId: "",
  //   workerName: "",
  //   clientName: "",
  //   budget: "",
  //   description: "",
  //   status: "",
  // });

  const [offer, getOfferData] = useState({
    offers: [
      {
        _id: "",
        title: "",
        budget: "",
        city: "",
        address: "",
        clientId: "",
        description: "",
        clientName: "",
      },
    ],
  });

  const postProjects = async (budget, description, clientId) => {
    // setOpen(true);
    // e.preventDefault();

    console.log("form valid");
    // const clientId = offer.clientId;
    const workerId = idd;
    const clientName = "falseClient";
    const workerName = workername;
    // const budget = offer.budget;
    // const description = offer.description;
    const status = "Ongoing";
    // const { budget, description } = job;
    const res = await fetch("/projects/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        workerId,
        clientId,
        workerName,
        clientName,
        budget,
        description,
        status,
      }),
    });
    // setDisable((prevState) => [...prevState, id]);
    setOpen(true);

    const data = await res.json();

    if (data.status === 42 || !data) {
      window.alert("Invalid registeration");
      console.log("Invalid registeration");
    } else {
      // console.log(data);
      // history.push("/landing-page");
    }
  };

  const ShowJobOffers = () => {
    const source = new EventSource(`http://localhost:6942/offers/getAll`);

    source.addEventListener("open", () => {
      console.log("SSE opened!");
    });

    source.addEventListener("message", (e) => {
      const data = JSON.parse(e.data);
      console.log(data);
      // console.log(e);
      // console.log("Event called: ", e.data);
      getOfferData(data);
      // const data = JSON.parse(e.data);
    });

    // source.addEventListener("error", (e) => {
    //   console.error("Error: ", e);
    // });

    return () => {
      source.close();
    };
  };

  useEffect(() => {
    ShowJobOffers();
  }, []);

  return (
    <div>
      <Header
        color="transparent"
        brand="MARKAZ"
        rightLinks={<WorkerHeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 100,
          color: "white",
        }}
        {...rest}
      />
      <Parallax className={classes.background}></Parallax>
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
              <GridItem xs={12} sm={12} md={12}>
                <NavPills
                  color="green"
                  horizontal={{
                    tabsGrid: { xs: 12, sm: 2, md: 2 },
                    contentGrid: { xs: 12, sm: 10, md: 10 },
                  }}
                  tabs={[
                    {
                      tabButton: "Details",
                      tabIcon: Person,
                      tabContent: (
                        <div className={classes.profilePill}>
                          <i className="fas fa-envelope"></i>
                          <b className={classes.desc}>Email</b>
                          <p>wadood@gmail.com</p>
                          <hr className={classes.hr} />

                          <i className="fas fa-lock"></i>
                          <b className={classes.desc}>Password</b>
                          <p>1234567$abc</p>
                          <hr className={classes.hr} />

                          <i className="fas fa-home"></i>
                          <b className={classes.desc}>Address</b>
                          <p>Street: 24, Housing Colony</p>
                          <hr className={classes.hr} />

                          <i className="fas fa-map-marker"></i>
                          <b className={classes.desc}>City</b>
                          <p>Islamabad</p>
                          <hr className={classes.hr} />

                          <i className="fas fa-detail"></i>
                          <b className={classes.desc}>My Skills</b>
                          <p>Plumber , Carpenter , Electrician</p>
                          <hr className={classes.hr} />

                          <i className="fas fa-file-alt"></i>
                          <b className={classes.desc}>About Me</b>
                          <p>
                            I am in between work and I have numerous viable
                            skills that I believe can be utilized in the open
                            market place. I am a go getter and one who is not
                            shy to work. If you are looking for someone who
                            enjoys helping others than I am your man. I am in
                            between work and I have numerous viable skills that
                            I believe can be utilized in the open market place.
                          </p>
                          <hr className={classes.hr} />
                        </div>
                      ),
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

                              <CustomInput
                                labelText="Edit Address"
                                id="password"
                                formControlProps={{
                                  fullWidth: true,
                                }}
                                inputProps={{
                                  type: "password",
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <HomeOutlined
                                        className={classes.inputIconsColor}
                                      />
                                    </InputAdornment>
                                  ),
                                  autoComplete: "on",
                                }}
                              />

                              <CustomInput
                                labelText="Edit City"
                                id="password"
                                formControlProps={{
                                  fullWidth: true,
                                }}
                                inputProps={{
                                  type: "password",
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <City
                                        className={classes.inputIconsColor}
                                      />
                                    </InputAdornment>
                                  ),
                                  autoComplete: "on",
                                }}
                              />

                              <CustomInput
                                labelText="Edit Skills"
                                id="skills"
                                formControlProps={{
                                  fullWidth: true,
                                }}
                                inputProps={{
                                  type: "text",
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <Skills
                                        className={classes.inputIconsColor}
                                      />
                                    </InputAdornment>
                                  ),
                                  autoComplete: "on",
                                }}
                              />

                              <CustomInput
                                labelText="Edit About Me"
                                id="password"
                                formControlProps={{
                                  fullWidth: true,
                                }}
                                inputProps={{
                                  type: "password",
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <People
                                        className={classes.inputIconsColor}
                                      />
                                    </InputAdornment>
                                  ),
                                  autoComplete: "on",
                                }}
                              />
                            </CardBody>
                            <CardFooter className={classes.cardFooter}>
                              <Button color="black" href="/profile-page">
                                Submit
                              </Button>
                            </CardFooter>
                          </form>
                        </Card>
                      ),
                    },
                    // {
                    //   tabButton: "Skills",
                    //   tabIcon: BuildIcon,
                    //   tabContent: <p></p>,
                    // },

                    {
                      tabButton: "Job Offers",
                      tabIcon: Schedule,
                      tabContent: (
                        <List>
                          {offer.offers.map((offers, index) => {
                            //const id = `b${index}`;

                            return (
                              <ListItem alignItems="flex-start" key={index}>
                                <Card className={classes.jobCard}>
                                  <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src={team1} />
                                  </ListItemAvatar>
                                  <ListItemText
                                    primary={
                                      <Typography className={classes.heading}>
                                        <strong> {offers.clientName}</strong>
                                      </Typography>
                                    }
                                    secondary={
                                      <React.Fragment>
                                        <br></br>
                                        <Typography
                                          className={classes.heading}
                                          color="text.primary"
                                        >
                                          <strong>
                                            {" "}
                                            Title: {offers.title}
                                          </strong>
                                          {/* Get client name */}
                                        </Typography>
                                        <br></br>
                                        <Typography
                                          className={classes.heading}
                                          color="text.primary"
                                        >
                                          Address: {offers.address}
                                        </Typography>
                                        <Typography
                                          className={classes.heading}
                                          color="text.primary"
                                        >
                                          Budget: {offers.budget}
                                        </Typography>
                                        <Typography
                                          className={classes.heading}
                                          color="text.primary"
                                        >
                                          Detail: {offers.description}
                                        </Typography>
                                        <br /> <br />
                                        <Divider
                                          sx={{ width: 1000, m: 0.5 }}
                                          orientation="horizontal"
                                        />
                                        <Button
                                          color="green"
                                          size="sm"
                                          // href="/signup-page"
                                          // target="_blank"
                                          // disabled={disable}
                                          rel="noopener noreferrer"
                                          className={classes.jobBtn}
                                          // onClick={handleClick}
                                          onClick={() =>
                                            postProjects(
                                              offers.budget,
                                              offers.description,
                                              offers.clientId
                                            )
                                          }
                                        >
                                          <i className="fas fa-dollar-sign" />
                                          Accept
                                        </Button>
                                        <Button
                                          color="danger"
                                          size="sm"
                                          // href="/signup-page"
                                          // target="_blank"
                                          // disabled={disable}
                                          rel="noopener noreferrer"
                                          className={classes.jobBtn}
                                          //onClick={handleClick}
                                        >
                                          <i className="fas fa-dollar-sign" />
                                          Decline
                                        </Button>
                                        <Snackbar
                                          open={open}
                                          autoHideDuration={6000}
                                          onClose={handleClose}
                                        >
                                          <Alert
                                            onClose={handleClose}
                                            severity="success"
                                            sx={{ width: "100%" }}
                                          >
                                            Job Started Successfully!
                                          </Alert>
                                        </Snackbar>
                                      </React.Fragment>
                                    }
                                  />
                                </Card>
                              </ListItem>
                            );
                          })}
                        </List>
                      ),
                    },
                    {
                      tabButton: "Current Projects",
                      tabIcon: Schedule,
                      tabContent: <Table2 />,
                    },

                    {
                      tabButton: "Projects History",
                      tabIcon: Schedule,
                      tabContent: <Table />,
                    },
                    // {
                    //   tabButton: "About Myself",
                    //   tabIcon: EmojiPeopleIcon,
                    //   tabContent: <p></p>,
                    // },

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
