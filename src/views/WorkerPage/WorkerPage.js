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
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";

import styles from "assets/jss/material-kit-react/views/workerpage.js";

// import image from "assets/img/bg7.jpg";
import helper from "assets/img/services/helper.jpg";

const useStyles = makeStyles(styles);
const currencies = [
  {
    value: "Plumber",
  },
  {
    value: "Electrician",
  },
  {
    value: "Helper",
  },
  {
    value: "Gardener",
  },
  {
    value: "Chef",
  },
  {
    value: "Driver",
  },
  {
    value: "Other",
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
  const styles = {
    paperContainer: {
      //   backgroundImage: `url(${image})`,
      backgroundColor: "#F6FFF7",
      paddingTop: "50px",
      paddingBottom: "50px",
      paddingLeft: "20px",
    },
  };
  return (
    <div>
      <Header
        absolute
        color="black"
        brand="MARKAZ"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundColor: "#008060",
        }}
      >
        <div className={classes.container}>
          <Paper elevation={3} style={styles.paperContainer}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <Card className={classes[cardAnimaton]}>
                  <form className={classes.form}>
                    <CardHeader color="green" className={classes.cardHeader}>
                      <h4>A step away from becoming a worker!</h4>
                    </CardHeader>
                    <p className={classes.divider}></p>
                    <CardBody>
                      {/* <CustomInput
                      labelText="City..."
                      id="city"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "city",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    /> */}

                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="address"
                        label="Address"
                        variant="standard"
                      />

                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="city"
                        label="City"
                        variant="standard"
                      />

                      <TextField
                        margin="normal"
                        fullWidth
                        multiline
                        id="desc"
                        label="Description"
                        variant="standard"
                      />

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
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button color="black" size="lg" href="/signup-page">
                        Submit
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <img
                  src={helper}
                  alt="..."
                  className={
                    classes.imgRounded +
                    " " +
                    classes.imgFluid +
                    " " +
                    classes.imgClass
                  }
                />
              </GridItem>
            </GridContainer>
          </Paper>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
