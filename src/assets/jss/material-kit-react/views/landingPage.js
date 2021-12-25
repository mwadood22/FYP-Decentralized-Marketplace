import { container, title } from "assets/jss/material-kit-react.js";

const landingPageStyle = {
  carouselBack: {
    zIndex: "1",
  },
  carouselOptions: {
    position: "absolute",
    zIndex: "2",
    marginTop: "100px",
  },
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container,
  },
  searchBtn: {
    marginTop: "20px",
  },
  searchInput: {
    width: "400px",
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
