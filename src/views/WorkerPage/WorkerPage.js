import React from "react";
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

import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
//import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
//import CardFooter from "components/Card/CardFooter.js";
//import CustomInput from "components/CustomInput/CustomInput.js";
import InputAdornment from "@material-ui/core/InputAdornment";
//import Chip from "@mui/material/Chip";
//import Autocomplete from "@mui/material/Autocomplete";
//import Stack from "@mui/material/Stack";
//import Icon from "@material-ui/core/Icon";
//import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import LocationCity from "@material-ui/icons/LocationCity";
import Language from "@material-ui/icons/Language";
import Edit from "@material-ui/icons/Edit";
import Photo from "@material-ui/icons/Photo";

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
// import Paper from "@mui/material/Paper";

import styles from "assets/jss/material-kit-react/views/workerpage.js";

// import image from "assets/img/bg7.jpg";
// import helper from "assets/img/services/helper.jpg";

const useStyles = makeStyles(styles);

const currencies = [
  {
    value: "Lahore",
  },
  {
    value: "Sukkur",
  },
  {
    value: "Multan",
  },
];

export default function WorkerPage(props) {
  const [currency, setCurrency] = React.useState("None");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  // const styles = {
  //   paperContainer: {
  //     //   backgroundImage: `url(${image})`,
  //     backgroundColor: "#F6FFF7",
  //     paddingTop: "50px",
  //     paddingBottom: "50px",
  //     paddingLeft: "20px",
  //   },
  // };
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
          <GridContainer xs={12} sm={12} md={12}>
            <GridItem xs={12} sm={12} md={7}>
              <Card className={(classes[cardAnimaton], classes.card)}>
                <form className={classes.form}>
                  <CardHeader color="green" className={classes.cardHeader}>
                    <h4> One step away from becoming a worker !</h4>
                  </CardHeader>
                  <p className={classes.divider}></p>
                  <GridContainer>
                    <GridItem xs={6} sm={6} md={6}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        InputProps={{
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                        }}
                        variant="standard"
                      />
                    </GridItem>
                    <GridItem xs={6} sm={6} md={6}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="photo"
                        label="Photo"
                        InputProps={{
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Photo className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                        }}
                        variant="standard"
                      />
                    </GridItem>

                    <GridItem xs={6} sm={6} md={6}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="language"
                        label="Language"
                        InputProps={{
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Language className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                        }}
                        variant="standard"
                      />
                    </GridItem>
                    <GridItem xs={6} sm={6} md={6}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="city"
                        label="City"
                        InputProps={{
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <LocationCity
                                className={classes.inputIconsColor}
                              />
                            </InputAdornment>
                          ),
                        }}
                        variant="standard"
                      />
                    </GridItem>
                    <GridItem xs={6} sm={6} md={12}>
                      <TextField
                        //required
                        fullWidth
                        id="outlined-select-currency"
                        select
                        margin="normal"
                        label=" "
                        value={currency}
                        onChange={handleChange}
                        helperText="Enter your skills"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="start">
                              <Edit className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                        }}
                        variant="standard"
                      >
                        {currencies.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.value}
                          </MenuItem>
                        ))}
                      </TextField>
                    </GridItem>
                    <GridItem>
                      <TextField
                        margin="normal"
                        fullWidth
                        required
                        multiline
                        rows={8}
                        textarea
                        id="desc"
                        label="Tell us about yourself"
                      />
                    </GridItem>

                    <GridItem>
                      <Button color="black" href="/landing-page">
                        Get started
                      </Button>
                    </GridItem>
                  </GridContainer>
                </form>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={5}>
              {/* <GridItem xs={12} sm={12} md={12}> */}
              {/* <img
                src={helper}
                alt="..."
                className={
                  classes.imgRounded +
                  " " +
                  classes.imgFluid +
                  " " +
                  classes.imgClass
                }
              /> */}
              <div className={classes.textSection}>
                <h2>MARKAZ</h2>

                <h3>Your Tasking Partner</h3>
              </div>
              {/* </GridItem> */}
            </GridItem>
          </GridContainer>
          {/* </Paper> */}
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
