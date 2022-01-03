import { container } from "assets/jss/material-kit-react.js";
import { title } from "assets/jss/material-kit-react.js";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

const workerPageStyle = {
  p1: {
    marginTop: "0.625rem",
    minHeight: "auto",
    fontFamily: '"Roboto Slab", "Times New Roman", serif',
    fontWeight: "700",
    marginBottom: "0.75rem",
    textDecoration: "none",
  },
  p: {
    fontStyle: "italic",
    fontSize: "1.0625rem",
    lineHeight: "1.55em",
    display: "block",
    // fontSize: "0.83em",
    marginBlockStart: "0.67em",
    marginBlockEnd: "0.67em",
    marginRight: "4em",
    marginLeft: "4em",
    // marginInlineEtart: "0px",
    // marginInlineEnd: "0px",
  },
  sliderText: {
    paddingLeft: "5px",
    paddingRight: "5px",
    flex: "1 1 auto",
    padding: "0.9375rem 1.875rem",
    webkitBoxFlex: "1",
  },
  sliderImg: {
    margin: "10px auto 0",
    padding: "0",
    overflow: "hidden",
    maxWidth: "100px",
    boxShadow:
      "0 16px 38px -12px rgb(0 0 0 / 56%), 0 4px 25px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%)",
    maxHeight: "100px",
    borderRadius: "50%",
  },
  sliderContent: {
    // textAlign: "center",
    color: "rgba(0, 0, 0, 0.87)",
    width: "100%",
    border: "0",
    display: "flex",
    position: "relative",
    fontSize: ".875rem",
    minWidth: "0",
    wordWrap: "break-word",
    flexDirection: "column",
  },
  workerImg: {
    width: "50%",
  },
  data: {
    marginLeft: "4px",
  },
  reviews: {
    background: "radial-gradient(ellipse at center,#f5f7fa 0,#f5f7fa 100%)",
    backgroundSize: "550% 450%",
    backgroundColor: "#343434",
    height: "230px",
    textAlign: "center",
    justifyContent: "center",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    // color: "white",
  },
  ...imagesStyles,
  name: {
    marginLeft: "80px",
    fontSize: "20px",
    // marginTop: "100px",
  },
  content: {
    display: "flex",
  },
  card: {
    background: "radial-gradient(ellipse at center,#bbdbbe 0,#deebdd 100%)",

    padding: "20px",
  },
  textSection: {
    //margin: "auto",
    color: "green",
    textAlign: "center",
    marginTop: "150px",
  },

  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "1px",
    minHeight: "32px",
    textDecoration: "none",
    fontFamily: '"Macan","Helvetica Neue","Helvetica","Arial",sans-serif',
    fontWeight: "700",
    fontSize: "35px",
    //textAlign: "center",
  },

  imgClass: {
    // maxHeight: "90%",
    width: "100%",
    marginTop: "40px",
    paddingRight: "20px",
    // verticalAlign: "baseline",
  },
  textFields: {
    marginBottom: "20px",
  },
  background: {
    backgroundColor: "#e5e5e5",
  },
  container: {
    ...container,
    zIndex: "2",
    position: "relative",
    paddingTop: "20vh",
    color: "#FFFFFF",
    paddingBottom: "100px",
  },
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)",
  },
  pageHeader: {
    minHeight: "100vh",
    height: "auto",
    display: "inherit",
    position: "relative",
    margin: "0",
    padding: "0",
    border: "0",
    alignItems: "center",
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)",
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""',
      backgroundColor: "white",
    },
    "& footer li a,& footer li a:hover,& footer li a:active": {
      color: "#FFFFFF",
    },
    "& footer": {
      position: "absolute",
      bottom: "0",
      width: "100%",
    },
  },
  form: {
    margin: "0",
  },
  cardHeader: {
    width: "auto",
    textAlign: "center",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "-40px",
    padding: "20px 0",
    marginBottom: "15px",
  },
  socialIcons: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
  },
  divider: {
    marginTop: "30px",
    marginBottom: "0px",
    textAlign: "center",
  },
  cardFooter: {
    paddingTop: "0rem",
    border: "0",
    borderRadius: "6px",
    justifyContent: "center !important",
  },
  socialLine: {
    marginTop: "1rem",
    textAlign: "center",
    padding: "0",
  },
  inputIconsColor: {
    color: "#495057",
  },
};

export default workerPageStyle;
