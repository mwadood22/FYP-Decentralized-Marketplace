import React, { useEffect, useState } from "react";
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
  //getting variables from form
  const [jobs, setUserData] = useState({
    _id: "",
    title: "",
    budget: "",
    city: "",
    address: "",
    description: "",
    category: "",
  });
  const { ...temp } = props;
  const jobId = temp.match.params.jobId;
  const [job, setJob] = useState({
    _id: "",
    title: "",
    budget: "",
    city: "",
    address: "",
    description: "",
    category: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    console.log(e);
    setJob({ ...job, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { title, budget, city, address, description, category } = job;
    const _id = jobs._id;
    console.log(_id);
    const res = await fetch("/job/", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id,
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
      console.log(data);
      history.push("/customjobs-page");
    }
  };
  const callAboutPage = async () => {
    try {
      const res = await fetch(`/job/${jobId}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      setUserData(data);
      setJob(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      // history.push('/login');
    }
  };
  useEffect(() => {
    callAboutPage();
  }, []);
  //

  // const [currency, setCurrency] = React.useState("None");

  // const handleChange = (event) => {
  //   setCurrency(event.target.value);
  // };
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  //   const gigId = rest.match.params.gigId;
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
                    <h4>Create a new Job today !</h4>
                  </CardHeader>
                  <p className={classes.divider}></p>
                  <GridContainer>
                    <GridItem xs={6} sm={6} md={12}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="title"
                        value={job.title}
                        onChange={handleInputs}
                        id="title"
                        label="Job Title"
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
                        name="budget"
                        value={job.budget}
                        onChange={handleInputs}
                        id="budget"
                        label="Budget"
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
                    </GridItem>
                    <GridItem xs={6} sm={6} md={6}>
                      <TextField
                        required
                        fullWidth
                        id="outlined-select-currency"
                        select
                        margin="normal"
                        label=" "
                        name="categeory"
                        value={job.category}
                        onChange={handleInputs}
                        helperText="category"
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
                        name="city"
                        value={job.city}
                        onChange={handleInputs}
                        required
                        textarea
                        id="desc"
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
                      />
                    </GridItem>

                    <GridItem>
                      <TextField
                        margin="normal"
                        fullWidth
                        name="address"
                        value={job.address}
                        onChange={handleInputs}
                        required
                        textarea
                        id="desc"
                        label="Address"
                        InputProps={{
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Language className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </GridItem>

                    <GridItem>
                      <TextField
                        margin="normal"
                        fullWidth
                        name="description"
                        value={job.description}
                        onChange={handleInputs}
                        required
                        multiline
                        rows={8}
                        textarea
                        id="desc"
                        label="Job Description"
                      />
                    </GridItem>

                    <GridItem>
                      <Button
                        color="black"
                        href="/customjobs-page"
                        // disabled={gig.title === "" || gig.budget === ""}
                        onClick={postData}
                      >
                        Update Job
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
