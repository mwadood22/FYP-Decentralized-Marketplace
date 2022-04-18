/*eslint-disable*/
import React from "react";
//import DeleteIcon from "@material-ui/icons/Delete";
//import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import { useMoralis } from "react-moralis";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
//import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { People, Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import { useState, useEffect } from "react";
const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();

  const { isAuthenticated, logout, user } = useMoralis();
  var logoutButton, logoutButton1, signInButtons, postJobsReference;
  const [reference, setReference] = useState();

  const getWorker = async () => {
    try {
      // const id = await user.id;
      console.log(user.id);
      const res = await fetch(`/worker/moralis/${user.id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      if (data) {
        // console.log("WE HEREEE");
        setReference("/worker-dashboard");
        // reference = "/worker-dashboard";
      } else {
        setReference("/worker-page");
        // reference = "/worker-page";
      }

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      // history.push('/login');
    }
  };

  // console.log(user.attributes.username);
  if (isAuthenticated) {
    // console.log(user.attributes.username);
    // name = <p>{user.attributes.username}</p>;
    // getWorker(user.id);
    // const res = fetch(`/worker/moralis/${user.id}`, {
    //   method: "GET",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    // });
    // const data = res;
    // console.log(data);
    // if (data) {
    //   reference = "/worker-dashboard";
    // } else {
    //   reference = "/worker-page";
    // }
    //     becomeWorker = (
    //       <ListItem className={classes.listItem}>
    //         <Button
    //           color="transparent"
    //           href="/worker-dashboard"
    //           //target="_blank"
    //           className={classes.navLink}
    //         >
    //           Become a worker
    //         </Button>
    //       </ListItem>
    //     );
    //   } else {
    //     becomeWorker = (
    //       <ListItem className={classes.listItem}>
    //         <Button
    //           color="transparent"
    //           href="/worker-page"
    //           //target="_blank"
    //           className={classes.navLink}
    //         >
    //           Become a worker
    //         </Button>
    //       </ListItem>
    //     );
    //   }
    //   // getBidData(data);

    //   if (!res.status === 200) {
    //     const error = new Error(res.error);
    //     throw error;
    //   }
    // } catch (err) {
    //   console.log(err);
    //   // history.push('/login');
    // }
    signInButtons = (
      <>
        <ListItem className={classes.listItem}>
          <Link to={"/customjobs-page/" + user.id}>
            <Button
              color="transparent"
              // href="/customjobs-page"
              //target="_blank"
              className={classes.navLink}
            >
              Post Jobs
            </Button>
          </Link>
        </ListItem>
        {/* {becomeWorker} */}
        <ListItem className={classes.listItem}>
          <Button
            color="transparent"
            href={reference}
            //target="_blank"
            onClick={getWorker()}
            className={classes.navLink}
          >
            Become a worker
          </Button>
        </ListItem>
      </>
    );
    logoutButton = (
      <Link to="/profile-page" className={classes.dropdownLink}>
        Profile
      </Link>
    );
    logoutButton1 = (
      <Link
        to="/landing-page"
        onClick={logout}
        className={classes.dropdownLink}
      >
        Logout
      </Link>
    );
  } else {
    logoutButton = (
      <Link to="/login-page" className={classes.dropdownLink}>
        Login
      </Link>
    );
    logoutButton1 = (
      <Link to="/signup-page" className={classes.dropdownLink}>
        Sign-Up
      </Link>
    );
  }
  useEffect(() => {
    if (isAuthenticated) {
      getWorker();
    }
  }, []);
  return (
    <List className={classes.list}>
      {/*<ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          }
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              All components
            </Link>,
            <a
              href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          //href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> Download
        </Button>
        </ListItem>*/}
      {/* <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem> */}
      {/* <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem> */}
      {signInButtons}
      {/* {console.log(becomeWorker)} */}
      {/* {becomeWorker} */}
      {/* <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          href="/customjobs-page"
          //target="_blank"
          className={classes.navLink}
        >
          Post Jobs
        </Button>
      </ListItem> */}
      {/*<ListItem className={classes.listItem}>
        <Button
          color="transparent"
          href="/gigs-page"
          //target="_blank"
          className={classes.navLink}
        >
          Gigs
        </Button>
    </ListItem>*/}
      {/*<ListItem className={classes.listItem}>
        <Button
          color="transparent"
          href="/findjobs-page"
          //target="_blank"
          className={classes.navLink}
        >
          Find jobs
        </Button>
  </ListItem>*/}
      {/* <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          href="/worker-page"
          //target="_blank"
          className={classes.navLink}
        >
          Become a worker
        </Button>
      </ListItem> */}

      <ListItem className={classes.listItem}>
        {/* <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        > */}
        <CustomDropdown
          noLiPadding
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={People}
          dropdownList={[
            // <Link to="/login-page" className={classes.dropdownLink}>
            //   Login
            // </Link>,
            // <Link to="/signup-page" className={classes.dropdownLink}>
            //   Sign-Up
            // </Link>,
            // <Link to="/profile-page" className={classes.dropdownLink}>
            //   Profile
            // </Link>,
            logoutButton,
            logoutButton1,
          ]}
        />
        {/* </Tooltip> */}
      </ListItem>
    </List>
  );
}
