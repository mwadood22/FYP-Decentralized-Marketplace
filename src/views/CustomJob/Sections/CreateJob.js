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
// import CardBody from "components/Card/CardBody.js";
// import CardHeader from "components/Card/CardHeader.js";
// import CardFooter from "components/Card/CardFooter.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
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
          <h2 className={classes.title}>Post a new job today !</h2>

          <GridContainer xs={12} sm={12} md={12}>
            <GridItem xs={12} sm={12} md={10}>
              {/* <GridItem xs={12} sm={12} md={12}> */}
              <Card className={(classes[cardAnimaton], classes.card)}>
                <form className={classes.form}>
                  <GridContainer>
                    <GridItem xs={6} sm={6} md={12}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="title"
                        label="Job Title"
                        variant="standard"
                      />
                    </GridItem>

                    <GridItem xs={6} sm={6} md={6}>
                      <TextField
                        required
                        fullWidth
                        variant="standard"
                        id="outlined-select-currency"
                        select
                        margin="normal"
                        label="Select"
                        value={currency}
                        onChange={handleChange}
                        helperText="Choose a category"
                      >
                        {currencies.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.value}
                          </MenuItem>
                        ))}
                      </TextField>
                    </GridItem>
                    <GridItem xs={6} sm={6} md={6}>
                      <TextField
                        required
                        fullWidth
                        variant="standard"
                        id="outlined-select-currency"
                        select
                        margin="normal"
                        label="Select"
                        value={currency}
                        onChange={handleChange}
                        helperText="city"
                      >
                        {currencies.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.value}
                          </MenuItem>
                        ))}
                      </TextField>
                    </GridItem>

                    <GridItem xs={6} sm={6} md={7}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="address"
                        label="Address"
                        variant="standard"
                      />
                    </GridItem>
                    <GridItem xs={6} sm={6} md={5}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="bidget"
                        label="Your Budget"
                        variant="standard"
                      />
                    </GridItem>
                    <GridItem>
                      <TextField
                        margin="normal"
                        fullWidth
                        required
                        multiline
                        rows={8}
                        textarea
                        id="detail"
                        label="Job Details"
                      />
                    </GridItem>
                    <GridItem>
                      <Button color="green" href="/dashboard-page">
                        Get started
                      </Button>
                    </GridItem>
                  </GridContainer>
                </form>
              </Card>
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
