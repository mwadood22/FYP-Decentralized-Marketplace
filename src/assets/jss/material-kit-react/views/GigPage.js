import { container, title } from "assets/jss/material-kit-react.js";

const landingPageStyle = {
  carouselBack: {
    height: "570px",
    zIndex: "1",
  },
  carouselOptions: {
    position: "absolute",
    zIndex: "2",
    marginTop: "150px",
    marginLeft: "150px",
  },
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container,
  },

  background: {
    height: "500px",
    backgroundColor: "#008060",
  },
  btn: {
    backgroundColor: "#008060",
  },

  searchBtn: {
    marginTop: "27.3px",
    marginLeft: "10px",
  },
  searchInput: {
    width: "400px",
    background: "white",
    borderRadius: "4px",
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none",
  },
  subtitle: {
    fontSize: "1.313rem",
    fontWeight: "500px",
    maxWidth: "500px",
    margin: "10px auto 0",
  },
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
  getStarted: {
    marginTop: "40px",
  },
};

export default landingPageStyle;
