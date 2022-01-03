import { cardTitle, title } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const teamStyle = {
  serviceCardImg: {
    position: "relative",
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  cardLayout: {
    height: "350px",
    "&:hover,&:focus": {
      color: "#FFFFFF",
      backgroundColor: "gray",
      opacity: "70%",
      boxShadow:
        "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)",
    },
  },
  serviceCardText: {
    position: "absolute",
    color: "white",
    fontSize: "15px",
    marginTop: "2rem",
    marginLeft: "2rem",
    textDecoration: "none",
    textAlign: "left",
    fontWeight: "700",
    fontFamily: `Macan,"Helvetica Neue",Helvetica,Arial,sans-serif`,
    //fontFamily: `"Roboto Slab", "Times New Roman", serif`,
  },
  serviceCardHeading: {
    position: "absolute",
    color: "white",
    fontSize: "20px",
    marginTop: "4.5rem",
    marginLeft: "2rem",
    textDecoration: "none",
    fontWeight: "700",
    fontFamily: `"Roboto Slab", "Times New Roman", serif`,
  },
  marginClass: {
    marginBottom: "40px",
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
    padding: "60px 0",
    textAlign: "center",
    marginLeft: "30px",
    marginRight: "30px",
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
  },
  title2: {
    ...title,
    marginBottom: "1rem",
    marginTop: "0px",
    marginLeft: "100px",
    minHeight: "32px",
    textDecoration: "none",
    fontFamily: '"Macan","Helvetica Neue","Helvetica","Arial",sans-serif',
    fontWeight: "700",
    fontSize: "35px",
    textAlign: "left",
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  cardTitle: {
    ...cardTitle,
    textAlign: "left",
    fontSize: "15px",
  },

  cardTitle2: {
    ...cardTitle,
    textAlign: "left",
    fontSize: "30px",
    fontWeight: "700",
    fontFamily: '"Macan","Helvetica Neue","Helvetica","Arial",sans-serif',
  },

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
    textAlign: "left",
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
  sectionguide: {
    marginLeft: "250px",
    marginRight: "100px",
  },
  card: {
    width: "600px",
    height: "400px",
    "&:hover,&:focus": {
      color: "#FFFFFF",
      backgroundColor: "gray",
      opacity: "70%",
      boxShadow:
        "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)",
    },
  },
};

export default teamStyle;
