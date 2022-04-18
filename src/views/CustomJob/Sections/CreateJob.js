import React, { useState } from "react";
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
import Budget from "@material-ui/icons/Money";
//import Photo from "@material-ui/icons/Photo";

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
    value: "Plumber",
  },
  {
    value: "Electrician",
  },
  {
    value: "Chef",
  },
  {
    value: "Gardener",
  },
  {
    value: "Others",
  },
];

export default function WorkerPage(props) {
  const { isAuthenticated, user } = useMoralis();
  var id;
  if (isAuthenticated) {
    id = user.id;
  }
  const [job, setJobData] = useState({
    title: "",
    budget: "",
    city: "",
    address: "",
    description: "",
    category: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const validate = (values) => {
    const errors = {};
    //const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.title) {
      errors.title = "Title is required!";
    } else if (values.title.length > 70) {
      errors.title = "Title cannot exceed more than 70 characters";
    }
    if (!values.budget) {
      errors.budget = "Budget is required!";
    }
    //  else if (!isNaN(values.budget)) {
    //   errors.budget = "Please enter numeric value!";
    // }
    // else if (!regex.test(values.email)) {
    //   errors.email = "This is not a valid email format!";
    // }
    if (!values.city) {
      errors.city = "City is required";
    }
    // else if (values.city != Text) {
    //   errors.city = "Invalid city";
    // }
    if (!values.address) {
      errors.address = "Address is required";
    }
    // else if (values.password.length < 4) {
    //   errors.password = "Password must be more than 4 characters";
    // }

    if (!values.description) {
      errors.description = "Description is required";
    } else if (values.description.length > 150) {
      errors.description = "Description cannot exceed more than 150 characters";
    }

    if (!currency) {
      errors.category = "category is required";
    }

    return errors;
  };

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    console.log(e);
    setJobData({ ...job, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    console.log(e.target.value);
    const { title, budget, city, address, description } = job;
    const clientId = id;
    const res = await fetch("/job/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        budget,
        city,
        address,
        description,
        clientId,
      }),
    });
    setFormErrors(validate(job));
    setIsSubmit(true);

    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(e.target.value);
      console.log("form valid");
      const { title, budget, city, address, description, category } = job;
      const res = await fetch("/job/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          budget,
          city,
          address,
          description,
          category,
        }),
      });

      const data = await res.json();

      if (data.status === 42 || !data) {
        window.alert("Invalid registeration");
        console.log("Invalid registeration");
      } else {
        // console.log(data);
        // history.push("/landing-page");
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
              <Card className={(classes[cardAnimaton], classes.card2)}>
                <form className={classes.form}>
                  <CardHeader color="green" className={classes.cardHeader}>
                    <h4> Post a new job today !</h4>
                  </CardHeader>
                  <p className={classes.divider}></p>
                  <GridContainer>
                    <GridItem xs={6} sm={6} md={12}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="title"
                        label="title"
                        name="title"
                        value={job.title}
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

                      <span style={{ color: "red" }}>{formErrors.title}</span>
                    </GridItem>

                    <GridItem xs={6} sm={6} md={6}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="budget"
                        label="Budget"
                        name="budget"
                        value={job.budget}
                        onChange={handleInputs}
                        InputProps={{
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Budget className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                        }}
                        variant="standard"
                      />

                      <span style={{ color: "red" }}>{formErrors.budget}</span>
                    </GridItem>
                    <GridItem xs={6} sm={6} md={6}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="city"
                        label="City"
                        name="city"
                        value={job.city}
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
                        margin="normal"
                        required
                        fullWidth
                        id="address"
                        label="Address"
                        name="address"
                        value={job.address}
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
                      <span style={{ color: "red" }}>{formErrors.address}</span>
                    </GridItem>

                    <GridItem xs={6} sm={6} md={12}>
                      <TextField
                        required
                        fullWidth
                        id="outlined-select-currency"
                        select
                        margin="normal"
                        label=" "
                        name="category"
                        value={currency}
                        helperText="Category"
                        onChange={handleChange}
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
                      <span style={{ color: "red" }}>
                        {formErrors.category}
                      </span>
                    </GridItem>

                    <GridItem>
                      <TextField
                        margin="normal"
                        fullWidth
                        required
                        multiline
                        rows={8}
                        textarea
                        id="description"
                        label="Job Description"
                        name="description"
                        value={job.description}
                        onChange={handleInputs}
                      />
                      <span style={{ color: "red" }}>
                        {formErrors.description}
                      </span>
                    </GridItem>

                    <GridItem>
                      <Button
                        color="black"
                        href="/customjobs-page"
                        onClick={postData}
                      >
                        Post job
                      </Button>
                    </GridItem>
                  </GridContainer>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
          {/* </Paper> */}
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
