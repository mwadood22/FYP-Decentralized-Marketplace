import React, { useState } from "react";

// import { useHistory } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
//import ContactPhone from "@material-ui/icons/ContactPhone";
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
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

//import image from "assets/img/bg7.jpg";
// /Blockchain code
// import {Container,Heading} from '@chakra-ui/layout';
import { useMoralis } from "react-moralis";
// import { useState } from "react";
import { ErrorBox } from "components/errorbox/Error";
////
const useStyles = makeStyles(styles);
export default function SignupPage(props) {
  // const history = useHistory();
  //getting variables from form

  // const [user, setUser] = useState({
  //   username: "",
  //   password: "",
  //   email: "",
  // });
  // let name, value;
  // const handleInputs = (e) => {
  //   name = e.target.name;
  //   value = e.target.value;
  //   console.log(e);
  //   setUser({ ...user, [name]: value });
  // };
  // const postData = async (e) => {
  //   e.preventDefault();
  //   console.log(e.target.value);
  //   const { username, password, email } = user;
  //   const res = await fetch("/gig/create", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       username,
  //       email,
  //       password,
  //     }),
  //   });

  //   const data = await res.json();

  //   if (data.status === 42 || !data) {
  //     window.alert("Invalid registeration");
  //     console.log("Invalid registeration");
  //   } else {
  //     // console.log(data);
  //     // history.push("/landing-page");
  //   }
  // };
  //

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  ////blockchain
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const { authenticate, isAuthenticating, authError, signup } = useMoralis();
  // cloud function

  // const { fetch: callEmailCloudFunction } = useMoralisCloudFunction(
  //   "sendWelcomeEmail",
  //   {
  //     email: email,
  //     name: username,
  //   },
  //   { autoFetch: false }
  // );
  //Send welcome email to user
  // const sendWelcomeEmail = async () => {
  //   //pick the user email from state
  //   await Moralis.User.requestEmailVerification(email);
  //   callEmailCloudFunction();
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
      <div
        className={classes.pageHeader}
        style={{
          backgroundColor: "#008060",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="green" className={classes.cardHeader}>
                    <h4>Sign-Up</h4>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={"fab fa-facebook"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={"fab fa-google-plus-g"} />
                      </Button>
                    </div>
                  </CardHeader>
                  <p className={classes.divider}></p>
                  {authError && (
                    <ErrorBox
                      title="Authentication has failed!"
                      message={authError.message}
                    />
                  )}
                  <Button
                    className={classes.metamaskButton}
                    isLoading={isAuthenticating}
                    onClick={() => authenticate()}
                  >
                    Authentication with MetaMask
                  </Button>
                  <p className={classes.divider}></p>
                  <CardBody>
                    <CustomInput
                      //className={classes.inlineBlock}
                      labelText="User Name"
                      id="first"
                      name="username"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      value={username}
                      onChange={(event) =>
                        setUsername(event.currentTarget.value)
                      }
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <CustomInput
                      labelText="Email"
                      id="email"
                      name="email"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      value={email}
                      onChange={(event) => setEmail(event.currentTarget.value)}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    {/* <input
                      type="email"
                      name="email"
                      id="email"
                      value={user.email}
                      onChange={handleInputs}
                      placeholder="Enter email"
                    ></input> */}
                    {/* </CustomInput> */}
                    <CustomInput
                      labelText="Password"
                      id="pass"
                      name="password"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      value={password}
                      onChange={(event) =>
                        setPassword(event.currentTarget.value)
                      }
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
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button
                      color="black"
                      //href="/landing-page"
                      onClick={() => signup(username, password, email)}
                    >
                      Get started
                    </Button>
                    {/* <Button
                      color="black"
                      //href="/landing-page"
                      onClick={() => sendWelcomeEmail()}
                    >
                      Send Welcome Email!
                    </Button> */}
                  </CardFooter>
                  <div className={classes.endings}>
                    <h4 className={classes.new}>Already have an account?</h4>
                    {/* <h4> */}
                    <Button simple color="green" size="lg">
                      Login
                    </Button>
                    {/* </h4> */}
                  </div>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
