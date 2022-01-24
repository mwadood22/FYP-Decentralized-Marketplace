import { container, title } from "assets/jss/material-kit-react.js";

import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const profilePageStyle = {
  hr: {
    backgroundColor: "#5E8C5D",
    border: "1px solid #5E8C5D",
    borderRadius: "5px",
    marginBottom: "20px",
  },
  desc: {
    padding: "5px",
  },
  profilePill: {
    width: "600px",
    margin: "auto",
    marginTop: "60px",
  },
  jobCard: {
    display: "inline",
    // border: "1.5px gray",
    // borderStyle: "solid",
    // borderRadius: "3px",
    // margin: "10px 5px",
    padding: "20px",
  },
  contentContainer: {
    width: "700px",
    margin: "auto",
    marginTop: "40px",
    marginBottom: "40px",
  },
  container,
  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)",
    },
  },
  background: {
    height: "260px",
    backgroundColor: "#008060",
  },
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: "#999",
    textAlign: "center !important",
  },
  name: {
    marginTop: "-80px",
  },
  ...imagesStyle,
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999",
  },
  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "center",
  },
};

export default profilePageStyle;
