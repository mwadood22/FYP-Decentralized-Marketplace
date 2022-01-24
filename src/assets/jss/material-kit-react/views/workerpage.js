import { container } from "assets/jss/material-kit-react.js";
import { title } from "assets/jss/material-kit-react.js";
// import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

const workerPageStyle = {
  card: {
    padding: "20px",
  },
  card2: {
    padding: "20px",
    marginLeft: "250px",
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
