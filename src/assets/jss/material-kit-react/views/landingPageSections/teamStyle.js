import { cardTitle, title } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const teamStyle = {
  gigImg: {
    height: "150%",
  },
  serviceCardImg: {
    position: "relative",
    height: "100%",
    width: "100%",
  },
  cardLayout: {
    height: "350px",
  },
  serviceCardText: {
    position: "absolute",
    color: "#3C4858",
    fontSize: "10px",
    marginTop: "2rem",
    marginLeft: "2rem",
    textDecoration: "none",
    fontWeight: "700",
    fontFamily: `"Roboto Slab", "Times New Roman", serif`,
  },
  serviceCardHeading: {
    position: "absolute",
    color: "#3C4858",
    fontSize: "20px",
    marginTop: "4.5rem",
    marginLeft: "2rem",
    textDecoration: "none",
    fontWeight: "700",
    fontFamily: `"Roboto Slab", "Times New Roman", serif`,
  },
  marginClass: {
    marginBottom: "40px",
    image: 'url("assets/img/faces/avatar.jpg")',
  },
  gigCard: {
    width: "75%",
    height: "70%",
  },
  svgIcon: {
    width: "20%",
    margin: "0 auto",
    marginTop: "20px",
  },
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
