import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
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
//import Photo from "@material-ui/icons/Photo";

import logo from "assets/img/logo.png";

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useMoralis } from "react-moralis";

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
  const { isAuthenticated, user } = useMoralis();
  var id;
  if (isAuthenticated) {
    id = user.id;
  }
  const [worker, setWorkerData] = useState({
    Name: "",
    picture: "",
    city: "",
    contact: "",
    skills: "",
    about: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const validate = (values) => {
    const errors = {};
    //const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.Name) {
      errors.Name = "Name is required!";
    }

    if (!values.picture) {
      errors.picture = "Picture is required!";
    }

    if (!values.city) {
      errors.city = "City is required";
    }

    if (!values.contact) {
      errors.contact = "Contact is required";
    }

    if (!values.about) {
      errors.about = "About is required";
    } else if (values.about.length > 150) {
      errors.about = "About cannot exceed more than 150 characters";
    }

    return errors;
  };

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    console.log(e);
    setWorkerData({ ...worker, [name]: value });
  };
  const imageUpload = (e) => {
    //console.log(e.target.files[0]);
    setWorkerData({ ...worker, picture: e.target.files[0] });
  };

  const postData = async (e) => {
    e.preventDefault();
    console.log(e.target.value);
    //const { Name, picture, city, contact, skills, about } = worker;
    const user_id = id;
    console.log(id);

    console.log(user_id);

    // const res = await fetch("/worker/create", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     Name,
    //     picture,
    //     city,
    //     contact,
    //     skills,
    //     about,
    //     user_id,
    //   }),
    // });

    setFormErrors(validate(worker));
    setIsSubmit(true);

    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(e.target.value);
      const formdata = new FormData();

      //console.log("==", gig.picture, "===", gig.picture.name);
      console.log("data added");
      formdata.append("picture", worker.picture, worker.picture.name);
      formdata.append("Name", worker.Name);
      formdata.append("city", worker.city);
      formdata.append("contact", worker.contact);
      formdata.append("skills", worker.skills);
      formdata.append("about", worker.about);
      //let url = "/gig/create";
      try {
        const res = await axios.post("/worker/create", formdata);
        // {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     gigTitle,
        //     budget,
        //     category,
        //     gigDescription,
        //   }),
        // });

        // const data = await res.json();

        // if (data.status === 42 || !data) {
        //   window.alert("Invalid registeration");
        //   console.log("Invalid registeration");
        // } else {
        //   console.log(data);
        //   history.push("/gigs-page");
        // }

        if (res.status === 42) {
          window.alert("Invalid registeration");
          console.log("Invalid registeration");
        } else {
          console.log(res);
          history.push("/worker-page");
        }
      } catch (e) {
        window.alert("catch block ");
      }
    }
  };

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
                        id="Name"
                        label="Name"
                        name="Name"
                        value={worker.Name}
                        onChange={handleInputs}
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
                      <span style={{ color: "red" }}>{formErrors.Name}</span>
                    </GridItem>
                    {/* <GridItem xs={6} sm={6} md={6}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="picture"
                        label="picture"
                        name="picture"
                        value={worker.picture}
                        onChange={handleInputs}
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
                      <span style={{ color: "red" }}>{formErrors.picture}</span>
                    </GridItem> */}

                    <GridItem xs={6} sm={6} md={6}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="contact"
                        label="contact"
                        name="contact"
                        value={worker.contact}
                        onChange={handleInputs}
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
                      <span style={{ color: "red" }}>{formErrors.contact}</span>
                    </GridItem>
                    <GridItem xs={6} sm={6} md={6}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="city"
                        label="city"
                        name="city"
                        value={worker.city}
                        onChange={handleInputs}
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
                      <span style={{ color: "red" }}>{formErrors.city}</span>
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
                        id="about"
                        label="tell us about yourself"
                        name="about"
                        value={worker.about}
                        onChange={handleInputs}
                      />
                      <span style={{ color: "red" }}>{formErrors.about}</span>
                    </GridItem>
                    <GridItem>
                      <Button
                        variant="contained"
                        component="label"
                        name="picture"
                        color="green"
                        margin="normal"
                        //fullWidth
                        value={worker.picture}
                        onChange={imageUpload}
                      >
                        Upload Picture
                        <input type="file" hidden />
                      </Button>
                      <span style={{ color: "red" }}>{formErrors.picture}</span>
                    </GridItem>

                    <GridItem>
                      <Button
                        color="black"
                        href={"/worker-dashboard/" + id}
                        onClick={postData}
                      >
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
                <img src={logo} alt="..." />
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
