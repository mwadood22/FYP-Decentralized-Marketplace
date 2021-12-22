import {
  cardTitle,
  title,
  infoCardHeader,
} from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const teamStyle = {
  marginClass: {
    marginBottom: "40px",
    image: 'url("assets/img/faces/avatar.jpg")',
  },
  svgIcon: {
    width: "20%",
    margin: "0 auto",
    marginTop: "20px",
  },
  infoCardHeader,
  cardBackground: {},
  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -60%, 0)",
    },
  },
  section: {
    padding: "70px 0",
    textAlign: "center",
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  cardTitle,
  cardMargin: {
    ...cardTitle,
    marginBottom: "60px",
  },
  smallTitle: {
    color: "#6c757d",
  },
  description: {
    marginTop: "20px",
    color: "#999",
  },
  justifyCenter: {
    justifyContent: "center !important",
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
  margin5: {
    margin: "5px",
  },
};

export default teamStyle;
